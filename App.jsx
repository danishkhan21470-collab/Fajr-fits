import React, { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Policies from './pages/Policies.jsx'
import Sell from './pages/Sell.jsx'
import Buy from './pages/Buy.jsx'
import Reselling from './pages/Reselling.jsx'
import Wholesale from './pages/Wholesale.jsx'
import Checkout from './pages/Checkout.jsx'

export const StoreContext = React.createContext(null)

const initialProducts = [
  { id: 1, title: 'Men Hoodie — Classic Black', gender:'men', price: 1299, image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop', tags: ['hoodies','winter'] },
  { id: 2, title: 'Men Denim Jeans — Slim Fit', gender:'men', price: 1599, image: 'https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=1200&auto=format&fit=crop', tags: ['jeans'] },
  { id: 3, title: 'Men Oxford Shirt — White', gender:'men', price: 1199, image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop', tags: ['shirts'] },
  { id: 4, title: 'Women Suit Set — Pastel', gender:'women', price: 2499, image: 'https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=1200&auto=format&fit=crop', tags: ['suits'] },
  { id: 5, title: 'Women Hoodie — Cream', gender:'women', price: 1299, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e4?q=80&w=1200&auto=format&fit=crop', tags: ['hoodies','winter'] },
  { id: 6, title: 'Women High-Rise Jeans — Blue', gender:'women', price: 1699, image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop', tags: ['jeans'] },
  { id: 7, title: 'Unisex Graphic Hoodie', gender:'unisex', price: 1399, image: 'https://images.unsplash.com/photo-1511556670410-f6b2d1d2d27c?q=80&w=1200&auto=format&fit=crop', tags: ['hoodies'] },
  { id: 8, title: 'Unisex Overshirt — Olive', gender:'unisex', price: 1499, image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop', tags: ['shirts'] },
]

function useDarkMode() {
  const [dark, setDark] = useState(() => JSON.parse(localStorage.getItem('dark')||'false'))
  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(dark))
    const html = document.documentElement
    if (dark) html.classList.add('dark'); else html.classList.remove('dark')
  }, [dark])
  return [dark, setDark]
}

function Navbar({ cartCount, onOpenCart }) {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useDarkMode()
  const linkClass = ({isActive}) => `px-3 py-2 rounded-lg ${isActive ? 'bg-slate-900 text-white dark:bg-white dark:text-black' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800">
      <div className="container py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-lg">Fajr Fits</Link>
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={() => setDark(!dark)} className="btn" title="Dark mode">🌓</button>
          <button onClick={() => setOpen(!open)} className="btn" aria-label="Menu">☰</button>
        </div>
        <nav className="hidden md:flex gap-1 text-sm">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/shop" className={linkClass}>Shop</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <NavLink to="/policies" className={linkClass}>Policies</NavLink>
          <NavLink to="/sell" className={linkClass}>Sell</NavLink>
          <NavLink to="/buy" className={linkClass}>Buy</NavLink>
          <NavLink to="/reselling" className={linkClass}>Reselling</NavLink>
          <NavLink to="/wholesale" className={linkClass}>Wholesale</NavLink>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <button onClick={() => setDark(!dark)} className="btn">🌓</button>
          <button onClick={onOpenCart} className="relative btn">
            Cart
            {cartCount > 0 && <span className="absolute -right-2 -top-2 inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black text-[10px] w-5 h-5">{cartCount}</span>}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="container py-2 grid grid-cols-2 gap-2 text-sm">
            <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/shop" className={linkClass}>Shop</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>Contact</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/policies" className={linkClass}>Policies</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/sell" className={linkClass}>Sell</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/buy" className={linkClass}>Buy</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/reselling" className={linkClass}>Reselling</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/wholesale" className={linkClass}>Wholesale</NavLink>
          </div>
          <div className="container py-2"><button onClick={onOpenCart} className="btn w-full">Open Cart</button></div>
        </div>
      )}
    </header>
  )
}

function Cart({ items, onClose, onRemove, onClear }) {
  const total = items.reduce((s, it) => s + it.price * it.qty, 0)
  const waLink = "https://wa.me/919149915866?text=" + encodeURIComponent(
    "*Order — Fajr Fits*\n" + items.map(it => `- ${it.title} × ${it.qty} = ₹${it.price*it.qty}`).join("\n") + `\nTotal: ₹${total}`
  )
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white dark:bg-slate-950 shadow-xl p-5 overflow-y-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={onClose} className="btn">Close</button>
        </div>
        <div className="mt-4 space-y-4">
          {items.length === 0 && <p className="text-slate-600 dark:text-slate-300">Your cart is empty.</p>}
          {items.map((it) => (
            <div key={it.id} className="flex gap-3 card p-3">
              <img src={it.image} alt={it.title} className="w-20 h-20 object-cover rounded-lg" />
              <div className="flex-1">
                <p className="text-sm font-medium line-clamp-1">{it.title}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">₹{it.price.toLocaleString('en-IN')} × {it.qty}</p>
                <div className="mt-2 flex items-center gap-2">
                  <button onClick={() => onRemove(it.id)} className="btn text-xs">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t border-slate-200 dark:border-slate-800 pt-4 flex items-center justify-between">
          <p className="font-medium">Total</p>
          <p className="font-semibold">₹{total.toLocaleString('en-IN')}</p>
        </div>
        <div className="mt-3 flex gap-2">
          <button onClick={onClear} className="btn">Clear</button>
          <a href={waLink} target="_blank" rel="noreferrer" className="btn-primary flex-1 text-center">Checkout on WhatsApp</a>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [products] = useState(initialProducts)

  function addToCart(p) {
    setCart(prev => {
      const found = prev.find(x => x.id === p.id)
      if (found) return prev.map(x => x.id === p.id ? { ...x, qty: x.qty + 1 } : x)
      return [...prev, { ...p, qty: 1 }]
    })
  }
  function removeFromCart(id) { setCart(prev => prev.filter(x => x.id != id)) }
  function clearCart() { setCart([]) }

  const ctx = useMemo(() => ({ products, addToCart }), [products])

  return (
    <BrowserRouter>
      <StoreContext.Provider value={ctx}>
        <div className="min-h-screen text-slate-900 dark:text-slate-100">
          <Navbar cartCount={cart.length} onOpenCart={() => setCartOpen(true)} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/reselling" element={<Reselling />} />
            <Route path="/wholesale" element={<Wholesale />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <footer className="border-t border-slate-200 dark:border-slate-800">
            <div className="container py-8 text-sm text-slate-600 dark:text-slate-400 flex flex-col md:flex-row gap-2 items-center justify-between">
              <p>© {new Date().getFullYear()} Fajr Fits. All rights reserved.</p>
              <div className="flex gap-4">
                <Link to="/policies" className="link">Policies</Link>
                <Link to="/contact" className="link">Support</Link>
              </div>
            </div>
          </footer>
          {cartOpen && <Cart items={cart} onClose={() => setCartOpen(false)} onRemove={removeFromCart} onClear={clearCart} />}
        </div>
      </StoreContext.Provider>
    </BrowserRouter>
  )
}
