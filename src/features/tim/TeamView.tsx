"use client";

import { TeamHero } from "./components/TeamHero";
import { TeamProfiles } from "./components/TeamProfiles";
import { TeamCommitments } from "./components/TeamCommitments";
import { TeamCta } from "./components/TeamCta";

export function TeamView() {
  return (
    <div className="flex flex-col w-full">
      <TeamHero />
      <TeamProfiles />
      <TeamCommitments />
      <TeamCta />
    </div>
  );
}
