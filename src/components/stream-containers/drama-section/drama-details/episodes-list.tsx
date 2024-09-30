import { fetchDramaInfoById } from "@/data-access";
import type { IDramaEpisode } from "@/types";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default async function EpisodesList({
  id,
  style = "list",
}: {
  id: string;
  style?: "list" | "grid";
}) {
  const data = await fetchDramaInfoById(id);

  return (
    <div className="mx-auto h-fit w-full overflow-hidden rounded-lg px-4 text-white dark:bg-zinc-900/50">
      {style === "list" ? (
        <>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="text-sm text-zinc-400 sm:text-base">
                {" "}
                Episodes {data.episodes.length}{" "}
              </AccordionTrigger>
              <AccordionContent className="border border-none">
                {data.episodes.length === 0 ? (
                  <p className="text-sm text-zinc-400 sm:text-base">
                    No episodes found
                  </p>
                ) : (
                  <ScrollArea className="h-[300px] pr-4 sm:h-[400px]">
                    {data.episodes.map((episode: IDramaEpisode) => (
                      <Link
                        key={episode.id}
                        href={`/drama/watch/${encodeURIComponent(id)}/${episode.id}`}
                        className="block w-full"
                      >
                        <Card
                          key={episode.id}
                          className="mb-4 border border-solid dark:border-zinc-800/50"
                        >
                          <CardContent className="flex items-center justify-between p-4">
                            <div className="">
                              <h3 className="text-sm font-semibold sm:text-base">
                                {episode.title}
                              </h3>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-xs sm:text-sm"
                            >
                              Watch
                            </Button>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </ScrollArea>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </>
      ) : (
        <>
          <div className="w-full">
            <div className="my-4 w-full font-mono text-lg font-semibold">
              Episodes {data.episodes.length}
            </div>
            <ScrollArea className="aspect-[14.6/16] py-2">
              {data.episodes.map((episode) => (
                <Card
                  key={episode.id}
                  className="mb-4 mr-4 border border-solid dark:border-zinc-800/50"
                >
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="">
                      <h3 className="text-sm font-semibold sm:text-base">
                        {episode.id.replace(/-/g, " ")}
                      </h3>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs sm:text-sm"
                    >
                      <Link
                        href={`/drama/watch/${encodeURIComponent(id)}/${episode.id}`}
                      >
                        Watch
                      </Link>
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
