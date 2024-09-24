"use client";
import { format } from "date-fns";
import { Play } from "lucide-react";
import Link from "next/link";
import React from "react";
import type { IMovieTypes } from "@/types";
import { Button } from "@/components/ui/button";
import MobileViewCarousel from "./mobile-view-carousel";

export default function MovieCarouselCard({
  show,
  isDetailsPage,
  route,
}: {
  show: IMovieTypes;
  isDetailsPage?: boolean;
  route?: "movies" | "tv" | "drama";
}) {
  return (
    <>
      <div className="md:hidden">
        <MobileViewCarousel show={show} />
      </div>

      <div className="relative mx-auto hidden h-[50vh] w-full md:flex">
        <img
          alt={show.name || show.title}
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
              <div className="my-2 flex gap-2">
                <Link href={`/${route}/${show.id}`}>
                  <Button
                    variant={"ringHover"}
                    className="w-full whitespace-nowrap font-bold"
                  >
                    <Play className="mr-1 h-3 sm:h-4 sm:w-4" />
                    Play Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
