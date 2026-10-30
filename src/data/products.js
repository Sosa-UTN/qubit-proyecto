// ─── COMBOS (4 packs modulares) ────────────────────────────────────────────
export const combos = [
  {
    id: 1,
    name: 'Combo Patch Alfa',
    description:
      'El pack esencial para arrancar tu colección modular. Incluye dos piezas grandes encastrables y una pieza puente, ideales para armar composiciones compactas.',
    price: 4500,
    materials: 'Foam de alta densidad, tacto suave al contacto.',
    dimensions: '15 cm × 12 cm (pieza principal)',
    images: [
      { angle: 'Frente',       bg: '#A8C5A0' },
      { angle: 'Lateral',      bg: '#8EAE8D' },
      { angle: 'Ensamble',     bg: '#7A9B79' },
      { angle: 'Perspectiva',  bg: '#94B495' },
    ],
    defaultColors: ['#B86B77', '#8EA77B'],
  },
  {
    id: 2,
    name: 'Combo Patch Beta',
    description:
      'Pack intermedio con piezas asimétricas que generan composiciones más dinámicas. Perfecto para quienes buscan variedad y formas originales.',
    price: 5200,
    materials: 'Foam biodegradable, terminación mate suave.',
    dimensions: '18 cm × 14 cm (pieza principal)',
    images: [
      { angle: 'Frente',       bg: '#C5A8B2' },
      { angle: 'Lateral',      bg: '#B89AA5' },
      { angle: 'Ensamble',     bg: '#A58B96' },
      { angle: 'Perspectiva',  bg: '#C0A8B2' },
    ],
    defaultColors: ['#CFA0D6', '#CFA04E'],
  },
  {
    id: 3,
    name: 'Combo Patch Gamma',
    description:
      'Combo premium de 4 piezas que incluye módulos de distintos tamaños para una experiencia de encastre completa. Ideal como regalo.',
    price: 6800,
    materials: 'Foam ultra suave con acabado satinado.',
    dimensions: '20 cm × 16 cm (pieza principal)',
    images: [
      { angle: 'Frente',       bg: '#A8B5C5' },
      { angle: 'Lateral',      bg: '#8EA5B8' },
      { angle: 'Ensamble',     bg: '#7A95A8' },
      { angle: 'Perspectiva',  bg: '#94AFBE' },
    ],
    defaultColors: ['#667493', '#8EA77B'],
  },
  {
    id: 4,
    name: 'Combo Patch Delta',
    description:
      'El pack más completo de la línea. Cinco piezas con conectores universales y manual de armado ilustrado. Coleccionable de edición limitada.',
    price: 8900,
    materials: 'Foam de espuma de memoria, resistente al uso diario.',
    dimensions: '22 cm × 18 cm (pieza principal)',
    images: [
      { angle: 'Frente',       bg: '#C5BCA8' },
      { angle: 'Lateral',      bg: '#B8AF9A' },
      { angle: 'Ensamble',     bg: '#A5A28B' },
      { angle: 'Perspectiva',  bg: '#C0B89A' },
    ],
    defaultColors: ['#B86B77', '#667493'],
  },
]

// ─── PRODUCTOS INDIVIDUALES (5 módulos sueltos) ─────────────────────────────
export const individuals = [
  {
    id: 101,
    name: 'Módulo Individual Mini',
    price: 1200,
    // Color sólido como placeholder de imagen (SVG generado en el componente)
    placeholderColor: '#A594C9',
  },
  {
    id: 102,
    name: 'Módulo Cuadrado Soft',
    price: 1400,
    placeholderColor: '#E2847A',
  },
  {
    id: 103,
    name: 'Módulo Puente Flex',
    price: 1350,
    placeholderColor: '#E5B25D',
  },
  {
    id: 104,
    name: 'Módulo Grande Classic',
    price: 1800,
    placeholderColor: '#7CA682',
  },
  {
    id: 105,
    name: 'Módulo Esquina Redonda',
    price: 1500,
    placeholderColor: '#6E94B2',
  },
]
