"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Gogoanime from "@consumet/extensions/dist/providers/anime/gogoanime";
import Anilist from "@consumet/extensions/dist/providers/meta/anilist";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchAnilistInfoById } from "@/data-access";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

export default  function EpisodesList({ id , style }: { id: string , style: 'grid' | 'list' }) {
  const anilist = new Anilist(new Gogoanime());
  const { data:animeData  , isError , isLoading} = useQuery({
    queryKey: ["episodes", id],
    queryFn: async () =>  await fetchAnilistInfoById(id),
  })



  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!animeData) {
    return <div>None Found</div>;
  }

  const data = animeData.episodes

  return (
    <div className="mx-auto h-fit w-full overflow-hidden rounded-lg px-4 text-white dark:bg-zinc-900/50">
      {style === "grid" ? (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="text-sm text-zinc-400 sm:text-base">
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
                  className="h-[500px] min-h-fit w-full rounded-md border border-none p-4"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {data.map((episode) => (
                      <Link
                        href={`/anime/watch/${id}/${episode.id}`}
                        key={episode.id}
                      >
                        <Card
                          key={episode.id}
                          className="relative overflow-hidden rounded-lg border-none bg-zinc-900/20 transition-all duration-300 hover:scale-105"
                        >
                          <AspectRatio ratio={16 / 9}>
                            <Image
                              src={episode.image ?? ""}
                              alt={episode.title ?? ""}
                              fill
                              sizes="100%"
                              className="object-cover"
                            />
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent"></div>
                            <CardContent className="absolute bottom-0 left-0 right-0 z-20 p-4">
                              <h3 className="text-sm font-bold text-white">
                                {/* {episode.title
                                  ? episode.title
                                  : episode.id} */}
                                {episode.id}
                              </h3>
                              <div className="text-xs text-zinc-400">{`Episode ${episode.number}`}</div>
                            </CardContent>
                          </AspectRatio>
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
            <ScrollArea className=" aspect-[14.6/16]   py-2">
              {data.map((episode) => (
                <Card
                  key={episode.id}
                  className="mb-4 mr-4 border border-solid dark:border-zinc-800/50"
                >
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="">
                      <h3 className="text-sm font-semibold sm:text-base">
                        {episode.id}
                      </h3>
                      <p className="text-xs text-muted-foreground sm:text-sm">
                        {/* {format(new Date(episode.airDate), "PPP")} */}
                        {episode.airDate}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs sm:text-sm"
                    >
                      <Link href={`/anime/watch/${id}/${episode.id}`}>Watch</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </ScrollArea>
          </div>
        </>
      )}
    </div>
  );
}
