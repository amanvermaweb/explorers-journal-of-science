import React from 'react'

export default function Contact() {
  return (
    <section id='contact' className='px-6 py-20 sm:px-10 lg:px-16 lg:py-24'>
      <div className='mx-auto max-w-6xl'>
        <h2 className='text-3xl font-semibold text-primary sm:text-4xl dark:text-text-primary'>
          Contact
        </h2>
        <div className='mt-10 rounded-4xl border border-secondary/20 p-8 shadow-[0_12px_30px_rgba(34,211,238,0.08)] dark:border-secondary/20'>
          <div className='h-1 w-20 rounded-full bg-secondary/80' />
          <p className='mt-6 text-base leading-8 text-slate-700 dark:text-text-secondary'>
            Contact
          </p>
        </div>
      </div>
    </section>
  )
}
