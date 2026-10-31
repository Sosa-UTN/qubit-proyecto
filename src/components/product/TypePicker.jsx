const TYPES = [
  { key: 'QUBOX', label: 'QUBOX' },
  { key: 'QUBOOK', label: 'QUBOOK' },
  { key: 'QUMOOD', label: 'QUMOOD' },
  { key: 'QUMIRROR', label: 'QUMIRROR' },
  { key: 'QUBART', label: 'QUBART' },
]

export default function TypePicker({ selected, onChange, label = 'Tipos' }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-semibold text-stone-500">{label}</span>
      <div className="flex gap-2">
        {TYPES.map(({ key, label: name }) => {
          const isActive = selected === key
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              aria-label={`Tipo ${name}`}
              className="w-20 h-9 rounded-xl text-xs font-bold transition-all duration-200 hover:scale-105 focus:outline-none"
              style={{
                backgroundColor: isActive ? '#8EAE8D' : '#EDE8E1',
                color: isActive ? 'white' : '#8A7F7A',
                boxShadow: isActive ? '0 2px 8px rgba(142,174,141,0.4)' : 'none',
              }}
            >
              {name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
