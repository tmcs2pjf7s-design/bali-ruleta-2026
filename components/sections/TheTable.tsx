import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import {
  AVAILABILITY, DAY_LABEL, SCARCITY, SEAT_STATUS_LABEL, UI, t, type Lang,
} from '@/data/experience'

const statusColor: Record<string, string> = {
  available: 'text-champ',
  limited: 'text-ink',
  full: 'text-warmgrey',
  waitlist: 'text-warmgrey',
}

export default function TheTable({ lang }: { lang: Lang }) {
  return (
    <section id="table" className="scroll-mt-24 border-t border-line px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal><Eyebrow index="07">{t(UI.eyebrow.table, lang)}</Eyebrow></Reveal>

        <Reveal as="h2" delay={80} className="mt-10 font-display text-4xl font-light leading-none text-ink md:text-7xl">
          {t(DAY_LABEL.Thursday, lang)} <span className="text-champ">·</span> {t(DAY_LABEL.Friday, lang)}
        </Reveal>
        <Reveal className="mt-6 text-[0.7rem] uppercase tracking-widest2 text-warmgrey">
          {t(UI.guestsServicePerNight, lang)}
        </Reveal>
        <Reveal as="p" delay={60} className="mt-8 max-w-md font-display text-xl italic text-graphite">
          {t(SCARCITY, lang)}
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {AVAILABILITY.map(slot => {
            const soldOut = slot.status === 'full'
            return (
              <Reveal key={slot.day} className="flex flex-col gap-6 border border-line bg-ivory p-8 md:p-10">
                <div className="flex items-start justify-between">
                  <span className="font-display text-3xl font-light text-ink md:text-4xl">
                    {t(DAY_LABEL[slot.day], lang)}
                  </span>
                  <span className={`text-[0.62rem] uppercase tracking-widest2 ${statusColor[slot.status]}`}>
                    {slot.status === 'limited'
                      ? lang === 'es'
                        ? `${slot.seatsLeft} ${slot.seatsLeft === 1 ? 'plaza libre' : 'plazas libres'}`
                        : `${slot.seatsLeft} ${slot.seatsLeft === 1 ? 'seat' : 'seats'} left`
                      : t(SEAT_STATUS_LABEL[slot.status], lang)}
                  </span>
                </div>

                <div className="flex gap-1.5">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span key={i} className={`h-1 flex-1 ${i < slot.seatsLeft ? 'bg-champ' : 'bg-line'}`} />
                  ))}
                </div>

                <a
                  href="#reservation"
                  aria-disabled={soldOut}
                  className={`mt-1 inline-block border px-6 py-3.5 text-center text-[0.62rem] uppercase tracking-widest2 transition-colors ${
                    soldOut
                      ? 'pointer-events-none border-line text-warmgrey'
                      : 'border-ink text-ink hover:bg-ink hover:text-paper'
                  }`}
                >
                  {soldOut ? t(UI.joinWaitlist, lang) : t(UI.reserveThisNight, lang)}
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
