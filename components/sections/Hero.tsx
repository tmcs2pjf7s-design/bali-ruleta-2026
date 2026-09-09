import Image from 'next/image'
import { BRAND, UI, t, type Lang } from '@/data/experience'

export default function Hero({ lang }: { lang: Lang }) {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-16 pt-28 md:px-10 md:pb-24"
    >
      {/* editorial hero photograph */}
      <Image
        src={BRAND.heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[64%_center] md:object-center"
      />
      {/* legibility scrim — warm, light-handed */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(to top, rgba(24,18,12,0.80) 0%, rgba(24,18,12,0.34) 36%, rgba(24,18,12,0.06) 62%, rgba(24,18,12,0.10) 100%)',
        }}
      />

      <div className="mx-auto w-full max-w-[1400px]">
        <p className="reveal is-visible mb-6 text-[0.62rem] uppercase tracking-widest2 text-paper/70">
          {t(BRAND.tagline, lang)}
        </p>

        <h1
          className="reveal is-visible font-display font-light leading-[0.95] tracking-[0.01em] text-paper [overflow-wrap:break-word]"
          style={{ fontSize: 'clamp(2.6rem, 11vw, 11rem)' }}
        >
          SIX <span className="text-champ-soft">·</span> WORLDS
        </h1>

        <div className="reveal is-visible mt-8 flex w-full max-w-full flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-[0.8rem] leading-relaxed text-paper/85 sm:text-sm">
            {t(BRAND.concept, lang)
              .split(' · ')
              .map((chunk, i) => (
                <span key={chunk}>
                  {i > 0 && <span className="text-champ-soft"> / </span>}
                  {chunk}
                </span>
              ))}
          </p>

          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href="#reservation"
              className="border border-paper bg-paper px-5 py-3.5 text-[0.62rem] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-transparent hover:text-paper"
            >
              {t(UI.reserveExperience, lang)}
            </a>
            <a
              href="#journey"
              className="group inline-flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.18em] text-paper"
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
