import  type { IMovieTypes } from '@/types'
import { ImageIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

export default function MoviesCard({data} : {data : IMovieTypes}) {
  return (
     <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-md border bg-background/50 shadow">
      {data.backdrop_path ? (
        <>
          <Image
            fill
            className="h-full w-full object-cover"
            src={`https://sup-proxy.zephex0-f6c.workers.dev/api-content?url=https://image.tmdb.org/t/p/original${data.backdrop_path}`}
            alt={data.title}
            sizes="100%"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-2 left-2 right-4 text-white">
            <h2 className="text-xl font-bold">{data.title}</h2>
            {data.release_date && (
              <p className="text-sm opacity-80">
                {new Date(data.release_date).getFullYear()}
              </p>
            )}
          </div>
        </>
      ) : (
        <ImageIcon className="text-muted" />
      )}
    </div>
  );
};
