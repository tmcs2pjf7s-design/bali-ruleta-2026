import type { Lang } from '@/lib/i18n'
import { tr } from '@/lib/i18n'
import { WINE_TYPE_LABEL, type Wine } from '@/data/menu'

export default function WineCard({
  wine,
  lang,
  accent,
}: {
  wine: Wine
  lang: Lang
  accent: string
}) {
  return (
    <article className="reveal rounded-lg border border-line bg-white/60 p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-serif text-sm font-semibold" style={{ color: accent }}>
          {tr(lang, 'glass')} {String(wine.glass).padStart(2, '0')}
        </span>
        <span className="rounded-full border border-line px-2 py-0.5 text-[.58rem] font-semibold uppercase tracking-[.14em] text-muted">
          {WINE_TYPE_LABEL[wine.type][lang]}
        </span>
      </div>

      <h4 className="font-serif text-xl leading-tight text-ink">{wine.name}</h4>
      <p className="mt-0.5 text-[.82rem] font-medium text-muted">{wine.producer}</p>

      <p className="mt-3 text-[.82rem] leading-relaxed text-ink/75">{wine.notes[lang]}</p>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 border-t border-line pt-3 text-[.68rem] uppercase tracking-[.1em] text-muted">
        <span>{wine.grape}</span>
        <span aria-hidden>·</span>
        <span>{wine.year}</span>
        <span className="basis-full text-ink/55">{wine.region[lang]}</span>
      </div>
    </article>
  )
}
