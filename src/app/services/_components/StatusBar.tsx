"use client";

import { useEffect, useState } from "react";
import styles from "../page.module.css";

// Fixed vim/tmux-style status line pinned to the bottom of the viewport. The
// clock is set only after mount so server and client first render agree (no
// hydration mismatch). Decorative — aria-hidden.
export const StatusBar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("uk-UA", { hour: "2-digit", minute: "2-digit" });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.statusBar} aria-hidden="true">
      <span className={styles.statusMode}>root</span>
      <span className={styles.statusSeg}>~/services</span>
      <span className={styles.statusSpacer} />
      <span className={`${styles.statusSeg} ${styles.statusHideSm}`}>sashko@portfolio</span>
      <span className={`${styles.statusSeg} ${styles.statusHideSm}`}>uk_UA</span>
      <span className={styles.statusClock}>{time || "--:--"}</span>
    </div>
  );
};
