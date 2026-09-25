export type ContactData = {
  contact: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactData, string>>;

export type ParsedContact = { email: string } | { telegram: string };

export const CONTACT_LIMITS = {
  contact: 254,
  message: 1000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Telegram username: 5–32 alphanumeric/underscore chars, with optional @ or t.me/ prefix
const TELEGRAM_RE = /^(?:@|(?:https?:\/\/)?t\.me\/)?([a-zA-Z0-9_]{5,32})$/;

// Single free-form contact field — accepts either an email or a Telegram handle.
export function parseContact(raw: string): ParsedContact | null {
  const value = raw.trim();
  if (EMAIL_RE.test(value)) return { email: value };
  const tg = value.match(TELEGRAM_RE);
  if (tg) return { telegram: `@${tg[1]}` };
  return null;
}

export function validateContactForm(raw: Partial<ContactData>): ContactErrors {
  const errors: ContactErrors = {};
  const contact = (raw.contact ?? "").trim();
  const message = (raw.message ?? "").trim();

  if (!contact) {
    errors.contact = "Leave an email or Telegram so I can reply";
  } else if (contact.length > CONTACT_LIMITS.contact) {
    errors.contact = `Max ${CONTACT_LIMITS.contact} characters`;
  } else if (!parseContact(contact)) {
    errors.contact = "Use an email or a Telegram @username";
  }

  if (message.length > CONTACT_LIMITS.message) {
    errors.message = `Max ${CONTACT_LIMITS.message} characters`;
  }

  return errors;
}

export function hasContactErrors(errors: ContactErrors): boolean {
  return Object.keys(errors).length > 0;
}
