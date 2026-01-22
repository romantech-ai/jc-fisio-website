// ================================================
// CONFIGURACION CENTRALIZADA - JC FISIO
// Edita este archivo para personalizar todo el sitio
// ================================================

export const siteConfig = {
  // Informacion basica
  name: 'Clinica JC Fisio',
  shortName: 'JC Fisio',
  tagline: 'Recupera tu movilidad y bienestar',
  description: 'Clinica de fisioterapia en Tomelloso con 8 profesionales. Fisioterapia, nutricion, pilates, presoterapia y gimnasia pasiva.',

  // Contacto
  phone: '744 62 41 98',
  phoneClean: '+34744624198',
  whatsapp: '+34744624198',
  email: 'info@jcfisio.es',

  // Direccion
  address: {
    street: 'Paseo San Isidro 19, local 2',
    city: 'Tomelloso',
    postalCode: '13700',
    province: 'Ciudad Real',
    country: 'Espana',
    full: 'Paseo San Isidro 19, local 2, 13700 Tomelloso, Ciudad Real',
  },

  // Coordenadas para mapa
  coordinates: {
    lat: 39.1581,
    lng: -3.0236,
  },

  // URLs
  googleMapsUrl: 'https://maps.google.com/?q=Clinica+JC+Fisio+Tomelloso',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.123456789!2d-3.0236!3d39.1581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sClinica%20JC%20Fisio!5e0!3m2!1ses!2ses!4v1234567890',
  url: 'https://jcfisio.es',

  // Horarios
  schedule: {
    weekdays: '08:00 - 14:00 / 16:00 - 21:00',
    saturday: 'Cerrado',
    sunday: 'Cerrado',
  },

  // Redes sociales (si las tienen)
  social: {
    instagram: '',
    facebook: '',
    linkedin: '',
  },

  // SEO
  seo: {
    title: 'Clinica JC Fisio | Fisioterapia en Tomelloso',
    description: 'Clinica de fisioterapia en Tomelloso, Ciudad Real. Ofrecemos fisioterapia, nutricion, pilates, presoterapia y gimnasia pasiva. Equipo de 8 profesionales.',
    keywords: ['fisioterapia tomelloso', 'fisioterapeuta tomelloso', 'clinica fisioterapia ciudad real', 'nutricion tomelloso', 'pilates tomelloso'],
    ogImage: '/images/og-image.jpg',
  },

  // Colores (verde lima corporativo)
  colors: {
    primary: '#84cc16',
    primaryDark: '#65a30d',
    primaryLight: '#a3e635',
    accent: '#22c55e',
  },

  // Analytics (configurar con ID real del cliente)
  analytics: {
    gaId: '', // Ej: 'G-XXXXXXXXXX'
  },

  // Chatbot
  chatbot: {
    welcomeMessage: 'Hola! Soy el asistente virtual de Clinica JC Fisio. Puedo ayudarte a reservar cita, informarte sobre nuestros servicios o resolver tus dudas. Como puedo ayudarte?',
    quickReplies: [
      'Reservar cita',
      'Ver servicios',
      'Horarios y ubicacion',
      'Precios',
    ],
  },

  // Mensaje predeterminado de WhatsApp
  whatsappMessage: 'Hola! Me gustaria solicitar informacion sobre sus servicios de fisioterapia.',
}

// ================================================
// SERVICIOS
// ================================================

export const services = [
  {
    id: 'fisioterapia',
    title: 'Fisioterapia',
    shortDescription: 'Tratamientos personalizados para tu recuperacion',
    description: 'Tratamientos personalizados para lesiones deportivas, dolor de espalda, rehabilitacion postoperatoria, ecografia musculoesqueletica y puncion seca.',
    icon: 'activity',
    features: [
      'Lesiones deportivas',
      'Dolor de espalda',
      'Rehabilitacion',
      'Ecografia',
      'Puncion seca',
    ],
    highlighted: true,
  },
  {
    id: 'nutricion',
    title: 'Nutricion',
    shortDescription: 'Planes nutricionales personalizados',
    description: 'Planes nutricionales adaptados a tus objetivos de salud, perdida de peso, rendimiento deportivo o condiciones especificas.',
    icon: 'apple',
    features: [
      'Planes personalizados',
      'Perdida de peso',
      'Nutricion deportiva',
      'Intolerancias',
    ],
    highlighted: false,
  },
  {
    id: 'pilates',
    title: 'Pilates',
    shortDescription: 'Clases individuales y grupales',
    description: 'Clases de pilates individuales y grupales para mejorar tu postura, flexibilidad y fuerza del core.',
    icon: 'stretch',
    features: [
      'Clases individuales',
      'Clases grupales',
      'Mejora postural',
      'Flexibilidad',
    ],
    highlighted: false,
  },
  {
    id: 'presoterapia',
    title: 'Presoterapia',
    shortDescription: 'Mejora tu circulacion',
    description: 'Tratamiento de presoterapia para mejorar la circulacion sanguinea y linfatica, reducir retencion de liquidos y celulitis.',
    icon: 'waves',
    features: [
      'Mejora circulacion',
      'Reduce celulitis',
      'Piernas cansadas',
      'Post-ejercicio',
    ],
    highlighted: false,
  },
  {
    id: 'gimnasia-pasiva',
    title: 'Gimnasia Pasiva',
    shortDescription: 'Electroestimulacion muscular',
    description: 'Electroestimulacion muscular para tonificacion, recuperacion muscular y tratamiento del dolor.',
    icon: 'zap',
    features: [
      'Tonificacion',
      'Recuperacion',
      'Sin esfuerzo',
      'Resultados rapidos',
    ],
    highlighted: false,
  },
  {
    id: 'entrenamiento',
    title: 'Entrenamiento Personal',
    shortDescription: 'Entrena con profesionales',
    description: 'Entrenamiento personal adaptado a tus objetivos con seguimiento profesional y planes personalizados.',
    icon: 'dumbbell',
    features: [
      'Planes individuales',
      'Seguimiento',
      'Objetivos claros',
      'Motivacion',
    ],
    highlighted: false,
  },
]

