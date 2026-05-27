import type { ComponentType, SVGProps } from "react";
import { FiCheckCircle, FiHelpCircle } from "react-icons/fi";
import {
  LuBriefcase,
  LuGlobe,
  LuSprout,
  LuTarget,
  LuTerminal,
} from "react-icons/lu";
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import styles from "../page.module.css";

type RectProps = {
  x: number;
  y: number;
  w?: number;
  h?: number;
  c: string;
};

const P = ({ x, y, w = 1, h = 1, c }: RectProps) => (
  <rect x={x} y={y} width={w} height={h} fill={c} />
);

const svgBase: SVGProps<SVGSVGElement> = {
  className: styles.illo,
  shapeRendering: "crispEdges",
  xmlns: "http://www.w3.org/2000/svg",
};

export const HeroIllo = () => (
  <svg viewBox="0 0 64 48" {...svgBase}>
    {/* Plant — left side */}
    <P x={2} y={32} w={6} h={6} c="#1F9D6E" />
    <P x={3} y={30} w={4} h={2} c="#1F9D6E" />
    <P x={4} y={28} w={2} h={2} c="#1F9D6E" />
    <P x={1} y={38} w={8} h={3} c="#6B2A4A" />
    <P x={4} y={26} w={1} h={3} c="#1F9D6E" />

    {/* Monitor stand */}
    <P x={28} y={38} w={8} h={2} c="#3A1428" />
    <P x={22} y={40} w={20} h={2} c="#3A1428" />

    {/* Koty mark peeking behind monitor */}
    <g
      transform="translate(24 0) scale(0.25)"
      fill="#CB5283"
      shapeRendering="geometricPrecision"
    >
      <path d="M14 24 L20 8 L26 24 Z" />
      <path d="M38 24 L44 8 L50 24 Z" />
      <rect x={10} y={20} width={44} height={36} rx={14} ry={14} />
    </g>

    {/* Monitor chassis */}
    <P x={6} y={8} w={52} h={2} c="#3A1428" />
    <P x={6} y={10} w={2} h={26} c="#3A1428" />
    <P x={56} y={10} w={2} h={26} c="#3A1428" />
    <P x={6} y={36} w={52} h={2} c="#3A1428" />

    {/* Screen */}
    <P x={8} y={10} w={48} h={26} c="#060132" />

    {/* Traffic-light dots */}
    <P x={10} y={12} w={2} h={2} c="#CB5283" />
    <P x={13} y={12} w={2} h={2} c="#C7791D" />
    <P x={16} y={12} w={2} h={2} c="#1F9D6E" />

    {/* Code lines */}
    <P x={10} y={16} w={2} h={1} c="#A88090" />
    <P x={13} y={16} w={5} h={1} c="#CB5283" />
    <P x={19} y={16} w={8} h={1} c="#E0DCFE" />
    <P x={28} y={16} w={6} h={1} c="#1F9D6E" />

    <P x={10} y={18} w={2} h={1} c="#A88090" />
    <P x={13} y={18} w={3} h={1} c="#4C3AF9" />
    <P x={17} y={18} w={10} h={1} c="#E0DCFE" />
    <P x={28} y={18} w={4} h={1} c="#CB5283" />

    <P x={10} y={20} w={2} h={1} c="#A88090" />
    <P x={14} y={20} w={4} h={1} c="#CB5283" />
    <P x={19} y={20} w={6} h={1} c="#E0DCFE" />

    <P x={10} y={22} w={2} h={1} c="#A88090" />
    <P x={14} y={22} w={6} h={1} c="#1F9D6E" />
    <P x={21} y={22} w={4} h={1} c="#E0DCFE" />
    <P x={26} y={22} w={9} h={1} c="#FCE4ED" />

    <P x={10} y={24} w={2} h={1} c="#A88090" />
    <P x={14} y={24} w={3} h={1} c="#4C3AF9" />
    <P x={18} y={24} w={6} h={1} c="#E0DCFE" />
    <P x={25} y={24} w={3} h={1} c="#CB5283" />

    <P x={10} y={26} w={2} h={1} c="#A88090" />
    <P x={13} y={26} w={4} h={1} c="#CB5283" />

    {/* blinking cursor */}
    <rect x={18} y={26} width={2} height={1} fill="#CB5283">
      <animate
        attributeName="opacity"
        values="1;1;0;0"
        keyTimes="0;0.5;0.5;1"
        dur="1.1s"
        repeatCount="indefinite"
      />
    </rect>

    {/* Sticky note */}
    <P x={40} y={28} w={14} h={6} c="#C7791D" />
    <P x={42} y={30} w={10} h={1} c="#FFFAFC" />
    <P x={42} y={32} w={8} h={1} c="#FFFAFC" />

    {/* Coffee mug + steam */}
    <P x={49} y={28} w={6} h={8} c="#4C3AF9" />
    <P x={55} y={30} w={1} h={4} c="#4C3AF9" />
    <P x={49} y={28} w={6} h={1} c="#1806C7" />
    <P x={50} y={30} w={4} h={1} c="#E0DCFE" />
    <P x={50} y={24} w={1} h={2} c="#A88090" />
    <P x={52} y={22} w={1} h={3} c="#A88090" />
    <P x={54} y={24} w={1} h={2} c="#A88090" />

    {/* Keyboard */}
    <P x={14} y={43} w={36} h={4} c="#3A1428" />
    {[16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46].map((x) => (
      <P key={x} x={x} y={44} c="#A88090" />
    ))}
    <P x={20} y={46} w={24} h={1} c="#A88090" />
  </svg>
);

