import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { type icons } from "lucide-react";
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

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid place-items-center lg:grid-cols-2 lg:gap-24">
        <div>
          <h2 className="mb-2 text-lg tracking-wider text-primary">Benefits</h2>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Elevate Your Streaming Experience
          </h2>
          <p className="mb-8 text-xl text-muted-foreground">
            Discover a world of entertainment at your fingertips. Our streaming
            service brings you the best in anime, movies, and web series, with
            features designed to enhance your viewing pleasure.
          </p>
        </div>

        <div className="grid w-full gap-4 lg:grid-cols-2">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="group/number border-1 border-solid border-muted/50 bg-muted/50 transition-all delay-75 hover:bg-background dark:border-muted/50 dark:bg-card"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl font-medium text-muted-foreground/15 transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
