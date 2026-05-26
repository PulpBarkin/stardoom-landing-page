import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="px-6 pt-24 pb-12">
      <div className="max-w-2xl mx-auto text-center">
        {/* eyebrow */}
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold font-bold mb-6">
          ✦ coming soon to ios &amp; android
        </div>

        {/* wordmark */}
        <h1 className="font-serif italic text-6xl sm:text-7xl tracking-tight text-cream leading-none">
          stardoom<span className="text-gold">.</span>
        </h1>

        {/* tagline */}
        <p className="mt-8 font-serif italic text-2xl sm:text-3xl text-cream leading-snug">
          the cosmos owes you{' '}
          <span className="text-gold">receipts</span>.
        </p>

        {/* body */}
        <p className="mt-6 font-sans text-base text-cream-dim leading-relaxed max-w-lg mx-auto">
          a dark-humor astrology app for auditing your flirts, exes, and
          everyone in between. enter their birth data, get a deterministic
          red-flag score and a reading that doesn&rsquo;t flatter anyone —
          including you.
        </p>

        {/* feature strip */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-4 gap-y-2 font-mono text-[10px] tracking-[0.18em] uppercase text-cream-fade">
          <span className="text-gold">★</span> doom score
          <span className="text-gold">·</span> compat radar
          <span className="text-gold">·</span> daily horoscope
          <span className="text-gold">·</span> wrapped
        </div>

        {/* CTA placeholder · App Store / Play badges drop in here once live */}
        <div className="mt-12 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-gold/30 bg-gold/[0.06] font-mono text-[11px] tracking-[0.18em] uppercase text-gold">
          ⏳ launching soon
        </div>

        {/* nav hint */}
        <div className="mt-16 font-mono text-[10px] tracking-[0.2em] uppercase text-cream-fade">
          <Link href="/privacy/" className="hover:text-gold transition-colors">
            privacy
          </Link>
          <span className="mx-3">·</span>
          <Link href="/terms/" className="hover:text-gold transition-colors">
            terms
          </Link>
          <span className="mx-3">·</span>
          <Link href="/support/" className="hover:text-gold transition-colors">
            support
          </Link>
        </div>
      </div>
    </div>
  );
}
