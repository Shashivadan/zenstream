"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import Gogoanime from "@consumet/extensions/dist/providers/anime/gogoanime";
// import Anilist from "@consumet/extensions/dist/providers/meta/anilist";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchAnilistInfoById } from "@/data-access";

import { Skeleton } from "@/components/ui/skeleton";

export default function EpisodesList({
  id,
  style,
}: {
  id: string;
  style: "grid" | "list";
}) {
  // const anilist = new Anilist(new Gogoanime());
  const {
    data: animeData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["episodes", id],
    queryFn: async () => await fetchAnilistInfoById(id),
  });

  if (isLoading) {
    return (
      <div>
        <Skeleton className="w-full rounded-lg md:h-12" />
      </div>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!animeData) {
    return <div>None Found</div>;
  }

  const data = animeData.episodes;

  return (
    <div className="mx-auto h-fit w-full overflow-hidden rounded-lg px-2">
      {style === "grid" ? (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="text-sm font-semibold dark:text-zinc-400 sm:text-base">
              {" "}
              Episodes {data.length}{" "}
            </AccordionTrigger>
            <AccordionContent className="border border-none">
              {data.length === 0 ? (
                <p className="text-sm text-zinc-400 sm:text-base">
                  No episodes found
                </p>
              ) : (
                <ScrollArea
                  type="hover"
                  className={` ${data.length > 40 ? "h-96" : "h-fit"} w-full rounded-md border-none p-4`}
                >
                  <div className="grid grid-cols-6 gap-2 sm:grid-cols-6 md:grid-cols-11 lg:grid-cols-14">
                    {data.map((episode) => (
                      <Link
                        href={`/anime/watch/${id}/${episode.id}`}
                        key={episode.id}
                      >
                        <Card className="overflow-hidden rounded-lg border-none bg-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-purple-700 hover:shadow-lg">
                          <CardContent className="flex items-center justify-center p-3">
                            <div className="text-white">{episode.number}</div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </ScrollArea>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <>
          <div className="w-full">
            <div className="my-4 w-full font-mono text-lg font-semibold">
              Episodes {data.length}
            </div>
            <ScrollArea
              className={` ${data.length > 40 ? "aspect-[14/16.5]" : "h-fit"} p-2"`}
            >
              <div className="grid grid-cols-6 gap-2 p-2 sm:grid-cols-6 md:grid-cols-11 lg:grid-cols-8">
                {data.map((episode) => (
                  <Link
                    href={`/anime/watch/${id}/${episode.id}`}
                    key={episode.id}
                  >
                    <Card className="overflow-hidden rounded-lg border-none bg-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-purple-700 hover:shadow-lg">
                      <CardContent className="flex items-center justify-center p-3">
                        <div className="text-white">{episode.number}</div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </ScrollArea>
          </div>
        </>
      )}
    </div>
  );
}
