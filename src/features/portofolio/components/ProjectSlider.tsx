"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import { sliderProjects } from "@/data";
import { SliderProject } from "@/types";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionBadge } from "@/components/ui/SectionBadge";
import {
  Map,
  Pizza,
  LineChart,
  IdCard,
  Receipt,
  Truck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const sliderIconMap: Record<string, LucideIcon> = {
  travel_explore: Map,
  local_pizza: Pizza,
  monitoring: LineChart,
  badge: IdCard,
  receipt_long: Receipt,
  local_shipping: Truck,
};

/* ─── Individual Project Card ─── */
function ProjectCard({
  project,
  isActive,
}: {
  project: SliderProject;
  isActive: boolean;
}) {
  return (
    <div
      className={`h-full rounded-2xl overflow-hidden border transition-all duration-500 ${
        isActive
          ? "bg-surface-container-lowest border-primary/40 shadow-2xl shadow-primary/10 ring-2 ring-primary/20"
          : "bg-surface-container-lowest border-surface-dim shadow-xs hover:border-outline-variant"
      }`}
    >
      {/* ── Image / Placeholder Area ── */}
      <div
        className={`relative aspect-[16/10] ${project.accentGradient} flex items-center justify-center overflow-hidden group`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          />
        ) : (
          <>
            {/* Decorative radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.15),transparent_50%)]" />

            {/* Browser-style dots */}
            <div className="absolute top-4 left-4 flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
            </div>

            {/* Central icon */}
            <div className="flex flex-col items-center gap-3">
              {project.icon && sliderIconMap[project.icon] ? (
                (() => {
                  const IconComponent = sliderIconMap[project.icon];
                  return <IconComponent className="text-white/20 select-none w-16 h-16 sm:w-20 sm:h-20" strokeWidth={1} />;
                })()
              ) : (
                <span className="material-symbols-outlined text-[64px] sm:text-[80px] text-white/20 select-none">
                  {project.icon}
                </span>
              )}
              <span className="text-white/30 text-xs font-headline font-semibold tracking-wider uppercase">
                {project.subtitle}
              </span>
            </div>

            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
          </>
        )}

        {/* Category overlay badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-semibold shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {project.category}
          </span>
        </div>
      </div>

      {/* ── Content Area ── */}
      <div className="p-5 sm:p-6 flex flex-col justify-between">
        <div>
          <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface mb-2 leading-tight">
            {project.title}
          </h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-5 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-surface-dim/70">
          {project.techStack.map((tech, idx) => (
            <span
              key={tech}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                idx === 0
                  ? "bg-primary-fixed text-primary font-bold"
                  : "bg-surface-container-high text-on-surface-variant"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Animated Progress Bar ─── */
function SliderProgress({
  activeIndex,
  total,
  goTo,
}: {
  activeIndex: number;
  total: number;
  goTo: (idx: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => goTo(i)}
          className="relative p-1 group cursor-pointer"
          aria-label={`Lihat slide proyek ${i + 1}`}
        >
          <span
            className={`block rounded-full transition-all duration-500 ease-out ${
              i === activeIndex
                ? "w-10 h-2.5 bg-primary shadow-xs"
                : "w-2.5 h-2.5 bg-surface-dim group-hover:bg-outline"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

/* ─── Main Slider Component ─── */
export function ProjectSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(1000);
  const [cardWidth, setCardWidth] = useState(480);
  const [gap, setGap] = useState(24);
  const total = sliderProjects.length;
  const dragX = useMotionValue(0);

  /* ── Responsive dimensions ── */
  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      setContainerWidth(w);
      if (w < 640) {
        setCardWidth(w * 0.84);
        setGap(14);
      } else if (w < 1024) {
        setCardWidth(w * 0.52);
        setGap(20);
      } else {
        setCardWidth(Math.min(w * 0.38, 500));
        setGap(28);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (idx: number) => {
      setActiveIndex(idx);
      setIsPaused(true);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
      // Resume auto-play after 6s
      pauseTimerRef.current = setTimeout(() => setIsPaused(false), 6000);
    },
    []
  );

  const next = useCallback(() => goTo((activeIndex + 1) % total), [activeIndex, total, goTo]);
  const prev = useCallback(
    () => goTo((activeIndex - 1 + total) % total),
    [activeIndex, total, goTo]
  );

  // Clean up pause timer on unmount
  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, []);

  /* ── Auto-play ── */
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((p) => (p + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  /* ── Keyboard navigation ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goTo((activeIndex - 1 + total) % total);
      if (e.key === "ArrowRight") goTo((activeIndex + 1) % total);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIndex, total, goTo]);

  /* ── Track offset to keep active card centered ── */
  const trackX =
    -(activeIndex * (cardWidth + gap)) + (containerWidth / 2 - cardWidth / 2);

  /* ── Drag handling ── */
  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const threshold = cardWidth * 0.2;
    if (info.offset.x > threshold || info.velocity.x > 500) {
      prev();
    } else if (info.offset.x < -threshold || info.velocity.x < -500) {
      next();
    }
  };

  return (
    <section className="py-10 sm:py-16">
      {/* Section header */}
      <div className="max-w-container mx-auto px-5 sm:px-8 mb-6 sm:mb-8">
        <FadeInView>
          <SectionBadge label="Karya & Proyek Terpilih" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-2">
            <div>
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight mb-2">
                Proyek Nyata yang Telah Kami{" "}
                <span className="text-primary">Bangun & Rilis</span>
              </h2>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed max-w-2xl">
                Solusi perangkat lunak yang telah teruji untuk kebutuhan bisnis riil —
                dari sistem logistik multi-cabang hingga dashboard analitik keuangan.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Geser atau klik kartu untuk menjelajah</span>
              </span>
            </div>
          </div>
        </FadeInView>

        {/* Quick category jump pills */}
        <div className="flex flex-wrap gap-2 mt-6">
          {sliderProjects.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              onClick={() => goTo(idx)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                idx === activeIndex
                  ? "bg-primary text-on-primary shadow-xs"
                  : "bg-surface-container-low hover:bg-surface-container text-on-surface border border-surface-dim"
              }`}
            >
              {p.title.split("(")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Slider viewport */}
      <div
        ref={containerRef}
        className="relative overflow-hidden select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-background to-transparent z-[6] pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-background to-transparent z-[6] pointer-events-none" />

        {/* Track */}
        <motion.div
          className="flex items-stretch cursor-grab active:cursor-grabbing"
          style={{ gap, x: dragX }}
          animate={{ x: trackX }}
          transition={{ type: "spring", stiffness: 280, damping: 32, mass: 0.8 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={handleDragEnd}
        >
          {sliderProjects.map((project, i) => {
            const offset = Math.abs(i - activeIndex);
            return (
              <motion.div
                key={project.id}
                className="shrink-0"
                style={{ width: cardWidth }}
                animate={{
                  scale: i === activeIndex ? 1 : 0.88,
                  opacity: offset === 0 ? 1 : offset === 1 ? 0.6 : 0.35,
                  y: i === activeIndex ? 0 : 12,
                }}
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 28,
                  mass: 0.7,
                }}
                onClick={() => {
                  if (i !== activeIndex) goTo(i);
                }}
              >
                <ProjectCard project={project} isActive={i === activeIndex} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-surface-container-lowest/90 backdrop-blur-md border border-surface-dim shadow-lg flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-200 active:scale-90 cursor-pointer"
          aria-label="Proyek sebelumnya"
        >
          <ChevronLeft className="w-[22px] h-[22px]" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-surface-container-lowest/90 backdrop-blur-md border border-surface-dim shadow-lg flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-200 active:scale-90 cursor-pointer"
          aria-label="Proyek selanjutnya"
        >
          <ChevronRight className="w-[22px] h-[22px]" />
        </button>
      </div>

      {/* Progress Dots Component */}
      <SliderProgress activeIndex={activeIndex} total={total} goTo={goTo} />

      {/* Counter */}
      <div className="flex justify-center mt-4">
        <span className="text-xs text-on-surface-variant font-headline font-semibold">
          <span className="text-primary font-bold">{String(activeIndex + 1).padStart(2, "0")}</span>
          <span className="mx-1.5 text-surface-dim">/</span>
          <span>{String(total).padStart(2, "0")}</span>
        </span>
      </div>
    </section>
  );
}
