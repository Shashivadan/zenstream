import React from 'react'
import { Button } from '@/components/ui/button'
import { PlayCircle, PlayIcon } from 'lucide-react'
import type  { IMovieInfoType } from '@/types'
import Link from 'next/link';

export default function MovieCover({data} : {data: IMovieInfoType}) {


  return (
    <div className="rounded-3xl bg-black text-white">
      <div className="relative rounded-3xl">
        <img
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt="Kantara movie banner"
          className="h-[500px] w-full rounded-3xl object-cover object-center md:h-[700px]"
        />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/80 to-transparent">
          <div className="absolute bottom-4 left-4 w-full text-center md:p-6">
            <h1 className="mb-2 font-bold md:text-3xl">{data.title}</h1>
            <p className="mb-4 text-sm text-zinc-400">
              {data.tagline ? data.tagline : data.overview}
            </p>
            <div className="flex justify-center gap-3">
              <Button variant={"ringHover"} className="font-semibold">
                <Link href={`/movies/watch/${data.id}`} className="flex gap-2"><PlayCircle className="mr-2 h-4 w-4" /> Play Now</Link>
              </Button>
              {/* <Button variant="outline" className='font-semibold'>
                <PlayIcon className="mr-2 h-4 w-4" /> Trailer
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
