import Image from 'next/image'
import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import { DAY_LABEL, SCARCITY, THE_TABLE_STORY, UI, t, type Lang } from '@/data/experience'

export default function TheTable({ lang }: { lang: Lang }) {
  return (
    <section id="table" className="scroll-mt-24 border-t border-line px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal><Eyebrow index="06">{t(UI.eyebrow.table, lang)}</Eyebrow></Reveal>

        <Reveal as="h2" delay={80} className="mt-10 font-display text-4xl font-light leading-none text-ink md:text-7xl">
          {t(DAY_LABEL.Thursday, lang)} <span className="text-champ">·</span> {t(DAY_LABEL.Friday, lang)}
        </Reveal>
        <Reveal className="mt-6 text-[0.7rem] uppercase tracking-widest2 text-warmgrey">
          {t(UI.guestsServicePerNight, lang)}
        </Reveal>
        <Reveal as="p" delay={60} className="mt-8 max-w-md font-display text-xl italic text-graphite">
          {t(SCARCITY, lang)}
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <Reveal className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4]">
            <Image
              src={THE_TABLE_STORY.image}
              alt=""
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="pointer-events-none absolute inset-0 border border-ink/[0.08]" />
          </Reveal>

          <Reveal delay={100} className="space-y-5">
            {THE_TABLE_STORY.body.map(p => (
              <p key={p.en} className="text-sm leading-relaxed text-graphite md:text-[0.95rem]">
                {t(p, lang)}
              </p>
            ))}
            <p className="border-l border-champ/50 pl-4 font-display text-lg italic text-graphite">
              {t(THE_TABLE_STORY.closing, lang)}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
