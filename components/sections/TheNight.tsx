import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import { NIGHT, UI, t, type Lang } from '@/data/experience'

export default function TheNight({ lang }: { lang: Lang }) {
  return (
    <section id="night" className="scroll-mt-24 border-t border-line px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal><Eyebrow index="06">{t(UI.eyebrow.night, lang)}</Eyebrow></Reveal>
        <Reveal as="h2" delay={80} className="mt-10 max-w-3xl font-display text-3xl font-light leading-tight text-ivory md:text-5xl">
          {t(UI.nightHeadline, lang)}
        </Reveal>

        <ol className="mt-16 max-w-2xl">
          {NIGHT.map((b, i) => (
            <Reveal as="li" key={b.label.en} delay={i * 40} className="relative border-l border-line pl-8 pb-10 last:pb-0">
              <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-gold" />
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                {b.time && (
                  <span className="font-display text-xl text-gold">{b.time}</span>
                )}
                {b.act && (
                  <span className="text-[0.58rem] uppercase tracking-widest2 text-mist">
                    {String(b.act).padStart(2, '0')}
                  </span>
                )}
                <span className="font-display text-2xl font-light text-ivory">{t(b.label, lang)}</span>
              </div>
              {b.note && <p className="mt-1.5 text-[0.85rem] text-mist">{t(b.note, lang)}</p>}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
