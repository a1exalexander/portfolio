import styles from "./ServiceCallout.module.css";

const KotyMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    <g fill="currentColor">
      <path d="M14 24 L20 8 L26 24 Z" />
      <path d="M38 24 L44 8 L50 24 Z" />
      <rect x="10" y="20" width="44" height="36" rx="14" ry="14" />
    </g>
  </svg>
);

export const ServiceCallout = function ServiceCallout() {
  return (
    <a href="/services" className={styles.serviceCallout}>
      <KotyMark className={styles.serviceCalloutLogo} />
      <div className={styles.serviceCalloutBody}>
        <span className={styles.serviceCalloutLabel}>services</span>
        <p className={styles.serviceCalloutText}>
          I build web apps, landing pages &amp; APIs — from MVP to production.
        </p>
      </div>
      <span className={styles.serviceCalloutArrow}>→</span>
    </a>
  );
};
