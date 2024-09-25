import { fetchMoviesCarousalData } from '@/data-access/index';
import React from 'react'
import CarouselSlider from './carousel-slider';
import ShardCarouselSlider from '../../shared-media-component/shared-carousels/shared-carousel-slider';

export default async function MoviesSlider() {
  const data = await fetchMoviesCarousalData();

  if (!data) {
    return <div>None Found</div>;
  }

  return (
    <ShardCarouselSlider data={data} route='movies'/>
  )
}
