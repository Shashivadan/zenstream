import React from 'react'
import GenreGrid from './_components/genre-grid'

export default function page() {
  return (
    <div className=" max-w-screen-lg  p-6 mx-auto flex items-center justify-center flex-col gap-7">
      <h1 className='md:text-5xl text-3xl font-bold mt-10'>Get Started</h1>
      <p className='md:text-lg text-zinc-500 text-center'>
        Browse our extensive library of free content, featuring a diverse range
        of genres to satisfy your streaming needs.
      </p>
      <GenreGrid/>
    </div>
  )
}
