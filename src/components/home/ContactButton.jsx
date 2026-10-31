import { useState } from 'react'
import { X, Send, Truck, MapPin, Users, Phone } from 'lucide-react'

// Modales informativos
function InfoModal({ title, icon, onClose, children }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl p-7 shadow-2xl"
        style={{ backgroundColor: '#FAF6F0' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 transition-colors"
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center text-white"
            style={{ backgroundColor: '#8EAE8D' }}
          >
            {icon}
          </div>
          <h3 className="text-lg font-bold text-stone-700">{title}</h3>
        </div>

        {children}
      </div>
    </div>
  )
}

function ContactModal({ onClose }) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <InfoModal title="Contactanos" icon={<Phone size={20} />} onClose={onClose}>
      {sent ? (
        <div className="flex flex-col items-center gap-3 py-6 text-center">
          <span className="text-4xl">💌</span>
          <h4 className="text-base font-bold text-stone-700">¡Mensaje enviado!</h4>
          <p className="text-sm text-stone-500">
            Gracias por escribirnos. Te responderemos a la brevedad.
          </p>
          <button
            onClick={onClose}
            className="mt-3 px-6 py-2 rounded-full text-white text-sm font-semibold"
            style={{ backgroundColor: '#8EAE8D' }}
          >
            Cerrar
          </button>
        </div>
      ) : (
        <>
          <p className="text-xs text-stone-500 mb-4">
            Escribinos y te responderemos a la brevedad:
          </p>
          <div className="flex flex-col gap-1.5 mb-5 text-xs text-stone-600">
            <p>📧 <span className="font-medium">hola@qubit.com.ar</span></p>
            <p>📸 <span className="font-medium">@qubit.modular</span> en Instagram</p>
            <p>💬 <span className="font-medium">+54 9 11 5555-0123</span> (WhatsApp)</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              required
              type="text"
              placeholder="Tu nombre"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl text-sm text-stone-700 outline-none border bg-white"
              style={{ borderColor: '#E5E0DA' }}
            />
            <input
              required
              type="email"
              placeholder="Tu correo electrónico"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl text-sm text-stone-700 outline-none border bg-white"
              style={{ borderColor: '#E5E0DA' }}
            />
            <textarea
              required
              placeholder="Tu mensaje..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={3}
              className="w-full px-4 py-2.5 rounded-xl text-sm text-stone-700 outline-none border resize-none bg-white"
              style={{ borderColor: '#E5E0DA' }}
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ backgroundColor: '#8B68BA' }}
            >
              <Send size={14} /> Enviar mensaje
            </button>
          </form>
        </>
      )}
    </InfoModal>
  )
}

function ShippingModal({ onClose }) {
  return (
    <InfoModal title="Información de Envíos" icon={<Truck size={20} />} onClose={onClose}>
      <div className="flex flex-col gap-3 text-xs text-stone-600 leading-relaxed">
        <div className="p-3 rounded-2xl bg-white border border-stone-200/60">
          <p className="font-bold text-stone-700 text-sm mb-1">🚀 Envíos a todo el país</p>
          <p>Realizamos despachos a cualquier punto de Argentina mediante correo privado y encomiendas seguras.</p>
        </div>
        <div className="p-3 rounded-2xl bg-white border border-stone-200/60">
          <p className="font-bold text-stone-700 text-sm mb-1">⏱️ Tiempos de entrega</p>
          <ul className="list-disc pl-4 space-y-1">
            <li><strong>CABA y GBA:</strong> 2 a 4 días hábiles.</li>
            <li><strong>Interior del país:</strong> 4 a 7 días hábiles.</li>
          </ul>
        </div>
        <div className="p-3 rounded-2xl bg-white border border-stone-200/60">
          <p className="font-bold text-stone-700 text-sm mb-1">📦 Embalaje protegido</p>
          <p>Cada módulo viaja en cajas acolchadas para garantizar que las piezas encajen perfectamente al llegar.</p>
        </div>
      </div>
    </InfoModal>
  )
}

