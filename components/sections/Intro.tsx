import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import { INTRO, FIGURES, UI, t, type Lang } from '@/data/experience'

export default function Intro({ lang }: { lang: Lang }) {
  return (
    <section id="journey" className="scroll-mt-24 border-t border-line px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal><Eyebrow index="01">{t(UI.eyebrow.journey, lang)}</Eyebrow></Reveal>

        <Reveal
          as="h2"
          delay={80}
          className="mt-10 font-display text-5xl font-light leading-[1.02] text-ink md:text-8xl"
        >
          {t(INTRO.headline, lang)}
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-24">
          <Reveal className="max-w-md space-y-4 text-sm leading-relaxed text-graphite md:text-[0.95rem]">
            {INTRO.body.map(p => <p key={p.en}>{t(p, lang)}</p>)}
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-3 self-start border-t border-line">
            {FIGURES.map(f => (
              <div
                key={f.label.en}
                className="flex flex-col items-center gap-1 border-b border-r border-line py-8 [&:nth-child(3n)]:border-r-0"
              >
                <span className="font-display text-4xl font-light text-ink">{f.value}</span>
                <span className="text-[0.55rem] uppercase tracking-widest2 text-warmgrey">{t(f.label, lang)}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
