import { l, type LocalizedText } from '@/lib/i18n'

/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENIDO DE EJEMPLO — reemplázalo por el menú real.
 *  Todo el texto es bilingüe: l('español', 'english').
 *  6 platos · 12 vinos (2 copas por plato).
 * ─────────────────────────────────────────────────────────────
 */

export const EXPERIENCE = {
  name:      'SOBREMESA',
  tagline:   l('Seis actos. Doce copas. Una sola noche.',
              'Six acts. Twelve glasses. One single night.'),
  intro:     l(
    'Una cena a ciegas que empieza cuando se apaga la calle. Seis platos servidos al unísono para doce personas alrededor de una misma mesa, cada uno atado a dos vinos que el sumiller descorcha delante de ti. No hay carta. No hay elección. Solo la secuencia, contada de principio a fin.',
    'A blind dinner that begins when the street goes dark. Six dishes served in unison to twelve people around one table, each tied to two wines the sommelier opens in front of you. No menu. No choosing. Only the sequence, told from beginning to end.',
  ),
  priceEUR:      185,
  durationHours: 3,
  seatsPerService: 12,
  dates: l(
    'Jueves a sábado · reservas abiertas para los próximos dos meses',
    'Thursday to Saturday · booking open for the next two months',
  ),
  location: l(
    'Dirección facilitada al confirmar la reserva · centro de la ciudad',
    'Address shared once your reservation is confirmed · city centre',
  ),
  email: 'reservas@sobremesa.example',
}

/** How the night works — shown in "La experiencia". */
export const PILLARS: { title: LocalizedText; body: LocalizedText }[] = [
  {
    title: l('Un único pase', 'A single seating'),
    body:  l('Todos los comensales entran a la misma hora y viven la misma secuencia, sin prisa y sin repetición.',
             'Every guest arrives at the same time and lives the same sequence — unhurried, never repeated.'),
  },
  {
    title: l('Maridaje guiado', 'Guided pairing'),
    body:  l('Dos copas por plato. El sumiller presenta cada vino, por qué está ahí y en qué orden beberlo.',
             'Two glasses per dish. The sommelier introduces each wine, why it is there and in what order to drink it.'),
  },
  {
    title: l('Doce a la mesa', 'Twelve at the table'),
    body:  l('Una mesa corrida, sin separaciones. La conversación es parte del menú.',
             'One long table, no partitions. Conversation is part of the menu.'),
  },
  {
    title: l('Sin carta', 'No à la carte'),
    body:  l('No se elige nada salvo el vino que quieras repetir. Cuéntanos tus alergias al reservar.',
             'Nothing to choose but the wine you want poured again. Tell us your allergies when you book.'),
  },
]

export type WineType = 'blanco' | 'tinto' | 'generoso' | 'espumoso' | 'rosado' | 'dulce'

export interface Wine {
  glass:    number            // 1–12, orden de servicio
  name:     string
  producer: string
  region:   LocalizedText
  grape:    string
  year:     string
  type:     WineType
  notes:    LocalizedText
}

export interface Course {
  n:           number          // 1–6
  name:        LocalizedText
  kicker:      LocalizedText   // línea corta sobre el plato
  description: LocalizedText
  ingredients: LocalizedText   // lista breve, separada por · en el texto
  wines:       [Wine, Wine]    // exactamente dos copas
}

export const WINE_TYPE_LABEL: Record<WineType, LocalizedText> = {
  blanco:    l('Blanco', 'White'),
  tinto:     l('Tinto', 'Red'),
  generoso:  l('Generoso', 'Fortified'),
  espumoso:  l('Espumoso', 'Sparkling'),
  rosado:    l('Rosado', 'Rosé'),
  dulce:     l('Dulce', 'Sweet'),
}

