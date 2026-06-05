import type { Metadata, Viewport } from "next";
import { PhoneLink } from "../mentor/_components/PhoneLink";
import { ContactCTA } from "./_components/ContactCTA";
import { ServicesForm } from "./_components/ServicesForm";
import { SERVICES } from "./_components/services-data";
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

export const viewport: Viewport = {
  themeColor: "#f8f8fb",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Послуги веброзробки — Олександр Ратушний",
  description:
    "Послуги веброзробки від Олександра Ратушного — JavaScript/TypeScript інженера. Сайти, веб-застосунки, розробка нових функцій та підтримка проєктів. Досвід у веброзробці з 2018 року.",
  keywords: [
    "веброзробка",
    "розробка сайтів",
    "веб-застосунки",
    "frontend",
    "фронтенд",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "односторінковий сайт",
    "корпоративний сайт",
    "CMS",
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
    title: "Послуги веброзробки — Олександр Ратушний",
    description:
      "Послуги веброзробки: сайти, веб-застосунки, розробка нових функцій та підтримка проєктів. JavaScript/TypeScript інженер з досвідом у SaaS, fintech та crypto.",
    url: "/services",
    siteName: "sashkoratushnyi.com",
    type: "website",
    locale: "uk_UA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Послуги веброзробки — Олександр Ратушний",
    description:
      "Послуги веброзробки: сайти, веб-застосунки, розробка нових функцій та підтримка проєктів.",
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
      sameAs: [GITHUB, LINKEDIN, TELEGRAM, "https://www.instagram.com/a1exalexander/"],
    },
    {
      "@type": "Service",
      "@id": `${SERVICES_URL}#service`,
      name: "Веброзробка",
      url: SERVICES_URL,
      serviceType: "Web development",
      provider: { "@id": `${SITE_URL}/#person` },
      areaServed: { "@type": "Place", name: "Worldwide (online)" },
      availableLanguage: ["uk", "en"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Послуги веброзробки",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          name: s.title,
          description: s.summary,
        })),
      },
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

