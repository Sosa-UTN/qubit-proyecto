import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    bg: '#C8D7E3',
    title: 'Nueva colección Qubit',
    subtitle: 'Piezas modulares que encajan con tu estilo',
    accent: '#E5B25D',
  },
  {
    id: 2,
    bg: '#D5E0EB',
    title: 'Combos exclusivos',
    subtitle: 'Armá tu set personalizado con los mejores módulos',
    accent: '#A594C9',
  },
  {
    id: 3,
    bg: '#C8D7E3',
    title: 'Edición limitada',
    subtitle: 'Módulos de colección con colores únicos de temporada',
    accent: '#E2847A',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  function prev() {
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  }
  function next() {
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))
  }

  const slide = slides[current]

  return (
    <div className="relative w-full overflow-hidden rounded-3xl mx-auto" style={{ backgroundColor: slide.bg, minHeight: '280px' }}>
      {/* Contenido del slide */}
      <div className="flex flex-col items-center justify-center h-full min-h-[280px] px-16 py-12 text-center gap-3 transition-all duration-300">
        <span
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: slide.accent }}
        >
          QUBIT ✦ Novedades
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-700 leading-tight">
          {slide.title}
        </h2>
        <p className="text-stone-500 text-base max-w-md">
          {slide.subtitle}
        </p>
        <button
          className="mt-3 px-6 py-2 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-80"
          style={{ backgroundColor: slide.accent }}
        >
          Ver más
        </button>
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full shadow-md transition-transform hover:scale-110"
        style={{ backgroundColor: '#E5B25D' }}
      >
        <ChevronLeft size={20} color="white" />
      </button>

      {/* Flecha derecha */}
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full shadow-md transition-transform hover:scale-110"
        style={{ backgroundColor: '#E5B25D' }}
      >
        <ChevronRight size={20} color="white" />
      </button>

      {/* Indicadores circulares */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: i === current ? '#E5B25D' : '#ffffff',
              opacity: i === current ? 1 : 0.6,
              transform: i === current ? 'scale(1.3)' : 'scale(1)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
