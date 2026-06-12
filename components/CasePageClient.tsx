'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useAtom } from 'jotai'
import { playerAtom } from '@/lib/store'
import type { Case, Clue } from '@/data/cases'
import CASES, { getCaseById } from '@/data/cases'
import CaseIntroOverlay from './CaseIntroOverlay'
import PlayerModal from './PlayerModal'
import Timeline from './Timeline'
import LangPicker from './LangPicker'
import { DB } from '@/lib/supabase'

type Tab = 'escena' | 'testigos' | 'sospechosos' | 'pruebas'
type Screen = 'intro' | 'player' | 'game' | 'verdict'

interface Props { caso: Case }

export default function CasePageClient({ caso }: Props) {
  const [player, setPlayer] = useAtom(playerAtom)

  const introKey = `crims_intro_${caso.id}`
  const introSeen = typeof window !== 'undefined' && !!localStorage.getItem(introKey)

  const [screen,   setScreen]   = useState<Screen>(introSeen ? 'player' : 'intro')
  const [tab,      setTab]      = useState<Tab>('escena')
  const [revealed, setRevealed] = useState<Record<string, boolean>>({})
  const [selected, setSelected] = useState<string | null>(null)
  const [verdict,  setVerdict]  = useState<'correct' | 'wrong' | null>(null)
  const [pts,      setPts]      = useState(0)
  const [readPct,  setReadPct]  = useState(0)

  // Reading progress
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      setReadPct(Math.min(100, pct))
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const cluesForTab = caso.clues.filter(c => c.category === tab)
  const totalClues  = caso.clues.length
  const doneClues   = Object.keys(revealed).length

  function revealClue(c: Clue) {
    if (revealed[c.id]) return
    setRevealed(prev => ({ ...prev, [c.id]: true }))
    setPts(p => p + c.points)
  }

  async function accuse() {
    if (!selected) return
    const susp = caso.suspects.find(s => s.name === selected)
    const ok   = susp?.guilty ?? false
    setVerdict(ok ? 'correct' : 'wrong')
    const finalPts = ok ? pts + 500 : Math.max(0, pts - 200)
    setPts(finalPts)
    setScreen('verdict')
    if (player) {
      await DB.recordScore({
        player:  player.name,
        case_id: caso.id,
        pts:     finalPts,
        solved:  ok,
      }).catch(() => {})
    }
  }

  const accentStyle = { color: caso.color } as React.CSSProperties
  const borderAccent = { borderColor: `${caso.color}40` }

  if (screen === 'intro') {
    return (
      <CaseIntroOverlay
        caso={caso}
        onDone={() => { localStorage.setItem(introKey, '1'); setScreen('player') }}
        onSkip={() => { localStorage.setItem(introKey, '1'); setScreen('player') }}
      />
    )
  }

  if (screen === 'player') {
    return (
      <PlayerModal
        open={true}
        onClose={p => { setPlayer(p); setScreen('game') }}
      />
    )
  }

  if (screen === 'verdict') {
    const correct = verdict === 'correct'
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-obsidian flex flex-col items-center justify-center p-8 text-center"
        style={{ '--ca': caso.color } as React.CSSProperties}
      >
        <motion.div
          initial={{ scale: .6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          className="text-8xl mb-6"
        >
          {correct ? '✅' : '❌'}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .3 }}
          className="font-serif font-black text-4xl text-cream mb-3"
        >
          {correct ? '¡Caso resuelto!' : 'Sospechoso incorrecto'}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="text-cream/50 mb-2 max-w-md"
        >
          {correct
            ? `Has identificado correctamente al culpable.`
            : `El culpable era ${caso.suspects.find(s => s.guilty)?.name}.`}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .65 }}
          className="font-serif text-6xl font-black mb-8"
          style={accentStyle}
        >
          {pts} <span className="text-2xl font-sans font-normal text-dim">pts</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .85 }}
          className="flex gap-3 flex-wrap justify-center"
        >
          <Link href="/" className="px-6 py-2.5 rounded-sm border border-white/12 text-cream/70 hover:text-cream text-sm transition-colors">
            ← Todos los casos
          </Link>
          {caso.id < CASES.length - 1 && (
            <Link href={`/caso/${CASES[caso.id + 1]?.slug}`}
                  className="px-6 py-2.5 rounded-sm text-white text-sm font-semibold transition-all"
                  style={{ background: caso.color }}>
              Siguiente caso →
            </Link>
          )}
        </motion.div>
      </motion.div>
    )
  }

  // ── GAME SCREEN ──
  return (
    <div className="min-h-screen bg-obsidian" style={{ '--ca': caso.color } as React.CSSProperties}>
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-white/5">
        <div className="h-full transition-all duration-100" style={{ width: `${readPct}%`, background: caso.color }} />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between px-5 py-3 bg-obsidian/90 backdrop-blur-sm border-b border-white/5">
        <Link href="/" className="text-[.68rem] tracking-wide text-dim hover:text-cream transition-colors flex items-center gap-1.5">
          ← Casos
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-[.65rem] font-semibold text-cream/60">{caso.title}</span>
        </div>

        <div className="flex items-center gap-3">
          {player && (
            <span className="text-xs text-dim">
              {player.emoji} {player.name} · <span style={accentStyle}>{pts} pts</span>
            </span>
          )}
          <span className="text-[.6rem] text-dim/60 border border-white/8 px-2 py-0.5 rounded-sm">
            {doneClues}/{totalClues} pistas
          </span>
        </div>
      </header>

      {/* Hero section */}
      <section className="relative px-6 md:px-14 pt-12 pb-8 overflow-hidden">
        {/* Accent glow */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
             style={{ background: caso.color, transform: 'translate(30%, -30%)' }} />

        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: caso.color }} />
            <span className="text-[.6rem] font-bold tracking-[.2em] uppercase" style={accentStyle}>
              Caso {String(caso.id + 1).padStart(2, '0')}
            </span>
            <span className="text-[.6rem] text-dim">· {caso.location} · {caso.date}</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif font-black text-cream leading-tight mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            {caso.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2 }}
            className="text-cream/55 text-base leading-relaxed mb-6 max-w-2xl"
          >
            {caso.briefing}
          </motion.p>

          {/* Key evidence badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border rounded-sm text-[.62rem] tracking-[.15em] uppercase font-bold"
               style={{ ...accentStyle, ...borderAccent, background: `${caso.color}0a` }}>
            🔍 {caso.keyEvidence}
          </div>
        </div>
      </section>

      {/* Progress bar */}
      <div className="px-6 md:px-14 mb-6">
        <div className="flex items-center gap-3 mb-1.5">
          <span className="text-[.58rem] tracking-[.15em] uppercase text-dim">Pistas descubiertas</span>
          <span className="text-[.58rem] text-dim/60">{doneClues}/{totalClues}</span>
        </div>
        <div className="h-1 bg-white/6 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${(doneClues / totalClues) * 100}%`, background: caso.color }}
          />
        </div>
      </div>

      {/* Main grid */}
      <div className="px-6 md:px-14 pb-16 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8">

        {/* Left: investigation tabs */}
        <div>
          {/* Tabs */}
          <div className="flex gap-1 mb-6 border-b border-white/6">
            {(['escena', 'testigos', 'sospechosos', 'pruebas'] as Tab[]).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2.5 text-[.65rem] font-semibold tracking-[.1em] uppercase transition-all border-b-2 -mb-px ${
                  tab === t
                    ? 'border-current text-current'
                    : 'border-transparent text-dim hover:text-cream'
                }`}
                style={tab === t ? accentStyle : {}}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          {/* Clues panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: .2 }}
              className="space-y-3"
            >
              {tab === 'sospechosos' ? (
                <div className="space-y-4">
                  {caso.suspects.map(s => (
                    <motion.div
                      key={s.name}
                      whileHover={{ scale: 1.01 }}
                      onClick={() => setSelected(s.name)}
                      className={`p-5 rounded-sm border cursor-pointer transition-all ${
                        selected === s.name
                          ? 'border-current shadow-lg'
                          : 'border-white/8 hover:border-white/16'
                      }`}
                      style={selected === s.name ? { ...accentStyle, ...borderAccent, background: `${caso.color}08` } : {}}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-semibold text-cream mb-0.5">{s.name}</p>
                          <p className="text-[.7rem] text-dim mb-3">{s.role}</p>
                          {s.motive && (
                            <p className="text-[.72rem] text-cream/60">
                              <span className="text-dim uppercase text-[.58rem] tracking-wide mr-1.5">Móvil:</span>
                              {s.motive}
                            </p>
                          )}
                          {s.alibi && (
                            <p className="text-[.72rem] text-cream/60 mt-1">
                              <span className="text-dim uppercase text-[.58rem] tracking-wide mr-1.5">Coartada:</span>
                              {s.alibi}
                            </p>
                          )}
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex-none mt-1 transition-all ${
                          selected === s.name ? 'scale-110' : ''
                        }`}
                             style={selected === s.name ? { borderColor: caso.color, background: `${caso.color}30` } : { borderColor: 'rgba(255,255,255,.15)' }} />
                      </div>
                    </motion.div>
                  ))}

                  <button
                    onClick={accuse}
                    disabled={!selected}
                    className="w-full py-3 rounded-sm font-semibold text-sm tracking-wide text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed mt-2"
                    style={{ background: selected ? caso.color : 'rgba(255,255,255,.08)' }}
                  >
                    Acusar a {selected ?? '…'}
                  </button>
                </div>
              ) : cluesForTab.length === 0 ? (
                <p className="text-dim text-sm py-8 text-center">No hay pistas en esta categoría.</p>
              ) : (
                cluesForTab.map((c, i) => (
                  <motion.div
                    key={c.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * .06 }}
                    onClick={() => revealClue(c)}
                    className={`group p-4 rounded-sm border cursor-pointer transition-all ${
                      revealed[c.id]
                        ? 'border-white/10 bg-white/[.015]'
                        : 'border-white/6 hover:border-white/14 bg-white/[.01] hover:bg-white/[.02]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 w-2 h-2 rounded-full flex-none transition-all ${
                        revealed[c.id] ? 'scale-110' : 'opacity-40'
                      }`}
                           style={{ background: revealed[c.id] ? caso.color : '#fff',
                                    boxShadow: revealed[c.id] ? `0 0 8px ${caso.color}` : 'none' }} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm font-semibold text-cream">{c.title}</p>
                          {!revealed[c.id] && (
                            <span className="text-[.58rem] tracking-wide text-dim/60 uppercase">
                              +{c.points} pts
                            </span>
                          )}
                        </div>
                        <AnimatePresence>
                          {revealed[c.id] && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="text-[.8rem] text-cream/60 leading-relaxed"
                            >
                              {c.body}
                            </motion.p>
                          )}
                        </AnimatePresence>
                        {!revealed[c.id] && (
                          <p className="text-[.68rem] text-dim/50">Haz clic para revelar la pista</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right sidebar: timeline + related */}
        <aside className="space-y-10">
          {/* Timeline */}
          <div>
            <p className="text-[.58rem] font-bold tracking-[.22em] uppercase text-dim mb-5">
              Cronología
            </p>
            <Timeline events={caso.timeline} color={caso.color} />
          </div>

          {/* Related cases */}
          {caso.related.length > 0 && (
            <div>
              <p className="text-[.58rem] font-bold tracking-[.22em] uppercase text-dim mb-4">
                Casos relacionados
              </p>
              <div className="space-y-2">
                {caso.related.map(id => {
                  const r = getCaseById(id)
                  if (!r) return null
                  return (
                    <Link
                      key={id}
                      href={`/caso/${r.slug}`}
                      className="flex items-center gap-3 p-3 rounded-sm border border-white/6 hover:border-white/14 transition-colors group"
                    >
                      <div className="w-1 h-8 rounded-full flex-none"
                           style={{ background: r.color }} />
                      <div>
                        <p className="text-xs font-semibold text-cream group-hover:text-white transition-colors">
                          {r.title}
                        </p>
                        <p className="text-[.6rem] text-dim">{r.location} · {r.year}</p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
