"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { type DialogProps } from "@radix-ui/react-dialog";
import { useDebounce } from "@uidotdev/usehooks";
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
import { fetchMovieSearch, fetchSearchAnime, fetchTvShowSearch } from "@/data-access/index";
import { fetchDramaSearch } from "@/data-access/drama-apis/drama-apis";

export function CommandMenu({ ...props }: DialogProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);


  const [search, setSearch] = React.useState("");
  const debouncedSearch = useDebounce(search, 500);

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

  const quearies = useQueries({
    queries: [
      {
        queryKey: ["anime-search", debouncedSearch],
        queryFn: async () =>
          await fetchSearchAnime(encodeURIComponent(debouncedSearch)),
      },
      {
        queryKey: ["movie-search", debouncedSearch],
        queryFn: async () => await fetchMovieSearch(debouncedSearch),
      },
      {
        queryKey: ["drama-search", debouncedSearch],
        queryFn: async () => await fetchDramaSearch(debouncedSearch),
      },
      {
        queryKey: ["tv-show-search", debouncedSearch],
        queryFn: async () => await fetchTvShowSearch(debouncedSearch),
      },
    ],
  });

  const animeSearch = quearies[0].data;
  const movieSearch = quearies[1].data;
  const dramaSearch = quearies[2].data;
  const tvShowSearch = quearies[3].data;


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
        <CommandList className="flex flex-col gap-2">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Anime">
            {animeSearch?.results?.map((item) => (
              <>
                <CommandItem
                  key={item.id}
                  value={item.title.romaji}
                  onSelect={() => {
                    runCommand(() => router.push(`/anime/${item.id}`));
                  }}
                >
                  {item.title.romaji}
                </CommandItem>
              </>
            ))}
          </CommandGroup>
          <CommandGroup heading="Movies">
            {movieSearch?.results?.map((item) => (
              <>
                <CommandItem
                  key={item.id}
                  value={item.title}
                  onSelect={() => {
                    runCommand(() => router.push(`/movies/${item.id}`));
                  }}
                >
                  {item.title}
                </CommandItem>
              </>
            ))}
          </CommandGroup>
          <CommandGroup heading="drama">
            {dramaSearch?.results?.map((item) => (
              <>
                <CommandItem
                  key={item.id}
                  value={item.title}
                  onSelect={() => {
                    runCommand(() =>
                      router.push(`/drama/${encodeURIComponent(item.id)}`),
                    );
                  }}
                >
                  {item.title}
                </CommandItem>
              </>
            ))}
          </CommandGroup>

          <CommandGroup heading="tv-show">
            {tvShowSearch?.results?.map((item) => (
              <>
                <CommandItem
                  key={item.id}
                  value={item.name}
                  onSelect={() => {
                    runCommand(() => router.push(`/tv-shows/${item.id}`));
                  }}
                >
                  {item.name}
                </CommandItem>
              </>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
