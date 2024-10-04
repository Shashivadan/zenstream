import Movies from "/public/link-images/movies.jpg";
import Anime from "/public/link-images/animes.jpg";
import Tv from "/public/link-images/shows.jpg";
import Drama from "/public/link-images/drama.jpg";
import type { StaticImageData } from "next/image";
interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
  href: string;
  image: StaticImageData | string;
}
export const mainRouteList: RouteProps[] = [
  // {
  //   href: "#testimonials",
  //   label: "Testimonials",
  // },
  // {
  //   href: "#contact",
  //   label: "Contact",
  // },
  // {
  //   href: "#faq",
  //   label: "FAQ",
  // },
];



export const mainNav = [
  {
    title: "Movies",
    image: Movies,
    href: "/movies",
    description: "Discover blockbusters and indie films",
  },
  {
    title: "Anime",
    image: Anime,
    href: "/anime",
    description: "Dive into Japanese animation",
  },
  {
    title: "Tv",
    image: Tv,
    href: "/tv-shows",
    description: "Explore popular series and sitcoms",
  },
  {
    title: "Drama",
    image: Drama,
    href: "/drama",
    description: "Watch original online content",
  }
];



export type TypeRouteList = {
  mainNav: FeatureProps[];
  sidebarNav: {
    title: string;
    items: {
      title: string;
      href: string;
      items: Array<{ title: string; href: string }>;
    }[];
  }[];
};

export const routeList: TypeRouteList = {
  mainNav: [
    {
      title: "Movies",
      image: Movies,
      href: "/movies",
      description: "Discover blockbusters and indie films",
    },
    {
      title: "Anime",
      image: Anime,
      href: "/anime",
      description: "Dive into Japanese animation",
    },
    {
      title: "Tv",
      image: Tv,
      href: "/tv-shows",
      description: "Explore popular series and sitcoms",
    },
    {
      title: "Drama",
      image: Drama,
      href: "/drama",
      description: "Watch original online content",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Login",
          href: "/login",
          items: [],
        },
      ],
    },
  ],
};
