export type Lang = 'es' | 'en'

/** A string that exists in both site languages. */
export interface LocalizedText {
  es: string
  en: string
}

export const l = (es: string, en: string): LocalizedText => ({ es, en })

/** UI chrome strings (not menu content — that lives in data/menu.ts). */
const T = {
  es: {
    nav_experience:  'La experiencia',
    nav_menu:        'El menú',
    nav_cellar:      'La bodega',
    nav_reserve:     'Reservar',
    reserve:         'Reservar mesa',
    scroll:          'baja',
    courses:         'platos',
    wines:           'vinos',
    hours:           'horas',
    seats:           'comensales',
    seatsPerService: 'plazas por servicio',
    act:             'Acto',
    pairing:         'Maridaje',
    glass:           'Copa',
    servedWith:      'Se sirve con',
    theCellar:       'La bodega',
    cellarIntro:     'Doce vinos, un único hilo. Cada copa nace para un plato y muere con él.',
    perPerson:       'por persona',
    reserveTitle:    'Reserva tu asiento',
    reserveBody:     'Un solo servicio por noche. Doce sillas. La reserva se confirma con el pago íntegro por adelantado.',
    reserveCta:      'Escribir para reservar',
    date:            'Próximas fechas',
    location:        'Ubicación',
    dietary:         'Alergias e intolerancias: indícalas al reservar y las resolvemos.',
    rights:          'Todos los derechos reservados.',
    langName:        'ES',
  },
  en: {
    nav_experience:  'The experience',
    nav_menu:        'The menu',
    nav_cellar:      'The cellar',
    nav_reserve:     'Reserve',
    reserve:         'Reserve a table',
    scroll:          'scroll',
    courses:         'courses',
    wines:           'wines',
    hours:           'hours',
    seats:           'guests',
    seatsPerService: 'seats per service',
    act:             'Act',
    pairing:         'Pairing',
    glass:           'Glass',
    servedWith:      'Served with',
    theCellar:       'The cellar',
    cellarIntro:     'Twelve wines, a single thread. Every glass is born for a dish and dies with it.',
    perPerson:       'per person',
    reserveTitle:    'Reserve your seat',
    reserveBody:     'One service per night. Twelve chairs. Your seat is confirmed with full prepayment.',
    reserveCta:      'Write to reserve',
    date:            'Upcoming dates',
    location:        'Location',
    dietary:         'Allergies and intolerances: tell us when you book and we will adapt.',
    rights:          'All rights reserved.',
    langName:        'EN',
  },
} as const

export type TKey = keyof typeof T.es

export function tr(lang: Lang, key: TKey): string {
  return T[lang]?.[key] ?? T.es[key] ?? key
}
