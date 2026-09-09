'use client'

import { useState } from 'react'
import { AVAILABILITY, BRAND, SEAT_STATUS_LABEL } from '@/data/experience'

const bookable = AVAILABILITY.filter(s => s.status !== 'full')

export default function ReservationForm() {
  const [night, setNight] = useState<string>(bookable[0]?.day ?? 'Thursday')
  const [guests, setGuests] = useState('2')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [dietary, setDietary] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = [
      `Night: ${night}`,
      `Guests: ${guests}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Allergies / restrictions: ${dietary || '—'}`,
      '',
      'Please confirm availability and the next steps.',
    ].join('\n')
    window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent(
      `SIX WORLDS — reservation request (${night})`,
    )}&body=${encodeURIComponent(body)}`
  }

  const field =
    'w-full border-b border-line bg-transparent py-3 text-ivory placeholder:text-mist/60 focus:border-gold focus:outline-none'
  const label = 'block text-[0.6rem] uppercase tracking-widest2 text-mist'

  return (
    <form onSubmit={submit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="r-night">Night</label>
          <select
            id="r-night"
            value={night}
            onChange={e => setNight(e.target.value)}
            className={`${field} appearance-none`}
          >
            {bookable.map(s => (
              <option key={s.day} value={s.day} className="bg-char">
                {s.day} — {SEAT_STATUS_LABEL[s.status]}
                {s.status === 'limited' ? ` (${s.seatsLeft} left)` : ''}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="r-guests">Guests</label>
          <select
            id="r-guests"
            value={guests}
            onChange={e => setGuests(e.target.value)}
            className={`${field} appearance-none`}
          >
            {['1', '2', '3', '4', '5', '6'].map(n => (
              <option key={n} value={n} className="bg-char">{n}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="r-name">Full name</label>
          <input id="r-name" required value={name} onChange={e => setName(e.target.value)} className={field} />
        </div>
        <div>
          <label className={label} htmlFor="r-email">Email</label>
          <input id="r-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} className={field} />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="r-phone">Phone</label>
        <input id="r-phone" value={phone} onChange={e => setPhone(e.target.value)} className={field} />
      </div>

      <div>
        <label className={label} htmlFor="r-diet">Allergies &amp; restrictions</label>
        <textarea
          id="r-diet"
          rows={2}
          value={dietary}
          onChange={e => setDietary(e.target.value)}
          className={`${field} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gold py-4 text-[0.72rem] uppercase tracking-widest2 text-black transition-colors hover:bg-ivory"
      >
        Request your seat
      </button>
      <p className="text-[0.72rem] leading-relaxed text-mist">
        This opens an email to our team. A seat is held only once we reply with confirmation.
      </p>
    </form>
  )
}
