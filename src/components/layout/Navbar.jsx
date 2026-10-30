import { Link } from 'react-router-dom'
import { Menu, Search, User, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

// Cada letra del logo con su color de marca
const LOGO_LETTERS = [
  { char: 'Q', color: '#A594C9' },
  { char: 'U', color: '#E2847A' },
  { char: 'B', color: '#E5B25D' },
  { char: 'I', color: '#7CA682' },
  { char: 'T', color: '#6E94B2' },
]

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
        {LOGO_LETTERS.map(({ char, color }) => (
          <span
            key={char}
            className="text-2xl font-extrabold leading-none"
            style={{ color }}
          >
            {char}
          </span>
        ))}
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
