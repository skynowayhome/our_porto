"use client";

import Link from "next/link";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { TechBadge } from "@/components/ui/TechBadge";
import { services, pricingModels } from "@/lib/constants";
import {
  IconArrowDown,
  IconArrowRight,
  IconCheckCircle,
  IconShield,
  IconVerified,
  IconHealthSafety,
  IconPlayCircle,
  IconQuote,
  IconRocket,
} from "@/components/ui/Icons";

// Hoisted static arrays to follow Vercel React Best Practices (rendering-hoist-jsx / server-hoist-static-io)
const serviceImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDFlpK8Gch6x1oKRaOMsf__hHMKqVBTelHNFXiVnsNr_S1wecPeJqbcTTnRsxiPijmVCV5IuHWecseXIGE9Sp73QEc1bavP3fzYHd7LoauofjoqEkuEbfm1I5ULTWzHcGed-QrZa7qmOtCO9aY7tvmoKKqUarz5xSwZBh1b6KBhkV6aLyGtmMezXj2v96zE5b2n1cjdRKp-K7tHL6IUGsmdrfusEj8coRK8mPynRg3_DfkdJZWxJOGq",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC8pUwkKxF3g_--e35VghOwxYUsJmavGBzDd1mFSg0s4P11wk6w2sKqd9RmL8vUTbmx_C4t_MxnUEMOvY_OQvRrlGBWSTvFceJY5VEVPygfMJNSAzMlQocxxTWSgn8LiuKefh4pkCOt2pw1n65QF235JfztpwY4KcIpJ0Tn1yP4Bdiik59Nm_KeVlnKPGK0P02Z8OU17exfGoORJ0V0_8LaX7mAn1yIMq4gK-lw3DFqcaEGV-aYzHAH",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
];

const guarantees = [
  {
    title: "100% Hak Milik Kode Anda",
    description:
      "Tidak ada jebakan lisensi, backup tersembunyi, atau vendor lock-in. Kode, database, arsitektur server dan seluruh rahasia dapur (source code) diserahkan utuh saat serah terima akhir.",
    IconComponent: IconShield,
  },
  {
    title: "Garansi Perbaikan 30 Hari",
    description:
      "Setelah sistem siap tayang, jika ada kendala atau bug operasional, cukup hubungi kami langsung dan perbaikan tuntas tanpa biaya tambahan sepeser pun.",
    IconComponent: IconHealthSafety,
  },
  {
    title: "Video Panduan Praktis",
    description:
      "Kami siapkan dokumentasi video singkat (microlearning) khusus staf Anda, agar tim internal langsung percaya diri mengoperasikan dan mengelola aplikasi secara mandiri.",
    IconComponent: IconPlayCircle,
  },
];

