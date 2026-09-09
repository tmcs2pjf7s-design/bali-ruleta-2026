import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import ReservationForm from '@/components/ReservationForm'
import { RESERVATION, BRAND, UI, t, type Lang } from '@/data/experience'

export default function Reservation({ lang }: { lang: Lang }) {
  const priceText =
    RESERVATION.pricePerPerson > 0
      ? `${RESERVATION.currency}${RESERVATION.pricePerPerson}`
      : `${RESERVATION.currency} · · ·`

  return (
    <section id="reservation" className="scroll-mt-24 border-t border-line bg-ink px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal><Eyebrow index="08">{t(UI.eyebrow.reservation, lang)}</Eyebrow></Reveal>
        <Reveal as="h2" delay={80} className="mt-10 max-w-3xl font-display text-3xl font-light leading-tight text-ivory md:text-5xl">
          {t(UI.reservationHeadline, lang)}
        </Reveal>

        <div className="mt-16 grid gap-16 md:grid-cols-[1fr_1.1fr] md:gap-24">
          {/* details */}
          <Reveal className="space-y-10">
            <div className="flex items-baseline justify-between border-b border-line pb-5">
              <span className="text-[0.6rem] uppercase tracking-widest2 text-mist">{t(UI.perPerson, lang)}</span>
              <span className="font-display text-4xl font-light text-gold">{priceText}</span>
            </div>
            {RESERVATION.pricePerPerson === 0 && (
              <p className="-mt-6 text-[0.72rem] text-mist">{t(UI.priceAtBooking, lang)}</p>
            )}

            <div>
              <span className="text-[0.6rem] uppercase tracking-widest2 text-mist">{t(UI.duration, lang)}</span>
              <p className="mt-2 text-sm text-ivory/85">{t(RESERVATION.durationText, lang)}</p>
            </div>

            <div>
              <span className="text-[0.6rem] uppercase tracking-widest2 text-mist">{t(UI.whatIncludes, lang)}</span>
              <ul className="mt-3 space-y-2">
                {RESERVATION.includes.map(item => (
                  <li key={item.en} className="flex gap-3 text-sm text-ivory/85">
                    <span className="text-gold">—</span>
                    {t(item, lang)}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[0.6rem] uppercase tracking-widest2 text-mist">{t(UI.cancellation, lang)}</span>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-mist">{t(RESERVATION.cancellation, lang)}</p>
            </div>

            <div>
              <span className="text-[0.6rem] uppercase tracking-widest2 text-mist">{t(UI.dietary, lang)}</span>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-mist">{t(RESERVATION.dietary, lang)}</p>
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={120} className="border border-line p-6 md:p-10">
            <p className="mb-8 font-display text-2xl font-light text-ivory">{t(UI.requestSeat, lang)}</p>
            <ReservationForm lang={lang} />
            <p className="mt-8 text-[0.72rem] text-mist">
              {t(UI.writeDirectly, lang)}{' '}
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
