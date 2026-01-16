import React from "react";
import clsx from "clsx";
import styles from "./Collage.module.css";

interface ICollageProps {
  children: React.ReactNode;
  className?: string;
  mirror?: boolean;
  variant?: number;
  row?: boolean;
  masonry?: boolean;
}

export const Collage = function Collage({
  className,
  children,
  mirror,
  variant = 1,
  row,
  masonry,
}: ICollageProps) {
  const size = React.Children.count(children);
  const useMasonry = masonry || size > 5;

  return (
    <div
      className={clsx(
        styles.collage,
        !useMasonry && styles[`variant-${variant}`],
        !useMasonry && styles[`s-${size}`],
        {
          [styles.mirror]: mirror,
          [styles.row]: row && !useMasonry,
          [styles.masonry]: useMasonry,
        },
        className
      )}
      style={useMasonry ? { "--masonry-count": Math.min(size, 20) } as React.CSSProperties : undefined}
    >
      {children}
    </div>
  );
};
