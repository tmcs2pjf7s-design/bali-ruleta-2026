import Reveal from '@/components/Reveal'
import VideoFilm from '@/components/VideoFilm'
import { VIDEO, t, type Lang } from '@/data/experience'

export default function Film({ lang }: { lang: Lang }) {
  return (
    <section id="film" className="scroll-mt-24 border-t border-line bg-black px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <VideoFilm lang={lang} />
        </Reveal>
        <Reveal delay={80} className="mt-5 flex items-center justify-between text-[0.6rem] uppercase tracking-widest2 text-mist">
          <span>{t(VIDEO.caption, lang)}</span>
          <span>{t(VIDEO.label, lang)}</span>
        </Reveal>
      </div>
    </section>
  )
}
