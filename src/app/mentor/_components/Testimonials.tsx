"use client";

import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import styles from "../page.module.css";
import { Avatar, type AvatarTone } from "./Avatar";

type Testimonial = {
  initials: string;
  tone: AvatarTone;
  name: string;
  role: string;
  quote: string;
  variant?: "testiViolet" | "testiMidnight" | "testiRose" | "testiLavender";
};

const TESTIMONIALS: Testimonial[] = [
  {
    initials: "ОК",
    tone: "rose",
    name: "Олена К.",
    role: "Junior React Dev · Київ",
    quote:
      "Олександр — той рідкісний викладач, який може пояснити одне поняття трьома різними способами, поки воно не клікне. За чотири місяці я з copy-paste туторіалів вийшла на власний TypeScript.",
  },
  {
    initials: "АР",
    tone: "lavender",
    name: "Андрій Р.",
    role: "Frontend · Lviv fintech",
    quote:
      "Шість місяців я застряг у співбесідах. Сашко за вісім тижнів розібрав мій CV, провів мок-інтерв'ю, навчив відповідати на «розкажіть про себе». Результат — три оферти за два тижні.",
    variant: "testiViolet",
  },
  {
    initials: "МБ",
    tone: "midnight",
    name: "Марія Б.",
    role: "Junior Frontend · з нуля",
    quote:
      "Я починала з повного нуля, ніколи не писала навіть HTML. Через сім місяців я отримала першу роботу в українському продукті. Ключове — у Сашка є чіткий план, а не «давайте подивимось туторіал».",
    variant: "testiMidnight",
  },
  {
    initials: "ДЛ",
    tone: "violet",
    name: "Дмитро Л.",
    role: "Frontend, ex-QA · Харків",
    quote:
      "Я перейшов із QA. Думав, буде боляче — а виявилось, що з ментором це у два рази швидше і у п'ять разів цікавіше. Сашко не «вчить React» — він вчить мислити як інженер.",
    variant: "testiRose",
  },
  {
    initials: "СН",
    tone: "rose",
    name: "Софія Н.",
    role: "Trainee · група, потік 2024",
    quote:
      "Я ходила у міні-групі. Атмосфера — як на справжній роботі: парне програмування, код-рев'ю один одного, дискусії. Чесно — за таку атмосферу 400 ₴/год це майже подарунок.",
    variant: "testiLavender",
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
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
