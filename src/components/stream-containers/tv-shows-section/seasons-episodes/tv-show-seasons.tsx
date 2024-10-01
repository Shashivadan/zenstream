"use client";

import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { type ITvShowSeasons } from "@/types";

import TvShowSeasonsEposides from "./tv-shows-seasons-episodes";

export default function TvShowSeasons({
  seasons, id
}: {
  seasons: ITvShowSeasons[] ,
  id: string
}) {
  return (
    <div className="flex flex-col gap-3">
      {seasons.map((season: ITvShowSeasons) => (
        <div key={season.season_number}>
          <Accordion
            type="single"
            collapsible
            className="rounded-lg dark:bg-zinc-800/30 shadow-lg"
          >
            <AccordionItem className="border-none px-3 no-underline" value="item-1">
              <AccordionTrigger>{season.name}</AccordionTrigger>
              <AccordionContent>
                <TvShowSeasonsEposides season={season} id={id} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
