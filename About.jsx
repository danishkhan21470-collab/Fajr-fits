import React from 'react'
export default function About() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-semibold">About Fajr Fits</h2>
      <p className="mt-2 text-slate-700 dark:text-slate-300">
        Fajr Fits brings quality basics and seasonal essentials for men and women — at fair prices.
        We focus on clean styles, comfy fits, and quick support on WhatsApp.
      </p>
      <ul className="mt-4 text-sm list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
        <li>Fast pan-India shipping</li>
        <li>Easy 7-day returns & size exchange</li>
        <li>Bulk & reseller pricing available</li>
      </ul>
    </section>
  )
}
