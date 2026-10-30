import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Agrega un item al carrito con un id único basado en timestamp
  function addToCart(product, options = {}) {
    const newItem = {
      uniqueId: `${product.id}-${Date.now()}`,
      product,
      options,
    }
    setItems((prev) => [...prev, newItem])
  }

  // Elimina un item por su uniqueId
  function removeFromCart(uniqueId) {
    setItems((prev) => prev.filter((item) => item.uniqueId !== uniqueId))
  }

  // Vacía el carrito por completo
  function clearCart() {
    setItems([])
  }

  const totalItems = items.length

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// Hook personalizado para consumir el contexto
export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart debe usarse dentro de un <CartProvider>')
  }
  return context
}
