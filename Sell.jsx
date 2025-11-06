import React from 'react'
export default function Sell() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-semibold">Sell with Us</h2>
      <p className="mt-2 text-slate-700 dark:text-slate-300">
        Are you a maker or brand? Partner with us. We offer quick onboarding, quality checks,
        and transparent margins.
      </p>
      <ul className="mt-4 list-disc pl-5 space-y-1 text-sm">
        <li>Bulk purchase & consignments</li>
        <li>Photography & listing support</li>
        <li>Fast payouts</li>
      </ul>
      <a className="btn-primary mt-4 inline-block" href="/contact">Contact Team</a>
    </section>
  )
}
