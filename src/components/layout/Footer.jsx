import { Link } from 'react-router-dom'

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Combos', to: '/combos' },
  { label: 'Eventos', to: '/eventos' },
  { label: 'Contacto', to: '/' },
]

export default function Footer() {
  return (
    <footer
      className="w-full mt-auto px-8 py-8"
      style={{ backgroundColor: '#8EAE8D' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        {/* ── Centro: Logotipo QUBIT ── */}
        <Link to="/" className="flex items-center select-none">
          <img
            src="/images/logo.png"
            alt="QUBIT"
            className="h-9 md:h-15 w-auto object-contain transition-transform hover:scale-105"
          />
        </Link>

        {/* Navigation links */}
        <nav className="flex gap-6">
          {links.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="text-white/80 hover:text-white text-sm transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="w-full h-px bg-white/20" />

        {/* Copyright */}
        <p className="text-white/60 text-xs text-center">
          © {new Date().getFullYear()} Qubit. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
