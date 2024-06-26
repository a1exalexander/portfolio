import clsx from 'clsx';
import Image from 'next/image';
import { IconType } from 'react-icons';
import { LuExternalLink } from 'react-icons/lu';
import styles from './Work.module.css';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface ICompanyTitleProps {
  title: string;
  icon?: string | StaticImport;
  href?: string;
}

const CompanyTitle = function CompanyTitle({
  title,
  icon,
  href,
}: ICompanyTitleProps) {
  const CustomTag = href ? 'a' : 'div';

  return (
    <CustomTag target="_blank" className={clsx(styles.link)} href={href}>
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
      </div>
      <h3 className={styles.title}>{title}</h3>
      {href ? <LuExternalLink className={styles.arrow} /> : null}
    </CustomTag>
  );
};

interface IWorkProps {
  className?: string;
  job: string;
  time: string;
  children: React.ReactNode;
  titles: ICompanyTitleProps[];
  Icon?: IconType;
}

export const Work = function Work({
  job,
  time,
  className,
  children,
  Icon,
  titles,
}: IWorkProps) {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.titles}>
        {titles
          ? titles.map((titleProps) => (
              <CompanyTitle key={titleProps.title} {...titleProps} />
            ))
          : null}
      </div>
      <p className={styles.description}>
        <span className={styles.job}>{job}</span>,{' '}
        <span className={styles.time}>{time}</span>
      </p>
      {children}
    </div>
  );
};
