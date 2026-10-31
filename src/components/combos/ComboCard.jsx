import { useNavigate } from 'react-router-dom'

export default function ComboCard({ combo }) {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(`/combos/${combo.id}`)}
      className="flex flex-col rounded-3xl overflow-hidden p-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg focus:outline-none w-full bg-white border border-stone-200/70 group cursor-pointer"
      aria-label={`Ver ${combo.name}`}
    >
      {/* Contenedor de imagen del combo */}
      <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 flex items-center justify-center relative shadow-xs">
        <img
          src={combo.coverImage || (combo.images && combo.images[0]?.image)}
          alt={combo.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span
          className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-white shadow-xs backdrop-blur-xs"
          style={{ backgroundColor: 'rgba(142, 174, 141, 0.92)' }}
        >
          Combo Patch
        </span>
      </div>

      {/* Información debajo de la foto */}
      <div className="p-3 flex flex-col items-center gap-1 w-full text-center">
        <p className="text-sm font-bold text-stone-800 leading-snug group-hover:text-stone-950 transition-colors">
          {combo.name}
        </p>
        <p className="text-xs text-stone-500 leading-relaxed max-w-[200px] line-clamp-2">
          {combo.description}
        </p>
        <p
          className="text-sm font-black mt-1"
          style={{ color: '#8EAE8D' }}
        >
          ${combo.price.toLocaleString('es-AR')}
        </p>
      </div>
    </button>
  )
}
