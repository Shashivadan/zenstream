"use client";

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

import * as React from "react";
import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import { mainNav, routeList } from "./nav-contants";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "./icon";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import { useSession } from "next-auth/react";
import SignOutButton from "../sign-out-button";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
   const { data: session } = useSession();


  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetTitle></SheetTitle>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center gap-2"
          onOpenChange={setOpen}
        >
          <Icons.logo className="mr-2 h-4 w-4" />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)]">
          <div className="flex flex-col gap-2 pr-6">
            {mainNav?.map(
              (item) =>
                item.href &&
                typeof item.href === "string" && (
                  <MobileLink
                    key={item.title}
                    href={item.href}
                    onOpenChange={setOpen}
                    className="rounded-md dark:bg-zinc-800 p-2 text-sm shadow-lg dark:text-muted-foreground hover:bg-purple-600"
                  >
                    {item.title}
                  </MobileLink>
                ),
            )}
          </div>
          <div className="flex flex-col space-y-2">
            {routeList.sidebarNav.map((item, index) => (
              <div key={index} className="flex flex-col space-y-3 pt-6">
                <h4 className="font-semibold">{item.title}</h4>
                <div className="flex flex-col gap-2 pr-6">
                  {!session?.user.email ? (
                    <Link
                      href="/login"
                      className="rounded-md shadow-lg dark:bg-zinc-800 p-2 text-sm dark:text-muted-foreground hover:bg-purple-600"
                    >
                      Login
                    </Link>
                  ) : <><SignOutButton /></>}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <SheetDescription>
          {" "}
          © {new Date().getFullYear()} {siteConfig.name}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href as string);
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
