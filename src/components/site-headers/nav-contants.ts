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
      description: "Explore Movie Marvels: Spectacles Await You!",
    },
    {
      title: "Anime",
      image: Anime,
      href: "/anime",
      description: "Explore Movie Marvels: Spectacles Await You!",
    },
    {
      title: "Tv",
      image: Tv,
      href: "/tv-shows",
      description: "Explore Movie Marvels: Spectacles Await You!",
    },
    {
      title: "Drama",
      image: Drama,
      href: "/drama",
      description: "Explore Movie Marvels: Spectacles Await You!",
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
