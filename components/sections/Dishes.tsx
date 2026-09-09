import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import WorldMedia from '@/components/WorldMedia'
import { WORLDS } from '@/data/experience'

export default function Dishes() {
  const [bali, ...rest] = WORLDS

  return (
    <section id="dishes" className="scroll-mt-24 border-t border-line bg-ink px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal><Eyebrow index="03">Six Dishes</Eyebrow></Reveal>
        <Reveal as="h2" delay={80} className="mt-10 max-w-3xl font-display text-3xl font-light leading-tight text-ivory md:text-5xl">
          A collection of six creations. One for each world.
        </Reveal>

        {/* Featured — BALI NOIR */}
        <Reveal className="mt-16 grid gap-8 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div className="mx-auto w-full max-w-[520px]">
            <WorldMedia image={bali.image} roman={bali.roman} place={bali.place} ratio="aspect-square" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl font-light text-gold">{bali.roman}</span>
              <span className="text-[0.62rem] uppercase tracking-widest2 text-mist">Act 01 · {bali.place}</span>
            </div>
            <h3 className="mt-3 font-display text-4xl font-light text-ivory md:text-6xl">{bali.title}</h3>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-mist md:text-[0.95rem]">{bali.concept}</p>
            <p className="mt-6 border-l border-gold/40 pl-4 font-display text-lg italic text-ivory/70">
              A little food, a large black plate. Precision over abundance.
            </p>
          </div>
        </Reveal>

        {/* The other five */}
        <div className="mt-20 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map(w => (
            <Reveal key={w.act}>
              <WorldMedia image={w.image} roman={w.roman} place={w.place} ratio="aspect-[4/5]" />
              <div className="mt-5 flex items-baseline gap-3">
                <span className="font-display text-lg font-light text-gold">{w.roman}</span>
                <span className="text-[0.58rem] uppercase tracking-widest2 text-mist">
                  Act 0{w.act} · {w.place}
                </span>
              </div>
              <h3 className="mt-2 font-display text-2xl font-light text-ivory">{w.title}</h3>
              <p className="mt-3 text-[0.85rem] leading-relaxed text-mist">{w.concept}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
