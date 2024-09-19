import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is ZenStream?",
    answer:
      "ZenStream is a platform that lets you stream anime, movies, and web series from various genres, all in one place.",
    value: "item-1",
  },
  {
    question: "Is ZenStream free to use?",
    answer:
      "ZenStream offers both free and premium subscription plans. The free plan includes access to select content with ads.",
    value: "item-2",
  },
  {
    question: "Can I download shows for offline viewing?",
    answer:
      "Yes, with our premium subscription, you can download content to watch offline at any time.",
    value: "item-3",
  },
  {
    question: "What kind of content is available on ZenStream?",
    answer:
      "ZenStream features a wide variety of anime, movies, and web series from all genres, including action, drama, fantasy, and more.",
    value: "item-4",
  },
  {
    question: "Which devices are supported?",
    answer:
      "ZenStream is available on smartphones, tablets, desktop computers, and smart TVs. You can stream on multiple devices at once with a premium plan.",
    value: "item-5",
  },
  {
    question: "Do I need an account to watch content?",
    answer:
      "Yes, you need to sign up for a free or premium account to start streaming on ZenStream.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32 md:w-[700px]">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-center text-lg tracking-wider text-primary">
          FAQS
        </h2>

        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem
            key={value}
            value={value}
            className="mt-2 w-full rounded-lg border-2 border-solid border-muted/50 bg-muted/50 px-8 dark:border-muted/50 dark:bg-card"
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
