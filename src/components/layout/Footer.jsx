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

        {/* Fila inferior */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/70">
          <p>© {new Date().getFullYear()} Qubit. Todos los derechos reservados.</p>

          <p className="flex items-center gap-1.5">
            <span>Web por</span>
            <a
              href="https://wa.me/5491144096730?text=Hola!%20Vi%20la%20web%20de%20Qubit%20y%20me%20gustaría%20hacerte%20una%20consulta%20por%20un%20desarrollo%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/90 hover:text-white underline underline-offset-2 transition-colors inline-flex items-center gap-1"
              title="Contactar al desarrollador por WhatsApp"
            >
              Santiago Sosa • Full Stack
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
