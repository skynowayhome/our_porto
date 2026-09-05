import Link from "next/link";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { TechBadge } from "@/components/ui/TechBadge";
import { teamMembers } from "@/data";
import {
  IconCheck,
  IconCode,
  IconBadge,
  IconGroup,
} from "@/components/ui/Icons";

export function TeamProfiles() {
  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <FadeInView>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <SectionBadge label="Duo Founder & Lead Engineers" />
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
            Dua Insinyur di Balik Layar Produk Anda
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base mt-2">
            Kombinasi lengkap antara sistem cloud & website yang stabil dengan
            aplikasi mobile berkekuatan tinggi yang ramah digunakan pengguna
            Anda.
          </p>
        </div>
      </FadeInView>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {teamMembers.map((profile, index) => (

          <FadeInView key={profile.name} delay={index * 0.15}>
            <div
              className={`relative rounded-xl bg-surface-container-lowest border border-surface-dim p-5 sm:p-7 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group overflow-hidden h-full`}
            >
              <div
                className={`absolute top-0 right-0 w-44 h-44 ${profile.colorAccent === "primary" ? "bg-primary-fixed/20 group-hover:bg-primary-fixed/40" : "bg-secondary-fixed/25 group-hover:bg-secondary-fixed/45"} rounded-full blur-2xl pointer-events-none transition-all`}
              />

              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mb-5 sm:mb-6">
                <div
                  className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl overflow-hidden ring-2 ${profile.colorAccent === "primary" ? "ring-primary/20" : "ring-secondary/20"} shrink-0 shadow-sm`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={`${profile.name} Portrait`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={profile.image}
                  />
                  <div className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-surface-container-lowest" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-headline text-xl sm:text-2xl text-on-surface font-bold">
                      {profile.name}
                    </h3>
                    <span
                      className={`px-2.5 py-0.5 rounded-full ${profile.colorAccent === "primary" ? "bg-primary-fixed text-primary" : "bg-secondary-fixed text-secondary"} text-xs font-semibold`}
                    >
                      {profile.badge}
                    </span>
                  </div>
                  <p className={`text-sm ${profile.colorAccent === "primary" ? "text-primary" : "text-secondary"} font-medium mb-1`}>
                    {profile.specialization}
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    {profile.bio}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-surface-container-low border border-surface-dim p-3.5 sm:p-4 rounded-lg mb-5 sm:mb-6">
                <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2 font-headline">
                  Fokus & Peran Untuk Bisnis Anda
                </div>
                <p className="text-sm text-on-surface leading-relaxed italic">
                  {profile.quote}
                </p>
              </div>

              {/* Skills Detailed */}
              <div className="mb-6">
                <span className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2.5 font-headline">
                  Solusi yang Diunggulkan:
                </span>
                <div className="flex flex-wrap gap-2 mb-3.5">
                  {profile.detailedSkills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border ${profile.colorAccent === "primary" ? "bg-primary-fixed/30 text-primary border-primary/20" : "bg-secondary-fixed/30 text-secondary border-secondary/20"}`}
                    >
                      <IconCheck size={14} className="shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {profile.detailedSkills.slice(3).map((skill) => (
                    <TechBadge key={skill} label={skill} variant={profile.colorAccent} />
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-auto pt-4 border-t border-surface-dim flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center"
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub"
                  >
                    <IconCode size={18} />
                  </a>
                  <a
                    className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    title="LinkedIn"
                  >
                    <IconBadge size={16} />
                  </a>
                </div>
                <Link
                  href="/kontak"
                  className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-colors ${profile.colorAccent === "primary" ? "bg-primary-fixed text-primary border-primary/20 hover:bg-primary hover:text-on-primary" : "bg-secondary-fixed text-secondary border-secondary/20 hover:bg-secondary hover:text-on-secondary"}`}
                >
                  Hubungi {profile.name}
                </Link>
              </div>
            </div>
          </FadeInView>
        ))}
      </div>

      {/* Synergy Tag */}
      <FadeInView delay={0.3} scale={true}>
        <div className="mt-6 sm:mt-8 rounded-xl bg-surface-container-low border border-surface-dim p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center shrink-0">
              <IconGroup size={22} />
            </div>
            <div>
              <div className="font-headline text-sm text-on-surface font-bold">
                Sinergi Sempurna: Satu Tim untuk Semua Kebutuhan
              </div>
              <div className="text-xs text-on-surface-variant">
                Website dan aplikasi mobile Anda berkolaborasi secara harmonis tanpa perlu repot mengelola dua vendor berbeda.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 self-stretch sm:self-auto justify-end">
            <span className="px-3 py-1 rounded-full bg-primary-fixed text-primary text-xs font-semibold">
              Terstandardisasi
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary-fixed text-secondary text-xs font-semibold">
              100% Kompatibel
            </span>
          </div>
        </div>
      </FadeInView>
    </section>
  );
}
