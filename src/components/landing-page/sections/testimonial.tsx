"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "/api/placeholder/40/40",
    name: "Akira Tanaka",
    userName: "Anime Enthusiast",
    comment:
      "This streaming service is a game-changer! The vast anime library and simulcast releases keep me coming back. The video quality is outstanding, even on my mobile device.",
    rating: 5.0,
  },
  {
    image: "/api/placeholder/40/40",
    name: "Emily Chen",
    userName: "Movie Buff",
    comment:
      "I'm impressed by the diverse selection of international films. The personalized recommendations have introduced me to amazing movies I would have never discovered otherwise.",
    rating: 4.8,
  },
  {
    image: "/api/placeholder/40/40",
    name: "Carlos Rodriguez",
    userName: "Binge-Watcher",
    comment:
      "The 'Continue Watching' feature is a lifesaver for series marathons. I love how I can seamlessly switch between my TV and phone without losing my place in an episode.",
    rating: 4.9,
  },
  {
    image: "/api/placeholder/40/40",
    name: "Sarah Johnson",
    userName: "Parent",
    comment:
      "The parental controls are fantastic! I can create separate profiles for my kids with age-appropriate content, giving me peace of mind when they're watching.",
    rating: 5.0,
  },
  {
    image: "/api/placeholder/40/40",
    name: "Raj Patel",
    userName: "Tech Enthusiast",
    comment:
      "The streaming quality is top-notch. 4K HDR content looks incredible on my home theater setup, and the adaptive streaming works great even with my fluctuating internet speeds.",
    rating: 5.0,
  },
  {
    image: "/api/placeholder/40/40",
    name: "Olivia Kim",
    userName: "Social Viewer",
    comment:
      "The watch party feature is amazing! It's so much fun to sync up movies with friends and chat in real-time, even when we're miles apart. It's like we're all on the couch together!",
    rating: 4.9,
  },
];


export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-center text-lg tracking-wider text-primary">
          Testimonials
        </h2>

        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Hear What Our 1000+ Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative mx-auto w-[80%] sm:w-[90%] lg:max-w-screen-xl"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="border-solid border-muted/50 bg-muted/50 dark:bg-card">
                <CardContent className="pb-0 pt-6">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
