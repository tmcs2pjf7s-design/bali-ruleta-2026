import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import WorldMedia from '@/components/WorldMedia'
import { WORLDS, UI, t, type Lang } from '@/data/experience'

export default function Worlds({ lang }: { lang: Lang }) {
  return (
    <section id="worlds" className="scroll-mt-24 border-t border-line px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal><Eyebrow index="02">{t(UI.eyebrow.worlds, lang)}</Eyebrow></Reveal>
        <Reveal as="h2" delay={80} className="mt-10 max-w-3xl font-display text-3xl font-light leading-tight text-ink md:text-5xl">
          {t(UI.worldsHeadline, lang)}
        </Reveal>

        <div className="mt-20 flex flex-col gap-28 md:gap-40">
          {WORLDS.map((w, i) => {
            const flip = i % 2 === 1
            return (
              <Reveal
                key={w.act}
                className="grid items-end gap-8 md:grid-cols-12 md:gap-10"
              >
                {/* text column */}
                <div className={`md:col-span-5 ${flip ? 'md:order-2 md:col-start-8' : ''}`}>
                  <span
                    className="block font-display text-[4.5rem] font-light leading-none md:text-[7rem]"
                    style={{ color: w.tone.accent, opacity: 0.28 }}
                  >
                    {String(w.act).padStart(2, '0')}
                  </span>
                  <span className="mt-3 block text-[0.62rem] uppercase tracking-widest2 text-warmgrey">
                    {w.home ? t(UI.theReturn, lang) : t(w.place, lang)}
                  </span>
                  <h3 className="mt-2 font-display text-4xl font-light text-ink md:text-5xl">{w.title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-graphite">{t(w.teaser, lang)}</p>
                  <p className="mt-4 text-[0.58rem] uppercase tracking-[0.2em] text-warmgrey">{t(w.mood, lang)}</p>
                </div>

                {/* media column */}
                <div className={`md:col-span-7 ${flip ? 'md:order-1 md:col-start-1' : 'md:col-start-6'}`}>
                  <WorldMedia
                    image={w.image}
                    roman={w.roman}
                    place={t(w.place, lang)}
                    tone={w.tone}
                    parallax
                    ratio="aspect-[16/11] md:aspect-[3/2]"
                  />
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
