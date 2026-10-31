import { X } from 'lucide-react'

// Muestra una simulación de cómo se ven las piezas ensambladas
export default function PreviewModal({ combo, config, onClose }) {
  const { module1Color, module2Color, module1Type, module2Type } = config

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl p-7 shadow-2xl"
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
        <p className="text-xs text-stone-400 mb-6">
          Simulación visual de tu configuración — {combo.name}
        </p>

        {/* Área de simulación */}
        <div
          className="w-full rounded-2xl flex items-center justify-center gap-4 py-10 px-6 mb-5"
          style={{ backgroundColor: '#EBF0F5' }}
        >
          {/* Pieza módulo 1 */}
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-20 h-20 rounded-xl shadow-md flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: module1Color }}
            >
              {module1Type}
            </div>
            <span className="text-[10px] text-stone-400 font-semibold">Módulo 1</span>
          </div>

          {/* Conector visual */}
          <div className="flex flex-col items-center gap-1">
            <div
              className="w-6 h-2 rounded-full"
              style={{ backgroundColor: '#C8D7E3' }}
            />
            <span className="text-[9px] text-stone-300">✦</span>
            <div
              className="w-6 h-2 rounded-full"
              style={{ backgroundColor: '#C8D7E3' }}
            />
          </div>

          {/* Pieza módulo 2 */}
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-20 h-20 rounded-xl shadow-md flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: module2Color }}
            >
              {module2Type}
            </div>
            <span className="text-[10px] text-stone-400 font-semibold">Módulo 2</span>
          </div>
        </div>

        {/* Resumen de configuración */}
        <div
          className="rounded-xl px-5 py-4 flex flex-col gap-2 text-xs"
          style={{ backgroundColor: '#F0EBE5' }}
        >
          <p className="font-semibold text-stone-600 mb-1">Tu configuración:</p>
          <div className="flex items-center gap-2 text-stone-500">
            <span className="font-medium">Módulo 1:</span>
            <span>Tipo {module1Type}</span>
            <span
              className="w-3 h-3 rounded-full inline-block"
              style={{ backgroundColor: module1Color }}
            />
          </div>
          <div className="flex items-center gap-2 text-stone-500">
            <span className="font-medium">Módulo 2:</span>
            <span>Tipo {module2Type}</span>
            <span
              className="w-3 h-3 rounded-full inline-block"
              style={{ backgroundColor: module2Color }}
            />
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
