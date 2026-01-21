import React from "react";
import clsx from "clsx";
import { FiTwitter, FiGithub, FiLinkedin, FiUser } from "react-icons/fi";
import styles from "./Mention.module.css";

type Platform = "twitter" | "github" | "linkedin";

interface IMentionProps {
  handle: string;
  href?: string;
  platform?: Platform;
  className?: string;
}

const platformIcons: Record<Platform, React.ElementType> = {
  twitter: FiTwitter,
  github: FiGithub,
  linkedin: FiLinkedin,
};

const platformUrls: Record<Platform, (handle: string) => string> = {
  twitter: (handle) => `https://twitter.com/${handle.replace("@", "")}`,
  github: (handle) => `https://github.com/${handle.replace("@", "")}`,
  linkedin: (handle) => `https://linkedin.com/in/${handle.replace("@", "")}`,
};

export const Mention = function Mention({
  handle,
  href,
  platform,
  className,
}: IMentionProps) {
  const Icon = platform ? platformIcons[platform] : FiUser;
  const linkHref = href || (platform ? platformUrls[platform](handle) : undefined);
  const displayHandle = handle.startsWith("@") ? handle : `@${handle}`;

  const content = (
    <>
      <Icon className={styles.icon} />
      <span className={styles.handle}>{displayHandle}</span>
    </>
  );

  if (linkHref) {
    return (
      <a
        href={linkHref}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(styles.mention, styles.link, className)}
      >
        {content}
      </a>
    );
  }

  return (
    <span className={clsx(styles.mention, className)}>
      {content}
    </span>
  );
};
