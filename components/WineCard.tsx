'use client'

import { motion } from 'framer-motion'
import type { Lang } from '@/lib/i18n'
import { tr } from '@/lib/i18n'
import { WINE_TYPE_LABEL, type Wine } from '@/data/menu'

const TYPE_DOT: Record<Wine['type'], string> = {
  blanco:   '#e0b567',
  tinto:    '#a8324a',
  generoso: '#c69749',
  espumoso: '#ece3d2',
  rosado:   '#d98c8c',
  dulce:    '#8a6a34',
}

export default function WineCard({ wine, lang }: { wine: Wine; lang: Lang }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-sm border border-border bg-card/60 p-5 backdrop-blur-sm transition-colors hover:border-gold/30"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="font-serif text-[.7rem] tracking-[.2em] text-dim">
          {tr(lang, 'glass')} {String(wine.glass).padStart(2, '0')}
        </span>
        <span className="flex items-center gap-1.5 text-[.58rem] uppercase tracking-[.16em] text-dim">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: TYPE_DOT[wine.type] }}
          />
          {WINE_TYPE_LABEL[wine.type][lang]}
        </span>
      </div>

      <h4 className="font-serif text-xl leading-tight text-bone">{wine.name}</h4>
      <p className="mt-0.5 text-[.8rem] text-gold/80">{wine.producer}</p>

      <p className="mt-3 text-[.78rem] leading-relaxed text-cream/70">
        {wine.notes[lang]}
      </p>

      <dl className="mt-4 grid grid-cols-1 gap-1 border-t border-border pt-3 text-[.68rem] text-dim sm:grid-cols-2">
        <div>
          <dt className="uppercase tracking-[.14em] text-dim/60">{wine.grape}</dt>
        </div>
        <div className="sm:text-right">
          <dt className="uppercase tracking-[.14em] text-dim/60">{wine.year}</dt>
        </div>
        <div className="sm:col-span-2">
          <dd className="text-cream/55">{wine.region[lang]}</dd>
        </div>
      </dl>
    </motion.article>
  )
}
