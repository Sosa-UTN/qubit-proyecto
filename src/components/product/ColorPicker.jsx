const BRAND_COLORS = [
  { hex: '#B86B77', label: 'Rosa'     },
  { hex: '#CFA0D6', label: 'Lila'     },
  { hex: '#CFA04E', label: 'Mostaza'  },
  { hex: '#8EA77B', label: 'Verde'    },
  { hex: '#667493', label: 'Azul'     },
]

export default function ColorPicker({ selected, onChange, label = 'Colores' }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-semibold text-stone-500">{label}</span>
      <div className="flex gap-2">
        {BRAND_COLORS.map(({ hex, label: name }) => {
          const isActive = selected === hex
          return (
            <button
              key={hex}
              onClick={() => onChange(hex)}
              aria-label={name}
              title={name}
              className="relative w-7 h-7 rounded-full transition-transform hover:scale-110 focus:outline-none"
              style={{ backgroundColor: hex }}
            >
              {/* Aro exterior cuando está seleccionado */}
              {isActive && (
                <span
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    boxShadow: `0 0 0 2px white, 0 0 0 4px ${hex}`,
                  }}
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
