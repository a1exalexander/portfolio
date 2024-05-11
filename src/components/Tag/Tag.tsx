import clsx from 'clsx';
import { IconType } from 'react-icons';
import styles from './Tag.module.css';
import { ReactNode } from 'react';

interface ITagProps {
  children: ReactNode;
  className?: string;
  Icon?: IconType;
  icon?: ReactNode;
  iconColor?: string;
  href?: string;
  dark?: boolean;
  backgroundColor?: string;
  textColor?: string;
  download?: boolean;
  size?: 'small' | 'medium';
}

export const Tag = function Tag({
  children,
  className,
  Icon,
  icon,
  backgroundColor,
  textColor,
  iconColor,
  download,
  href,
  dark,
  size = 'medium',
}: ITagProps) {
  return (
    <a
      download={download}
      href={href}
      target="_blank"
      style={{
        color: textColor,
        backgroundColor,
        borderColor: backgroundColor,
      }}
      className={clsx(
        styles.tag,
        { [styles.dark]: dark },
        className,
        styles[size],
      )}
    >
      {Icon ? (
        <span className={styles.iconWrapper}>
          <Icon
            className={styles.icon}
            style={{ color: iconColor || 'currentcolor' }}
          />
        </span>
      ) : null}
      {icon ? <span className={styles.iconWrapper}>{icon}</span> : null}
      {children}
    </a>
  );
};
