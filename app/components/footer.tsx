import React from 'react'

export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center w-full h-24 border-t border-gray-200 bg-gray-50 text-sm text-gray-500'>
      <p className='text-sm text-gray-500'>© 2023 Charles Poulin. All rights reserved.</p>
      <p>
        <span className="font-semibold text-sm text-gray-500">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React, Vercel hosting.
      </p>
          </footer>
  )
}
