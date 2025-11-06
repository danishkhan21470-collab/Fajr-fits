import React from 'react'
export default function Reselling() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-semibold">Reselling Program</h2>
      <p className="mt-2 text-slate-700 dark:text-slate-300">
        Start reselling with zero inventory. We provide photos, prices, and shipping. You earn margins on every order.
      </p>
      <ul className="mt-4 list-disc pl-5 space-y-1 text-sm">
        <li>No minimum order</li>
        <li>Catalog & content pack weekly</li>
        <li>Drop shipping available</li>
      </ul>
      <a className="btn-primary mt-4 inline-block" href="/contact">Join via WhatsApp</a>
    </section>
  )
}
