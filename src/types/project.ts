import { ColorVariant } from "./team";

export interface CaseStudyHighlight {
  title: string;
  text: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudyImageOverlay {
  text: string;
  status: string;
}

export interface CaseStudy {
  id: string;
  category: string;
  categoryLabel: string;
  statusLabel: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  highlights: readonly CaseStudyHighlight[];
  metrics: readonly CaseStudyMetric[];
  techStack: readonly string[];
  lead: string;
  leadImage: string | null;
  image: string;
  imageOverlay: CaseStudyImageOverlay;
  footerLabel: string;
  colorAccent: ColorVariant;
  layout: "text-left" | "image-left";
}

export interface PortfolioMetricItem {
  value: string;
  label: string;
  icon: string;
}

export interface PortfolioFilterItem {
  id: string;
  label: string;
}

export interface SliderProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: readonly string[];
  category: string;
  image: string;
  accentGradient: string;
  icon: string;
}
