"use client";

import React from "react";
import Masonry, { MasonryProps } from "react-masonry-css";

type MasonryGridProps = {
  breakpointCols?: MasonryProps["breakpointCols"];
  className: string;
  columnClassName?: string;
  children: React.ReactNode;
};

const defaultBreakpointCols = {
  default: 2,
  1280: 2,
  768: 1,
};

export default function MasonryGrid({ 
  children, 
  breakpointCols = defaultBreakpointCols, 
  className, 
  columnClassName 
}: MasonryGridProps) {
  return (
    <Masonry
      breakpointCols={breakpointCols}
      className={className}
      columnClassName={columnClassName}
    >
      {children}
    </Masonry>
  );
}
