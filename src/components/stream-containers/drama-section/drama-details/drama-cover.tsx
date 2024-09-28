import type { IDetailedDrama } from "@/types";
import Image from "next/image";

export default function DramaCover( {data} : {data : IDetailedDrama}) {
  return (
    <div className="grid md:grid-cols-12 gap-2 ">
      <Image
        src={data.image}
        alt={data.title}
        width={270}
        height={450}
        className="md:col-span-2 mx-auto rounded-lg shadow-lg md:mx-0 place-items-end"
      />
      <div className="md:col-span-10">
        <iframe
          width="100%"
          height="100%"
          src={`${data.trailer.url}?autoplay=1&mute=1&loop=1&controls=1`}
          title="YouTube video player"
          frameBorder="0"
          className=" w-full rounded-lg shadow-lg md:mx-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
