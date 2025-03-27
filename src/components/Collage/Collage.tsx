import React from "react";
import clsx from "clsx";
import styles from "./Collage.module.css";

interface ICollageProps {
  children: React.ReactNode;
  className?: string;
  mirror?: boolean;
  variant?: number;
  row?: boolean;
}

export const Collage = function Collage({
  className,
  children,
  mirror,
  variant = 1,
  row,
}: ICollageProps) {
  const size = React.Children.count(children);

  return (
    <div
      className={clsx(
        styles.collage,
        styles[`variant-${variant}`],
        styles[`s-${size}`],
        { [styles.mirror]: mirror, [styles.row]: row },
        className
      )}
    >
      {children}
    </div>
  );
};
