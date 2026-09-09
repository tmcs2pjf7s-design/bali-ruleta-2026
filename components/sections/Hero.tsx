import { BRAND } from '@/data/experience'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-16 pt-28 md:px-10 md:pb-20"
    >
      {/* cinematic backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(130% 80% at 70% 0%, #211d17 0%, #100e0b 45%, #0a0908 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 120%, rgba(198,161,91,0.14) 0%, transparent 70%)',
        }}
      />

      <div className="mx-auto w-full max-w-[1400px]">
        <p className="reveal is-visible mb-6 text-[0.62rem] uppercase tracking-widest2 text-gold">
          {BRAND.tagline}
        </p>

        <h1
          className="reveal is-visible font-display font-light leading-[0.95] tracking-[0.02em] text-ivory [overflow-wrap:break-word]"
          style={{ fontSize: 'clamp(2.6rem, 11vw, 11rem)' }}
        >
          SIX <span className="text-gold/40">·</span> WORLDS
        </h1>

        <div className="reveal is-visible mt-8 flex w-full max-w-full flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-mist">
            {BRAND.concept.split(' · ').map((chunk, i) => (
              <span key={chunk}>
                {i > 0 && <span className="text-gold/40"> / </span>}
                {chunk}
              </span>
            ))}
          </p>

          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href="#reservation"
              className="border border-gold bg-gold px-5 py-3.5 text-[0.62rem] uppercase tracking-[0.18em] text-black transition-colors hover:bg-transparent hover:text-gold"
            >
              Reserve the experience
            </a>
            <a
              href="#journey"
              className="group inline-flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.18em] text-ivory"
            >
              Enter the journey
              <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">↓</span>
            </a>
          </div>
        </div>
      </div>

      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
