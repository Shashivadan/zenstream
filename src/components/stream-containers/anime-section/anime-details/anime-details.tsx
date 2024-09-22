"use client";

import React from 'react'
import type { IAnimeInfo } from "@/types";
import AnimeCover from './anime-cover';
import DescriptionSection from './description';
import Characters from './characters';

export const AnimeDetails: React.FC<{ data: IAnimeInfo }> = ({ data }) => {

  console.log("dafadf" , data);


  return (
    <div className="md:p-6">
      <AnimeCover data={data} />
      <div className="grid gap-3 py-6 md:w-full md:grid-cols-3">
        <div className=" flex  flex-col gap-3 md:col-span-2">
          <DescriptionSection data={data.description ?? "Nothing is here"} />
          <Characters data={data.characters ?? []} />
          <div></div>
        </div>
        <div className=" rounded-lg bg-zinc-300 p-3 dark:border-zinc-800 dark:bg-zinc-900 md:w-full">
          adf
        </div>
      </div>
    </div>
  );
};
