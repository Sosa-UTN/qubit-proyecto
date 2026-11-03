import { useState } from 'react'
import SubHeader from '../components/layout/SubHeader'
import EventsSlider from '../components/events/EventsSlider'

export default function EventsPage() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <div className="flex flex-col flex-1 pb-16">
      {/* Barra de título de sección */}
      <SubHeader title="Eventos" />

      {/* Contenido principal */}
      <div className="w-full max-w-5xl mx-auto px-4 py-8 flex flex-col gap-10">

        {/* 1. Slider de Eventos con el bloque central sobreimpreso */}
        <section className="w-full">
          <EventsSlider />
        </section>

        {/* 2. Sección de suscripción */}
        <div className="w-full max-w-xl mx-auto">
          <div
            className="w-full rounded-2xl px-6 py-6 flex flex-col gap-4 shadow-xs"
            style={{ backgroundColor: '#F5F0EB' }}
          >
            {subscribed ? (
              <div className="flex flex-col items-center gap-2 py-4 text-center">
                <span className="text-3xl">🎉</span>
                <p className="font-bold text-stone-700">¡Gracias por suscribirte!</p>
                <p className="text-sm text-stone-500">
                  Te vamos a avisar a tu correo sobre las próximas ferias de Qubit.
                </p>
                <button
                  onClick={() => setSubscribed(false)}
                  className="mt-2 text-xs underline font-semibold"
                  style={{ color: '#8EAE8D' }}
                >
                  Suscribir otro correo
                </button>
              </div>
            ) : (
              <>
                <p className="text-sm font-semibold text-stone-700">
                  📬 Avisame de próximos eventos
                </p>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    className="flex-1 px-4 py-2.5 rounded-xl text-sm text-stone-700 outline-none border bg-white"
                    style={{ borderColor: '#E0D9D2' }}
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl text-white text-sm font-semibold transition-opacity hover:opacity-80 shrink-0"
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
    </div>
  )
}
