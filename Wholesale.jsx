import React from 'react'
export default function Wholesale() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-semibold">Wholesale</h2>
      <p className="mt-2 text-slate-700 dark:text-slate-300">
        Bulk orders for boutiques and colleges with tiered pricing and fast shipping.
      </p>
      <ul className="mt-4 list-disc pl-5 space-y-1 text-sm">
        <li>MOQs start at 10 units per style</li>
        <li>Custom branding on request</li>
        <li>GST invoice available</li>
      </ul>
      <a className="btn-primary mt-4 inline-block" href="/contact">Get Bulk Quote</a>
    </section>
  )
}
