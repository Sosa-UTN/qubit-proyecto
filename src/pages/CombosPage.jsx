import { useState } from 'react'
import { Search } from 'lucide-react'
import SubHeader from '../components/layout/SubHeader'
import ComboCard from '../components/combos/ComboCard'
import { combos } from '../data/products'

export default function CombosPage() {
  const [query, setQuery] = useState('')

  const filtered = combos.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="flex flex-col flex-1">
      {/* Barra de título de sección */}
      <SubHeader title="Productos" />

      <div className="w-full max-w-8xl mx-auto px-4 py-8 flex flex-col gap-8">
        {/* Barra de búsqueda */}
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-2xl shadow-sm w-full max-w-sm mx-auto"
          style={{ backgroundColor: '#FFFFFF', border: '1px solid #EDE8E1' }}
        >
          <Search size={16} className="text-stone-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar combo..."
            className="flex-1 text-sm text-stone-700 placeholder-stone-400 outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-stone-300 hover:text-stone-500 text-xs"
              aria-label="Limpiar búsqueda"
            >
              ✕
            </button>
          )}
        </div>

        {/* Grilla de combos */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((combo) => (
              <ComboCard key={combo.id} combo={combo} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 py-16 text-center">
            <span className="text-4xl">🔍</span>
            <p className="text-stone-500 text-sm">
              No se encontraron combos con ese nombre.
            </p>
            <button
              onClick={() => setQuery('')}
              className="text-xs font-semibold underline"
              style={{ color: '#8EAE8D' }}
            >
              Ver todos los combos
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
