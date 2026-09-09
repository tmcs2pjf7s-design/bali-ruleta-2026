/**
 * ────────────────────────────────────────────────────────────────
 *  SIX WORLDS — content model
 *  Placeholder copy where details are deliberately undefined.
 *  Search for TODO to see what still needs the chef / team input.
 * ────────────────────────────────────────────────────────────────
 */

export const BRAND = {
  name: 'SIX WORLDS',
  tagline: 'A private gastronomic journey',
  concept: '6 destinations · 6 dishes · 12 wines · 6 guests · 4 hours',
  lines: [
    'Six guests. Six worlds. One table.',
    'A journey told through food and wine.',
    'The world, served one chapter at a time.',
  ],
  nights: 'Thursday · Friday',
  durationHours: 4,
  seats: 6,
  email: 'reserve@sixworlds.example', // TODO: real reservations address
  city: 'Location shared upon confirmation', // TODO: neighbourhood / city
}

/** Marquee figures reused across sections. */
export const FIGURES: { value: string; label: string }[] = [
  { value: '6', label: 'Worlds' },
  { value: '6', label: 'Dishes' },
  { value: '12', label: 'Wines' },
  { value: '6', label: 'Guests' },
  { value: '4', label: 'Hours' },
  { value: '1', label: 'Table' },
]

/** A world = a chapter of the night. Keep descriptions conceptual, not literal. */
export interface World {
  act: number
  roman: string
  place: string
  title: string
  /** One evocative line for the chapter list. */
  teaser: string
  /** Fuller concept paragraph for the SIX DISHES section. */
  concept: string
  /** Optional real photograph; null renders the art-directed placeholder. */
  image: string | null
}

export const WORLDS: World[] = [
  {
    act: 1,
    roman: 'I',
    place: 'Bali',
    title: 'BALI NOIR',
    teaser: 'Duck marinated in wine and Balinese spice. Black plate, low volume, full intent.',
    concept:
      'The journey opens in shadow. Duck marinated in red wine and a base of Balinese spice — restraint over abundance. A small composition on a large black plate: precision, not spectacle.',
    image: null,
  },
  {
    act: 2,
    roman: 'II',
    place: 'Australia',
    title: 'RED EARTH',
    teaser: 'Earth, fire and the Australian wild, read through a single plate.',
    concept:
      'A course built from earth, fire and native character. The plate speaks of open landscape and heat — smoke, char and something raw held under control. TODO: final ingredients.',
    image: null,
  },
  {
    act: 3,
    roman: 'III',
    place: 'Cape Verde',
    title: 'ATLANTIC WIND',
    teaser: 'The Atlantic, a volcanic coastline, the cooking of the islands.',
    concept:
      'A tribute to the Atlantic and to volcanic ground. Salt, wind and island cooking, distilled into one quiet, mineral course. TODO: final ingredients.',
    image: null,
  },
  {
    act: 4,
    roman: 'IV',
    place: 'South America',
    title: 'PACIFIC / AMAZONIA',
    teaser: 'Where the Pacific meets the density of the Amazon.',
    concept:
      'Two forces on one plate: the cold clarity of the Pacific and the humid abundance of the Amazon. Contrast held in balance. TODO: final ingredients.',
    image: null,
  },
  {
    act: 5,
    roman: 'V',
    place: 'Portugal',
    title: 'THE LAST LIGHT',
    teaser: 'Atlantic tradition, fire, and a Portuguese kind of melancholy.',
    concept:
      'The light begins to fade. Atlantic tradition and fire, carrying a note of melancholy — the course before the return home. TODO: final ingredients.',
    image: null,
  },
  {
    act: 6,
    roman: 'VI',
    place: 'Spain',
    title: 'HOME',
    teaser: 'The journey ends where everything begins.',
    concept:
      'The last chapter. Spain — the point of departure and of return. A close, not a finale. TODO: final ingredients.',
    image: null,
  },
]

/** The wine narrative — not "pairing". One dish, two expressions. */
export const WINE_NARRATIVE = {
  headline: 'ONE DISH. TWO EXPRESSIONS.',
  body: [
    'Twelve wines run through the night — two for every course.',
    'The first often works against the plate: a contrast that sharpens it.',
    'The second moves with it: harmony, weight, depth.',
    'Wine here is not an accompaniment. It is part of how the story is told.',
  ],
  note: 'Producers, regions and vintages are confirmed closer to each service.', // TODO: wine list
}

/** SIX GUESTS — exclusivity block. */
export const GUESTS_BLOCK = {
  headline: 'ONLY SIX SEATS',
  body: [
    'Six people share each experience. No large tables, no service at scale.',
    'It is close enough for the chef, the team and the guests to travel together.',
  ],
  stats: [
    { value: '6', label: 'Guests' },
    { value: '1', label: 'Table' },
    { value: '4', label: 'Hours' },
    { value: '12', label: 'Wines' },
    { value: '6', label: 'Dishes' },
  ],
}

/** THE NIGHT — a cinematic run of order, not a rigid schedule. */
export interface Beat {
  time?: string
  label: string
  note?: string
  act?: number
}

export const NIGHT: Beat[] = [
  { time: '19:30', label: 'Arrival', note: 'Welcome drink and the first encounter' },
  { label: 'Act I — Bali', act: 1 },
  { label: 'Act II — Australia', act: 2 },
  { label: 'Act III — Cape Verde', act: 3 },
  { label: 'Intermission', note: 'A pause between hemispheres' },
  { label: 'Act IV — South America', act: 4 },
  { label: 'Act V — Portugal', act: 5 },
  { label: 'Act VI — Spain', act: 6 },
  { label: 'Closing', note: 'The last pour, the last light' },
]

/**
 * THE TABLE — availability. Edit `status` / `seatsLeft` as services fill.
 * status: 'available' | 'limited' | 'full' | 'waitlist'
 */
export type SeatStatus = 'available' | 'limited' | 'full' | 'waitlist'

export interface NightSlot {
  day: 'Thursday' | 'Friday'
  status: SeatStatus
  seatsLeft: number
}

export const AVAILABILITY: NightSlot[] = [
  { day: 'Thursday', status: 'available', seatsLeft: 6 },
  { day: 'Friday', status: 'limited', seatsLeft: 2 },
]

export const SEAT_STATUS_LABEL: Record<SeatStatus, string> = {
  available: 'Available',
  limited: 'Limited',
  full: 'Fully booked',
  waitlist: 'Waitlist',
}

/** RESERVATION — practical detail. */
export const RESERVATION = {
  pricePerPerson: 0, // TODO: set price in EUR; 0 renders a placeholder
  currency: '€',
  durationText: 'Approximately four hours, one seating',
  includes: [
    'Six dishes across six worlds',
    'Twelve wines, two per course',
    'Welcome drink on arrival',
    'Water, coffee and infusions',
    'All service and taxes',
  ],
  cancellation:
    'Seats are released 72 hours before the service. Inside 72 hours the seat is non-refundable but may be transferred to another guest.', // TODO: confirm policy
  dietary:
    'Tell us about allergies and restrictions when you book. With notice, most can be worked around; some worlds cannot be fully adapted.',
}

export const LOCATION = {
  heading: 'THE RESTAURANT',
  body: [
    'A single room, one table, an open kitchen.',
    'The address is sent with your confirmation.',
  ],
  city: BRAND.city,
}
