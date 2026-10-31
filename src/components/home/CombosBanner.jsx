import { Link } from 'react-router-dom'

export default function CombosBanner() {
  return (
    <Link
      to="/combos"
      className="relative w-full overflow-hidden rounded-3xl cursor-pointer transition-all duration-300 hover:scale-[1.015] hover:shadow-lg focus:outline-none block select-none"
      aria-label="Ver catálogo de combos"
    >
      <img
        src="/images/boton-combos.jpg"
        alt="Ver catálogo de Combos"
        className="w-full h-auto object-cover rounded-3xl shadow-sm"
        loading="lazy"
      />
    </Link>
  )
}
