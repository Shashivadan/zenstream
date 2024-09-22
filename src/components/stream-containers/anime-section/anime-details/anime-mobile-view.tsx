"use client";

import { Button } from '@/components/ui/button';
import { IAnimeInfo } from '@/types';
import type { ITitle } from '@consumet/extensions/dist/models';
import { Play, ThumbsUp } from 'lucide-react';
import React from 'react'

export default function AnimeMobileView({ data }: { data: IAnimeInfo }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-white sm:p-6 md:hidden">
      <h2 className="mb-2 text-center text-2xl font-bold sm:text-3xl md:text-4xl">

        {(data.title as ITitle).english ?? (data.title as ITitle).romaji}
      </h2>
      <p className="max-w-2x mb-4 text-center text-xs sm:text-sm">
        {data.genres?.join(", ")}
      </p>
      <div className="flex w-full flex-col items-center justify-center gap-2 sm:gap-3 md:w-fit md:flex-row">
        <Button
          variant="ringHover"
          className="w-full text-sm text-white sm:text-base"
        >
          <Play className="mr-1 h-3 sm:mr-2 sm:h-4 sm:w-4" />
          Play Now
        </Button>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="border-zinc-800 p-2 text-white dark:bg-black sm:p-3"
          >
            <ThumbsUp className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
          <Button
            variant="outline"
            className="border-zinc-800 p-2 text-white dark:bg-black sm:p-3"
          >
            <ThumbsUp className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
