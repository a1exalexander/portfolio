import { GeistSans } from 'geist/font/sans';
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
        </body>
      </PHProvider>
    </html>
  );
}
