'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * Very light vertical parallax on scroll. Max travel is `strength` px.
 * Disabled for reduced-motion and when IntersectionObserver/rAF is unavailable.
 */
export default function Parallax({
  children,
  strength = 24,
  className = '',
}: {
  children: ReactNode
  strength?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    let inView = false

    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      // -1 (below viewport) .. 1 (above viewport)
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2)
      setOffset(Math.max(-1, Math.min(1, progress)) * -strength)
    }

    const onScroll = () => {
      if (!inView || raf) return
      raf = requestAnimationFrame(update)
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting
        if (inView) onScroll()
      },
      { rootMargin: '80px 0px' },
    )
    io.observe(el)
    window.addEventListener('scroll', onScroll, { passive: true })
    update()

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [strength])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        className="h-full w-full will-change-transform"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      >
        {children}
      </div>
    </div>
  )
}
