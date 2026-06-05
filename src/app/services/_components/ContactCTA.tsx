"use client";

import type { CSSProperties, ReactNode } from "react";

/**
 * Smooth-scrolls to the #contact form. When a `service` is given (the per-card
 * "Отримати оцінку" buttons), it also broadcasts a `services:quote` event so the
 * form can pre-select that service. Replaces the original prototype's single
 * top-level App state with a small client island.
 */
export function ContactCTA({
  service,
  className,
  style,
  children,
}: {
  service?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const onClick = () => {
    if (service) {
      window.dispatchEvent(new CustomEvent("services:quote", { detail: service }));
    }
    const el = document.getElementById("contact");
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button type="button" className={className} style={style} onClick={onClick}>
      {children}
    </button>
  );
}
