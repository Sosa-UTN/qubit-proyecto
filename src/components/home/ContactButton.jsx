import { useState } from 'react'
import { X, Send } from 'lucide-react'

function ContactModal({ onClose }) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    /* Overlay */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.35)' }}
      onClick={onClose}
    >
      {/* Panel */}
      <div
        className="relative w-full max-w-md rounded-3xl p-7 shadow-2xl"
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

        {sent ? (
          /* Estado enviado */
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <span className="text-4xl">💌</span>
            <h3 className="text-lg font-bold text-stone-700">¡Mensaje enviado!</h3>
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
            <h3 className="text-lg font-bold text-stone-700 mb-1">Contactanos</h3>
            <p className="text-xs text-stone-500 mb-4">
              Escribinos y te respondemos a la brevedad. También podés encontrarnos en:
            </p>

            {/* Info de contacto */}
            <div className="flex flex-col gap-1.5 mb-5">
              <p className="text-xs text-stone-600">
                📧 <span className="font-medium">hola@qubit.com.ar</span>
              </p>
              <p className="text-xs text-stone-600">
                📸 <span className="font-medium">@qubit.modular</span> en Instagram
              </p>
              <p className="text-xs text-stone-600">
                🛒 Tienda en MercadoLibre y TiendaNube
              </p>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                required
                type="text"
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl text-sm text-stone-700 outline-none border"
                style={{ borderColor: '#E5E0DA', backgroundColor: '#FFFFFF' }}
              />
              <input
                required
                type="email"
                placeholder="Tu correo electrónico"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl text-sm text-stone-700 outline-none border"
                style={{ borderColor: '#E5E0DA', backgroundColor: '#FFFFFF' }}
              />
              <textarea
                required
                placeholder="Tu mensaje..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl text-sm text-stone-700 outline-none border resize-none"
                style={{ borderColor: '#E5E0DA', backgroundColor: '#FFFFFF' }}
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#8B68BA' }}
              >
                <Send size={14} />
                Enviar mensaje
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default function ContactButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col items-center gap-2 py-4">
        <button
          onClick={() => setOpen(true)}
          className="w-20 h-20 rounded-full shadow-md flex flex-col items-center justify-center text-white text-xs font-semibold transition-transform hover:scale-105"
          style={{ backgroundColor: '#C8D7E3' }}
          aria-label="Contacto"
        >
          <span className="text-2xl leading-none">✉️</span>
          <span className="text-[10px] mt-1 text-stone-600 font-semibold tracking-wide">Contacto</span>
        </button>
      </div>

      {open && <ContactModal onClose={() => setOpen(false)} />}
    </>
  )
}
