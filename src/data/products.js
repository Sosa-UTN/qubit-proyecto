// Módulos base configurables por defecto para los combos


export const ModulosCombo1 = [
  { id: 1, name: 'Módulo pequeño', defaultType: 'QUBOX', defaultColor: '#BF9BDE' },
  { id: 2, name: 'Módulo grande', defaultType: 'QUBOX', defaultColor: '#BF9BDE' }
]

export const ModulosCombo2 = [
  { id: 1, name: 'Módulo pequeño', defaultType: 'QUBOX', defaultColor: '#BF9BDE' },
  { id: 2, name: 'Módulo pequeño', defaultType: 'QUBOX', defaultColor: '#BF9BDE' },
  { id: 3, name: 'Módulo mediano', defaultType: 'QUBOX', defaultColor: '#BF9BDE' },
  { id: 4, name: 'Módulo grande', defaultType: 'QUBOX', defaultColor: '#BF9BDE' },
]

export const ModulosCombo3 = [
  { id: 1, name: 'Módulo mediano', defaultType: 'QUBOX', defaultColor: '#BF9BDE' },
  { id: 2, name: 'Módulo mediano', defaultType: 'QUBOX', defaultColor: '#BF9BDE' },
  { id: 3, name: 'Módulo grande', defaultType: 'QUBOX', defaultColor: '#BF9BDE' },
]

export const ModulosCombo4 = [
  { id: 1, name: 'Módulo pequeño', defaultType: 'QUBOX', defaultColor: '#BF9BDE' },
  { id: 2, name: 'Módulo mediano', defaultType: 'QUBOX', defaultColor: '#BF9BDE' },
  { id: 3, name: 'Módulo grande', defaultType: 'QUBOX', defaultColor: '#BF9BDE' },
]

// ─── COMBOS (4 packs modulares) ────────────────────────────────────────────
export const combos = [
  {
    id: 1,
    name: 'QUBIT DUO',
    description:
      'Este combo contiene 2 módulos:\n1 Módulo grande (50 x 50)\n1 Módulo pequeño (25 x 25)',
    price: 66000,
    materials: 'Foam de alta densidad, fundas textiles suaves con costuras reforzadas.',
    dimensions: 'Set completo: 85 cm × 60 cm',
    coverImage: '/images/combos/combo-1-img-1.jpg',
    images: [
      { angle: 'Frente', image: '/images/combos/combo-1-img-1.jpg', bg: '#A8C5A0' },
      { angle: 'Lateral', image: '/images/combos/combo-1-img-2.jpg', bg: '#8EAE8D' },
      { angle: 'Ensamble', image: '/images/combos/combo-1-img-3.jpg', bg: '#7A9B79' },
      { angle: 'Perspectiva', image: '/images/combos/combo-1-img-4.jpg', bg: '#94B495' },
    ],
    defaultColors: ['#B86B77', '#8EA77B'],
    modules: ModulosCombo1,
  },
  {
    id: 2,
    name: 'QUBIT WORLD',
    description:
      'Este combo contiene 4 módulos:\n1 Módulo grande (50 x 50)\n1 Módulo mediano (50 x 25)\n2 Módulos pequeños (25 x 25)',
    price: 125000,
    materials: 'Foam de tacto suave, terminación mate resistente.',
    dimensions: 'Set completo: 75 cm × 65 cm',
    coverImage: '/images/combos/combo-2-img-1.jpg',
    images: [
      { angle: 'Frente', image: '/images/combos/combo-2-img-1.jpg', bg: '#C5A8B2' },
      { angle: 'Lateral', image: '/images/combos/combo-2-img-2.jpg', bg: '#B89AA5' },
      { angle: 'Ensamble', image: '/images/combos/combo-2-img-3.jpg', bg: '#A58B96' },
      { angle: 'Perspectiva', image: '/images/combos/combo-2-img-4.jpeg', bg: '#C0A8B2' },
    ],
    defaultColors: ['#CFA0D6', '#CFA04E'],
    modules: ModulosCombo2,
  },
  {
    id: 3,
    name: 'QUBIT MIX',
    description: "Este combo contiene 3 módulos:\n1 Módulo grande (50 x 50)\n2 Módulos medianos (50 x 25)",
    price: 106000,
    materials: 'Foam ultra suave con detalles bordados a mano.',
    dimensions: 'Set completo: 65 cm × 55 cm',
    coverImage: '/images/combos/combo-3-img-1.jpg',
    images: [
      { angle: 'Frente', image: '/images/combos/combo-3-img-1.jpg', bg: '#A8B5C5' },
      { angle: 'Lateral', image: '/images/combos/combo-3-img-2.jpg', bg: '#8EA5B8' },
      { angle: 'Ensamble', image: '/images/combos/combo-3-img-3.jpg', bg: '#7A95A8' },
      { angle: 'Perspectiva', image: '/images/combos/combo-3-img-4.jpeg', bg: '#94AFBE' },
    ],
    defaultColors: ['#667493', '#8EA77B'],
    modules: ModulosCombo3,
  },
  {
    id: 4,
    name: ' QUBIT TRIO',
    description:
      'Este combo contiene 3 módulos:\n 1 Módulo grande (50 x 50)\n1 Módulo mediano (50 x 25)\n1 Módulo pequeño (25 x 25)',
    price: 99000,
    materials: 'Foam de alta memoria con conectores de encastre universal.',
    dimensions: 'Set completo: 70 cm × 55 cm',
    coverImage: '/images/combos/combo-4-img-1.jpg',
    images: [
      { angle: 'Frente', image: '/images/combos/combo-4-img-1.jpg', bg: '#C5BCA8' },
      { angle: 'Lateral', image: '/images/combos/combo-4-img-2.jpeg', bg: '#B8AF9A' },
      { angle: 'Ensamble', image: '/images/combos/combo-4-img-3.jpeg', bg: '#A5A28B' },
      { angle: 'Perspectiva', image: '/images/combos/combo-4-img-4.jpeg', bg: '#C0B89A' },
    ],
    defaultColors: ['#B86B77', '#667493'],
    modules: ModulosCombo4,
  },
]

// ─── PRODUCTOS INDIVIDUALES (5 módulos sueltos) ─────────────────────────────
export const individuals = [
  {
    id: 101,
    name: 'QUBOX',
    price: 1800,
    image: '/images/individuales/modulo-1-grande.jpg',
    placeholderColor: '#7CA682',
  },
  {
    id: 102,
    name: 'QUBOOK',
    price: 1950,
    image: '/images/individuales/modulo-2-grande.jpg',
    placeholderColor: '#6E94B2',
  },
  {
    id: 103,
    name: 'QUMOOD',
    price: 1650,
    image: '/images/individuales/modulo-3.jpg',
    placeholderColor: '#E5B25D',
  },
  {
    id: 104,
    name: 'QUMIRROR',
    price: 1750,
    image: '/images/individuales/modulo-4.jpg',
    placeholderColor: '#E2847A',
  },
  {
    id: 105,
    name: 'QUBART',
    price: 1850,
    image: '/images/individuales/modulo-5.jpg',
    placeholderColor: '#A594C9',
  },
]
