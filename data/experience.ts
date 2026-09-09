/**
 * ────────────────────────────────────────────────────────────────
 *  SIX WORLDS — bilingual content model (ES primary, EN secondary)
 *  Every human string is { es, en }. Brand names stay as-is.
 *  Search for TODO to see what still needs the chef / team input.
 * ────────────────────────────────────────────────────────────────
 */

export type Lang = 'es' | 'en'
export type Loc = { es: string; en: string }

/** Resolve a localized value (or pass a plain string through). */
export const t = (v: Loc | string, lang: Lang): string =>
  typeof v === 'string' ? v : v[lang] ?? v.es

const L = (es: string, en: string): Loc => ({ es, en })

export const BRAND = {
  name: 'SIX WORLDS',
  tagline: L('Un viaje gastronómico privado', 'A private gastronomic journey'),
  concept: L(
    '6 destinos · 6 platos · 12 vinos · 6 comensales · 4 horas',
    '6 destinations · 6 dishes · 12 wines · 6 guests · 4 hours',
  ),
  lines: [
    L('Seis mundos. Una mesa.', 'Six worlds. One table.'),
    L('Un viaje contado a través de comida y vino.', 'A journey told through food and wine.'),
    L('El mundo, servido de capítulo en capítulo.', 'The world, served one chapter at a time.'),
    L('El viaje termina donde empezó.', 'The journey ends where it began.'),
  ],
  nights: L('Jueves · Viernes', 'Thursday · Friday'),
  durationHours: 4,
  seats: 6,
  seatsPerWeek: 12,
  email: 'reserve@sixworlds.example', // TODO: real reservations address
  city: L('Ubicación facilitada al confirmar', 'Location shared upon confirmation'), // TODO
}

export const INTRO = {
  headline: L('Seis mundos. Una mesa.', 'Six worlds. One table.'),
  body: [
    L('Seis comensales. Un viaje de cuatro horas por seis territorios.',
      'Six guests. A four-hour journey through six territories.'),
    L('Contado plato a plato — parte se reserva hasta que estás sentado.',
      'Told course by course — some of it kept back until you are seated.'),
  ],
}

export const FIGURES: { value: string; label: Loc }[] = [
  { value: '6', label: L('Mundos', 'Worlds') },
  { value: '6', label: L('Platos', 'Dishes') },
  { value: '12', label: L('Vinos', 'Wines') },
  { value: '6', label: L('Comensales', 'Guests') },
  { value: '4', label: L('Horas', 'Hours') },
  { value: '2', label: L('Noches', 'Nights') },
]

export interface World {
  act: number
  roman: string
  place: Loc
  title: string // brand name — not translated
  teaser: Loc
  concept: Loc
  inspiration: Loc[]
  home?: boolean
  image: string | null
}

