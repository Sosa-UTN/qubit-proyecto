import HeroSlider from '../components/home/HeroSlider'
import GiftCardBar from '../components/home/GiftCardBar'
import CombosBanner from '../components/home/CombosBanner'
import IndividualGrid from '../components/home/IndividualGrid'
import ContactButton from '../components/home/ContactButton'
import EventsBanner from '../components/home/EventsBanner'

export default function HomePage() {
  return (
    <div className="w-full flex flex-col gap-8 py-6">
      {/* 1. Hero Slider (Contenedor independiente más ancho para versión de computadora) */}
      <section className="w-full max-w-8xl mx-auto px-4">
        <HeroSlider />
      </section>

      {/* Resto de secciones contenidas en el ancho estándar max-w-5xl */}
      <div className="w-full max-w-5xl mx-auto px-4 flex flex-col gap-8">
        {/* 2. Módulo de Giftcard */}
        <GiftCardBar />

        {/* 3. Banner de Combos */}
        <CombosBanner />

        {/* 4. Catálogo de Productos Individuales */}
        <section>
          <h3
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#8A5665' }}
          >
            Productos Individuales
          </h3>
          <IndividualGrid />
        </section>

        {/* 5. Botones de información y contacto */}
        <ContactButton />

        {/* 6. Banner de Eventos / Quiénes Somos */}
        <EventsBanner />
      </div>
    </div>
  )
}
