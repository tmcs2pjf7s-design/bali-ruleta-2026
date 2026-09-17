'use client'

import { useMemo, useState } from 'react'
import { BOOKING, FULLY_BOOKED_DATES, UI, t, type Lang } from '@/data/experience'

function startOfDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

/** 'YYYY-MM-DD' in local time — matches the strings in FULLY_BOOKED_DATES. */
function dateKey(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function isBookableDate(d: Date): boolean {
  return BOOKING.weekdays.includes(d.getDay()) && d.getTime() >= firstAvailableDate().getTime() && !FULLY_BOOKED_DATES.includes(dateKey(d))
}

function addMonths(d: Date, n: number): Date {
  return new Date(d.getFullYear(), d.getMonth() + n, 1)
}

function sameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

/** Monday-first month grid: array of weeks, each a 7-slot array (null = padding). */
function buildMonthGrid(monthDate: Date): (Date | null)[][] {
  const year = monthDate.getFullYear()
  const month = monthDate.getMonth()
  const firstOfMonth = new Date(year, month, 1)
  const firstWeekday = (firstOfMonth.getDay() + 6) % 7 // Monday = 0 … Sunday = 6
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const cells: (Date | null)[] = []
  for (let i = 0; i < firstWeekday; i++) cells.push(null)
  for (let day = 1; day <= daysInMonth; day++) cells.push(new Date(year, month, day))
  while (cells.length % 7 !== 0) cells.push(null)

  const weeks: (Date | null)[][] = []
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7))
  return weeks
}

export function firstAvailableDate(): Date {
  const { year, month, day } = BOOKING.firstAvailable
  return new Date(year, month - 1, day)
}

/** The earliest date that's actually bookable — skips any date closed via FULLY_BOOKED_DATES. */
export function nextAvailableDate(): Date {
  const d = new Date(firstAvailableDate())
  for (let i = 0; i < 365 * 2; i++) {
    if (isBookableDate(d)) return new Date(d)
    d.setDate(d.getDate() + 1)
  }
  return firstAvailableDate()
}

export default function BookingCalendar({
  lang,
  value,
  onChange,
}: {
  lang: Lang
  value: Date
  onChange: (date: Date) => void
}) {
  const locale = lang === 'es' ? 'es-ES' : 'en-GB'
  const firstAvailable = useMemo(firstAvailableDate, [])
  const today = useMemo(() => startOfDay(new Date()), [])
  const earliestViewable = today.getTime() < firstAvailable.getTime() ? today : firstAvailable

  const [viewDate, setViewDate] = useState<Date>(() => {
    const base = firstAvailable.getTime() > today.getTime() ? firstAvailable : today
    return new Date(base.getFullYear(), base.getMonth(), 1)
  })

  const canGoPrev =
    viewDate.getFullYear() > earliestViewable.getFullYear() ||
    (viewDate.getFullYear() === earliestViewable.getFullYear() && viewDate.getMonth() > earliestViewable.getMonth())

  const weeks = useMemo(() => buildMonthGrid(viewDate), [viewDate])

  const weekdayLabels = useMemo(() => {
    const monday = new Date(2024, 0, 1) // a known Monday
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(monday)
      d.setDate(monday.getDate() + i)
      return d.toLocaleDateString(locale, { weekday: 'narrow' })
    })
  }, [locale])

  return (
    <div className="border border-line bg-paper p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setViewDate(v => addMonths(v, -1))}
          disabled={!canGoPrev}
          aria-label={t(UI.calendar.prevMonth, lang)}
          className="flex h-7 w-7 items-center justify-center text-ink transition-opacity disabled:opacity-20"
        >
          ‹
        </button>
        <p className="font-display text-base text-ink">
          {(() => {
            const label = viewDate.toLocaleDateString(locale, { month: 'long', year: 'numeric' })
            return label.charAt(0).toUpperCase() + label.slice(1)
          })()}
        </p>
        <button
          type="button"
          onClick={() => setViewDate(v => addMonths(v, 1))}
          aria-label={t(UI.calendar.nextMonth, lang)}
          className="flex h-7 w-7 items-center justify-center text-ink"
        >
          ›
        </button>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[0.58rem] uppercase tracking-widest2 text-warmgrey">
        {weekdayLabels.map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1">
        {weeks.flat().map((date, i) => {
          if (!date) return <span key={i} aria-hidden />

          const isServiceNight = BOOKING.weekdays.includes(date.getDay())
          const isBookable = isBookableDate(date)
          const isSelected = sameDay(date, value)

          return (
            <button
              key={i}
              type="button"
              disabled={!isBookable}
              onClick={() => onChange(date)}
              title={isServiceNight && !isBookable ? t(UI.calendar.full, lang) : undefined}
              aria-pressed={isSelected}
              className={[
                'flex h-9 items-center justify-center text-[0.8rem] transition-colors',
                isSelected
                  ? 'bg-ink text-paper'
                  : isBookable
                    ? 'text-ink hover:bg-stone'
                    : isServiceNight
                      ? 'text-warmgrey/50 line-through decoration-warmgrey/40'
                      : 'text-warmgrey/25',
              ].join(' ')}
            >
              {date.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )
}
