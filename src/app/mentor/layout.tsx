import { Manrope, JetBrains_Mono } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export default function MentorLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${manrope.variable} ${jetbrainsMono.variable}`}>{children}</div>;
}
