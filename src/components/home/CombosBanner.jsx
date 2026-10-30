import { useNavigate } from 'react-router-dom'

// Piezas decorativas de rompecabezas: posición, tamaño y color
const PUZZLE_PIECES = [
  { top: '8%',  left: '2%',  size: 48, color: '#A594C9', rotate: -20 },
  { top: '60%', left: '1%',  size: 40, color: '#E2847A', rotate: 30  },
  { top: '5%',  left: '18%', size: 36, color: '#7CA682', rotate: 10  },
  { top: '70%', left: '12%', size: 44, color: '#6E94B2', rotate: -15 },
  { top: '8%',  right: '2%', size: 48, color: '#E5B25D', rotate: 20  },
  { top: '62%', right: '1%', size: 40, color: '#A594C9', rotate: -30 },
  { top: '5%',  right: '18%',size: 36, color: '#E2847A', rotate: -10 },
  { top: '72%', right: '12%',size: 44, color: '#7CA682', rotate: 15  },
]

// Estrellas decorativas
const STARS = [
  { top: '15%', left: '30%',  size: 14, color: '#E2847A' },
  { top: '75%', left: '25%',  size: 10, color: '#A594C9' },
  { top: '20%', right: '28%', size: 12, color: '#7CA682' },
  { top: '80%', right: '30%', size: 16, color: '#E5B25D' },
  { top: '45%', left: '8%',   size: 8,  color: '#6E94B2' },
  { top: '50%', right: '8%',  size: 10, color: '#E2847A' },
]

// SVG de una pieza de rompecabezas simplificada
function PuzzleSVG({ size, color, rotate }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path
        d="M20 20 Q20 10 30 10 Q40 10 40 20 L40 40 Q50 40 50 30 Q50 20 60 20 Q70 20 70 30 Q70 40 60 40 L80 40 Q90 40 90 50 Q90 60 80 60 L60 60 Q60 70 70 70 Q80 70 80 80 Q80 90 70 90 Q60 90 60 80 L40 80 Q40 90 30 90 Q20 90 20 80 L20 60 Q10 60 10 50 Q10 40 20 40 Z"
        fill={color}
        opacity="0.85"
      />
    </svg>
  )
}

// SVG de estrella
function StarSVG({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <polygon
        points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"
        fill={color}
        opacity="0.7"
      />
    </svg>
  )
}

export default function CombosBanner() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate('/combos')}
      className="relative w-full overflow-hidden rounded-3xl cursor-pointer transition-transform duration-300 hover:scale-[1.01] focus:outline-none"
      style={{
        backgroundColor: '#FAF6F0',
        border: '2px dashed #D5C9C0',
        minHeight: '200px',
      }}
      aria-label="Ver catálogo de combos"
    >
      {/* Piezas de rompecabezas decorativas */}
      {PUZZLE_PIECES.map((p, i) => (
        <span key={i} className="absolute pointer-events-none" style={{ top: p.top, left: p.left, right: p.right }}>
          <PuzzleSVG size={p.size} color={p.color} rotate={p.rotate} />
        </span>
      ))}

      {/* Estrellas decorativas */}
      {STARS.map((s, i) => (
        <span key={i} className="absolute pointer-events-none" style={{ top: s.top, left: s.left, right: s.right }}>
          <StarSVG size={s.size} color={s.color} />
        </span>
      ))}

      {/* Texto central */}
      <div className="relative z-10 flex flex-col items-center justify-center py-10 px-4 gap-3">
        <span
          className="text-6xl md:text-7xl font-black tracking-widest select-none"
          style={{
            color: '#C8D7E3',
            WebkitTextStroke: '2px #8EAE8D',
            textShadow: '3px 4px 0px #A594C9, 6px 7px 0px rgba(0,0,0,0.08)',
            letterSpacing: '0.12em',
          }}
        >
          COMBOS
        </span>
        <span className="text-sm text-stone-400 flex items-center gap-1">
          <span>👆</span> Tocá para ver el catálogo
        </span>
      </div>
    </button>
  )
}
