import Image from 'next/image'
import Parallax from './Parallax'

interface Props {
  image: string | null
  roman: string
  place: string
  /** aspect ratio utility, e.g. 'aspect-[4/5]' */
  ratio?: string
  className?: string
  priority?: boolean
  parallax?: boolean
  /** light per-world identity: { media, accent } */
  tone?: { media: string; accent: string }
}

/**
 * Art-directed media slot. Shows a real photograph when one is provided,
 * otherwise a luminous stone placeholder tinted to the world.
 */
export default function WorldMedia({
  image,
  roman,
  place,
  ratio = 'aspect-[4/5]',
  className = '',
  priority = false,
  parallax = false,
  tone,
}: Props) {
  const media = tone?.media ?? '#ddd3bf'
  const accent = tone?.accent ?? '#8c8474'

  const inner = image ? (
    <Image
      src={image}
      alt={place}
      fill
      priority={priority}
      loading={priority ? undefined : 'lazy'}
      sizes="(max-width: 768px) 100vw, 55vw"
      className="object-cover"
    />
  ) : (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        background: `linear-gradient(150deg, #ffffff 0%, ${media} 55%, ${media} 100%)`,
      }}
    >
      <span
        className="absolute bottom-3 left-5 font-display text-[7rem] leading-none md:text-[10rem]"
        style={{ color: accent, opacity: 0.14 }}
      >
        {roman}
      </span>
      <span
        className="absolute right-5 top-5 text-[0.58rem] uppercase tracking-widest2"
        style={{ color: accent, opacity: 0.6 }}
      >
        {place}
      </span>
    </div>
  )

  return (
    <div className={`relative overflow-hidden ${ratio} ${className}`} style={{ background: media }}>
      {parallax ? (
        <Parallax strength={16} className="absolute inset-0">
          <div className="relative h-[112%] w-full -translate-y-[6%]">{inner}</div>
        </Parallax>
      ) : (
        inner
      )}
      {/* hairline frame */}
      <span className="pointer-events-none absolute inset-0 border border-ink/[0.08]" />
    </div>
  )
}
