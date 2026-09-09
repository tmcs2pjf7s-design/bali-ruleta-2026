import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import WorldMedia from '@/components/WorldMedia'
import { WORLDS, UI, t, type Lang } from '@/data/experience'

export default function Dishes({ lang }: { lang: Lang }) {
  const [bali, ...rest] = WORLDS

  return (
    <section id="dishes" className="scroll-mt-24 border-t border-line px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal><Eyebrow index="03">{t(UI.eyebrow.dishes, lang)}</Eyebrow></Reveal>
        <Reveal as="h2" delay={80} className="mt-10 max-w-3xl font-display text-3xl font-light leading-tight text-ink md:text-5xl">
          {t(UI.dishesHeadline, lang)}
        </Reveal>

        {/* Featured — BALI NOIR */}
        <Reveal className="mt-16 grid gap-10 md:grid-cols-[1fr_1.05fr] md:gap-16">
          <div className="mx-auto w-full max-w-[520px]">
            <WorldMedia image={bali.image} roman={bali.roman} place={t(bali.place, lang)} tone={bali.tone} parallax ratio="aspect-square" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[0.62rem] uppercase tracking-widest2 text-warmgrey">
              {t(UI.act, lang)} 01 · {t(bali.place, lang)}
            </span>
            <h3 className="mt-2 font-display text-4xl font-light text-ink md:text-6xl">{bali.title}</h3>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-graphite md:text-[0.95rem]">{t(bali.concept, lang)}</p>
            <p className="mt-5 text-[0.58rem] uppercase tracking-[0.2em] text-warmgrey">{t(bali.mood, lang)}</p>
            <p className="mt-6 border-l border-champ/50 pl-4 font-display text-lg italic text-graphite">
              {t(UI.baliQuote, lang)}
            </p>
          </div>
        </Reveal>

        {/* The other five */}
        <div className="mt-24 grid gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map(w => (
            <Reveal key={w.act}>
              <WorldMedia image={w.image} roman={w.roman} place={t(w.place, lang)} tone={w.tone} ratio="aspect-[4/5]" />
              <span className="mt-5 block text-[0.58rem] uppercase tracking-widest2 text-warmgrey">
                {t(UI.act, lang)} 0{w.act} · {w.home ? t(UI.theReturn, lang) : t(w.place, lang)}
              </span>
              <h3 className="mt-1.5 font-display text-2xl font-light text-ink">{w.title}</h3>
              <p className="mt-3 text-[0.85rem] leading-relaxed text-graphite">{t(w.concept, lang)}</p>
              <p className="mt-3 text-[0.55rem] uppercase tracking-[0.18em] text-warmgrey">{t(w.mood, lang)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
