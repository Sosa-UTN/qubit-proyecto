import { Link } from 'react-router-dom'

export default function EventsBanner() {
  return (
    <section className="w-full">
      {/* Banner grande con fondo celeste */}
      <div
        className="relative w-full overflow-hidden rounded-3xl flex flex-col md:flex-row items-center justify-between px-8 md:px-14 py-12 gap-8"
        style={{ backgroundColor: '#C8D7E3', minHeight: '220px' }}
      >
        {/* Bloque izquierdo: textos */}
        <div className="flex flex-col gap-3 z-10">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: '#6E94B2' }}
          >
            ✦ Eventos
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-stone-700 leading-tight">
            Conocé<br />
            <span style={{ color: '#8EAE8D' }}>próximos eventos</span>
          </h2>
          <p className="text-stone-500 text-sm max-w-xs leading-relaxed">
            Descubrí dónde encontrarnos, participá de nuestras actividades y viví la experiencia QUBIT en persona.
          </p>
          <Link
            to="/eventos"
            className="mt-1 self-start px-5 py-2 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#6E94B2' }}
          >
            Ver eventos →
          </Link>
        </div>



        {/* Círculo decorativo de fondo */}
        <div
          className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full opacity-20 pointer-events-none"
          style={{ backgroundColor: '#6E94B2' }}
        />
      </div>
    </section>
  )
}
