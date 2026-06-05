"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  SiAstro,
  SiDecapcms,
  SiFastify,
  SiFirebase,
  SiGraphql,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRemix,
  SiShopify,
  SiStrapi,
  SiSupabase,
  SiTypescript,
  SiVuedotjs,
  SiWebflow,
} from "react-icons/si";
import { TbBrandReactNative, TbShoppingCart } from "react-icons/tb";
import styles from "../page.module.css";

interface Tech {
  name: string;
  Icon: IconType;
  /** Brand colour, tuned for contrast on the dark CRT surface. */
  color: string;
}

// Real stack, mirrored from the home page bio (page.tsx). Each icon carries its
// brand colour (lightened where the native hue would vanish on the dark panel)
// applied via the `--ico` custom property the chip CSS reads.
const TECH: Tech[] = [
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "React", Icon: SiReact, color: "#61dafb" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#e6e6e6" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#83cd29" },
  { name: "NestJS", Icon: SiNestjs, color: "#e0234e" },
  { name: "Fastify", Icon: SiFastify, color: "#e6e6e6" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4f9bd6" },
  { name: "MongoDB", Icon: SiMongodb, color: "#4db33d" },
  { name: "GraphQL", Icon: SiGraphql, color: "#e535ab" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ecf8e" },
  { name: "Firebase", Icon: SiFirebase, color: "#ffca28" },
  { name: "Vue", Icon: SiVuedotjs, color: "#42b883" },
  { name: "Astro", Icon: SiAstro, color: "#ff5d01" },
  { name: "Remix", Icon: SiRemix, color: "#e6e6e6" },
  { name: "React Native", Icon: TbBrandReactNative, color: "#61dafb" },
  { name: "Strapi", Icon: SiStrapi, color: "#8e75ff" },
  { name: "Decap CMS", Icon: SiDecapcms, color: "#ff0082" },
  { name: "Shopify", Icon: SiShopify, color: "#95bf47" },
  { name: "Webflow", Icon: SiWebflow, color: "#4f8cff" },
  { name: "OpenCart", Icon: TbShoppingCart, color: "#34a9e0" },
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
          <li
            className={styles.techChip}
            key={t.name}
            style={{ "--ico": t.color } as CSSProperties}
          >
            <t.Icon aria-hidden="true" />
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
        <motion.li
          className={styles.techChip}
          key={t.name}
          variants={item}
          style={{ "--ico": t.color } as CSSProperties}
        >
          <t.Icon aria-hidden="true" />
          <span>{t.name}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
};
