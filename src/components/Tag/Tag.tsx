import clsx from 'clsx';
import { IconType } from 'react-icons';
import styles from './Tag.module.css';

interface ITagProps {
  children: string;
  className?: string;
  Icon?: IconType;
  iconColor?: string;
  href?: string;
  dark?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

export const Tag = function Tag({
  children,
  className,
  Icon,
  backgroundColor,
  textColor,
  iconColor,
  href,
  dark,
}: ITagProps) {
  return (
    <a
      href={href}
      target="_blank"
      style={{ color: textColor, backgroundColor, borderColor: backgroundColor }}
      className={clsx(styles.tag, { [styles.dark]: dark }, className)}
    >
      {Icon ? (
        <span className={styles.iconWrapper}>
          <Icon
            className={styles.icon}
            style={{ color: iconColor || 'currentcolor' }}
          />
        </span>
      ) : null}
      {children}
    </a>
  );
};
