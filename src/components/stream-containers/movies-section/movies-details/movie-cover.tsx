import React from 'react'
import { Button } from '@/components/ui/button'
import { PlayCircle, Plus } from 'lucide-react'
import type  { IMovieInfoType } from '@/types'
export default function MovieCover({data} : {data: IMovieInfoType}) {
  return (
    <div className="rounded-3xl bg-black text-white ">
      <div className="relative rounded-3xl">
        <img
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt="Kantara movie banner"
          className="w-full rounded-3xl object-cover object-center h-[500px] md:h-[700px]   "
        />
        <div className="absolute inset-0  rounded-3xl bg-gradient-to-t from-black/80 to-transparent">


        <div className="absolute bottom-4 left-4 w-full text-center md:p-6">
          <h1 className="mb-2 md:text-3xl font-bold">{data.title}</h1>
          <p className="mb-4 text-sm text-zinc-400 ">

            {data.tagline ? data.tagline : data.overview}
          </p>
          <div className="flex justify-center gap-3">
            <Button variant={"ringHover"} className=" font-semibold">
              <PlayCircle className="mr-2 h-4 w-4 " /> Play Now
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
