"use client";

import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import type { icons } from "lucide-react";

interface TechStackProps {
  icon: string;
  name: string;
}

export const techStackProps: TechStackProps[] = [
  {
    icon: "LayoutDashboard",
    name: "Next.js",
  },
  {
    icon: "Database",
    name: "Prisma",
  },
  {
    icon: "Cylinder",
    name: "PostgreSQL",
  },
  {
    icon: "Atom",
    name: "React.js",
  },
  {
    icon: "Paintbrush",
    name: "Tailwind CSS",
  },
  {
    icon: "ServerCrash",
    name: "Vercel",
  },
  {
    icon: "ShieldCheck",
    name: "NextAuth.js",
  },
  {
    icon: "Workflow",
    name: "TypeScript",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="mx-auto max-w-[75%] pb-24 sm:pb-32">
      <h2 className="mb-6 text-center text-lg md:text-xl">Build with</h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {techStackProps.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-xl font-medium md:text-2xl"
            >
              <Icon
                name={icon as keyof typeof icons}
                size={32}
                color="white"
                className="mr-2"
              />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
