export type CaseStatus = 'open' | 'solved' | 'cold'
export type EffectType = 'rain' | 'heavy_rain' | 'embers' | 'sparks' | 'dust' | 'fog' | 'stars'

export interface Suspect {
  name: string
  role: string
  motive?: string
  alibi?: string
  guilty: boolean
}

export interface Clue {
  id: string
  category: 'escena' | 'testigos' | 'pruebas'
  title: string
  body: string
  points: number
}

export interface TimelineEvent {
  time: string
  event: string
  key?: boolean
}

export interface Case {
  id: number
  slug: string
  title: string
  subtitle: string
  location: string
  date: string
  year: number
  status: CaseStatus
  color: string            // --ca accent
  effect: EffectType       // intro particle effect
  policeLight: boolean
  tags: string[]
  victim: string
  victimAge?: number
  heroDesc: string         // short paragraph for hero
  briefing: string         // full briefing text
  keyEvidence: string      // single killer clue label
  narration: string        // Web Speech text
  introSeq: { at: number; t: string; txt: string }[]
  timeline: TimelineEvent[]
  suspects: Suspect[]
  clues: Clue[]
  related: number[]        // ids of related cases
}

const CASES: Case[] = [
  {
    id: 0,
    slug: 'doce-minutos',
    title: 'Doce Minutos',
    subtitle: 'El rider que tardó demasiado',
    location: 'Sevilla',
    date: '15 mayo 2023',
    year: 2023,
    status: 'open',
    color: '#d44020',
    effect: 'rain',
    policeLight: true,
    tags: ['Homicidio', 'Tecnología', 'Testigos'],
    victim: 'Javier Mora',
    victimAge: 34,
    heroDesc: 'Un rider de reparto tarda 12 minutos en subir al cuarto piso. Nadie debería tardar 12 minutos. Lo encontraron en el garaje. Había grabado algo con el móvil.',
    briefing: 'El 15 de mayo de 2023, Javier Mora, repartidor de 34 años, fue enviado a entregar un pedido a un edificio del barrio de Triana. El portero automático registra su entrada a las 23:47. Las cámaras del ascensor lo pierden en el cuarto piso. A las 00:01, un vecino encuentra el cuerpo en el garaje. El móvil de Javier había grabado algo antes de caer. La pantalla estaba rota, pero la memoria estaba intacta.',
    keyEvidence: 'Vídeo en el móvil',
    narration: 'Sevilla, 2023. Un rider entra en un edificio. Doce minutos después cae al vacío. Hay un vídeo en su móvil. Alguien quiere que desaparezca.',
    introSeq: [
      { at: 0,    t: 'stamp',    txt: 'EXPEDIENTE CLASIFICADO' },
      { at: 1500, t: 'location', txt: '🛵  SEVILLA  ·  15 MAYO 2023  ·  23:47' },
      { at: 3000, t: 'victim',   txt: 'Javier Mora' },
      { at: 4000, t: 'fact',     txt: 'RIDER · 34 AÑOS · CUARTO PISO' },
      { at: 5400, t: 'evidence', txt: 'PRUEBA CLAVE: VÍDEO EN EL MÓVIL' },
      { at: 7000, t: 'tagline',  txt: '"Nadie debería tardar doce minutos"' },
    ],
    timeline: [
      { time: '23:47', event: 'Javier accede al edificio. Portero automático registra entrada.' },
      { time: '23:49', event: 'Ascensor llega al cuarto piso. Cámara pierde la señal.' },
      { time: '23:52', event: 'Vecino del tercero escucha pasos y voces en el piso de arriba.' },
      { time: '00:01', event: 'Cuerpo encontrado en el garaje. Móvil roto, memoria intacta.', key: true },
      { time: '00:15', event: 'Policía llega al edificio. Cuarto piso: puerta entreabierta.' },
      { time: '00:48', event: 'Se recupera el vídeo del móvil. Duración: 43 segundos.' },
    ],
    suspects: [
      { name: 'Adrián Reyes', role: 'Inquilino 4ºA', motive: 'Deuda de juego con la víctima', alibi: 'Dice estar durmiendo', guilty: false },
      { name: 'Lorena Vidal', role: 'Propietaria del piso', motive: 'El rider sabía algo sobre el alquiler ilegal', alibi: 'Estaba en Málaga, ticket de hotel', guilty: true },
      { name: 'Iván Suárez', role: 'Portero del edificio', motive: 'Conflicto previo por una entrega', alibi: 'En la garita, visto por vecinos', guilty: false },
    ],
    clues: [
      { id: 'c0-1', category: 'escena', title: 'Marca en la barandilla', body: 'Marca de agarre reciente en la barandilla del cuarto piso. Orientación inusual, hacia afuera.', points: 150 },
      { id: 'c0-2', category: 'escena', title: 'Cámara del ascensor', body: 'La cámara fue desconectada manualmente entre las 23:48 y las 23:55. El técnico tiene la clave.', points: 200 },
      { id: 'c0-3', category: 'testigos', title: 'Testimonio del vecino', body: 'El vecino del tercero jura haber oído una conversación acalorada. Reconocería la voz de una mujer.', points: 150 },
      { id: 'c0-4', category: 'testigos', title: 'Repartidor anterior', body: 'Otro rider dice que la misma dirección le pareció "rara" la semana pasada. La propietaria le bloqueó el número.', points: 100 },
      { id: 'c0-5', category: 'pruebas', title: 'Vídeo del móvil', body: 'Los últimos 43 segundos grabados. Se ve una silueta femenina, ropa oscura, en el rellano del cuarto.', points: 300 },
      { id: 'c0-6', category: 'pruebas', title: 'Historial de mensajes', body: 'Mensajes borrados recuperados. La propietaria amenazó a Javier tres días antes: "No vuelvas a llamar o te arrepentirás."', points: 300 },
    ],
    related: [5, 3],
  },
  {
    id: 1,
    slug: 'caso-asunta',
    title: 'El Caso Asunta',
    subtitle: 'La niña de la sonrisa',
    location: 'Santiago de Compostela',
    date: 'Septiembre 2013',
    year: 2013,
    status: 'solved',
    color: '#4a7ab5',
    effect: 'heavy_rain',
    policeLight: false,
    tags: ['Parricidio', 'Intoxicación', 'Familia'],
    victim: 'Asunta Basterra Porto',
    victimAge: 12,
    heroDesc: 'Asunta Basterra Porto, 12 años. Adoptada de China. Encontrada muerta envuelta en una manta en un camino de tierra. Sus padres dieron la alarma.',
    briefing: 'El 21 de septiembre de 2013, el cuerpo de Asunta Basterra, de 12 años, fue encontrado en un camino rural de As Galanas. Adoptada por una pareja de clase media-alta de Santiago, su muerte inicial parecía un accidente. La autopsia reveló altos niveles de lorazepam, un sedante, en sangre. Sus padres, Alfonso Basterra y Rosario Porto, dieron la alarma y fueron los primeros en declarar. Semanas después, ambos fueron detenidos.',
    keyEvidence: 'Lorazepam en sangre',
    narration: 'Santiago de Compostela, 2013. Una niña de doce años. Encontrada muerta en un camino de tierra. Sus padres dieron la alarma. Sus padres la llevaron allí.',
    introSeq: [
      { at: 0,    t: 'stamp',    txt: 'EXPEDIENTE CLASIFICADO' },
      { at: 1500, t: 'location', txt: '🏡  SANTIAGO DE COMPOSTELA  ·  SEPTIEMBRE 2013' },
      { at: 3000, t: 'victim',   txt: 'Asunta Basterra Porto' },
      { at: 4000, t: 'fact',     txt: '12 AÑOS · ADOPTADA · ENVUELTA EN UNA MANTA' },
      { at: 5400, t: 'evidence', txt: 'PRUEBA CLAVE: LORAZEPAM EN SANGRE' },
      { at: 7000, t: 'tagline',  txt: '"Sus padres dieron la alarma"' },
    ],
    timeline: [
      { time: '21 Sep · 23:00', event: 'Rosario Porto llama a emergencias. Reporta desaparición.' },
      { time: '22 Sep · 00:30', event: 'Cuerpo de Asunta encontrado en camino rural de As Galanas.', key: true },
      { time: '22 Sep · 08:00', event: 'Autopsia provisional: sin signos externos de violencia.' },
      { time: '25 Sep',         event: 'Toxicología confirma lorazepam en dosis letales.' },
      { time: '15 Oct',         event: 'Alfonso Basterra y Rosario Porto detenidos.', key: true },
      { time: '2015',           event: 'Condena a 18 años para ambos progenitores.' },
    ],
    suspects: [
      { name: 'Alfonso Basterra', role: 'Padre adoptivo', motive: 'Conflicto en proceso de separación', alibi: 'Casa familiar — no verificable', guilty: true },
      { name: 'Rosario Porto',    role: 'Madre adoptiva', motive: 'Asunta como motivo de disputa en divorcio', alibi: 'Casa familiar — no verificable', guilty: true },
      { name: 'Vecina del barrio', role: 'Testigo',        motive: 'Ninguno', alibi: 'Vio el coche familiar esa noche', guilty: false },
    ],
    clues: [
      { id: 'c1-1', category: 'escena', title: 'Manta inusual',   body: 'La manta que envolvía el cuerpo fue identificada como de la casa familiar. Fibras encontradas en el maletero.', points: 200 },
      { id: 'c1-2', category: 'escena', title: 'Camino privado',  body: 'El camino donde fue encontrada es poco conocido. Solo los vecinos de la zona lo usan habitualmente.', points: 150 },
      { id: 'c1-3', category: 'testigos', title: 'Vecina a las 22h', body: 'Una vecina vio el coche familiar a 2 km del lugar donde fue hallado el cuerpo, a las 22:15.', points: 200 },
      { id: 'c1-4', category: 'pruebas', title: 'Historial médico', body: 'Asunta había sido llevada al médico con somnolencia recurrente. El médico no registró la causa.', points: 150 },
      { id: 'c1-5', category: 'pruebas', title: 'Lorazepam en casa', body: 'Caja de lorazepam con pastillas faltantes encontrada en el armario de Rosario Porto.', points: 300 },
    ],
    related: [7, 4],
  },
  {
    id: 2,
    slug: 'herencia-balmaseda',
    title: 'La Herencia de los Balmaseda',
    subtitle: 'El veneno de los millones',
    location: 'Salamanca',
    date: '3 noviembre 2021',
    year: 2021,
    status: 'open',
    color: '#b8860b',
    effect: 'dust',
    policeLight: false,
    tags: ['Envenenamiento', 'Herencia', 'Familia'],
    victim: 'Rodrigo Balmaseda',
    victimAge: 78,
    heroDesc: 'Un anciano millonario muere la noche después de firmar un nuevo testamento. Tres herederos. Un médico con secretos. Un veneno en su propia medicación.',
    briefing: 'Rodrigo Balmaseda, magnate de la construcción, fue encontrado muerto a las 03:12 del 3 de noviembre de 2021, en su finca de Salamanca. La noche anterior había firmado un nuevo testamento ante notario, modificando el reparto de su fortuna. El médico de cabecera firmó el certificado de defunción por causas naturales. Fue la hija menor quien solicitó la exhumación tres semanas después.',
    keyEvidence: 'Veneno en la medicación',
    narration: 'Salamanca, 2021. Un millonario muere la noche después de cambiar su testamento. Tres herederos. Un médico con secretos. El veneno estaba en su medicación.',
    introSeq: [
      { at: 0,    t: 'stamp',    txt: 'EXPEDIENTE CLASIFICADO' },
      { at: 1500, t: 'location', txt: '🏛️  SALAMANCA  ·  3 NOV 2021  ·  03:12' },
      { at: 3000, t: 'victim',   txt: 'Rodrigo Balmaseda' },
      { at: 4000, t: 'fact',     txt: 'MAGNATE · 78 AÑOS · NUEVO TESTAMENTO' },
      { at: 5400, t: 'evidence', txt: 'PRUEBA CLAVE: VENENO EN LA MEDICACIÓN' },
      { at: 7000, t: 'tagline',  txt: '"Tres herederos. Uno de ellos mintió."' },
    ],
    timeline: [
      { time: '2 Nov · 17:00', event: 'Notario acude a la finca. Nuevo testamento firmado.' },
      { time: '2 Nov · 22:00', event: 'Rodrigo cena con los tres herederos en la finca.' },
      { time: '3 Nov · 01:30', event: 'Rodrigo se retira a su cuarto. Último en verle vivo: el heredero mayor.' },
      { time: '3 Nov · 03:12', event: 'Empleada de hogar encuentra a Rodrigo sin vida.', key: true },
      { time: '3 Nov · 08:00', event: 'Médico firma defunción por causas cardiacas.' },
      { time: '24 Nov',        event: 'Exhumación solicitada. Toxicología: digoxina en dosis letales.', key: true },
    ],
    suspects: [
      { name: 'Fernando Balmaseda', role: 'Hijo mayor', motive: 'El nuevo testamento le dejaba la mitad de su parte previa', alibi: 'Dice estar en su habitación', guilty: true },
      { name: 'Miriam Balmaseda',   role: 'Hija menor', motive: 'Ninguno — solicitó la exhumación', alibi: 'En Madrid, verificado', guilty: false },
      { name: 'Dr. Héctor Salas',   role: 'Médico de cabecera', motive: 'Deuda económica con Fernando', alibi: 'Llamada de emergencia a las 6:00', guilty: false },
    ],
    clues: [
      { id: 'c2-1', category: 'escena', title: 'Caja de pastillas',  body: 'El pastillero de Rodrigo tenía cuatro comprimidos de más. La dosis diaria no cuadra.', points: 200 },
      { id: 'c2-2', category: 'escena', title: 'Copa de vino',       body: 'La copa de vino de Rodrigo tenía residuos de digoxina. Ningún médico la había prescrito.', points: 300 },
      { id: 'c2-3', category: 'testigos', title: 'La empleada',      body: 'La empleada de hogar oyó una discusión entre Rodrigo y Fernando la tarde anterior a la muerte.', points: 150 },
      { id: 'c2-4', category: 'pruebas', title: 'Historial de búsquedas', body: 'El portátil de Fernando: búsquedas de "digoxina dosis letal" dos semanas antes del fallecimiento.', points: 300 },
    ],
    related: [4, 6],
  },
  {
    id: 3,
    slug: 'diana-quer',
    title: 'Diana Quer',
    subtitle: 'Dieciséis meses en el silencio',
    location: 'A Pobra do Caramiñal',
    date: '22 agosto 2016',
    year: 2016,
    status: 'solved',
    color: '#1a8a7a',
    effect: 'rain',
    policeLight: true,
    tags: ['Secuestro', 'Desaparición', 'Asesinato'],
    victim: 'Diana Quer López-Pinel',
    victimAge: 18,
    heroDesc: '18 años. Desaparece de madrugada en un pueblo costero de Galicia. Su cuerpo no aparecerá hasta 16 meses después en el interior de un pozo.',
    briefing: 'La noche del 22 de agosto de 2016, Diana Quer, de 18 años, salió de una discoteca de A Pobra do Caramiñal y desapareció. Dieciséis meses después, el 31 de diciembre de 2017, su cuerpo fue encontrado en el interior de un pozo en Rianxo. José Enrique Abuín Gey, alias "El Chicle", fue identificado gracias a un chip SIM de Diana hallado en el interior de su coche.',
    keyEvidence: 'Chip SIM en el coche del detenido',
    narration: 'A Pobra do Caramiñal, 2016. Dieciocho años. Sale de madrugada y no vuelve. Su cuerpo no aparecerá hasta dieciséis meses después, en el interior de un pozo.',
    introSeq: [
      { at: 0,    t: 'stamp',    txt: 'EXPEDIENTE CLASIFICADO' },
      { at: 1500, t: 'location', txt: '🌊  A POBRA DO CARAMIÑAL  ·  22 AGO 2016  ·  04:30' },
      { at: 3000, t: 'victim',   txt: 'Diana Quer López-Pinel' },
      { at: 4000, t: 'fact',     txt: '18 AÑOS · DESAPARECIDA DE MADRUGADA' },
      { at: 5400, t: 'evidence', txt: 'PRUEBA CLAVE: CHIP SIM EN EL COCHE' },
      { at: 7000, t: 'tagline',  txt: '"Dieciséis meses. Dos metros de agua."' },
    ],
    timeline: [
      { time: '22 Ago 04:30', event: 'Diana sale de la discoteca O Castelo sola. Última imagen en cámara.' },
      { time: '22 Ago 05:00', event: 'La familia reporta su desaparición. Búsqueda iniciada.', key: true },
      { time: 'Sep–Nov 2016', event: 'Rastreos exhaustivos. Sin resultados.' },
      { time: '31 Dic 2017',  event: 'Cuerpo encontrado en pozo de Rianxo por un pescador.', key: true },
      { time: '2 Ene 2018',   event: 'Chip SIM de Diana localizado en vehículo de "El Chicle".', key: true },
      { time: 'Feb 2018',     event: 'José Enrique Abuín Gey detenido y condenado a 50 años.' },
    ],
    suspects: [
      { name: 'José E. Abuín "El Chicle"', role: 'Vecino de la zona', motive: 'Agresión sexual frustrada', alibi: 'Sin coartada verificable', guilty: true },
      { name: 'Amigo de la discoteca',     role: 'Último en verla', motive: 'Ninguno confirmado', alibi: 'Testigos en la discoteca', guilty: false },
    ],
    clues: [
      { id: 'c3-1', category: 'escena', title: 'Cámara de la discoteca', body: 'Diana camina sola por la calle del puerto. Un vehículo la sigue a baja velocidad.', points: 200 },
      { id: 'c3-2', category: 'pruebas', title: 'Chip SIM', body: 'El chip de la tarjeta de teléfono de Diana fue encontrado bajo el asiento del conductor del coche de Abuín.', points: 400 },
      { id: 'c3-3', category: 'pruebas', title: 'ADN en el pozo', body: 'Restos biológicos de Abuín en las paredes del pozo confirman que transportó el cuerpo.', points: 400 },
    ],
    related: [5, 8],
  },
  {
    id: 4,
    slug: 'profesora-cuenca',
    title: 'La Profesora de Cuenca',
    subtitle: 'El campanario del silencio',
    location: 'Cuenca',
    date: '17 octubre 2020',
    year: 2020,
    status: 'open',
    color: '#8b7014',
    effect: 'dust',
    policeLight: false,
    tags: ['Plagio', 'Academia', 'Caída'],
    victim: 'Dra. Carmen Vidal',
    heroDesc: 'Una historiadora cae desde el campanario de un monasterio. En sus notas, una palabra subrayada tres veces: PLAGIO. Su colega de investigación estaba en el edificio esa noche.',
    briefing: 'La noche del 17 de octubre de 2020, la doctora Carmen Vidal fue encontrada muerta al pie del campanario del Monasterio de San Julián, en Cuenca. La caída se clasificó inicialmente como accidental. Pero sus cuadernos de investigación, recuperados días después, contenían la palabra "PLAGIO" subrayada tres veces y el nombre de un colega. El conserje del monasterio confirmó que esa noche había dos personas en el edificio.',
    keyEvidence: '"PLAGIO" subrayado tres veces',
    narration: 'Cuenca, 2020. Una historiadora cae desde el campanario de un monasterio. En sus notas, una palabra subrayada tres veces. Plagio. Su colega estaba en el edificio esa noche.',
    introSeq: [
      { at: 0,    t: 'stamp',    txt: 'EXPEDIENTE CLASIFICADO' },
      { at: 1500, t: 'location', txt: '⛪  CUENCA  ·  17 OCT 2020  ·  22:58' },
      { at: 3000, t: 'victim',   txt: 'Dra. Carmen Vidal' },
      { at: 4000, t: 'fact',     txt: 'HISTORIADORA · CAMPANARIO · CAÍDA MORTAL' },
      { at: 5400, t: 'evidence', txt: 'PRUEBA CLAVE: "PLAGIO" SUBRAYADO 3 VECES' },
      { at: 7000, t: 'tagline',  txt: '"El conocimiento puede ser mortal"' },
    ],
    timeline: [
      { time: '20:00', event: 'Carmen accede al monasterio. Dice al conserje que trabajará hasta tarde.' },
      { time: '21:30', event: 'Conserje oye pasos en la escalera del campanario. Dos personas.' },
      { time: '22:58', event: 'Cuerpo de Carmen encontrado al pie del campanario.', key: true },
      { time: '23:10', event: 'Policía llega. Campanario registrado: cuadernos de Carmen, uno abierto.' },
      { time: 'Días después', event: 'En los cuadernos: "PLAGIO" y el nombre del Dr. Ruiz Herrero.', key: true },
    ],
    suspects: [
      { name: 'Dr. Marcos Ruiz Herrero', role: 'Colega de investigación', motive: 'Carmen descubrió que había plagiado su tesis doctoral', alibi: 'Niega estar en el monasterio', guilty: true },
      { name: 'Conserje del monasterio', role: 'Empleado', motive: 'Ninguno aparente', alibi: 'En la garita, cámara lo confirma', guilty: false },
    ],
    clues: [
      { id: 'c4-1', category: 'escena',    title: 'Cuadernos abiertos',  body: '"PLAGIO" subrayado con fuerza tres veces. El nombre debajo: Dr. Ruiz Herrero.', points: 300 },
      { id: 'c4-2', category: 'escena',    title: 'Huella en la balaustrada', body: 'Huella de zapato masculino, talla 44, en el borde exterior de la balaustrada.', points: 250 },
      { id: 'c4-3', category: 'testigos',  title: 'El conserje',         body: 'Oyó dos voces. Una femenina, otra masculina, discutiendo acaloradamente.', points: 200 },
      { id: 'c4-4', category: 'pruebas',   title: 'Email de amenaza',    body: 'Email de Ruiz Herrero a Carmen: "Si publicas eso, las consecuencias serán tuyas."', points: 350 },
    ],
    related: [2, 6],
  },
  {
    id: 5,
    slug: 'marta-del-castillo',
    title: 'Marta del Castillo',
    subtitle: 'El cuerpo que nadie encontró',
    location: 'Sevilla',
    date: '24 enero 2009',
    year: 2009,
    status: 'cold',
    color: '#7a3aaa',
    effect: 'sparks',
    policeLight: true,
    tags: ['Desaparición', 'Asesinato', 'Sin resolver'],
    victim: 'Marta del Castillo Carrasco',
    victimAge: 17,
    heroDesc: '17 años. El asesino confesó. Nunca dijo dónde está el cuerpo. Sus padres siguen buscando más de 15 años después.',
    briefing: 'El 24 de enero de 2009, Marta del Castillo, de 17 años, desapareció en Sevilla. Miguel Carcaño confesó haberla matado y haber arrojado el cuerpo al río Guadalquivir. Sin embargo, el cuerpo nunca fue encontrado. A lo largo de los años, Carcaño dio cinco versiones distintas sobre el paradero de los restos. Sus padres continúan buscando. Sigue siendo uno de los casos más dolorosos de España.',
    keyEvidence: 'Confesión sin localización del cuerpo',
    narration: 'Sevilla, 2009. Diecisiete años. El asesino confesó todo. Nunca dijo dónde está el cuerpo. Sus padres siguen buscando más de quince años después.',
    introSeq: [
      { at: 0,    t: 'stamp',    txt: 'EXPEDIENTE CLASIFICADO' },
      { at: 1500, t: 'location', txt: '🌆  SEVILLA  ·  24 ENERO 2009  ·  NOCHE' },
      { at: 3000, t: 'victim',   txt: 'Marta del Castillo Carrasco' },
      { at: 4000, t: 'fact',     txt: '17 AÑOS · EL CUERPO NUNCA APARECIÓ' },
      { at: 5400, t: 'evidence', txt: 'PRUEBA CLAVE: CONFESIÓN SIN LOCALIZACIÓN' },
      { at: 7000, t: 'tagline',  txt: '"Confesó todo. Menos lo único que importa."' },
    ],
    timeline: [
      { time: '24 Ene · noche', event: 'Marta sale del domicilio de Miguel Carcaño. Nunca regresa.', key: true },
      { time: '25 Ene',         event: 'La familia denuncia su desaparición.' },
      { time: 'Feb 2009',       event: 'Carcaño confesó el crimen. Primera versión: río Guadalquivir.', key: true },
      { time: '2009–2023',      event: 'Cuatro versiones más. Cinco rastreos. Cuerpo no encontrado.' },
      { time: '2023',           event: 'Los padres de Marta siguen solicitando nuevas investigaciones.' },
    ],
    suspects: [
      { name: 'Miguel Carcaño', role: 'Expareja', motive: 'Discusión violenta', alibi: 'Ninguno', guilty: true },
    ],
    clues: [
      { id: 'c5-1', category: 'pruebas',  title: 'Primera confesión',   body: 'Carcaño indicó el Guadalquivir. Rastreo exhaustivo sin resultado.', points: 150 },
      { id: 'c5-2', category: 'pruebas',  title: 'Versiones cambiantes', body: 'En total, cinco versiones distintas del paradero del cuerpo. Ninguna verificada.', points: 200 },
      { id: 'c5-3', category: 'testigos', title: 'Cómplice implicado',  body: 'Un amigo de Carcaño fue condenado por colaborar en la ocultación del cuerpo.', points: 250 },
    ],
    related: [0, 3],
  },
  {
    id: 6,
    slug: 'violinista-gracia',
    title: 'El Violinista de Gracia',
    subtitle: 'La nota final',
    location: 'Barcelona',
    date: '8 marzo 2019',
    year: 2019,
    status: 'open',
    color: '#d4820a',
    effect: 'sparks',
    policeLight: false,
    tags: ['Envenenamiento', 'Arte', 'Celos'],
    victim: 'Marc Esteve Puig',
    heroDesc: 'Un violinista de fama nacional muere en su apartamento. Aparente infarto. Pero hay una marca de punción que nadie vio venir.',
    briefing: 'El 8 de marzo de 2019, Marc Esteve Puig, primer violín de la Orquesta Sinfónica de Barcelona, fue encontrado muerto en su apartamento del barrio de Gracia. La muerte fue certificada como paro cardiaco. Tres semanas después, su representante descubrió una marca de punción en el cuello que el forense inicial había pasado por alto. El nivel de succinilcolina en los tejidos fue determinante.',
    keyEvidence: 'Marca de punción con succinilcolina',
    narration: 'Barcelona, 2019. Un violinista de fama nacional muere en su apartamento. Aparente infarto. Pero hay una marca de punción que nadie vio a tiempo.',
    introSeq: [
      { at: 0,    t: 'stamp',    txt: 'EXPEDIENTE CLASIFICADO' },
      { at: 1500, t: 'location', txt: '🎻  BARCELONA  ·  8 MAR 2019  ·  02:44' },
      { at: 3000, t: 'victim',   txt: 'Marc Esteve Puig' },
      { at: 4000, t: 'fact',     txt: 'VIOLINISTA DE FAMA NACIONAL · SUPUESTO INFARTO' },
      { at: 5400, t: 'evidence', txt: 'PRUEBA CLAVE: SUCCINILCOLINA EN TEJIDOS' },
      { at: 7000, t: 'tagline',  txt: '"La música no fue lo último que escuchó"' },
    ],
    timeline: [
      { time: '7 Mar · 23:00', event: 'Última actuación en el Palau de la Música. Aplausos de pie.' },
      { time: '8 Mar · 01:30', event: 'Marc llega a casa. Vecino lo ve entrar solo.' },
      { time: '8 Mar · 02:44', event: 'Vecino llama a emergencias por silencio prolongado. Marc hallado sin vida.', key: true },
      { time: '9 Mar',         event: 'Forense certifica paro cardiaco. Caso cerrado.' },
      { time: '29 Mar',        event: 'Representante descubre marca de punción. Caso reabierto.', key: true },
      { time: 'Abr 2019',      event: 'Toxicología: succinilcolina, paralizante muscular, en tejidos.' },
    ],
    suspects: [
      { name: 'Jordi Puigdomènech', role: 'Segundo violín — rival', motive: 'Marc tenía el puesto que Jordi codiciaba', alibi: 'Dice estar en casa', guilty: true },
      { name: 'Marta Sáenz',       role: 'Representante', motive: 'Conflicto contractual', alibi: 'Cena con clientes, verificada', guilty: false },
    ],
    clues: [
      { id: 'c6-1', category: 'escena',   title: 'Marca de punción',   body: 'En el cuello, lado derecho. Compatible con jeringuilla de calibre fino.', points: 300 },
      { id: 'c6-2', category: 'pruebas',  title: 'Succinilcolina',     body: 'Paralizante muscular de uso hospitalario. Desaparece rápido. Detectada en tejido muscular profundo.', points: 400 },
      { id: 'c6-3', category: 'testigos', title: 'Técnico de sonido',  body: 'Vio a Jordi hablar con Marc en el camerino. La conversación terminó de forma tensa.', points: 200 },
      { id: 'c6-4', category: 'pruebas',  title: 'Compra online',      body: 'IP de Jordi: compra de succinilcolina en proveedor químico ilegal, 3 semanas antes.', points: 400 },
    ],
    related: [2, 4],
  },
  {
    id: 7,
    slug: 'caso-breton',
    title: 'El Caso Bretón',
    subtitle: 'Las cámaras no mienten',
    location: 'Córdoba',
    date: '8 octubre 2011',
    year: 2011,
    status: 'solved',
    color: '#cc3010',
    effect: 'embers',
    policeLight: true,
    tags: ['Parricidio', 'Menores', 'Incendio'],
    victim: 'Ruth y José Bretón',
    heroDesc: 'Ruth, 6 años. José, 2 años. Desaparecen con su padre en un parque. Las cámaras registran que nunca salieron.',
    briefing: 'El 8 de octubre de 2011, José Bretón llevó a sus hijos Ruth y José, de 6 y 2 años, a la Finca Vista Alegre en Córdoba. Dijo que desaparecieron mientras los vigilaba. Pero las cámaras de seguridad demostraron que ningún niño salió del recinto. Meses después, se encontraron restos óseos calcinados en la finca. La ex mujer de Bretón, Ruth Ortiz, ha luchado durante años por conocer la verdad completa.',
    keyEvidence: 'Ningún niño salió del parque (cámaras)',
    narration: 'Córdoba, 2011. Ruth, seis años. José, dos años. Desaparecen con su padre en un parque. Las cámaras registran que nunca salieron.',
    introSeq: [
      { at: 0,    t: 'stamp',    txt: 'EXPEDIENTE CLASIFICADO' },
      { at: 1500, t: 'location', txt: '🌳  CÓRDOBA  ·  8 OCT 2011  ·  TARDE' },
      { at: 3000, t: 'victim',   txt: 'Ruth y José Bretón' },
      { at: 4000, t: 'fact',     txt: '6 Y 2 AÑOS · PARQUE FINCA VISTA ALEGRE' },
      { at: 5400, t: 'evidence', txt: 'PRUEBA CLAVE: NUNCA SALIERON DEL PARQUE' },
      { at: 7000, t: 'tagline',  txt: '"El padre dio la alarma. El padre los vio por última vez."' },
    ],
    timeline: [
      { time: '8 Oct · 17:30', event: 'José Bretón lleva a los niños a Finca Vista Alegre.' },
      { time: '8 Oct · 20:00', event: 'José llama a emergencias. Dice que los niños desaparecieron.' },
      { time: '8 Oct · 20:30', event: 'Policía revisa grabaciones: ningún niño salió del recinto.', key: true },
      { time: 'Nov 2011',      event: 'Restos óseos calcinados encontrados dentro de la finca.', key: true },
      { time: '2012',          event: 'Identificación genética confirma que son Ruth y José.' },
      { time: '2013',          event: 'José Bretón condenado a 40 años.' },
    ],
    suspects: [
      { name: 'José Bretón', role: 'Padre', motive: 'Revancha contra su ex mujer en litigio de custodia', alibi: 'Ninguno válido', guilty: true },
    ],
    clues: [
      { id: 'c7-1', category: 'escena',   title: 'Cámaras de seguridad', body: '22 cámaras en el recinto. Ninguna registra a los niños saliendo. El padre sí.', points: 400 },
      { id: 'c7-2', category: 'pruebas',  title: 'Restos calcinados',    body: 'Restos óseos infantiles encontrados en zona de barbacoa de la finca. ADN confirmatorio.', points: 400 },
      { id: 'c7-3', category: 'testigos', title: 'Vecino de la finca',   body: 'Vio a Bretón encender una hoguera inusualmente grande esa tarde.', points: 250 },
    ],
    related: [1, 5],
  },
  {
    id: 8,
    slug: 'wanninkhof',
    title: 'Rocío Wanninkhof',
    subtitle: 'Cuando la justicia falló',
    location: 'Mijas, Málaga',
    date: 'Septiembre 1999',
    year: 1999,
    status: 'solved',
    color: '#2a9a4a',
    effect: 'stars',
    policeLight: false,
    tags: ['Error judicial', 'ADN', 'Reincidencia'],
    victim: 'Rocío Wanninkhof',
    victimAge: 19,
    heroDesc: '19 años. Una inocente pasa 17 meses en prisión. El verdadero asesino mata de nuevo antes de ser identificado.',
    briefing: 'Rocío Wanninkhof, de 19 años, desapareció en Mijas (Málaga) en septiembre de 1999. Condenada inicialmente su vecina Dolores Vázquez —basándose en indicios circunstanciales y sin ADN—, fue absuelta en 2002 gracias a un juicio popular. En 2003, un violador en serie, Tony Alexander King, mató a otra joven. El análisis de ADN vinculó a King con el asesinato de Rocío. Dolores había pasado 17 meses en prisión por un crimen que no cometió.',
    keyEvidence: 'ADN de Tony Alexander King',
    narration: 'Mijas, 1999. Diecinueve años. Una inocente pasa diecisiete meses en prisión. El verdadero asesino mata de nuevo antes de que lo identifiquen.',
    introSeq: [
      { at: 0,    t: 'stamp',    txt: 'EXPEDIENTE CLASIFICADO' },
      { at: 1500, t: 'location', txt: '🌊  MIJAS, MÁLAGA  ·  SEPTIEMBRE 1999  ·  NOCHE' },
      { at: 3000, t: 'victim',   txt: 'Rocío Wanninkhof' },
      { at: 4000, t: 'fact',     txt: '19 AÑOS · SISTEMA JUDICIAL FALLÓ' },
      { at: 5400, t: 'evidence', txt: 'PRUEBA CLAVE: ADN — SOSPECHOSA ERRÓNEA' },
      { at: 7000, t: 'tagline',  txt: '"La justicia llegó tarde. Demasiado tarde."' },
    ],
    timeline: [
      { time: 'Sep 1999',  event: 'Rocío Wanninkhof desaparece de Mijas. Búsqueda sin éxito.' },
      { time: 'Oct 1999',  event: 'Cuerpo de Rocío encontrado en campo. Causa: estrangulamiento.', key: true },
      { time: '2001',      event: 'Dolores Vázquez, vecina, juzgada y condenada sin ADN.' },
      { time: '2002',      event: 'Jurado popular absuelve a Dolores. Sale de prisión tras 17 meses.', key: true },
      { time: '2003',      event: 'Tony Alexander King asesina a Sonia Carabantes. ADN lo vincula a Rocío.', key: true },
      { time: '2006',      event: 'King condenado por ambos crímenes. Dolores exonerada oficialmente.' },
    ],
    suspects: [
      { name: 'Dolores Vázquez',     role: 'Vecina (condenada injustamente)', motive: 'Ninguno real', alibi: 'Sin coartada sólida — víctima del sistema', guilty: false },
      { name: 'Tony Alexander King', role: 'Agresor en serie', motive: 'Patrón de agresión sexual', alibi: 'Sin coartada', guilty: true },
    ],
    clues: [
      { id: 'c8-1', category: 'escena',   title: 'Escena del crimen',    body: 'Sin ADN en la primera investigación. Error forense crítico.', points: 200 },
      { id: 'c8-2', category: 'pruebas',  title: 'ADN de King en 2003',  body: 'Perfil genético en Sonia Carabantes coincide con muestra no identificada en caso Rocío.', points: 400 },
      { id: 'c8-3', category: 'testigos', title: 'Patrón de King',       body: 'Múltiples denuncias por agresión sexual en la zona. Ninguna investigada como perfil de asesino.', points: 250 },
    ],
    related: [3, 5],
  },
  {
    id: 9,
    slug: 'fotografo-puerto',
    title: 'El Fotógrafo del Puerto',
    subtitle: 'La foto definitiva',
    location: 'Valencia',
    date: '12 junio 2018',
    year: 2018,
    status: 'open',
    color: '#3a6aaa',
    effect: 'fog',
    policeLight: false,
    tags: ['Periodismo', 'Corrupción', 'Puerto'],
    victim: 'Laia Ferrer Montoya',
    heroDesc: 'Una fotógrafa documentalista dijo tener «la foto definitiva». Horas después estaba muerta en un almacén del puerto. La tarjeta de memoria había desaparecido.',
    briefing: 'Laia Ferrer Montoya, fotógrafa documentalista de 31 años, llevaba meses investigando movimientos de mercancía irregular en el Puerto de Valencia. El 12 de junio de 2018, envió un mensaje a su editora diciendo que tenía "la foto que lo cambia todo". Esa madrugada, su cuerpo fue encontrado en el almacén 14B. La tarjeta de memoria de su cámara había desaparecido. La cámara estaba intacta.',
    keyEvidence: 'Tarjeta de memoria desaparecida',
    narration: 'Valencia, 2018. Una fotógrafa documentalista tenía la foto definitiva. Horas después estaba muerta en un almacén del puerto. La tarjeta de memoria había desaparecido.',
    introSeq: [
      { at: 0,    t: 'stamp',    txt: 'EXPEDIENTE CLASIFICADO' },
      { at: 1500, t: 'location', txt: '🚢  VALENCIA  ·  12 JUN 2018  ·  03:20' },
      { at: 3000, t: 'victim',   txt: 'Laia Ferrer Montoya' },
      { at: 4000, t: 'fact',     txt: 'FOTÓGRAFA DOCUMENTALISTA · ALMACÉN 14B' },
      { at: 5400, t: 'evidence', txt: 'PRUEBA CLAVE: TARJETA DE MEMORIA ROBADA' },
      { at: 7000, t: 'tagline',  txt: '"Tenía la foto. Por eso murió."' },
    ],
    timeline: [
      { time: '12 Jun · 21:00', event: 'Laia envía mensaje a su editora: "Tengo la foto que lo cambia todo."' },
      { time: '12 Jun · 22:30', event: 'Entra al recinto portuario. El vigilante recuerda haberla visto.' },
      { time: '13 Jun · 03:20', event: 'Guardia de seguridad encuentra el cuerpo en almacén 14B.', key: true },
      { time: '13 Jun · 04:00', event: 'Policía: cámara en el suelo, tarjeta de memoria extraída.', key: true },
      { time: '13 Jun · 08:00', event: 'Se identifica al último operario que accedió al almacén.' },
    ],
    suspects: [
      { name: 'Emilio Ríos',      role: 'Supervisor del almacén', motive: 'Aparece en el registro de acceso esa noche', alibi: 'Dice estar en casa a las 22h', guilty: false },
      { name: 'Rafael Santamaría', role: 'Concejal de urbanismo', motive: 'Laia investigaba contratos del puerto relacionados con él', alibi: 'Acto oficial — verificado', guilty: true },
    ],
    clues: [
      { id: 'c9-1', category: 'escena',   title: 'Cámara sin tarjeta', body: 'La cámara Leica M10 de Laia estaba intacta. Solo faltaba la tarjeta CF.', points: 250 },
      { id: 'c9-2', category: 'escena',   title: 'Huella en almacén',  body: 'Huella de zapato en el polvo. Talla 43, suela de cuero, no operaria.', points: 300 },
      { id: 'c9-3', category: 'testigos', title: 'Mensaje de editora', body: 'Laia mencionó a Santamaría en una llamada anterior. "Es un pez gordo. Demasiado gordo."', points: 300 },
      { id: 'c9-4', category: 'pruebas',  title: 'Copia en la nube',   body: 'Laia hacía backup automático. La última foto se subió a las 21:55: un documento firmado por Santamaría.', points: 400 },
    ],
    related: [4, 6],
  },
]

export default CASES
export const getCaseBySlug = (slug: string) => CASES.find(c => c.slug === slug)
export const getCaseById   = (id: number)   => CASES.find(c => c.id === id)
