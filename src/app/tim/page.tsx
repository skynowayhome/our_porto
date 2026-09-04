"use client";

import Link from "next/link";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { TechBadge } from "@/components/ui/TechBadge";
import {
  teamProfiles,
  commitmentValues,
  workProcess,
} from "@/lib/constants";

export default function TimPage() {
  return (
    <div className="flex flex-col w-full">
      {/* ===== HERO SECTION ===== */}
      <section className="relative max-w-container mx-auto px-5 sm:px-8 pt-12 md:pt-20 pb-16 text-center">
        <FadeInView>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-low border border-surface-dim shadow-sm mb-6">
            <span className="material-symbols-outlined text-[16px] text-primary">
              handshake
            </span>
            <span className="font-headline text-xs sm:text-sm font-semibold text-primary">
              Studio Rekayasa Digital • Dua Partner Berpengalaman
            </span>
          </div>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface tracking-tight leading-[1.15] mb-6 max-w-3xl mx-auto">
            Kenali Rekan Teknologi Anda:{" "}
            <span className="text-primary">
              Langsung Dikerjakan Pembuatnya,
            </span>{" "}
            Bukan Dilempar Tim Lepas
          </h1>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Kami bukan agensi besar dengan birokrasi rumit dan perantara sales.
            Bersama <strong>Skyy</strong> dan <strong>Aris</strong>, setiap ide
            aplikasi dan sistem bisnis Anda dikerjakan dengan teliti, transparan,
            dan penuh dedikasi seperti merawat produk sendiri.
          </p>
        </FadeInView>

        {/* Value Pills */}
        <FadeInView delay={0.3}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              { icon: "record_voice_over", label: "100% Langsung", desc: "Bicara tanpa jeda" },
              { icon: "verified_user", label: "Hak Cipta Penuh", desc: "Semua kode 100% milik Anda" },
              { icon: "speed", label: "Respon Cepat", desc: "Diskusi bebas basa bersama" },
              { icon: "health_and_safety", label: "Garansi Pendampingan", desc: "Diteman hingga benar-benar lancar jaya" },
            ].map((pill) => (
              <div
                key={pill.label}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-surface-container-lowest border border-surface-dim hover:border-primary/40 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">
                    {pill.icon}
                  </span>
                </div>
                <div className="font-headline text-sm text-on-surface font-semibold">
                  {pill.label}
                </div>
                <div className="text-xs text-on-surface-variant text-center">
                  {pill.desc}
                </div>
              </div>
            ))}
          </div>
        </FadeInView>
      </section>

      {/* ===== DUO PROFILE DEEP DIVE ===== */}
      <section className="max-w-container mx-auto px-5 sm:px-8 py-16">
        <FadeInView>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionBadge label="Duo Founder & Lead Engineers" />
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
              Dua Insinyur di Balik Layar Produk Anda
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base mt-2">
              Kombinasi lengkap antara sistem cloud & website yang stabil dengan
              aplikasi mobile berkekuatan tinggi yang ramah digunakan pengguna
              Anda.
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.values(teamProfiles).map((profile, index) => (
            <FadeInView key={profile.name} delay={index * 0.15}>
              <div
                className={`relative rounded-xl bg-surface-container-lowest border border-surface-dim p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group overflow-hidden h-full`}
              >
                <div
                  className={`absolute top-0 right-0 w-44 h-44 ${profile.colorAccent === "primary" ? "bg-primary-fixed/20 group-hover:bg-primary-fixed/40" : "bg-secondary-fixed/25 group-hover:bg-secondary-fixed/45"} rounded-full blur-2xl pointer-events-none transition-all`}
                />

                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
                  <div
                    className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden ring-2 ${profile.colorAccent === "primary" ? "ring-primary/20" : "ring-secondary/20"} shrink-0 shadow-sm`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={`${profile.name} Portrait`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={profile.image}
                    />
                    <div className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-surface-container-lowest" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-headline text-2xl text-on-surface font-bold">
                        {profile.name}
                      </h3>
                      <span
                        className={`px-2.5 py-0.5 rounded-full ${profile.colorAccent === "primary" ? "bg-primary-fixed text-primary" : "bg-secondary-fixed text-secondary"} text-xs font-semibold`}
                      >
                        {profile.badge}
                      </span>
                    </div>
                    <p className={`text-sm ${profile.colorAccent === "primary" ? "text-primary" : "text-secondary"} font-medium mb-1`}>
                      {profile.specialization}
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      {profile.bio}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-surface-container-low border border-surface-dim p-4 rounded-lg mb-6">
                  <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2 font-headline">
                    Fokus & Peran Untuk Bisnis Anda
                  </div>
                  <p className="text-sm text-on-surface leading-relaxed italic">
                    {profile.quote}
                  </p>
                </div>

                {/* Skills Detailed */}
                <div className="mb-6">
                  <span className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2.5 font-headline">
                    Solusi yang Diunggulkan:
                  </span>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {profile.detailedSkills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border ${profile.colorAccent === "primary" ? "bg-primary-fixed/30 text-primary border-primary/20" : "bg-secondary-fixed/30 text-secondary border-secondary/20"}`}
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          check
                        </span>
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {profile.detailedSkills.slice(3).map((skill) => (
                      <TechBadge key={skill} label={skill} variant={profile.colorAccent} />
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-auto pt-4 border-t border-surface-dim flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <a
                      className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-colors"
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        code
                      </span>
                    </a>
                    <a
                      className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-colors"
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        badge
                      </span>
                    </a>
                  </div>
                  <Link
                    href="/kontak"
                    className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-colors ${profile.colorAccent === "primary" ? "bg-primary-fixed text-primary border-primary/20 hover:bg-primary hover:text-on-primary" : "bg-secondary-fixed text-secondary border-secondary/20 hover:bg-secondary hover:text-on-secondary"}`}
                  >
                    Hubungi {profile.name}
                  </Link>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        {/* Synergy Tag */}
        <FadeInView delay={0.3}>
          <div className="mt-8 rounded-xl bg-surface-container-low border border-surface-dim p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[22px] text-primary">
                group
              </span>
              <div>
                <div className="font-headline text-sm text-on-surface font-bold">
                  Sinergi Sempurna: Satu Tim untuk Semua Kebutuhan
                </div>
                <div className="text-xs text-on-surface-variant">
                  Website dan aset HP Anda langsung teknologi harmonis tanpa perlu menyewa dua vendor terpisah.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-primary-fixed text-primary text-xs font-semibold">
                Terstandardisasi Otomatis
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary-fixed text-secondary text-xs font-semibold">
                Kompatibel 100%
              </span>
            </div>
          </div>
        </FadeInView>
      </section>

      {/* ===== SECTION: COMMITMENT VALUES ===== */}
      <section className="max-w-container mx-auto px-5 sm:px-8 py-16">
        <FadeInView>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionBadge label="Pengalaman Kerja Sama yang Menyenangkan" variant="secondary" />
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
              Kenapa Klien Merasa Nyaman & Bebas Khawatir Bersama Kami?
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base mt-2">
              Banyak orang ragu membuat aplikasi karena takut teknis yang rumit,
              biaya tersembunyi, atau ditinggal setelah selesai. Bersama kami,
              Anda mendapatkan rasa aman setiap langkahnya.
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {commitmentValues.map((value, index) => (
            <FadeInView key={value.title} delay={index * 0.1}>
              <div className="rounded-xl bg-surface-container-lowest border border-surface-dim p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[26px]">
                      {value.icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1 font-headline">
                      {index + 1}. {value.title.split("(")[0].trim()}
                    </div>
                    <h3 className="font-headline text-lg text-on-surface font-bold">
                      {value.title}
                    </h3>
                  </div>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                  {value.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-primary font-medium">
                  <span className="material-symbols-outlined text-[16px]">
                    check_circle
                  </span>
                  <span>{value.cta}</span>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </section>

      {/* ===== SECTION: WORK PROCESS ===== */}
      <section className="max-w-container mx-auto px-5 sm:px-8 py-16">
        <FadeInView>
          <div className="mb-12">
            <SectionBadge label="Langkah Kerja Praktis" />
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
              Alur Kerja Bersama Kami: 4 Tahap Sederhana
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base mt-2 max-w-xl">
              Proses terarah agar Anda tahu persis apa yang sedang dikerjakan dan
              kapan produk Anda siap digunakan.
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workProcess.map((step, index) => (
            <FadeInView key={step.step} delay={index * 0.1}>
              <div className="rounded-xl bg-surface-container-lowest border border-surface-dim p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">
                      {step.icon}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-semibold">
                    {step.duration}
                  </span>
                </div>
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1.5 font-headline">
                  {step.step}
                </div>
                <h3 className="font-headline text-base text-on-surface font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4 flex-1">
                  {step.description}
                </p>
                <div className="pt-3 border-t border-surface-dim flex items-center gap-1.5 text-xs text-primary font-medium">
                  <span className="material-symbols-outlined text-[14px]">
                    check
                  </span>
                  <span>{step.cta}</span>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="max-w-container mx-auto px-5 sm:px-8 py-16">
        <FadeInView>
          <div className="rounded-2xl bg-gradient-to-br from-primary via-[#1f4e7d] to-[#153a5e] p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]" />
            <div className="relative z-10">
              <SectionBadge label="Konsultasi Awal, Santai & Ramah" variant="neutral" />
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight mb-4">
                Punya Rencana Aplikasi atau Website? Mari Mengobrol Dulu Tanpa
                Beban
              </h2>
              <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                Ceritakan ide sistem Anda langsung ke{" "}
                <strong>Skyy</strong> & <strong>Aris</strong>. Kami bantu berikan
                masukan arsitektur teknis yang efisien dan hemat biaya untuk
                Anda.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-white text-primary font-headline font-semibold text-sm shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                >
                  <span>Jadwalkan Obrolan Singkat</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  href="/portofolio"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/15 hover:bg-white/25 text-white font-headline font-semibold text-sm border border-white/20 transition-all duration-200"
                >
                  <span>Lihat Karya Sebelumnya</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-white/60 text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">
                    gavel
                  </span>
                  Tanpa Tekanan Kontrak
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">
                    lock
                  </span>
                  Kerahasiaan Ide Terjamin (NDA)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">
                    monetization_on
                  </span>
                  Estimasi Terstruktur & Bujet
                </span>
              </div>
            </div>
          </div>
        </FadeInView>
      </section>
    </div>
  );
}
