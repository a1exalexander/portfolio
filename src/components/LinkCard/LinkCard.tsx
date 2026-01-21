import React from "react";
import clsx from "clsx";
import { FiExternalLink } from "react-icons/fi";
import styles from "./LinkCard.module.css";

interface ILinkCardProps {
  href: string;
  title: string;
  className?: string;
}

function getDomain(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace("www.", "");
  } catch {
    return url;
  }
}

function getFaviconUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    return `https://www.google.com/s2/favicons?domain=${urlObj.hostname}&sz=32`;
  } catch {
    return "";
  }
}

export const LinkCard = function LinkCard({
  href,
  title,
  className,
}: ILinkCardProps) {
  const domain = getDomain(href);
  const favicon = getFaviconUrl(href);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(styles.card, className)}
    >
      {favicon && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={favicon} alt="" className={styles.favicon} loading="lazy" />
      )}
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.domain}>{domain}</span>
      </div>
      <FiExternalLink className={styles.icon} />
    </a>
  );
};
