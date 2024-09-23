"use client";

import React from 'react'
import{ MediaStatus, type IAnimeInfo } from "@/types";
import AnimeCover from './anime-cover';
import DescriptionSection from './description';
import Characters from './characters';

import SubContainer from './sub-container';
import Episodes from './episodes';

export const AnimeDetails: React.FC<{ data: IAnimeInfo }> = ({ data }) => {

  console.log("dafadf" , data);

  console.log("status" , MediaStatus.COMPLETED);

  return (
    <div className="md:p-6">
      <AnimeCover data={data} />
      <div className="grid gap-3 py-6 md:w-full md:grid-cols-3">
        <div className="flex flex-col gap-3 md:col-span-2">
          <DescriptionSection data={data.description ?? "Nothing is here"} />
          <div className=' md:hidden'>
            <SubContainer data={data} />
          </div>
          <Episodes data={data.episodes} />
          <Characters data={data.characters ?? []} />

        </div>
        <div className='hidden md:block'>
          <SubContainer data={data} />
        </div>
      </div>
    </div>
  );
};
