import React from "react";
import clsx from "clsx";
import styles from "./ProsCons.module.css";

interface IProsConsProps {
  children: React.ReactNode;
  className?: string;
}

interface IProsConsColumnProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const CheckIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M13.5 4.5L6.25 11.75L2.5 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M3.5 8H12.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const ProsCons = function ProsCons({
  children,
  className,
}: IProsConsProps) {
  return (
    <section className={clsx(styles.prosCons, className)}>{children}</section>
  );
};

export const Pros = function Pros({
  title = "Pros",
  children,
  className,
}: IProsConsColumnProps) {
  return (
    <div className={clsx(styles.column, styles.pros, className)}>
      <p className={styles.header}>
        <span className={styles.badge}>
          <CheckIcon />
        </span>
        {title}
      </p>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export const Cons = function Cons({
  title = "Cons",
  children,
  className,
}: IProsConsColumnProps) {
  return (
    <div className={clsx(styles.column, styles.cons, className)}>
      <p className={styles.header}>
        <span className={styles.badge}>
          <MinusIcon />
        </span>
        {title}
      </p>
      <div className={styles.body}>{children}</div>
    </div>
  );
};
