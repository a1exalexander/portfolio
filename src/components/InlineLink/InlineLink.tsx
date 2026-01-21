import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { FiExternalLink } from "react-icons/fi";
import styles from "./InlineLink.module.css";

interface IInlineLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export const InlineLink = function InlineLink({
  href,
  children,
  external,
  className,
}: IInlineLinkProps) {
  const isExternal = external ?? (href.startsWith("http") || href.startsWith("//"));

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(styles.link, styles.external, className)}
      >
        <span>{children}</span>
        <FiExternalLink className={styles.icon} />
      </a>
    );
  }

  return (
    <Link href={href} className={clsx(styles.link, className)}>
      {children}
    </Link>
  );
};
