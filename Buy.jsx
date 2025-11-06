import React from 'react'
export default function Buy() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-semibold">Buy</h2>
      <p className="mt-2 text-slate-700 dark:text-slate-300">
        Retail customers can order via WhatsApp for fastest support. Ask for size charts and live photos.
      </p>
      <ul className="mt-4 list-disc pl-5 space-y-1 text-sm">
        <li>UPI/COD options</li>
        <li>Real-time stock checks</li>
        <li>Size & fit assistance</li>
      </ul>
      <a className="btn-primary mt-4 inline-block" href="/shop">Browse Products</a>
    </section>
  )
}
