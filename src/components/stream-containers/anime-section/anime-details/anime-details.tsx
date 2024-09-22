import React from 'react'
import type { IAnimeInfo } from "@consumet/extensions/dist/models";
import AnimeCover from './anime-cover';

export const AnimeDetails: React.FC<{ data: IAnimeInfo }> = ({ data }) => {
  return <div className='md:p-6'>
    <AnimeCover data={data} />
  </div>;
};
