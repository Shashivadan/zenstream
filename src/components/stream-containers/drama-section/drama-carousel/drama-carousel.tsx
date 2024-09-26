import { fetchPopularDrama } from '@/data-access'
import React from 'react'
import DramaCarouselSlider from './drama-carousel-slider'

export  default async function DramaCarousel() {
  const data = await fetchPopularDrama()



  return (
    <DramaCarouselSlider data={data.results} route="drama" />
  )
}
