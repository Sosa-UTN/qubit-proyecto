import { Link } from 'react-router-dom'
import { Menu, Search, User, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart()

  return (
    <header
      className="w-full px-4 py-3 flex items-center justify-between sticky top-0 z-50"
      style={{
        backgroundColor: '#FAF6F0',
        borderBottom: '1px solid #EDE8E1',
      }}
    >
      {/* ── Izquierda: hamburguesa + lupa ── */}
      <div className="flex items-center gap-3">
        <button
          aria-label="Menú"
          className="text-stone-500 hover:text-stone-800 transition-colors"
        >
          <Menu size={22} />
        </button>
        <button
          aria-label="Buscar"
          className="text-stone-500 hover:text-stone-800 transition-colors"
        >
          <Search size={20} />
        </button>
      </div>

      {/* ── Centro: Logotipo QUBIT ── */}
      <Link to="/" className="flex items-center select-none">
        <img
          src="/images/logo.png"
          alt="QUBIT"
          className="h-9 md:h-15 w-auto object-contain transition-transform hover:scale-105"
        />
      </Link>

      {/* ── Derecha: usuario + carrito ── */}
      <div className="flex items-center gap-3">
        <button
          aria-label="Mi cuenta"
          className="text-stone-500 hover:text-stone-800 transition-colors"
        >
          <User size={22} />
        </button>

        {/* Carrito con badge */}
        <button
          aria-label="Carrito de compras"
          onClick={() => setIsCartOpen(true)}
          className="relative text-stone-500 hover:text-stone-800 transition-colors"
        >
          <ShoppingBag size={22} />
          {totalItems > 0 && (
            <span
              className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-4 h-4 rounded-full text-white text-[10px] font-bold"
              style={{ backgroundColor: '#E2847A' }}
            >
              {totalItems > 9 ? '9+' : totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
