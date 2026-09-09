'use client'

import { useEffect, useState } from 'react'
import { UI, t, type Lang } from '@/data/experience'

/** Mobile-only persistent reserve bar; appears once the hero is scrolled past. */
export default function StickyReserve({ lang }: { lang: Lang }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.9
      const nearForm = () => {
        const form = document.getElementById('reservation')
        if (!form) return false
        return form.getBoundingClientRect().top < window.innerHeight
      }
      setShow(past && !nearForm())
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-black/90 px-4 py-3 backdrop-blur-md transition-transform duration-500 sm:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href="#reservation"
        className="block bg-gold py-3.5 text-center text-[0.72rem] uppercase tracking-widest2 text-black"
      >
        {t(UI.reserveSeat, lang)}
      </a>
    </div>
  )
}
