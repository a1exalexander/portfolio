"use client";

import styles from "../page.module.css";

export const GrainOverlay = () => (
  <>
    <svg width={0} height={0} style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <filter id="mentor-grain" colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65 0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
      </defs>
    </svg>
    <div className={styles.grainOverlay} aria-hidden="true" />
  </>
);
