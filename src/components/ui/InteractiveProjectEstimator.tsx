"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  LayoutDashboard,
  Smartphone,
  Workflow,
  Check,
  Sparkles,
  Clock,
  Code2,
  Shield,
  MessageCircle,
  ArrowRight,
  Layers,
} from "lucide-react";
import Link from "next/link";

interface ProjectTypeOption {
  id: string;
  title: string;
  badge: string;
  icon: typeof Globe;
  baseDaysMin: number;
  baseDaysMax: number;
  recommendedStack: string[];
  description: string;
}

const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: "web-landing",
    title: "Web & Landing Page",
    badge: "Kilat & Elegan",
    icon: Globe,
    baseDaysMin: 5,
    baseDaysMax: 10,
    recommendedStack: ["Next.js 16", "Tailwind CSS", "SEO Meta", "Vercel"],
    description: "Company profile, landing page promosi produk, atau portal portofolio modern.",
  },
  {
    id: "web-dashboard",
    title: "Dashboard & WebApps",
    badge: "Operasional Bisnis",
    icon: LayoutDashboard,
    baseDaysMin: 14,
    baseDaysMax: 25,
    recommendedStack: ["React / Next.js", "Golang / Laravel", "PostgreSQL", "Docker Staging"],
    description: "Sistem kasir (POS), inventori stok, CRM pelanggan, dan laporan analitik real-time.",
  },
  {
    id: "mobile-app",
    title: "Aplikasi Mobile App",
    badge: "Android & iOS",
    icon: Smartphone,
    baseDaysMin: 18,
    baseDaysMax: 32,
    recommendedStack: ["Flutter Native", "SQLite Offline-First", "REST API", "Push Notif"],
    description: "Aplikasi kasir, kurir/lapangan, absensi, atau katalog toko yang tetap lancar tanpa internet.",
  },
  {
    id: "project-planner",
    title: "Project Planner & UML",
    badge: "Bebas Pilih UML",
    icon: Workflow,
    baseDaysMin: 3,
    baseDaysMax: 7,
    recommendedStack: ["UML 2.5", "IEEE 830 SRS", "Agile PRD", "Draw.io / PlantUML"],
    description: "Penyusunan dokumen formal SRS, PRD, dan pilihan bebas diagram UML (Use Case, ERD, dll) sebelum koding.",
  },
];

interface FeatureOption {
  id: string;
  label: string;
  daysAdd: number;
  category: "all" | "web" | "app" | "dashboard" | "planner";
}

const FEATURES: FeatureOption[] = [
  { id: "wa-order", label: "💬 Form Order ke WhatsApp", daysAdd: 1, category: "all" },
  { id: "admin-cms", label: "⚙️ Panel Admin / Edit Konten", daysAdd: 2, category: "all" },
  { id: "payment-gateway", label: "💳 Payment Gateway (QRIS/Transfer)", daysAdd: 3, category: "all" },
  { id: "offline-sync", label: "📡 Offline-First & Sync Database", daysAdd: 3, category: "app" },
  { id: "native-features", label: "📍 Integrasi GPS, Kamera & Notifikasi", daysAdd: 2, category: "app" },
  { id: "seo-maps", label: "📈 Supercharge SEO & Google Maps", daysAdd: 1, category: "web" },
  { id: "roles-staff", label: "👥 Hak Akses Staf Bertingkat", daysAdd: 2, category: "dashboard" },
  { id: "export-pdf", label: "📊 Export Laporan PDF & Excel", daysAdd: 1, category: "dashboard" },
  { id: "uml-diagrams", label: "📐 Diagram UML Bebas Pilih (Use Case, Sequence, ERD)", daysAdd: 2, category: "planner" },
  { id: "srs-prd-doc", label: "📄 Dokumen Formal SRS (IEEE) & PRD Lengkap", daysAdd: 2, category: "planner" },
];

