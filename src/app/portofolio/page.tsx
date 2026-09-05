"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { TechBadge } from "@/components/ui/TechBadge";
import {
  caseStudies,
  portofolioMetrics,
  portfolioFilters,
} from "@/lib/constants";

export default function PortofolioPage() {
  const [activeFilter, setActiveFilter] = useState("semua");

  const filteredCases =
    activeFilter === "semua"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === activeFilter);

  return (
    <div className="flex flex-col w-full">
      {/* ===== HERO SECTION ===== */}
      <section className="relative max-w-container mx-auto px-5 sm:px-8 pt-12 md:pt-20 pb-16">
        <FadeInView>
          <SectionBadge label="Portofolio & Karya Produksi Nyata" />
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface tracking-tight leading-[1.15] mb-4 max-w-3xl">
            Sistem Digital Canggih,{" "}
            <span className="text-primary">
              Hasil Nyata yang Langsung Terasa.
            </span>
          </h1>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-10 max-w-2xl">
            Kami merancang dan membangun software yang memecahkan masalah riil
            bisnis Anda: antrean lancar di jam sibuk, kasir yang tetap jalan
            meski mati lampu/sinyal, hingga perhitungan rute kota tercepat dalam
            sekejap mata.
          </p>
        </FadeInView>

        {/* Metrics Bar */}
        <FadeInView delay={0.15}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {portofolioMetrics.map((metric) => (
              <div
                key={metric.label}
                className="flex items-center gap-3 p-4 rounded-lg bg-surface-container-lowest border border-surface-dim"
              >
                <span className="material-symbols-outlined text-[24px] text-primary">
                  {metric.icon}
                </span>
                <div>
                  <div className="font-headline text-xl sm:text-2xl font-bold text-on-surface">
                    {metric.value}
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    {metric.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInView>

        {/* Filter Tabs */}
        <FadeInView delay={0.2}>
          <div className="flex flex-wrap gap-2">
            {portfolioFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-lg text-sm font-headline font-semibold transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "bg-primary text-on-primary shadow-sm"
                    : "bg-surface-container-lowest border border-surface-dim text-on-surface-variant hover:border-primary/40 hover:text-primary"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </FadeInView>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section className="max-w-container mx-auto px-5 sm:px-8 pb-16 space-y-12">
        {filteredCases.map((cs, index) => (
          <FadeInView key={cs.id} delay={index * 0.1}>
            <div className="rounded-xl bg-surface-container-lowest border border-surface-dim overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              {/* Case Study Header */}
              <div className={`p-2 ${cs.colorAccent === "primary" ? "bg-primary-fixed/30" : cs.colorAccent === "secondary" ? "bg-secondary-fixed/30" : "bg-tertiary-fixed/30"}`}>
                <div className="flex flex-wrap items-center gap-3 px-4 py-2">
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider font-headline">
                    {cs.colorAccent === "primary"
                      ? "Industri: Restoran & F&B"
                      : cs.colorAccent === "secondary"
                        ? "Industri: Ritel & Minimarket"
                        : "Industri: Navigasi Kota & Transportasi"}
                  </span>
                  <span className="text-surface-dim">·</span>
                  <span className={`text-xs font-semibold text-${cs.colorAccent} uppercase tracking-wider`}>
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
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-${cs.colorAccent}-fixed text-${cs.colorAccent}`}>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Hasil Nyata
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Text Content */}
                  <div className={`lg:col-span-7 ${cs.layout === "image-left" ? "lg:order-2" : ""}`}>
                    <h3 className="font-headline text-2xl sm:text-3xl text-on-surface font-bold mb-3">
                      {cs.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-6">
                      {cs.description}
                    </p>

                    {/* Challenge & Solution */}
                    <div className="space-y-4 mb-6">
                      <div className="p-4 rounded-lg bg-surface-container-low border border-surface-dim">
                        <div className={`font-headline text-xs font-bold text-${cs.colorAccent} uppercase tracking-wider mb-2`}>
                          🔥 Tantangan yang Dihadapi Sebelumnya
                        </div>
                        <p className="text-sm text-on-surface-variant">{cs.challenge}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-surface-container-low border border-surface-dim">
                        <div className={`font-headline text-xs font-bold text-${cs.colorAccent} uppercase tracking-wider mb-2`}>
                          ✅ Solusi Rekayasa yang Kami Terapkan
                        </div>
                        <p className="text-sm text-on-surface-variant">{cs.solution}</p>
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
                  <div className={`lg:col-span-5 ${cs.layout === "image-left" ? "lg:order-1" : ""}`}>
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
                          <div className={`font-headline text-xl sm:text-2xl font-bold text-${cs.colorAccent}`}>
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
        ))}
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="max-w-container mx-auto px-5 sm:px-8 py-16">
        <FadeInView>
          <div className="rounded-2xl bg-gradient-to-br from-primary via-[#1f4e7d] to-[#153a5e] p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]" />
            <div className="relative z-10">
              <SectionBadge label="Konsultasi Gratis Tanpa Abal, Terbuka" variant="neutral" />
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight mb-4">
                Punya Rencana Membangun Aplikasi atau Memperbaiki Sistem Lama?
              </h2>
              <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                Ceritakan kebutuhan bisnis kepada kami. Tanpa bahasa teknis yang
                rumit, kami berikan rekomendasi solusi terbaik yang hemat anggaran
                dan siap pakai.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-white text-primary font-headline font-semibold text-sm shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                >
                  <span>Mulai Diskusi Dengan Tim Kami</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  href="/layanan"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/15 hover:bg-white/25 text-white font-headline font-semibold text-sm border border-white/20 transition-all duration-200"
                >
                  <span>Pelajari Paket Layanan</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-white/60 text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">
                    verified
                  </span>
                  Perjanjian Kerahasiaan (NDA Ready)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">
                    record_voice_over
                  </span>
                  Bicara Langsung dengan Pembuat Sistem
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">
                    calculate
                  </span>
                  Estimasi Waktu & Biaya Transparan
                </span>
              </div>
            </div>
          </div>
        </FadeInView>
      </section>
    </div>
  );
}
