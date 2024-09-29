"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchTvShowRecommendations } from "@/data-access/tv-show-apis/tv-show-apis";
import { encodeParam } from "@/lib/url-param-encoder";
import { ITvShowRecommendationsEntry } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight, Divide, ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function TvShowRecommendations({ id }: { id: string }) {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-recommendations", id, page],
    queryFn: async () => await fetchTvShowRecommendations(id, page),
  });

  const handlePrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <div className="rounded-lg bg-zinc-900/50 p-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xl font-semibold">Recommendations</div>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <Button
            onClick={handlePrevPage}
            disabled={page === 1}
            variant="outline"
            size="icon"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span>Page {page}</span>
          <Button onClick={handleNextPage} variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading &&
          Array.from({ length: 20 }, (_, index) => (
            <div key={index} className="w-full">
              <TvShowSkeleton />
            </div>
          ))}
        {isError && <div>Error</div>}
        {data && (
          <>
            {data.results.map((item) => (
              <>
                <TvShowRecommendationsCard data={item} />
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

function TvShowRecommendationsCard({
  data,
}: {
  data: ITvShowRecommendationsEntry;
}) {
  return (
    <div>
      <Link href={`/tv-shows/${encodeParam(data.id)}`}>
        <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-md border border-none bg-background/50 shadow">
          {data.backdrop_path ? (
            <>
              <Image
                fill
                className="h-full w-full object-cover"
                src={`https://sup-proxy.zephex0-f6c.workers.dev/api-content?url=https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                alt={data.original_name || data.name}
                sizes="100%"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-2 left-2 right-4 text-white">
                <h2 className="font-bold md:text-xl">
                  {data.name || data.name}
                </h2>
                {data.first_air_date && (
                  <p className="text-xs opacity-80">
                    {format(new Date(data.first_air_date), "PPP")}
                  </p>
                )}
              </div>
            </>
          ) : (
            <ImageIcon className="text-muted" />
          )}
        </div>
      </Link>
    </div>
  );
}

function TvShowSkeleton() {
  return (
    <Card className="relative mx-auto aspect-[16/9] w-full max-w-md overflow-hidden border dark:border-zinc-950">
      <Skeleton className="absolute inset-0" />
      <CardContent className="absolute bottom-0 left-0 w-full p-4">
        <Skeleton className="mb-2 h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </CardContent>
    </Card>
  );
}