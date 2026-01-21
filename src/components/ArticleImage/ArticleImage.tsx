import React from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import styles from "./ArticleImage.module.css";

interface IArticleImageProps {
  src: string | StaticImageData;
  alt: string;
  caption?: string;
  fullWidth?: boolean;
  className?: string;
  priority?: boolean;
}

export const ArticleImage = function ArticleImage({
  src,
  alt,
  caption,
  fullWidth,
  className,
  priority,
}: IArticleImageProps) {
  const isStaticImport = typeof src !== "string";

  return (
    <figure className={clsx(styles.figure, { [styles.fullWidth]: fullWidth }, className)}>
      <div className={styles.imageWrapper}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={fullWidth ? "100vw" : "(max-width: 768px) 100vw, 680px"}
          className={styles.image}
          data-zoomable
          priority={priority}
          placeholder={isStaticImport ? "blur" : undefined}
        />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
};
