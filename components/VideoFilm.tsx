'use client'

import { useRef, useState } from 'react'
import { VIDEO, t, type Lang } from '@/data/experience'

/**
 * The cinematic film. Never autoplays with sound.
 * With no source yet, renders a luminous placeholder marked for the real file.
 */
export default function VideoFilm({ lang }: { lang: Lang }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const Glyph = () => (
    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-ink/40">
      <span className="ml-1 border-y-[7px] border-l-[11px] border-y-transparent border-l-ink" />
    </span>
  )

  if (!VIDEO.src) {
    return (
      <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #ffffff 0%, #efe7d8 55%, #e4dbc8 100%)',
          }}
        />
        <div className="relative flex flex-col items-center gap-4 text-center">
          <Glyph />
          <span className="text-[0.6rem] uppercase tracking-widest2 text-warmgrey">
            {t(VIDEO.filmWord, lang)} · {t(VIDEO.runtime, lang)}
          </span>
        </div>
        <span className="pointer-events-none absolute inset-0 border border-ink/[0.08]" />
      </div>
    )
  }

  const toggle = () => {
    const v = ref.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  return (
    <div className="relative aspect-[16/9] overflow-hidden bg-limestone">
      <video
        ref={ref}
        className="h-full w-full object-cover"
        src={VIDEO.src}
        poster={VIDEO.poster ?? undefined}
        muted
        playsInline
        loop
        preload="none"
        controls={playing}
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <button
          type="button"
          onClick={toggle}
          aria-label={lang === 'es' ? 'Reproducir película' : 'Play film'}
          className="absolute inset-0 flex items-center justify-center bg-paper/20 transition-colors hover:bg-paper/10"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-ink/50 bg-paper/70">
            <span className="ml-1 border-y-[7px] border-l-[11px] border-y-transparent border-l-ink" />
          </span>
        </button>
      )}
      <span className="pointer-events-none absolute inset-0 border border-ink/[0.08]" />
    </div>
  )
}
