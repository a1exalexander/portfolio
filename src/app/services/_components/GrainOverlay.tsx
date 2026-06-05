"use client";

import styles from "../page.module.css";

// Subtle film-grain texture for the /services page. Mirrors the /mentor page's
// overlay but with its own filter id so the two pages don't collide.
export const GrainOverlay = () => (
  <>
    <svg width={0} height={0} style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <filter
          id="services-grain"
          colorInterpolationFilters="sRGB"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.7 0.7"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
      </defs>
    </svg>
    <div className={styles.grainOverlay} aria-hidden="true" />
  </>
);
