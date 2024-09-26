import React from 'react'

import { AnimeDetails } from '@/components/stream-containers/anime-section/anime-details/anime-details';
import { fetchAnilistInfoById } from '@/data-access/index';
import { decodeParam } from '@/lib/url-param-encoder';


export default async function page({params} : { params: { id: string } }) {
  const id = decodeParam(params.id)
  const data  = await fetchAnilistInfoById(id);

  if(typeof data === "string") {
    return <div>{data}</div>;
  }
   if (!data) {
     return <div>None Found</div>;
   }
  return <AnimeDetails data={data} />;
}
