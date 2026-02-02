"use client";

import React from "react";
import Masonry from "react-masonry-css";
import styles from "./page.module.css";

type MasonryGridProps = {
  children: React.ReactNode;
};

const breakpointColumnsObj = {
  default: 2,
  1280: 2,
  768: 1,
};

export default function MasonryGrid({ children }: MasonryGridProps) {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryColumn}
    >
      {children}
    </Masonry>
  );
}
