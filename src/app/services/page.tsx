import React from "react";
import FirstSectionServices from "./firstSectionServicce";
import AgencyBanner from "./AgancyBaneer";
import PricingCards from "../components/PricingCard";
import StartJourny from "./startJourny";
import ServiceCards from "./servicesCards";

export const metadata = {
  title: "Our Services - Comprehensive Digital Solutions",
  description:
    "Explore our full range of services, from web development to digital marketing, designed to elevate your business in the digital landscape.",
};

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
