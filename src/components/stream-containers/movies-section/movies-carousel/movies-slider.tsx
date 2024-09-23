import { fetchMoviesCarousalData } from '@/data-access/index';
import React from 'react'
import CarouselSlider from './carousel-slider';

export default async function MoviesSlider() {
  const data = await fetchMoviesCarousalData("dfd");


  if (!data) {
    return <div>None Found</div>;
  }

  return (
    <CarouselSlider  data={data} />
  )
}
