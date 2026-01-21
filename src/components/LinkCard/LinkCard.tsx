import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { FiExternalLink } from "react-icons/fi";
import styles from "./LinkCard.module.css";

interface ILinkCardProps {
  href: string;
  title: string;
  description?: string;
  image?: string;
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

export const LinkCard = function LinkCard({
  href,
  title,
  description,
  image,
  className,
}: ILinkCardProps) {
  const domain = getDomain(href);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(styles.card, className)}
    >
      {image && (
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.meta}>
          <span className={styles.domain}>{domain}</span>
          <FiExternalLink className={styles.icon} />
        </div>
      </div>
    </a>
  );
};