export default function LayananPage() {
  return (
    <div className="flex flex-col w-full">
      {/* ===== HERO SECTION ===== */}
      <section className="relative max-w-container mx-auto px-4 sm:px-6 md:px-8 pt-10 sm:pt-14 md:pt-20 pb-12 sm:pb-16">
        <FadeInView>
          <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6 text-xs font-semibold text-on-surface-variant uppercase tracking-wider font-headline">
            <span className="text-primary">Kapabilitas</span>
            <span className="text-surface-dim">·</span>
            <span>Teknologi</span>
            <span className="text-surface-dim">·</span>
            <span>Garansi 30 Hari</span>
            <span className="text-surface-dim">·</span>
            <span>Model Fleksibel</span>
            <span className="text-surface-dim">·</span>
            <span>Kode Bersih</span>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <FadeInView delay={0.1}>
              <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface tracking-tight leading-[1.15] mb-5 sm:mb-6">
                Ubah Ide & Bisnis Anda Menjadi Aplikasi{" "}
                <span className="text-primary underline decoration-secondary-container decoration-4 underline-offset-4">
                  Tangguh, Cepat, & Elegan.
                </span>
              </h1>
            </FadeInView>
            <FadeInView delay={0.2}>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                Tidak ada bahasa teknis yang membingungkan. Kami merancang
                website bisnis, aplikasi smartphone, dan infrastruktur sistem
                yang tangguh mendatangkan hasil nyata: cepat dibuka, bebas
                macet, dan siap mendorong penjualan bisnis Anda.
              </p>
            </FadeInView>
            <FadeInView delay={0.3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8 w-full sm:w-auto">
                <Link
                  href="#paket-kerja"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-primary text-on-primary font-headline font-semibold text-sm shadow-[0_4px_16px_rgba(39,94,149,0.25)] hover:bg-[#1f4e7d] active:scale-95 transition-all"
                >
                  <span>Pilih Paket Kerja</span>
                  <IconArrowDown size={18} />
                </Link>
                <Link
                  href="/tim"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-surface-container-lowest border border-surface-dim text-on-surface font-headline font-medium text-sm hover:border-primary/40 transition-all"
                >
                  <span>Perajin & Sosok Kami</span>
                </Link>
              </div>
            </FadeInView>
          </div>

          <div className="lg:col-span-5 w-full">
            <FadeInView delay={0.25} direction="left" scale={true}>
              <div className="rounded-xl bg-surface-container-lowest border border-surface-dim p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-primary text-xs font-semibold">
                    Standar Mutu Rekayasa
                  </span>
                  <span className="text-xs text-on-surface-variant">Benchmark Teknis</span>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                  <div className="text-center p-3.5 sm:p-4 rounded-lg bg-surface-container-low border border-surface-dim">
                    <div className="font-headline text-2xl sm:text-3xl font-bold text-primary">
                      99.9%
                    </div>
                    <div className="text-xs text-on-surface-variant mt-1">
                      Jaminan Server Stabil
                    </div>
                  </div>
                  <div className="text-center p-3.5 sm:p-4 rounded-lg bg-surface-container-low border border-surface-dim">
                    <div className="font-headline text-2xl sm:text-3xl font-bold text-primary">
                      &lt;1 Detik
                    </div>
                    <div className="text-xs text-on-surface-variant mt-1">
                      Muncul Muat di Layar
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-on-surface-variant bg-surface-container-low/70 p-2.5 rounded-lg border border-surface-dim">
                  <IconVerified size={16} className="text-emerald-600 shrink-0" />
                  <span>
                    100% Hak Milik Klien • Tanpa Biaya Tersembunyi!
                  </span>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* ===== SECTION: 4 PILAR LAYANAN DETAIL ===== */}
      <section className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <FadeInView>
          <div className="mb-10 sm:mb-12">
            <SectionBadge label="Pilar Layanan Utama" />
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
              Solusi Nyata Sesuai Skala Bisnis Anda
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base mt-2 max-w-xl">
              Dikerjakan langsung oleh 2 software engineer senior tanpa perantara dan tanpa alih daya ke pihak ketiga.
            </p>
          </div>
        </FadeInView>

        <div className="space-y-8 sm:space-y-12">
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0;
            const currentImage = serviceImages[index] || serviceImages[0];

            return (
              <FadeInView key={service.id} delay={0.1}>
                <div className="rounded-xl bg-surface-container-lowest border border-surface-dim p-5 sm:p-7 md:p-8 shadow-sm hover:shadow-md transition-all">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                    <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${service.colorAccent === "primary" ? "bg-primary-fixed text-primary" : service.colorAccent === "secondary" ? "bg-secondary-fixed text-secondary" : "bg-tertiary-fixed text-tertiary"}`}>
                          {`${service.number} // ${service.tag}`}
                        </span>
                        <span className="text-xs text-on-surface-variant font-medium">
                          {service.colorAccent === "secondary" ? "Bisa Tanpa Internet" : service.colorAccent === "tertiary" ? "Tinggi Akurasi" : "Super Cepat & Stabil"}
                        </span>
                      </div>
                      <h3 className="font-headline text-xl sm:text-2xl text-on-surface font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="mb-6">
                        <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-3 font-headline">
                          Manfaat Utama yang Anda Terima Langsung:
                        </div>
                        <ul className="space-y-2.5">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-2.5 text-sm text-on-surface">
                              <IconCheckCircle size={18} className={`text-${service.colorAccent} shrink-0 mt-0.5`} />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {service.techStack.map((tech, i) => (
                          <TechBadge key={tech} label={tech} variant={i === 0 ? service.colorAccent : "neutral"} />
                        ))}
                      </div>
                    </div>

                    <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="rounded-xl overflow-hidden bg-surface-container-high border border-surface-dim shadow-inner relative group">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          className="w-full h-60 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                          src={currentImage}
                          alt={service.title}
                          loading="lazy"
                        />
                        <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-surface-container-lowest/90 backdrop-blur-md border border-surface-dim text-xs shadow-sm flex items-center justify-between">
                          <span className={`text-${service.colorAccent} font-semibold`}>
                            {service.colorAccent === "secondary" ? "3 - 4 Minggu" : service.colorAccent === "tertiary" ? "1 - 3 Minggu" : "2 - 4 Minggu"}
                          </span>
                          <span className="text-on-surface-variant">Estimasi pengerjaan</span>
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

      {/* ===== SECTION: PRICING MODELS ===== */}
      <section id="paket-kerja" className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 scroll-mt-24">
        <FadeInView>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <SectionBadge label="Transparansi Kontrak & Ketentuan" />
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
              Pilih Model Kerjasama Sesuai Kebutuhan
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base mt-2">
              Fleksibel, jelas, dan tanpa kontrak tersembunyi. Anda tahu persis
              apa yang akan Anda terima sejak hari pertama.
            </p>
          </div>
        </FadeInView>

        <FadeInView delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingModels.map((model) => (
              <div
                key={model.tag}
                className={`relative rounded-xl p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  model.highlight
                    ? "bg-surface-container-lowest border-2 border-primary shadow-[0_8px_32px_rgba(39,94,149,0.15)]"
                    : "bg-surface-container-lowest border border-surface-dim shadow-sm hover:shadow-md"
                }`}
              >
                {model.highlight ? (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-on-primary text-xs font-semibold shadow-sm whitespace-nowrap">
                    {model.highlightLabel}
                  </div>
                ) : null}

                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-semibold mb-4">
                    {model.tag}
                  </span>
                  <h3 className="font-headline text-lg sm:text-xl text-on-surface font-bold mb-2">
                    {model.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    {model.description}
                  </p>
                  <div className="mb-6">
                    <span className="font-headline text-2xl sm:text-3xl text-on-surface font-bold">
                      {model.price}
                    </span>
                    <span className="text-sm text-on-surface-variant ml-1">
                      {model.unit}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {model.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-on-surface"
                      >
                        <IconCheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/kontak"
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-headline font-semibold text-sm transition-all duration-200 ${
                    model.ctaStyle === "primary"
                      ? "bg-primary text-on-primary shadow-[0_4px_16px_rgba(39,94,149,0.25)] hover:bg-[#1f4e7d] active:scale-95"
                      : "bg-surface-container-lowest border border-surface-dim text-on-surface hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  <span>{model.cta}</span>
                  <IconArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </FadeInView>
      </section>

      {/* ===== SECTION: SLA & GARANSI ===== */}
      <section className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <FadeInView>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <SectionBadge label="Jaminan Kualitas Zeki Studio" />
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
              Ketenangan Pikiran Anda Adalah Prioritas Kami
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base mt-2">
              Kami berkomitmen membangun kerjasama jangka panjang dengan
              perjanjian hukum dan etika kerja yang adil.
            </p>
          </div>
        </FadeInView>

        <FadeInView delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-12">
            {guarantees.map((guarantee) => {
              const Icon = guarantee.IconComponent;
              return (
                <div
                  key={guarantee.title}
                  className="rounded-xl bg-surface-container-lowest border border-surface-dim p-5 sm:p-7 md:p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-fixed text-primary flex items-center justify-center mb-4">
                    <Icon size={26} />
                  </div>
                  <h3 className="font-headline text-base sm:text-lg text-on-surface font-bold mb-2">
                    {guarantee.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {guarantee.description}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeInView>

        {/* Quote */}
        <FadeInView delay={0.2} scale={true}>
          <div className="rounded-xl bg-surface-container-low border border-surface-dim p-5 sm:p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-5 shadow-sm">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                <IconQuote size={20} />
              </div>
              <div>
                <div className="font-headline text-sm text-on-surface font-bold">
                  Prinsip Kami, Zeki Studio
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-emerald-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  konsisten dipraktikkan
                </span>
              </div>
            </div>
            <p className="text-sm text-on-surface leading-relaxed italic flex-1">
              &ldquo;Kami tidak pernah melempar proyek Anda ke pihak ketiga. Setiap baris kode ditulis dan dipantau kualitasnya langsung oleh kami.&rdquo;
            </p>
            <Link
              href="/tim"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-fixed text-primary text-xs font-semibold border border-primary/20 hover:bg-primary hover:text-on-primary transition-colors shrink-0 self-start md:self-auto"
            >
              <span>Cerita Lebih Tentangnya</span>
              <IconArrowRight size={14} />
            </Link>
          </div>
        </FadeInView>
      </section>

      {/* ===== SECTION: BOTTOM CTA ===== */}
      <section className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <FadeInView scale={true}>
          <div className="rounded-2xl bg-gradient-to-br from-primary via-[#1f4e7d] to-[#153a5e] p-6 sm:p-10 md:p-14 lg:p-16 text-white relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />
            <div className="max-w-2xl relative z-10">
              <SectionBadge label="Konsultasi Awal Tanpa Sales Pitch" variant="secondary" />
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight mb-4">
                Siap Mewujudkan Aplikasi Impian Bisnis Anda?
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
                Ceritakan ide atau kendala sistem existing Anda kepada kami. Kami
                akan berikan rekomendasi solusi teknologi paling hemat, cepat,
                dan masuk akal untuk bisnis Anda.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-white text-primary font-headline font-semibold text-sm shadow-[0_6px_20px_rgba(39,94,149,0.25)] hover:bg-surface-container-lowest active:scale-95 transition-all"
                >
                  <IconRocket size={18} />
                  <span>Mulai Diskusi Sekarang</span>
                </Link>
                <Link
                  href="/portofolio"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/15 hover:bg-white/25 text-white border border-white/20 font-headline font-medium text-sm transition-all"
                >
                  <span>Lihat Portofolio Kami</span>
                  <IconArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </FadeInView>
      </section>
    </div>
  );
}
