import { IconType } from 'react-icons';
import styles from './Project.module.css';
import clsx from 'clsx';
import { Tag } from '../Tag';
import { LuExternalLink } from 'react-icons/lu';

interface IProjectProps {
  status?: 'production' | 'demo' | 'offline' | 'development';
  className?: string;
  title: string;
  time: string;
  href?: string;
  description: string;
  stack: { Icon: IconType; name: string; color?: string; href: string }[];
}

export const Project = function Project({
  href,
  description,
  stack,
  time,
  title,
  className,
  status = 'offline',
}: IProjectProps) {
  return (
    <li className={clsx(styles.item, status ? styles[status] : '', className)}>
      <span className={styles.status}>{status}</span>
      <div className={styles.head}>
        <a target="_blank" href={href} className={styles.title}>
          {title}
          {href ? <LuExternalLink className={styles.arrow} /> : null}
        </a>
        <span className={styles.time}>{time}</span>
      </div>
      <p className={styles.description}>{description}</p>
      <p className={styles.stack}>
        {stack.map(({ Icon, name, color, href }) => {
          return (
            <Tag
              className={styles.tag}
              key={name}
              Icon={Icon}
              iconColor={color}
              href={href}
            >
              {name}
            </Tag>
          );
        })}
      </p>
    </li>
  );
};
