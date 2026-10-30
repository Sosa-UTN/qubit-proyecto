import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Gift } from 'lucide-react'

// Mapa de códigos válidos → ruta destino
const GIFT_CODES = {
  GIFT1:  '/combos/1',
  COMBO1: '/combos/1',
  GIFT2:  '/combos/2',
  COMBO2: '/combos/2',
  GIFT3:  '/combos/3',
  COMBO3: '/combos/3',
  GIFT4:  '/combos/4',
  COMBO4: '/combos/4',
}

export default function GiftCardBar() {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleRedeem() {
    const normalized = code.trim().toUpperCase()
    const destination = GIFT_CODES[normalized]

    if (destination) {
      setError('')
      setCode('')
      navigate(destination)
    } else {
      setError('Código inválido. Probá con COMBO1, COMBO2, COMBO3 o COMBO4.')
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleRedeem()
  }

  return (
    <div className="flex flex-col items-center gap-2 my-2">
      {/* Contenedor con forma de "pieza" usando border-radius asimétrico */}
      <div
        className="flex items-center gap-3 px-5 py-3 shadow-md w-full max-w-md"
        style={{
          backgroundColor: '#8B68BA',
          borderRadius: '12px 40px 12px 40px',
        }}
      >
        <Gift size={20} color="white" className="shrink-0" />
        <input
          type="text"
          value={code}
          onChange={(e) => { setCode(e.target.value); setError('') }}
          onKeyDown={handleKeyDown}
          placeholder="Ingresá tu código Giftcard..."
          className="flex-1 bg-transparent text-white placeholder-white/60 text-sm outline-none"
        />
        <button
          onClick={handleRedeem}
          className="shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-opacity hover:opacity-80"
          style={{ backgroundColor: '#FAF6F0', color: '#8B68BA' }}
        >
          Canjear
        </button>
      </div>

      {/* Mensaje de error */}
      {error && (
        <p className="text-xs text-center" style={{ color: '#B86B77' }}>
          {error}
        </p>
      )}
    </div>
  )
}
