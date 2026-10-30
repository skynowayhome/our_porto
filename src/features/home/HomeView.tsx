"use client";

import { HeroSection } from "./components/HeroSection";
import { ServicesTeaserSection } from "./components/ServicesTeaserSection";
import { TechStackSection } from "./components/TechStackSection";
import { HomeCtaSection } from "./components/HomeCtaSection";

export function HomeView() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ServicesTeaserSection />
      <TechStackSection />
      <HomeCtaSection />
    </div>
  );
}
