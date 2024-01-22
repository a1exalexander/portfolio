import React from 'react';
import clsx from 'clsx';
import styles from './Collage.module.css';

interface ICollageProps {
  children: React.ReactNode;
  className?: string;
}

export const Collage = function Collage({
  className,
  children,
}: ICollageProps) {
  const size = React.Children.count(children);
  return (
    <div className={clsx(styles.collage, styles[`s-${size}`], className)}>
      {children}
    </div>
  );
};
