import NotFound from '@/app/not-found';
import MovieDetails from '@/components/stream-containers/movies-section/movies-details/movies-details';
import { fetchMovieInfoById } from '@/data-access/movies-apis/movies-api';
import { decodeParam } from '@/lib/url-param-encoder'
import React from 'react'

export default async function page({params} : { params: { id: string } }) {
  const id = decodeParam(params.id)
  const data = await fetchMovieInfoById(id);


  if(typeof data === "string") {
    return <NotFound/>;
  }

   if (!data) {
     return <div>None Found</div>;
   }



  return (
    <div>
      <MovieDetails data={data} />
    </div>
  )
}
