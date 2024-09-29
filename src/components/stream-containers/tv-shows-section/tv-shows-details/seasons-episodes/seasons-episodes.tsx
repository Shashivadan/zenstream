"use client";

import { fetchTvShowInfoById } from "@/data-access";
import { useQuery } from "@tanstack/react-query";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TvShowSeasons from "./tv-show-seasons";
export default function SeasonsEpisodes({ id }: { id: string | number }) {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-seasons", id],
    queryFn: async () => await fetchTvShowInfoById(id.toString()),
  });

  return (
    <div>
      <Accordion
        type="single"
        collapsible>
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className=" text-sm text-zinc-400 no-underline ">Seasons {data?.seasons.length}</AccordionTrigger>
          <AccordionContent className="">
           {data?.seasons && <TvShowSeasons seasons={data?.seasons} id={id.toString()} />}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
