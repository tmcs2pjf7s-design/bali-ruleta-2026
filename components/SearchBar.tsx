'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import CASES from '@/data/cases'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [open,  setOpen]  = useState(false)

  const results = useCallback(() => {
    if (query.length < 2) return []
    const q = query.toLowerCase()
    return CASES.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.location.toLowerCase().includes(q) ||
      c.victim.toLowerCase().includes(q) ||
      c.tags.some(t => t.toLowerCase().includes(q))
    ).slice(0, 5)
  }, [query])

  const hits = results()

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Buscar casos, víctimas, lugares…"
        value={query}
        onChange={e => { setQuery(e.target.value); setOpen(true) }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 180)}
        className="w-full bg-white/[.04] border border-white/8 rounded-sm px-4 py-2.5 text-sm text-cream placeholder-dim/60 outline-none focus:border-gold-DEFAULT/40 transition-colors"
      />

      <AnimatePresence>
        {open && hits.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: .18 }}
            className="absolute top-full mt-1 left-0 right-0 bg-surface border border-border rounded-sm overflow-hidden z-50 shadow-xl"
          >
            {hits.map(c => (
              <Link
                key={c.id}
                href={`/caso/${c.slug}`}
                className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/4 last:border-0"
              >
                <span className="text-[.6rem] font-bold tracking-widest text-red-light/70 w-10 shrink-0">
                  {String(c.id + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-sm text-cream font-medium">{c.title}</p>
                  <p className="text-[.65rem] text-dim">{c.location} · {c.year}</p>
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
