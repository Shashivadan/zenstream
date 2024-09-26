"use client";

import {  PlayCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import type { IDramaResult } from "@/types";
import { Button } from "@/components/ui/button";


export default function DramaCarouselCard({
  show,
  isDetailsPage,
  route,
}: {
  show: IDramaResult;
  isDetailsPage?: boolean;
  route?: "movies" | "tv-shows" | "drama";
}) {
  return (
    <>
      <div className="h-[600px] w-full border-solid dark:border-zinc-900 md:h-[400px]">
        <div
          className="relative h-full w-full overflow-hidden rounded-md bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${show.image})` }}
        >
          <div className="inset-0 bg-black/70 backdrop-blur-3xl backdrop-filter md:absolute" />
          <div className="absolute inset-0">
            <div className="flex h-full flex-col md:flex-row">
              <img
                alt={show.title}
                className="inset-x-3 inset-y-4 hidden h-[370px] overflow-hidden rounded-md object-contain md:absolute md:block"
                src={show.image ?? ""}
              />
              <div className="z-10 flex flex-1 flex-col justify-end rounded-md p-3 md:ml-[280px] md:p-6">
                <div className="w-full rounded-lg bg-black/80 p-3 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
                  <h2 className="mb-2 line-clamp-2 text-3xl font-bold text-white">
                    {show.title}
                  </h2>

                  <Link href={`/${route}/${show.id}`}>
                    <Button
                      variant={"ringHover"}
                      className="bg-purple-600 font-semibold ring-purple-700 hover:ring hover:ring-offset-1"
                    >
                      <PlayCircle className="mr-2 h-5 w-5" /> Watch Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
