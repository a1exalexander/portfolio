"use client";

import { useState } from "react";
import styles from "../page.module.css";
import { FAQ_ITEMS } from "./faq-items";

export const FAQ = () => {
  const [open, setOpen] = useState<number>(0);
  return (
    <section className={styles.section} id="faq">
      <div className={styles.secHead}>
        <div>
          <div className={styles.kicker}>§ 07</div>
          <h2>
            Часті <span className={styles.violet}>питання</span>
          </h2>
        </div>
        <p className={styles.lede}>
          Якщо не знайшов відповідь — напиши мені у Telegram, я відповім.
        </p>
      </div>
      <div className={styles.faq}>
        {FAQ_ITEMS.map((it, i) => (
          <div
            className={`${styles.faqRow} ${open === i ? styles.faqRowOpen : ""}`}
            key={it.q}
          >
            <button
              type="button"
              className={styles.faqQ}
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
            >
              <span>{it.q}</span>
              <span className={styles.faqPlus}>+</span>
            </button>
            <div className={styles.faqA}>{it.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
