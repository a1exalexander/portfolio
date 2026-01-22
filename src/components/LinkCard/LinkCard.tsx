import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { FiExternalLink } from "react-icons/fi";
import styles from "./LinkCard.module.css";

type LinkCardType = "inline" | "inline-preview" | "preview";

interface ILinkCardProps {
  href: string;
  title?: string;
  description?: string;
  image?: string;
  type?: LinkCardType;
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
  description,
  image,
  type = "inline-preview",
  className,
}: ILinkCardProps) {
  const domain = getDomain(href);
  const favicon = getFaviconUrl(href);

  // inline: just favicon + domain link
  if (type === "inline") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(styles.inline, className)}
      >
        {favicon && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={favicon} alt="" className={styles.faviconSmall} loading="lazy" />
        )}
        <span className={styles.inlineDomain}>{domain}</span>
        <FiExternalLink className={styles.iconSmall} />
      </a>
    );
  }

  // inline-preview: favicon + title + domain (current default)
  if (type === "inline-preview") {
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
          <span className={styles.title}>{title || domain}</span>
          <span className={styles.domain}>{domain}</span>
        </div>
        <FiExternalLink className={styles.icon} />
      </a>
    );
  }

  // preview: full block with OG image, title, description
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(styles.preview, className)}
    >
      {image && (
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={title || domain}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.previewContent}>
        <div className={styles.previewHeader}>
          {favicon && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={favicon} alt="" className={styles.faviconSmall} loading="lazy" />
          )}
          <span className={styles.previewDomain}>{domain}</span>
        </div>
        <span className={styles.previewTitle}>{title || domain}</span>
        {description && (
          <p className={styles.previewDescription}>{description}</p>
        )}
      </div>
      <FiExternalLink className={styles.previewIcon} />
    </a>
  );
};
