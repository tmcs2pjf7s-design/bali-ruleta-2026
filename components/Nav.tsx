'use client'

import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#journey', label: 'The Journey' },
  { href: '#worlds', label: 'Six Worlds' },
  { href: '#dishes', label: 'Six Dishes' },
  { href: '#wines', label: 'Twelve Wines' },
  { href: '#table', label: 'The Table' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="font-display text-lg font-medium tracking-widest2 text-ivory"
        >
          SIX&nbsp;WORLDS
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.68rem] uppercase tracking-widest2 text-mist transition-colors hover:text-ivory"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#reservation"
            onClick={() => setOpen(false)}
            className="hidden border border-gold/50 px-5 py-2.5 text-[0.62rem] uppercase tracking-widest2 text-gold transition-colors hover:bg-gold hover:text-black sm:inline-block"
          >
            Reserve
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              className={`h-px w-5 bg-ivory transition-transform duration-300 ${
                open ? 'translate-y-[3px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-px w-5 bg-ivory transition-transform duration-300 ${
                open ? '-translate-y-[3px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* mobile sheet */}
      <div
        className={`overflow-hidden border-t border-line transition-[max-height] duration-500 lg:hidden ${
          open ? 'max-h-[80vh]' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-6">
          {LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/60 py-4 font-display text-2xl text-ivory"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#reservation"
            onClick={() => setOpen(false)}
            className="mt-6 bg-gold px-5 py-4 text-center text-[0.7rem] uppercase tracking-widest2 text-black"
          >
            Reserve your seat
          </a>
        </div>
      </div>
    </header>
  )
}
