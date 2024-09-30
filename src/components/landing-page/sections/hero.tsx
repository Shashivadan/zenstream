"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";



export const landingPageContent = {
  title: "ZenStream",
  subtitle: "The Next Generation of Video Streaming",
  description:
    "Discover a world of entertainment with ZenStream. Enjoy high-quality streaming of anime, movies, and web series.",
};

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="mx-auto grid place-items-center gap-8 py-20 md:py-32 lg:max-w-screen-xl">
        <div className="space-y-8 text-center">
          <Badge variant="outline" className="py-2 text-sm">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Introducing {landingPageContent.title} </span>
          </Badge>

          <div className="mx-auto max-w-screen-md text-center text-4xl font-bold md:text-6xl">
            <h1>
              Unlimited Access to
              <span className="bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text px-2 text-transparent">
                10,000+ Titles
              </span>
              Anime, Movies
            </h1>
          </div>

          <p className="mx-auto max-w-screen-sm text-xl text-muted-foreground">
            {landingPageContent.description}
          </p>

          <div className="space-y-4 md:space-x-4 md:space-y-0">
            <Button className="group/arrow w-5/6 font-bold md:w-1/4" asChild>
              <Link href={"/get-started"}>
                Get Started
                <ArrowRight className="ml-2 size-5 transition-transform group-hover/arrow:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 font-bold md:w-1/4"
            >
              <Link href={siteConfig.links.github} target="_blank">
                Github respository
              </Link>
            </Button>
          </div>
        </div>

        <div className="group relative mt-14">
          <div className="absolute left-1/2 top-2 mx-auto h-24 w-[90%] -translate-x-1/2 transform rounded-full bg-primary/50 blur-3xl lg:-top-8 lg:h-80"></div>
          <Image
            width={1200}
            height={1200}
            className="rouded-lg relative mx-auto flex w-full items-center rounded-lg border border-t-2 border-secondary border-t-primary/30 leading-none md:w-[1200px]"
            src={
              theme === "light"
                ? "/landing-page/hero-light.webp"
                : "/landing-page/hero-dark.webp"
            }
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 h-20 w-full rounded-lg bg-gradient-to-b from-background/0 via-background/50 to-background md:h-28"></div>
        </div>
      </div>
    </section>
  );
};
