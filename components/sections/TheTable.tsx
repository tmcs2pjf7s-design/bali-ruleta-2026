import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import { AVAILABILITY, SEAT_STATUS_LABEL } from '@/data/experience'

const statusColor: Record<string, string> = {
  available: 'text-gold',
  limited: 'text-ivory',
  full: 'text-mist',
  waitlist: 'text-mist',
}

export default function TheTable() {
  return (
    <section id="table" className="scroll-mt-24 border-t border-line px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal><Eyebrow index="07">The Table</Eyebrow></Reveal>

        <Reveal as="h2" delay={80} className="mt-10 font-display text-4xl font-light leading-none text-ivory md:text-7xl">
          Thursday <span className="text-gold/40">·</span> Friday
        </Reveal>
        <Reveal className="mt-6 text-[0.7rem] uppercase tracking-widest2 text-mist">
          One service per night · Six guests
        </Reveal>

        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2">
          {AVAILABILITY.map(slot => {
            const soldOut = slot.status === 'full'
            return (
              <Reveal key={slot.day} className="flex flex-col gap-6 bg-black p-8 md:p-12">
                <div className="flex items-start justify-between">
                  <span className="font-display text-3xl font-light text-ivory md:text-4xl">{slot.day}</span>
                  <span className={`text-[0.62rem] uppercase tracking-widest2 ${statusColor[slot.status]}`}>
                    {slot.status === 'limited'
                      ? `${slot.seatsLeft} ${slot.seatsLeft === 1 ? 'seat' : 'seats'} left`
                      : SEAT_STATUS_LABEL[slot.status]}
                  </span>
                </div>

                <div className="flex gap-1.5">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 flex-1 ${
                        i < slot.seatsLeft ? 'bg-gold' : 'bg-line'
                      }`}
                    />
                  ))}
                </div>

                <a
                  href="#reservation"
                  aria-disabled={soldOut}
                  className={`mt-2 inline-block border px-6 py-3.5 text-center text-[0.62rem] uppercase tracking-widest2 transition-colors ${
                    soldOut
                      ? 'pointer-events-none border-line text-mist'
                      : 'border-gold text-gold hover:bg-gold hover:text-black'
                  }`}
                >
                  {soldOut ? 'Join the waitlist' : 'Reserve this night'}
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
