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
  download?: boolean;
  size?: 'small' | 'medium';
}

export const Tag = function Tag({
  children,
  className,
  Icon,
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
      className={clsx(styles.tag, { [styles.dark]: dark }, className, styles[size])}
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
