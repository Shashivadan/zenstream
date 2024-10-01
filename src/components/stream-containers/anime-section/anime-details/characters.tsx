"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { ICharacter } from "@/types";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function Characters({ data }: { data: ICharacter[] }) {
  return (
    <div className="w-full rounded-md p-2 shadow-lg dark:bg-zinc-900/50 sm:p-3">
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="max-w-[23rem] md:max-w-full"
      >
        <div className="mb-2 px-2 sm:px-3">
          <h2 className="text-sm font-semibold dark:text-zinc-400 sm:text-base">
            Characters
          </h2>
        </div>
        <CarouselContent className="mx-auto w-full">
          {data.map((item: ICharacter) => (
            <CarouselItem key={item.id} className="  basis-1/2   ms:basis-1/3 lg:basis-1/6">
              <div className="p-1">
                <Card className="relative overflow-hidden rounded-lg border-none object-cover object-center">
                  <AspectRatio ratio={2/3}>
                    <Image
                      loading="lazy"
                      sizes="100%"
                      src={item.image}
                      alt={item.name.full ?? ""}
                      fill
                      className="object-cover  h-[300px]  md:h-[200px] "
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black to-transparent" />
                  <CardContent className="absolute inset-0 z-10 flex items-end p-2">
                    <h2 className="line-clamp-2 text-xs font-bold text-white sm:text-sm md:text-base">
                      {item.name.full}
                    </h2>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
