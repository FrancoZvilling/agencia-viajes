// src/data/mockTravels.js
export const mockTravels = [
  {
    id: 'paris-dream',
    name: 'Sueño Parisino',
    destination: 'París, Francia',
    price: 1200,
    originalPrice: 1500,
    shortDescription: 'Descubre la magia de París, la ciudad del amor y la luz.',
    longDescription: 'Explora la Torre Eiffel, el Museo del Louvre, y pasea por el Sena. Este paquete incluye vuelos, alojamiento céntrico y un tour guiado por los principales monumentos. Disfruta de la gastronomía francesa y la vibrante vida nocturna.',
    images: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80', // Imagen real de París
      'https://via.placeholder.com/800x600/00B4D8/FFFFFF?text=Paris+View+2',
      'https://via.placeholder.com/800x600/FFC300/333333?text=Paris+View+3',
    ],
    duration: '7 Días / 6 Noches',
    includes: ['Vuelos ida y vuelta', 'Alojamiento 4 estrellas', 'Desayunos', 'Tour Torre Eiffel', 'Seguro de viaje'],
    notIncludes: ['Almuerzos y cenas', 'Entradas a museos no especificados', 'Gastos personales'],
    category: 'Europa',
    tags: ['ciudad', 'romantico', 'cultura'],
    featured: true, // <-- DESTACADO
    availability: {
      startDate: '2024-09-01',
      endDate: '2024-12-15',
    },
    mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.7576710004!2d2.2770196352084643!3d48.85895068107499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sPar%C3%ADs%2C%20Francia!5e0!3m2!1ses!2ses!4v1678886543210!5m2!1ses!2ses'
  },
  {
    id: 'kyoto-spirit',
    name: 'Espíritu de Kioto',
    destination: 'Kioto, Japón',
    price: 2200,
    shortDescription: 'Sumérgete en la cultura milenaria de Japón en la antigua capital.',
    longDescription: 'Visita templos ancestrales, jardines zen y participa en una ceremonia del té. Este viaje te conectará con la tradición y la belleza de Kioto. Incluye alojamiento en ryokan tradicional y pase para el tren bala.',
    images: [
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', // Imagen real de Kioto
      'https://via.placeholder.com/800x600/F0AD4E/FFFFFF?text=Kyoto+View+2',
    ],
    duration: '10 Días / 9 Noches',
    includes: ['Vuelos internacionales', 'Alojamiento en Ryokan y Hotel', 'Algunas comidas', 'JR Pass (7 días)', 'Guía local'],
    notIncludes: ['Seguro de viaje opcional', 'Actividades no especificadas'],
    category: 'Asia',
    tags: ['cultura', 'tradicion', 'naturaleza'],
    featured: true, // <-- DESTACADO
    availability: {
      startDate: '2024-10-01',
      endDate: '2025-03-31',
    },
    mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208816.9163390146!2d135.6001097357623!3d35.00116668068025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001a8d6cd3cc3f3%3A0x477183eff39c209a!2sKioto%2C%20Prefectura%20de%20Kioto%2C%20Jap%C3%B3n!5e0!3m2!1ses!2ses!4v1678886543211!5m2!1ses!2ses'
  },
  {
    id: 'caribbean-escape',
    name: 'Escape Caribeño',
    destination: 'Riviera Maya, México',
    price: 950,
    originalPrice: 1100,
    shortDescription: 'Playas de arena blanca, aguas turquesas y ruinas mayas.',
    longDescription: 'Relájate en resorts todo incluido, explora cenotes sagrados y descubre la historia maya en Tulum y Chichén Itzá. Ideal para familias y parejas.',
    images: [
      'https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Imagen real del Caribe
      'https://via.placeholder.com/800x600/337AB7/FFFFFF?text=Caribe+View+2',
    ],
    duration: '8 Días / 7 Noches',
    includes: ['Vuelos', 'Resort todo incluido', 'Traslados aeropuerto', 'Excursión a Chichén Itzá'],
    notIncludes: ['Excursiones opcionales', 'Propinas'],
    category: 'Caribe',
    tags: ['playa', 'relax', 'familia', 'todo-incluido'],
    featured: true, // <-- DESTACADO
    availability: {
      startDate: '2024-07-01',
      endDate: '2024-11-30',
    },
    mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.308005335991!2d-87.07398168500439!3d20.61633098631796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e432523f9c021%3A0x7f1e3710d9f2f9bd!2sRiviera%20Maya!5e0!3m2!1ses!2ses!4v1678886543212!5m2!1ses!2ses' // URL de ejemplo
  },
  {
    id: 'andes-adventure',
    name: 'Aventura Andina',
    destination: 'Cusco y Machu Picchu, Perú',
    price: 1800,
    shortDescription: 'Descubre la ciudad inca de Machu Picchu y el Valle Sagrado.',
    longDescription: 'Un viaje inolvidable a través de la historia y la majestuosidad de los Andes peruanos. Incluye tren a Machu Picchu, tours guiados y alojamiento en Cusco y Aguas Calientes.',
    images: [
      'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80', // Imagen real de Machu Picchu
      'https://via.placeholder.com/800x600/CD853F/FFFFFF?text=Peru+View+2',
    ],
    duration: '9 Días / 8 Noches',
    includes: ['Vuelos internos (Lima-Cusco)', 'Alojamiento', 'Tren a Machu Picchu', 'Entrada a Machu Picchu', 'Guías locales'],
    notIncludes: ['Vuelos internacionales a Lima', 'Algunas comidas'],
    category: 'Sudamerica',
    tags: ['aventura', 'historia', 'montaña', 'cultura'],
    featured: true, // <-- DESTACADO
    availability: {
      startDate: '2024-05-01',
      endDate: '2024-10-31',
    },
    mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61496.89607995207!2d-72.5450406149548!3d-13.163068890700387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916d9a4b9f4e8b11%3A0x4ac676535938769c!2sMachu%20Picchu!5e0!3m2!1ses!2ses!4v1678886543213!5m2!1ses!2ses' // URL de ejemplo
  },
  {
    id: 'roman-holiday',
    name: 'Vacaciones Romanas',
    destination: 'Roma, Italia',
    price: 1100,
    shortDescription: 'Explora la Ciudad Eterna: Coliseo, Vaticano y Fontana di Trevi.',
    longDescription: 'Sumérgete en la historia, el arte y la gastronomía de Roma. Este paquete incluye alojamiento céntrico, desayunos y un tour a pie por los principales monumentos.',
    images: [
      'https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80', // Imagen real de Roma
      'https://via.placeholder.com/800x600/BDB76B/FFFFFF?text=Rome+View+2',
    ],
    duration: '6 Días / 5 Noches',
    includes: ['Alojamiento', 'Desayunos', 'Tour guiado Coliseo y Foro Romano', 'Traslados aeropuerto'],
    notIncludes: ['Vuelos', 'Almuerzos y cenas', 'Entrada Vaticano'],
    category: 'Europa',
    tags: ['historia', 'ciudad', 'cultura', 'gastronomia'],
    featured: false, // <-- NO DESTACADO
    availability: {
        startDate: '2024-09-10',
        endDate: '2025-01-20',
    },
    mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190028.4004957109!2d12.395912990518656!3d41.90998600188746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693652248!2sRoma%2C%20Italia!5e0!3m2!1ses!2ses!4v1678886543214!5m2!1ses!2ses' // URL de ejemplo
  },
  {
    id: 'safari-dream',
    name: 'Sueño de Safari',
    destination: 'Serengeti, Tanzania',
    price: 3500,
    shortDescription: 'Vive la emoción de un safari africano en el legendario Serengeti.',
    longDescription: 'Observa los Cinco Grandes en su hábitat natural, disfruta de amaneceres espectaculares y alójate en lodges de lujo en medio de la sabana. Una experiencia única en la vida.',
    images: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Imagen real de Safari
      'https://via.placeholder.com/800x600/FF8C00/FFFFFF?text=Safari+View+2',
    ],
    duration: '8 Días / 7 Noches',
    includes: ['Vuelos internos', 'Alojamiento en lodges y campamentos de lujo', 'Todas las comidas', 'Safaris guiados en 4x4', 'Tasas de parques nacionales'],
    notIncludes: ['Vuelos internacionales', 'Visado', 'Bebidas alcohólicas', 'Propinas'],
    category: 'Africa',
    tags: ['safari', 'naturaleza', 'aventura', 'animales', 'lujo'],
    featured: true, // <-- DESTACADO
    availability: {
        startDate: '2024-06-15',
        endDate: '2024-10-05',
    },
    mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.707009736966!2d34.8333096147004!3d-2.306949998239973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b0188882713cf%3A0x916b67a493d62f4a!2sParque%20Nacional%20Serengueti!5e0!3m2!1ses!2ses!4v1678886543215!5m2!1ses!2ses' // URL de ejemplo
  },
   {
    id: 'new-york-adventure',
    name: 'Aventura en Nueva York',
    destination: 'Nueva York, EE.UU.',
    price: 1500,
    shortDescription: 'Descubre la ciudad que nunca duerme: Times Square, Central Park y más.',
    longDescription: 'Visita Times Square, la Estatua de la Libertad, Central Park y mucho más. Este paquete ofrece una experiencia inolvidable en la Gran Manzana, con alojamiento céntrico y opciones de tours guiados para explorar los barrios más emblemáticos y los rascacielos que definen el horizonte de la ciudad.',
    images: [
        'https://images.unsplash.com/photo-1496442226696-b4d9866d0e60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' // Imagen real de Nueva York
    ],
    duration: '7 Días / 6 Noches',
    includes: ['Alojamiento céntrico', 'Traslados aeropuerto', 'Tarjeta MetroPass 7 días'],
    notIncludes: ['Vuelos', 'Comidas', 'Tours opcionales', 'Entradas a atracciones'],
    category: 'Norteamerica',
    tags: ['ciudad', 'cultura', 'iconico', 'urbano'],
    featured: false, // <-- NO DESTACADO
    availability: {
      startDate: '2024-01-01',
      endDate: '2024-12-31',
    },
    mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193572.91924856013!2d-74.11976376885566!3d40.70563082004423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNueva%20York%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1678886543216!5m2!1ses!2ses' // URL de ejemplo
  },
  {
    id: 'australian-outback',
    name: 'Explorando el Outback Australiano',
    destination: 'Uluru y Alice Springs, Australia',
    price: 2800,
    originalPrice: 3200,
    shortDescription: 'Aventura en el corazón rojo de Australia, Uluru y Kata Tjuta.',
    longDescription: 'Un viaje épico al Outback australiano. Contempla el amanecer y atardecer en Uluru (Ayers Rock), explora las formaciones rocosas de Kata Tjuta (The Olgas) y descubre la cultura aborigen. Incluye vuelos internos, alojamiento y tours guiados.',
    images: [
      'https://images.unsplash.com/photo-1635156612523-0dabd216974c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Imagen real de Uluru
    ],
    duration: '9 Días / 8 Noches',
    includes: ['Vuelos (Sydney/Melbourne a Alice Springs/Uluru)', 'Alojamiento', 'Tour Uluru amanecer/atardecer', 'Tour Kata Tjuta', 'Guía cultural aborigen'],
    notIncludes: ['Vuelos internacionales a Australia', 'Algunas comidas', 'Actividades opcionales'],
    category: 'Oceania',
    tags: ['aventura', 'naturaleza', 'cultura', 'desierto', 'unico'],
    featured: true, // <-- DESTACADO
    availability: {
      startDate: '2024-04-15',
      endDate: '2024-10-30',
    },
    mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.014896324285!2d131.03441361478508!3d-25.34449208380094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b236c0b629f9771%3A0x8a7a30f21e2042c8!2sUluru!5e0!3m2!1ses!2ses!4v1678886543217!5m2!1ses!2ses' // URL de ejemplo
  }
];