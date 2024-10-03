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
import { removeAlphabetsAndWords } from "@/lib/regex";

export default async function EpisodesList({
  id,
  style = "list",
}: {
  id: string;
  style?: "list" | "grid";
}) {
  const data = await fetchDramaInfoById(id);

  if (!data) {
    return <div>None Found</div>;
  }

  return (
    <div className="mx-auto h-fit w-full overflow-hidden rounded-lg px-4 shadow-lg dark:bg-zinc-900/50">
      {style === "list" ? (
        <>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="text-sm font-semibold dark:text-zinc-400 sm:text-base">
                {" "}
                Episodes {data.episodes.length}{" "}
              </AccordionTrigger>
              <AccordionContent className="border border-none">
                {data.episodes.length === 0 ? (
                  <p className="text-sm text-zinc-400 sm:text-base">
                    No episodes found
                  </p>
                ) : (
                  <ScrollArea
                    className={` ${data.episodes.length > 14 ? "h-96" : "h-fit"} w-full overflow-hidden rounded-lg p-4 pr-4`}
                  >
                    <div className="grid grid-cols-5 gap-2 p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-14">
                      <GridEpisodes data={data.episodes} id={id} />
                    </div>
                  </ScrollArea>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </>
      ) : (
        <>
          <div className="w-full">
            <ScrollArea
              className={` ${data.episodes.length > 14 ? "h-96" : "h-fit"}`}
            >
              <div className="grid grid-cols-5 gap-2 p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
                <GridEpisodes data={data.episodes} id={id} />
              </div>
            </ScrollArea>
          </div>
        </>
      )}
    </div>
  );
}

export function GridEpisodes({
  data,
  id,
}: {
  data: IDramaEpisode[];
  id: string;
}) {
  return (
    <>
      {data.map((episode) => (
        <Link
          key={episode.id}
          href={`/drama/watch/${encodeURIComponent(id)}/${episode.id}`}
          className="block w-full"
        >
          <div>
            <Card className="transform overflow-hidden border border-solid duration-100 hover:scale-105 hover:bg-purple-600 dark:border-zinc-800/50">
              <CardContent className="flex items-center justify-center p-4">
                <span className="">
                  {removeAlphabetsAndWords(episode.title)}
                </span>
              </CardContent>
            </Card>
          </div>
        </Link>
      ))}
    </>
  );
}
