import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import ReservationForm from '@/components/ReservationForm'
import { RESERVATION, BRAND } from '@/data/experience'

export default function Reservation() {
  const priceText =
    RESERVATION.pricePerPerson > 0
      ? `${RESERVATION.currency}${RESERVATION.pricePerPerson}`
      : `${RESERVATION.currency} · · ·`

  return (
    <section id="reservation" className="scroll-mt-24 border-t border-line bg-ink px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal><Eyebrow index="08">Reservation</Eyebrow></Reveal>
        <Reveal as="h2" delay={80} className="mt-10 max-w-3xl font-display text-3xl font-light leading-tight text-ivory md:text-5xl">
          You are not booking a table. You are taking one of six seats.
        </Reveal>

        <div className="mt-16 grid gap-16 md:grid-cols-[1fr_1.1fr] md:gap-24">
          {/* details */}
          <Reveal className="space-y-10">
            <div className="flex items-baseline justify-between border-b border-line pb-5">
              <span className="text-[0.6rem] uppercase tracking-widest2 text-mist">Per person</span>
              <span className="font-display text-4xl font-light text-gold">{priceText}</span>
            </div>
            {RESERVATION.pricePerPerson === 0 && (
              <p className="-mt-6 text-[0.72rem] text-mist">Final price is confirmed at booking.</p>
            )}

            <div>
              <span className="text-[0.6rem] uppercase tracking-widest2 text-mist">Duration</span>
              <p className="mt-2 text-sm text-ivory/85">{RESERVATION.durationText}</p>
            </div>

            <div>
              <span className="text-[0.6rem] uppercase tracking-widest2 text-mist">What it includes</span>
              <ul className="mt-3 space-y-2">
                {RESERVATION.includes.map(item => (
                  <li key={item} className="flex gap-3 text-sm text-ivory/85">
                    <span className="text-gold">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[0.6rem] uppercase tracking-widest2 text-mist">Cancellation</span>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-mist">{RESERVATION.cancellation}</p>
            </div>

            <div>
              <span className="text-[0.6rem] uppercase tracking-widest2 text-mist">Allergies &amp; restrictions</span>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-mist">{RESERVATION.dietary}</p>
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={120} className="border border-line p-6 md:p-10">
            <p className="mb-8 font-display text-2xl font-light text-ivory">Request your seat</p>
            <ReservationForm />
            <p className="mt-8 text-[0.72rem] text-mist">
              Prefer to write directly?{' '}
              <a href={`mailto:${BRAND.email}`} className="text-gold underline-offset-4 hover:underline">
                {BRAND.email}
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
