'use client'

import { useAtomValue } from 'jotai'
import { motion, MotionConfig } from 'framer-motion'
import { langAtom } from '@/lib/store'
import { tr } from '@/lib/i18n'
import { EXPERIENCE, PILLARS, COURSES, CELLAR, WINE_TYPE_LABEL } from '@/data/menu'
import LangToggle from './LangToggle'
import CourseSection from './CourseSection'

export default function MenuClient() {
  const lang = useAtomValue(langAtom)

  const stats = [
    { value: '6',  label: tr(lang, 'courses') },
    { value: '12', label: tr(lang, 'wines') },
    { value: String(EXPERIENCE.durationHours), label: tr(lang, 'hours') },
    { value: String(EXPERIENCE.seatsPerService), label: tr(lang, 'seats') },
  ]

  return (
    <MotionConfig reducedMotion="user">
      {/* ── Nav ── */}
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-gradient-to-b from-obsidian via-obsidian/80 to-transparent px-6 py-4 md:px-10">
        <a href="#top" className="font-serif text-xl font-black tracking-[.05em] text-bone">
          {EXPERIENCE.name}
        </a>
        <div className="flex items-center gap-5">
          <div className="hidden items-center gap-6 text-[.62rem] font-semibold uppercase tracking-[.18em] text-dim/80 md:flex">
            <a href="#experiencia" className="transition-colors hover:text-cream">{tr(lang, 'nav_experience')}</a>
            <a href="#menu" className="transition-colors hover:text-cream">{tr(lang, 'nav_menu')}</a>
            <a href="#bodega" className="transition-colors hover:text-cream">{tr(lang, 'nav_cellar')}</a>
          </div>
          <LangToggle />
          <a
            href="#reservar"
            className="rounded-sm border border-gold/40 px-3 py-1.5 text-[.62rem] font-bold uppercase tracking-[.16em] text-gold transition-colors hover:bg-gold hover:text-obsidian"
          >
            {tr(lang, 'nav_reserve')}
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header
        id="top"
        className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-6 pb-24 pt-32 md:px-14"
      >
        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 flex items-center gap-3 text-[.6rem] font-bold uppercase tracking-[.34em] text-wine-light"
          >
            <span className="inline-block h-px w-10 bg-wine-light/60" />
            6 {tr(lang, 'courses')} · 12 {tr(lang, 'wines')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-black leading-[0.92] text-bone"
            style={{ fontSize: 'clamp(3.2rem, 12vw, 9rem)' }}
          >
            {EXPERIENCE.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-5 font-serif text-xl italic text-gold/80 md:text-2xl"
          >
            {EXPERIENCE.tagline[lang]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.62 }}
            className="mt-8 max-w-2xl text-[.95rem] leading-relaxed text-cream/70"
          >
            {EXPERIENCE.intro[lang]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.78 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#reservar"
              className="inline-flex items-center gap-2 rounded-sm bg-wine px-6 py-3 text-sm font-bold uppercase tracking-[.14em] text-bone shadow-glow transition-all hover:gap-3 hover:bg-wine-light"
            >
              {tr(lang, 'reserve')} →
            </a>
            <a
              href="#menu"
              className="text-[.72rem] font-semibold uppercase tracking-[.2em] text-dim transition-colors hover:text-cream"
            >
              {tr(lang, 'nav_menu')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-4"
          >
            {stats.map(s => (
              <div key={s.label}>
                <div className="font-serif text-3xl font-bold text-bone">{s.value}</div>
                <div className="mt-1 text-[.56rem] uppercase tracking-[.2em] text-dim">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="h-8 w-px animate-pulse bg-gradient-to-b from-gold/40 to-transparent" />
          <span className="text-[.5rem] uppercase tracking-[.3em] text-dim/50">{tr(lang, 'scroll')}</span>
        </div>
      </header>

      {/* ── The experience ── */}
      <section id="experiencia" className="border-t border-border px-6 py-24 md:px-14 md:py-32 scroll-mt-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-12 flex items-center gap-3 text-[.6rem] font-bold uppercase tracking-[.3em] text-dim">
            <span className="h-px w-8 bg-gold/50" />
            {tr(lang, 'nav_experience')}
          </p>
          <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
              >
                <span className="font-serif text-2xl text-gold/40">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 font-serif text-2xl text-bone">{p.title[lang]}</h3>
                <p className="mt-3 text-[.9rem] leading-relaxed text-cream/70">{p.body[lang]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The menu — 6 courses ── */}
      <div id="menu" className="scroll-mt-16">
        <div className="px-6 pt-24 md:px-14">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-serif text-3xl font-black text-bone md:text-4xl">{tr(lang, 'nav_menu')}</h2>
            <p className="mt-3 text-sm text-dim">
              6 {tr(lang, 'courses')} · 12 {tr(lang, 'wines')} · {EXPERIENCE.priceEUR} € {tr(lang, 'perPerson')}
            </p>
          </div>
        </div>
        {COURSES.map(c => (
          <CourseSection key={c.n} course={c} lang={lang} />
        ))}
      </div>

      {/* ── The cellar ── */}
      <section id="bodega" className="border-t border-border px-6 py-24 md:px-14 md:py-32 scroll-mt-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 flex items-center gap-3 text-[.6rem] font-bold uppercase tracking-[.3em] text-dim">
            <span className="h-px w-8 bg-gold/50" />
            {tr(lang, 'theCellar')}
          </p>
          <h2 className="max-w-2xl font-serif text-3xl leading-tight text-bone md:text-4xl">
            {tr(lang, 'cellarIntro')}
          </h2>

          <ol className="mt-12 divide-y divide-border border-y border-border">
            {CELLAR.map(w => (
              <li
                key={w.glass}
                className="grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 py-4 md:grid-cols-[3rem_1.4fr_1fr_auto] md:gap-x-8"
              >
                <span className="font-serif text-sm text-gold/50">
                  {String(w.glass).padStart(2, '0')}
                </span>
                <span className="text-[.95rem] text-bone">
                  {w.name}
                  <span className="text-dim"> · {w.producer}</span>
                </span>
                <span className="col-start-2 text-[.8rem] text-cream/60 md:col-start-3">
                  {w.region[lang]}
                </span>
                <span className="col-start-2 text-[.62rem] uppercase tracking-[.16em] text-dim md:col-start-4 md:text-right">
                  {WINE_TYPE_LABEL[w.type][lang]} · {w.year}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Reserve ── */}
      <section id="reservar" className="relative border-t border-border px-6 py-28 md:px-14 md:py-36 scroll-mt-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-[.6rem] font-bold uppercase tracking-[.3em] text-wine-light">
            {tr(lang, 'nav_reserve')}
          </p>
          <h2 className="font-serif text-4xl font-black text-bone md:text-6xl">
            {tr(lang, 'reserveTitle')}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[.95rem] leading-relaxed text-cream/70">
            {tr(lang, 'reserveBody')}
          </p>

          <div className="mt-10 flex flex-col items-center gap-2">
            <span className="font-serif text-5xl font-bold text-gold">{EXPERIENCE.priceEUR} €</span>
            <span className="text-[.62rem] uppercase tracking-[.2em] text-dim">
              {tr(lang, 'perPerson')} · {EXPERIENCE.seatsPerService} {tr(lang, 'seatsPerService')}
            </span>
          </div>

          <a
            href={`mailto:${EXPERIENCE.email}?subject=${encodeURIComponent(
              lang === 'es' ? 'Reserva — SOBREMESA' : 'Reservation — SOBREMESA',
            )}`}
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-wine px-8 py-4 text-sm font-bold uppercase tracking-[.14em] text-bone shadow-glow transition-all hover:gap-3 hover:bg-wine-light"
          >
            {tr(lang, 'reserveCta')} →
          </a>

          <dl className="mx-auto mt-14 grid max-w-xl gap-6 text-left sm:grid-cols-2">
            <div>
              <dt className="text-[.58rem] font-bold uppercase tracking-[.2em] text-dim">{tr(lang, 'date')}</dt>
              <dd className="mt-1.5 text-[.88rem] text-cream/75">{EXPERIENCE.dates[lang]}</dd>
            </div>
            <div>
              <dt className="text-[.58rem] font-bold uppercase tracking-[.2em] text-dim">{tr(lang, 'location')}</dt>
              <dd className="mt-1.5 text-[.88rem] text-cream/75">{EXPERIENCE.location[lang]}</dd>
            </div>
          </dl>

          <p className="mt-10 text-[.72rem] text-dim/70">{tr(lang, 'dietary')}</p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border px-6 py-12 text-center md:px-14">
        <p className="font-serif text-2xl font-black text-bone/20">{EXPERIENCE.name}</p>
        <p className="mt-3 text-[.62rem] tracking-wide text-dim/50">
          © {new Date().getFullYear()} {EXPERIENCE.name} · {tr(lang, 'rights')}
        </p>
      </footer>
    </MotionConfig>
  )
}
