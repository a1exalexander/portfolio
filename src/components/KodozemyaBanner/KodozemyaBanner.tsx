import Image from "next/image";
import { Unbounded } from "next/font/google";
import hero from "@/images/kodozemya/hero.webp";
import styles from "./KodozemyaBanner.module.css";

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--kz-font-display",
});

const KODOZEMYA_URL = "https://kodozemya.dev/";

/* Кодоземʼя brand mark, copied from fe-saga apps/app/src/components/logo.tsx. */
const KodozemyaLogo = function KodozemyaLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <rect x="1" y="1" width="30" height="30" fill="#2a5932" stroke="#db9e38" strokeWidth="1.5" />
      <g
        transform="translate(4 4)"
        fill="none"
        stroke="#fbf1dc"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
        <line x1="13" x2="19" y1="19" y2="13" />
        <line x1="16" x2="20" y1="16" y2="20" />
        <line x1="19" x2="21" y1="21" y2="19" />
        <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
        <line x1="5" x2="9" y1="14" y2="18" />
        <line x1="7" x2="4" y1="17" y2="20" />
        <line x1="3" x2="5" y1="19" y2="21" />
      </g>
    </svg>
  );
};

export const KodozemyaBanner = function KodozemyaBanner() {
  return (
    <a
      href={KODOZEMYA_URL}
      target="_blank"
      rel="noopener"
      aria-label="Кодоземʼя: інтерактивний курс front-end розробки"
      data-ph-capture-attribute-banner="kodozemya"
      className={`${styles.banner} ${unbounded.variable}`}
    >
      <div className={styles.copy}>
        <div className={styles.brand}>
          <KodozemyaLogo className={styles.logo} />
          <span className={styles.brandName}>Кодозем’я</span>
        </div>

        <p className={styles.title}>
          Інтерактивний курс <span className={styles.nowrap}>front-end</span> розробки
        </p>

        <span className={styles.cta}>
          Ознайомитись
          <span className={styles.ctaArrow} aria-hidden="true">
            →
          </span>
        </span>
      </div>

      <div className={styles.art}>
        <Image
          src={hero}
          alt=""
          fill
          placeholder="blur"
          sizes="(max-width: 720px) 100vw, 300px"
          className={styles.artImage}
        />
      </div>
    </a>
  );
};