export default function ServicesPage() {
  return (
    <main className={styles.page} lang="uk">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.frame}>
        {/* === Header === */}
        <header className={styles.siteHead}>
          <div className={styles.bar}>
            <a className={styles.brand} href="/" aria-label="Олександр Ратушний — на головну">
              <span className={styles.mark}>
                <KotyMark />
              </span>
              <span className={styles.who}>
                <b>Олександр Ратушний</b>
                <span>веб-інженер · JS / TS</span>
              </span>
            </a>
            <nav className={styles.nav} aria-label="Основна навігація">
              <a className={`${styles.navlink} ${styles.hideSm}`} href="#services">
                Послуги
              </a>
              <a className={`${styles.navlink} ${styles.hideSm}`} href="#why">
                Чому я
              </a>
              <a className={`${styles.navlink} ${styles.hideSm}`} href="#contact">
                Контакти
              </a>
              <ContactCTA className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSm}`}>
                Почати проєкт <IconArrowR className={styles.arr} />
              </ContactCTA>
            </nav>
          </div>
        </header>

        {/* === Hero === */}
        <section className={`${styles.section} ${styles.hero}`} id="top">
          <div className={styles.gridBg} aria-hidden="true" />
          <Plus pos="tl" />
          <Plus pos="tr" />
          <div className={styles.eyebrowRow}>
            <span className={styles.kicker}>
              <span className={styles.dot} /> Послуги веброзробки
            </span>
          </div>
          <div className={styles.heroGrid}>
            <div>
              <h1 className={styles.hHero}>
                Розробка сайтів і веб-застосунків на{" "}
                <span className={styles.accentword}>JavaScript та TypeScript.</span>
              </h1>
              <p className={styles.lede}>
                JavaScript та TypeScript інженер. Розробляю проєкти з нуля та приєднуюсь до наявних
                команд. У веброзробці з 2018 року.
              </p>
              <div className={styles.ctaRow}>
                <ContactCTA className={`${styles.btn} ${styles.btnPrimary}`}>
                  Почати проєкт <IconArrowR className={styles.arr} />
                </ContactCTA>
                <a className={`${styles.btn} ${styles.btnGhost}`} href="#services">
                  Дивитись послуги
                </a>
              </div>
            </div>
            <aside className={styles.heroMeta}>
              <div className={styles.metaBlock}>
                <span className={styles.mono}>Досвід з</span>
                <div className={styles.val}>
                  <b>2018</b> року у веброзробці.
                </div>
              </div>
              <div className={styles.metaBlock}>
                <span className={styles.mono}>Індустрії</span>
                <div className={styles.val}>SaaS · Fintech · Crypto · Wealth management</div>
              </div>
              <div className={styles.metaBlock}>
                <span className={styles.mono}>Напрям</span>
                <div className={styles.val}>Front-end та full-stack розробка.</div>
              </div>
            </aside>
          </div>
        </section>

        {/* === Services === */}
        <section className={styles.section} id="services">
          <Plus pos="tl" />
          <Plus pos="tr" />
          <div className={styles.eyebrowRow}>
            <span className={styles.kicker}>
              <span className={styles.dot} /> Послуги
            </span>
            <span className={styles.mono}>01 — 04 · оберіть, щоб отримати оцінку</span>
          </div>
          <h2 className={styles.hSection} style={{ maxWidth: "18ch" }}>
            Чотири напрями веброзробки.
          </h2>
          <div className={styles.svcRack}>
            {SERVICES.map((s) => (
              <article className={styles.svc} key={s.num}>
                <span className={styles.num}>{s.num}</span>
                <h3>{s.title}</h3>
                <p className={styles.summary}>{s.summary}</p>
                <div className={styles.price}>
                  <span className={styles.priceLab}>{s.priceLabel}</span>
                  <span className={styles.priceVal}>{s.price}</span>
                </div>
                <div className={styles.label}>Що входить</div>
                <ul>
                  {s.get.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
                <div className={styles.label}>Для кого</div>
                <p className={styles.who}>{s.who}</p>
                <div className={styles.svcFoot}>
                  <ContactCTA className={styles.quoteBtn} service={s.value}>
                    Отримати оцінку <IconArrowR className={styles.arr} />
                  </ContactCTA>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* === Why work with me === */}
        <section className={styles.section} id="why">
          <Plus pos="tl" />
          <Plus pos="tr" />
          <div className={styles.whyGrid}>
            <div className={styles.whyIntro}>
              <span className={styles.kicker}>
                <span className={styles.dot} /> Чому саме я
              </span>
              <h2 className={styles.hSection}>
                Один інженер для повного циклу розробки.
              </h2>
              <p>
                Маю досвід у продуктах SaaS, fintech, crypto та wealth management. Працюю з
                веброзробкою з 2018 року — у front-end та full-stack напрямах, самостійно та у
                складі команд.
              </p>
              <p>
                Навчаю та менторю фронтенд-розробників. Приділяю увагу читабельності коду,
                документації та прозорості технічних рішень.
              </p>
              <div className={styles.whyExtra}>
                <span className={styles.chip}>JavaScript</span>
                <span className={styles.chip}>TypeScript</span>
                <span className={styles.chip}>React</span>
                <span className={styles.chip}>Node</span>
                <span className={styles.chip}>Дизайн-системи</span>
                <span className={styles.chip}>Продуктивність</span>
              </div>
            </div>
            <div>
              <div className={styles.whyFacts}>
                <div className={styles.fact}>
                  <div className={styles.big}>2018</div>
                  <div className={styles.lab}>
                    <span style={{ display: "block" }}>досвід у</span>
                    <span style={{ display: "block" }}>веброзробці з</span>
                  </div>
                </div>
                <div className={styles.fact}>
                  <div className={styles.big}>4+</div>
                  <div className={styles.lab}>
                    <span style={{ display: "block" }}>галузі, де</span>
                    <span style={{ display: "block" }}>є досвід</span>
                  </div>
                </div>
                <div className={styles.fact}>
                  <div className={styles.big}>20+</div>
                  <div className={styles.lab}>
                    <span style={{ display: "block" }}>реалізованих</span>
                    <span style={{ display: "block" }}>проєктів</span>
                  </div>
                </div>
                <a className={`${styles.fact} ${styles.factLink}`} href="/mentor">
                  <div className={styles.big}>1:1</div>
                  <div className={styles.lab}>
                    <span style={{ display: "block" }}>ментор з</span>
                    <span style={{ display: "block" }}>фронтенду →</span>
                  </div>
                </a>
              </div>
              <div className={styles.portrait} aria-hidden="true">
                <span className={styles.pcap}>Фото — опційно</span>
              </div>
            </div>
          </div>
        </section>

        {/* === Contact === */}
        <section className={`${styles.section} ${styles.contact}`} id="contact">
          <Plus pos="tl" />
          <Plus pos="tr" />
          <div className={styles.contactGrid}>
            <div className={styles.contactAside}>
              <span className={styles.kicker}>
                <span className={styles.dot} /> Почати проєкт
              </span>
              <h2 className={styles.hSection}>Опишіть свій проєкт.</h2>
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
                Базуюсь в Україні 🇺🇦 · працюю з командами по всьому світу.
              </p>
            </div>
            <ServicesForm />
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
            <span className={styles.mono}>© 2026 Олександр Ратушний · веб-інженер</span>
            <ContactCTA className={styles.quoteBtn} style={{ width: "auto" }}>
              Почати проєкт <IconArrowR className={styles.arr} />
            </ContactCTA>
          </div>
        </footer>
      </div>
    </main>
  );
}
