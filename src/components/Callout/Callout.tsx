import React from "react";
import clsx from "clsx";
import { FiInfo, FiAlertTriangle, FiCheckCircle, FiFileText } from "react-icons/fi";
import styles from "./Callout.module.css";

type CalloutType = "info" | "warning" | "tip" | "note";

interface ICalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const icons: Record<CalloutType, React.ElementType> = {
  info: FiInfo,
  warning: FiAlertTriangle,
  tip: FiCheckCircle,
  note: FiFileText,
};

export const Callout = function Callout({
  type = "info",
  title,
  children,
  className,
}: ICalloutProps) {
  const Icon = icons[type];

  return (
    <aside className={clsx(styles.callout, styles[type], className)}>
      <div className={styles.header}>
        <Icon className={styles.icon} />
        {title && <span className={styles.title}>{title}</span>}
      </div>
      <div className={styles.content}>{children}</div>
    </aside>
  );
};
