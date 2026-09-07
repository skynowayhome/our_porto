export interface NavLink {
  href: string;
  label: string;
}

export interface ContactCategory {
  icon: string;
  label: string;
  description: string;
}

export interface BudgetOption {
  label: string;
  tag: string;
  popular?: boolean;
  description: string;
  icon?: string;
}

export interface FaqItem {
  number: string;
  category: string;
  question: string;
  answer: string;
  icon?: string;
}

export interface WorkProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  icon: string;
  cta: string;
}

export interface CommitmentValue {
  icon: string;
  title: string;
  description: string;
  cta: string;
}

export interface TechStackItem {
  name: string;
  description: string;
  icon: string;
}
