"use client"

import type { IDramaResult } from "@/types";
import { ImageIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function DramaCard({ data }: { data: IDramaResult }) {
  return (
    <Link
      href={`/drama/${encodeURIComponent(data.id)}`}
      className="block w-full"
    >
      <motion.div
        className="relative aspect-[2/3] w-full overflow-hidden rounded-md border border-none bg-background/50 shadow"
        whileHover="hover"
        initial="initial"
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.03 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {data.image ? (
          <>
            <motion.div
              className="relative h-full w-full"
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.1 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img

                className="object-cover object-center"
                src={data.image}
                alt={data.title}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
              variants={{
                initial: { opacity: 0.8 },
                hover: { opacity: 0.9 },
              }}
            />
            <motion.div
              className="absolute bottom-2 left-2 right-2 text-white"
              variants={{
                initial: { y: 0 },
                hover: { y: -2 },
              }}
            >
              <h2 className="line-clamp-2 text-sm font-bold md:text-base">
                {data.title}
              </h2>
            </motion.div>
          </>
        ) : (
          <div className="flex h-full items-center justify-center">
            <motion.div
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.1, rotate: 5 },
              }}
            >
              <ImageIcon className="h-12 w-12 text-muted" />
            </motion.div>
          </div>
        )}
      </motion.div>
    </Link>
  );
}
