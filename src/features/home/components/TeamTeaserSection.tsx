import Link from "next/link";
import Image from "next/image";
import { FadeInView } from "@/components/ui/FadeInView";
import { TechBadge } from "@/components/ui/TechBadge";
import { teamMembers } from "@/data";
import { SkillItem } from "@/types";
import { IconCode, IconRoute, iconMap } from "@/components/ui/Icons";


export function TeamTeaserSection() {
  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <FadeInView>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
              Partner Teknis di Balik Setiap Baris Kode Anda
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base mt-2 max-w-xl">
              Kami bekerja kompak, teliti, dan mengutamakan kualitas aplikasi
              terbaik untuk kesuksesan bisnis Anda.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-on-surface-variant bg-surface-container-low border border-surface-dim px-3.5 py-2 rounded-lg self-start md:self-auto shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="font-label">
              Siap Eksekusi Sesuai Target Timeline
            </span>
          </div>
        </div>
      </FadeInView>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {teamMembers.map((profile, index) => (
          <FadeInView key={profile.name} delay={index * 0.15}>
            <div
              className={`relative rounded-xl bg-surface-container-lowest border border-surface-dim p-5 sm:p-7 md:p-8 shadow-sm hover:shadow-md hover:border-${profile.colorAccent}/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden h-full`}
            >
              <div
                className={`absolute top-0 right-0 w-44 h-44 bg-${profile.colorAccent}-fixed/20 rounded-full blur-2xl pointer-events-none group-hover:bg-${profile.colorAccent}-fixed/40 transition-all`}
              />
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mb-5 sm:mb-6">
                  <div
                    className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-xl overflow-hidden ring-2 ring-${profile.colorAccent}/20 shrink-0 shadow-sm`}
                  >
                    <Image
                      alt={`${profile.name} Portrait`}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      src={profile.image}
                      fill
                      sizes="(max-width: 768px) 96px, 112px"
                    />
                    <div className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-surface-container-lowest z-10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-headline text-xl sm:text-2xl text-on-surface font-bold">
                        {profile.name}
                      </h3>
                      <span
                        className={`px-2.5 py-0.5 rounded-full bg-${profile.colorAccent}-fixed text-${profile.colorAccent} text-xs font-semibold`}
                      >
                        {profile.badge}
                      </span>
                    </div>
                    <p
                      className={`text-sm text-${profile.colorAccent} font-medium mb-1`}
                    >
                      {profile.specialization}
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      {profile.bio}
                    </p>
                  </div>
                </div>

                <div className="bg-surface-container-low border border-surface-dim p-3.5 sm:p-4 rounded-lg mb-5 sm:mb-6">
                  <p className="text-sm text-on-surface leading-relaxed italic">
                    {profile.quote}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2.5 font-headline">
                    Keahlian & Teknologi:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill: SkillItem) => (
                      <TechBadge
                        key={skill.label}
                        label={skill.label}
                        variant={skill.variant}
                      />
                    ))}
                  </div>
                </div>
              </div>


              <div className="pt-4 border-t border-surface-dim flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium">
                  {(() => {
                    const FocusIcon = iconMap[profile.focusIcon] || IconRoute;
                    return <FocusIcon size={18} className={`text-${profile.colorAccent}`} />;
                  })()}
                  <span>{profile.focus}</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center"
                    href="https://github.com"
                    rel="noreferrer"
                    target="_blank"
                    title="GitHub"
                  >
                    <IconCode size={18} />
                  </a>
                  <Link
                    className={`px-3 py-1.5 rounded-lg bg-${profile.colorAccent}-fixed text-${profile.colorAccent} hover:bg-${profile.colorAccent} hover:text-on-${profile.colorAccent} text-xs font-semibold border border-${profile.colorAccent}/20 transition-colors`}
                    href="/kontak"
                  >
                    Hubungi {profile.name}
                  </Link>
                </div>
              </div>
            </div>
          </FadeInView>
        ))}
      </div>
    </section>
  );
}
