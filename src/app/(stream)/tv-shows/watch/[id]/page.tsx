import { decodeParam } from "@/lib/url-param-encoder";
import React from "react";

export default function Page({ params }: { params: { id: string } }) {
  const id = decodeParam(params.id);

  return <div>{id}</div>;
}
