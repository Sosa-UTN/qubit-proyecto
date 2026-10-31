import { useNavigate } from 'react-router-dom'

// SVG con forma de pieza de rompecabezas (4 pestañas: arriba, abajo, izquierda, derecha)
function PuzzlePieceShape({ color = '#8EAE8D', children }) {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 180, height: 180 }}>
      <svg
        viewBox="0 0 200 200"
        width="180"
        height="180"
        className="absolute inset-0"
      >
        {/*
          Pieza de rompecabezas:
          - Cuerpo cuadrado de 120×120 centrado en el viewBox (40,40 → 160,160)
          - Pestaña saliente arriba (centro del borde superior)
          - Pestaña saliente derecha
          - Entrante abajo
          - Entrante izquierda
        */}
        <path
          d="
            M 60 40
            L 85 40
            Q 85 20 100 20
            Q 115 20 115 40
            L 140 40
            L 140 65
            Q 160 65 160 80
            Q 160 95 140 95
            L 140 120
            Q 140 140 125 140
            Q 110 140 110 120
            L 80 120
            Q 80 140 65 140
            Q 50 140 50 120
            L 60 120
            L 60 95
            Q 40 95 40 80
            Q 40 65 60 65
            Z
          "
          fill={color}
          style={{
            filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.15))',
          }}
        />
        {/* Highlight sutil para dar sensación 3D / foam */}
        <path
          d="
            M 62 42
            L 85 42
            Q 87 24 100 23
            Q 113 24 115 42
            L 138 42
            L 138 65
            Q 157 66 157 80
            Q 157 90 148 93
          "
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>

      {/* Contenido centrado sobre la pieza */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-1 text-center px-2" style={{ marginTop: -8 }}>
        {children}
      </div>
    </div>
  )
}

export default function ComboCard({ combo }) {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(`/combos/${combo.id}`)}
      className="flex flex-col items-center gap-3 p-4 rounded-2xl transition-transform duration-300 hover:-translate-y-1 focus:outline-none w-full"
      style={{ backgroundColor: 'transparent' }}
      aria-label={`Ver ${combo.name}`}
    >
      {/* Pieza de rompecabezas */}
      <PuzzlePieceShape>
        <span
          className="text-sm font-bold leading-tight"
          style={{ color: '#C96876' }}
        >
          Combo
        </span>
        <span
          className="text-sm font-bold leading-tight"
          style={{ color: '#C96876' }}
        >
          patch
        </span>
      </PuzzlePieceShape>

      {/* Info debajo de la pieza */}
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="text-sm font-semibold text-stone-700 leading-snug">
          {combo.name}
        </p>
        <p className="text-xs text-stone-400 leading-relaxed max-w-[160px] line-clamp-2">
          {combo.description}
        </p>
        <p
          className="text-sm font-bold mt-1"
          style={{ color: '#8EAE8D' }}
        >
          ${combo.price.toLocaleString('es-AR')}
        </p>
      </div>
    </button>
  )
}
