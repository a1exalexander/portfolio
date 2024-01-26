import { GeistSans } from 'geist/font/sans';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { PHProvider } from './providers';
import { Footer } from '../components';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PHProvider>
        <body className={GeistSans.className}>
          {children}
          <Footer />
          <SpeedInsights />
        </body>
      </PHProvider>
    </html>
  );
}
