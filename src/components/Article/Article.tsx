import React from "react";
import clsx from "clsx";
import styles from "./Article.module.css";

interface IArticleProps {
  children: React.ReactNode;
  className?: string;
}

export const Article = function Article({ children, className }: IArticleProps) {
  return (
    <article className={clsx(styles.article, className)}>
      {children}
    </article>
  );
};
