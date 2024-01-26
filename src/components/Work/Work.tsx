import clsx from 'clsx';
import Image from 'next/image';
import { IconType } from 'react-icons';
import { LuExternalLink } from 'react-icons/lu';
import styles from './Work.module.css';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface IWorkProps {
  className?: string;
  title: string;
  job: string;
  time: string;
  children: React.ReactNode;
  href?: string;
  icon?: string | StaticImport;
  Icon?: IconType;
}

export const Work = function Work({
  job,
  time,
  title,
  className,
  children,
  href,
  icon,
  Icon,
}: IWorkProps) {
  const CustomTag = href ? 'a' : 'div';
  return (
    <div className={clsx(styles.container, className)}>
      <CustomTag target='_blank' className={clsx(styles.link)} href={href}>
        <div className={styles.icon}>
          {icon ? (
            <Image
              width={18}
              height={18}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              src={icon}
              alt={`icon ${title}`}
            />
          ) : null}
          {Icon ? <Icon /> : null}
        </div>
        <h3 className={styles.title}>{title}</h3>
        {href ? <LuExternalLink className={styles.arrow} /> : null}
      </CustomTag>
      <p className={styles.description}>
        <span className={styles.job}>{job}</span>,{' '}
        <span className={styles.time}>{time}</span>
      </p>
      {children}
    </div>
  );
};