function AboutModal({ onClose }) {
  return (
    <InfoModal title="Quiénes Somos" icon={<Users size={20} />} onClose={onClose}>
      <div className="flex flex-col gap-3 text-xs text-stone-600 leading-relaxed">
        <div className="p-3.5 rounded-2xl bg-white border border-stone-200/60">
          <p className="font-bold text-stone-700 text-sm mb-1.5">🧩 El concepto QUBIT</p>
          <p>
            Somos un estudio de diseño que reimagina los organizadores de pared mediante piezas modulares tipo rompecabezas.
            Creemos que ordenar también puede ser divertido, táctil y estético.
          </p>
        </div>
        <div className="p-3.5 rounded-2xl bg-white border border-stone-200/60">
          <p className="font-bold text-stone-700 text-sm mb-1.5">🌱 Materiales & Calidad</p>
          <p>
            Cada parche y módulo está confeccionado en foam de alta densidad con fundas de textura suave y costuras reforzadas, diseñados para durar y combinarse infinitamente.
          </p>
        </div>
      </div>
    </InfoModal>
  )
}

function LocationModal({ onClose }) {
  return (
    <InfoModal title="Nuestra Ubicación" icon={<MapPin size={20} />} onClose={onClose}>
      <div className="flex flex-col gap-3 text-xs text-stone-600 leading-relaxed">
        <div className="p-3.5 rounded-2xl bg-white border border-stone-200/60">
          <p className="font-bold text-stone-700 text-sm mb-1">📍 Showroom & Punto de Retiro</p>
          <p className="text-stone-700 font-medium">Palermo Soho, Ciudad Autónoma de Buenos Aires</p>
          <p className="text-stone-400 text-[11px] mt-0.5">(Dirección exacta enviada con la confirmación de compra)</p>
        </div>
        <div className="p-3.5 rounded-2xl bg-white border border-stone-200/60">
          <p className="font-bold text-stone-700 text-sm mb-1">🕒 Horarios de Atención</p>
          <ul className="list-disc pl-4 space-y-1">
            <li><strong>Lunes a Viernes:</strong> 10:00 a 19:00 hs</li>
            <li><strong>Sábados:</strong> 11:00 a 16:00 hs</li>
          </ul>
        </div>
      </div>
    </InfoModal>
  )
}

// Lista de los 4 botones
const BUTTONS = [
  {
    id: 'contacto',
    name: 'Contacto',
    image: '/images/infoButtons/contacto.png',
  },
  {
    id: 'envio',
    name: 'Envíos',
    image: '/images/infoButtons/envio.png',
  },
  {
    id: 'quienes-somos',
    name: 'Quiénes Somos',
    image: '/images/infoButtons/quienes-somos.png',
  },
  {
    id: 'ubicacion',
    name: 'Ubicación',
    image: '/images/infoButtons/ubicacion.png',
  },
]

export default function ContactButton() {
  const [activeModal, setActiveModal] = useState(null)

  return (
    <section className="w-full py-4 select-none">
      {/* Grilla centrada con los 4 botones interactivos */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 max-w-xl mx-auto items-center justify-items-center">
        {BUTTONS.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setActiveModal(btn.id)}
            className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none transition-transform duration-300 hover:scale-105 active:scale-95"
            aria-label={btn.name}
          >
            {/* Imagen del botón */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
              <img
                src={btn.image}
                alt={btn.name}
                className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:-translate-y-1"
                loading="lazy"
              />
            </div>
            {/* Etiqueta de texto debajo */}
            <span className="text-xs font-bold text-stone-600 tracking-wide transition-colors group-hover:text-stone-900">
              {btn.name}
            </span>
          </button>
        ))}
      </div>

      {/* Renderizado del modal activo */}
      {activeModal === 'contacto' && <ContactModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'envio' && <ShippingModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'quienes-somos' && <AboutModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'ubicacion' && <LocationModal onClose={() => setActiveModal(null)} />}
    </section>
  )
}