// ================================================
// EQUIPO
// ================================================

export const team = [
  {
    id: 1,
    name: 'Javier',
    role: 'Fisioterapeuta',
    specialty: 'Director',
    image: '/images/team/javier.jpg',
  },
  {
    id: 2,
    name: 'Veronica',
    role: 'Fisioterapeuta',
    specialty: 'Traumatologia',
    image: '/images/team/veronica.jpg',
  },
  {
    id: 3,
    name: 'Selene',
    role: 'Fisioterapeuta',
    specialty: 'Deportiva',
    image: '/images/team/selene.jpg',
  },
  {
    id: 4,
    name: 'Bea',
    role: 'Fisioterapeuta',
    specialty: 'Rehabilitacion',
    image: '/images/team/bea.jpg',
  },
  {
    id: 5,
    name: 'Cristina',
    role: 'Nutricionista',
    specialty: 'Nutricion clinica',
    image: '/images/team/cristina.jpg',
  },
  {
    id: 6,
    name: 'Rosa',
    role: 'Instructora de Pilates',
    specialty: 'Pilates terapeutico',
    image: '/images/team/rosa.jpg',
  },
  {
    id: 7,
    name: 'Belen',
    role: 'Administracion',
    specialty: 'Atencion al paciente',
    image: '/images/team/belen.jpg',
  },
  {
    id: 8,
    name: 'Esteban',
    role: 'Entrenador Personal',
    specialty: 'Preparacion fisica',
    image: '/images/team/esteban.jpg',
  },
]

// ================================================
// TESTIMONIOS
// ================================================

export const testimonials = [
  {
    id: 1,
    name: 'Africa Alcolea',
    text: 'Muy buena atencion y profesionalidad. Recomendables 100%.',
    rating: 5,
    source: 'Google',
  },
  {
    id: 2,
    name: 'Kevin Lara',
    text: 'Excelente trato y resultados. Muy contentos con el servicio.',
    rating: 5,
    source: 'Google',
  },
  {
    id: 3,
    name: 'Juli Buitrago',
    text: 'Profesionales de 10. Me han ayudado mucho con mi lesion de espalda.',
    rating: 5,
    source: 'Google',
  },
  {
    id: 4,
    name: 'Claudia Sanchez',
    text: 'Increible equipo. Las sesiones de fisioterapia son muy efectivas.',
    rating: 5,
    source: 'Google',
  },
  {
    id: 5,
    name: 'Israel Rp',
    text: 'Gran clinica con profesionales muy cualificados. Muy recomendable.',
    rating: 5,
    source: 'Google',
  },
  {
    id: 6,
    name: 'Nur RH',
    text: 'El mejor centro de fisioterapia de Tomelloso. Atencion personalizada.',
    rating: 5,
    source: 'Google',
  },
]

// ================================================
// PREGUNTAS FRECUENTES
// ================================================

export const faqs = [
  {
    question: 'Necesito prescripcion medica para acudir?',
    answer: 'No, no necesitas prescripcion medica para acudir a nuestra clinica. Puedes pedir cita directamente y nuestros fisioterapeutas evaluaran tu caso en la primera consulta.',
  },
  {
    question: 'Cuanto dura una sesion de fisioterapia?',
    answer: 'Las sesiones de fisioterapia tienen una duracion aproximada de 45-60 minutos, dependiendo del tratamiento y las necesidades de cada paciente.',
  },
  {
    question: 'Trabajais con seguros medicos?',
    answer: 'Si, trabajamos con las principales aseguradoras: Sanitas, Asisa, Mapfre, Adeslas, DKV, Divina Seguros y mas. Consultanos tu caso.',
  },
  {
    question: 'Cuantas sesiones necesitare?',
    answer: 'El numero de sesiones depende de cada caso. En la primera consulta evaluaremos tu situacion y te daremos un plan de tratamiento personalizado con una estimacion.',
  },
  {
    question: 'Que debo traer a mi primera cita?',
    answer: 'Trae ropa comoda y, si tienes, informes medicos o pruebas diagnosticas relacionadas con tu dolencia (radiografias, resonancias, etc.).',
  },
  {
    question: 'Haceis sesiones a domicilio?',
    answer: 'Si, ofrecemos servicio de fisioterapia a domicilio para pacientes que no pueden desplazarse. Consultanos disponibilidad y tarifas.',
  },
]

// ================================================
// ESTADISTICAS
// ================================================

export const stats = [
  { value: 500, suffix: '+', label: 'Pacientes atendidos' },
  { value: 8, suffix: '', label: 'Profesionales' },
  { value: 5.0, suffix: '', label: 'Valoracion Google', isRating: true },
]

// ================================================
// ASEGURADORAS
// ================================================

export const insurances = [
  'Sanitas',
  'Asisa',
  'Mapfre',
  'Adeslas',
  'DKV',
  'Divina Seguros',
  'Sereviall',
  'Clinicas Fisi-On',
]
