import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    image: '/images/slider-principal/slider-1.jpeg',
    alt: 'Qubit Módulos Organizadores en uso',
  },
  {
    id: 2,
    image: '/images/slider-principal/slider-2.jpeg',
    alt: 'Módulos que se conectan, tus ideas también',
  },
  {
    id: 3,
    image: '/images/slider-principal/slider-3.png',
    alt: 'Tu espacio a tu manera con Qubit',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  // Avance automático cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  function prev() {
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  }

  function next() {
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))
  }

  return (
    <div className="relative w-full overflow-hidden rounded-3xl shadow-sm aspect-[16/9] md:aspect-[2.1/1] max-h-[520px] bg-stone-100 select-none">
      {/* Diapositivas con transición suave de desvanecimiento */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover object-center"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Flecha dorada izquierda */}
      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 focus:outline-none"
        style={{ backgroundColor: '#E5B25D' }}
      >
        <ChevronLeft size={24} color="white" strokeWidth={2.5} />
      </button>

      {/* Flecha dorada derecha */}
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 focus:outline-none"
        style={{ backgroundColor: '#E5B25D' }}
      >
        <ChevronRight size={24} color="white" strokeWidth={2.5} />
      </button>

      {/* Indicadores en la parte inferior */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-black/25 backdrop-blur-xs">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className="transition-all duration-300 focus:outline-none rounded-full"
            style={{
              width: i === current ? '22px' : '8px',
              height: '8px',
              backgroundColor: i === current ? '#E5B25D' : '#FFFFFF',
              opacity: i === current ? 1 : 0.6,
            }}
          />
        ))}
      </div>
    </div>
  )
}
