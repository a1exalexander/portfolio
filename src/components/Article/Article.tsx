import React from "react";
import clsx from "clsx";
import styles from "./Article.module.css";
import { LikeButton } from "../LikeButton";
import { ViewCounter } from "../ViewCounter";
import Link from "next/link";

interface IArticleProps {
  children: React.ReactNode;
  className?: string;
  slug: string;
}

export const Article = function Article({ children, className, slug }: IArticleProps) {
  return (
    <article className={clsx(styles.article, className)}>
      {children}
    </article>
  );
};
