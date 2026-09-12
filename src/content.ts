// Única fuente de verdad del negocio. Datos tomados de Google Maps
// (ver /data/place.json y /data/ficha.md) el 12 de septiembre de 2026,
// más el enlace de Instagram aportado directamente por el cliente
// (ver /data/contacto.json).

export const content = {
  name: 'Kaffeina Brunch & Specialty Coffee - El Carmen',
  shortName: 'Kaffeina',
  tagline: 'Brunch y café de especialidad en El Carmen, Valencia',
  description:
    'Kaffeina Brunch & Specialty Coffee es un local de brunch y café de especialidad en pleno barrio de El Carmen, en Valencia. Su carta reúne bagels, tostas y platos preparados con producto fresco, opciones sin gluten y vegetarianas, además de una selección de café de especialidad y bebidas con y sin alcohol. Su vitrina de repostería propia, con alfajores, tarta de zanahoria y dulces de temporada, es uno de sus puntos fuertes. Cuenta también con terraza y un ambiente cuidado, ideal para desayunar con calma o compartir un brunch entre amigos.',
  metaDescription:
    'Brunch y café de especialidad en El Carmen, Valencia. Bagels, tostas y repostería propia, opciones sin gluten y terraza en un ambiente acogedor.',
  keywords: [
    'Kaffeina',
    'El Carmen Valencia',
    'brunch Valencia',
    'café de especialidad',
    'bagels Valencia',
    'desayunos Valencia',
    'brunch cerca de mí',
    'terraza El Carmen',
  ],
  priceRange: '10 € - 20 €',
  priceRangeDisplay: '10 € – 20 € por persona',
  cuisine: 'Brunch y café de especialidad',

  rating: { value: 4.4, count: 801, countDisplay: '801 reseñas' },
  highlights: [
    'Amplia carta de brunch con opciones sin gluten y platos elaborados con producto fresco.',
    'Repostería propia: alfajores, tarta de zanahoria y dulces de temporada hechos en casa.',
    'Selección de café de especialidad junto con bebidas con y sin alcohol.',
    'Terraza y ambiente acogedor en El Carmen, apto para niños y para ir con el perro.',
  ],

  address: {
    streetAddress: 'Carrer del Mur de Santa Anna, 4',
    addressLocality: 'València',
    addressRegion: 'Valencia',
    postalCode: '46003',
    addressCountry: 'ES',
    full: 'C/ del Mur de Santa Anna, 4, Ciutat Vella, 46003 València, Valencia',
  },
  geo: { lat: 39.4783804, lng: -0.3746331 },

  phone: '+34 674 00 60 56',
  phoneDisplay: '674 00 60 56',
  whatsappNumber: '34674006056',
  email: '', // Pendiente: el cliente no facilitó correo de contacto

  siteUrl: 'https://samuelfagundez.github.io/kaffeina-brunch-y-specialty-coffee-el-carmen/',

  social: {
    instagram: 'https://www.instagram.com/kaffeinavalencia/',
    facebook: '', // Pendiente: el cliente no facilitó Facebook
    tiktok: '', // Pendiente: el cliente no facilitó TikTok
    whatsapp: '',
  },

  hours: [
    { day: 'Lunes', hours: '8:00 – 20:00' },
    { day: 'Martes', hours: '8:00 – 20:00' },
    { day: 'Miércoles', hours: '8:00 – 20:00' },
    { day: 'Jueves', hours: '8:00 – 20:00' },
    { day: 'Viernes', hours: '8:00 – 20:00' },
    { day: 'Sábado', hours: '8:30 – 20:30' },
    { day: 'Domingo', hours: '8:30 – 20:30' },
  ],
  openingHoursSchema: [
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '20:00' },
    { dayOfWeek: ['Saturday', 'Sunday'], opens: '08:30', closes: '20:30' },
  ],

  gallery: [
    {
      src: '/gallery/kaffeina-el-carmen-fachada.jpg',
      alt: 'Fachada de Kaffeina Brunch & Specialty Coffee en El Carmen, Valencia',
    },
    {
      src: '/gallery/kaffeina-el-carmen-mesa-brunch.jpg',
      alt: 'Mesa con varios platos de brunch de Kaffeina: tosta de salmón, bowl y pancakes',
    },
    {
      src: '/gallery/kaffeina-el-carmen-bagel-salmon.jpg',
      alt: 'Bagel de salmón ahumado de Kaffeina Brunch & Specialty Coffee',
    },
    {
      src: '/gallery/kaffeina-el-carmen-bagel-bacon-huevo.jpg',
      alt: 'Bagel con bacon y huevo y zumo de naranja natural en Kaffeina',
    },
    {
      src: '/gallery/kaffeina-el-carmen-bowl-granola.jpg',
      alt: 'Bowl de granola con fruta fresca en Kaffeina Brunch & Specialty Coffee',
    },
    {
      src: '/gallery/kaffeina-el-carmen-cafe-especialidad.jpg',
      alt: 'Café de especialidad con dulces y alfajores en Kaffeina',
    },
    {
      src: '/gallery/kaffeina-el-carmen-croissants.jpg',
      alt: 'Croissants recién horneados en Kaffeina Brunch & Specialty Coffee',
    },
    {
      src: '/gallery/kaffeina-el-carmen-rollo-canela.jpg',
      alt: 'Rollo de canela con glaseado de Kaffeina Brunch & Specialty Coffee',
    },
    {
      src: '/gallery/kaffeina-el-carmen-vitrina-reposteria.jpg',
      alt: 'Vitrina de repostería propia de Kaffeina: alfajores, tartaletas y tarta de zanahoria',
    },
    {
      src: '/gallery/kaffeina-el-carmen-tarta-chocolate.jpg',
      alt: 'Tarta de chocolate con caramelo de la repostería de Kaffeina',
    },
  ],

  mapEmbedSrc:
    'https://www.google.com/maps?q=' +
    encodeURIComponent(
      'Kaffeina Brunch & Specialty Coffee, Carrer del Mur de Santa Anna 4, 46003 València',
    ) +
    '&hl=es&z=16&output=embed',
  mapLinkUrl:
    'https://maps.google.com/?cid=5287694335295277348&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA',
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_CONTACT_MESSAGE =
  '¡Hola! Vengo de la página web de Kaffeina y tengo una consulta.'
export const WHATSAPP_RESERVE_MESSAGE =
  '¡Hola! Vengo de la página web de Kaffeina y me gustaría hacer una reserva.'

// Sin sistema de reservas propio: cae siempre a WhatsApp.
export const reservationLink = ''

export function contactHref(): string {
  return whatsappLink(WHATSAPP_CONTACT_MESSAGE)
}

export function reservationHref(): string {
  return reservationLink || whatsappLink(WHATSAPP_RESERVE_MESSAGE)
}
