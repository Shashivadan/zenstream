"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { type DialogProps } from "@radix-ui/react-dialog";
import { useDebounce } from "@uidotdev/usehooks";
import {
  CircleIcon,
  FileIcon,
  LaptopIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useQueries } from "@tanstack/react-query";
import { fetchSearchAnime } from "@/data-access/index";

export function CommandMenu({ ...props }: DialogProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const { setTheme } = useTheme();

  const [search, setSearch] = React.useState("");
  const debouncedSearch = useDebounce(search, 400);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  const data = useQueries({
    queries: [
      {
        queryKey: ["anime-search", debouncedSearch],
        queryFn: async () => await fetchSearchAnime(debouncedSearch),
      },
      {
        queryKey: ["anime-searchs", debouncedSearch],
        queryFn: async () => await fetchSearchAnime(debouncedSearch),
      },
    ],
  });

  // console.log(data[0].data?.results, "id");

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64",
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Search something...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border border-none bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          className=""
          value={search}
          onValueChange={setSearch}
          placeholder="Type a search..."
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Anime">
            {data[0].data?.results?.map((item) => (
              <>
                <CommandItem key={item.id} value={item.title.romaji}  onSelect={() => {runCommand(() => router.push(`/anime/${item.id}`))}}  >{item.title.romaji}</CommandItem>
              </>
            ))}
          </CommandGroup>

         
          {/* {docsConfig.sidebarNav.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((navItem) => (
                <CommandItem
                  key={navItem.href}
                  value={navItem.title}
                  onSelect={() => {
                    runCommand(() => router.push(navItem.href));
                  }}
                >
                  <div className="mr-2 flex h-4 w-4 items-center justify-center">
                    <CircleIcon className="h-3 w-3" />
                  </div>
                  {navItem.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))} */}
        </CommandList>
      </CommandDialog>
    </>
  );
}
