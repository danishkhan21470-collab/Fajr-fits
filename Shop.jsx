import React, { useContext, useMemo, useState } from 'react'
import { StoreContext } from '../App.jsx'

function ProductCard({ p, onAdd }) {
  return (
    <div className="group card overflow-hidden transition hover:shadow">
      <div className="relative">
        <img src={p.image} alt={p.title} className="h-64 w-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-medium line-clamp-1">{p.title}</h3>
        <p className="mt-1 text-slate-600 dark:text-slate-400">₹{p.price.toLocaleString('en-IN')}</p>
        <div className="mt-4 flex gap-2">
          <button onClick={() => onAdd(p)} className="flex-1 btn">Add to Cart</button>
          <a href="#/checkout" className="btn">Details</a>
        </div>
      </div>
    </div>
  )
}

export default function Shop() {
  const { products, addToCart } = useContext(StoreContext)
  const [gender, setGender] = useState('all')
  const [tag, setTag] = useState('all')
  const [q, setQ] = useState('')

  const tags = ['all','suits','hoodies','jeans','shirts','winter']
  const genders = ['all','men','women','unisex']

  const list = useMemo(() => {
    return products.filter(p => {
      const okGender = gender === 'all' || p.gender === gender
      const okTag = tag === 'all' || p.tags.includes(tag)
      const okQ = !q || p.title.toLowerCase().includes(q.toLowerCase())
      return okGender && okTag && okQ
    })
  }, [products, gender, tag, q])

  return (
    <section className="container py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex gap-2">
          {genders.map(g => (
            <button key={g} onClick={() => setGender(g)} className={`btn ${gender===g ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>{g}</button>
          ))}
        </div>
        <div className="flex gap-2">
          {tags.map(t => (
            <button key={t} onClick={() => setTag(t)} className={`btn ${tag===t ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>{t}</button>
          ))}
        </div>
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search..." className="w-full md:w-64 btn" />
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map(p => (<ProductCard key={p.id} p={p} onAdd={addToCart} />))}
      </div>
    </section>
  )
}
