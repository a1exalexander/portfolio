import clsx from "clsx";
import styles from "./Strum.module.css";
import heroImage from "../../assets/Strum_Hero.svg";
import Image from "next/image";

interface IStrumProps {
  className?: string;
}

export const Strum = function Strum({ className }: IStrumProps) {
  return (
    <a
      href="https://strum.azov.one/en?ref=37aa83d8-d5e6-480a-b7d7-48de0f82ff03"
      target="_blank"
      className={clsx(styles.container, className)}
    >
      <video className={styles.video} autoPlay muted loop playsInline>
        <source src="/Strum.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </a>
  );
};
