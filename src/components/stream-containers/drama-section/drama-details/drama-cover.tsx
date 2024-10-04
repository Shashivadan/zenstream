import type { IDetailedDrama } from "@/types";
import Image from "next/image";
import Trailer from "./trailer";

export default function DramaCover( {data} : {data : IDetailedDrama}) {
  return (
    <div className="grid md:grid-cols-12 gap-2 ">
      <img
      loading="lazy"

        src={data.image}
        alt={data.title}
        width={270}
        height={450}
        className="md:col-span-2 mx-auto rounded-lg shadow-lg md:mx-0 place-items-end"
      />
      <div className="md:col-span-10">

        <Trailer src={data.trailer.url} />
      </div>
    </div>
  );
}
