"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { Skeleton } from "@/components/ui/skeleton";

export default function Cast({ id }: { id: string | number }) {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["cast", id],
    queryFn: () => fetchCastInfoById(id),
    enabled: !!id,
  });

  if (typeof data === "string") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full rounded-lg border-none bg-zinc-300 p-4 px-2 text-sm text-red-500 dark:bg-zinc-900/50 sm:px-4"
      >
        It looks like we couldn&apos;t fetch the cast information for this TV
        show. Try checking your internet connection or try again later. If the
        problem persists, please let us know in our Discord server.
      </motion.div>
    );
  }


   if (isLoading) {
     return <Skeleton className="w-full rounded-lg bg-zinc-800" />;
   }

  if (isError) {
    return null;
  }






  return (
    <Accordion
      type="single"
      collapsible
      className="w-full rounded-lg border-none bg-zinc-300 px-2 dark:bg-zinc-900/50 sm:px-4"
      onValueChange={(value) => setIsOpen(value === "item-1")}
    >
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="text-sm text-zinc-400 sm:text-sm">
          Cast&apos;s
        </AccordionTrigger>
        <AnimatePresence>
          {isOpen && (
            <AccordionContent forceMount>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                >

                {data?.length === 0 ? (
                  <div>
                    <p className="text-sm sm:text-sm">No cast found</p>
                  </div>
                ) : (
                  <Carousel
                    opts={{
                      align: "start",
                      dragFree: true,
                    }}
                    className="max-w-[23rem] md:max-w-full"
                  >
                    <CarouselContent className="mx-auto w-full">
                      {data?.map((item: ICastMember, index: number) => (
                        <CarouselItem
                          key={item.id}
                          className="basis-1/3 lg:basis-1/6"
                        >
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-1"
                          >
                            <div className="relative overflow-hidden rounded-lg border-none object-cover object-center">
                              <AspectRatio ratio={2 / 3}>
                                {item.profile_path ? (
                                  <Image
                                    loading="lazy"
                                    sizes="100%"
                                    src={
                                      "https://image.tmdb.org/t/p/w500" +
                                      item.profile_path
                                    }
                                    alt={item.name}
                                    fill
                                  />
                                ) : (
                                  <div className="flex h-full w-full items-center justify-center bg-blue-950/50">
                                    {/* <User className=" w-20"/>
                                     */}
                                    <div className="p-2 text-center text-3xl font-[900] text-blue-500/20">
                                      NO IMAGE
                                    </div>
                                  </div>
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
                              </div>
                            </div>
                          </motion.div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                )}
              </motion.div>
            </AccordionContent>
          )}
        </AnimatePresence>
      </AccordionItem>
    </Accordion>
  );
}
