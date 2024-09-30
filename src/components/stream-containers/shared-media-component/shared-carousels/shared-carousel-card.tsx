"use client";
import { format } from "date-fns";

import Link from "next/link";
import React from "react";
import type { IMovieTvTypes } from "@/types";

import ShardMobileViewCarousel from "./shared-mobile-view-carousel";


export default function SharedCarouselCard({
  show,
  route,
}: {
  show: IMovieTvTypes;
  isDetailsPage?: boolean;
  route?: "movies" | "tv-shows" | "drama";
}) {
  return (
    <>
      <Link href={`/${route}/${show.id}`}>
        <div className="md:hidden">
          <ShardMobileViewCarousel show={show} />
        </div>

        <div className="relative mx-auto hidden h-[50vh] w-full md:flex">
          <img
            alt={show.title || show.name}
            className="h-full w-full rounded-t-xl object-cover object-top"
            src={`https://image.tmdb.org/t/p/original/${show.backdrop_path}`}
          />
          <div className="to-from-background/10 absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-background">
            <div></div>
            <div className="mx-auto w-[96%]">
              <div className="flex flex-col items-center gap-1 text-pretty uppercase">
                <div className="text-sm normal-case opacity-50">
                  {show.release_date || show.first_air_date
                    ? format(
                        new Date(show.release_date || show.first_air_date),
                        "PPP",
                      )
                    : "Unknown"}
                </div>
                <div className="text-pretty text-3xl font-bold">
                  {show.title || show.name}
                </div>

                <div className="overflow-hidden text-ellipsis whitespace-nowrap text-xs normal-case opacity-50 md:w-1/2 md:text-center">
                  {show?.overview}
                </div>

              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
