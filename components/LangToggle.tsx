'use client'

import { useAtom } from 'jotai'
import { langAtom } from '@/lib/store'
import type { Lang } from '@/lib/i18n'

const LANGS: Lang[] = ['es', 'en']

export default function LangToggle() {
  const [lang, setLang] = useAtom(langAtom)

  return (
    <div className="flex items-center gap-1 text-[.62rem] font-semibold tracking-[.18em]">
      {LANGS.map((code, i) => (
        <span key={code} className="flex items-center gap-1">
          {i > 0 && <span className="text-dim/40">/</span>}
          <button
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={`uppercase transition-colors ${
              lang === code ? 'text-gold' : 'text-dim/60 hover:text-cream'
            }`}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  )
}
