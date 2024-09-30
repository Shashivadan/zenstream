"use client";

import Link from "next/link";
import * as React from "react";
import { siteConfig } from "@/config/site";
import { Icons } from "./icon";
import { motion, useAnimationControls } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Image from "next/image";

import { type StaticImageData } from "next/image";
import Movies from "../../../public/link-images/movies.jpg";
import { mainRouteList, routeList } from "./nav-contants";

export function MainNav() {
  const [image, setImage] = React.useState<StaticImageData | string>(Movies);
   const controls = useAnimationControls();

  return (
    <div className="mr-4 hidden md:flex">
      <Link
        href="/"
        className="mr-4 flex items-center justify-center gap-2 space-x-2 lg:mr-6"
      >
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <NavigationMenu className="mx-auto hidden bg-transparent lg:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-base">
                View
              </NavigationMenuTrigger>
              <NavigationMenuContent className="border-solid border-zinc-700">
                <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                  <motion.div animate={controls}>
                    <Image
                      src={image}
                      alt="shree"
                      className="h-[350px] w-full overflow-hidden rounded-md object-cover"
                      width={700}
                      height={700}
                    />
                  </motion.div>
                  <ul className="flex flex-col gap-2">
                    {routeList.mainNav.map(
                      ({ title, description, href, image }, index) => (
                        <Link
                          href={href}
                          key={index}
                          onMouseLeave={() => {
                            controls
                              .start({
                                opacity: 0,
                                scale : 0
                              })
                              .catch((error) => {
                                console.error(
                                  "Error starting animation:",
                                  error,
                                );
                              });
                          }}
                          onMouseEnter={() => {
                            setImage(image);
                           controls
                             .start({
                               opacity: 1,
                                scale : 1
                             })
                             .catch((error) => {
                               console.error(
                                 "Error starting animation:",
                                 error,
                               );
                             });
                          }}
                        >
                          <li className="rounded-md p-3 text-sm hover:bg-muted">
                            <p className="mb-1 font-semibold leading-none text-foreground">
                              {title}
                            </p>
                            <p className="line-clamp-2 text-muted-foreground">
                              {description}
                            </p>
                          </li>
                        </Link>
                      ),
                    )}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              {mainRouteList.map(({ href, label }) => (
                <NavigationMenuLink key={href} asChild>
                  <Link href={href} className="px-2 text-base">
                    {label}
                  </Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  );
}
