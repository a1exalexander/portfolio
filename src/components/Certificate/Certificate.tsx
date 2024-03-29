import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import styles from './Certificate.module.css';
import clsx from 'clsx';

interface CertificateProps {
  className?: string;
  src: string | StaticImport;
  alt: string;
  backgroundColor?: string;
}

export const Certificate = function Certificate({
  src,
  alt,
  className,
  backgroundColor,
}: CertificateProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner} style={{ backgroundColor }}>
        <Image
          data-zoomable
          src={src}
          alt={alt}
          style={{
            objectFit: backgroundColor ? 'contain' : 'cover',
            objectPosition: 'center',
          }}
          fill
          placeholder="blur"
          loading="lazy"
          className={clsx(styles.image, className)}
        />
      </div>
    </div>
  );
};
