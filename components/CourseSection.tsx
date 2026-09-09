import type { Lang } from '@/lib/i18n'
import { tr } from '@/lib/i18n'
import type { Course } from '@/data/menu'
import { accentFor } from '@/lib/accents'
import WineCard from './WineCard'

export default function CourseSection({ course, lang }: { course: Course; lang: Lang }) {
  const accent = accentFor(course.n)

  return (
    <section
      id={`plato-${course.n}`}
      className="scroll-mt-24 border-t border-line px-6 py-16 md:px-14 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex items-start gap-5 md:gap-8">
          <span
            className="reveal font-serif text-5xl leading-none md:text-7xl"
            style={{ color: accent }}
            aria-hidden
          >
            {String(course.n).padStart(2, '0')}
          </span>

          <div className="flex-1 pt-1">
            <p
              className="reveal mb-1.5 text-[.62rem] font-bold uppercase tracking-[.28em]"
              style={{ color: accent }}
            >
              {tr(lang, 'act')} {course.n} / 6
            </p>
            <h2
              className="reveal font-serif text-3xl leading-tight text-ink md:text-[2.75rem]"
              style={{ animationDelay: '.05s' }}
            >
              {course.name[lang]}
            </h2>
            <p className="reveal mt-2 text-sm italic text-muted" style={{ animationDelay: '.1s' }}>
              {course.kicker[lang]}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="mt-8 grid gap-8 md:grid-cols-[1.05fr_1fr] md:gap-14">
          <div>
            <p className="text-[.98rem] leading-relaxed text-ink/80">
              {course.description[lang]}
            </p>
            <p className="mt-5 text-[.72rem] uppercase tracking-[.14em] text-muted">
              {course.ingredients[lang]}
            </p>
          </div>

          <div>
            <p className="mb-4 flex items-center gap-3 text-[.6rem] font-bold uppercase tracking-[.24em] text-muted">
              <span className="h-px w-6" style={{ background: accent }} />
              {tr(lang, 'pairing')}
            </p>
            <div className="grid gap-4">
              {course.wines.map(w => (
                <WineCard key={w.glass} wine={w} lang={lang} accent={accent} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