export const WORLDS: World[] = [
  {
    act: 1,
    roman: 'I',
    place: L('Bali', 'Bali'),
    title: 'BALI NOIR',
    teaser: L(
      'Pato marinado en vino y especias balinesas. Oscuro, preciso, contenido.',
      'Duck marinated in wine and Balinese spice. Dark, precise, restrained.',
    ),
    concept: L(
      'El viaje abre en penumbra. Pato marinado en vino tinto sobre una base de especias balinesas, terminado con una reducción oscura y hierbas frescas. Una composición pequeña en un plato negro grande — precisión, no abundancia.',
      'The journey opens in shadow. Duck marinated in red wine over a base of Balinese spice, finished with a dark reduction and fresh herbs. A small composition on a large black plate — precision, not abundance.',
    ),
    inspiration: [
      L('pato', 'duck'), L('vino', 'wine'), L('galanga', 'galangal'), L('jengibre', 'ginger'),
      L('especias', 'spice'), L('fuego', 'fire'), L('reducción oscura', 'dark reduction'),
      L('hierbas frescas', 'fresh herbs'),
    ],
    image: null,
  },
  {
    act: 2,
    roman: 'II',
    place: L('Australia', 'Australia'),
    title: 'RED EARTH',
    teaser: L('Tierra roja, llama abierta, naturaleza salvaje.', 'Red earth, open flame, native wild.'),
    concept: L(
      'Un plato construido desde la tierra roja y el fuego. Humo, brasa y botánicos autóctonos — algo crudo, bajo control. TODO: ingredientes definitivos.',
      'A course built from red ground and fire. Smoke, char and native botanicals — something raw, held under control. TODO: final ingredients.',
    ),
    inspiration: [
      L('tierra roja', 'red earth'), L('fuego', 'fire'), L('humo', 'smoke'), L('brasa', 'char'),
      L('botánicos autóctonos', 'native botanicals'), L('llama abierta', 'open flame'),
    ],
    image: null,
  },
  {
    act: 3,
    roman: 'III',
    place: L('Cabo Verde', 'Cape Verde'),
    title: 'ATLANTIC WIND',
    teaser: L(
      'El Atlántico, una costa volcánica, el viento de las islas.',
      'The Atlantic, a volcanic coast, the wind off the islands.',
    ),
    concept: L(
      'Un homenaje al Atlántico y a la tierra volcánica. Sal, viento, pescado y maíz, destilados en un plato tranquilo y mineral. TODO: ingredientes definitivos.',
      'A tribute to the Atlantic and to volcanic ground. Salt, wind, fish and corn, distilled into one quiet, mineral course. TODO: final ingredients.',
    ),
    inspiration: [
      L('Atlántico', 'Atlantic'), L('volcán', 'volcano'), L('sal', 'salt'),
      L('pescado', 'fish'), L('viento', 'wind'), L('maíz', 'corn'),
    ],
    image: null,
  },
  {
    act: 4,
    roman: 'IV',
    place: L('Sudamérica', 'South America'),
    title: 'PACIFIC / AMAZONIA',
    teaser: L('Donde el Pacífico se encuentra con la densidad del Amazonas.', 'Where the Pacific meets the density of the Amazon.'),
    concept: L(
      'Dos fuerzas en un plato: la claridad fría del Pacífico y la abundancia húmeda del Amazonas. Acidez contra picante, en equilibrio. TODO: ingredientes definitivos.',
      'Two forces on one plate: the cold clarity of the Pacific and the humid abundance of the Amazon. Acidity against heat, held in balance. TODO: final ingredients.',
    ),
    inspiration: [
      L('Pacífico', 'Pacific'), L('Amazonía', 'Amazonia'), L('acidez', 'acidity'),
      L('chile', 'chilli'), L('fruta', 'fruit'), L('hierbas', 'herbs'),
    ],
    image: null,
  },
  {
    act: 5,
    roman: 'V',
    place: L('Portugal', 'Portugal'),
    title: 'THE LAST LIGHT',
    teaser: L(
      'Tradición atlántica, fuego y una melancolía portuguesa.',
      'Atlantic tradition, fire, and a Portuguese kind of melancholy.',
    ),
    concept: L(
      'La luz empieza a apagarse. Tradición atlántica, aceite de oliva y fuego, con una nota de melancolía — el plato antes del regreso a casa. TODO: ingredientes definitivos.',
      'The light begins to fade. Atlantic tradition, olive oil and fire, carrying a note of melancholy — the course before the return home. TODO: final ingredients.',
    ),
    inspiration: [
      L('Atlántico', 'Atlantic'), L('tradición', 'tradition'), L('fuego', 'fire'),
      L('aceite de oliva', 'olive oil'), L('pescado', 'fish'), L('melancolía', 'melancholy'),
    ],
    image: null,
  },
  {
    act: 6,
    roman: 'VI',
    place: L('España', 'Spain'),
    title: 'HOME',
    teaser: L('El viaje termina donde empezó.', 'The journey ends where it began.'),
    concept: L(
      'No es otro destino. El último capítulo es un regreso — a la identidad, a la memoria, a la mesa donde empezó el viaje.',
      'Not another destination. The last chapter is a return — to identity, to memory, to the table where the journey started.',
    ),
    inspiration: [
      L('regreso', 'return'), L('identidad', 'identity'), L('hogar', 'home'), L('memoria', 'memory'),
    ],
    home: true,
    image: null,
  },
]

export const WINE_NARRATIVE = {
  headline: L('UN PLATO. DOS EXPRESIONES.', 'ONE DISH. TWO EXPRESSIONS.'),
  body: [
    L('Doce vinos recorren la noche — dos por cada plato.',
      'Twelve wines run through the night — two for every course.'),
    L('El primero se elige por contraste: se enfrenta al plato para afilarlo.',
      'The first is chosen for contrast: set against the plate to sharpen it.'),
    L('El segundo, por armonía: acompaña al plato — peso, profundidad, un final más largo.',
      'The second for harmony: it moves with the dish — weight, depth, a longer finish.'),
    L('Aquí el vino es parte de cómo se cuenta la historia, no un acompañamiento.',
      'Wine here is part of how the story is told, not an accompaniment to it.'),
  ],
  first: {
    tag: L('Contraste', 'Contrast'),
    line: L('Enfrentado al plato para atravesarlo y afilar sus bordes.',
            'Set against the plate to cut through it and sharpen its edges.'),
  },
  second: {
    tag: L('Armonía', 'Harmony'),
    line: L('Acompaña al plato — peso, profundidad, un final más largo.',
            'Moves with the dish — weight, depth, a longer finish.'),
  },
  closing: L('Seis creaciones, doce copas, una línea continua.',
             'Six creations, twelve glasses, one continuous line.'),
  note: L('Bodegas, regiones y añadas se confirman antes de cada servicio.',
          'Producers, regions and vintages are confirmed closer to each service.'), // TODO
}

