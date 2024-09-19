export const landingPageContent = {
  title: "ZenStream",
  subtitle: "The Next Generation of Video Streaming",
  description:
    "Discover a world of entertainment with ZenStream. Enjoy high-quality streaming of anime, movies, and web series.",
};

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

interface BenefitProps {
  icon: string;
  title: string;
  description: string;
}

export const benefitList: BenefitProps[] = [
  {
    icon: "Tv",
    title: "Vast Content Library",
    description:
      "Access thousands of anime titles, blockbuster movies, and binge-worthy web series all in one place. Never run out of things to watch!",
  },

  {
    icon: "Download",
    title: "Offline Viewing",
    description:
      "Download your favorite content and watch it offline. Perfect for long trips or areas with limited internet connectivity.",
  },
  {
    icon: "PersonStanding",
    title: "Personalized Recommendations",
    description:
      "Our smart algorithm learns your preferences to suggest new titles you'll love, helping you discover hidden gems and new favorites.",
  },
  {
    icon: "Languages",
    title: "Multiple Audio & Subtitles",
    description:
      "Choose from a variety of audio languages and subtitle options. Enjoy content in your preferred language or learn a new one!",
  },
];

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

export const featureList: FeaturesProps[] = [
  {
    icon: "Zap",
    title: "Ultra-Fast Streaming",
    description:
      "Experience lightning-fast loading times and adaptive streaming quality that adjusts to your internet speed for uninterrupted viewing.",
  },
  {
    icon: "HeartHandshake",
    title: "Exclusive Content",
    description:
      "Enjoy a wide range of original anime series, movies, and web shows available only on our platform. Be the first to watch new releases.",
  },
  {
    icon: "Users",
    title: "Watch Parties",
    description:
      "Host virtual watch parties with friends and family. Sync playback and chat in real-time, bringing the social experience to online streaming.",
  },
  {
    icon: "Fingerprint",
    title: "Advanced Parental Controls",
    description:
      "Set up kid-friendly profiles with customizable content restrictions. Ensure a safe viewing environment for the whole family.",
  },
  {
    icon: "History",
    title: "Continue Watching",
    description:
      "Pick up right where you left off with our smart resume feature. Never lose track of your progress across episodes and movies.",
  },
  {
    icon: "Star",
    title: "Personalized Watchlist",
    description:
      "Curate your own watchlist of must-see content. Our AI-powered system learns from your choices to suggest new titles you'll love.",
  },
];

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

export const serviceList: ServiceProps[] = [
  {
    title: "HD Streaming",
    description:
      "Enjoy crystal-clear video quality with our standard HD streaming option for all users.",
    pro: ProService.NO,
  },
  {
    title: "Ad-Free Experience",
    description:
      "Watch your favorite content without interruptions. No ads, just pure entertainment.",
    pro: ProService.YES,
  },
  {
    title: "Offline Downloads",
    description:
      "Download episodes and movies to watch offline on your mobile devices.",
    pro: ProService.YES,
  },
  {
    title: "Multiple Profiles",
    description:
      "Create up to 5 personalized profiles under a single account for your whole family.",
    pro: ProService.NO,
  }
];