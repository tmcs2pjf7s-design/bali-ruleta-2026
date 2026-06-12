'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Case } from '@/data/cases'
import CaseCard from './CaseCard'
import StatsBar from './StatsBar'
import CaseCarousel from './CaseCarousel'
import SearchBar from './SearchBar'
import LangPicker from './LangPicker'

interface Props {
  featured: Case
  cases:    Case[]
  solved:   Case[]
  open:     Case[]
}

export default function HomepageClient({ featured, cases, solved, open }: Props) {
  return (
    <>
      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-gradient-to-b from-obsidian to-transparent pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-3">
          <span className="font-serif font-black text-2xl tracking-tight text-cream glitch" data-text="CRIMS">
            CRIMS
          </span>
          <span className="text-[.55rem] tracking-[.2em] uppercase text-dim/60 border-l border-white/10 pl-3">
            detective
          </span>
        </div>
        <div className="pointer-events-auto">
          <LangPicker />
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-end pb-16 px-6 md:px-14 overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse at 70% 40%, ${featured.color}18 0%, transparent 60%),
              linear-gradient(180deg, #080810 0%, #0d0d18 50%, #080810 100%)
            `,
          }}
        />

        {/* Red accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] z-10"
             style={{ background: `linear-gradient(to bottom, transparent, ${featured.color}, transparent)` }} />

        {/* Featured case label */}
        <div className="relative z-10 mb-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .4 }}
            className="text-[.58rem] font-bold tracking-[.3em] uppercase text-red-light/70 mb-3 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-red-light/60 inline-block" />
            Caso destacado
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .55, ease: [.16,1,.3,1] }}
            className="font-serif font-black text-cream leading-none mb-4"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}
          >
            {featured.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .75 }}
            className="text-cream/55 text-lg max-w-xl leading-relaxed mb-8"
          >
            {featured.heroDesc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .9 }}
            className="flex items-center gap-3 flex-wrap"
          >
            <Link
              href={`/caso/${featured.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm font-semibold text-sm tracking-wide transition-all duration-200 hover:gap-3"
              style={{ background: featured.color, color: '#fff' }}
            >
              Investigar →
            </Link>
            <div className="flex items-center gap-2">
              {featured.tags.map(t => (
                <span key={t} className="text-[.6rem] tracking-[.12em] uppercase text-dim border border-white/8 px-2 py-1 rounded-sm">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="relative z-10 flex gap-8 pt-8 border-t border-white/6"
        >
          {[
            { label: 'Casos',      value: `${cases.length}` },
            { label: 'Resueltos',  value: `${solved.length}` },
            { label: 'Abiertos',   value: `${open.length}` },
            { label: 'Años',       value: '1999–2023' },
          ].map(s => (
            <div key={s.label}>
              <div className="font-serif text-2xl font-bold text-cream">{s.value}</div>
              <div className="text-[.58rem] tracking-[.18em] uppercase text-dim">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-6 right-8 flex flex-col items-center gap-1.5 z-10"
        >
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-bounce" />
          <span className="text-[.5rem] tracking-[.25em] uppercase text-dim/50">scroll</span>
        </motion.div>
      </section>

      {/* ── Search ── */}
      <section className="px-6 md:px-14 py-6">
        <SearchBar />
      </section>

      {/* ── Stats ── */}
      <StatsBar />

      {/* ── All cases grid ── */}
      <section className="px-6 md:px-14 pb-8">
        <p className="text-[.6rem] font-bold tracking-[.28em] uppercase text-dim mb-6">
          Todos los casos
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cases.map((c, i) => (
            <CaseCard key={c.id} caso={c} index={i} />
          ))}
        </div>
      </section>

      {/* ── Carousels ── */}
      <section className="px-6 md:px-14 pb-16">
        <CaseCarousel title="Casos resueltos" cases={solved} />
        <CaseCarousel title="Casos abiertos"  cases={open} />
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 px-6 md:px-14 py-10 text-center">
        <p className="font-serif text-2xl font-black text-cream/20 mb-3">CRIMS</p>
        <p className="text-[.65rem] text-dim/50 tracking-wide">
          © 2026 · Una experiencia de investigación criminal interactiva
        </p>
      </footer>
    </>
  )
}
