"use client";

import { PortfolioHero } from "./components/PortfolioHero";
import { ProjectSlider } from "./components/ProjectSlider";
import { PortfolioWorkProcess } from "./components/PortfolioWorkProcess";
import { PortfolioStability } from "./components/PortfolioStability";
import { PortfolioCta } from "./components/PortfolioCta";

export function PortfolioView() {
  return (
    <div className="flex flex-col w-full">
      <PortfolioHero />
      <ProjectSlider />
      <PortfolioWorkProcess />
      <PortfolioStability />
      <PortfolioCta />
    </div>
  );
}
