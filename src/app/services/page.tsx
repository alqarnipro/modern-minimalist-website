import React from "react";
import FirstSectionServices from "./firstSectionServicce";
import AgencyBanner from "./AgancyBaneer";
import PricingCards from "../components/PricingCard";
import StartJourny from "./startJourny";
import ServiceCards from "./servicesCards";

export default function page() {
  return (
    <>
      <FirstSectionServices></FirstSectionServices>
      <ServiceCards></ServiceCards>
      <AgencyBanner></AgencyBanner>
      <PricingCards></PricingCards>
      <StartJourny></StartJourny>
    </>
  );
}
