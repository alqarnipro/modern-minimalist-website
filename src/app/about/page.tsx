import React from "react";
import dynamic from "next/dynamic";

const FirstAboutUs = dynamic(() => import("./firstSectionAboutUs"));
const WhoWeAreSection = dynamic(() => import("./whoWeAre"));
const TestimonialSection = dynamic(() => import("./testmonialSection"));
const PricingCards = dynamic(() => import("../components/PricingCard"));

export default function Page() {
  return (
    <>
      <FirstAboutUs />
      <WhoWeAreSection />
      <TestimonialSection />
      <PricingCards />
    </>
  );
}
