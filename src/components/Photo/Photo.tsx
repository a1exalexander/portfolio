import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import styles from "./Photo.module.css";
import clsx from "clsx";

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
  loading?: "lazy" | "eager";
  priority?: boolean;
  offset?: {
    x?: number;
    y?: number;
  };
}

export const Photo = function Photo({
  alt,
  src,
  vertical,
  caption,
  paddingHack,
  test,
  grid,
  className,
  loading = "lazy",
  priority,
  offset = {
    x: 0,
    y: 0,
  },
}: IPhotoProps) {
  return (
    <figure
      style={{
        transform: `translate(${offset.x || 0}%, ${offset.y || 0}%)`,
      }}
      className={clsx(
        styles.figure,
        grid ? "" : styles.single,
        vertical ? styles.vertical : "",
        {[styles.paddingHack]: paddingHack},
        className
      )}
    >
      <div
        className={styles.image}
        style={{
          paddingBottom: `${
            vertical ? paddingHack || 100 : paddingHack || 66.7
          }%`,
          backgroundColor: test ? "red" : "transparent",
        }}
      >
        <Image
          data-zoomable
          src={src}
          alt={getAlt(alt || caption)}
          style={{ objectFit: "cover", objectPosition: "center" }}
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
