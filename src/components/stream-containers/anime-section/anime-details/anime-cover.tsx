import React from "react";
import type { IAnimeInfo, ITitle } from "@consumet/extensions/dist/models";
import { LucideImage, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import AnimeMobileView from "./anime-mobile-view";

export default function AnimeCover({ data }: { data: IAnimeInfo }) {
  return (
    <Card className="relative mx-auto w-full overflow-hidden rounded-2xl bg-cover shadow-lg md:h-[550px] dark:border-zinc-900">
      <div className="relative aspect-video">
        <img
          src={data.image}
          alt={"dsfdf"}
          className="h-[600px] w-full object-cover md:h-fit md:blur-3xl"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent md:hidden" />
      <div className="absolute hidden inset-0 bg-black/75 bg-gradient-to-t to-transparent md:block" />

      {/* Mobile view content */}
      <div className="block md:hidden">
        {" "}
        <AnimeMobileView data={data} />
      </div>

      {/* Desktop view content */}
      <div className="absolute inset-0 hidden p-10 text-white md:block">
        <div className="flex h-full w-full gap-10">
          <div>
            {data.image ? (
              <Image
                width={200}
                height={500}
                sizes="100%"
                className="rounded-md object-contain"
                loading="lazy"
                alt={"d"}
                src={data.image}
              />
            ) : (
              <LucideImage size={24} />
            )}
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/anime">anime</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink>
                      {(data.title as ITitle).english ??
                        (data.title as ITitle).romaji}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <h1 className="text-5xl font-bold">
              {(data.title as ITitle).english ?? (data.title as ITitle).romaji}
            </h1>
            <div>
              {data.genres?.map((genre, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="ml-1 rounded-md border-zinc-900 p-1 px-2 text-xs text-white dark:bg-black"
                >
                  {genre}
                </Badge>
              ))}
            </div>
            <div>
              <Button className="group/arrow font-bold">
                <Play className="mr-1 h-3 sm:mr-2 sm:h-4 sm:w-4" />
                Play Now
              </Button>
            </div>
            <div>
              <div
                className="w-[1100px] text-sm"
                dangerouslySetInnerHTML={{ __html: data.description ?? "" }}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
