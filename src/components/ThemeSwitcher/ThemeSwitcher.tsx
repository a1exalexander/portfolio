'use client';
import { useTheme, Theme } from '@/context';
import { useState, useEffect } from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import styles from './ThemeSwitcher.module.css';

const themes: { value: Theme; label: string; icon: React.ReactNode }[] = [
  { value: 'light', label: 'Light', icon: <IoSunnyOutline /> },
  { value: 'dark', label: 'Dark', icon: <IoMoonOutline /> },
  { value: 'system', label: 'System', icon: <HiOutlineComputerDesktop /> },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={styles.container}>
        <div className={styles.tabs}>
          {themes.map((t) => (
            <button
              key={t.value}
              className={styles.tab}
              aria-label={t.label}
              disabled
            >
              <span className={styles.icon}>{t.icon}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.tabs} role="tablist" aria-label="Theme selection">
        {themes.map((t) => (
          <button
            key={t.value}
            role="tab"
            aria-selected={theme === t.value}
            aria-label={`${t.label} theme`}
            className={`${styles.tab} ${theme === t.value ? styles.active : ''}`}
            onClick={() => setTheme(t.value)}
          >
            <span className={styles.icon}>{t.icon}</span>
          </button>
        ))}
        <span
          className={styles.indicator}
          style={{
            transform: `translateX(${themes.findIndex((t) => t.value === theme) * 100}%)`,
          }}
        />
      </div>
    </div>
  );
}
