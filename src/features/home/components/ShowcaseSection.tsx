"use client";

import Image from "next/image";
import { FadeInView } from "@/components/ui/FadeInView";
import { TechBadge } from "@/components/ui/TechBadge";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { caseStudies } from "@/data";
import { IconRoute } from "@/components/ui/Icons";
import { motion } from "framer-motion";

const accentStyleMap: Record<
  string,
  {
    badge: string;
    text: string;
    border: string;
    glow: string;
  }
> = {
  primary: {
    badge: "bg-primary-fixed text-primary",
    text: "text-primary",
    border: "border-primary/20",
    glow: "shadow-[0_8px_30px_rgba(39,94,149,0.12)]",
  },
  secondary: {
    badge: "bg-secondary-fixed text-secondary",
    text: "text-secondary",
    border: "border-secondary/20",
    glow: "shadow-[0_8px_30px_rgba(34,101,127,0.12)]",
  },
  tertiary: {
    badge: "bg-tertiary-fixed text-tertiary",
    text: "text-tertiary",
    border: "border-tertiary/20",
    glow: "shadow-[0_8px_30px_rgba(75,96,93,0.12)]",
  },
};

export function ShowcaseSection() {
  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <FadeInView>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 border border-primary/20">
              <span>Studi Kasus & Implementasi Nyata</span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-extrabold tracking-tight">
              Karya Pilihan & Hasil Uji Nyata
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base mt-2 max-w-xl">
              Lihat bagaimana kami mentransformasi kebutuhan operasional
              menjadi aplikasi yang siap pakai, stabil, dan teruji di lapangan.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-primary bg-surface-container-high border border-surface-dim px-3.5 py-2 rounded-xl self-start md:self-auto shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Terverifikasi di Lingkungan Produksi</span>
          </div>
        </div>
      </FadeInView>

      <div className="space-y-8 sm:space-y-10">
        {caseStudies.map((cs, index) => {
          const accent = accentStyleMap[cs.colorAccent] || accentStyleMap.primary;

          return (
            <FadeInView key={cs.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className={`rounded-2xl bg-surface-container-lowest border border-surface-dim p-5 sm:p-7 md:p-9 shadow-xs hover:shadow-xl hover:border-primary/30 transition-all duration-300`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                  {/* Text Column */}
                  <div
                    className={`lg:col-span-7 flex flex-col justify-between ${
                      cs.layout === "image-left" ? "order-2 lg:order-2" : "order-2 lg:order-1"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span
                          className={`px-3 py-1 rounded-full ${accent.badge} text-xs font-bold`}
                        >
                          {cs.categoryLabel}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>{cs.statusLabel}</span>
                        </span>
                      </div>
                      <h3 className="font-headline text-2xl sm:text-3xl text-on-surface font-extrabold mb-3">
                        {cs.title}
                      </h3>
                      <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-5">
                        {cs.description}
                      </p>

                      {/* Animated Real Metrics Banner */}
                      {cs.metrics && cs.metrics.length > 0 && (
                        <div className="grid grid-cols-3 gap-2.5 p-3 rounded-xl bg-surface-container-low border border-surface-dim mb-5">
                          {cs.metrics.map((m) => (
                            <div key={m.label} className="text-center">
                              <div className="font-headline text-base sm:text-lg font-black text-primary">
                                <AnimatedCounter value={m.value} />
                              </div>
                              <div className="text-[10px] sm:text-xs text-on-surface-variant font-medium">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-5">
                        {cs.highlights.map((h) => (
                          <div
                            key={h.title}
                            className="p-3 sm:p-3.5 rounded-xl bg-surface-container-low border border-surface-dim"
                          >
                            <div
                              className={`font-headline text-xs font-bold ${accent.text} uppercase tracking-wider mb-1`}
                            >
                              {h.title}
                            </div>
                            <div className="text-xs text-on-surface-variant leading-relaxed">
                              {h.text}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {cs.techStack.map((tech) => (
                          <TechBadge key={tech} label={tech} />
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-surface-dim/70">
                      <div className="flex items-center gap-2.5">
                        {cs.leadImage ? (
                          <Image
                            alt={cs.lead}
                            className="w-7 h-7 rounded-full object-cover ring-1 ring-primary"
                            src={cs.leadImage}
                            width={28}
                            height={28}
                          />
                        ) : (
                          <div className="w-7 h-7 rounded-full bg-primary-fixed text-primary flex items-center justify-center">
                            <IconRoute size={16} />
                          </div>
                        )}
                        <span className="text-xs text-on-surface-variant font-medium">
                          Lead:{" "}
                          <strong className="text-on-surface">
                            {cs.lead}
                          </strong>
                        </span>
                      </div>
                      <span
                        className={`text-xs font-bold ${accent.text}`}
                      >
                        {cs.footerLabel}
                      </span>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div
                    className={`lg:col-span-5 ${
                      cs.layout === "image-left" ? "order-1 lg:order-1" : "order-1 lg:order-2"
                    }`}
                  >
                    <div className="rounded-2xl overflow-hidden bg-surface-container-high border border-surface-dim shadow-inner relative group h-64 sm:h-76 md:h-84">
                      <Image
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        src={cs.image}
                        alt={cs.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 550px"
                      />
                      <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 p-2.5 sm:p-3 rounded-xl bg-surface-container-lowest/90 backdrop-blur-md border border-surface-dim flex items-center justify-between text-xs shadow-md z-10">
                        <span className="text-on-surface flex items-center gap-1.5 truncate text-[11px] sm:text-xs font-medium">
                          <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                          <span className="truncate">{cs.imageOverlay.text}</span>
                        </span>
                        {cs.imageOverlay.status ? (
                          <span className="text-emerald-600 font-bold shrink-0 ml-2 text-[11px] sm:text-xs">
                            {cs.imageOverlay.status}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeInView>
          );
        })}
      </div>
    </section>
  );
}
