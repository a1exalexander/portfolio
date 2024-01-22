import { GeistSans } from 'geist/font/sans';
import { Footer } from '../components';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
