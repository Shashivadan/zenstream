import React from 'react'
import { Button } from '@/components/ui/button'
import { ImageIcon, PlayCircle } from 'lucide-react'
import type  { IMovieInfoType } from '@/types'
import Link from 'next/link';

export default function MovieCover({data} : {data: IMovieInfoType}) {


  return (
    <div className="rounded-3xl bg-black text-white">
      <div className="relative rounded-3xl">
        {data.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
            alt={data.title}
            className="h-[500px] w-full rounded-3xl object-cover object-center md:h-[700px]"
          />
        ) : (
          <div className="flex items-center justify-center">
            <ImageIcon
              size={200}
              className="h-[500px] text-center text-muted md:h-[700px]"
            />
          </div>
        )}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/80 to-transparent">
          <div className="absolute bottom-2 flex w-full flex-col items-center gap-3 text-center mb-2 md:mb-0 md:p-6">
            <h1 className="font-bold md:text-3xl">{data.title}</h1>
            <p className="line-clamp-1 w-1/2 overflow-hidden text-ellipsis text-sm text-zinc-400">
              {data.tagline ? data.tagline : data.overview}
            </p>
            <div className="flex items-center justify-center gap-3">
              <Button variant={"ringHover"} className="font-semibold">
                <Link
                  href={`/movies/watch/${data.id}`}
                  className="flex items-center gap-2"
                >
                  <PlayCircle className="h-4 w-4" /> Play Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