export const COURSES: Course[] = [
  {
    n: 1,
    name:   l('Primer sorbo', 'First sip'),
    kicker: l('Se come de un bocado, con las manos.', 'Eaten in one bite, with your hands.'),
    description: l(
      'Ostra gallega apenas templada sobre un encurtido de manzana verde, cubierta por un aire frío de cava y ralladura de lima. Frío, salino y punzante: abre la boca antes de que llegue nada más.',
      'A barely-warmed Galician oyster over green-apple pickle, capped with a cold cava foam and lime zest. Cold, saline and sharp — it opens the palate before anything else arrives.',
    ),
    ingredients: l('Ostra · manzana verde · cava · lima · eneldo',
                   'Oyster · green apple · cava · lime · dill'),
    wines: [
      {
        glass: 1, name: 'En Rama', producer: 'Bodega de Jerez',
        region: l('Jerez de la Frontera, Andalucía', 'Jerez de la Frontera, Andalusia'),
        grape: 'Palomino Fino', year: 'Saca de primavera', type: 'generoso',
        notes: l('Punzante y salino, con flor viva y un final de almendra amarga que empuja a la ostra.',
                 'Bracing and saline, with live flor and a bitter-almond finish that pushes the oyster forward.'),
      },
      {
        glass: 2, name: 'Blanc de Blancs Brut Nature', producer: 'Recaredo · Corpinnat',
        region: l('Alt Penedès, Cataluña', 'Alt Penedès, Catalonia'),
        grape: 'Xarel·lo, Macabeu', year: '2018', type: 'espumoso',
        notes: l('Burbuja fina, cero azúcar, corteza de pan y manzana. Limpia el paladar de golpe.',
                 'Fine bead, zero dosage, bread crust and apple. Wipes the palate clean in one pass.'),
      },
    ],
  },
  {
    n: 2,
    name:   l('Del mar', 'From the sea'),
    kicker: l('El caldo se bebe al final, directamente del cuenco.', 'Drink the broth last, straight from the bowl.'),
    description: l(
      'Vieira curada en sal y vuelta a la brasa unos segundos, sobre un caldo caliente hecho con sus propios corales y un hilo de aceite de alga codium. Dulzor marino contra amargor vegetal.',
      'A scallop cured in salt and flashed over embers, set in a hot broth made from its own roe with a thread of codium-seaweed oil. Sea-sweetness against vegetal bitterness.',
    ),
    ingredients: l('Vieira · coral · alga codium · mantequilla noisette · limón',
                   'Scallop · roe · codium seaweed · brown butter · lemon'),
    wines: [
      {
        glass: 3, name: 'Nunca Máis', producer: 'Adega do Atlántico',
        region: l('Val do Salnés, Rías Baixas', 'Val do Salnés, Rías Baixas'),
        grape: 'Albariño', year: '2021', type: 'blanco',
        notes: l('Nueve meses sobre lías: manzana, sal y una acidez cortante que aguanta el caldo.',
                 'Nine months on lees: apple, salt and a cutting acidity that stands up to the broth.'),
      },
      {
        glass: 4, name: 'Premier Cru "Montmain"', producer: 'Domaine de la Côte',
        region: l('Chablis, Borgoña', 'Chablis, Burgundy'),
        grape: 'Chardonnay', year: '2020', type: 'blanco',
        notes: l('Tiza mojada, ostra y avellana tierna. Tenso, recto, mineral hasta el hueso.',
                 'Wet chalk, oyster and young hazelnut. Taut, straight, mineral to the bone.'),
      },
    ],
  },
  {
    n: 3,
    name:   l('Huerta de invierno', 'Winter garden'),
    kicker: l('El único plato sin proteína animal.', 'The one course with no animal protein.'),
    description: l(
      'Alcachofa entera asada en su ceniza, abierta a la mesa y terminada con crema de avellana tostada, láminas de trufa negra y un jugo de sus propias hojas. Tierra, humo y amargor noble.',
      'A whole artichoke roasted in its own ash, opened at the table and finished with toasted-hazelnut cream, shaved black truffle and a jus from its own leaves. Earth, smoke and a noble bitterness.',
    ),
    ingredients: l('Alcachofa · avellana · trufa negra · ceniza vegetal · aceite arbequina',
                   'Artichoke · hazelnut · black truffle · vegetable ash · arbequina oil'),
    wines: [
      {
        glass: 5, name: 'Ánfora', producer: 'Val de Sil',
        region: l('Valdeorras, Galicia', 'Valdeorras, Galicia'),
        grape: 'Godello', year: '2019', type: 'blanco',
        notes: l('Fermentado en barro: fruta blanca, hierba seca y un fondo salino que abraza la alcachofa.',
                 'Clay-fermented: white fruit, dried herbs and a saline base that wraps the artichoke.'),
      },
      {
        glass: 6, name: 'Savagnin Ouillé', producer: 'Domaine des Marnes',
        region: l('Jura, Francia', 'Jura, France'),
        grape: 'Savagnin', year: '2019', type: 'blanco',
        notes: l('Sin velo de flor: nuez verde, curry suave y manzana rallada. Raro y adictivo con la trufa.',
                 'Topped-up, no flor veil: green walnut, mild curry and grated apple. Odd and addictive with truffle.'),
      },
    ],
  },
  {
    n: 4,
    name:   l('Fuego lento', 'Slow fire'),
    kicker: l('Doce horas de horno. Se corta con cuchara.', 'Twelve hours in the oven. Cut it with a spoon.'),
    description: l(
      'Cochinillo confitado a baja temperatura durante media jornada y prensado, con la piel laqueada aparte para que cruja. Se acompaña de membrillo asado y una mostaza antigua hecha en casa.',
      'Suckling pig confited at low temperature for half a day and pressed, its skin lacquered separately so it shatters. Served with roasted quince and a house-made old-style mustard.',
    ),
    ingredients: l('Cochinillo · membrillo · mostaza en grano · manteca · laurel',
                   'Suckling pig · quince · mustard seed · lard · bay leaf'),
    wines: [
      {
        glass: 7, name: 'Viñas Viejas', producer: 'Descendientes de Palacios',
        region: l('Bierzo, Castilla y León', 'Bierzo, Castilla y León'),
        grape: 'Mencía', year: '2019', type: 'tinto',
        notes: l('Cepas de pizarra: frambuesa, grafito y un tanino fino que corta la grasa del cochinillo.',
                 'Slate-grown vines: raspberry, graphite and a fine tannin that cuts the pork fat.'),
      },
      {
        glass: 8, name: 'Langhe Nebbiolo', producer: 'Cascina del Nord',
        region: l('Piamonte, Italia', 'Piedmont, Italy'),
        grape: 'Nebbiolo', year: '2020', type: 'tinto',
        notes: l('Rosa seca, cereza ácida y alquitrán. Tanino firme que pide otro bocado enseguida.',
                 'Dried rose, sour cherry and tar. Firm tannin that begs for another bite at once.'),
      },
    ],
  },
  {
    n: 5,
    name:   l('Caza', 'Game'),
    kicker: l('Se sirve rosado. Si lo quieres más hecho, dilo ahora.', 'Served pink. If you want it further done, say so now.'),
    description: l(
      'Pichón asado a la brasa, la pechuga poco hecha y el muslo guisado en su jugo con especias. Debajo, remolacha en dos texturas y grosella fresca para el punto ácido. Un plato oscuro, casi dulce.',
      'Char-grilled pigeon — breast rare, leg braised in its own spiced jus. Beneath it, beetroot in two textures and fresh redcurrant for the acid lift. A dark, almost sweet dish.',
    ),
    ingredients: l('Pichón · remolacha · grosella · enebro · pimienta negra',
                   'Pigeon · beetroot · redcurrant · juniper · black pepper'),
    wines: [
      {
        glass: 9, name: 'Reserva', producer: 'Dominio del Duero',
        region: l('Ribera del Duero, Castilla y León', 'Ribera del Duero, Castilla y León'),
        grape: 'Tempranillo', year: '2016', type: 'tinto',
        notes: l('Cinco años de crianza: ciruela negra, cuero y regaliz. Potente sin tapar la caza.',
                 'Five years aged: black plum, leather and liquorice. Powerful without burying the game.'),
      },
      {
        glass: 10, name: 'Saint-Joseph', producer: 'Domaine du Nord Rhône',
        region: l('Norte del Ródano, Francia', 'Northern Rhône, France'),
        grape: 'Syrah', year: '2018', type: 'tinto',
        notes: l('Pimienta, violeta y tocino ahumado. La Syrah de clima fresco que la caza siempre pide.',
                 'Pepper, violet and smoked bacon. The cool-climate Syrah that game always asks for.'),
      },
    ],
  },
  {
    n: 6,
    name:   l('Dulce oscuridad', 'Sweet darkness'),
    kicker: l('Lleva sal. Es a propósito.', 'It is salted. On purpose.'),
    description: l(
      'Un cremoso de chocolate negro 72% con aceite de oliva virgen extra batido en frío, escamas de sal de vino tinto y pan tostado helado. Amargo, graso y salino: el final no pide azúcar, pide otra copa.',
      'A 72% dark-chocolate cream with cold-whipped extra-virgin olive oil, red-wine salt flakes and frozen toasted bread. Bitter, rich and saline — the ending calls not for sugar but for one more glass.',
    ),
    ingredients: l('Chocolate 72% · aceite de oliva · sal de vino · pan · cacao',
                   'Chocolate 72% · olive oil · wine salt · bread · cocoa'),
    wines: [
      {
        glass: 11, name: 'PX Viejo', producer: 'Bodega de Montilla',
        region: l('Montilla-Moriles, Andalucía', 'Montilla-Moriles, Andalusia'),
        grape: 'Pedro Ximénez', year: 'Solera > 20 años', type: 'dulce',
        notes: l('Higo, café y regaliz negro. Denso como jarabe; media copa basta y sobra.',
                 'Fig, coffee and black liquorice. Syrup-dense — half a glass is plenty.'),
      },
      {
        glass: 12, name: 'Tawny 20 Años', producer: 'Quinta do Norte',
        region: l('Valle del Duero, Portugal', 'Douro Valley, Portugal'),
        grape: 'Touriga Nacional, Tinta Roriz', year: '20 años', type: 'generoso',
        notes: l('Nuez, naranja confitada y caramelo salado. Oxidativo, cálido, el punto final exacto.',
                 'Walnut, candied orange and salted caramel. Oxidative, warm — the exact full stop.'),
      },
    ],
  },
]

/** Flat list of all twelve wines, in serving order, for "La bodega". */
export const CELLAR: Wine[] = COURSES.flatMap(c => c.wines)
