import type { Metadata, Viewport } from "next";
import { AnimatedCard } from "../mentor/_components/AnimatedCard";
import { FadeUp } from "../mentor/_components/FadeUp";
import { FadeUpLi } from "../mentor/_components/FadeUpLi";
import { PhoneLink } from "../mentor/_components/PhoneLink";
import { HeroBody } from "./_components/HeroBody";
import { ContactCTA } from "./_components/ContactCTA";
import { CRTOverlay } from "./_components/CRTOverlay";
import { FAQ } from "./_components/FAQ";
import { FAQ_ITEMS } from "./_components/faq-items";
import { ProjectsCarousel } from "./_components/ProjectsCarousel";
import { ServicesForm } from "./_components/ServicesForm";
import { SERVICES } from "./_components/services-data";
import { StatusBar } from "./_components/StatusBar";
import { TechStack } from "./_components/TechStack";
import { Typewriter } from "./_components/Typewriter";
import {
  IconArrowR,
  IconGh,
  IconGlobe,
  IconLi,
  IconMail,
  IconTg,
  KotyMark,
} from "./_components/icons";
import styles from "./page.module.css";

const SITE_URL = "https://www.sashkoratushnyi.com";
const SERVICES_URL = `${SITE_URL}/services`;
const EMAIL = "alexander.ratushnyi@gmail.com";
const GITHUB = "https://github.com/a1exalexander";
const LINKEDIN = "https://www.linkedin.com/in/alexander-ratushnyi/";
const TELEGRAM = "https://t.me/a1exalexander";

const PROCESS = [
  {
    num: "01",
    title: "Брифінг",
    text: "Обговорюємо ідею, цілі, обсяг і терміни.",
  },
  {
    num: "02",
    title: "Оцінка та план",
    text: "Фіксую обсяг робіт і даю конкретну оцінку вартості та строків.",
  },
  {
    num: "03",
    title: "Дизайн / прототип",
    text: "Структура та UI/UX за потреби — узгоджуємо напрямок.",
  },
  {
    num: "04",
    title: "Розробка",
    text: "Розробка з прозорими апдейтами на кожному етапі.",
  },
  {
    num: "05",
    title: "QA та запуск",
    text: "Тестування, розгортання і передача коду та всіх прав.",
  },
];

export const viewport: Viewport = {
  themeColor: "#1c1b26",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Послуги веб-розробки — Олександр Ратушний, Кременчук",
  description:
    "Розробка сайтів, веб-застосунків та SaaS-продуктів з нуля або розвиток існуючих. 8+ років досвіду, працюю віддалено з усім світом.",
  keywords: [
    "веб-розробка",
    "розробка сайтів",
    "веб-застосунки",
    "Webflow",
    "frontend",
    "front-end",
    "фронтенд",
    "full-stack",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "односторінковий сайт",
    "корпоративний сайт",
    "CMS",
    "веб-розробка Кременчук",
    "веб-розробка Україна",
    "Олександр Ратушний",
  ],
  authors: [{ name: "Олександр Ратушний", url: SITE_URL }],
  creator: "Олександр Ратушний",
  alternates: { canonical: "/services" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Послуги веб-розробки — Олександр Ратушний, Кременчук",
    description:
      "Розробка сайтів, веб-застосунків та SaaS. 8+ років досвіду в SaaS, fintech, crypto. Кременчук — працюю віддалено з усім світом.",
    url: "/services",
    siteName: "sashkoratushnyi.com",
    type: "website",
    locale: "uk_UA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Послуги веб-розробки — Олександр Ратушний, Кременчук",
    description:
      "Розробка сайтів, веб-застосунків та SaaS. 8+ років досвіду в SaaS, fintech, crypto. Кременчук — працюю віддалено з усім світом.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Олександр Ратушний",
      alternateName: ["Oleksandr Ratushnyi", "Sashko Ratushnyi", "a1exalexander"],
      url: SITE_URL,
      image: `${SITE_URL}/android-chrome-512x512.png`,
      jobTitle: "JavaScript Engineer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Кременчук",
        addressRegion: "Полтавська область",
        addressCountry: "UA",
      },
      sameAs: [GITHUB, LINKEDIN, TELEGRAM, "https://www.instagram.com/a1exalexander/"],
    },
    {
      "@type": "Service",
      "@id": `${SERVICES_URL}#service`,
      name: "Веб-розробка",
      url: SERVICES_URL,
      serviceType: "Web development",
      provider: { "@id": `${SITE_URL}/#person` },
      areaServed: { "@type": "Place", name: "Worldwide (online)" },
      availableLanguage: ["uk"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Послуги веб-розробки",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          name: s.title,
          description: s.summary,
        })),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.filter((it) => typeof it.a === "string").map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: { "@type": "Answer", text: it.a as string },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Послуги", item: SERVICES_URL },
      ],
    },
  ],
};

