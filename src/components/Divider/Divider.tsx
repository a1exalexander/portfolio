import clsx from 'clsx';
import styles from './Divider.module.css';

interface IDividerProps {
  className?: string;
}

export const Divider = function Divider({ className }: IDividerProps) {
  return <div className={clsx(styles.divider, className)} />;
};
