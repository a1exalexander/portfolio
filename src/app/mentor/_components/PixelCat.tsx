import styles from "./HeroCats.module.css";

export type CatPalette = {
  body: string;
  dark: string;
  light: string;
  ear: string;
  eye: string;
  nose: string;
};

export type CatPersonality = "chaser" | "lazy" | "skittish" | "jumper";

export type CatSpec = {
  id: string;
  palette: CatPalette;
  markSide: Px[];
  markSit: Px[];
  /** px per second */
  speed: number;
  /** gallop cycle duration, seconds */
  gait: number;
  /** starting depth lane (0 = front) */
  lane: number;
  personality: CatPersonality;
};

/** [x, y, w, h, paletteKey] on a 24×15 pixel grid, cat faces right */
type Px = [number, number, number, number, keyof CatPalette];

const CORE_SIDE: Px[] = [
  // body
  [4, 7, 12, 4, "body"],
  [5, 6, 10, 1, "body"],
  // head
  [14, 2, 7, 6, "body"],
  // ears + inner
  [14, 0, 2, 2, "body"],
  [18, 0, 2, 2, "body"],
  [15, 1, 1, 1, "ear"],
  [19, 1, 1, 1, "ear"],
  // belly / chest
  [11, 9, 5, 2, "light"],
  // muzzle + nose
  [19, 5, 2, 2, "light"],
  [20, 5, 1, 1, "nose"],
];

const TAIL_A: Px[] = [
  [3, 5, 2, 2, "body"],
  [2, 3, 2, 2, "body"],
  [2, 2, 1, 1, "dark"],
];
const TAIL_B: Px[] = [
  [3, 6, 2, 2, "body"],
  [1, 4, 2, 2, "body"],
  [1, 3, 1, 1, "dark"],
];
const TAIL_JUMP: Px[] = [
  [3, 4, 2, 2, "body"],
  [3, 2, 2, 2, "body"],
  [4, 1, 1, 1, "dark"],
];

// gallop frame A — legs stretched
const LEGS_A: Px[] = [
  [5, 11, 2, 3, "dark"],
  [13, 11, 2, 3, "dark"],
  [3, 11, 2, 2, "body"],
  [2, 13, 2, 2, "body"],
  [15, 11, 2, 2, "body"],
  [16, 13, 2, 2, "body"],
];
// gallop frame B — legs tucked
const LEGS_B: Px[] = [
  [6, 11, 2, 2, "dark"],
  [12, 11, 2, 2, "dark"],
  [5, 11, 2, 3, "body"],
  [13, 11, 2, 3, "body"],
];
// airborne stretch
const LEGS_JUMP: Px[] = [
  [5, 11, 2, 2, "dark"],
  [14, 11, 2, 2, "dark"],
  [3, 12, 2, 2, "body"],
  [16, 10, 2, 2, "body"],
  [18, 9, 2, 1, "body"],
];
const LEGS_STAND: Px[] = [
  [7, 11, 2, 4, "dark"],
  [12, 11, 2, 4, "dark"],
  [4, 11, 2, 4, "body"],
  [14, 11, 2, 4, "body"],
];

const SIT_TAIL: Px[] = [
  [2, 13, 3, 2, "body"],
  [2, 12, 1, 1, "dark"],
];
const SIT_BODY: Px[] = [
  // haunch
  [5, 7, 6, 1, "body"],
  [4, 8, 8, 7, "body"],
  // upright chest
  [10, 5, 5, 10, "body"],
  // head
  [11, 2, 7, 6, "body"],
  // ears + inner
  [11, 0, 2, 2, "body"],
  [15, 0, 2, 2, "body"],
  [12, 1, 1, 1, "ear"],
  [16, 1, 1, 1, "ear"],
  // chest light
  [12, 8, 3, 5, "light"],
  // muzzle + nose
  [16, 5, 2, 2, "light"],
  [17, 5, 1, 1, "nose"],
  // front paws
  [11, 13, 2, 2, "body"],
  [13, 13, 2, 2, "dark"],
];

