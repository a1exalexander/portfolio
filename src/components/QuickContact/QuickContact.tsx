'use client';

import { FormEvent, useState } from 'react';
import { usePostHog } from 'posthog-js/react';
import { CONTACT_LIMITS, validateContactForm } from '@/lib/contact-validation';
import styles from './QuickContact.module.css';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export const QuickContact = function QuickContact() {
  const posthog = usePostHog();
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;

    const errors = validateContactForm({ contact, message });
    const firstError = errors.contact ?? errors.message;
    if (firstError) {
      setError(firstError);
      return;
    }

    setStatus('sending');
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact, message, website }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus('sent');
      posthog.capture('quick_contact_submitted', { has_message: Boolean(message.trim()) });
    } catch {
      setStatus('error');
      setError('Something went wrong. Try again or just email me.');
      posthog.capture('quick_contact_error');
    }
  };

  if (status === 'sent') {
    return (
      <div className={styles.container}>
        <p className={styles.sent}>Got it, thanks! I&apos;ll get back to you soon ✌️</p>
      </div>
    );
  }

  return (
    <form className={styles.container} onSubmit={onSubmit} noValidate>
      <p className={styles.title}>
        Want to build something or need a hand? <span className={styles.hint}>Drop your contact, I&apos;ll write first.</span>
      </p>
      <div className={styles.row}>
        <input
          className={styles.input}
          type="text"
          name="contact"
          autoComplete="email"
          aria-label="Your email or Telegram"
          placeholder="Email or @telegram"
          maxLength={CONTACT_LIMITS.contact}
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
            if (error) setError('');
          }}
        />
        <input
          className={`${styles.input} ${styles.message}`}
          type="text"
          name="message"
          aria-label="Message (optional)"
          placeholder="What's on your mind? (optional)"
          maxLength={CONTACT_LIMITS.message}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          className={styles.honeypot}
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <button className={styles.button} type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send →'}
        </button>
      </div>
      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}
    </form>
  );
};
