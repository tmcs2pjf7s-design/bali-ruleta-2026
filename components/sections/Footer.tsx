import { BRAND } from '@/data/experience'

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-display text-4xl font-light tracking-[0.04em] text-ivory md:text-6xl">
          SIX&nbsp;WORLDS
        </p>
        <p className="mt-4 text-[0.7rem] uppercase tracking-widest2 text-mist">{BRAND.concept}</p>

        <div className="mt-12 flex flex-col gap-6 border-t border-line pt-8 text-[0.72rem] uppercase tracking-widest2 text-mist sm:flex-row sm:items-center sm:justify-between">
          <span>{BRAND.nights} · One service per night</span>
          <a href={`mailto:${BRAND.email}`} className="text-gold hover:text-ivory">
            {BRAND.email}
          </a>
          <span>© {new Date().getFullYear()} {BRAND.name}</span>
        </div>
      </div>
    </footer>
  )
}
