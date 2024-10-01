import DramaDetails from "@/components/stream-containers/drama-section/drama-details/drama-details";
import { fetchDramaInfoById } from "@/data-access";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const id = decodeURIComponent(params.id);
  const data = await fetchDramaInfoById(id);




  if (!data) {
    return <div>None Found</div>;
  }

  return (
    <div>
      <DramaDetails data={data} />
    </div>
  );
}
