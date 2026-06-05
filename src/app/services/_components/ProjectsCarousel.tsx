"use client";

import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "../page.module.css";
import { IconArrowUpR } from "./icons";
import { PROJECTS, statusLabel } from "./projects-data";

const SPEED = 38; // px per second

// Seamless auto-scrolling marquee of real projects. Mechanics (seamless wrap,
// pause on hover/focus, touch drag, BFCache reset) ported from the /mentor
// Testimonials carousel.
export const ProjectsCarousel = () => {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const touchStartXRef = useRef<number>(0);
  const motionStartXRef = useRef<number>(0);
  const isTouchRef = useRef(false);

  useEffect(() => {
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) x.set(0);
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, [x]);

  useEffect(() => {
    const onVisibility = () => {
      if (document.visibilityState === "visible") setPaused(false);
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const getWrapDistance = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const firstDup = track.children[PROJECTS.length] as HTMLElement | undefined;
    return firstDup ? firstDup.offsetLeft : track.scrollWidth / 2;
  };

  useAnimationFrame((_, delta) => {
    if (reduce || paused || !trackRef.current) return;
    const wrap = getWrapDistance();
    if (wrap <= 0) return;
    let next = x.get() - (SPEED * Math.min(delta, 100)) / 1000;
    while (-next >= wrap) next += wrap;
    x.set(next);
  });

  const handleTouchStart = (e: React.TouchEvent) => {
    isTouchRef.current = true;
    touchStartXRef.current = e.touches[0].clientX;
    motionStartXRef.current = x.get();
    setPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const wrap = getWrapDistance();
    if (wrap <= 0) return;
    const dx = e.touches[0].clientX - touchStartXRef.current;
    let next = motionStartXRef.current + dx;
    while (next > 0) next -= wrap;
    while (-next >= wrap) next += wrap;
    x.set(next);
  };

  const handleTouchEnd = () => {
    isTouchRef.current = false;
    setPaused(false);
  };

  const cards = [...PROJECTS, ...PROJECTS];

  return (
    <div
      className={styles.carouselWrap}
      onMouseEnter={() => {
        if (!isTouchRef.current) setPaused(true);
      }}
      onMouseLeave={() => {
        if (!isTouchRef.current) setPaused(false);
      }}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      <div className={styles.carousel}>
        <motion.div ref={trackRef} className={styles.carouselTrack} style={{ x }}>
          {cards.map((p, i) => {
            const dup = i >= PROJECTS.length;
            const CardTag = p.href ? "a" : "div";
            const linkProps = p.href
              ? { href: p.href, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <CardTag
                {...linkProps}
                className={`${styles.pcard} ${styles[`tone_${p.companyTone}`]}`}
                key={`${p.title}-${i}`}
                aria-hidden={dup}
                tabIndex={dup ? -1 : undefined}
              >
                <div className={styles.pcardTop}>
                  <span className={styles.companyChip}>{p.company}</span>
                  <span className={`${styles.statusBadge} ${styles[`st_${p.status}`]}`}>
                    {statusLabel(p.status)}
                  </span>
                </div>
                <div className={styles.pcardHead}>
                  <h3 className={styles.pcardTitle}>
                    {p.title}
                    {p.href ? <IconArrowUpR className={styles.pcardArrow} /> : null}
                  </h3>
                  <span className={styles.pcardYear}>{p.year}</span>
                </div>
                <p className={styles.pcardDesc}>{p.description}</p>
                <ul className={styles.pcardStack}>
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </CardTag>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
