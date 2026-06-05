"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiFirebase,
  SiGraphql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRemix,
  SiSupabase,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import styles from "../page.module.css";

interface Tech {
  name: string;
  Icon: IconType;
  color: string;
}

// Real stack, mirrored from the home page bio (page.tsx): the technologies
// Oleksandr actually builds with.
const TECH: Tech[] = [
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "React", Icon: SiReact, color: "#149eca" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#060132" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#539e43" },
  { name: "NestJS", Icon: SiNestjs, color: "#e0234e" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
  { name: "GraphQL", Icon: SiGraphql, color: "#e535ab" },
  { name: "Vue", Icon: SiVuedotjs, color: "#41b883" },
  { name: "React Native", Icon: TbBrandReactNative, color: "#149eca" },
  { name: "Remix", Icon: SiRemix, color: "#060132" },
  { name: "Supabase", Icon: SiSupabase, color: "#3fcf8e" },
  { name: "Firebase", Icon: SiFirebase, color: "#dd9d2c" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export const TechStack = () => {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.045 } },
  };
  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
  };

  if (reduced) {
    return (
      <ul className={styles.techBand}>
        {TECH.map((t) => (
          <li className={styles.techChip} key={t.name}>
            <t.Icon style={{ color: t.color }} aria-hidden="true" />
            <span>{t.name}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <motion.ul
      className={styles.techBand}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px 0px" }}
    >
      {TECH.map((t) => (
        <motion.li className={styles.techChip} key={t.name} variants={item}>
          <t.Icon style={{ color: t.color }} aria-hidden="true" />
          <span>{t.name}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
};