export const GUESTS_BLOCK = {
  headline: L('SOLO SEIS COMENSALES', 'ONLY SIX SEATS'),
  body: [
    L('Cada experiencia está pensada para seis personas. Sin grandes mesas, sin servicio a escala.',
      'Every experience is built for six people. No large tables, no service at scale.'),
    L('Lo bastante cerca para que el chef, el equipo y los comensales viajen juntos.',
      'Close enough for the chef, the team and the guests to travel together.'),
  ],
  stats: [
    { value: '6', label: L('Comensales', 'Guests') },
    { value: '1', label: L('Mesa', 'Table') },
    { value: '6', label: L('Platos', 'Dishes') },
    { value: '12', label: L('Vinos', 'Wines') },
    { value: '4', label: L('Horas', 'Hours') },
    { value: '2', label: L('Noches', 'Nights') },
  ],
}

export interface Beat {
  time?: string
  label: Loc
  note?: Loc
  act?: number
}

export const NIGHT: Beat[] = [
  { time: '19:30', label: L('Llegada', 'Arrival'), note: L('Copa de bienvenida y el primer encuentro', 'Welcome drink and the first encounter') },
  { label: L('Bali', 'Bali'), act: 1 },
  { label: L('Australia', 'Australia'), act: 2 },
  { label: L('Cabo Verde', 'Cape Verde'), act: 3 },
  { label: L('Intermedio', 'Intermission'), note: L('Una pausa entre hemisferios', 'A pause between hemispheres') },
  { label: L('Sudamérica', 'South America'), act: 4 },
  { label: L('Portugal', 'Portugal'), act: 5 },
  { label: L('España', 'Spain'), act: 6, note: L('El viaje termina donde empezó', 'The journey ends where it began') },
  { label: L('Cierre', 'Closing'), note: L('La última copa, la última luz', 'The last pour, the last light') },
]

export const VIDEO = {
  src: null as string | null, // TODO: '/six-worlds.mp4' — cinematic 45–60s, no dialogue
  poster: null as string | null, // TODO: '/six-worlds-poster.jpg'
  runtime: L('60 segundos', '60 seconds'),
  caption: L('De Bali a España, en fragmentos.', 'Bali to Spain, in fragments.'),
  label: L('Six Worlds — la película', 'Six Worlds — the film'),
  filmWord: L('Película', 'Film'),
}

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

export const DAY_LABEL: Record<'Thursday' | 'Friday', Loc> = {
  Thursday: L('Jueves', 'Thursday'),
  Friday: L('Viernes', 'Friday'),
}

export const SEAT_STATUS_LABEL: Record<SeatStatus, Loc> = {
  available: L('Disponible', 'Available'),
  limited: L('Últimas plazas', 'Limited'),
  full: L('Completo', 'Fully booked'),
  waitlist: L('Lista de espera', 'Waitlist'),
}

export const SCARCITY = L(
  'Dos noches por semana. Una mesa. Doce plazas.',
  'Two nights a week. One table. Twelve seats.',
)

export const RESERVATION = {
  pricePerPerson: 0, // TODO: set price in EUR; 0 renders a placeholder
  currency: '€',
  durationText: L('Aproximadamente cuatro horas, un único servicio', 'Approximately four hours, one seating'),
  includes: [
    L('Seis platos a través de seis mundos', 'Six dishes across six worlds'),
    L('Doce vinos, dos por plato', 'Twelve wines, two per course'),
    L('Copa de bienvenida a la llegada', 'Welcome drink on arrival'),
    L('Agua, café e infusiones', 'Water, coffee and infusions'),
    L('Todo el servicio e impuestos', 'All service and taxes'),
  ],
  cancellation: L(
    'Las plazas se liberan 72 horas antes del servicio. Dentro de esas 72 horas la plaza no es reembolsable, pero puede transferirse a otra persona.',
    'Seats are released 72 hours before the service. Inside 72 hours the seat is non-refundable but may be transferred to another guest.',
  ), // TODO: confirm policy
  dietary: L(
    'Indícanos alergias y restricciones al reservar. Con antelación, casi todo puede adaptarse; algunos mundos no pueden modificarse por completo.',
    'Tell us about allergies and restrictions when you book. With notice, most can be worked around; some worlds cannot be fully adapted.',
  ),
}

