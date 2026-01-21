import React from "react";
import clsx from "clsx";
import styles from "./Callout.module.css";

type CalloutType = "info" | "warning" | "tip" | "note";

interface ICalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
  emoji?: string;
}

const defaultEmojis: Record<CalloutType, string> = {
  info: "ℹ️",
  warning: "⚠️",
  tip: "💡",
  note: "📝",
};

export const Callout = function Callout({
  type = "info",
  title,
  children,
  className,
  emoji,
}: ICalloutProps) {
  const displayEmoji = emoji || defaultEmojis[type];

  return (
    <aside className={clsx(styles.callout, styles[type], className)}>
      <span className={styles.emoji}>{displayEmoji}</span>
      <div className={styles.content}>
        {title && <span className={styles.title}>{title}</span>}
        {children}
      </div>
    </aside>
  );
};
