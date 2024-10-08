import React from "react";

export default function layout({ children }: React.PropsWithChildren) {
  return <div className="mx-auto max-w-screen-2xl p-3 md:p-6">{children}</div>;
}
