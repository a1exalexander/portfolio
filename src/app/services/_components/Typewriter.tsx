"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "../page.module.css";

interface TypewriterProps {
  text: string;
  /** ms before typing starts */
  delay?: number;
  /** ms per character */
  speed?: number;
  className?: string;
  /** show a blinking block caret at the end */
  cursor?: boolean;
  /** start only when the element scrolls into view */
  inView?: boolean;
  /** fired once the full string is typed */
  onDone?: () => void;
}

export const Typewriter = ({
  text,
  delay = 0,
  speed = 38,
  className,
  cursor = true,
  inView = false,
  onDone,
}: TypewriterProps) => {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(!inView);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView]);

  useEffect(() => {
    if (!visible) return;
    if (reduced) {
      setCount(text.length);
      onDone?.();
      return;
    }
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) {
          clearInterval(interval);
          onDone?.();
        }
      }, speed);
    }, delay);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
    // onDone intentionally excluded — callers pass stable refs / inline fns
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, text, delay, speed, reduced]);

  return (
    <span className={className} ref={ref}>
      {text.slice(0, count)}
      {cursor && <span className={styles.caret} aria-hidden="true" />}
    </span>
  );
};
