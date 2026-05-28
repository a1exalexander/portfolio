import { KotyMark } from "@/app/mentor/_components/illustrations";
import styles from "./MentorCallout.module.css";

export const MentorCallout = function MentorCallout() {
  return (
    <a href="/mentor" className={styles.mentorCallout}>
      <KotyMark className={styles.mentorCalloutLogo} />
      <div className={styles.mentorCalloutBody}>
        <span className={styles.mentorCalloutLabel}>mentorship</span>
        <p className={styles.mentorCalloutText}>
          I teach JavaScript, TypeScript &amp; React — online worldwide or in-person in Ukraine.
        </p>
      </div>
      <span className={styles.mentorCalloutArrow}>→</span>
    </a>
  );
};
