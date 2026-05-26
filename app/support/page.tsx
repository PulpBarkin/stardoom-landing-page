import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'support · stardoom',
  description:
    'questions, copyright, suggestions, partnerships — write us at developer@stardoom.app.',
};

const EMAIL = 'developer@stardoom.app';

export default function SupportPage() {
  return (
    <div className="px-6 py-16 sm:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <Link
          href="/"
          className="inline-block font-mono text-[10px] tracking-[0.25em] uppercase text-gold hover:text-cream mb-12 transition-colors"
        >
          ← stardoom.
        </Link>

        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold font-bold mb-6">
          ✦ contact + support
        </div>

        <h1 className="font-serif italic text-4xl sm:text-5xl tracking-tight text-cream leading-tight">
          write to{' '}
          <a
            href={`mailto:${EMAIL}`}
            className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold transition-colors"
          >
            {EMAIL}
          </a>
        </h1>

        <p className="mt-8 font-sans text-base text-cream-dim leading-relaxed max-w-lg mx-auto">
          one inbox handles everything &mdash; bug reports, account help,
          copyright notices, partnership inquiries, press requests, feature
          suggestions, and anything else you need to put in front of us.
        </p>

        <p className="mt-4 font-sans text-sm text-cream-fade">
          we read every message. typical reply time: a few days.
        </p>

        <div className="mt-12">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gold/40 bg-gold/[0.08] font-mono text-[11px] tracking-[0.18em] uppercase text-gold hover:bg-gold/[0.15] hover:border-gold/60 transition-colors"
          >
            ✉ open mail app
          </a>
        </div>

        <hr className="mt-16 border-gold/15" />

        <div className="mt-8 font-mono text-[10px] tracking-[0.2em] uppercase text-cream-fade space-y-2">
          <div>
            data controller:{' '}
            <span className="text-cream-dim normal-case tracking-normal font-sans">
              Can Barkın Bilgili (sole proprietor)
            </span>
          </div>
          <div>
            postal address:{' '}
            <span className="text-cream-dim normal-case tracking-normal font-sans">
              available upon request to{' '}
              <a
                href={`mailto:${EMAIL}`}
                className="text-gold underline decoration-gold/35 hover:decoration-gold"
              >
                {EMAIL}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
