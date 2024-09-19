import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { serviceList } from "@/contents/landing-page/landing-page-content";
enum ProService {
  YES = 1,
  NO = 0,
}


export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="mb-2 text-center text-lg tracking-wider text-primary">
        Services
      </h2>

      <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
        Grow Your Business
      </h2>
      <h3 className="mx-auto mb-8 text-center text-xl text-muted-foreground md:w-1/2">
        From marketing and sales to operations and strategy, we have the
        expertise to help you achieve your goals.
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"></div>

      <div className="mx-auto grid w-full gap-4 sm:grid-cols-2 lg:w-[60%] lg:grid-cols-2">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="relative h-full border-solid border-muted/50 bg-muted/50  dark:bg-card"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES as ProService === pro}
              variant="secondary"
              className="absolute -right-3 -top-2 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
