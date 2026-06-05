"use client";

import { useState } from "react";
import styles from "../page.module.css";
import { FAQ_ITEMS } from "./faq-items";

// Accordion for the /services FAQ. The surrounding <section> + heading live in
// page.tsx; this component only owns the interactive list.
export const FAQ = () => {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className={styles.faq}>
      {FAQ_ITEMS.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={`${styles.faqRow} ${isOpen ? styles.faqRowOpen : ""}`} key={it.q}>
            <button
              type="button"
              className={styles.faqQ}
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span>{it.q}</span>
              <span className={styles.faqPlus} aria-hidden="true" />
            </button>
            <div className={styles.faqA} role="region" hidden={!isOpen}>
              <p>{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
