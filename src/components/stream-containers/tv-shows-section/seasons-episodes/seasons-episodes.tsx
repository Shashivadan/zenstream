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
import { Skeleton } from "@/components/ui/skeleton";
export default function SeasonsEpisodes({ id }: { id: string | number }) {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-seasons", id],
    queryFn: async () => await fetchTvShowInfoById(id.toString()),
  });

  if (isError) {
    return <div>Error</div>;
  }



  return (
    <div>
      {isLoading && <Skeleton className=" w-full rounded-lg dark:bg-zinc-800"/>}
      <Accordion
        type="single"
        collapsible
        className=" "
        >
        <AccordionItem value="item-1" className="border-none ">
          <AccordionTrigger className=" text-sm dark:text-zinc-400 font-semibold  ">Seasons {data?.seasons.length}</AccordionTrigger>
          <AccordionContent className="">
           {data?.seasons && <TvShowSeasons seasons={data?.seasons} id={id.toString()} />}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
