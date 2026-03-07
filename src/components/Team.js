import React from 'react'

export default function Team() {
  return (
    <section id='team' className='px-6 py-20 sm:px-10 lg:px-16 lg:py-24'>
      <div className='mx-auto max-w-6xl'>
        <h2 className='text-3xl font-semibold text-primary sm:text-4xl dark:text-text-primary'>
          Team
        </h2>
        <div className='mt-10 rounded-4xl border border-primary/15 p-8 shadow-[0_12px_30px_rgba(59,130,246,0.08)] dark:border-primary/15'>
          <div className='h-1 w-20 rounded-full bg-secondary/80' />
          <p className='mt-6 text-base leading-8 text-slate-700 dark:text-text-secondary'>
            Team
          </p>
        </div>
      </div>
    </section>
  )
}
