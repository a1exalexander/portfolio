"use client";

import styles from "../page.module.css";

// CRT / VHS screen overlay for the /services page: scanlines, phosphor grain,
// vignette and a subtle flicker. All layers are pointer-events:none; the flicker
// is disabled under prefers-reduced-motion (handled in CSS). Replaces the old
// GrainOverlay.
export const CRTOverlay = () => (
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
            baseFrequency="0.72 0.72"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
      </defs>
    </svg>
    <div className={styles.crt} aria-hidden="true">
      <div className={styles.crtScan} />
      <div className={styles.crtGrain} />
      <div className={styles.crtVignette} />
      <div className={styles.crtFlicker} />
    </div>
  </>
);
