"use client";

import { useReducedMotion } from "framer-motion";
import { useState } from "react";
import styles from "../page.module.css";
import { Typewriter } from "./Typewriter";

interface BootLine {
  text: string;
  kind: "cmd" | "ok";
}

const LINES: BootLine[] = [
  { text: "$ ./portfolio --section services", kind: "cmd" },
  { text: "[ok] profile loaded: Oleksandr Ratushnyi", kind: "ok" },
  { text: "[ok] role: JS / TS engineer · full-stack", kind: "ok" },
  { text: "[ok] online since 2018 · SaaS · fintech · crypto · wealth", kind: "ok" },
];

const Line = ({ line, done }: { line: BootLine; done?: boolean }) => (
  <span className={`${styles.bootLine} ${styles[`boot_${line.kind}`]}`}>
    {done ? line.text : <Typewriter text={line.text} cursor={false} speed={14} />}
  </span>
);

// Typed boot sequence shown inside the hero terminal. Purely decorative —
// aria-hidden, and printed all at once under reduced motion.
export const BootLines = () => {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  if (reduced) {
    return (
      <div className={styles.boot} aria-hidden="true">
        {LINES.map((l) => (
          <Line key={l.text} line={l} done />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.boot} aria-hidden="true">
      {LINES.map((l, i) => {
        if (i < index) return <Line key={l.text} line={l} done />;
        if (i === index) {
          return (
            <TypingLine
              key={l.text}
              line={l}
              onDone={() => setIndex((n) => n + 1)}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

const TypingLine = ({ line, onDone }: { line: BootLine; onDone: () => void }) => (
  <span className={`${styles.bootLine} ${styles[`boot_${line.kind}`]}`}>
    <Typewriter text={line.text} cursor={false} speed={14} delay={120} onDone={onDone} />
  </span>
);
