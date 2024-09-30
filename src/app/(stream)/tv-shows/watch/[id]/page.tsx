
import React from "react";

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  return <div>{id}</div>;
}
