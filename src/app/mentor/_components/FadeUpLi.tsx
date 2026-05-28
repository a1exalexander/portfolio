"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeUpLiProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export const FadeUpLi = ({ children, className, delay = 0 }: FadeUpLiProps) => {
  const reduced = useReducedMotion();

  if (reduced) return <li className={className}>{children}</li>;

  return (
    <motion.li
      className={className}
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px 0px" }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </motion.li>
  );
};
