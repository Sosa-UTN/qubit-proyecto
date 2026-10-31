// Cada botón muestra un cuadrado de color simulando el ángulo de la foto
export default function AngleSelector({ angles, activeIndex, onChange }) {
  return (
    <div className="flex flex-col gap-3 items-center">
      <span
        className="text-[9px] font-semibold tracking-wider uppercase text-stone-400 writing-mode-vertical"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)', letterSpacing: '0.12em' }}
      >
        Fotos de dist ángulos
      </span>
      {angles.map((angle, i) => {
        const isActive = i === activeIndex
        return (
          <button
            key={i}
            onClick={() => onChange(i)}
            aria-label={`Vista: ${angle.angle}`}
            title={angle.angle}
            className="w-12 h-12 rounded-full transition-all duration-200 hover:scale-105 focus:outline-none flex items-center justify-center"
            style={{
              backgroundColor: angle.bg,
              boxShadow: isActive
                ? `0 0 0 3px white, 0 0 0 5px ${angle.bg}`
                : '0 2px 6px rgba(0,0,0,0.12)',
              opacity: isActive ? 1 : 0.65,
            }}
          >
            {/* Inicial del ángulo */}
            <span className="text-white text-[10px] font-bold select-none">
              {angle.angle.charAt(0)}
            </span>
          </button>
        )
      })}
    </div>
  )
}
