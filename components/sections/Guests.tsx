import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import { GUESTS_BLOCK } from '@/data/experience'

export default function Guests() {
  return (
    <section id="guests" className="scroll-mt-24 border-t border-line bg-ink px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal><Eyebrow index="05">Six Guests</Eyebrow></Reveal>

        <Reveal as="h2" delay={80} className="mt-10 font-display text-5xl font-light leading-none text-ivory md:text-8xl">
          {GUESTS_BLOCK.headline}
        </Reveal>

        <Reveal className="mt-10 max-w-xl space-y-4 text-sm leading-relaxed text-mist md:text-[0.95rem]">
          {GUESTS_BLOCK.body.map(p => <p key={p}>{p}</p>)}
        </Reveal>

        <Reveal className="mt-16 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-5">
          {GUESTS_BLOCK.stats.map(s => (
            <div key={s.label} className="flex flex-col items-center gap-2 bg-ink px-4 py-10">
              <span className="font-display text-5xl font-light text-gold md:text-6xl">{s.value}</span>
              <span className="text-[0.55rem] uppercase tracking-widest2 text-mist">{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