export const FrontIllo = () => (
  <svg viewBox="0 0 56 40" {...svgBase}>
    {/* Browser frame */}
    <P x={2} y={3} w={52} h={34} c="#3A1428" />
    <P x={4} y={5} w={48} h={30} c="#FFFAFC" />

    {/* Top bar */}
    <P x={4} y={5} w={48} h={5} c="#F2E0E8" />
    <P x={6} y={7} w={2} h={2} c="#CB5283" />
    <P x={9} y={7} w={2} h={2} c="#C7791D" />
    <P x={12} y={7} w={2} h={2} c="#1F9D6E" />
    <P x={18} y={6} w={28} h={3} c="#FFFAFC" />
    <P x={20} y={7} w={2} h={1} c="#1F9D6E" />
    <P x={23} y={7} w={20} h={1} c="#A88090" />

    {/* Page hero block */}
    <P x={6} y={12} w={18} h={3} c="#3A1428" />
    <P x={6} y={16} w={28} h={1} c="#6B2A4A" />
    <P x={6} y={18} w={24} h={1} c="#6B2A4A" />
    <P x={6} y={20} w={20} h={1} c="#6B2A4A" />

    {/* Image card on right */}
    <P x={38} y={12} w={12} h={10} c="#E0DCFE" />
    <P x={40} y={14} w={3} h={3} c="#4C3AF9" />
    <P x={44} y={16} w={5} h={1} c="#4C3AF9" />
    <P x={44} y={18} w={4} h={1} c="#4C3AF9" />

    {/* CTA button */}
    <P x={6} y={23} w={12} h={4} c="#CB5283" />
    <P x={8} y={25} w={8} h={1} c="#FFFAFC" />

    {/* Form input */}
    <P x={6} y={29} w={28} h={3} c="#FFFAFC" />
    <P x={6} y={29} w={28} h={1} c="#F2E0E8" />
    <P x={6} y={31} w={28} h={1} c="#F2E0E8" />
    <P x={6} y={29} w={1} h={3} c="#F2E0E8" />
    <P x={33} y={29} w={1} h={3} c="#F2E0E8" />
    <P x={8} y={30} w={10} h={1} c="#6B2A4A" />
    <P x={36} y={29} w={10} h={3} c="#4C3AF9" />
    <P x={38} y={30} w={6} h={1} c="#FFFAFC" />

    {/* Cursor */}
    <P x={18} y={25} c="#3A1428" />
    <P x={18} y={26} w={2} c="#3A1428" />
    <P x={18} y={27} w={3} c="#3A1428" />
    <P x={18} y={28} w={4} c="#3A1428" />
    <P x={19} y={29} w={2} c="#3A1428" />

    {/* Code symbol */}
    <P x={46} y={2} w={6} h={2} c="#CB5283" />
    <P x={47} y={1} w={4} h={1} c="#CB5283" />

    {/* Corner cat ear */}
    <P x={1} y={37} w={3} h={2} c="#CB5283" />
    <P x={2} y={36} w={1} h={1} c="#CB5283" />
  </svg>
);

