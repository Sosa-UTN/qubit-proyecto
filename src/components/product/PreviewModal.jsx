import { X } from 'lucide-react'

// Muestra una simulación de cómo se ven las piezas ensambladas
export default function PreviewModal({ combo, config, onClose }) {
  const modules = config.modules || [
    { name: 'Módulo pequeño 1', type: config.module1Type || 'A', color: config.module1Color || '#B86B77' },
    { name: 'Módulo pequeño 2', type: config.module2Type || 'A', color: config.module2Color || '#667493' },
  ]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl p-7 shadow-2xl max-h-[90vh] flex flex-col"
        style={{ backgroundColor: '#FAF6F0' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 transition-colors"
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>

        <h3 className="text-base font-bold text-stone-700 mb-1">
          ¿Cómo quedaría?
        </h3>
        <p className="text-xs text-stone-400 mb-5">
          Simulación visual de tu configuración — {combo.name}
        </p>

        {/* Scrollable body if needed */}
        <div className="overflow-y-auto pr-1 flex flex-col gap-4">
          {/* Área de simulación visual */}
          <div
            className="w-full rounded-2xl flex flex-wrap items-center justify-center gap-3 py-6 px-4"
            style={{ backgroundColor: '#EBF0F5' }}
          >
            {modules.map((mod, index) => (
              <div key={index} className="flex flex-col items-center gap-1.5">
                <div
                  className="w-26 h-16 rounded-2xl shadow-md flex items-center justify-center text-white font-black text-base transition-transform hover:scale-105"
                  style={{ backgroundColor: mod.color }}
                >
                  {mod.type}
                </div>
                <span className="text-[10px] text-stone-500 font-semibold max-w-[70px] text-center leading-tight">
                  {mod.name}
                </span>
              </div>
            ))}
          </div>

          {/* Resumen de configuración */}
          <div
            className="rounded-xl px-5 py-4 flex flex-col gap-2.5 text-xs"
            style={{ backgroundColor: '#F0EBE5' }}
          >
            <p className="font-semibold text-stone-700 mb-0.5">Tu configuración:</p>
            <div className="flex flex-col gap-2">
              {modules.map((mod, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-stone-600 border-b border-stone-200/50 pb-1.5 last:border-none last:pb-0"
                >
                  <span className="font-medium text-stone-700">{mod.name}:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-stone-500 font-semibold">Tipo {mod.type}</span>
                    <span
                      className="w-3.5 h-3.5 rounded-full inline-block border border-white/60 shadow-xs"
                      style={{ backgroundColor: mod.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full py-2.5 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-80"
          style={{ backgroundColor: '#8EAE8D' }}
        >
          Cerrar vista previa
        </button>
      </div>
    </div>
  )
}
