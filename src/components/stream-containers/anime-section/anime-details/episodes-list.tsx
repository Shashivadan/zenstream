

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
import { fetchAnilistInfoById } from "@/data-access/index";

export default async function EpisodesList({  id }: {  id: string }) {
  const animeData = await fetchAnilistInfoById(id);


  if (typeof animeData === "string") {
    return null; // or some other error handling
  }
  const data = animeData.episodes



  return (
    <div className="mx-auto h-fit w-full overflow-hidden rounded-lg px-4 text-white dark:bg-zinc-900/50">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className=" text-sm text-zinc-400 sm:text-base">
            {" "}
            Episodes {data.length}{" "}
          </AccordionTrigger>
          <AccordionContent className="border border-none">
           {data.length === 0 ? (
             <p className="text-sm text-zinc-400 sm:text-base">
               No episodes found
             </p>
           ) : (
              <ScrollArea className=" min-h-fit h-[500px]   w-full rounded-md border border-none p-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {data.map((episode) => (
                  <Card
                    key={episode.id}
                    className="relative overflow-hidden rounded-lg border-none bg-zinc-900/20 transition-all duration-300 hover:scale-105"
                  >
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src={episode.image}
                        alt={episode.title}
                        fill
                        sizes="100%"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent"></div>
                      <CardContent className="absolute bottom-0 left-0 right-0 z-20 p-4">
                        <h3 className="text-sm font-bold text-white">
                          {episode.id}
                        </h3>

                      </CardContent>
                    </AspectRatio>
                  </Card>
                ))}
              </div>
            </ScrollArea>
           )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
