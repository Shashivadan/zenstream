import NotFound from "@/app/not-found";
import TvShowDetails from "@/components/stream-containers/tv-shows-section/tv-shows-details/tv-shows-details";
import { fetchTvShowInfoById } from "@/data-access";
import { decodeParam } from "@/lib/url-param-encoder";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const id = decodeParam(params.id);
  const data = await fetchTvShowInfoById(id);

  if (typeof data === "string") {
    return <>{data}</>;
  }
  if (!data) {
    return <div>None Found</div>;
  }

  return <TvShowDetails data={data} />;
}
