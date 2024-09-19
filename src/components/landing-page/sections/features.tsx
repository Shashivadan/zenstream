import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import type { icons } from "lucide-react";
import { featureList } from "@/contents/landing-page/landing-page-content";


export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="mb-2 text-center text-lg tracking-wider text-primary">
        Features
      </h2>

      <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
        What Makes Us Different
      </h2>

      <h3 className="mx-auto mb-8 text-center text-xl text-muted-foreground md:w-1/2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        fugiat, odit similique quasi sint reiciendis quidem iure veritatis optio
        facere tenetur.
      </h3>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full border-0 bg-background shadow-none">
              <CardHeader className="flex items-center justify-center">
                <div className="mb-4 rounded-full bg-primary/20 p-2 ring-8 ring-primary/10">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-center text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
