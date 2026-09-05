import { FadeInView } from "@/components/ui/FadeInView";
import { TechBadge } from "@/components/ui/TechBadge";
import { CaseStudy } from "@/types";
import { Flame, CheckCircle2 } from "lucide-react";

interface CaseStudyDetailCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export function CaseStudyDetailCard({
  caseStudy: cs,
  index,
}: CaseStudyDetailCardProps) {
  return (
    <FadeInView delay={index * 0.1}>
      <div className="rounded-xl bg-surface-container-lowest border border-surface-dim overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
        {/* Case Study Header */}
        <div
          className={`p-2 ${cs.colorAccent === "primary" ? "bg-primary-fixed/30" : cs.colorAccent === "secondary" ? "bg-secondary-fixed/30" : "bg-tertiary-fixed/30"}`}
        >
          <div className="flex flex-wrap items-center gap-3 px-4 py-2">
            <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider font-headline">
              {cs.colorAccent === "primary"
                ? "Industri: Restoran & F&B"
                : cs.colorAccent === "secondary"
                  ? "Industri: Ritel & Minimarket"
                  : "Industri: Navigasi Kota & Transportasi"}
            </span>
            <span className="text-surface-dim">·</span>
            <span
              className={`text-xs font-semibold text-${cs.colorAccent} uppercase tracking-wider`}
            >
              {cs.colorAccent === "primary"
                ? "Arsitektur Concurrency Tinggi"
                : cs.colorAccent === "secondary"
                  ? "Arsitektur Offline-First Mandiri"
                  : "Algoritma C++ Kecepatan Tinggi"}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8 md:p-10">
          {/* Client Quote */}
          <div className="bg-surface-container-low border border-surface-dim p-4 rounded-lg mb-8">
            <div className="flex items-start gap-3">
              <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider whitespace-nowrap">
                Ringkasan Sederhana untuk Pemilik Bisnis:
              </span>
            </div>
            <p className="text-sm text-on-surface leading-relaxed mt-2 italic">
              &ldquo;{cs.challenge}&rdquo;
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-${cs.colorAccent}-fixed text-${cs.colorAccent}`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Hasil Nyata
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Text Content */}
            <div
              className={`lg:col-span-7 ${cs.layout === "image-left" ? "lg:order-2" : ""}`}
            >
              <h3 className="font-headline text-2xl sm:text-3xl text-on-surface font-bold mb-3">
                {cs.title}
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-6">
                {cs.description}
              </p>

              {/* Challenge & Solution */}
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-lg bg-surface-container-low border border-surface-dim">
                  <div
                    className={`font-headline text-xs font-bold text-${cs.colorAccent} uppercase tracking-wider mb-2 flex items-center gap-1.5`}
                  >
                    <Flame className="w-4 h-4" />
                    Tantangan yang Dihadapi Sebelumnya
                  </div>
                  <p className="text-sm text-on-surface-variant">
                    {cs.challenge}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-surface-container-low border border-surface-dim">
                  <div
                    className={`font-headline text-xs font-bold text-${cs.colorAccent} uppercase tracking-wider mb-2 flex items-center gap-1.5`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Solusi Rekayasa yang Kami Terapkan
                  </div>
                  <p className="text-sm text-on-surface-variant">
                    {cs.solution}
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cs.techStack.map((tech, i) => (
                  <TechBadge
                    key={tech}
                    label={tech}
                    variant={i === 0 ? cs.colorAccent : "neutral"}
                  />
                ))}
              </div>
            </div>

            {/* Image + Metrics */}
            <div
              className={`lg:col-span-5 ${cs.layout === "image-left" ? "lg:order-1" : ""}`}
            >
              <div className="rounded-xl overflow-hidden bg-surface-container-high border border-surface-dim shadow-inner relative group mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-64 sm:h-72 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  src={cs.image}
                  alt={cs.title}
                />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-surface-container-lowest/90 backdrop-blur-md border border-surface-dim flex items-center justify-between text-xs shadow-sm">
                  <span className="text-on-surface flex items-center gap-1.5 truncate">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {cs.imageOverlay.text}
                  </span>
                  <span className="text-emerald-600 font-semibold shrink-0 ml-2">
                    {cs.imageOverlay.status}
                  </span>
                </div>
              </div>

              {/* Metric Results */}
              <div className="grid grid-cols-3 gap-3">
                {cs.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="text-center p-3 rounded-lg bg-surface-container-low border border-surface-dim"
                  >
                    <div
                      className={`font-headline text-xl sm:text-2xl font-bold text-${cs.colorAccent}`}
                    >
                      {metric.value}
                    </div>
                    <div className="text-xs text-on-surface-variant mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInView>
  );
}
