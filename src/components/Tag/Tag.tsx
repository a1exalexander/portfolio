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
  darkIconColor?: string;
  href?: string;
  dark?: boolean;
  backgroundColor?: string;
  textColor?: string;
  download?: boolean;
  size?: 'small' | 'medium';
  target?: '_blank' | '_self';
}

export const Tag = function Tag({
  children,
  className,
  Icon,
  icon,
  backgroundColor,
  textColor,
  iconColor,
  darkIconColor,
  download,
  href,
  dark,
  size = 'medium',
  target = '_blank',
}: ITagProps) {
  const cssVars = {
    '--tag-icon-color': iconColor || 'currentcolor',
    '--tag-icon-color-dark': darkIconColor || iconColor || 'currentcolor',
  } as React.CSSProperties;

  return (
    <a
      download={download}
      href={href}
      target={target}
      style={{
        color: textColor,
        backgroundColor,
        borderColor: backgroundColor,
        ...cssVars,
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
          <Icon className={styles.icon} />
        </span>
      ) : null}
      {icon ? <span className={styles.iconWrapper}>{icon}</span> : null}
      {children}
    </a>
  );
};
