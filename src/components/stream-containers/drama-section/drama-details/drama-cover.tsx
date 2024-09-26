import type { IDetailedDrama } from "@/types";
import Image from "next/image";

export default function DramaCover( {data} : {data : IDetailedDrama}) {
  return (
    <div className="flex w-full flex-col gap-3 md:flex-row">
      <Image
        src={data.image}
        alt={data.title}
        width={270}
        height={450}
        className="mx-auto rounded-lg shadow-lg md:mx-0"
      />
      <div>
        <div className="hidden md:h-[300px] md:w-full md:block">
          <iframe
            width="100%"
            height="100%"
            src={`${data.trailer.url}?autoplay=1&mute=1&loop=1&controls=1`}
            title="YouTube video player"
            frameBorder="0"
            className="aspect-video h-[400px] rounded-lg md:w-[1100px]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
