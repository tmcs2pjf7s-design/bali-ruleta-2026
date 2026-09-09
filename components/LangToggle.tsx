'use client'

import { useAtom } from 'jotai'
import { langAtom } from '@/lib/store'
import type { Lang } from '@/lib/i18n'

const LANGS: Lang[] = ['es', 'en']

export default function LangToggle() {
  const [lang, setLang] = useAtom(langAtom)

  return (
    <div className="flex items-center gap-1.5 text-[.68rem] font-semibold tracking-[.12em]">
      {LANGS.map((code, i) => (
        <span key={code} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-line">|</span>}
          <button
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={`uppercase transition-colors ${
              lang === code ? 'text-wine' : 'text-muted hover:text-ink'
            }`}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  )
}
