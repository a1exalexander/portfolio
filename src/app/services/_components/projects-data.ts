// Projects pulled from the home page (src/app/page.tsx) — both client work
// (built at the Merge agency / Mavinx) and personal pet-projects. Each item is
// tagged with the company / outsourcing studio it was built for. Descriptions
// are condensed Ukrainian one-liners so the /services page stays consistently
// Ukrainian.

export type ProjectStatus = "live" | "demo" | "offline";

/** Drives the colour of the company chip on a card. */
export type CompanyTone = "gold" | "orange" | "maroon";

export interface CarouselProject {
  title: string;
  year: string;
  /** Company / outsourcing studio the project was built for. */
  company: string;
  companyTone: CompanyTone;
  status: ProjectStatus;
  href?: string;
  description: string;
  /** Top technologies (text chips). */
  stack: string[];
}

const STATUS_LABEL: Record<ProjectStatus, string> = {
  live: "Live",
  demo: "Demo",
  offline: "Офлайн",
};

export const statusLabel = (s: ProjectStatus) => STATUS_LABEL[s];

export const PROJECTS: CarouselProject[] = [
  // ---- Merge (agency / outsource, ex-CTO & co-founder) --------------------
  {
    title: "Promtify",
    year: "2023",
    company: "Merge",
    companyTone: "gold",
    status: "live",
    href: "https://app.promtify.ai",
    description: "AI-конструктор шаблонів. Внутрішній продукт Merge, розроблений повністю мною.",
    stack: ["Next.js", "OpenAI", "Supabase", "Stripe"],
  },
  {
    title: "RelayPay",
    year: "2023",
    company: "Merge",
    companyTone: "gold",
    status: "live",
    href: "https://relaypay.io/",
    description: "Крипто-платіжне рішення. Архітектура, менеджмент і складні фічі у невеликій команді.",
    stack: ["Next.js", "web3-onboard", "Onfido", "Tailwind"],
  },
  {
    title: "Ember",
    year: "2022",
    company: "Merge",
    companyTone: "gold",
    status: "live",
    href: "https://ember.co/",
    description: "Застосунок для управління фінансами (Велика Британія). Full-stack: нові фічі та рефакторинг.",
    stack: ["Next.js", "React Native", "GraphQL", "PostgreSQL"],
  },
  {
    title: "Merge Academy",
    year: "2022",
    company: "Merge",
    companyTone: "gold",
    status: "live",
    href: "https://merge.academy/",
    description: "Освітня платформа Merge. Розробка платформи та авторство курсу.",
    stack: ["Remix", "NestJS", "PostgreSQL"],
  },
  {
    title: "Noviscient",
    year: "2021",
    company: "Merge",
    companyTone: "gold",
    status: "live",
    href: "https://www.noviscient.com/",
    description: "Платформа wealth management (Сінгапур). Самостійна фронтенд-розробка з командою бекенду.",
    stack: ["React", "Redux", "Auth0"],
  },
  {
    title: "Spiral Blue",
    year: "2021",
    company: "Merge",
    companyTone: "gold",
    status: "offline",
    description: "Сайт австралійської space-tech компанії. Налаштування проєкту, бекенд і лід команди.",
    stack: ["Next.js", "Strapi", "SCSS"],
  },
  {
    title: "Spotlyt",
    year: "2021",
    company: "Merge",
    companyTone: "gold",
    status: "demo",
    href: "https://storybook-spotlyt.netlify.app/",
    description: "UI-бібліотека компонентів для data scientists (BrytLyt, Польща).",
    stack: ["React", "Rollup", "Storybook"],
  },
  {
    title: "Vamp",
    year: "2020",
    company: "Merge",
    companyTone: "gold",
    status: "offline",
    description: "Інструмент керування Kubernetes. Нові фічі у ролі фронтенд-розробника.",
    stack: ["React", "GraphQL", "Antd"],
  },
  {
    title: "Merge",
    year: "2020",
    company: "Merge",
    companyTone: "gold",
    status: "live",
    href: "https://merge.rocks/",
    description: "Сайт агенції Merge — одна з кількох ітерацій.",
    stack: ["Next.js", "Strapi", "SCSS"],
  },
  {
    title: "Evello",
    year: "2020",
    company: "Merge",
    companyTone: "gold",
    status: "demo",
    href: "https://media-scout.netlify.app/",
    description: "Платформа відеоаналітики. Спільний проєкт із Володимиром Мазурцем.",
    stack: ["Vue", "Storybook", "SCSS"],
  },
  {
    title: "TokenPlace",
    year: "2019",
    company: "Merge",
    companyTone: "gold",
    status: "offline",
    description: "Інструмент для крипто-трейдингу. Повністю UI-частина продукту.",
    stack: ["Vue", "SCSS"],
  },
  {
    title: "FundPlatform",
    year: "2018",
    company: "Merge",
    companyTone: "gold",
    status: "demo",
    href: "https://fundplatform.netlify.app/",
    description: "Система wealth management для хедж-фондів. Перший проєкт Merge, єдиний розробник.",
    stack: ["Vue", "SCSS"],
  },

  // ---- Mavinx (outsource, part-time) --------------------------------------
  {
    title: "Generator",
    year: "2021",
    company: "Mavinx",
    companyTone: "orange",
    status: "offline",
    description: "Конструктор блогів: бекенд зі статик-генератором, адмінка та шаблони.",
    stack: ["Node.js", "Fastify", "Nuxt", "Redis"],
  },
  {
    title: "Wambla",
    year: "2019",
    company: "Mavinx",
    companyTone: "orange",
    status: "offline",
    description: "Платформа купівлі/продажу нерухомості (Нідерланди). Фронтенд-розробка.",
    stack: ["Nuxt", "SCSS"],
  },

  // ---- Personal / pet-projects --------------------------------------------
  {
    title: "Flashcards",
    year: "2026",
    company: "Особистий проєкт",
    companyTone: "maroon",
    status: "live",
    href: "https://www.flashcards.best",
    description: "Картки для вивчення іноземних слів.",
    stack: ["React", "TypeScript", "Astro", "Prisma"],
  },
  {
    title: "Polly",
    year: "2025",
    company: "Особистий проєкт",
    companyTone: "maroon",
    status: "live",
    href: "https://polly-voting-app.vercel.app/",
    description: "Платформа для голосування й оцінки задач у реальному часі.",
    stack: ["React", "Next.js", "Supabase"],
  },
  {
    title: "svg-to-react",
    year: "2024",
    company: "Особистий проєкт",
    companyTone: "maroon",
    status: "live",
    href: "https://www.npmjs.com/package/@onlyredcats/svg-to-react",
    description: "CLI для генерації React-іконок зі SVG-файлів. Опубліковано в npm.",
    stack: ["Node.js", "JavaScript"],
  },
  {
    title: "Exchanger",
    year: "2021",
    company: "Особистий проєкт",
    companyTone: "maroon",
    status: "live",
    href: "https://exchanger.in.ua",
    description: "Конвертер гривні в інші валюти.",
    stack: ["React", "Redux"],
  },
  {
    title: "Elevendogs",
    year: "2021",
    company: "Особистий проєкт",
    companyTone: "maroon",
    status: "live",
    href: "https://elevendogs.com.ua",
    description: "Сайт барбершопу для бізнесу друга.",
    stack: ["Next.js", "CSS Modules"],
  },
  {
    title: "School 23",
    year: "2020",
    company: "Особистий проєкт",
    companyTone: "maroon",
    status: "live",
    href: "https://school23.vercel.app/",
    description: "Сайт школи в Кременчуці.",
    stack: ["Next.js", "Firebase", "SCSS"],
  },
  {
    title: "Keenly",
    year: "2020",
    company: "Особистий проєкт",
    companyTone: "maroon",
    status: "live",
    href: "https://keenly.shop/",
    description: "Інтернет-магазин для бізнесу тітки.",
    stack: ["Wix"],
  },
  {
    title: "Merge Place",
    year: "2018",
    company: "Особистий проєкт",
    companyTone: "maroon",
    status: "live",
    href: "https://www.merge.place/",
    description: "Мій перший сайт — для коворкінгу в Кременчуці.",
    stack: ["Vue", "SCSS"],
  },
];
