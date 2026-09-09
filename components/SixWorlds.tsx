import type { Lang } from '@/data/experience'
import Nav from '@/components/Nav'
import StickyReserve from '@/components/StickyReserve'
import Hero from '@/components/sections/Hero'
import Intro from '@/components/sections/Intro'
import Worlds from '@/components/sections/Worlds'
import Film from '@/components/sections/Film'
import Dishes from '@/components/sections/Dishes'
import Wines from '@/components/sections/Wines'
import Guests from '@/components/sections/Guests'
import TheNight from '@/components/sections/TheNight'
import TheTable from '@/components/sections/TheTable'
import Reservation from '@/components/sections/Reservation'
import Location from '@/components/sections/Location'
import Footer from '@/components/sections/Footer'

export default function SixWorlds({ lang }: { lang: Lang }) {
  return (
    <>
      <Nav lang={lang} />
      <main>
        <Hero lang={lang} />
        <Intro lang={lang} />
        <Worlds lang={lang} />
        <Film lang={lang} />
        <Dishes lang={lang} />
        <Wines lang={lang} />
        <Guests lang={lang} />
        <TheNight lang={lang} />
        <TheTable lang={lang} />
        <Reservation lang={lang} />
        <Location lang={lang} />
      </main>
      <Footer lang={lang} />
      <StickyReserve lang={lang} />
    </>
  )
}
