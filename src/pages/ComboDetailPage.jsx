import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import { combos } from '../data/products'
import { useCart } from '../context/CartContext'
import SubHeader from '../components/layout/SubHeader'
import AngleSelector from '../components/product/AngleSelector'
import ColorPicker from '../components/product/ColorPicker'
import TypePicker from '../components/product/TypePicker'
import PreviewModal from '../components/product/PreviewModal'

// SVG grande de la pieza de rompecabezas (vista principal)
function MainPuzzlePiece({ color }) {
  return (
    <div className="flex items-center justify-center" style={{ width: 220, height: 220 }}>
      <svg viewBox="0 0 200 200" width="220" height="220">
        <path
          d="
            M 55 35
            L 83 35
            Q 83 13 100 13
            Q 117 13 117 35
            L 145 35
            L 145 63
            Q 167 63 167 80
            Q 167 97 145 97
            L 145 125
            Q 145 147 128 147
            Q 111 147 111 125
            L 77 125
            Q 77 147 60 147
            Q 43 147 43 125
            L 55 125
            L 55 97
            Q 33 97 33 80
            Q 33 63 55 63
            Z
          "
          fill={color}
          style={{ filter: 'drop-shadow(3px 6px 10px rgba(0,0,0,0.18))' }}
        />
        {/* Highlight 3D */}
        <path
          d="M 58 38 L 83 38 Q 85 17 100 16 Q 115 17 117 38 L 143 38 L 143 63 Q 163 64 163 80 Q 163 92 155 95"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.3"
        />
        {/* Texto centrado */}
        <text x="100" y="88" textAnchor="middle" fontSize="13" fontWeight="700" fill="white" fontFamily="system-ui, sans-serif" opacity="0.85">
          Combo
        </text>
        <text x="100" y="105" textAnchor="middle" fontSize="13" fontWeight="700" fill="white" fontFamily="system-ui, sans-serif" opacity="0.85">
          patch
        </text>
      </svg>
    </div>
  )
}