function Plus({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  return <span className={`${styles.plus} ${styles[pos]}`} aria-hidden="true" />;
}

function Prompt({ cmd }: { cmd: string }) {
  return (
    <span className={styles.prompt}>
      <span className={styles.promptUser}>sashko@portfolio</span>
      <span className={styles.promptColon}>:</span>
      <span className={styles.promptPath}>~/services</span>
      <span className={styles.promptSign}>$</span>
      <Typewriter
        text={cmd}
        inView
        speed={36}
        cursor={false}
        className={styles.promptCmd}
      />
    </span>
  );
}

function TermBar({ title }: { title: string }) {
  return (
    <div className={styles.termBar}>
      <span className={styles.termDots} aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className={styles.termTitle}>{title}</span>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className={styles.page} lang="uk">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CRTOverlay />
      <div className={styles.frame}>
        {/* === Header === */}
        <header className={styles.siteHead}>
          <div className={styles.bar}>
            <a className={styles.brand} href="/" aria-label="Олександр Ратушний — на головну">
              <span className={styles.mark}>
                <KotyMark />
              </span>
              <span className={styles.who}>
                <b>sashko@portfolio</b>
                <span>~/services · JS / TS</span>
              </span>
            </a>
            <nav className={styles.nav} aria-label="Основна навігація">
              <a className={`${styles.navlink} ${styles.hideSm}`} href="#services">
                services
              </a>
              <a className={`${styles.navlink} ${styles.hideSm}`} href="#process">
                process
              </a>
              <a className={`${styles.navlink} ${styles.hideSm}`} href="#work">
                projects
              </a>
              <a className={`${styles.navlink} ${styles.hideSm}`} href="#why">
                about
              </a>
              <a className={`${styles.navlink} ${styles.hideSm}`} href="#faq">
                faq
              </a>
              <ContactCTA className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSm}`}>
                ./contact <IconArrowR className={styles.arr} />
              </ContactCTA>
            </nav>
          </div>
        </header>

        {/* === Hero (terminal window) === */}
        <section className={`${styles.section} ${styles.hero}`} id="top">
          <h1 className={styles.srOnly}>Розробка сайтів і веб-застосунків.</h1>
          <div className={styles.gridBg} aria-hidden="true" />
          <div className={styles.heroGlow} aria-hidden="true" />
          <Plus pos="tl" />
          <Plus pos="tr" />
          <FadeUp className={styles.termWin} inView={false}>
            <TermBar title="sashko@portfolio: ~/services — zsh" />
            <HeroBody />
          </FadeUp>
        </section>

        {/* === Tech stack === */}
        <section className={styles.section} id="stack">
          <Plus pos="tl" />
          <Plus pos="tr" />
          <FadeUp className={styles.eyebrowRow}>
            <Prompt cmd="cat stack.txt" />
            <span className={styles.mono}>front-end · full-stack</span>
          </FadeUp>
          <FadeUp>
            <h2 className={styles.hSection} style={{ maxWidth: "20ch" }}>
              Технології, з якими я працюю
            </h2>
            <p className={styles.lede} style={{ marginTop: 18 }}>
              Великий фан React і NestJS — але підбираю інструменти під задачу, а не навпаки.
            </p>
          </FadeUp>
          <TechStack />
        </section>

        {/* === Services === */}
        <section className={styles.section} id="services">
          <Plus pos="tl" />
          <Plus pos="tr" />
          <FadeUp className={styles.eyebrowRow}>
            <Prompt cmd="ls ./services" />
            <span className={styles.mono}>01 — 04 · оберіть, щоб отримати оцінку</span>
          </FadeUp>
          <FadeUp>
            <h2 className={styles.hSection} style={{ maxWidth: "18ch" }}>
              Чотири напрями веброзробки
            </h2>
          </FadeUp>
          <div className={styles.svcRack}>
            {SERVICES.map((s, i) => (
              <AnimatedCard className={styles.svc} key={s.num} delay={i * 0.08} hover>
                <span className={styles.num}>{s.num}</span>
                <h3>{s.title}</h3>
                <p className={styles.summary}>{s.summary}</p>
                <div className={styles.label}>Що входить</div>
                <ul>
                  {s.get.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
                <div className={styles.svcFoot}>
                  <ContactCTA className={styles.quoteBtn} service={s.value}>
                    Отримати оцінку <IconArrowR className={styles.arr} />
                  </ContactCTA>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </section>

        {/* === Process === */}
        <section className={`${styles.section} ${styles.process}`} id="process">
          <Plus pos="tl" />
          <Plus pos="tr" />
          <FadeUp className={styles.eyebrowRow}>
            <Prompt cmd="man workflow" />
            <span className={styles.mono}>5 кроків · прозоро</span>
          </FadeUp>
          <FadeUp>
            <h2 className={styles.hSection} style={{ maxWidth: "16ch" }}>
              Як ми працюємо над проєктом
            </h2>
          </FadeUp>
          <ol className={styles.steps}>
            {PROCESS.map((p, i) => (
              <FadeUpLi className={styles.step} key={p.num} delay={i * 0.1}>
                <span className={styles.stepNum}>{p.num}</span>
                <div className={styles.stepBody}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </FadeUpLi>
            ))}
          </ol>
        </section>

        {/* === Projects === */}
        <section className={`${styles.section} ${styles.workSection}`} id="work">
          <Plus pos="tl" />
          <Plus pos="tr" />
          <FadeUp className={styles.eyebrowRow}>
            <Prompt cmd="git log --oneline --projects" />
            <span className={styles.mono}>20+ реалізованих</span>
          </FadeUp>
          <FadeUp>
            <h2 className={styles.hSection} style={{ maxWidth: "20ch" }}>
              Над чим я працював
            </h2>
            <p className={styles.lede} style={{ marginTop: 18 }}>
              Клієнтські продукти в агенціях Merge та Mavinx — і власні pet-проєкти. SaaS, fintech,
              crypto, wealth management та інше.
            </p>
          </FadeUp>
          <ProjectsCarousel />
        </section>

        {/* === Why work with me === */}
        <section className={styles.section} id="why">
          <Plus pos="tl" />
          <Plus pos="tr" />
          <div className={styles.whyGrid}>
            <FadeUp className={styles.whyIntro}>
              <Prompt cmd="whoami" />
              <h2 className={styles.hSection}>Олександр Ратушний - веб-розробник</h2>
              <p>
                Розробляю вебпродукти з 2018 року. Маю досвід у SaaS, fintech, crypto та wealth
                management — від інтерфейсів до бекенду й API.{" "}
                <a href="/" className={styles.monoLink}>
                  Детальніше про мене →
                </a>
              </p>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div className={styles.whyFacts}>
                <div className={styles.fact}>
                  <div className={styles.big}>2018</div>
                  <div className={styles.lab}>
                    <span>досвід у</span>
                    <span>веброзробці з</span>
                  </div>
                </div>
                <div className={styles.fact}>
                  <div className={styles.big}>4+</div>
                  <div className={styles.lab}>
                    <span>галузі, де</span>
                    <span>є досвід</span>
                  </div>
                </div>
                <div className={`${styles.fact} ${styles.factDark}`}>
                  <div className={styles.big}>20+</div>
                  <div className={styles.lab}>
                    <span>реалізованих</span>
                    <span>проєктів</span>
                  </div>
                </div>
                <a className={`${styles.fact} ${styles.factLink}`} href="/mentor">
                  <div className={styles.big}>1:1</div>
                  <div className={styles.lab}>
                    <span>ментор з</span>
                    <span>фронтенду →</span>
                  </div>
                </a>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* === FAQ === */}
        <section className={styles.section} id="faq">
          <Plus pos="tl" />
          <Plus pos="tr" />
          <FadeUp className={styles.eyebrowRow}>
            <Prompt cmd="./faq --list" />
            <span className={styles.mono}>
              питання? →{" "}
              <a className={styles.monoLink} href={TELEGRAM} target="_blank" rel="noreferrer">
                Telegram
              </a>
            </span>
          </FadeUp>
          <FadeUp>
            <h2 className={styles.hSection} style={{ maxWidth: "14ch" }}>
              Часті питання
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <FAQ />
          </FadeUp>
        </section>

        {/* === Contact (terminal window) === */}
        <section className={`${styles.section} ${styles.contact}`} id="contact">
          <Plus pos="tl" />
          <Plus pos="tr" />
          <div className={styles.contactGrid}>
            <FadeUp className={styles.contactAside}>
              <Prompt cmd="./contact --send" />
              <h2 className={styles.hSection}>Опишіть свій проєкт</h2>
              <p>
                Що більше деталей, то точніша попередня оцінка. Посилання та терміни допоможуть
                відповісти конкретніше.
              </p>
              <div className={styles.direct}>
                <a href={`mailto:${EMAIL}`}>
                  <IconMail /> {EMAIL}
                </a>
                <a href={TELEGRAM} target="_blank" rel="noreferrer">
                  <IconTg /> Telegram
                </a>
                <PhoneLink />
              </div>
              <p className={styles.note}>
                Базуюсь в м. Кременчук, Україна 🇺🇦 · працюю по всьому світу.
              </p>
              <p className={styles.note}>
                Беру обмежену кількість приватних проєктів у вільний час.
              </p>
            </FadeUp>
            <FadeUp delay={0.1} className={styles.termWin}>
              <TermBar title="contact — new message" />
              <ServicesForm />
            </FadeUp>
          </div>
        </section>

        {/* === Footer === */}
        <footer className={`${styles.section} ${styles.siteFoot}`} id="footer">
          <Plus pos="tl" />
          <Plus pos="tr" />
          <div className={styles.footTop}>
            <h2 className={styles.footStatement}>Зв&apos;яжіться для співпраці.</h2>
            <div className={styles.footLinks} aria-label="Контактні посилання">
              <a href={`mailto:${EMAIL}`}>
                <span className={styles.ext}>
                  <IconMail />
                </span>{" "}
                Email
              </a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                <span className={styles.ext}>
                  <IconGh />
                </span>{" "}
                GitHub
              </a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                <span className={styles.ext}>
                  <IconLi />
                </span>{" "}
                LinkedIn
              </a>
              <a href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                <span className={styles.ext}>
                  <IconTg />
                </span>{" "}
                Telegram
              </a>
              <a href={SITE_URL} target="_blank" rel="noopener noreferrer">
                <span className={styles.ext}>
                  <IconGlobe />
                </span>{" "}
                Головний сайт
              </a>
            </div>
          </div>
          <div className={styles.footBottom}>
            <span className={styles.mono}>$ exit · © 2026 Олександр Ратушний · веб-інженер</span>
            <ContactCTA className={styles.quoteBtn} style={{ width: "auto" }}>
              Почати проєкт <IconArrowR className={styles.arr} />
            </ContactCTA>
          </div>
        </footer>
      </div>
      <StatusBar />
    </main>
  );
}
