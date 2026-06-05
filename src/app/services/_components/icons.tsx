import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { FiArrowRight, FiArrowUpRight, FiCheck, FiGlobe, FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

export const IconArrowR = FiArrowRight;
export const IconArrowUpR = FiArrowUpRight;
export const IconCheck = FiCheck;
export const IconGlobe = FiGlobe;
export const IconPhone = FiPhone;
export const IconMail = HiOutlineMail;
export const IconGh = FaGithub;
export const IconLi = FaLinkedinIn;
export const IconTg = FaTelegramPlane;

// The Koty wordmark — same mark as the /mentor page, recolored via `color`
// (the paths use currentColor). On /services it renders in the violet accent.
export const KotyMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    <g fill="currentColor">
      <path d="M14 24 L20 8 L26 24 Z" />
      <path d="M38 24 L44 8 L50 24 Z" />
      <rect x="10" y="20" width="44" height="36" rx="14" ry="14" />
    </g>
  </svg>
);