export default function ComboDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const combo = combos.find((c) => c.id === Number(id))

  // Estado de la configuración
  const [activeAngle, setActiveAngle] = useState(0)
  const [configuredModules, setConfiguredModules] = useState(() => {
    const base = combo?.modules
    return base.map((m) => ({
      name: m.name,
      type: m.defaultType || 'A',
      color: m.defaultColor || '#8EAE8D',
    }))
  })
  const [previewOpen, setPreviewOpen] = useState(false)
  const [addedFeedback, setAddedFeedback] = useState(false)

  // Sincronizar módulos y ángulo si cambia el combo
  useEffect(() => {
    if (combo) {
      const base = combo.modules
      setConfiguredModules(
        base.map((m) => ({
          name: m.name,
          type: m.defaultType || 'A',
          color: m.defaultColor || '#8EAE8D',
        }))
      )
      setActiveAngle(0)
    }
  }, [id, combo])

  function handleModuleChange(index, field, value) {
    setConfiguredModules((prev) =>
      prev.map((mod, i) => (i === index ? { ...mod, [field]: value } : mod))
    )
  }

  // Producto no encontrado
  if (!combo) {
    return (
      <div className="flex flex-col items-center justify-center flex-1 gap-4 py-24 text-center px-4">
        <span className="text-5xl">🧩</span>
        <h2 className="text-xl font-bold text-stone-700">Combo no encontrado</h2>
        <p className="text-sm text-stone-400">
          El combo que buscás no existe o fue removido del catálogo.
        </p>
        <button
          onClick={() => navigate('/combos')}
          className="flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-80"
          style={{ backgroundColor: '#8EAE8D' }}
        >
          <ArrowLeft size={14} /> Volver al catálogo
        </button>
      </div>
    )
  }

  function handleAddToCart() {
    addToCart(combo, {
      angle: combo.images[activeAngle]?.angle || 'Frente',
      modules: configuredModules,
    })
    setAddedFeedback(true)
    setTimeout(() => setAddedFeedback(false), 2200)
  }

  const currentAngle = combo.images[activeAngle]

  return (
    <div className="flex flex-col flex-1">
      {/* Barra de sección */}
      <SubHeader title={`Producto — ${combo.name}`} />

      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        {/* Botón de regreso */}
        <button
          onClick={() => navigate('/combos')}
          className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-600 transition-colors mb-6"
        >
          <ArrowLeft size={14} /> Volver al catálogo
        </button>

        {/* ── Layout principal: 2 columnas ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 items-start">

          {/* ────────────── COLUMNA IZQUIERDA ────────────── */}
          <div className="flex flex-col items-center gap-5 w-full">

            {/* Imagen / Pieza principal */}
            <div
              className="w-full max-w-[670px] aspect-[4/4] rounded-3xl overflow-hidden shadow-sm bg-white border border-stone-200/60 flex items-center justify-center p-1"
            >
              {currentAngle?.image ? (
                <img
                  src={currentAngle.image}
                  alt={combo.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <MainPuzzlePiece color={currentAngle?.bg || '#8EAE8D'} />
              )}
            </div>

            {/* Selector de ángulos/miniaturas ahora abajo de la imagen principal */}
            <AngleSelector
              angles={combo.images}
              activeIndex={activeAngle}
              onChange={setActiveAngle}
            />

            {/* Botón "¿Cómo quedaría?" */}
            <button
              onClick={() => setPreviewOpen(true)}
              className="w-full max-w-xs py-3 rounded-full text-sm font-semibold border-2 transition-all hover:shadow-md focus:outline-none"
              style={{
                borderColor: '#C8D7E3',
                color: '#6E94B2',
                backgroundColor: '#F4F8FB',
              }}
            >
              ¿Cómo quedaría? 👁️
            </button>
          </div>

          {/* ────────────── COLUMNA DERECHA ────────────── */}
          <div className="flex flex-col gap-5">

            {/* Bloque de información del producto */}
            <div
              className="rounded-3xl px-6 py-5 flex flex-col gap-3"
              style={{ backgroundColor: '#C8D7E3' }}
            >
              <h2 className="text-xl font-black text-stone-700">{combo.name}</h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                {combo.description}
              </p>
              <div className="flex flex-col gap-1 text-xs text-stone-500">
                <p><span className="font-semibold">Material:</span> {combo.materials}</p>
                <p><span className="font-semibold">Dimensiones:</span> {combo.dimensions}</p>
              </div>
              <p
                className="text-2xl font-black mt-1"
                style={{ color: '#5A7A9A' }}
              >
                ${combo.price.toLocaleString('es-AR')}
              </p>
            </div>

            {/* Configuradores dinámicos de módulos */}
            <div className="flex flex-col gap-3">
              {configuredModules.map((module, index) => (
                <div
                  key={index}
                  className="rounded-2xl px-5 py-4 flex flex-col gap-3.5 shadow-xs border border-stone-200/50"
                  style={{ backgroundColor: '#F5F0EB' }}
                >
                  <p className="text-xs font-bold text-stone-600 uppercase tracking-wider">
                    {module.name}
                  </p>
                  <TypePicker
                    label="Tipos"
                    selected={module.type}
                    onChange={(newType) => handleModuleChange(index, 'type', newType)}
                  />
                  <ColorPicker
                    label="Colores"
                    selected={module.color}
                    onChange={(newColor) => handleModuleChange(index, 'color', newColor)}
                  />
                </div>
              ))}
            </div>

            {/* Botón Agregar al carrito */}
            <button
              onClick={handleAddToCart}
              disabled={addedFeedback}
              className="w-full py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:opacity-80 focus:outline-none"
              style={{
                backgroundColor: addedFeedback ? '#8EAE8D' : '#6E94B2',
              }}
            >
              {addedFeedback ? '¡Agregado al carrito! ✓' : 'Agregar al carrito'}
            </button>
          </div>
        </div>
      </div>

      {/* Modal de vista previa */}
      {previewOpen && (
        <PreviewModal
          combo={combo}
          config={{ modules: configuredModules }}
          onClose={() => setPreviewOpen(false)}
        />
      )}
    </div>
  )
}
