"use client";

import { FadeInView } from "@/components/ui/FadeInView";
import { TechBadge } from "@/components/ui/TechBadge";
import { services, umlAndDocOptions } from "@/data";
import { IconCheckCircle } from "@/components/ui/Icons";
import {
  PackageCheck,
  Layers,
  Globe,
  LayoutDashboard,
  Smartphone,
  Workflow,
  Sparkles,
  ShieldCheck,
  Zap,
  Bell,
  MapPin,
  Database,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const serviceBadgeLabels: Record<string, string> = {
  "web-landingpage": "Cepat & SEO Friendly",
  "web-dashboard": "Full-Stack & Scalable",
  "mobile-apps": "Offline-First Flutter",
  "project-planner": "SRS, PRD & UML Bebas Pilih",
};

const serviceEstimations: Record<string, string> = {
  "web-landingpage": "1 - 2 Minggu",
  "web-dashboard": "3 - 6 Minggu",
  "mobile-apps": "4 - 8 Minggu",
  "project-planner": "3 - 7 Hari Kerja",
};

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
  primary: {
    text: "text-primary",
    bg: "bg-primary-fixed text-primary",
    border: "border-primary/20",
  },
  secondary: {
    text: "text-secondary",
    bg: "bg-secondary-fixed text-secondary",
    border: "border-secondary/20",
  },
  tertiary: {
    text: "text-tertiary",
    bg: "bg-tertiary-fixed text-tertiary",
    border: "border-tertiary/20",
  },
};

// ── CODE-GENERATED MOCKUP CARDS ──

