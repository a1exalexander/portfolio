"use client";

import React, { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import styles from "./ArticleSlider.module.css";

interface SlideImage {
  src: string | StaticImageData;
  alt: string;
  caption?: string;
}

interface IArticleSliderProps {
  images: SlideImage[];
  showDots?: boolean;
  className?: string;
}

export const ArticleSlider = function ArticleSlider({
  images,
  showDots = true,
  className,
}: IArticleSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const slideWidth = sliderRef.current.offsetWidth;
    const newIndex = Math.round(scrollLeft / slideWidth);
    setActiveIndex(newIndex);
  };

  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;
    const slideWidth = sliderRef.current.offsetWidth;
    sliderRef.current.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <div className={clsx(styles.container, className)}>
      <div
        ref={sliderRef}
        className={styles.slider}
        onScroll={handleScroll}
      >
        {images.map((image, index) => {
          const isStaticImport = typeof image.src !== "string";
          return (
            <div key={index} className={styles.slide}>
              <div className={styles.imageWrapper}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 680px"
                  className={styles.image}
                  data-zoomable
                  placeholder={isStaticImport ? "blur" : undefined}
                />
              </div>
              {image.caption && (
                <p className={styles.caption}>{image.caption}</p>
              )}
            </div>
          );
        })}
      </div>

      {showDots && images.length > 1 && (
        <div className={styles.dots}>
          {images.map((_, index) => (
            <button
              key={index}
              className={clsx(styles.dot, { [styles.active]: index === activeIndex })}
              onClick={() => scrollToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {images.length > 1 && (
        <div className={styles.counter}>
          {activeIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};
