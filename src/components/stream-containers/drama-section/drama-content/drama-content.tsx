"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchPopularDrama } from "@/data-access";
import { type IDramaResult } from "@/types";
import { useQuery } from "@tanstack/react-query";
import DramaCard from "./drama-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DramaCardSkeleton from "./drama-card-skeleton";
import { useDebounce } from "@uidotdev/usehooks";

export default function DramaContent() {
  const [page, setPage] = useState(2);

  const debouncePage = useDebounce(page, 50);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["drama", debouncePage],
    queryFn: () => fetchPopularDrama(debouncePage),
  });

  if (isError) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        Error
      </motion.div>
    );
  }

  const handlePrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const CantainerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="mb-4 flex items-center justify-between"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="text-2xl font-semibold"
          whileHover={{ scale: 1.02 }}
        >
          Dramas
        </motion.div>
        <motion.div
          className="mt-4 flex items-center justify-center space-x-2"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            onClick={handlePrevPage}
            disabled={page === 1}
            variant="outline"
            size="icon"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <motion.span
          className="text-lg shadow-xl dark:bg-zinc-900/50 px-3 py-1 rounded-lg font-semibold"
            key={page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {page}
          </motion.span>
          <Button onClick={handleNextPage} variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="grid grid-cols-2 gap-4 md:grid-cols-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {isLoading ? (
              <DramaCardSkeleton />
            ) : (
              <>
                {data?.results.map((item: IDramaResult, index: number) => (
                  <motion.div
                    key={item.id}
                    variants={CantainerItem}
                    transition={{ delay: index * 0.05 }}
                  >
                    <DramaCard data={item} />
                  </motion.div>
                ))}
              </>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="mt-4 flex items-center justify-center space-x-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Button
          onClick={handlePrevPage}
          disabled={page === 1}
          variant="outline"
          size="icon"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <motion.span
          key={page}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          Page {page}
        </motion.span>
        <Button onClick={handleNextPage} variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
