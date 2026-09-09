import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import WorldMedia from '@/components/WorldMedia'
import { WORLDS } from '@/data/experience'

export default function Worlds() {
  return (
    <section id="worlds" className="scroll-mt-24 border-t border-line px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal><Eyebrow index="02">The Six Worlds</Eyebrow></Reveal>
        <Reveal as="h2" delay={80} className="mt-10 max-w-3xl font-display text-3xl font-light leading-tight text-ivory md:text-5xl">
          Six chapters, in order. Each one a place — and a departure from it.
        </Reveal>

        <div className="mt-16 flex flex-col">
          {WORLDS.map((w, i) => (
            <Reveal
              key={w.act}
              className={`grid items-center gap-6 border-t border-line py-10 md:grid-cols-2 md:gap-16 md:py-14 ${
                i % 2 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <WorldMedia
                image={w.image}
                roman={w.roman}
                place={w.place}
                ratio="aspect-[16/10] md:aspect-[4/3]"
              />
              <div>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-2xl font-light text-gold">{w.roman}</span>
                  <span className="text-[0.62rem] uppercase tracking-widest2 text-mist">{w.place}</span>
                </div>
                <h3 className="mt-3 font-display text-3xl font-light text-ivory md:text-4xl">{w.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-mist">{w.teaser}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
