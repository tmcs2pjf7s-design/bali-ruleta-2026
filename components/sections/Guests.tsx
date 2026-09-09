import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import { GUESTS_BLOCK, UI, t, type Lang } from '@/data/experience'

export default function Guests({ lang }: { lang: Lang }) {
  return (
    <section id="guests" className="scroll-mt-24 border-t border-line px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal><Eyebrow index="05">{t(UI.eyebrow.guests, lang)}</Eyebrow></Reveal>

        <Reveal as="h2" delay={80} className="mt-10 font-display text-5xl font-light leading-none text-ink md:text-8xl">
          {t(GUESTS_BLOCK.headline, lang)}
        </Reveal>

        <Reveal className="mt-10 max-w-xl space-y-4 text-sm leading-relaxed text-graphite md:text-[0.95rem]">
          {GUESTS_BLOCK.body.map(p => <p key={p.en}>{t(p, lang)}</p>)}
        </Reveal>

        <Reveal className="mt-16 grid grid-cols-2 border-t border-line sm:grid-cols-3 md:grid-cols-6">
          {GUESTS_BLOCK.stats.map(s => (
            <div
              key={s.label.en}
              className="flex flex-col items-center gap-2 border-b border-r border-line py-10 [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(3n)]:border-r md:[&:nth-child(6n)]:border-r-0"
            >
              <span className="font-display text-5xl font-light text-ink md:text-6xl">{s.value}</span>
              <span className="text-[0.55rem] uppercase tracking-widest2 text-warmgrey">{t(s.label, lang)}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
