"use client";

import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
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
];

const SPEED = 45; // px per second

export const Testimonials = () => {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useAnimationFrame((_, delta) => {
    if (reduce || paused || !trackRef.current) return;
    // Track renders the list twice, so one set is half the scroll width.
    const half = trackRef.current.scrollWidth / 2;
    if (half <= 0) return;
    let next = x.get() - (SPEED * delta) / 1000;
    if (-next >= half) next += half; // seamless wrap
    x.set(next);
  });

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
        className={styles.carousel}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <motion.div ref={trackRef} className={styles.carouselTrack} style={{ x }}>
          {cards.map((t, i) => (
            <div
              className={styles.carouselItem}
              key={`${t.name}-${i}`}
              aria-hidden={i >= TESTIMONIALS.length}
            >
              <div className={`${styles.testi} ${t.variant ? styles[t.variant] : ""}`}>
                <div className={styles.quoteMark}>“</div>
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
    </section>
  );
};
