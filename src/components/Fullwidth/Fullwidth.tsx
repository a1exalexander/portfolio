import clsx from 'clsx';
import styles from './Fullwidth.module.css';
import { IconType } from 'react-icons';

interface IFullwidthProps {
  className?: string;
  title?: string;
  children: React.ReactNode;
  Icon?: IconType;
  isList?: boolean;
}

export const Fullwidth = function Fullwidth({
  children,
  className,
  title,
  Icon,
}: IFullwidthProps) {
  return (
    <>
      {Icon && title ? (
        <p className={styles.caption}>
          <Icon className={styles.icon} /> {title}
        </p>
      ) : null}
      <div className={clsx(styles.container, className)}>{children}</div>
    </>
  );
};
