import { ColorVariant } from "./team";

export interface ServiceItem {
  id: string;
  number: string;
  tag: string;
  icon: string;
  title: string;
  description: string;
  benefits: readonly string[];
  deliverables?: readonly string[];
  cta: string;
  colorAccent: ColorVariant;
  techStack: readonly string[];
}

export interface UmlDiagramOption {
  id: string;
  name: string;
  description: string;
  category: "behavioral" | "structural" | "document";
}

export interface PricingModel {
  tag: string;
  highlight: boolean;
  highlightLabel: string;
  title: string;
  description: string;
  price: string;
  unit: string;
  features: readonly string[];
  cta: string;
  ctaStyle: "outline" | "primary";
}
