import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const EVENT_SLIDES = [
  {
    id: 1,
    image: '/images/eventos/eventos-1.jpeg',
    alt: 'Stand Oficial Qubit en Feria de Diseño',
  },
  {
    id: 2,
    image: '/images/eventos/eventos-2.jpeg',
    alt: 'Módulos Qubit en uso',
  },
  {
    id: 3,
    image: '/images/eventos/eventos-3.jpeg',
    alt: 'Comunidad Qubit',
  },
]

export default function EventsSlider() {
  const [current, setCurrent] = useState(0)

  // Cambio automático cada 6 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c === EVENT_SLIDES.length - 1 ? 0 : c + 1))
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  function prev() {
    setCurrent((c) => (c === 0 ? EVENT_SLIDES.length - 1 : c - 1))
  }

  function next() {
    setCurrent((c) => (c === EVENT_SLIDES.length - 1 ? 0 : c + 1))
  }

  return (
    <div className="relative w-full overflow-hidden rounded-3xl shadow-md min-h-[480px] md:min-h-[530px] flex items-center justify-center bg-stone-900 select-none">
      {/* Diapositivas de fotos de fondo */}
      {EVENT_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
            }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover object-center blur-[2px] scale-105"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          {/* Capa de oscurecido sutil para realzar el contenedor central */}
          <div className="absolute inset-0 bg-black/25" />
        </div>
      ))}

      {/* Bloque central idéntico y centrado sobre el slider */}
      <div className="relative z-10 w-full max-w-xl mx-4 sm:mx-8 my-8">
        <div
          className="w-full rounded-3xl flex flex-col items-center justify-center gap-5 px-6 sm:px-10 py-8 sm:py-10 text-center "
          style={{}}
        >
          {/* Tag */}
          <p
            className="text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: '#ffffffff' }}
          >
            ✦ Próximas Fechas ✦
          </p>

          {/* Título */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wide"
            style={{ color: '#ffffffff' }}
          >
            PRÓXIMAMENTE MÁS...
          </h1>

          {/* Separador decorativo */}
          <div className="flex items-center gap-3 w-full max-w-xs">
            <div className="flex-1 h-px" style={{ backgroundColor: '#ffffffff' }} />
            <span style={{ color: '#ffffffff' }}>✦</span>
            <div className="flex-1 h-px" style={{ backgroundColor: '#ffffffff' }} />
          </div>

          {/* Logo QUBIT */}
          <div className="flex items-center justify-center select-none py-1">
            <img
              src="/images/logo.png"
              alt="QUBIT"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain drop-shadow-sm"
            />
          </div>

          {/* Descripción */}
          <p className="text-xs sm:text-sm text-stone-700 max-w-md leading-relaxed font-medium" style={{ color: '#ffffffff' }}>
            Estamos coordinando nuevos stands y ferias de diseño.
            ¡Dejanos tu correo y te enviamos la agenda en cuanto salgan las fechas!
          </p>
        </div>
      </div>

      {/* Flecha dorada izquierda */}
      <button
        onClick={prev}
        aria-label="Anterior evento"
        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 focus:outline-none"
        style={{ backgroundColor: '#E5B25D' }}
      >
        <ChevronLeft size={22} color="white" strokeWidth={2.5} />
      </button>

      {/* Flecha dorada derecha */}
      <button
        onClick={next}
        aria-label="Siguiente evento"
        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 focus:outline-none"
        style={{ backgroundColor: '#E5B25D' }}
      >
        <ChevronRight size={22} color="white" strokeWidth={2.5} />
      </button>

      {/* Indicadores circulares inferiores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/35 backdrop-blur-xs">
        {EVENT_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Evento ${i + 1}`}
            className="transition-all duration-300 focus:outline-none rounded-full"
            style={{
              width: i === current ? '22px' : '7px',
              height: '7px',
              backgroundColor: i === current ? '#E5B25D' : '#FFFFFF',
              opacity: i === current ? 1 : 0.6,
            }}
          />
        ))}
      </div>
    </div>
  )
}