function WebLandingMockup() {
  return (
    <div className="w-full h-full min-h-[300px] sm:min-h-[340px] rounded-2xl bg-gradient-to-br from-surface-container-lowest to-surface-container-low border border-surface-dim p-4 flex flex-col justify-between shadow-inner select-none font-sans">
      {/* Browser Top Bar */}
      <div className="flex items-center gap-2 pb-3 border-b border-surface-dim text-xs">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex-1 max-w-[200px] mx-auto px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant text-[11px] font-mono truncate text-center flex items-center justify-center gap-1">
          <Globe className="w-3 h-3 text-primary" />
          <span>https://brand-bisnis.com</span>
        </div>
      </div>

      {/* Simulated Web Body */}
      <div className="my-auto py-3 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold border border-primary/20">
          <Zap className="w-3 h-3" />
          <span>Clean Code Architecture · SEO Ready</span>
        </div>

        <div className="space-y-1.5">
          <div className="h-4 w-3/4 rounded-md bg-on-surface/85 font-headline font-bold text-xs text-white px-2 flex items-center">
            Website Bisnis Modern & Terpercaya
          </div>
          <div className="h-2 w-5/6 rounded bg-on-surface-variant/20" />
          <div className="h-2 w-2/3 rounded bg-on-surface-variant/20" />
        </div>

        {/* Feature Grid Mini */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="p-2 rounded-lg bg-surface-container border border-surface-dim text-[11px]">
            <div className="font-bold text-on-surface">SEO Teroptimasi</div>
            <div className="text-[10px] text-on-surface-variant">Siap ranking di Google</div>
          </div>
          <div className="p-2 rounded-lg bg-surface-container border border-surface-dim text-[11px]">
            <div className="font-bold text-on-surface">Order WhatsApp</div>
            <div className="text-[10px] text-on-surface-variant">Klik langsung chat</div>
          </div>
        </div>
      </div>

      {/* Footer Pill */}
      <div className="pt-2 border-t border-surface-dim flex items-center justify-between text-[11px] text-on-surface-variant">
        <span>Desktop & Mobile Responsive</span>
        <span className="font-semibold text-primary">Clean Next.js Code</span>
      </div>
    </div>
  );
}

function WebDashboardMockup() {
  return (
    <div className="w-full h-full min-h-[300px] sm:min-h-[340px] rounded-2xl bg-gradient-to-br from-surface-container-lowest to-surface-container-low border border-surface-dim p-4 flex flex-col justify-between shadow-inner select-none font-sans">
      {/* Dashboard Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-surface-dim text-xs">
        <div className="flex items-center gap-2">
          <LayoutDashboard className="w-4 h-4 text-secondary" />
          <span className="font-headline font-bold text-on-surface text-xs">Portal Operasional & POS</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-secondary-fixed text-secondary font-bold text-[10px]">
          Role: Admin Staf
        </span>
      </div>

      {/* Simulated Metrics */}
      <div className="my-auto py-3 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-xl bg-surface-container border border-surface-dim">
            <div className="text-[10px] text-on-surface-variant flex items-center justify-between">
              <span>Total Omset</span>
              <TrendingUp className="w-3 h-3 text-emerald-600" />
            </div>
            <div className="font-headline font-black text-sm text-on-surface mt-0.5">Rp 48.250.000</div>
          </div>
          <div className="p-2.5 rounded-xl bg-surface-container border border-surface-dim">
            <div className="text-[10px] text-on-surface-variant">Transaksi Harian</div>
            <div className="font-headline font-black text-sm text-secondary mt-0.5">1.428 Order</div>
          </div>
        </div>

        {/* Mini Bar Graph Simulation */}
        <div className="p-2.5 rounded-xl bg-surface-container-low border border-surface-dim">
          <div className="flex items-center justify-between text-[10px] text-on-surface-variant mb-2">
            <span>Grafik Penjualan Real-time</span>
            <span className="text-emerald-600 font-bold">+24% Minggu Ini</span>
          </div>
          <div className="flex items-end gap-1.5 h-12 pt-1">
            <div className="flex-1 bg-secondary/30 rounded-t h-[40%]" />
            <div className="flex-1 bg-secondary/50 rounded-t h-[65%]" />
            <div className="flex-1 bg-secondary/40 rounded-t h-[50%]" />
            <div className="flex-1 bg-secondary/70 rounded-t h-[85%]" />
            <div className="flex-1 bg-secondary rounded-t h-[100%]" />
            <div className="flex-1 bg-secondary/60 rounded-t h-[75%]" />
            <div className="flex-1 bg-secondary/90 rounded-t h-[90%]" />
          </div>
        </div>
      </div>

      {/* Footer Pill */}
      <div className="pt-2 border-t border-surface-dim flex items-center justify-between text-[11px] text-on-surface-variant">
        <span>Export Laporan Excel & PDF</span>
        <span className="font-semibold text-secondary">Multi-User Role</span>
      </div>
    </div>
  );
}

function MobileAppMockup() {
  return (
    <div className="w-full h-full min-h-[300px] sm:min-h-[340px] rounded-2xl bg-gradient-to-br from-surface-container-lowest to-surface-container-low border border-surface-dim p-4 flex flex-col justify-between shadow-inner select-none font-sans">
      {/* Smartphone Notch Bar */}
      <div className="flex items-center justify-between pb-2.5 border-b border-surface-dim text-[11px] text-on-surface-variant">
        <span>09:41</span>
        <div className="w-14 h-3 rounded-full bg-on-surface/15 mx-auto" />
        <span className="flex items-center gap-1 font-mono text-[10px]">
          <span>5G</span>
          <span>100%</span>
        </span>
      </div>

      {/* App Body */}
      <div className="my-auto py-3 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-headline font-bold text-xs text-on-surface">Kasir & Kurir Lapangan</div>
            <div className="text-[10px] text-on-surface-variant">Flutter Cross-Platform</div>
          </div>
          <span className="p-1 rounded-lg bg-tertiary-fixed text-tertiary">
            <Smartphone className="w-4 h-4" />
          </span>
        </div>

        {/* Offline-First Badge */}
        <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <div className="text-[10px] text-emerald-800 font-semibold leading-tight">
            Mode Offline-First Aktif (Tetap lancar input tanpa internet)
          </div>
        </div>

        {/* Feature Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 rounded-lg bg-surface-container border border-surface-dim flex items-center gap-2">
            <Bell className="w-4 h-4 text-tertiary shrink-0" />
            <div className="text-[10px] leading-tight">
              <div className="font-bold text-on-surface">Push Notifikasi</div>
              <div className="text-on-surface-variant">Alert Real-time</div>
            </div>
          </div>
          <div className="p-2 rounded-lg bg-surface-container border border-surface-dim flex items-center gap-2">
            <MapPin className="w-4 h-4 text-tertiary shrink-0" />
            <div className="text-[10px] leading-tight">
              <div className="font-bold text-on-surface">GPS & Kamera</div>
              <div className="text-on-surface-variant">Lokasi & Media</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Pill */}
      <div className="pt-2 border-t border-surface-dim flex items-center justify-between text-[11px] text-on-surface-variant">
        <span>Build APK & IPA Siap Rilis</span>
        <span className="font-semibold text-tertiary">1 Codebase Android & iOS</span>
      </div>
    </div>
  );
}

function ProjectPlannerMockup() {
  return (
    <div className="w-full h-full min-h-[300px] sm:min-h-[340px] rounded-2xl bg-gradient-to-br from-primary/5 via-surface-container-lowest to-surface-container-low border border-primary/25 p-4 flex flex-col justify-between shadow-inner select-none font-sans">
      {/* Blueprint Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-primary/20 text-xs">
        <div className="flex items-center gap-2">
          <Workflow className="w-4 h-4 text-primary" />
          <span className="font-headline font-bold text-primary text-xs">UML & Architecture Studio</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-primary-fixed text-primary font-bold text-[10px]">
          SRS IEEE 830
        </span>
      </div>

      {/* Interactive Diagram Canvas Preview */}
      <div className="my-auto py-2.5 space-y-2.5">
        {/* UML Node Relation Flow */}
        <div className="p-2.5 rounded-xl bg-surface-container-lowest border border-primary/30 space-y-2">
          <div className="flex items-center justify-between text-[10px] text-on-surface-variant">
            <span className="font-mono text-[9px] text-primary font-bold">UML 2.5 DIAGRAM CANVAS</span>
            <span className="text-[9px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-semibold">Editable .drawio</span>
          </div>

          <div className="flex items-center justify-between gap-1 text-[11px]">
            {/* Actor */}
            <div className="px-2.5 py-1.5 rounded-lg bg-primary-fixed text-primary font-bold border border-primary/20 text-center text-[10px]">
              👤 Aktor User
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-primary/60 shrink-0" />
            {/* Use Case */}
            <div className="px-2.5 py-1.5 rounded-full bg-surface-container border border-primary/40 font-semibold text-on-surface text-[10px] text-center">
              (Order & Transaksi)
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-primary/60 shrink-0" />
            {/* Database Entity */}
            <div className="px-2.5 py-1.5 rounded-lg bg-surface-container-high border border-surface-dim text-[10px] text-on-surface flex items-center gap-1 font-mono">
              <Database className="w-3 h-3 text-primary" />
              <span>orders_tbl</span>
            </div>
          </div>
        </div>

        {/* Badges of Deliverables */}
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="p-2 rounded-lg bg-surface-container border border-surface-dim">
            <div className="font-bold text-on-surface">Dokumen PRD & SRS</div>
            <div className="text-on-surface-variant">PDF siap cetak/sidang</div>
          </div>
          <div className="p-2 rounded-lg bg-surface-container border border-surface-dim">
            <div className="font-bold text-on-surface">Skema Relasi ERD</div>
            <div className="text-on-surface-variant">Lengkap PK & FK</div>
          </div>
        </div>
      </div>

      {/* Footer Pill */}
      <div className="pt-2 border-t border-surface-dim flex items-center justify-between text-[11px] text-on-surface-variant">
        <span>Bebas Pilih Jenis Diagram</span>
        <span className="font-semibold text-primary">Rebate Saat Coding</span>
      </div>
    </div>
  );
}

const mockupRenderers: Record<string, () => React.ReactNode> = {
  "web-landingpage": WebLandingMockup,
  "web-dashboard": WebDashboardMockup,
  "mobile-apps": MobileAppMockup,
  "project-planner": ProjectPlannerMockup,
};

export function ServicesPillars() {
  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <FadeInView>
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 border border-primary/20">
            <span>Rincian Kapabilitas & Deliverables</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-extrabold tracking-tight">
            Solusi Nyata Sesuai Skala Kebutuhan Anda
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Dikerjakan langsung oleh software engineer senior. Setiap proyek dirancang dengan kejelasan hasil nyata—mulai dari dokumen blueprint hingga kode siap deploy.
          </p>

          <div className="mt-4 p-3.5 sm:p-4 rounded-xl bg-surface-container-low border border-surface-dim flex items-start gap-3 text-xs text-on-surface-variant max-w-3xl leading-relaxed">
            <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary shrink-0 mt-0.5 font-bold font-mono text-[11px]">
              Transparansi
            </span>
            <div>
              <strong className="text-on-surface font-semibold">Fleksibilitas Deployment & Hand-over:</strong>{" "}
              Semua paket menyediakan opsi dibantu deploy ke server/VPS Anda atau hand-over (serah terima) source code secara utuh. Biaya infrastruktur seperti sewa domain, hosting/cloud VPS, atau akun developer merupakan biaya terpisah di luar jasa pengembangan.
            </div>
          </div>
        </div>
      </FadeInView>

      <div className="space-y-8 sm:space-y-12">
        {services.map((service, index) => {
          const isReversed = index % 2 !== 0;
          const accent = colorMap[service.colorAccent] || colorMap.primary;
          const MockupComponent = mockupRenderers[service.id] || WebLandingMockup;

          return (
            <FadeInView key={service.id} delay={0.1}>
              <div className="rounded-2xl bg-surface-container-lowest border border-surface-dim p-5 sm:p-7 md:p-8 shadow-xs hover:shadow-lg transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                  <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${accent.bg}`}>
                        {`${service.number} // ${service.tag}`}
                      </span>
                      <span className="text-xs text-on-surface-variant font-medium">
                        {serviceBadgeLabels[service.id] || "Solusi Handal"}
                      </span>
                    </div>
                    <h3 className="font-headline text-xl sm:text-2xl text-on-surface font-bold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Manfaat Utama */}
                    <div className="mb-6">
                      <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-3 font-headline flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>Keuntungan Nyata (Benefits):</span>
                      </div>
                      <ul className="space-y-2.5">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2.5 text-sm text-on-surface">
                            <IconCheckCircle size={18} className={`${accent.text} shrink-0 mt-0.5`} />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables Konkret */}
                    {service.deliverables && service.deliverables.length > 0 && (
                      <div className="mb-6 p-4 rounded-xl bg-surface-container-low/70 border border-surface-dim">
                        <div className="text-xs font-semibold text-on-surface uppercase tracking-wider mb-2.5 font-headline flex items-center gap-1.5">
                          <PackageCheck size={16} className={accent.text} />
                          <span>Output Fisik & Digital yang Anda Terima (Deliverables):</span>
                        </div>
                        <ul className="space-y-2">
                          {service.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-on-surface-variant">
                              <span className="text-primary font-bold">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Spesial Showcase Pilihan Diagram UML untuk Project Planner */}
                    {service.id === "project-planner" && (
                      <div className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                        <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5 font-headline">
                          <Layers size={15} />
                          <span>Pilihan Bebas Diagram UML & Dokumen (Bebas Pilih Sesuai Kebutuhan):</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {umlAndDocOptions.map((opt) => (
                            <span
                              key={opt.id}
                              className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-surface-container-lowest border border-primary/30 text-on-surface shadow-2xs"
                              title={opt.description}
                            >
                              {opt.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech, i) => (
                        <TechBadge key={tech} label={tech} variant={i === 0 ? service.colorAccent : "neutral"} />
                      ))}
                    </div>
                  </div>

                  {/* KANAN: CODE-GENERATED VISUAL MOCKUP CARD */}
                  <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : "lg:order-2"} sticky top-24`}>
                    <div className="relative">
                      <MockupComponent />
                      
                      {/* Floating Estimation Badge */}
                      <div className="mt-2.5 p-2.5 rounded-xl bg-surface-container-lowest border border-surface-dim text-xs shadow-xs flex items-center justify-between">
                        <span className={`${accent.text} font-bold text-xs`}>
                          ⏱️ Estimasi: {serviceEstimations[service.id] || "2 - 4 Minggu"}
                        </span>
                        <span className="text-[11px] text-on-surface-variant font-medium">Siklus Pengerjaan</span>
                      </div>
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
