import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import styles from './Photo.module.css';
import clsx from 'clsx';

export const getAlt = (text: string) => `Oleksandr Ratushnyi ${text}`;

interface IPhotoProps {
  src: string | StaticImport;
  alt?: string;
  caption: string;
  vertical?: boolean;
  paddingHack?: number;
  test?: boolean;
  grid?: boolean;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export const Photo = function Photo({
  alt,
  src,
  vertical,
  caption,
  paddingHack = 66.7,
  test,
  grid,
  className,
  loading = 'lazy',
  priority
}: IPhotoProps) {
  return (
    <figure
      className={clsx(
        styles.figure,
        grid ? '' : styles.single,
        vertical ? styles.vertical : '',
        className,
      )}
    >
      <div
        className={styles.image}
        style={{
          paddingBottom: `${vertical ? 100 : paddingHack}%`,
          backgroundColor: test ? 'red' : 'transparent',
        }}
      >
        <Image
          data-zoomable
          src={src}
          alt={getAlt(alt || caption)}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          fill
          placeholder="blur"
          loading={loading}
          priority={priority}
        />
      </div>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
};
