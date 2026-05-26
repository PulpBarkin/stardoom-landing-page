import type { Metadata } from 'next';
import Link from 'next/link';
import { readMarkdown } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'privacy policy · stardoom',
  description: 'how stardoom collects, uses, and protects your information.',
};

export default async function PrivacyPage() {
  const { html } = await readMarkdown('privacy-policy');

  return (
    <article className="px-6 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-block font-mono text-[10px] tracking-[0.25em] uppercase text-gold hover:text-cream mb-10 transition-colors"
        >
          ← stardoom.
        </Link>

        <div
          className="prose-stardoom"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </article>
  );
}
