import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { X, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

function ColorDot({ color }) {
  return (
    <span
      className="inline-block w-3 h-3 rounded-full border border-white/50"
      style={{ backgroundColor: color }}
      title={color}
    />
  )
}

function CartItem({ item, onRemove }) {
  const { product, options, uniqueId } = item
  const modules = options.modules || [
    ...(options.module1Type ? [{ name: 'Módulo 1', type: options.module1Type, color: options.module1Color }] : []),
    ...(options.module2Type ? [{ name: 'Módulo 2', type: options.module2Type, color: options.module2Color }] : []),
  ]
  const mainColor = modules[0]?.color || options.module1Color || '#8EAE8D'

  return (
    <div
      className="flex items-start gap-3 rounded-2xl px-4 py-3"
      style={{ backgroundColor: '#F5F0EB' }}
    >
      {/* Icono de pieza */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white text-xs font-bold shadow-xs"
        style={{ backgroundColor: mainColor }}
      >
        {product.name.charAt(0)}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-stone-700 truncate">{product.name}</p>
        <p className="text-xs text-stone-400 mt-0.5">Vista: {options.angle}</p>

        {/* Lista de módulos */}
        <div className="flex flex-col gap-1 mt-1.5">
          {modules.map((mod, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-[10px]">
              <span className="text-stone-400 truncate max-w-[110px]">{mod.name}:</span>
              <span className="font-semibold text-stone-600">Tipo {mod.type}</span>
              <ColorDot color={mod.color} />
            </div>
          ))}
        </div>

        <p
          className="text-sm font-bold mt-2"
          style={{ color: '#6E94B2' }}
        >
          ${product.price.toLocaleString('es-AR')}
        </p>
      </div>

      {/* Eliminar */}
      <button
        onClick={() => onRemove(uniqueId)}
        aria-label="Eliminar del carrito"
        className="text-stone-300 hover:text-red-400 transition-colors shrink-0 mt-0.5"
      >
        <Trash2 size={15} />
      </button>
    </div>
  )
}

export default function CartDrawer() {
  const navigate = useNavigate()
  const { items, removeFromCart, clearCart, totalItems, isCartOpen, setIsCartOpen } = useCart()

  const total = items.reduce((sum, i) => sum + i.product.price, 0)

  // Bloquea el scroll del body mientras el drawer está abierto
  useEffect(() => {
    document.body.style.overflow = isCartOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isCartOpen])

  if (!isCartOpen) return null

  function handleFinalize() {
    clearCart()
    setIsCartOpen(false)
    // Pequeño feedback — en un caso real aquí iría a una pantalla de confirmación
    alert('¡Gracias por tu compra! 🎉 Tu pedido Qubit fue recibido.')
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40"
        style={{ backgroundColor: 'rgba(0,0,0,0.35)' }}
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Panel lateral derecho */}
      <aside
        className="fixed top-0 right-0 h-full z-50 flex flex-col shadow-2xl"
        style={{
          backgroundColor: '#FAF6F0',
          width: '100%',
          maxWidth: '400px',
        }}
        role="dialog"
        aria-label="Carrito de compras"
      >
        {/* Header del drawer */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b"
          style={{ borderColor: '#EDE8E1' }}
        >
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} style={{ color: '#8EAE8D' }} />
            <h2 className="text-base font-bold text-stone-700">
              Tu Carrito
              {totalItems > 0 && (
                <span
                  className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: '#E2847A' }}
                >
                  {totalItems}
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Cerrar carrito"
            className="text-stone-400 hover:text-stone-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Contenido */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            /* Estado vacío */
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
              <span className="text-5xl">🧩</span>
              <p className="text-stone-500 text-sm font-medium">
                Tu carrito está vacío,<br />¡agrega un combo modular!
              </p>
              <button
                onClick={() => { setIsCartOpen(false); navigate('/combos') }}
                className="px-6 py-2.5 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#8EAE8D' }}
              >
                Ver combos
              </button>
            </div>
          ) : (
            /* Lista de items */
            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <CartItem
                  key={item.uniqueId}
                  item={item}
                  onRemove={removeFromCart}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer con total y botón de finalizar */}
        {items.length > 0 && (
          <div
            className="px-5 py-5 flex flex-col gap-3 border-t"
            style={{ borderColor: '#EDE8E1' }}
          >
            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-stone-500">Total</span>
              <span
                className="text-xl font-black"
                style={{ color: '#5A7A9A' }}
              >
                ${total.toLocaleString('es-AR')}
              </span>
            </div>

            {/* Vaciar carrito */}
            <button
              onClick={clearCart}
              className="text-xs text-stone-400 hover:text-red-400 transition-colors self-start underline"
            >
              Vaciar carrito
            </button>

            {/* Finalizar pedido */}
            <button
              onClick={handleFinalize}
              className="w-full py-3.5 rounded-full text-white font-bold text-sm transition-opacity hover:opacity-80"
              style={{ backgroundColor: '#8EAE8D' }}
            >
              Finalizar pedido ✓
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
