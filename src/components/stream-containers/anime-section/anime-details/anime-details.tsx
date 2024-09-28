

import React from 'react'
import{  type IAnimeInfo } from "@/types";
import AnimeCover from './anime-cover';
import DescriptionSection from "@/components/stream-containers/shared-media-component/description";
import Characters from './characters';
import SubContainer from './sub-container';
import EpisodesList from './episodes-list';
import Trailer from './trailer';

export const AnimeDetails: React.FC<{ data: IAnimeInfo }> = ({ data }) => {

  console.log("anime details" , data.trailer.id);


  return (
    <div className="md:p-6">
      <AnimeCover data={data} />
      <div className="grid gap-3 py-6 md:w-full md:grid-cols-3">
        <div className="flex flex-col gap-3 md:col-span-2">
          <DescriptionSection data={data.description ?? "Nothing is here"} />
          <div className="md:hidden">
            <SubContainer data={data} />
          </div>
          <EpisodesList style="grid" id={data.id} />
          <Characters data={data.characters ?? []} />
        </div>
        <div className="hidden md:block">
          <SubContainer data={data} />

          <div className='mt-3'>
            <Trailer
              src={`https://www.youtube.com/watch?v=${data.trailer.id}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
