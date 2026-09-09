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
    'Six worlds. One table.',
    'A journey told through food and wine.',
    'The world, served one chapter at a time.',
    'The journey ends where it began.',
  ],
  nights: 'Thursday · Friday',
  durationHours: 4,
  seats: 6,
  seatsPerWeek: 12,
  email: 'reserve@sixworlds.example', // TODO: real reservations address
  city: 'Location shared upon confirmation', // TODO: neighbourhood / city
}

/** Short intro block. */
export const INTRO = {
  headline: 'Six worlds. One table.',
  body: [
    'Six guests. A four-hour journey through six territories.',
    'Told course by course — some of it kept back until you are seated.',
  ],
}

/** Marquee figures reused across sections. */
export const FIGURES: { value: string; label: string }[] = [
  { value: '6', label: 'Worlds' },
  { value: '6', label: 'Dishes' },
  { value: '12', label: 'Wines' },
  { value: '6', label: 'Guests' },
  { value: '4', label: 'Hours' },
  { value: '2', label: 'Nights' },
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
  /** Inspiration keywords — not a recipe. */
  inspiration: string[]
  /** The closing chapter (Spain) is rendered differently. */
  home?: boolean
  /** Optional real photograph; null renders the art-directed placeholder. */
  image: string | null
}

export const WORLDS: World[] = [
  {
    act: 1,
    roman: 'I',
    place: 'Bali',
    title: 'BALI NOIR',
    teaser: 'Duck marinated in wine and Balinese spice. Dark, precise, restrained.',
    concept:
      'The journey opens in shadow. Duck marinated in red wine over a base of Balinese spice, finished with a dark reduction and fresh herbs. A small composition on a large black plate — precision, not abundance.',
    inspiration: ['duck', 'wine', 'galangal', 'ginger', 'spice', 'fire', 'dark reduction', 'fresh herbs'],
    image: null,
  },
  {
    act: 2,
    roman: 'II',
    place: 'Australia',
    title: 'RED EARTH',
    teaser: 'Red earth, open flame, native wild.',
    concept:
      'A course built from red ground and fire. Smoke, char and native botanicals — something raw, held under control. TODO: final ingredients.',
    inspiration: ['red earth', 'fire', 'smoke', 'char', 'native botanicals', 'open flame'],
    image: null,
  },
  {
    act: 3,
    roman: 'III',
    place: 'Cape Verde',
    title: 'ATLANTIC WIND',
    teaser: 'The Atlantic, a volcanic coast, the wind off the islands.',
    concept:
      'A tribute to the Atlantic and to volcanic ground. Salt, wind, fish and corn, distilled into one quiet, mineral course. TODO: final ingredients.',
    inspiration: ['Atlantic', 'volcano', 'salt', 'fish', 'wind', 'corn'],
    image: null,
  },
  {
    act: 4,
    roman: 'IV',
    place: 'South America',
    title: 'PACIFIC / AMAZONIA',
    teaser: 'Where the Pacific meets the density of the Amazon.',
    concept:
      'Two forces on one plate: the cold clarity of the Pacific and the humid abundance of the Amazon. Acidity against heat, held in balance. TODO: final ingredients.',
    inspiration: ['Pacific', 'Amazonia', 'acidity', 'chilli', 'fruit', 'herbs'],
    image: null,
  },
  {
    act: 5,
    roman: 'V',
    place: 'Portugal',
    title: 'THE LAST LIGHT',
    teaser: 'Atlantic tradition, fire, and a Portuguese kind of melancholy.',
    concept:
      'The light begins to fade. Atlantic tradition, olive oil and fire, carrying a note of melancholy — the course before the return home. TODO: final ingredients.',
    inspiration: ['Atlantic', 'tradition', 'fire', 'olive oil', 'fish', 'melancholy'],
    image: null,
  },
  {
    act: 6,
    roman: 'VI',
    place: 'Spain',
    title: 'HOME',
    teaser: 'The journey ends where it began.',
    concept:
      'Not another destination. The last chapter is a return — to identity, to memory, to the table where the journey started.',
    inspiration: ['return', 'identity', 'home', 'memory'],
    home: true,
    image: null,
  },
]

/** The wine narrative — not "pairing". One dish, two expressions. */
export const WINE_NARRATIVE = {
  headline: 'ONE DISH. TWO EXPRESSIONS.',
  body: [
    'Twelve wines run through the night — two for every course.',
    'The first is chosen for contrast: set against the plate to sharpen it.',
    'The second for harmony: it moves with the dish — weight, depth, a longer finish.',
    'Wine here is part of how the story is told, not an accompaniment to it.',
  ],
  first: {
    tag: 'Contrast',
    line: 'Set against the plate to cut through it and sharpen its edges.',
  },
  second: {
    tag: 'Harmony',
    line: 'Moves with the dish — weight, depth, a longer finish.',
  },
  note: 'Producers, regions and vintages are confirmed closer to each service.', // TODO: wine list
}

/** SIX GUESTS — exclusivity block. */
export const GUESTS_BLOCK = {
  headline: 'ONLY SIX SEATS',
  body: [
    'Every experience is built for six people. No large tables, no service at scale.',
    'Close enough for the chef, the team and the guests to travel together.',
  ],
  stats: [
    { value: '6', label: 'Guests' },
    { value: '1', label: 'Table' },
    { value: '6', label: 'Dishes' },
    { value: '12', label: 'Wines' },
    { value: '4', label: 'Hours' },
    { value: '2', label: 'Nights' },
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
  { label: 'Bali', act: 1 },
  { label: 'Australia', act: 2 },
  { label: 'Cape Verde', act: 3 },
  { label: 'Intermission', note: 'A pause between hemispheres' },
  { label: 'South America', act: 4 },
  { label: 'Portugal', act: 5 },
  { label: 'Spain', act: 6, note: 'The journey ends where it began' },
  { label: 'Closing', note: 'The last pour, the last light' },
]

/** The 45–60s cinematic film. Drop a file in /public and point src at it. */
export const VIDEO = {
  src: null as string | null, // TODO: '/six-worlds.mp4' — cinematic 45–60s, no dialogue
  poster: null as string | null, // TODO: '/six-worlds-poster.jpg'
  runtime: '60 seconds',
  caption: 'Bali to Spain, in fragments.',
}

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

export const SCARCITY = 'Two nights a week. One table. Twelve seats.'

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
