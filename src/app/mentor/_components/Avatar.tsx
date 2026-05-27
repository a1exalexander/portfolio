import styles from "./Avatar.module.css";

export type AvatarTone = "lavender" | "rose" | "midnight" | "violet";

type AvatarProps = {
  initials: string;
  tone?: AvatarTone;
  size?: number;
  className?: string;
};

export const Avatar = ({ initials, tone = "lavender", size = 44, className }: AvatarProps) => (
  <div
    className={`${styles.avatar} ${styles[tone]} ${className ?? ""}`}
    style={{ width: size, height: size, fontSize: Math.round(size * 0.4) }}
    aria-hidden
  >
    {initials}
  </div>
);
