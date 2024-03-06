'use client';

import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import styles from './Ticker.module.css';
import clsx from 'clsx';

interface ITickerProps {
  children: ReactNode;
  href: string;
}

export const Ticker = function Ticker({ children, href }: ITickerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const onResize = useCallback(() => {
    if (typeof window === 'undefined') return;
    const viewportWidth = window.innerWidth;
    const tickerWidth = ref.current?.offsetWidth || 0;
    setIsAnimating(tickerWidth > viewportWidth);
  }, [ref]);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    onResize();
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  return (
    <a
      href={href}
      target="_blank"
      className={clsx(styles.container, { [styles.animate]: isAnimating })}
    >
      <div ref={ref} className={styles.ticker}>
        {children}
      </div>
    </a>
  );
};
