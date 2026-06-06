"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { MagnetButton } from "../../mentor/_components/MagnetButton";
import styles from "../page.module.css";
import { BootLines } from "./BootLines";
import { HeroSpecs } from "./HeroSpecs";
import { Typewriter } from "./Typewriter";
import { IconArrowR } from "./icons";

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroBody() {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);

  if (reduced) {
    return (
      <div className={styles.termBody}>
        <BootLines />
        <div className={styles.heroCmd}>$ ./services.sh --start --format=md</div>
        <h1 className={styles.hHero}>
          <span className={styles.mdHash} aria-hidden="true">#</span>{" "}
          Розробка сайтів і веб-застосунків.
        </h1>
        <HeroSpecs />
        <div className={styles.ctaRow}>
          <MagnetButton
            href="#contact"
            className={`${styles.btn} ${styles.btnPrimary} ${styles.btnMagnet}`}
          >
            Почати проєкт <IconArrowR className={styles.arr} />
          </MagnetButton>
          <a className={`${styles.btn} ${styles.btnGhost}`} href="#services">
            Дивитись послуги
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.termBody}>
      <BootLines />
      <div className={styles.heroCmd}>
        <Typewriter
          text="$ ./services.sh --start --format=md"
          delay={1500}
          speed={42}
          cursor={false}
          onDone={() => setStep((s) => Math.max(s, 1))}
        />
      </div>
      <motion.h1
        className={styles.hHero}
        aria-hidden="true"
        initial={{ opacity: 0, y: 10 }}
        animate={step >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        <span className={styles.mdHash} aria-hidden="true">#</span>{" "}
        Розробка сайтів і веб-застосунків.
      </motion.h1>
      <HeroSpecs onDone={() => setStep((s) => Math.max(s, 2))} />
      {/* Always in DOM for SSR/SEO — opacity controlled by animation */}
      <motion.div
        className={styles.ctaRow}
        initial={{ opacity: 0, y: 10 }}
        animate={step >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.45, delay: 0.05, ease: EASE }}
      >
        <MagnetButton
          href="#contact"
          className={`${styles.btn} ${styles.btnPrimary} ${styles.btnMagnet}`}
        >
          Почати проєкт <IconArrowR className={styles.arr} />
        </MagnetButton>
        <a className={`${styles.btn} ${styles.btnGhost}`} href="#services">
          Дивитись послуги
        </a>
      </motion.div>
    </div>
  );
}
