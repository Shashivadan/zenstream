import React from 'react'
import { Button } from '@/components/ui/button'
import { PlayCircle, Plus } from 'lucide-react'
import type  { IDetailedTVShow } from '@/types'
export default function TvShowCover({ data }: { data: IDetailedTVShow}) {

  return (
    <div className="rounded-3xl bg-black text-white">
      <div className="relative rounded-3xl">
        <img
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt="Kantara movie banner"
          className="h-[500px] w-full rounded-3xl object-cover object-center md:h-[700px]"
        />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/80 to-transparent">
          <div className="absolute bottom-4 left-4 w-full text-center flex flex-col items-center md:p-6">
            <h1 className="mb-2 font-bold md:text-3xl">{data.name}</h1>
            <p className="mb-4 overflow-hidden text-ellipsis whitespace-nowrap text-xs normal-case opacity-50 md:w-1/2 md:text-center">
              {data.tagline ? data.tagline : data.overview}
            </p>
            <div className="flex justify-center gap-3">
              <Button variant={"ringHover"} className="font-semibold">
                <PlayCircle className="mr-2 h-4 w-4" /> Play Now
              </Button>
              <Button variant="outline">
                <Plus className="mr-2 h-4 w-4" /> Add to List
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
