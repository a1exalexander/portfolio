import type { Metadata, Viewport } from "next";
import { AnimatedCard } from "./_components/AnimatedCard";
import { ApplyForm } from "./_components/ApplyForm";
import { FAQ } from "./_components/FAQ";
import { FAQ_ITEMS } from "./_components/faq-items";
import { FadeUp } from "./_components/FadeUp";
import { FadeUpLi } from "./_components/FadeUpLi";
import { GrainOverlay } from "./_components/GrainOverlay";
import { MagnetButton } from "./_components/MagnetButton";
import { PhoneLink } from "./_components/PhoneLink";
import { Roadmap } from "./_components/Roadmap";
import { Testimonials } from "./_components/Testimonials";
import {
  BackIllo,
  FrontIllo,
  HeroIllo,
  KotyMark,
  PersonaJobs,
  PersonaStuck,
  PersonaZero,
} from "./_components/illustrations";
import {
  IconArrowR,
  IconGh,
  IconGlobe,
  IconLi,
  IconMail,
  IconSparkle,
  IconTg,
} from "./_components/icons";
import styles from "./page.module.css";

const SITE_URL = "https://www.sashkoratushnyi.com";
const MENTOR_URL = `${SITE_URL}/mentor`;
const CAREER_START_YEAR = 2018;
const yearsExp = new Date().getFullYear() - CAREER_START_YEAR;

export const viewport: Viewport = {
  themeColor: "#fffafc",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Менторство та навчання front-end та веб-розробці",
  description:
    "Курси програмування та менторство: вивчитись на програміста з нуля. JavaScript, React, TypeScript, front-end та веброзробка. Онлайн або офлайн у Кременчуці.",
  keywords: [
    "менторство",
    "ментор з програмування",
    "веброзробка",
    "фронтенд",
    "frontend",
    "JavaScript",
    "TypeScript",
    "React",
    "навчання фронтенду",
    "курси програмування",
    "Кременчук",
    "Олександр Ратушний",
  ],
  authors: [{ name: "Олександр Ратушний", url: SITE_URL }],
  creator: "Олександр Ратушний",
  alternates: { canonical: "/mentor" },
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
    title: "Менторство та навчання front-end та веб-розробці",
    description:
      "Курси програмування та менторство: вивчитись на програміста з нуля. JavaScript, React, TypeScript, front-end та веброзробка. Онлайн або офлайн у Кременчуці.",
    url: "/mentor",
    siteName: "sashkoratushnyi.com",
    type: "website",
    locale: "uk_UA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Менторство та навчання front-end та веб-розробці",
    description:
      "Курси програмування та менторство: вивчитись на програміста з нуля. JavaScript, React, TypeScript, front-end та веброзробка. Онлайн або офлайн у Кременчуці.",
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
      jobTitle: "JavaScript Engineer & Frontend Mentor",
      description:
        `JavaScript-інженер з Кременчука з ${yearsExp}+ роками комерційного досвіду. Викладає фронтенд з 2020 року.`,
      knowsAbout: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Web development",
      ],
      sameAs: [
        "https://github.com/a1exalexander",
        "https://www.linkedin.com/in/alexander-ratushnyi/",
        "https://t.me/a1exalexander",
        "https://www.instagram.com/a1exalexander/",
      ],
    },
    {
      "@type": "Service",
      "@id": `${MENTOR_URL}#service`,
      name: "Менторство у веб-розробці",
      url: MENTOR_URL,
      serviceType: "Web development mentorship",
      category: "Education",
      description:
        "Індивідуальне та групове менторство з фронтенд-розробки: JavaScript, TypeScript, React. Онлайн або офлайн у Кременчуку.",
      provider: { "@id": `${SITE_URL}/#person` },
      areaServed: [
        { "@type": "Country", name: "Ukraine" },
        { "@type": "Place", name: "Worldwide (online)" },
      ],
      availableLanguage: ["uk", "en"],
      audience: {
        "@type": "EducationalAudience",
        educationalRole: "student",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Формати менторства",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Індивідуальне менторство 1-на-1",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: 1000,
              priceCurrency: "UAH",
              unitCode: "HUR",
              referenceQuantity: {
                "@type": "QuantitativeValue",
                value: 1,
                unitCode: "HUR",
              },
            },
          },
          {
            "@type": "Offer",
            name: "Менторство у міні-групі (2–4 людини)",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: 400,
              priceCurrency: "UAH",
              unitCode: "HUR",
              referenceQuantity: {
                "@type": "QuantitativeValue",
                value: 1,
                unitCode: "HUR",
              },
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${MENTOR_URL}#faq`,
      mainEntity: FAQ_ITEMS.map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: { "@type": "Answer", text: it.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Менторство",
          item: MENTOR_URL,
        },
      ],
    },
  ],
};

