import Avater from "@/components/profile/avater";
import { getCurrentUser } from "@/server/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {




  return (
    <div className="p-6">
      <div>
        <Avater />
      </div>
    </div>
  );
}
