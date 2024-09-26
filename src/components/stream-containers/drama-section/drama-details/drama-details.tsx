import type { IDetailedDrama } from "@/types";
import React from "react";
import DramaCover from "./drama-cover";
import DescriptionSection from "../../shared-media-component/description";
import SubContainer from "./sub-container";
import EpisodesList from "./episodes-list";
import Characters from "./characters";

export default function DramaDetails({ data }: { data: IDetailedDrama }) {

  return (
    <div className="md:p-6 ">
      <DramaCover data={data} />
      <div className="grid gap-3 py-6 md:w-full md:grid-cols-3">
        <div className="flex flex-col gap-3 md:col-span-2">
          <DescriptionSection data={data.description ?? "Nothing is here"} />
          <div className=' md:hidden'>
            <SubContainer data={data} />
          </div>
          <EpisodesList id={data.id} />
          <Characters data={data.characters ?? []} />
        </div>
        <div className='hidden md:block'>
          <SubContainer data={data} />
        </div>
      </div>
    </div>
  );

}
