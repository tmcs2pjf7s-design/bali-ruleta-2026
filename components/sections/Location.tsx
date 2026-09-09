import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import { LOCATION, UI, t, type Lang } from '@/data/experience'

export default function Location({ lang }: { lang: Lang }) {
  return (
    <section id="location" className="scroll-mt-24 border-t border-line px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal><Eyebrow index="09">{t(UI.eyebrow.restaurant, lang)}</Eyebrow></Reveal>
        <Reveal as="h2" delay={80} className="mt-10 font-display text-3xl font-light leading-tight text-ivory md:text-5xl">
          {t(LOCATION.heading, lang)}
        </Reveal>
        <Reveal className="mt-8 max-w-lg space-y-4 text-sm leading-relaxed text-mist md:text-[0.95rem]">
          {LOCATION.body.map(p => <p key={p.en}>{t(p, lang)}</p>)}
          <p className="pt-2 text-[0.72rem] uppercase tracking-widest2 text-gold/70">{t(LOCATION.city, lang)}</p>
        </Reveal>
      </div>
    </section>
  )
}
