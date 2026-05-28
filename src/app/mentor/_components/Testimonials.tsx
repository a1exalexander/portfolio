"use client";

import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "../page.module.css";
import { Avatar, type AvatarTone } from "./Avatar";
import { IconLi } from "./icons";

type Testimonial = {
  initials: string;
  tone: AvatarTone;
  name: string;
  role: string;
  quote: string;
  linkedIn?: string;
  variant?: "testiViolet" | "testiMidnight" | "testiRose" | "testiLavender";
};

const TESTIMONIALS: Testimonial[] = [
  {
    initials: "ОЧ",
    tone: "violet",
    name: "Олег Ч.",
    role: "Webflow Developer",
    quote:
      "Хороший викладач, який реально включається в процес. Сашко добре пояснює і не пропускає дрібниць. Дуже уважний до деталей. Формує звичку писати акуратний і продуманий код.",
    linkedIn: "https://www.linkedin.com/in/oleh-chynchyk/",
  },
  {
    initials: "ВА",
    tone: "lavender",
    name: "Вячеслав А.",
    role: "Middle Frontend Developer",
    quote:
      "На уроках панувала дружня атмосфера. Сашко доступно пояснював усі питання, що виникали під час навчання. Інформація подавалася чітко та структуровано. Фідбек по домашніх завданнях був зрозумілим і допомагав покращити якість коду та уникати помилок. Залишилися тільки позитивні враження після навчання.",
    variant: "testiViolet",
  },
  {
    initials: "ЄБ",
    tone: "midnight",
    name: "Євген Б.",
    role: "Frontend Developer",
    quote:
      "Сашко це людина, завдяки якій почався мій шлях у програмуванні. Приблизно 5 років тому я вирішив спробувати себе на курсах з фронтенд розробки, і Сашко був моїм наставником та головним мотиватором у цій справі. Він дуже професійний, відданий своїй справі і просто цікава людина, яка надихає та мотивує до розвитку й навчання. Ми досі спілкуємося і я завжди можу звернутися до нього за порадою.",
    linkedIn: "https://www.linkedin.com/in/yevhenii-bryzhko-8003a81b2/",
    variant: "testiMidnight",
  },
  {
    initials: "ЯЛ",
    tone: "rose",
    name: "Яна Л.",
    role: "Freelance Frontend Developer",
    quote:
      "Моїм ментором був Сашко, кожен урок був справді цікавим та зрозумілим. Він завжди був відкритий до додаткових питань, давав розгорнуту відповідь та показував конкретні приклади. Також для пояснення він використовував кейси з особистого досвіду, що дозволяло краще зрозуміти реальну кухню розробки. Роботи перевіряв дуже оперативно, і від нього завжди відчувалася підтримка. Завдяки його менторству мій розвиток у цій сфері триває й досі. Дякую за навчання!",
    linkedIn: "https://www.linkedin.com/in/yliubyva/",
    variant: "testiRose",
  },
];

const SPEED = 45; // px per second

export const Testimonials = () => {
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

  // offsetLeft of the first duplicated card is the exact gap-correct wrap distance.
  const getWrapDistance = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const firstDup = track.children[TESTIMONIALS.length] as HTMLElement | undefined;
    return firstDup ? firstDup.offsetLeft : track.scrollWidth / 2;
  };

  useAnimationFrame((_, delta) => {
    if (reduce || paused || !trackRef.current) return;
    const wrap = getWrapDistance();
    if (wrap <= 0) return;
    // Cap delta to avoid a large jump when resuming from BFCache.
    let next = x.get() - (SPEED * Math.min(delta, 100)) / 1000;
    while (-next >= wrap) next += wrap; // seamless wrap
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

  const cards = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.secHead}>
        <div>
          <div className={styles.kicker}>§ 06</div>
          <h2>
            Що кажуть <span className={styles.violet}>студенти</span>
          </h2>
        </div>
        <p className={styles.lede}>
          Кілька слів від тих, хто пройшов менторство та навчання.
        </p>
      </div>

      <div
        className={styles.carouselWrap}
        onMouseEnter={() => { if (!isTouchRef.current) setPaused(true); }}
        onMouseLeave={() => { if (!isTouchRef.current) setPaused(false); }}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        <div className={styles.carousel}>
          <motion.div ref={trackRef} className={styles.carouselTrack} style={{ x }}>
            {cards.map((t, i) => (
              <div
                className={styles.carouselItem}
                key={`${t.name}-${i}`}
                aria-hidden={i >= TESTIMONIALS.length}
              >
                <div className={`${styles.testi} ${t.variant ? styles[t.variant] : ""}`}>
                  <div className={styles.quoteMark}>&ldquo;</div>
                  <p className={styles.quote}>{t.quote}</p>
                  <div className={styles.who}>
                    <Avatar initials={t.initials} tone={t.tone} />
                    <div className={styles.whoMeta}>
                      <span className={styles.whoName}>{t.name}</span>
                      <span className={styles.whoRole}>{t.role}</span>
                    </div>
                    {t.linkedIn && (
                      <a
                        href={t.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.whoSocialLink}
                        aria-label={`${t.name} on LinkedIn`}
                      >
                        <IconLi />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
