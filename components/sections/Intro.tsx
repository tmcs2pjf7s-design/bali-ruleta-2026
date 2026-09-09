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
          className="mt-10 font-display text-5xl font-light leading-[1.02] text-ivory md:text-8xl"
        >
          {t(INTRO.headline, lang)}
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1fr] md:gap-20">
          <Reveal className="max-w-md space-y-4 text-sm leading-relaxed text-mist md:text-[0.95rem]">
            {INTRO.body.map(p => <p key={p.en}>{t(p, lang)}</p>)}
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-3 gap-px self-start border border-line bg-line">
            {FIGURES.map(f => (
              <div key={f.label.en} className="flex flex-col items-center gap-1 bg-black px-3 py-7">
                <span className="font-display text-4xl font-light text-gold">{f.value}</span>
                <span className="text-[0.55rem] uppercase tracking-widest2 text-mist">{t(f.label, lang)}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
