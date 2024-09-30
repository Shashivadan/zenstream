"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function DescriptionSection({ data }: { data: string }) {


  return (
    <Accordion
      defaultValue="item-1"
      type="single"
      collapsible
      className="w-full rounded-lg border-none bg-zinc-300 px-2 dark:bg-zinc-900/50 sm:px-4"
    >
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="text-sm text-zinc-400 sm:text-sm">
          Description
        </AccordionTrigger>
        <AccordionContent className="text-sm">
          {data.length > 0 ? (
            <p dangerouslySetInnerHTML={{ __html: data ?? "" }} />
          ) : (
            <p className="text-sm  sm:text-sm">
              No description found
            </p>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
