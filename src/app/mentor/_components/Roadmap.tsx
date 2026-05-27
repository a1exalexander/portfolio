"use client";

import { useEffect, useState } from "react";
import styles from "../page.module.css";
import { STEP_ICONS } from "./illustrations";

type Topic = { name: string; kind: "core" | "rec" | "opt" };
type Block = {
  id: keyof typeof STEP_ICONS;
  step: string;
  title: string;
  level: string;
  desc: string;
  topics: Topic[];
};

const ROADMAP: Block[] = [
  {
    id: "internet",
    step: "01",
    title: "Як працює інтернет",
    level: "Основа",
    desc: "Без цього неможливо розуміти, що відбувається у браузері. Швидко, але обов'язково.",
    topics: [
      { name: "HTTP / HTTPS", kind: "core" },
      { name: "DNS", kind: "core" },
      { name: "Браузери", kind: "core" },
      { name: "Хостинг", kind: "rec" },
      { name: "Domain Name", kind: "rec" },
    ],
  },
  {
    id: "html",
    step: "02",
    title: "HTML",
    level: "Фундамент",
    desc: "Семантика, форми, доступність — те, що відрізняє верстальника від інженера.",
    topics: [
      { name: "Семантичні теги", kind: "core" },
      { name: "Форми + валідація", kind: "core" },
      { name: "Accessibility", kind: "core" },
      { name: "SEO основи", kind: "rec" },
      { name: "Web Components", kind: "opt" },
    ],
  },
  {
    id: "css",
    step: "03",
    title: "CSS",
    level: "Фундамент",
    desc: "Не просто стилі — окрема мова з власною логікою. Розкладемо все по поличках.",
    topics: [
      { name: "Селектори + каскад", kind: "core" },
      { name: "Flexbox", kind: "core" },
      { name: "Grid", kind: "core" },
      { name: "Responsive", kind: "core" },
      { name: "CSS Variables", kind: "core" },
      { name: "Анімації", kind: "rec" },
      { name: "BEM / CSS Modules", kind: "rec" },
      { name: "Tailwind", kind: "opt" },
    ],
  },
  {
    id: "js",
    step: "04",
    title: "JavaScript",
    level: "Серце фронтенду",
    desc: "Найбільший і найважливіший блок. Половину часу на менторстві ми проводимо тут.",
    topics: [
      { name: "Синтаксис + типи", kind: "core" },
      { name: "Функції + замикання", kind: "core" },
      { name: "DOM + Events", kind: "core" },
      { name: "Об'єкти + прототипи", kind: "core" },
      { name: "ES6+", kind: "core" },
      { name: "Promise + async / await", kind: "core" },
      { name: "Fetch + REST API", kind: "core" },
      { name: "Modules", kind: "core" },
      { name: "Event Loop", kind: "rec" },
      { name: "Error handling", kind: "rec" },
    ],
  },
  {
    id: "git",
    step: "05",
    title: "Git та GitHub",
    level: "Інструмент",
    desc: "Без цього не візьмуть на роботу. Заодно навчишся читати чужий код через PR-и.",
    topics: [
      { name: "Базові команди", kind: "core" },
      { name: "Branches + merge", kind: "core" },
      { name: "Pull Requests", kind: "core" },
      { name: "Conflict resolution", kind: "rec" },
      { name: "Rebase", kind: "rec" },
    ],
  },
  {
    id: "tooling",
    step: "06",
    title: "Інструменти",
    level: "Інструмент",
    desc: "DevTools, термінал, npm — щоденне приладдя, без якого ти повільний.",
    topics: [
      { name: "Chrome DevTools", kind: "core" },
      { name: "Термінал", kind: "core" },
      { name: "npm / package.json", kind: "core" },
      { name: "Vite", kind: "core" },
      { name: "ESLint + Prettier", kind: "rec" },
      { name: "VS Code", kind: "rec" },
    ],
  },
  {
    id: "react",
    step: "07",
    title: "React",
    level: "Фреймворк",
    desc: "Найпопулярніший фронтенд-фреймворк у вакансіях. Йдемо глибоко — не лише туторіали.",
    topics: [
      { name: "Компоненти + props", kind: "core" },
      { name: "useState + useEffect", kind: "core" },
      { name: "Список + ключі", kind: "core" },
      { name: "Forms", kind: "core" },
      { name: "Context API", kind: "core" },
      { name: "Router", kind: "core" },
      { name: "Custom hooks", kind: "rec" },
      { name: "Performance", kind: "rec" },
      { name: "React Query", kind: "rec" },
      { name: "Next.js", kind: "opt" },
    ],
  },
  {
    id: "ts",
    step: "08",
    title: "TypeScript",
    level: "Просунутий",
    desc: "Сьогодні майже кожна вакансія вимагає TS. Не страшно — після JS заходить плавно.",
    topics: [
      { name: "Базові типи", kind: "core" },
      { name: "Interfaces + types", kind: "core" },
      { name: "Generics", kind: "core" },
      { name: "Utility types", kind: "rec" },
      { name: "Type narrowing", kind: "rec" },
    ],
  },
  {
    id: "testing",
    step: "09",
    title: "Тестування",
    level: "Просунутий",
    desc: "Не обов'язково для першого оферу, але робить тебе помітно сильнішим кандидатом.",
    topics: [
      { name: "Vitest / Jest", kind: "core" },
      { name: "Testing Library", kind: "core" },
      { name: "E2E (Playwright)", kind: "opt" },
    ],
  },
  {
    id: "ai",
    step: "10",
    title: "AI-інструменти",
    level: "Опціонально",
    desc:
      "Не замінює знання, але прискорює роботу в рази. Вчимося користуватись свідомо — як підсилювач, а не як милиця.",
    topics: [
      { name: "Claude", kind: "rec" },
      { name: "GitHub Copilot", kind: "rec" },
      { name: "Cursor / AI IDE", kind: "opt" },
      { name: "Промптинг для коду", kind: "opt" },
      { name: "AI код-рев'ю", kind: "opt" },
    ],
  },
  {
    id: "career",
    step: "11",
    title: "Робота та кар'єра",
    level: "Фінал",
    desc:
      "Технічних знань мало — треба ще вміти подаватись, проходити співбесіди, переговорити зарплату.",
    topics: [
      { name: "Portfolio + GitHub", kind: "core" },
      { name: "CV + LinkedIn", kind: "core" },
      { name: "Технічні співбесіди", kind: "core" },
      { name: "Тестові завдання", kind: "core" },
      { name: "Переговори зарплати", kind: "rec" },
    ],
  },
];