export const LOCATION = {
  heading: L('EL RESTAURANTE', 'THE RESTAURANT'),
  body: [
    L('Una sola sala, una mesa, una cocina abierta.', 'A single room, one table, an open kitchen.'),
    L('La dirección se envía con tu confirmación.', 'The address is sent with your confirmation.'),
  ],
  city: BRAND.city,
}

/** UI chrome strings. */
export const UI = {
  nav: {
    journey: L('El viaje', 'The Journey'),
    worlds: L('Los mundos', 'Six Worlds'),
    dishes: L('Los platos', 'Six Dishes'),
    wines: L('Los vinos', 'Twelve Wines'),
    table: L('La mesa', 'The Table'),
  },
  reserve: L('Reservar', 'Reserve'),
  reserveExperience: L('Reservar la experiencia', 'Reserve the experience'),
  reserveSeat: L('Reserva tu plaza', 'Reserve your seat'),
  reserveThisNight: L('Reservar esta noche', 'Reserve this night'),
  enterJourney: L('Entra en el viaje', 'Enter the journey'),
  joinWaitlist: L('Apúntate a la lista de espera', 'Join the waitlist'),
  eyebrow: {
    journey: L('El viaje', 'The Journey'),
    worlds: L('Los seis mundos', 'The Six Worlds'),
    dishes: L('Seis platos', 'Six Dishes'),
    wines: L('Doce vinos', 'Twelve Wines'),
    guests: L('Seis comensales', 'Six Guests'),
    night: L('El viaje de cuatro horas', 'The Four-Hour Journey'),
    table: L('La mesa', 'The Table'),
    reservation: L('Reserva', 'Reservation'),
    restaurant: L('El restaurante', 'The Restaurant'),
  },
  worldsHeadline: L(
    'Seis capítulos, en orden. Cada uno un lugar — y una despedida de él.',
    'Six chapters, in order. Each one a place — and a departure from it.',
  ),
  theReturn: L('El regreso', 'The return'),
  dishesHeadline: L('Una colección de seis creaciones. Una por cada mundo.', 'A collection of six creations. One for each world.'),
  baliQuote: L('Poca comida, un plato negro grande. Precisión antes que abundancia.', 'A little food, a large black plate. Precision over abundance.'),
  act: L('Acto', 'Act'),
  firstGlass: L('Primera copa', 'First glass'),
  secondGlass: L('Segunda copa', 'Second glass'),
  nightHeadline: L('Una velada, contada en orden.', 'One evening, told in order.'),
  guestsServicePerNight: L('Un servicio por noche · Seis comensales', 'One service per night · Six guests'),
  perPerson: L('Por persona', 'Per person'),
  priceAtBooking: L('El precio final se confirma al reservar.', 'Final price is confirmed at booking.'),
  duration: L('Duración', 'Duration'),
  whatIncludes: L('Qué incluye', 'What it includes'),
  cancellation: L('Cancelación', 'Cancellation'),
  dietary: L('Alergias y restricciones', 'Allergies & restrictions'),
  requestSeat: L('Solicita tu plaza', 'Request your seat'),
  reservationHeadline: L(
    'No reservas una mesa. Ocupas una de seis plazas.',
    'You are not booking a table. You are taking one of six seats.',
  ),
  writeDirectly: L('¿Prefieres escribir directamente?', 'Prefer to write directly?'),
  form: {
    night: L('Noche', 'Night'),
    guests: L('Comensales', 'Guests'),
    name: L('Nombre completo', 'Full name'),
    email: L('Email', 'Email'),
    phone: L('Teléfono', 'Phone'),
    dietary: L('Alergias y restricciones', 'Allergies & restrictions'),
    submit: L('Solicitar plaza', 'Request your seat'),
    disclaimer: L(
      'Esto abre un email a nuestro equipo. La plaza se reserva solo cuando respondemos con la confirmación.',
      'This opens an email to our team. A seat is held only once we reply with confirmation.',
    ),
    seatsLeft: (n: number, lang: Lang) =>
      lang === 'es'
        ? `${n} ${n === 1 ? 'plaza' : 'plazas'}`
        : `${n} ${n === 1 ? 'seat' : 'seats'} left`,
  },
  rights: L('Todos los derechos reservados', 'All rights reserved'),
  langName: { es: 'ES', en: 'EN' },
}
