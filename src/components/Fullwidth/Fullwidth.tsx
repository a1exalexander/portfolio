import clsx from 'clsx';
import { GrProjects } from "react-icons/gr";
import styles from './Fullwidth.module.css';

interface IFullwidthProps {
  className?: string;
  children: React.ReactNode;
}

export const Fullwidth = function Fullwidth({
  children,
  className,
}: IFullwidthProps) {
  return (
    <div className={clsx(styles.container, className)}>
      <p className={styles.caption}><GrProjects className={styles.icon} /> Projects </p>
      <ul className={styles.list}>{children}</ul>
    </div>
  );
};