const topicClass = (kind: Topic["kind"]) => {
  if (kind === "core") return `${styles.topic} ${styles.topicCore}`;
  if (kind === "rec") return `${styles.topic} ${styles.topicRec}`;
  return `${styles.topic} ${styles.topicOpt}`;
};

export const Roadmap = () => {
  const [active, setActive] = useState<string>(ROADMAP[0].id);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    ROADMAP.forEach((b) => {
      const el = document.getElementById(b.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section} id="roadmap">
      <div className={styles.secHead}>
        <div>
          <div className={styles.kicker}>§ 03</div>
          <h2>
            Що ти <span className={styles.accent}>вивчиш</span>
          </h2>
        </div>
        <div>
          <p className={styles.lede} style={{ marginTop: 0 }}>
            Повна дорога фронтенд-розробника — від «що таке HTML» до першого оферу. На основі
            roadmap.sh, скорочена до того, що дійсно потрібно для роботи.
          </p>
          <div className={styles.legend}>
            <span>
              <i className={styles.legendCore} /> базове — обов&apos;язково
            </span>
            <span>
              <i className={styles.legendRec} /> рекомендовано
            </span>
            <span>
              <i className={styles.legendOpt} /> опціонально
            </span>
          </div>
        </div>
      </div>

      <div className={styles.roadmap}>
        <nav className={styles.roadmapNav}>
          {ROADMAP.map((b) => (
            <a
              key={b.id}
              href={`#${b.id}`}
              className={active === b.id ? styles.roadmapNavActive : undefined}
            >
              {b.step} · {b.title}
            </a>
          ))}
        </nav>
        <div className={styles.roadmapMain}>
          {ROADMAP.map((b) => {
            const Ico = STEP_ICONS[b.id];
            return (
              <article key={b.id} id={b.id} className={styles.roadmapBlock}>
                <div className={styles.blockHead}>
                  <div className={styles.blockIcon}><Ico /></div>
                  <h3><span className={styles.step}>{b.step}</span>{b.title}</h3>
                  <div className={styles.level}>{b.level}</div>
                </div>
                <p className={styles.desc}>{b.desc}</p>
                <div className={styles.topics}>
                  {b.topics.map((t) => (
                    <span key={t.name} className={topicClass(t.kind)}>
                      {t.name}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
