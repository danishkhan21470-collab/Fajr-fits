import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900" />
      <div className="container py-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 badge">New Drop</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">Trendy fits for everyone.</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">Suits, hoodies, jeans, shirts and more — men & women. Clean UI, fast checkout on WhatsApp.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/shop" className="btn-primary">Shop now</Link>
            <Link to="/reselling" className="btn">Reselling</Link>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop" alt="Hero" className="w-full h-[360px] object-cover rounded-2xl shadow" />
        </div>
      </div>
    </section>
  )
}
