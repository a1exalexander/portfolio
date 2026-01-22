import { GeistSans } from 'geist/font/sans';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { PHProvider } from './providers';
import { ThemeProvider } from '@/context';
import { Footer, ThemeSwitcher } from '../components';
import './globals.css';

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('portfolio-theme');
    var theme = stored || 'system';
    var resolved = theme;
    if (theme === 'system') {
      resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', resolved);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <PHProvider>
        <ThemeProvider>
          <body className={GeistSans.className}>
            <ThemeSwitcher />
            {children}
            <Footer />
            <SpeedInsights />
          </body>
        </ThemeProvider>
      </PHProvider>
    </html>
  );
}
