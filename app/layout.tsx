import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://linkifi.com'),
  title: 'Linkifi - Effortless PR Link Building, Exceptional Results',
  description:
    'Linkifi is authority-led digital PR built for companies that need authoritative links, stronger brand signals, and visible commercial outcomes across search and media.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Linkifi - Effortless PR Link Building, Exceptional Results',
    description:
      'Get your brand featured on the world\'s largest publications to supercharge SEO with authority-led digital PR campaigns.',
    type: 'website',
    url: 'https://linkifi.com/'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Linkifi - Effortless PR Link Building, Exceptional Results',
    description:
      'Authority-led Digital PR for measurable authority across search, media, and AI visibility.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
