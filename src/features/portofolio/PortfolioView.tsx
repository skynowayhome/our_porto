"use client";

import { useState } from "react";
import { caseStudies } from "@/data";
import { PortfolioHero } from "./components/PortfolioHero";
import { CaseStudyDetailCard } from "./components/CaseStudyDetailCard";
import { PortfolioStability } from "./components/PortfolioStability";
import { PortfolioCta } from "./components/PortfolioCta";

export function PortfolioView() {
  const [activeFilter, setActiveFilter] = useState("semua");

  const filteredCases =
    activeFilter === "semua"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === activeFilter);

  return (
    <div className="flex flex-col w-full">
      <PortfolioHero
        activeFilter={activeFilter}
        onSelectFilter={setActiveFilter}
      />

      {/* Case Studies Section */}
      <section className="max-w-container mx-auto px-5 sm:px-8 pb-16 space-y-12">
        {filteredCases.map((cs, index) => (
          <CaseStudyDetailCard key={cs.id} caseStudy={cs} index={index} />
        ))}
      </section>

      <PortfolioStability />
      <PortfolioCta />
    </div>
  );
}