export default function MentorPage() {
  return (
    <main className={styles.page} lang="uk">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GrainOverlay />
      <header className={styles.topbar}>
        <a href="/" className={styles.brandLockup}>
          <KotyMark className={styles.brandMark} />
          Oleksandr Ratushnyi<span className={styles.brandDot}>.</span>
        </a>
        <div className={styles.crumb}>
          <a href="/">/</a>
          <span className={styles.crumbHere}>mentor</span>
        </div>
      </header>

      {/* === Social bar === */}
      <div className={styles.socialBar}>
        <a href="https://www.sashkoratushnyi.com" className={`${styles.socialLink} ${styles.socialLinkWeb}`}>
          <IconGlobe /> sashkoratushnyi.com
        </a>
        <a href="https://github.com/a1exalexander" target="_blank" rel="noreferrer" className={`${styles.socialLink} ${styles.socialLinkGh}`}>
          <IconGh /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/alexander-ratushnyi/" target="_blank" rel="noreferrer" className={`${styles.socialLink} ${styles.socialLinkLi}`}>
          <IconLi /> LinkedIn
        </a>
        <a href="https://t.me/a1exalexander" target="_blank" rel="noreferrer" className={`${styles.socialLink} ${styles.socialLinkTg}`}>
          <IconTg /> Telegram
        </a>
        <a href="mailto:alexander.ratushnyi@gmail.com" className={`${styles.socialLink} ${styles.socialLinkMail}`}>
          <IconMail /> alexander.ratushnyi@gmail.com
        </a>
        <PhoneLink className={`${styles.socialLink} ${styles.socialLinkPhone}`} />
      </div>

      {/* === Hero === */}
      <section className={styles.hero}>
        <div>
          <FadeUp inView={false} delay={0}>
            <div className={styles.kicker}>Олександр Ратушний · front-end developer</div>
          </FadeUp>
          <FadeUp inView={false} delay={0.1}>
            <h1 className={styles.heroTitle}>
              Навчання і <span className={styles.accentRose}>менторство</span> у{" "}
              <span className={styles.accentViolet}>веб-розробці</span>
              <span className={styles.accentDot}>.</span>
            </h1>
          </FadeUp>
          <FadeUp inView={false} delay={0.22}>
            <p className={styles.heroLede}>
              Привіт. Я Олександр — JavaScript-інженер з Кременчука з {yearsExp}+ роками комерційного досвіду.
              Викладаю фронтенд з 2020 року, мої студенти працюють в українських і міжнародних
              компаніях.
            </p>
          </FadeUp>
          <FadeUp inView={false} delay={0.34}>
            <div className={styles.heroMeta}>
              <span className={`${styles.chip} ${styles.chipRose}`}>
                <i className={styles.chipDot} />
                Онлайн · Україна та світ
              </span>
              <span className={`${styles.chip} ${styles.chipViolet}`}>📍 Кременчук — офлайн</span>
              <span className={styles.chip}>JS · TS · React</span>
              <span className={styles.chip}>{yearsExp}+ років досвіду</span>
            </div>
          </FadeUp>
          <FadeUp inView={false} delay={0.44}>
            <div className={styles.heroCta}>
              <MagnetButton className={`${styles.btn} ${styles.btnPrimary}`} href="#apply">
                Залишити заявку <IconArrowR />
              </MagnetButton>
            </div>
          </FadeUp>
        </div>

        <FadeUp inView={false} delay={0.2} className={`${styles.illoFrame} ${styles.illoFrameLavender}`}>
          <HeroIllo />
          <span className={styles.illoFootTag}>{"/* mentor.cat — hello world */"}</span>
        </FadeUp>
      </section>

      {/* === Personas === */}
      <section className={styles.section} id="who">
        <div className={styles.secHead}>
          <div>
            <div className={styles.kicker}>§ 01</div>
            <h2>
              Для <span className={styles.accent}>кого</span>
            </h2>
          </div>
          <p className={styles.lede}>
            Менторство працює тоді, коли є конкретна задача. Знайди свій варіант — або напиши мені,
            якщо не впізнаєш себе.
          </p>
        </div>
        <div className={styles.personas}>
          <AnimatedCard className={styles.persona} delay={0} hover>
            <div className={styles.personaIcon}>
              <PersonaZero />
            </div>
            <div className={styles.personaNum}>01 — з нуля</div>
            <h3>Ніколи не писав коду</h3>
            <p>
              Хочеш змінити професію або просто спробувати. Почнемо з HTML, поступово прийдемо до
              React. Без поспіху — у твоєму темпі.
            </p>
          </AnimatedCard>
          <AnimatedCard className={styles.persona} delay={0.1} hover>
            <div className={styles.personaIcon}>
              <PersonaStuck />
            </div>
            <div className={styles.personaNum}>02 — застряг</div>
            <h3>Дивлюсь туторіали, але не виходить</h3>
            <p>
              Курси є, інформації забагато, а власний проект не зрушується. Розкладемо знання по
              поличках і збудуємо одне реальне портфоліо.
            </p>
          </AnimatedCard>
          <AnimatedCard className={styles.persona} delay={0.2} hover>
            <div className={styles.personaIcon}>
              <PersonaJobs />
            </div>
            <div className={styles.personaNum}>03 — шукаю роботу</div>
            <h3>Знаю код, але мовчать рекрутери</h3>
            <p>
              Перепишемо CV, оживимо GitHub, проведемо мок-співбесіди, відрепетируємо переговори. До
              оферу.
            </p>
          </AnimatedCard>
        </div>
      </section>

      {/* === Front vs Back === */}
      <section className={styles.section} id="front-vs-back">
        <div className={styles.secHead}>
          <div>
            <div className={styles.kicker}>§ 02</div>
            <h2>
              Фронтенд та <span className={styles.violet}>бекенд</span>
            </h2>
          </div>
          <p className={styles.lede}>
            Веб-розробник умовно ділиться на дві ролі. Я викладаю <strong>фронтенд</strong> — але
            важливо знати, з чим він взаємодіє і де закінчується твоя зона відповідальності.
          </p>
        </div>

        <div className={styles.split}>
          <div className={`${styles.splitCard} ${styles.splitCardFront}`}>
            <div className={styles.illoBg}>
              <FrontIllo />
            </div>
            <div className={styles.roleTag}>{"// сторона користувача · браузер"}</div>
            <h3>Фронтенд</h3>
            <p>
              <strong>Це я.</strong> Фронтенд-розробник створює повноцінні веб-сайти і додатки — не
              лише «малює» UI, а й пише логіку, працює з формами, авторизацією, інтегрує API,
              обробляє стан, валідацію, маршрутизацію, кеш, помилки. Це повноцінний інженер, що
              відповідає за все, що користувач бачить і робить у браузері.
            </p>
            <ul className={styles.whatTheyDo}>
              <li>Інтерфейс, верстка, респонсив</li>
              <li>Форми, валідація, авторизація</li>
              <li>Стан, бізнес-логіка у клієнті</li>
              <li>Інтеграція з API (REST, GraphQL)</li>
              <li>Standalone-додатки (PWA, SPA)</li>
            </ul>
            <div className={styles.stack}>
              <span className={`${styles.chip} ${styles.chipRose}`}>HTML</span>
              <span className={`${styles.chip} ${styles.chipRose}`}>CSS</span>
              <span className={`${styles.chip} ${styles.chipRose}`}>JavaScript</span>
              <span className={`${styles.chip} ${styles.chipRose}`}>TypeScript</span>
              <span className={`${styles.chip} ${styles.chipRose}`}>React</span>
            </div>
          </div>

          <div className={`${styles.splitCard} ${styles.splitCardBack}`}>
            <div className={styles.illoBg}>
              <BackIllo />
            </div>
            <div className={styles.roleTag}>{"// сторона сервера · backend"}</div>
            <h3>Бекенд</h3>
            <p>
              Бекенд-розробник створює <strong>власний API з нуля</strong> — пише серверну логіку,
              проектує базу даних, обробляє паролі та платежі, налаштовує безпеку, інфраструктуру,
              моніторинг. Все, що відбувається <em>після</em> того, як користувач натиснув кнопку, —
              його робота.
            </p>
            <ul className={styles.whatTheyDo}>
              <li>API з нуля (REST / GraphQL)</li>
              <li>Бази даних, схеми, міграції</li>
              <li>Авторизація, токени, безпека</li>
              <li>Платежі, інтеграції, фонові задачі</li>
              <li>Інфраструктура, деплой, моніторинг</li>
            </ul>
            <div className={styles.stack}>
              <span className={`${styles.chip} ${styles.chipViolet}`}>Node.js</span>
              <span className={`${styles.chip} ${styles.chipViolet}`}>Python</span>
              <span className={`${styles.chip} ${styles.chipViolet}`}>PostgreSQL</span>
              <span className={`${styles.chip} ${styles.chipViolet}`}>Redis</span>
              <span className={`${styles.chip} ${styles.chipViolet}`}>Docker</span>
            </div>
          </div>
        </div>

        <div className={styles.splitNote}>
          <IconSparkle />
          <span>
            Фронтенд усе одно може створювати повноцінні сайти, інтернет-магазини, сервіси та
            додатки без глибоких знань бекенду —{" "}
            <strong>за допомогою допоміжних сервісів</strong>, яких сьогодні величезна кількість.
          </span>
        </div>
      </section>

      {/* === Roadmap (client) === */}
      <Roadmap />

      {/* === How it works === */}
      <section className={styles.section} id="how">
        <div className={styles.secHead}>
          <div>
            <div className={styles.kicker}>§ 04</div>
            <h2>
              Як <span className={styles.accent}>працюємо</span>
            </h2>
          </div>
          <p className={styles.lede}>
            Все максимально просто. Без заплутаних тарифів, контрактів чи курсів-конвеєрів.
          </p>
        </div>
        <ol className={styles.stepper}>
          <FadeUpLi className={styles.stepperItem} delay={0}>
            <div className={styles.stepperNode}>1</div>
            <div className={styles.stepperBody}>
              <h4>Ти залишаєш заявку</h4>
              <p>Коротка форма нижче. Або ж пиши напряму в Telegram.</p>
            </div>
          </FadeUpLi>
          <FadeUpLi className={styles.stepperItem} delay={0.12}>
            <div className={styles.stepperNode}>2</div>
            <div className={styles.stepperBody}>
              <h4>Безкоштовний ознайомчий дзвінок</h4>
              <p>Знайомимось, визначаємо твої цілі та чи підходимо одне одному.</p>
            </div>
          </FadeUpLi>
          <FadeUpLi className={styles.stepperItem} delay={0.24}>
            <div className={styles.stepperNode}>3</div>
            <div className={styles.stepperBody}>
              <h4>Складаємо план</h4>
              <p>
                Готую персональну програму під твій рівень та цілі.
              </p>
            </div>
          </FadeUpLi>
          <FadeUpLi className={styles.stepperItem} delay={0.36}>
            <div className={styles.stepperNode}>4</div>
            <div className={styles.stepperBody}>
              <h4>Працюємо до результату</h4>
              <p>
                Живі сесії онлайн (або офлайн у Кременчуку), код-рев&apos;ю твоїх проектів, підтримка
                в Telegram між зустрічами.
              </p>
            </div>
          </FadeUpLi>
        </ol>
      </section>

      {/* === Pricing === */}
      <section className={styles.section} id="pricing">
        <div className={styles.secHead}>
          <div>
            <div className={styles.kicker}>§ 05</div>
            <h2>
              Скільки це <span className={styles.accent}>коштує</span>
            </h2>
          </div>
          <p className={styles.lede}>
            Дві опції — обирай свою. Знайомство безкоштовне в обох випадках.
          </p>
        </div>
        <div className={styles.pricing}>
          <AnimatedCard className={`${styles.priceCard} ${styles.priceCardFeatured}`} delay={0} hover>
            <span className={styles.badge}>Рекомендую</span>
            <div className={styles.role}>Індивідуально</div>
            <h3>1-на-1 з ментором</h3>
            <div className={styles.price}>
              <span className={styles.priceNum}>1000</span>
              <span className={styles.priceUnit}>₴ / година</span>
            </div>
            <p className={styles.priceDesc}>
              Тільки ти і я. Програма під твою ціль, гнучкий графік, повна увага.
            </p>
            <ul>
              <li>Персональна програма</li>
              <li>Код-рев&apos;ю</li>
              <li>Telegram-чат між зустрічами</li>
              <li>Допомога з пошуком роботи</li>
            </ul>
            <div className={styles.ctaRow}>
              <a className={`${styles.btn} ${styles.btnPrimary}`} href="#apply">
                Хочу 1-на-1 <IconArrowR />
              </a>
            </div>
          </AnimatedCard>

          <AnimatedCard className={styles.priceCard} delay={0.15} hover>
            <span className={styles.badge}>Економно</span>
            <div className={styles.role}>У групі</div>
            <h3>Заняття в міні-групі</h3>
            <div className={styles.price}>
              <span className={styles.priceNum}>400</span>
              <span className={styles.priceUnit}>₴ / година</span>
            </div>
            <p className={styles.priceDesc}>
              Група з 2–4 людей подібного рівня. Спільна програма, дешевше, мотивує не здаватися.
            </p>
            <ul>
              <li>Спільна програма групи</li>
              <li>Код-рев&apos;ю</li>
              <li>Спільні проекти</li>
              <li>Можна перейти на 1-на-1 у будь-який момент</li>
            </ul>
            <div className={styles.ctaRow}>
              <a className={`${styles.btn} ${styles.btnGhost}`} href="#apply">
                Хочу в групу <IconArrowR />
              </a>
            </div>
          </AnimatedCard>
        </div>
        <p className={styles.priceMuted}>
          → Перше заняття — без ризику: якщо вирішиш не продовжувати, можеш за нього не платити.
          Далі — оплата по факту проведених годин, без передоплат.
        </p>
      </section>

      {/* === Testimonials (client carousel) === */}
      <Testimonials />

      {/* === FAQ (client) === */}
      <FAQ />

      {/* === Apply === */}
      <section className={styles.section} id="apply">
        <div className={styles.secHead}>
          <div>
            <div className={styles.kicker}>§ 08</div>
            <h2>
              Залишити <span className={styles.accent}>заявку</span>
            </h2>
          </div>
          <p className={styles.lede}>
            Кілька питань, щоб я зрозумів, з чим ти приходиш.
          </p>
        </div>
        <ApplyForm />
        <p className={styles.applyMore}>
          → або одразу в{" "}
          <a
            className={styles.monoLink}
            href="https://t.me/a1exalexander"
            target="_blank"
            rel="noreferrer"
          >
            <IconTg />
            Telegram
          </a>{" "}
          / на{" "}
          <a className={styles.monoLink} href="mailto:alexander.ratushnyi@gmail.com">
            <IconMail />
            email
          </a>{" "}
          / у{" "}
          <a
            className={styles.monoLink}
            href="https://www.linkedin.com/in/alexander-ratushnyi/"
            target="_blank"
            rel="noreferrer"
          >
            <IconLi />
            LinkedIn
          </a>
          .
        </p>
      </section>

      {/* === Page-local Footer === */}
      <footer className={styles.foot}>
        <div className={styles.footLeft}>
          <p className={styles.footName}>Олександр Ратушний</p>
          <div className={styles.footLinks}>
            <a href="/">← на головну</a>
            <a href="/blog">блог</a>
            <a href="https://github.com/a1exalexander" target="_blank" rel="noreferrer">
              <IconGh />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/alexander-ratushnyi/"
              target="_blank"
              rel="noreferrer"
            >
              <IconLi />
              LinkedIn
            </a>
            <a href="https://t.me/a1exalexander" target="_blank" rel="noreferrer">
              <IconTg />
              Telegram
            </a>
            <a href="mailto:alexander.ratushnyi@gmail.com">
              <IconMail />
              Email
            </a>
            <PhoneLink />
          </div>
        </div>
        <div className={styles.footRight}>
          <span>Кременчук, Україна 🇺🇦</span>
        </div>
      </footer>
    </main>
  );
}