export function InteractiveProjectEstimator() {
  const [selectedType, setSelectedType] = useState<ProjectTypeOption>(PROJECT_TYPES[0]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "wa-order",
    "seo-maps",
  ]);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate dynamic timeline
  const addedDays = selectedFeatures.reduce((acc, featId) => {
    const feat = FEATURES.find((f) => f.id === featId);
    return acc + (feat ? feat.daysAdd : 0);
  }, 0);

  const totalMinDays = selectedType.baseDaysMin + Math.floor(addedDays * 0.7);
  const totalMaxDays = selectedType.baseDaysMax + addedDays;

  // Generate WhatsApp consultation prefill link
  const featureLabels = selectedFeatures
    .map((id) => FEATURES.find((f) => f.id === id)?.label)
    .filter(Boolean)
    .join(", ");

  const waMessage = encodeURIComponent(
    `Halo Zeki Studio! Saya sudah mencoba fitur "Simulasi Proyek" di website:\n\n` +
      `📌 Jenis Solusi: ${selectedType.title}\n` +
      `✨ Fitur/Dokumen Pilihan: ${featureLabels || "Standar"}\n` +
      `⏱️ Estimasi Waktu: ${totalMinDays} - ${totalMaxDays} Hari Kerja\n\n` +
      `Bisa bantu diskusikan kebutuhan ini lebih lanjut? Terima kasih!`
  );

  return (
    <div className="w-full rounded-2xl bg-surface-container-lowest border border-surface-dim shadow-xl overflow-hidden">
      {/* Header Banner */}
      <div className="p-5 sm:p-7 md:p-8 bg-gradient-to-r from-primary-fixed/60 via-surface-container-low to-secondary-fixed/50 border-b border-surface-dim flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Tool · Coba Simulasi Langsung</span>
          </div>
          <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight">
            Simulasi Timeline & Ruang Lingkup Proyek
          </h3>
          <p className="text-on-surface-variant text-sm mt-1 max-w-xl leading-relaxed">
            Pilih model solusi digital dan fitur/dokumen yang Anda butuhkan. Sistem akan
            mengkalkulasi estimasi waktu pengerjaan dan susunan arsitektur ideal secara instan.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-surface-container-lowest/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-surface-dim self-start md:self-auto shrink-0 shadow-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-headline font-bold text-on-surface">
            Kalkulator Aktif ⚡
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-7 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Selectors */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Project Type Selection */}
          <div>
            <label className="block text-xs font-headline font-bold uppercase tracking-wider text-on-surface-variant mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-primary text-on-primary text-[11px] flex items-center justify-center font-bold">
                1
              </span>
              Pilih Jenis Solusi Digital:
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROJECT_TYPES.map((type) => {
                const Icon = type.icon;
                const isSelected = selectedType.id === type.id;

                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`relative p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-primary-fixed/25 border-primary shadow-sm ring-2 ring-primary/20"
                        : "bg-surface-container-low hover:bg-surface-container border-surface-dim hover:border-outline-variant"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                          isSelected
                            ? "bg-primary text-on-primary"
                            : "bg-surface-container-high text-on-surface-variant"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-surface-container-highest text-on-surface-variant">
                        {type.badge}
                      </span>
                    </div>

                    <div className="font-headline font-bold text-sm text-on-surface">
                      {type.title}
                    </div>

                    <p className="text-xs text-on-surface-variant mt-1 line-clamp-2 leading-relaxed">
                      {type.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Feature Add-ons Selection */}
          <div>
            <label className="block text-xs font-headline font-bold uppercase tracking-wider text-on-surface-variant mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-primary text-on-primary text-[11px] flex items-center justify-center font-bold">
                2
              </span>
              Pilih Fitur / Dokumen Kebutuhan (Bebas Pilih Lebih dari 1):
            </label>

            <div className="flex flex-wrap gap-2.5">
              {FEATURES.map((feat) => {
                const isChecked = selectedFeatures.includes(feat.id);

                return (
                  <button
                    key={feat.id}
                    type="button"
                    onClick={() => toggleFeature(feat.id)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                      isChecked
                        ? "bg-primary text-on-primary border-primary shadow-xs font-semibold scale-[1.02]"
                        : "bg-surface-container-low hover:bg-surface-container text-on-surface border-surface-dim hover:border-outline-variant"
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] ${
                        isChecked ? "bg-white/25 text-white" : "border border-outline-variant"
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </span>
                    <span>{feat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Live Calculated Estimate Card */}
        <div className="lg:col-span-5">
          <motion.div
            layout
            className="p-6 rounded-2xl bg-gradient-to-b from-surface-container-low to-surface-container-lowest border border-surface-dim shadow-md relative overflow-hidden"
          >
            <div className="flex items-center justify-between pb-4 border-b border-surface-dim">
              <span className="text-xs font-headline font-bold text-on-surface uppercase tracking-wider">
                Ringkasan Simulasi
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                Transparan
              </span>
            </div>

            {/* Estimated Days Display */}
            <div className="my-5 p-4 rounded-xl bg-surface-container-lowest border border-surface-dim flex items-center justify-between">
              <div>
                <div className="text-xs text-on-surface-variant font-medium flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary" />
                  Estimasi Timeline:
                </div>
                <div className="font-headline text-2xl sm:text-3xl font-black text-primary tracking-tight mt-0.5">
                  {totalMinDays} – {totalMaxDays} Hari
                </div>
                <div className="text-[11px] text-on-surface-variant">
                  Hari kerja bertahap (Demo / review berkala)
                </div>
              </div>

              <div className="text-right">
                <span className="inline-block px-2.5 py-1 rounded-lg bg-primary-fixed text-primary text-xs font-bold">
                  Siklus Cepat
                </span>
              </div>
            </div>

            {/* Recommended Stack */}
            <div className="mb-4">
              <div className="text-xs font-headline font-semibold text-on-surface-variant mb-2 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-primary" />
                Rekomendasi Arsitektur Stack:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedType.recommendedStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-surface-container-high text-on-surface text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Guarantees Included */}
            <div className="space-y-2 mb-6 pt-3 border-t border-surface-dim text-xs text-on-surface">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Termasuk Garansi Bebas Bug & Revisi</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary shrink-0" />
                <span>100% Hak Milik Dokumen / Source Code</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span>Diskusi Langsung dengan Senior Engineer</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-2.5">
              <a
                href={`https://wa.me/6281234567890?text=${waMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-headline font-bold text-sm shadow-[0_4px_16px_rgba(16,185,129,0.3)] active:scale-95 transition-all text-center"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Bawa Simulasi ini ke WhatsApp</span>
              </a>

              <Link
                href="/kontak"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container border border-surface-dim text-on-surface font-headline font-semibold text-xs transition-colors"
              >
                <span>Atau Tulis Rincian di Formulir Kontak</span>
                <ArrowRight className="w-4 h-4 text-primary" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
