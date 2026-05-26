import type { Metadata } from 'next';
import Link from 'next/link';
import { readMarkdown } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'terms of service · stardoom',
  description: 'the legal agreement between you and stardoom.',
};

export default async function TermsPage() {
  const { html } = await readMarkdown('terms-of-service');

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
