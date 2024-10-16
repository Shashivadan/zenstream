import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { CommandMenu } from "./command-menu";
import { Icons } from "./icon";
import { MainNav } from "./main-nav";
import  { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { getCurrentUser } from "@/server/auth";
import AvaterMenu from "../profile/avater-menu";

export async function SiteHeader() {
  const user = await getCurrentUser();
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center gap-1">
            {user ? (
              <AvaterMenu />
            ) : (
              <Button
                variant="grediant"
                className="hidden h-8 items-center justify-center font-semibold md:flex"
                asChild
              >
                <Link href="/login">Login</Link>
              </Button>
            )}

            {!user && (
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "h-8 w-8 px-0",
                  )}
                >
                  <Icons.gitHub className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
            )}

            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "h-8 w-8 px-0",
                )}
              >
                <Icons.twitter className="h-3 w-3 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
