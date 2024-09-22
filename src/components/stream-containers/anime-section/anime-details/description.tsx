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
      type="single"
      collapsible
      className="w-full rounded-lg border-none bg-zinc-300 px-2 dark:bg-zinc-900 sm:px-4"
    >
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="text-xs text-zinc-400 sm:text-sm">
          Description
        </AccordionTrigger>
        <AccordionContent className="text-sm sm:text-base">
          <p dangerouslySetInnerHTML={{ __html: data ?? "" }} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
