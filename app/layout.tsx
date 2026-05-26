import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'stardoom · the unsanitized horoscope',
  description:
    'audit your flirts. the cosmos owes you receipts. stardoom is a dark-humor astrology + dating-audit app for iOS and Android.',
  openGraph: {
    title: 'stardoom · the unsanitized horoscope',
    description:
      'audit your flirts. the cosmos owes you receipts.',
    url: 'https://stardoom.app',
    siteName: 'stardoom',
    locale: 'en_US',
    type: 'website',
  },
  // App store badge metadata — flip these in once the App Store listing
  // is live. They're harmless when the URLs 404.
  appleWebApp: {
    title: 'stardoom',
    statusBarStyle: 'black-translucent',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-gold/15 mt-12 py-8 px-6">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-cream-fade">
          © {new Date().getFullYear()} stardoom · made with cosmic dread ✦
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] tracking-[0.18em] uppercase text-cream-dim">
          <Link href="/privacy/" className="hover:text-gold transition-colors">
            privacy
          </Link>
          <Link href="/terms/" className="hover:text-gold transition-colors">
            terms
          </Link>
          <Link href="/support/" className="hover:text-gold transition-colors">
            support
          </Link>
        </nav>
      </div>
    </footer>
  );
}
