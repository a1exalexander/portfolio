'use client';
import { useTheme } from '@/context';
import { useState, useEffect } from 'react';
import { IoSunny, IoMoon } from 'react-icons/io5';
import styles from './ThemeSwitcher.module.css';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const [ready, setReady] = useState(false);

  // Enable motion only after the stored theme has been applied,
  // so the thumb doesn't animate on first load.
  useEffect(() => {
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => setReady(true));
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark theme"
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={styles.switch}
      data-state={theme}
      data-ready={ready}
      onClick={toggleTheme}
    >
      <span className={styles.thumb} aria-hidden="true" />
      <span className={`${styles.icon} ${styles.sun}`} aria-hidden="true">
        <IoSunny />
      </span>
      <span className={`${styles.icon} ${styles.moon}`} aria-hidden="true">
        <IoMoon />
      </span>
    </button>
  );
}
