import MovieRecommendation from '@/components/stream-containers/movies-section/movies-player/movie-recommendation';
import VideoPlayer from '@/components/stream-containers/movies-section/movies-player/video-player';
import { decodeParam } from '@/lib/url-param-encoder'
import React from 'react'


export default function page({params} : { params: { id: string } }) {
  const id = decodeParam(params.id)

  return (
    <div>
      <VideoPlayer id={id} />
      <div>
        <div className=' mt-3'>
          <MovieRecommendation id={id} />
        </div>
      </div>
    </div>
  );
}
