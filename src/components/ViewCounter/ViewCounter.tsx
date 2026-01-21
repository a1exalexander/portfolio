'use client';

import { useEffect, useState } from 'react';
import styles from './ViewCounter.module.css';

interface ViewCounterProps {
  slug: string;
}

export function ViewCounter({ slug }: ViewCounterProps) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const hasViewed = sessionStorage.getItem(`viewed:${slug}`);

    if (!hasViewed) {
      fetch('/api/views', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      })
        .then((res) => res.json())
        .then((data) => {
          setViews(data.views);
          sessionStorage.setItem(`viewed:${slug}`, 'true');
        })
        .catch(() => {
          fetch(`/api/views?slug=${slug}`)
            .then((res) => res.json())
            .then((data) => setViews(data.views));
        });
    } else {
      fetch(`/api/views?slug=${slug}`)
        .then((res) => res.json())
        .then((data) => setViews(data.views))
        .catch(() => setViews(0));
    }
  }, [slug]);

  return (
    <span className={styles.counter}>
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      <span>{views ?? '-'}</span>
    </span>
  );
}
