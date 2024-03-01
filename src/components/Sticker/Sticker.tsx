import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import styles from './Sticker.module.css';
import clsx from 'clsx';

interface IStickerProps {
  src: string | StaticImport;
  alt: string;
  className?: string;
}

export const Sticker = function Sticker({
  alt,
  src,
  className,
}: IStickerProps) {
  return (
    <div className={clsx(styles.image, className)}>
      <Image
        src={src}
        alt={alt}
        style={{ objectFit: 'contain', objectPosition: 'center' }}
        placeholder="blur"
        loading="lazy"
        fill
      />
    </div>
  );
};
