import { FadeInView } from "@/components/ui/FadeInView";
import { TechBadge } from "@/components/ui/TechBadge";
import { caseStudies } from "@/data";
import { IconRoute } from "@/components/ui/Icons";

export function ShowcaseSection() {
  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <FadeInView>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
              Karya Pilihan & Studi Kasus Nyata
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base mt-2 max-w-xl">
              Lihat bagaimana kami mentransformasi kebutuhan operasional
              menjadi aplikasi yang siap pakai dan teruji.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-primary bg-surface-container-high border border-surface-dim px-3.5 py-2 rounded-lg self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>3 Studi Kasus Unggulan</span>
          </div>
        </div>
      </FadeInView>

      <div className="space-y-8 sm:space-y-10">
        {caseStudies.map((cs, index) => (
          <FadeInView key={cs.id} delay={index * 0.1}>
            <div className="rounded-xl bg-surface-container-lowest border border-surface-dim p-5 sm:p-7 md:p-10 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                {/* Text Column */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-between ${cs.layout === "image-left" ? "order-2 lg:order-2" : "order-2 lg:order-1"}`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span
                        className={`px-3 py-1 rounded-full bg-${cs.colorAccent}-fixed text-${cs.colorAccent} text-xs font-semibold`}
                      >
                        {cs.categoryLabel}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{cs.statusLabel}</span>
                      </span>
                    </div>
                    <h3 className="font-headline text-2xl sm:text-3xl text-on-surface font-bold mb-3">
                      {cs.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-6">
                      {cs.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6">
                      {cs.highlights.map((h) => (
                        <div
                          key={h.title}
                          className="p-3 sm:p-3.5 rounded-lg bg-surface-container-low border border-surface-dim"
                        >
                          <div
                            className={`font-headline text-xs font-bold text-${cs.colorAccent} uppercase tracking-wider mb-1`}
                          >
                            {h.title}
                          </div>
                          <div className="text-xs text-on-surface-variant">
                            {h.text}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cs.techStack.map((tech) => (
                        <TechBadge key={tech} label={tech} />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-surface-dim">
                    <div className="flex items-center gap-2.5">
                      {cs.leadImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          alt={cs.lead}
                          className="w-7 h-7 rounded-full object-cover ring-1 ring-primary"
                          src={cs.leadImage}
                        />
                      ) : (
                        <IconRoute size={20} className="text-primary" />
                      )}
                      <span className="text-xs text-on-surface-variant font-medium">
                        Lead Developer:{" "}
                        <strong className="text-on-surface">
                          {cs.lead}
                        </strong>
                      </span>
                    </div>
                    <span
                      className={`text-xs font-semibold text-${cs.colorAccent}`}
                    >
                      {cs.footerLabel}
                    </span>
                  </div>
                </div>

                {/* Image Column */}
                <div
                  className={`lg:col-span-6 ${cs.layout === "image-left" ? "order-1 lg:order-1" : "order-1 lg:order-2"}`}
                >
                  <div className="rounded-xl overflow-hidden bg-surface-container-high border border-surface-dim shadow-inner relative group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full h-60 sm:h-72 md:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      src={cs.image}
                      alt={cs.title}
                    />
                    <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 p-2.5 sm:p-3 rounded-lg bg-surface-container-lowest/90 backdrop-blur-md border border-surface-dim flex items-center justify-between text-xs shadow-sm">
                      <span className="text-on-surface flex items-center gap-1.5 truncate text-[11px] sm:text-xs">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span className="truncate">{cs.imageOverlay.text}</span>
                      </span>
                      {cs.imageOverlay.status ? (
                        <span className="text-emerald-600 font-semibold shrink-0 ml-2 text-[11px] sm:text-xs">
                          {cs.imageOverlay.status}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInView>
        ))}
      </div>
    </section>
  );
}
