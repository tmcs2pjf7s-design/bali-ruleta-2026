import Nav from '@/components/Nav'
import StickyReserve from '@/components/StickyReserve'
import Hero from '@/components/sections/Hero'
import Concept from '@/components/sections/Concept'
import Worlds from '@/components/sections/Worlds'
import Dishes from '@/components/sections/Dishes'
import Wines from '@/components/sections/Wines'
import Guests from '@/components/sections/Guests'
import TheNight from '@/components/sections/TheNight'
import TheTable from '@/components/sections/TheTable'
import Reservation from '@/components/sections/Reservation'
import Location from '@/components/sections/Location'
import Footer from '@/components/sections/Footer'

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Concept />
        <Worlds />
        <Dishes />
        <Wines />
        <Guests />
        <TheNight />
        <TheTable />
        <Reservation />
        <Location />
      </main>
      <Footer />
      <StickyReserve />
    </>
  )
}
