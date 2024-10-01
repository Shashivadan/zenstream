"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Film, Tv, Palette, Globe } from "lucide-react";
import Link from "next/link";

const genres = [
  {
    herf: "/movies",
    name: "Movies",
    icon: Film,
    description: "Discover blockbusters and indie films",
  },
  {
    herf: "/tv-shows",
    name: "TV Shows",
    icon: Tv,
    description: "Explore popular series and sitcoms",
  },
  {
    herf: "/anime",
    name: "Anime",
    icon: Palette,
    description: "Dive into Japanese animation",
  },
  {
    herf: "/drama",
    name: "Drama",
    icon: Globe,
    description: "Watch original online content",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function GenreGrid() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex w-full items-center justify-center">
        <motion.div
          className="grid w-full grid-cols-1 gap-6 md:max-w-[600px] md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {genres.map((genre) => (
            <motion.div
              key={genre.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Link href={genre.herf}>
                <Card className="overflow-hidden border-none dark:bg-zinc-400/20 transition-colors duration-300 hover:bg-purple-700">
                  <CardHeader className="flex flex-col justify-between pb-4 md:h-36">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{genre.name}</CardTitle>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <genre.icon className="h-6 w-6 text-black dark:text-white" />
                      </motion.div>
                    </div>
                    <CardDescription className="transition-colors  dark:text-white text-black  duration-300 ">
                      {genre.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
