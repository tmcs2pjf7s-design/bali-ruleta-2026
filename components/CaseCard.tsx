'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Case } from '@/data/cases'

interface Props {
  caso:  Case
  index: number
}

const statusLabel: Record<string, string> = {
  open:   'Abierto',
  solved: 'Resuelto',
  cold:   'Caso frío',
}
const statusColor: Record<string, string> = {
  open:   'border-red-DEFAULT/40 text-red-light bg-red-dark/10',
  solved: 'border-emerald-600/40 text-emerald-400 bg-emerald-900/10',
  cold:   'border-zinc-600/40 text-zinc-400 bg-zinc-800/10',
}

export default function CaseCard({ caso, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .5, delay: index * .06, ease: [.16,1,.3,1] }}
    >
      <Link
        href={`/caso/${caso.slug}`}
        className="group relative block rounded-sm overflow-hidden border border-white/5 bg-white/[.018] transition-all duration-300 hover:border-gold-DEFAULT/25 hover:shadow-case hover:-translate-y-1"
        style={{ '--tw-shadow-color': `${caso.color}30` } as React.CSSProperties}
      >
        {/* Left accent bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[2px] scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-[400ms] ease-out"
          style={{ background: `linear-gradient(to bottom, transparent, ${caso.color}, transparent)` }}
        />

        {/* Hover glow */}
        <div
          className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${caso.color}14, transparent 70%)` }}
        />

        <div className="relative z-10 p-6">
          {/* Case number */}
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-4 bg-red-light/60" />
            <span className="text-[.6rem] font-bold tracking-[.2em] uppercase text-red-light/80">
              Caso {String(caso.id + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif font-bold text-lg text-cream leading-tight mb-2 group-hover:text-white transition-colors">
            {caso.title}
          </h3>

          {/* Location + year */}
          <p className="text-[.72rem] text-dim mb-3 tracking-wide">
            {caso.location} · {caso.year}
          </p>

          {/* Description */}
          <p className="text-[.8rem] text-cream/50 leading-relaxed line-clamp-3 mb-4">
            {caso.heroDesc}
          </p>

          {/* Tags row */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[.58rem] font-bold tracking-[.1em] uppercase border ${statusColor[caso.status]}`}>
              {caso.status === 'open' && (
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-dot" />
              )}
              {statusLabel[caso.status]}
            </span>
            {caso.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-[.58rem] tracking-wide text-dim/70 uppercase">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom gradient on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background: `linear-gradient(135deg, ${caso.color}08, transparent)` }}
        />
      </Link>
    </motion.div>
  )
}
