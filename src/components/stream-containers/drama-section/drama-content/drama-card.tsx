import type { IDramaResult } from "@/types";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DramaCard({ data }: { data: IDramaResult }) {
  return (
    <Link href={`/drama/${data.id}`} className="block w-full">
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-md border bg-background/50 shadow">
        {data.image ? (
          <>
            <Image
              fill
              className="object-cover object-center"
              src={data.image}
              alt={data.title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-2 left-2 right-2 text-white">
              <h2 className="line-clamp-2 text-sm font-bold md:text-base">
                {data.title}
              </h2>
            </div>
          </>
        ) : (
          <div className="flex h-full items-center justify-center">
            <ImageIcon className="h-12 w-12 text-muted" />
          </div>
        )}
      </div>
    </Link>
  );
}
