"use client";

import { ServicesHero } from "./components/ServicesHero";
import { ServicesPillars } from "./components/ServicesPillars";
import { ServicesPricing } from "./components/ServicesPricing";
import { ServicesGuarantees } from "./components/ServicesGuarantees";
import { ServicesCta } from "./components/ServicesCta";

export function ServicesView() {
  return (
    <div className="flex flex-col w-full">
      <ServicesHero />
      <ServicesPillars />
      <ServicesPricing />
      <ServicesGuarantees />
      <ServicesCta />
    </div>
  );
}
