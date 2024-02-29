import { IconType } from 'react-icons';
import styles from './Project.module.css';
import clsx from 'clsx';
import { Tag } from '../Tag';
import { SiNpm } from 'react-icons/si';
import { ImGithub } from 'react-icons/im';
import { LuExternalLink } from 'react-icons/lu';

interface IProjectProps {
  status?: 'production' | 'demo' | 'offline' | 'development';
  className?: string;
  title: string;
  time: string;
  href?: string;
  description: string;
  github?: string;
  npm?: string;
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
  github,
  npm,
}: IProjectProps) {
  const CustomTag = href ? 'a' : 'div';
  return (
    <li className={clsx(styles.item, status ? styles[status] : '', className)}>
      <div className={styles.tagList}>
        <Project.Tag className={clsx(styles.status, styles.tagItem)}>
          {status}
        </Project.Tag>
        {github ? (
          <Project.Tag
            href={github}
            Icon={ImGithub}
            className={styles.tagItem}
            theme="github"
          >
            open source
          </Project.Tag>
        ) : null}
        {npm ? (
          <Project.Tag
            href={npm}
            Icon={SiNpm}
            className={styles.tagItem}
            theme="npm"
          >
            npm
          </Project.Tag>
        ) : null}
      </div>
      <div className={styles.head}>
        <CustomTag target="_blank" href={href} className={styles.title}>
          {title}
          {href ? <LuExternalLink className={styles.arrow} /> : null}
        </CustomTag>
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
              size="small"
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

interface TagProps {
  className?: string;
  children: string;
  href?: string;
  Icon?: IconType;
  theme?: 'github' | 'npm';
}

Project.Tag = function Tag({
  children,
  className,
  href,
  Icon,
  theme,
}: TagProps) {
  const classNames = clsx(
    styles.projectTag,
    className,
    theme ? styles[theme] : '',
  );
  if (!href) {
    return <span className={classNames}>{children}</span>;
  }
  return (
    <a href={href} target="_blank" className={classNames}>
      {Icon ? <Icon className={styles.projectTagIcon} /> : null}
      {children}
    </a>
  );
};
