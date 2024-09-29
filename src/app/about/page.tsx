import React from "react";
import FirstAboutUs from "./firstSectionAboutUs";
import WhoWeAreSection from "./whoWeAre";
import TestimonialSection from "./testmonialSection";
import PricingCards from "../components/PricingCard";

export default function page() {
  return <>
    <FirstAboutUs></FirstAboutUs>
    <WhoWeAreSection></WhoWeAreSection>
    <TestimonialSection />
    <PricingCards ></PricingCards>
  </>;
}
