"use client";

import { PortfolioHero } from "./components/PortfolioHero";
import { ProjectSlider } from "./components/ProjectSlider";
import { PortfolioCta } from "./components/PortfolioCta";

export function PortfolioView() {
  return (
    <div className="flex flex-col w-full">
      <PortfolioHero />

      {/* Project Slider Section */}
      <ProjectSlider />

      <PortfolioCta />
    </div>
  );
}
