
import type { IMovieTvTypes as IMovieTypes } from "@/types";
import { format } from "date-fns";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MoviesCard({ data }: { data: IMovieTypes }) {
  return (
    <Link href={`/movies/${data.id}`}>
      <div className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-md border border-none bg-background/50 shadow">
        {data.backdrop_path ? (
          <>
            <Image
              fill
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
              alt={data.title}
              sizes="100%"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-2 left-2 right-4 text-white">
              <h2 className="font-bold md:text-xl">{data.title}</h2>
              {data.release_date && (
                <p className="text-xs opacity-80">
                  {format(new Date(data.release_date), "PPP")}
                </p>
              )}
            </div>
          </>
        ) : (
          <ImageIcon className="text-muted" />
        )}
      </div>
    </Link>
  );
}
