import { BRAND, UI, t, type Lang } from '@/data/experience'

export default function Hero({ lang }: { lang: Lang }) {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-16 pt-28 md:px-10 md:pb-24"
    >
      {/* luminous backdrop — natural light wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(180deg, #ffffff 0%, #f6f2ea 45%, #efe7d8 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(70% 55% at 78% 12%, rgba(255,255,255,0.9) 0%, transparent 60%), radial-gradient(50% 40% at 20% 100%, rgba(221,211,191,0.35) 0%, transparent 70%)',
        }}
      />

      <div className="mx-auto w-full max-w-[1400px]">
        <p className="reveal is-visible mb-6 text-[0.62rem] uppercase tracking-widest2 text-warmgrey">
          {t(BRAND.tagline, lang)}
        </p>

        <h1
          className="reveal is-visible font-display font-light leading-[0.95] tracking-[0.01em] text-ink [overflow-wrap:break-word]"
          style={{ fontSize: 'clamp(2.6rem, 11vw, 11rem)' }}
        >
          SIX <span className="text-champ">·</span> WORLDS
        </h1>

        <div className="reveal is-visible mt-8 flex w-full max-w-full flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-[0.8rem] leading-relaxed text-graphite sm:text-sm">
            {t(BRAND.concept, lang)
              .split(' · ')
              .map((chunk, i) => (
                <span key={chunk}>
                  {i > 0 && <span className="text-champ"> / </span>}
                  {chunk}
                </span>
              ))}
          </p>

          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href="#reservation"
              className="border border-ink bg-ink px-5 py-3.5 text-[0.62rem] uppercase tracking-[0.18em] text-paper transition-colors hover:bg-transparent hover:text-ink"
            >
              {t(UI.reserveExperience, lang)}
            </a>
            <a
              href="#journey"
              className="group inline-flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.18em] text-ink"
            >
              {t(UI.enterJourney, lang)}
              <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
