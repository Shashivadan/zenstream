
import React from "react";
import { HeroSection } from "./sections/hero";
import { SponsorsSection } from "./sections/sponsors";
import { BenefitsSection } from "./sections/benefits";
import { FeaturesSection } from "./sections/features";
import { ServicesSection } from "@/components/landing-page/sections/services";
import { TestimonialSection } from "./sections/testimonial";
import { FAQSection } from "./sections/faq";
import { FooterSection } from "./sections/footer";


export default function MainLandingPage() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
