"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { fetchCastInfoById } from "@/data-access/movies-apis/movies-api";
import type { ICastMember } from "@/types";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

export default function Cast({ id }: { id: string | number }) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["cast", id],
    queryFn: () => fetchCastInfoById(id),
  });

  if (typeof data === "string") {
    return <div>error</div>;
  }

  if (isError) {
    return <div>error</div>;
  }

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full rounded-lg border-none bg-zinc-300 px-2 dark:bg-zinc-900/50 sm:px-4"
    >
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="text-sm text-zinc-400 sm:text-sm">
          Cast&apos;s
        </AccordionTrigger>
        <AccordionContent>
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
            }}
            className="max-w-[23rem] md:max-w-full"
          >
            <CarouselContent className="mx-auto w-full">
              {data?.map((item: ICastMember) => (
                <CarouselItem key={item.id} className="basis-1/3 lg:basis-1/6">
                  <div className="p-1">
                    <div className="relative overflow-hidden rounded-lg border-none object-cover object-center">
                      <AspectRatio ratio={2 / 3}>
                        {item.profile_path ? (
                          <Image
                            loading="lazy"
                            sizes="100%"
                            src={
                              "https://image.tmdb.org/t/p/w500/" +
                              item.profile_path
                            }
                            alt={item.name}
                            fill
                          />
                        ) : (
                          <>
                            {" "}
                            <div className="flex h-full w-full items-center justify-center bg-blue-950/50">
                              {/* <User className=" w-20"/>
                               */}
                              <div className=" text-blue-500/20 font-[900] text-3xl p-2 text-center  ">NO IMAGE</div>
                            </div>
                          </>
                        )}
                      </AspectRatio>
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black to-transparent" />
                      <div className="absolute inset-0 z-10 flex items-end p-2">
                        <div className="">
                          <h2 className="line-clamp-2 text-xs font-bold text-white sm:text-sm md:text-base">
                            {item.name}
                          </h2>
                          <p className="text-xs text-zinc-400 sm:text-sm">
                            {item.character}
                          </p>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
