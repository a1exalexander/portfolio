import React from "react";
import clsx from "clsx";
import styles from "./Article.module.css";
import { LikeButton } from "../LikeButton";
import { ViewCounter } from "../ViewCounter";

interface IArticleProps {
  children: React.ReactNode;
  className?: string;
  slug: string;
}

export const Article = function Article({ children, className, slug }: IArticleProps) {
  return (
    <article className={clsx(styles.article, className)}>
      {children}
      {/* Temporarily hidden - view counter and like button
      <footer className={styles.footer}>
        <ViewCounter slug={slug} />
        <LikeButton slug={slug} />
      </footer>
      */}
    </article>
  );
};
