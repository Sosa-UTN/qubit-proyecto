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
            ✦ Foto deslizadas · Eventos · Quiénes somos
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-stone-700 leading-tight">
            Conocé<br />
            <span style={{ color: '#8EAE8D' }}>nuestra historia</span>
          </h2>
          <p className="text-stone-500 text-sm max-w-xs leading-relaxed">
            Somos un equipo creativo apasionado por el diseño modular y lúdico.
            Participamos en ferias, talleres y eventos de diseño en todo el país.
          </p>
          <Link
            to="/eventos"
            className="mt-1 self-start px-5 py-2 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#6E94B2' }}
          >
            Ver eventos →
          </Link>
        </div>

        {/* Bloque derecho: foto simulada */}
        <div className="flex gap-3 z-10">
          {/* Foto 1 */}
          <div
            className="w-28 h-36 md:w-36 md:h-44 rounded-2xl shadow-md flex items-end p-3"
            style={{ backgroundColor: '#A8C0D0' }}
          >
            <span className="text-white text-[10px] font-semibold opacity-80">
              Feria 2024 🎪
            </span>
          </div>
          {/* Foto 2 (levemente desplazada) */}
          <div
            className="w-28 h-36 md:w-36 md:h-44 rounded-2xl shadow-md flex items-end p-3 mt-5"
            style={{ backgroundColor: '#B8CCE0' }}
          >
            <span className="text-white text-[10px] font-semibold opacity-80">
              Taller modular 🧩
            </span>
          </div>
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