export const BackIllo = () => (
  <svg viewBox="0 0 56 40" {...svgBase}>
    {/* Server rack */}
    <P x={4} y={6} w={20} h={28} c="#3A1428" />
    {[8, 14, 20, 26].map((y) => (
      <g key={y}>
        <P x={6} y={y} w={16} h={4} c="#060132" />
        <P x={7} y={y + 1} w={2} h={2} c="#1F9D6E" />
        <P x={10} y={y + 1} w={2} h={2} c="#C7791D" />
        <P x={13} y={y + 2} w={8} h={1} c="#A88090" />
        <P x={13} y={y + 1} w={6} h={1} c="#E0DCFE" />
      </g>
    ))}
    <P x={6} y={31} w={16} h={2} c="#CB5283" />

    {/* Database cylinder */}
    <P x={36} y={9} w={14} h={2} c="#4C3AF9" />
    <P x={38} y={8} w={10} h={1} c="#4C3AF9" />
    <P x={34} y={10} w={2} h={2} c="#4C3AF9" />
    <P x={50} y={10} w={2} h={2} c="#4C3AF9" />
    <P x={34} y={11} w={18} h={4} c="#4C3AF9" />
    <P x={36} y={15} w={14} h={1} c="#1806C7" />
    <P x={34} y={16} w={2} h={1} c="#1806C7" />
    <P x={50} y={16} w={2} h={1} c="#1806C7" />
    <P x={38} y={16} w={10} h={1} c="#1806C7" />
    <P x={34} y={17} w={18} h={4} c="#4C3AF9" />
    <P x={36} y={21} w={14} h={1} c="#1806C7" />
    <P x={34} y={22} w={2} h={1} c="#1806C7" />
    <P x={50} y={22} w={2} h={1} c="#1806C7" />
    <P x={38} y={22} w={10} h={1} c="#1806C7" />
    <P x={34} y={23} w={18} h={3} c="#4C3AF9" />
    <P x={36} y={26} w={14} h={1} c="#4C3AF9" />
    <P x={38} y={27} w={10} h={1} c="#4C3AF9" />
    <P x={40} y={13} w={2} h={1} c="#E0DCFE" />
    <P x={43} y={13} w={4} h={1} c="#E0DCFE" />
    <P x={40} y={19} w={6} h={1} c="#E0DCFE" />

    {/* API arrows */}
    <P x={25} y={14} w={8} h={1} c="#CB5283" />
    <P x={32} y={13} c="#CB5283" />
    <P x={32} y={15} c="#CB5283" />
    <P x={25} y={20} w={8} h={1} c="#1F9D6E" />
    <P x={25} y={19} c="#1F9D6E" />
    <P x={25} y={21} c="#1F9D6E" />

    {/* Shield */}
    <P x={38} y={30} w={10} h={4} c="#CB5283" />
    <P x={39} y={29} w={8} h={1} c="#CB5283" />
    <P x={40} y={34} w={6} h={1} c="#CB5283" />
    <P x={41} y={35} w={4} h={1} c="#CB5283" />
    <P x={42} y={36} w={2} h={1} c="#CB5283" />
    <P x={42} y={31} c="#FFFAFC" />
    <P x={43} y={32} c="#FFFAFC" />
    <P x={44} y={31} c="#FFFAFC" />
    <P x={45} y={30} c="#FFFAFC" />

    {/* JSON tag */}
    <P x={6} y={36} w={14} h={3} c="#060132" />
    <P x={8} y={37} w={2} h={1} c="#CB5283" />
    <P x={11} y={37} c="#E0DCFE" />
    <P x={13} y={37} w={3} h={1} c="#1F9D6E" />
    <P x={17} y={37} c="#FFC78C" />
  </svg>
);

// === Persona icons (react-icons) ===
export const PersonaZero = () => <LuSprout size="100%" />;
export const PersonaStuck = () => <FiHelpCircle size="100%" />;
export const PersonaJobs = () => <LuBriefcase size="100%" />;

// === Roadmap step icons (react-icons) ===
export const STEP_ICONS: Record<string, ComponentType> = {
  internet: () => <LuGlobe size="100%" />,
  html: () => <SiHtml5 size="100%" />,
  css: () => <SiCss3 size="100%" />,
  js: () => <SiJavascript size="100%" />,
  git: () => <SiGit size="100%" />,
  tooling: () => <LuTerminal size="100%" />,
  react: () => <SiReact size="100%" />,
  ts: () => <SiTypescript size="100%" />,
  testing: () => <FiCheckCircle size="100%" />,
  career: () => <LuTarget size="100%" />,
};

// Koty wordmark
export const KotyMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    <g fill="currentColor">
      <path d="M14 24 L20 8 L26 24 Z" />
      <path d="M38 24 L44 8 L50 24 Z" />
      <rect x="10" y="20" width="44" height="36" rx="14" ry="14" />
    </g>
  </svg>
);
