'use client'

import { useState } from 'react'
import { BRAND, UI, t, type Lang } from '@/data/experience'
import BookingCalendar, { nextAvailableDate } from './BookingCalendar'

function pad(n: number): string {
  return String(n).padStart(2, '0')
}

function isoDate(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function formatDate(d: Date, lang: Lang): string {
  const locale = lang === 'es' ? 'es-ES' : 'en-GB'
  const text = d.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export default function ReservationForm({ lang }: { lang: Lang }) {
  const [date, setDate] = useState<Date>(nextAvailableDate)
  const [guests, setGuests] = useState('2')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [dietary, setDietary] = useState('')

  const seatCount = Number(guests) || 1
  const dateLabel = formatDate(date, lang)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const isEs = lang === 'es'
    const body = [
      `${isEs ? 'Fecha' : 'Date'}: ${dateLabel} (${isoDate(date)})`,
      `${isEs ? 'Plazas' : 'Seats'}: ${guests}`,
      `${isEs ? 'Nombre' : 'Name'}: ${name}`,
      `Email: ${email}`,
      `${isEs ? 'Teléfono' : 'Phone'}: ${phone}`,
      `${isEs ? 'Alergias / restricciones' : 'Allergies / restrictions'}: ${dietary || '—'}`,
      '',
      isEs ? 'Por favor, confirmad disponibilidad y los siguientes pasos.' : 'Please confirm availability and the next steps.',
    ].join('\n')
    window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent(
      `SIX WORLDS — ${isEs ? 'solicitud de reserva' : 'reservation request'} · ${guests} ${
        isEs ? (seatCount === 1 ? 'plaza' : 'plazas') : seatCount === 1 ? 'seat' : 'seats'
      } (${isoDate(date)})`,
    )}&body=${encodeURIComponent(body)}`
  }

  const field =
    'w-full border-b border-line bg-transparent py-3 text-ink placeholder:text-warmgrey/60 focus:border-ink focus:outline-none'
  const label = 'block text-[0.6rem] uppercase tracking-widest2 text-warmgrey'

  return (
    <form onSubmit={submit} className="space-y-8">
      <div>
        <label className={`${label} mb-2`}>{t(UI.form.date, lang)}</label>
        <BookingCalendar lang={lang} value={date} onChange={setDate} />
        <p className="mt-3 font-display text-lg font-light text-ink">{dateLabel}</p>
      </div>

      <div>
        <label className={label} htmlFor="r-guests">{t(UI.form.guests, lang)}</label>
        <select
          id="r-guests"
          value={guests}
          onChange={e => setGuests(e.target.value)}
          className={`${field} appearance-none`}
        >
          {['1', '2', '3', '4', '5', '6'].map(n => (
            <option key={n} value={n} className="bg-paper text-ink">
              {UI.form.seatOption(Number(n), lang)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="r-name">{t(UI.form.name, lang)}</label>
          <input id="r-name" required value={name} onChange={e => setName(e.target.value)} className={field} />
        </div>
        <div>
          <label className={label} htmlFor="r-email">{t(UI.form.email, lang)}</label>
          <input id="r-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} className={field} />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="r-phone">{t(UI.form.phone, lang)}</label>
        <input id="r-phone" value={phone} onChange={e => setPhone(e.target.value)} className={field} />
      </div>

      <div>
        <label className={label} htmlFor="r-diet">{t(UI.form.dietary, lang)}</label>
        <textarea
          id="r-diet"
          rows={2}
          value={dietary}
          onChange={e => setDietary(e.target.value)}
          className={`${field} resize-none`}
        />
      </div>

      {/* live summary — reinforces: seats, not a table; the full experience included */}
      <div className="border border-line bg-stone/50 p-5">
        <p className="text-[0.6rem] uppercase tracking-widest2 text-warmgrey">{t(UI.form.summaryTitle, lang)}</p>
        <p className="mt-2 font-display text-xl font-light text-ink">
          {UI.form.summary(seatCount, dateLabel, lang)}
        </p>
        <p className="mt-2 text-[0.78rem] leading-relaxed text-graphite">
          {UI.form.summaryNote(seatCount, lang)}
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-ink py-4 text-[0.72rem] uppercase tracking-widest2 text-paper transition-colors hover:bg-graphite"
      >
        {t(UI.form.submit, lang)}
      </button>
      <p className="text-[0.72rem] leading-relaxed text-warmgrey">{t(UI.form.disclaimer, lang)}</p>
    </form>
  )
}
