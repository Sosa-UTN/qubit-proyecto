import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import CombosPage from './pages/CombosPage'
import ComboDetailPage from './pages/ComboDetailPage'
import EventsPage from './pages/EventsPage'

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FAF6F0' }}>
          <Navbar />

          <main className="flex-1 flex flex-col">
            <Routes>
              <Route path="/"           element={<HomePage />}       />
              <Route path="/combos"     element={<CombosPage />}     />
              <Route path="/combos/:id" element={<ComboDetailPage />} />
              <Route path="/eventos"    element={<EventsPage />}     />
            </Routes>
          </main>

          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}
