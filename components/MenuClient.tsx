'use client'

import { useAtomValue } from 'jotai'
import { langAtom } from '@/lib/store'
import { tr } from '@/lib/i18n'
import { EXPERIENCE, PILLARS, COURSES, CELLAR, WINE_TYPE_LABEL } from '@/data/menu'
import { accentFor, COURSE_ACCENT } from '@/lib/accents'
import LangToggle from './LangToggle'
import CourseSection from './CourseSection'

export default function MenuClient() {
  const lang = useAtomValue(langAtom)

  const stats = [
    { value: '6', label: tr(lang, 'courses') },
    { value: '12', label: tr(lang, 'wines') },
    { value: String(EXPERIENCE.durationHours), label: tr(lang, 'hours') },
    { value: String(EXPERIENCE.seatsPerService), label: tr(lang, 'seats') },
  ]

  return (
    <>
      {/* ── Nav ── */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 md:px-10">
          <a href="#top" className="font-serif text-lg font-bold tracking-[.04em] text-ink">
            {EXPERIENCE.name}
          </a>
          <div className="flex items-center gap-5">
            <div className="hidden items-center gap-6 text-[.66rem] font-semibold uppercase tracking-[.16em] text-muted md:flex">
              <a href="#experiencia" className="transition-colors hover:text-ink">{tr(lang, 'nav_experience')}</a>
              <a href="#menu" className="transition-colors hover:text-ink">{tr(lang, 'nav_menu')}</a>
              <a href="#bodega" className="transition-colors hover:text-ink">{tr(lang, 'nav_cellar')}</a>
            </div>
            <LangToggle />
            <a
              href="#reservar"
              className="rounded-full bg-wine px-4 py-1.5 text-[.66rem] font-bold uppercase tracking-[.12em] text-paper transition-colors hover:bg-wine-dark"
            >
              {tr(lang, 'nav_reserve')}
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header id="top" className="mx-auto flex min-h-[80dvh] max-w-6xl flex-col justify-center px-6 pb-20 pt-36 md:px-10">
        <p
          className="reveal mb-6 flex items-center gap-3 text-[.62rem] font-bold uppercase tracking-[.3em] text-wine"
          style={{ animationDelay: '.05s' }}
        >
          <span className="inline-block h-px w-10 bg-wine" />
          6 {tr(lang, 'courses')} · 12 {tr(lang, 'wines')}
        </p>

        <h1
          className="reveal font-serif font-bold leading-[0.95] text-ink"
          style={{ fontSize: 'clamp(3rem, 11vw, 8.5rem)', animationDelay: '.12s' }}
        >
          {EXPERIENCE.name}
        </h1>

        <p
          className="reveal mt-4 font-serif text-xl italic text-muted md:text-2xl"
          style={{ animationDelay: '.2s' }}
        >
          {EXPERIENCE.tagline[lang]}
        </p>

        {/* colour spectrum of the six acts */}
        <div
          className="reveal mt-7 flex h-1.5 w-full max-w-md overflow-hidden rounded-full"
          style={{ animationDelay: '.28s' }}
        >
          {COURSES.map(c => (
            <span key={c.n} className="flex-1" style={{ background: accentFor(c.n) }} />
          ))}
        </div>

        <p
          className="reveal mt-7 max-w-2xl text-[.98rem] leading-relaxed text-ink/75"
          style={{ animationDelay: '.34s' }}
        >
          {EXPERIENCE.intro[lang]}
        </p>

        <div
          className="reveal mt-9 flex flex-wrap items-center gap-5"
          style={{ animationDelay: '.42s' }}
        >
          <a
            href="#reservar"
            className="inline-flex items-center gap-2 rounded-full bg-wine px-6 py-3 text-sm font-bold uppercase tracking-[.12em] text-paper transition-all hover:gap-3 hover:bg-wine-dark"
          >
            {tr(lang, 'reserve')} →
          </a>
          <a
            href="#menu"
            className="text-[.74rem] font-semibold uppercase tracking-[.16em] text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            {tr(lang, 'nav_menu')}
          </a>
        </div>

        <div
          className="reveal mt-14 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-7 sm:grid-cols-4"
          style={{ animationDelay: '.5s' }}
        >
          {stats.map(s => (
            <div key={s.label}>
              <div className="font-serif text-3xl font-bold text-ink">{s.value}</div>
              <div className="mt-1 text-[.58rem] uppercase tracking-[.18em] text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </header>

      {/* ── The experience ── */}
      <section id="experiencia" className="scroll-mt-20 border-t border-line bg-paper2/60 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-12 flex items-center gap-3 text-[.62rem] font-bold uppercase tracking-[.26em] text-wine">
            <span className="h-px w-8 bg-wine" />
            {tr(lang, 'nav_experience')}
          </p>
          <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <div className="reveal" key={i} style={{ animationDelay: `${i * 0.06}s` }}>
                <span
                  className="font-serif text-2xl font-bold"
                  style={{ color: COURSE_ACCENT[(i % 6) + 1] }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-serif text-2xl text-ink">{p.title[lang]}</h3>
                <p className="mt-2.5 text-[.92rem] leading-relaxed text-ink/70">{p.body[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The menu — 6 courses ── */}
      <div id="menu" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 pt-20 md:px-10 md:pt-28">
          <h2 className="font-serif text-3xl font-bold text-ink md:text-4xl">{tr(lang, 'nav_menu')}</h2>
          <p className="mt-3 text-sm text-muted">
            6 {tr(lang, 'courses')} · 12 {tr(lang, 'wines')} · {EXPERIENCE.priceEUR} € {tr(lang, 'perPerson')}
          </p>
        </div>
        <div className="mt-10">
          {COURSES.map(c => (
            <CourseSection key={c.n} course={c} lang={lang} />
          ))}
        </div>
      </div>

      {/* ── The cellar ── */}
      <section id="bodega" className="scroll-mt-20 border-t border-line bg-paper2/60 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 flex items-center gap-3 text-[.62rem] font-bold uppercase tracking-[.26em] text-wine">
            <span className="h-px w-8 bg-wine" />
            {tr(lang, 'theCellar')}
          </p>
          <h2 className="max-w-2xl font-serif text-3xl leading-tight text-ink md:text-4xl">
            {tr(lang, 'cellarIntro')}
          </h2>

          <ol className="mt-10 border-t border-line">
            {CELLAR.map(w => (
              <li
                key={w.glass}
                className="grid grid-cols-[2.25rem_1fr] items-baseline gap-x-4 border-b border-line py-3.5 md:grid-cols-[2.5rem_1.5fr_1fr_auto] md:gap-x-8"
              >
                <span
                  className="font-serif text-sm font-semibold"
                  style={{ color: accentFor(Math.ceil(w.glass / 2)) }}
                >
                  {String(w.glass).padStart(2, '0')}
                </span>
                <span className="text-[.95rem] text-ink">
                  {w.name}
                  <span className="text-muted"> · {w.producer}</span>
                </span>
                <span className="col-start-2 text-[.82rem] text-ink/60 md:col-start-3">
                  {w.region[lang]}
                </span>
                <span className="col-start-2 text-[.64rem] uppercase tracking-[.12em] text-muted md:col-start-4 md:text-right">
                  {WINE_TYPE_LABEL[w.type][lang]} · {w.year}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Reserve ── */}
      <section id="reservar" className="scroll-mt-20 border-t border-line px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-[.62rem] font-bold uppercase tracking-[.26em] text-wine">
            {tr(lang, 'nav_reserve')}
          </p>
          <h2 className="font-serif text-4xl font-bold text-ink md:text-6xl">
            {tr(lang, 'reserveTitle')}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[.98rem] leading-relaxed text-ink/75">
            {tr(lang, 'reserveBody')}
          </p>

          <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-1 rounded-2xl border border-line bg-paper2/70 px-8 py-7">
            <span className="font-serif text-5xl font-bold text-wine">{EXPERIENCE.priceEUR} €</span>
            <span className="text-[.64rem] uppercase tracking-[.16em] text-muted">
              {tr(lang, 'perPerson')} · {EXPERIENCE.seatsPerService} {tr(lang, 'seatsPerService')}
            </span>
          </div>

          <a
            href={`mailto:${EXPERIENCE.email}?subject=${encodeURIComponent(
              lang === 'es' ? 'Reserva — SOBREMESA' : 'Reservation — SOBREMESA',
            )}`}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-wine px-8 py-4 text-sm font-bold uppercase tracking-[.12em] text-paper transition-all hover:gap-3 hover:bg-wine-dark"
          >
            {tr(lang, 'reserveCta')} →
          </a>

          <dl className="mx-auto mt-14 grid max-w-xl gap-6 text-left sm:grid-cols-2">
            <div>
              <dt className="text-[.6rem] font-bold uppercase tracking-[.16em] text-wine">{tr(lang, 'date')}</dt>
              <dd className="mt-1.5 text-[.9rem] text-ink/75">{EXPERIENCE.dates[lang]}</dd>
            </div>
            <div>
              <dt className="text-[.6rem] font-bold uppercase tracking-[.16em] text-wine">{tr(lang, 'location')}</dt>
              <dd className="mt-1.5 text-[.9rem] text-ink/75">{EXPERIENCE.location[lang]}</dd>
            </div>
          </dl>

          <p className="mt-10 text-[.74rem] text-muted">{tr(lang, 'dietary')}</p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-line px-6 py-10 text-center md:px-10">
        <div className="mx-auto flex max-w-xs justify-center gap-1.5">
          {COURSES.map(c => (
            <span key={c.n} className="h-1 w-6 rounded-full" style={{ background: accentFor(c.n) }} />
          ))}
        </div>
        <p className="mt-5 font-serif text-xl font-bold text-ink">{EXPERIENCE.name}</p>
        <p className="mt-2 text-[.64rem] tracking-wide text-muted">
          © {new Date().getFullYear()} {EXPERIENCE.name} · {tr(lang, 'rights')}
        </p>
      </footer>
    </>
  )
}
