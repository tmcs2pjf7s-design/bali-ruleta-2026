import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import { WINE_NARRATIVE, UI, t, type Lang } from '@/data/experience'

export default function Wines({ lang }: { lang: Lang }) {
  return (
    <section id="wines" className="scroll-mt-24 border-t border-line px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal><Eyebrow index="04">{t(UI.eyebrow.wines, lang)}</Eyebrow></Reveal>

        <Reveal as="h2" delay={80} className="mt-10 font-display text-4xl font-light leading-[1.05] text-ivory md:text-7xl">
          {t(WINE_NARRATIVE.headline, lang)}
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-24">
          <Reveal className="space-y-5 text-sm leading-relaxed text-mist md:text-[0.95rem]">
            {WINE_NARRATIVE.body.map(p => <p key={p.en}>{t(p, lang)}</p>)}
            <p className="pt-2 text-[0.72rem] uppercase tracking-widest2 text-gold/70">
              {t(WINE_NARRATIVE.note, lang)}
            </p>
          </Reveal>

          <Reveal delay={120} className="self-start">
            <div className="grid grid-cols-2 border border-line">
              <div className="border-r border-line p-8">
                <span className="text-[0.55rem] uppercase tracking-widest2 text-mist">{t(UI.firstGlass, lang)}</span>
                <p className="mt-3 font-display text-3xl font-light uppercase text-ivory">
                  {t(WINE_NARRATIVE.first.tag, lang)}
                </p>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-mist">{t(WINE_NARRATIVE.first.line, lang)}</p>
              </div>
              <div className="p-8">
                <span className="text-[0.55rem] uppercase tracking-widest2 text-mist">{t(UI.secondGlass, lang)}</span>
                <p className="mt-3 font-display text-3xl font-light uppercase text-ivory">
                  {t(WINE_NARRATIVE.second.tag, lang)}
                </p>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-mist">{t(WINE_NARRATIVE.second.line, lang)}</p>
              </div>
              <div className="col-span-2 border-t border-line p-8 text-center">
                <span className="font-display text-xl italic text-ivory/70">
                  {t(WINE_NARRATIVE.closing, lang)}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
