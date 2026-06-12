'use client'

import { useAtom } from 'jotai'
import { langAtom } from '@/lib/store'
import type { Lang } from '@/lib/i18n'

const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: 'es', label: 'Anabel tu Bandera', flag: '🇪🇸' },
  { code: 'ca', label: 'Català',            flag: '🏴󠁥󠁳󠁣󠁴󠁿' },
  { code: 'en', label: 'English',           flag: '🇬🇧' },
]

export default function LangPicker() {
  const [lang, setLang] = useAtom(langAtom)

  return (
    <div className="flex items-center gap-1">
      {LANGS.map((l, i) => (
        <>
          {i > 0 && <span key={`sep-${i}`} className="text-dim/40 text-[.5rem]">·</span>}
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`flex items-center gap-1 px-2 py-1 rounded-sm text-[.6rem] tracking-wide font-semibold transition-all ${
              lang === l.code
                ? 'text-gold-DEFAULT bg-gold-DEFAULT/8 border border-gold-DEFAULT/25'
                : 'text-dim hover:text-cream opacity-55 hover:opacity-85 border border-transparent'
            }`}
            title={l.label}
          >
            <span>{l.flag}</span> {l.code.toUpperCase()}
          </button>
        </>
      ))}
    </div>
  )
}
