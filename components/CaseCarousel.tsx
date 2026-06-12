'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Case } from '@/data/cases'

interface Props {
  title: string
  cases: Case[]
}

export default function CaseCarousel({ title, cases }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    ref.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-[.62rem] font-bold tracking-[.25em] uppercase text-dim">
          {title}
        </h2>
        <div className="flex gap-2">
          <button onClick={() => scroll(-1)} className="w-7 h-7 rounded-sm border border-white/10 bg-white/4 text-dim hover:text-cream hover:border-white/20 transition-colors text-xs flex items-center justify-center">
            ‹
          </button>
          <button onClick={() => scroll(1)} className="w-7 h-7 rounded-sm border border-white/10 bg-white/4 text-dim hover:text-cream hover:border-white/20 transition-colors text-xs flex items-center justify-center">
            ›
          </button>
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-3 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none' }}
      >
        {cases.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * .05 }}
            className="flex-none w-64 snap-start"
          >
            <Link
              href={`/caso/${c.slug}`}
              className="group block rounded-sm overflow-hidden border border-white/5 bg-white/[.015] hover:border-white/12 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Color banner */}
              <div
                className="h-1.5 w-full"
                style={{ background: `linear-gradient(90deg, ${c.color}, ${c.color}60)` }}
              />

              <div className="p-4">
                <p className="text-[.55rem] font-bold tracking-[.2em] uppercase mb-2"
                   style={{ color: c.color }}>
                  Caso {String(c.id + 1).padStart(2, '0')} · {c.year}
                </p>
                <h3 className="font-serif font-bold text-cream text-base leading-tight mb-1 group-hover:text-white transition-colors line-clamp-2">
                  {c.title}
                </h3>
                <p className="text-[.65rem] text-dim mb-3">{c.location}</p>
                <p className="text-[.72rem] text-cream/45 leading-relaxed line-clamp-3">
                  {c.heroDesc}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
