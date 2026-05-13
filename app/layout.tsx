import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter_Tight } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter-tight',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kleios — habits run on proof, not willpower',
  description:
    'A photo-verified social habit app. One small challenge a day. AI verifies. Your friends watch your streak.',
  openGraph: {
    title: 'Kleios',
    description: 'A photo-verified social habit app.',
    url: 'https://kleios.app',
    siteName: 'Kleios',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  metadataBase: new URL('https://kleios.app'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${interTight.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
