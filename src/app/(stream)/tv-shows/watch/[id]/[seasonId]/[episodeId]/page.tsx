import React from "react";

export default function page({
  params,
}: {
  params: { id: string; episodeId: string; seasonId: string };
}) {
  console.log(params.id);

  return (
    <div>
      <div></div>
      <p>{params.id}</p>
      <p>{params.seasonId}</p>
      <p>{params.episodeId}</p>
    </div>
  );
}
