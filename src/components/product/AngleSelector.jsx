// Selector horizontal de miniaturas/ángulos para ubicar debajo de la foto principal
export default function AngleSelector({ angles, activeIndex, onChange }) {
  return (
    <div className="flex flex-row gap-3 items-center justify-center flex-wrap py-1">
      {angles.map((angle, i) => {
        const isActive = i === activeIndex
        return (
          <button
            key={i}
            onClick={() => onChange(i)}
            aria-label={`Vista: ${angle.angle}`}
            title={angle.angle}
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-full overflow-hidden transition-all duration-200 hover:scale-105 focus:outline-none flex items-center justify-center p-0.5 bg-stone-100 cursor-pointer shadow-xs"
            style={{
              boxShadow: isActive
                ? '0 0 0 3px white, 0 0 0 5px #8EAE8D'
                : '0 2px 6px rgba(0,0,0,0.1)',
              opacity: isActive ? 1 : 0.65,
            }}
          >
            {angle.image ? (
              <img
                src={angle.image}
                alt={angle.angle}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <span className="text-white text-[10px] font-bold select-none">
                {angle.angle.charAt(0)}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