export const CAT_SPECS: CatSpec[] = [
  {
    id: "ginger",
    palette: {
      body: "#e2762f",
      dark: "#b9531b",
      light: "#ffead9",
      ear: "#f59cb4",
      eye: "#3a1428",
      nose: "#e5708c",
    },
    markSide: [
      [6, 7, 1, 2, "dark"],
      [8, 7, 1, 2, "dark"],
      [10, 7, 1, 2, "dark"],
      [15, 2, 1, 1, "dark"],
      [17, 2, 1, 1, "dark"],
    ],
    markSit: [
      [5, 9, 1, 2, "dark"],
      [7, 9, 1, 2, "dark"],
      [9, 9, 1, 2, "dark"],
      [12, 2, 1, 1, "dark"],
      [14, 2, 1, 1, "dark"],
    ],
    speed: 210,
    gait: 0.26,
    lane: 0,
    personality: "chaser",
  },
  {
    id: "yellow",
    palette: {
      body: "#ecbe3b",
      dark: "#c98e1b",
      light: "#fff4d9",
      ear: "#f59cb4",
      eye: "#3a1428",
      nose: "#d87990",
    },
    markSide: [
      [7, 7, 1, 2, "dark"],
      [10, 7, 1, 2, "dark"],
      [16, 2, 1, 1, "dark"],
    ],
    markSit: [
      [6, 9, 1, 2, "dark"],
      [9, 9, 1, 2, "dark"],
      [13, 2, 1, 1, "dark"],
    ],
    speed: 115,
    gait: 0.36,
    lane: 1,
    personality: "lazy",
  },
  {
    id: "sphynx",
    palette: {
      body: "#e9bfac",
      dark: "#ce9883",
      light: "#f8e3d8",
      ear: "#ee9cb2",
      eye: "#3d6be0",
      nose: "#d6708b",
    },
    markSide: [
      // wrinkles
      [6, 8, 2, 1, "dark"],
      [9, 9, 2, 1, "dark"],
      // big bare ears
      [14, 1, 1, 1, "ear"],
      [18, 1, 1, 1, "ear"],
    ],
    markSit: [
      [5, 10, 2, 1, "dark"],
      [8, 11, 2, 1, "dark"],
      [11, 1, 1, 1, "ear"],
      [15, 1, 1, 1, "ear"],
    ],
    speed: 245,
    gait: 0.22,
    lane: 2,
    personality: "skittish",
  },
  {
    id: "tux",
    palette: {
      body: "#35283e",
      dark: "#241a2b",
      light: "#ffffff",
      ear: "#e58ba6",
      eye: "#97e464",
      nose: "#ed8fa4",
    },
    markSide: [
      // white face patch + bigger bib
      [19, 3, 2, 2, "light"],
      [11, 8, 5, 1, "light"],
    ],
    markSit: [
      [16, 3, 2, 2, "light"],
      [12, 7, 3, 1, "light"],
    ],
    speed: 175,
    gait: 0.28,
    lane: 1,
    personality: "jumper",
  },
];

const rects = (px: Px[], pal: CatPalette) =>
  px.map(([x, y, w, h, k], i) => (
    <rect key={i} x={x} y={y} width={w} height={h} fill={pal[k]} />
  ));

const Eye = ({ x, y, c }: { x: number; y: number; c: string }) => (
  <rect className={styles.eyePx} x={x} y={y} width={1} height={1} fill={c} />
);

export const PixelCat = ({ spec }: { spec: CatSpec }) => {
  const p = spec.palette;
  const side = (tail: Px[], legs: Px[]) => (
    <>
      {rects(tail, p)}
      {rects(legs, p)}
      {rects(CORE_SIDE, p)}
      {rects(spec.markSide, p)}
      <Eye x={18} y={4} c={p.eye} />
    </>
  );
  return (
    <svg
      viewBox="0 0 24 15"
      className={styles.catSvg}
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className={`${styles.pose} ${styles.frameA}`}>{side(TAIL_A, LEGS_A)}</g>
      <g className={`${styles.pose} ${styles.frameB}`}>{side(TAIL_B, LEGS_B)}</g>
      <g className={`${styles.pose} ${styles.poseJump}`}>{side(TAIL_JUMP, LEGS_JUMP)}</g>
      <g className={`${styles.pose} ${styles.poseStand}`}>{side(TAIL_A, LEGS_STAND)}</g>
      <g className={`${styles.pose} ${styles.poseSit}`}>
        <g className={styles.sitTail}>{rects(SIT_TAIL, p)}</g>
        {rects(SIT_BODY, p)}
        {rects(spec.markSit, p)}
        <Eye x={15} y={4} c={p.eye} />
      </g>
    </svg>
  );
};

export const HeartPx = () => (
  <svg viewBox="0 0 7 6" width="12" height="10" shapeRendering="crispEdges" aria-hidden>
    <g fill="#e0507e">
      <rect x={1} y={0} width={2} height={1} />
      <rect x={4} y={0} width={2} height={1} />
      <rect x={0} y={1} width={7} height={2} />
      <rect x={1} y={3} width={5} height={1} />
      <rect x={2} y={4} width={3} height={1} />
      <rect x={3} y={5} width={1} height={1} />
    </g>
  </svg>
);

export const SparkPx = () => (
  <svg viewBox="0 0 7 7" width="14" height="14" shapeRendering="crispEdges" aria-hidden>
    <g fill="#4c3af9">
      <rect x={3} y={0} width={1} height={7} />
      <rect x={0} y={3} width={7} height={1} />
      <rect x={2} y={2} width={3} height={3} fill="#cb5283" />
      <rect x={3} y={3} width={1} height={1} fill="#fffafc" />
    </g>
  </svg>
);
