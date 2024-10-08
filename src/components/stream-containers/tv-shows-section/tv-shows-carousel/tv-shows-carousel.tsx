import { fetchTvCarousalData } from '@/data-access';
import React from 'react'
import ShardCarouselSlider from '../../shared-media-component/shared-carousels/shared-carousel-slider';

export default async function TvShowsCarousel() {
   const data = await fetchTvCarousalData();
  return (
    <ShardCarouselSlider data={data} route='tv-shows'/>
  )
}
