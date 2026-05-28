"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export const AnimatedCard = ({
  children,
  className,
  delay = 0,
  hover = false,
}: AnimatedCardProps) => {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px 0px" }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      whileHover={hover ? { y: -6, transition: { duration: 0.22, ease: EASE } } : undefined}
    >
      {children}
    </motion.div>
  );
};
