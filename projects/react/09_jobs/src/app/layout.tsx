import { AppProvider } from '@/providers/app';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jobs',
  description: 'Job Board',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </AppProvider>
  );
}
