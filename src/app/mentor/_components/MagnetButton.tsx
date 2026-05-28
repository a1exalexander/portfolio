"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface MagnetButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  strength?: number;
}

export const MagnetButton = ({
  children,
  className,
  href,
  strength = 0.32,
}: MagnetButtonProps) => {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 280, damping: 18, mass: 0.5 });
  const ySpring = useSpring(y, { stiffness: 280, damping: 18, mass: 0.5 });

  if (reduced) {
    return <a className={className} href={href}>{children}</a>;
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      className={className}
      href={href}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.a>
  );
};
