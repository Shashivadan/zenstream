import MovieRecommendation from '@/components/stream-containers/movies-section/movies-player/movie-recommendation';
import VideoPlayer from '@/components/stream-containers/movies-section/movies-player/video-player';

import React from 'react'


export default function page({params} : { params: { id: string } }) {
  const id = params.id


  if (!id) {
    return <div>None Found</div>;
  }

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
