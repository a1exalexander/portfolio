'use client';

import { useEffect, useState } from 'react';
import { usePostHog } from 'posthog-js/react';
import styles from './LikeButton.module.css';

interface LikeButtonProps {
  slug: string;
}

export function LikeButton({ slug }: LikeButtonProps) {
  const posthog = usePostHog();
  const [likes, setLikes] = useState<number | null>(null);
  const [hasLiked, setHasLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const liked = localStorage.getItem(`liked:${slug}`);
    if (liked) {
      setHasLiked(true);
    }

    fetch(`/api/likes?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => setLikes(data.likes))
      .catch(() => setLikes(0));
  }, [slug]);

  const handleLike = async () => {
    if (hasLiked) return;

    setIsAnimating(true);
    setHasLiked(true);
    setLikes((prev) => (prev ?? 0) + 1);
    localStorage.setItem(`liked:${slug}`, 'true');

    posthog.capture('article_liked', {
      slug,
      $current_url: window.location.href,
    });

    try {
      await fetch('/api/likes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      });
    } catch {
      // Optimistic update already done
    }

    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <button
      className={`${styles.button} ${hasLiked ? styles.liked : ''} ${isAnimating ? styles.animating : ''}`}
      onClick={handleLike}
      disabled={hasLiked}
      aria-label={hasLiked ? 'Liked' : 'Like this article'}
    >
      <svg
        className={styles.heart}
        viewBox="0 0 24 24"
        fill={hasLiked ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
      <span className={styles.count}>{likes ?? '-'}</span>
    </button>
  );
}
