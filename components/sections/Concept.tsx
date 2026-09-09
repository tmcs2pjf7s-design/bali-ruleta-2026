import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import { BRAND, FIGURES } from '@/data/experience'

export default function Concept() {
  return (
    <section id="journey" className="scroll-mt-24 border-t border-line px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal><Eyebrow index="01">The Journey</Eyebrow></Reveal>

        <Reveal as="h2" delay={80} className="mt-10 max-w-4xl font-display text-3xl font-light leading-[1.15] text-ivory md:text-6xl">
          For four hours, six guests travel through six worlds — a private journey told in food and wine.
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1fr] md:gap-20">
          <Reveal className="space-y-5 text-sm leading-relaxed text-mist md:text-[0.95rem]">
            <p>
              This is not a tasting menu. It is a route: Bali, Australia, Cape Verde,
              South America, Portugal, Spain — each a chapter, each a place, a culture,
              a landscape and a feeling.
            </p>
            <p>
              Six creations. Twelve wines. One table. The details are revealed course by
              course; some are kept back until you are seated.
            </p>
            <p className="font-display text-lg italic text-ivory/80">
              {BRAND.lines[2]}
            </p>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-3 gap-px self-start border border-line bg-line">
            {FIGURES.map(f => (
              <div key={f.label} className="flex flex-col items-center gap-1 bg-black px-3 py-7">
                <span className="font-display text-4xl font-light text-gold">{f.value}</span>
                <span className="text-[0.55rem] uppercase tracking-widest2 text-mist">{f.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
