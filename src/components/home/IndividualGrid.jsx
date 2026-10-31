import { individuals } from '../../data/products'

// Placeholder SVG con la silueta redondeada del módulo individual
function ProductPlaceholder({ color, name }) {
  return (
    <div
      className="w-full aspect-square flex items-center justify-center rounded-2xl"
      style={{ backgroundColor: color + '33' }} // color con 20% opacidad
    >
      <svg viewBox="0 0 120 120" width="80" height="80">
        <rect x="10" y="10" width="100" height="100" rx="20" ry="20" fill={color} opacity="0.6" />
        <text
          x="60"
          y="68"
          textAnchor="middle"
          fontSize="11"
          fontWeight="600"
          fill="white"
          fontFamily="system-ui, sans-serif"
        >
          {name.split(' ')[0]}
        </text>
      </svg>
    </div>
  )
}

export default function IndividualGrid() {
  return (
    <section className="w-full py-2">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {individuals.map((product) => (
          <div
            key={product.id}
            className="flex flex-col rounded-2xl overflow-hidden shadow-xs border border-stone-200/60 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
          >
            {/* Imagen del producto */}
            {product.image ? (
              <div className="w-full aspect-square overflow-hidden bg-stone-50 flex items-center justify-center p-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ) : (
              <ProductPlaceholder
                color={product.placeholderColor}
                name={product.name}
              />
            )}

            {/* Info del producto */}
            <div className="px-3 py-3 flex flex-col gap-1">
              <span
                className="text-[10px] font-bold tracking-wider uppercase"
                style={{ color: '#8EAE8D' }}
              >
                Individual
              </span>
              <p className="text-xs font-semibold text-stone-700 leading-snug line-clamp-2">
                {product.name}
              </p>
              <p className="text-xs font-bold text-stone-900 mt-0.5">
                ${product.price.toLocaleString('es-AR')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
