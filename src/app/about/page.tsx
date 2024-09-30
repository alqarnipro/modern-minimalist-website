import React from "react";
import dynamic from "next/dynamic";

const FirstAboutUs = dynamic(() => import("./firstSectionAboutUs"));
const WhoWeAreSection = dynamic(() => import("./whoWeAre"));
const TestimonialSection = dynamic(() => import("./testmonialSection"));
const PricingCards = dynamic(() => import("../components/PricingCard"));
export const metadata = {
  title: "About Us - Leading Digital Solutions Provider",
  description:
    " Learn about our journey and how we have helped businesses achieve their digital goals through expert services and dedicated support.",
};
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
