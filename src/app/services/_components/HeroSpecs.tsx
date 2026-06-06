"use client";

import { useReducedMotion } from "framer-motion";
import { useState } from "react";
import styles from "../page.module.css";
import { Typewriter } from "./Typewriter";

const CMD = "$ ./location show";
const VAL = "Кременчук, Україна 🇺🇦 · працюю віддалено";

// heroCmd: delay=1500 + 35chars × 42ms ≈ 2970ms — start specs right after
const START_DELAY = 3100;

interface Props {
  onDone?: () => void;
}

export const HeroSpecs = ({ onDone }: Props) => {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);

  if (reduced) {
    return (
      <div className={`${styles.boot} ${styles.heroSpecs}`}>
        <span className={`${styles.bootLine} ${styles.boot_cmd}`}>{CMD}</span>
        <span className={`${styles.bootLine} ${styles.boot_ok}`}>
          {VAL}
          <span className={styles.caret} aria-hidden="true" />
        </span>
      </div>
    );
  }

  return (
    <div className={`${styles.boot} ${styles.heroSpecs}`}>
      <span className={`${styles.bootLine} ${styles.boot_cmd}`}>
        <Typewriter
          text={CMD}
          delay={START_DELAY}
          speed={14}
          cursor={false}
          onDone={() => setStep(1)}
        />
      </span>
      {step >= 1 && (
        <span className={`${styles.bootLine} ${styles.boot_ok}`}>
          <Typewriter text={VAL} speed={14} cursor onDone={onDone} />
        </span>
      )}
    </div>
  );
};
