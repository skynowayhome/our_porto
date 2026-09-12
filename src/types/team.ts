export type ColorVariant = "primary" | "secondary" | "neutral" | "tertiary";

export interface SkillItem {
  label: string;
  variant: ColorVariant;
}

export interface TeamMemberProfile {
  name: string;
  nickname?: string;
  role: string;
  badge: string;
  specialization: string;
  bio: string;
  quote: string;
  focus: string;
  focusIcon: string;
  skills: SkillItem[];
  image: string;
  colorAccent: ColorVariant;
  detailedSkills: string[];
}

export interface TeamProfilesMap {
  [key: string]: TeamMemberProfile;
  skyy: TeamMemberProfile;
  aris: TeamMemberProfile;
  cfo: TeamMemberProfile;
  cmo: TeamMemberProfile;
}


