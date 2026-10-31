import { useState } from 'react'
import SubHeader from '../components/layout/SubHeader'

export default function EventsPage() {
  const [email, setEmail]   = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <div className="flex flex-col flex-1">
      <SubHeader title="Eventos" />

      <div className="w-full max-w-3xl mx-auto px-4 py-12 flex flex-col items-center gap-8">

        {/* Card principal "Próximamente" */}
        <div
          className="w-full rounded-3xl flex flex-col items-center justify-center gap-6 px-8 py-14 text-center"
          style={{ backgroundColor: '#C8D7E3' }}
        >
          {/* Título */}
          <p
            className="text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: '#6E94B2' }}
          >
            ✦ Eventos · Talleres · Ferias ✦
          </p>

          <h1
            className="text-3xl md:text-4xl font-black tracking-wide"
            style={{ color: '#8A5665' }}
          >
            PRÓXIMAMENTE MÁS...
          </h1>

          {/* Separador decorativo */}
          <div className="flex items-center gap-3 w-full max-w-xs">
            <div className="flex-1 h-px" style={{ backgroundColor: '#A8C0D0' }} />
            <span style={{ color: '#A8C0D0' }}>✦</span>
            <div className="flex-1 h-px" style={{ backgroundColor: '#A8C0D0' }} />
          </div>

          {/* Logo QUBIT 3D grande */}
          <div className="flex items-center justify-center select-none py-2">
            <img
              src="/images/logo.png"
              alt="QUBIT"
              className="h-16 md:h-20 w-auto object-contain drop-shadow-sm"
            />
          </div>

          <p className="text-sm text-stone-500 max-w-sm leading-relaxed">
            Estamos preparando nuevos eventos, talleres y ferias para este año.
            ¡Dejanos tu correo y te avisamos cuando estén confirmadas las fechas!
          </p>
        </div>

        {/* Sección suscripción */}
        <div
          className="w-full rounded-2xl px-6 py-6 flex flex-col gap-4"
          style={{ backgroundColor: '#F5F0EB' }}
        >
          {subscribed ? (
            <div className="flex flex-col items-center gap-2 py-4 text-center">
              <span className="text-3xl">🎉</span>
              <p className="font-bold text-stone-700">¡Gracias por suscribirte!</p>
              <p className="text-sm text-stone-500">
                Te vamos a avisar cuando haya novedades sobre próximos eventos.
              </p>
              <button
                onClick={() => setSubscribed(false)}
                className="mt-2 text-xs underline"
                style={{ color: '#8EAE8D' }}
              >
                Suscribir otro correo
              </button>
            </div>
          ) : (
            <>
              <p className="text-sm font-semibold text-stone-600">
                📬 Avisame de próximos eventos y talleres
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm text-stone-700 outline-none border"
                  style={{ borderColor: '#E0D9D2', backgroundColor: '#FFFFFF' }}
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-opacity hover:opacity-80 shrink-0"
                  style={{ backgroundColor: '#8B68BA' }}
                >
                  Suscribirme
                </button>
              </form>
            </>
          )}
        </div>

      </div>
    </div>
  )
}
