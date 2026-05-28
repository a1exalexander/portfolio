"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  /** true = scroll-triggered (whileInView); false = animates on mount */
  inView?: boolean;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export const FadeUp = ({
  children,
  delay = 0,
  className,
  y = 20,
  inView = true,
}: FadeUpProps) => {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  const initial = { opacity: 0, y };
  const visible = { opacity: 1, y: 0 };
  const transition = { duration: 0.55, delay, ease: EASE };

  if (inView) {
    return (
      <motion.div
        className={className}
        initial={initial}
        whileInView={visible}
        viewport={{ once: true, margin: "-60px 0px" }}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      animate={visible}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};
