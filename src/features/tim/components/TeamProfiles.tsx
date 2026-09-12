import Image from "next/image";
import { FadeInView } from "@/components/ui/FadeInView";
import { teamMembers } from "@/data";
import {
  IconCode,
  IconBadge,
} from "@/components/ui/Icons";

export function TeamProfiles() {
  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <FadeInView>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
            Partner Teknis di Balik Solusi Digital Anda
          </h2>
          {/* <p className="text-on-surface-variant text-sm sm:text-base mt-2">
            Kombinasi lengkap antara sistem cloud & website yang stabil dengan
            aplikasi mobile berkekuatan tinggi yang ramah digunakan pengguna
            Anda.
          </p> */}
        </div>
      </FadeInView>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {teamMembers.map((profile, index) => {
          const isAhmad = profile.name.includes("Ahmad");

          return (
            <FadeInView key={profile.name} delay={index * 0.15}>
              <div
                className="relative rounded-2xl bg-surface-container-lowest border border-surface-dim shadow-md hover:shadow-xl transition-all duration-500 flex flex-col group overflow-hidden h-full"
              >
                {/* Photo Showcase (Clear Portrait with full visibility) */}
                <div className="relative w-full aspect-[4/4.6] sm:aspect-[4/4.8] overflow-hidden bg-[#e8e6df]/50 flex items-center justify-center">
                  {profile.image ? (
                    <Image
                      alt={`${profile.name} Portrait`}
                      className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                        isAhmad
                          ? "object-[center_28%]"
                          : "object-[center_12%]"
                      }`}
                      src={profile.image.startsWith("/") || profile.image.startsWith("http") ? profile.image : `/${profile.image}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 550px"
                      priority={index === 0}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-surface-container text-on-surface-variant p-6 text-center select-none">
                      <span className="text-xs sm:text-sm font-semibold text-on-surface">
                        Foto {profile.role}
                      </span>
                    </div>
                  )}

                  {/* Subtle soft gradient at very bottom edge only */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent z-10 pointer-events-none" />

                  {/* Role Badge Top Left */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border shadow-sm ${
                        profile.colorAccent === "primary"
                          ? "bg-primary/90 text-white border-primary/30"
                          : "bg-secondary/90 text-white border-secondary/30"
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {profile.badge}
                    </span>
                  </div>
                </div>

                {/* Profile Details Content */}
                <div className="p-5 sm:p-7 flex flex-col flex-1">
                  {/* Name & Title (Cleanly placed below photo) */}
                  <div className="mb-4">
                    <h3 className="font-headline text-2xl sm:text-3xl text-on-surface font-extrabold tracking-tight">
                      {profile.name}
                    </h3>
                    <p
                      className={`text-sm sm:text-base font-semibold mt-1 ${
                        profile.colorAccent === "primary" ? "text-primary" : "text-secondary"
                      }`}
                    >
                      {profile.specialization}
                    </p>
                  </div>

                  {/* Quote / Role Statement */}
                  <div className="bg-surface-container-low/80 border border-surface-dim p-4 rounded-xl mb-6 relative">
                    <div className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1.5 font-headline flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${profile.colorAccent === "primary" ? "bg-primary" : "bg-secondary"}`} />
                      Fokus & Peran Untuk Klien
                    </div>
                    <p className="text-xs sm:text-sm text-on-surface leading-relaxed italic">
                      {profile.quote}
                    </p>
                  </div>

                  {/* Bottom Actions */}
                  <div className="mt-auto pt-4 border-t border-surface-dim flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <a
                        className="p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center"
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        title="GitHub"
                      >
                        <IconCode size={18} />
                      </a>
                      <a
                        className="p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center"
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        title="LinkedIn"
                      >
                        <IconBadge size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>
          );
        })}
      </div>

    </section>
  );
}
