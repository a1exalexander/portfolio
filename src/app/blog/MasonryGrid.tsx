"use client";

import React from "react";
import Masonry, { MasonryProps } from "react-masonry-css";
import styles from "./page.module.css";

type MasonryGridProps = {
  breakpointCols?: MasonryProps["breakpointCols"];
  className: string;
  columnClassName?: string;
  children: React.ReactNode;
};

const breakpointColumnsObj = {
  default: 2,
  1280: 2,
  768: 1,
};

export default function MasonryGrid({ children, breakpointCols, className, columnClassName }: MasonryGridProps) {
  return (
    <Masonry
      breakpointCols={breakpointCols || breakpointColumnsObj}
      className={className}
      columnClassName={columnClassName}
    // className={styles.masonryGrid}
    // columnClassName={styles.masonryColumn}
    >
      {children}
    </Masonry>
  );
}
