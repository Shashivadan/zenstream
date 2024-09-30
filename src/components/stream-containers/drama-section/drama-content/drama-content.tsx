"use client";

import React, { useState } from "react";
import { fetchPopularDrama } from "@/data-access";
import { type IDramaResult } from "@/types";
import { useQuery } from "@tanstack/react-query";
import DramaCard from "./drama-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Drama } from "lucide-react";
import DramaCardSkeleton from "./drama-card-skeleton";

export default function DramaContent() {
  const [page, setPage] = useState(2);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["drama", page],
    queryFn: () => fetchPopularDrama(page),
  });

  if (isError) {
    return <div>Error</div>;
  }



  const handlePrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="text-2xl font-semibold">Dramas</div>
        <div className="mt-4 flex items-center justify-center space-x-2">
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
      <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
        {isLoading ? <DramaCardSkeleton /> : (
          <>
            {data?.results.map((item: IDramaResult) => (
              <DramaCard key={item.id} data={item} />
            ))}
          </>
        )}
      </div>
      <div className="mt-4 flex items-center justify-center space-x-2">
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
  );
}
