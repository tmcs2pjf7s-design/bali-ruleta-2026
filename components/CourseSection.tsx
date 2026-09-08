'use client'

import { motion } from 'framer-motion'
import type { Lang } from '@/lib/i18n'
import { tr } from '@/lib/i18n'
import type { Course } from '@/data/menu'
import WineCard from './WineCard'

const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI']

export default function CourseSection({ course, lang }: { course: Course; lang: Lang }) {
  return (
    <section
      id={`plato-${course.n}`}
      className="relative border-t border-border/60 px-6 py-20 md:px-14 md:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:gap-10">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[5rem] leading-none text-gold/25 md:text-[7rem]"
            aria-hidden
          >
            {ROMAN[course.n]}
          </motion.span>

          <div className="flex-1">
            <p className="mb-2 text-[.6rem] font-bold uppercase tracking-[.32em] text-wine-light">
              {tr(lang, 'act')} {course.n} / 6
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              className="font-serif text-4xl leading-none text-bone md:text-5xl"
            >
              {course.name[lang]}
            </motion.h2>
            <p className="mt-3 text-sm italic text-gold/70">{course.kicker[lang]}</p>
          </div>
        </div>

        {/* Body */}
        <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-14">
          <div>
            <p className="text-[.98rem] leading-relaxed text-cream/80">
              {course.description[lang]}
            </p>
            <p className="mt-6 text-[.72rem] uppercase tracking-[.16em] text-dim">
              {course.ingredients[lang]}
            </p>
          </div>

          <div>
            <p className="mb-4 flex items-center gap-3 text-[.6rem] font-bold uppercase tracking-[.28em] text-dim">
              <span className="h-px w-6 bg-gold/50" />
              {tr(lang, 'pairing')}
            </p>
            <div className="grid gap-4">
              {course.wines.map(w => (
                <WineCard key={w.glass} wine={w} lang={lang} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
