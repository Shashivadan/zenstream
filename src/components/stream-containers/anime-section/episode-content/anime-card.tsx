"use client"

import React from "react";
import type { IAnimeInfo } from "@/types";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ImageIcon } from "lucide-react";


export default function AnimeCard({ anime }: { anime: IAnimeInfo }) {
  return (
    <Link href={`/anime/${anime.id}`} className="border-none">
      <motion.div
        className="relative flex aspect-video h-[300px] w-full items-center justify-center overflow-hidden rounded-md border-none bg-background/50 shadow"
        whileHover="hover"
      >
        {anime.image ? (
          <>
            <motion.div
              className="relative h-full w-full"
              variants={{
                hover: { scale: 1.1 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Image
              unoptimized
                fill
                className="object-cover"
                src={anime.image}
                alt={anime.title.english ?? ""}
                sizes="100%"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <motion.div
              className="absolute bottom-2 left-2 right-4 text-white"
              variants={{
                hover: { y: -5 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h2 className="font-bold">
                {anime.title.english ?? anime.title.romaji}
              </h2>
              {anime.releaseDate && (
                <p className="text-sm opacity-80">{anime.releaseDate}</p>
              )}
            </motion.div>
          </>
        ) : (
          <ImageIcon className="text-muted" />
        )}
      </motion.div>
    </Link>
  );
}
