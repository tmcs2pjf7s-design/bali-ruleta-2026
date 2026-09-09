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
  /** apply a very light vertical parallax to the media */
  parallax?: boolean
}

/**
 * Art-directed media slot. Shows a real photograph when one is provided,
 * otherwise a dark charcoal placeholder with the act numeral as a watermark.
 */
export default function WorldMedia({
  image,
  roman,
  place,
  ratio = 'aspect-[4/5]',
  className = '',
  priority = false,
  parallax = false,
}: Props) {
  const inner = image ? (
    <Image
      src={image}
      alt={place}
      fill
      priority={priority}
      loading={priority ? undefined : 'lazy'}
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
    />
  ) : (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(120% 90% at 30% 15%, #23201b 0%, #14120f 55%, #0c0b09 100%)',
      }}
    >
      <span className="absolute bottom-4 left-5 font-display text-[7rem] leading-none text-white/[0.08] md:text-[10rem]">
        {roman}
      </span>
      <span className="absolute right-5 top-5 text-[0.6rem] uppercase tracking-widest2 text-white/20">
        {place}
      </span>
    </div>
  )

  return (
    <div className={`relative overflow-hidden bg-char ${ratio} ${className}`}>
      {parallax ? (
        <Parallax strength={18} className="absolute inset-0">
          <div className="relative h-[112%] w-full -translate-y-[6%]">{inner}</div>
        </Parallax>
      ) : (
        inner
      )}
      {/* fine inner frame */}
      <span className="pointer-events-none absolute inset-0 border border-white/[0.06]" />
      {/* bottom fade so overlaid text stays legible */}
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
    </div>
  )
}
