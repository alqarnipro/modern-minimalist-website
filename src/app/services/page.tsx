import React from "react";
import FirstSectionServices from "./firstSectionServicce";
import AgencyBanner from "./AgancyBaneer";
import PricingCards from "../components/PricingCard";
import StartJourny from "./startJourny";
import ServiceCards from "./servicesCards";

export default function Page() {
  return (
    <>
      <FirstSectionServices />
      <ServiceCards />
      <AgencyBanner />
      <PricingCards />
      <StartJourny />
    </>
  );
}
