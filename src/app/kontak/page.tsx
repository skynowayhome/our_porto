"use client";

import { useState } from "react";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionBadge } from "@/components/ui/SectionBadge";
import {
  contactCategories,
  budgetOptions,
  faqItems,
  teamProfiles,
} from "@/lib/constants";

export default function KontakPage() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedBudget, setSelectedBudget] = useState(1);

  return (
    <div className="flex flex-col w-full">
      {/* ===== HERO SECTION ===== */}
      <section className="relative max-w-container mx-auto px-5 sm:px-8 pt-12 md:pt-20 pb-12 text-center">
        <FadeInView>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-headline text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">
              Halo! Siap Wujudkan Impian Digital Anda
            </span>
          </div>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface tracking-tight leading-[1.15] mb-6 max-w-3xl mx-auto">
            Konsultasikan Kebutuhan Anda Secara{" "}
            <span className="text-primary">Santai & Menyenangkan</span>
          </h1>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Punya ide baru, kebutuhan sistem bisnis, atau ingin merapikan
            aplikasi yang ada? Ceritakan pada kami. Tanpa jargon rumit, gratis
            konsultasi awal, dan kami balas ramah dalam{" "}
            <strong className="text-on-surface">
              &lt; 12 jam kerja.
            </strong>
          </p>
        </FadeInView>

        <FadeInView delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: "verified", label: "Konsultasi 100% Gratis" },
              { icon: "lock", label: "Privasi & NDA Terjamin" },
              { icon: "schedule", label: "Respon Ramah Cepat (< 12 Jam)" },
            ].map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container-lowest border border-surface-dim text-xs font-medium text-on-surface-variant"
              >
                <span className="material-symbols-outlined text-[16px] text-primary">
                  {badge.icon}
                </span>
                {badge.label}
              </span>
            ))}
          </div>
        </FadeInView>
      </section>

      {/* ===== MAIN CONTENT: FORM + SIDEBAR ===== */}
      <section className="max-w-container mx-auto px-5 sm:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* ===== LEFT: FORM ===== */}
          <div className="lg:col-span-7">
            <FadeInView>
              <div className="rounded-xl bg-surface-container-lowest border border-surface-dim p-6 sm:p-8 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <h2 className="font-headline text-lg text-on-surface font-bold">
                      Form Diskusi & Rencana Proyek
                    </h2>
                  </div>
                  <span className="text-xs text-on-surface-variant font-medium">
                    Proses Cepat 2 Menit
                  </span>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  {/* Name */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-on-surface">
                        Nama Lengkap atau Nama Usaha / Perusahaan
                      </label>
                      <span className="text-xs text-error font-medium">
                        *Wajib diisi
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Contoh: Rian Pratama / Kopi Kawan Studio"
                        className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-surface-dim text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-on-surface-variant/40">
                        person
                      </span>
                    </div>
                  </div>

                  {/* Contact */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-on-surface">
                        WhatsApp atau Email (Pilih yang ternyaman untuk Anda)
                      </label>
                      <span className="text-xs text-on-surface-variant">
                        *Untuk kami kirimi estimasi
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Contoh: 0812-3456-7890 atau email@domain.com"
                        className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-surface-dim text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-on-surface-variant/40">
                        chat
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant mt-1.5">
                      Kami menjamin nomor WhatsApp & Email Anda bebas dari spam
                      atau penawaran liar.
                    </p>
                  </div>

                  {/* Category Selection */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-medium text-on-surface">
                        Apa jenis kebutuhan yang ingin Anda buat?
                      </label>
                      <span className="text-xs text-primary font-medium">
                        Pilih salah satu
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {contactCategories.map((cat, index) => (
                        <button
                          key={cat.label}
                          type="button"
                          onClick={() => setSelectedCategory(index)}
                          className={`flex items-start gap-3 p-4 rounded-lg border text-left transition-all ${
                            selectedCategory === index
                              ? "bg-primary-fixed/30 border-primary/40 ring-2 ring-primary/20"
                              : "bg-surface-container-low border-surface-dim hover:border-primary/30"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                selectedCategory === index
                                  ? "border-primary"
                                  : "border-outline"
                              }`}
                            >
                              {selectedCategory === index && (
                                <div className="w-2 h-2 rounded-full bg-primary" />
                              )}
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <span className="material-symbols-outlined text-[16px] text-primary">
                                {cat.icon}
                              </span>
                              <span className="text-sm font-medium text-on-surface">
                                {cat.label}
                              </span>
                            </div>
                            <span className="text-xs text-on-surface-variant">
                              {cat.description}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selection */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-medium text-on-surface">
                        Estimasi Alokasi Anggaran
                      </label>
                      <span className="text-xs text-on-surface-variant">
                        Bisa disesuaikan bertahap
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {budgetOptions.map((option, index) => (
                        <button
                          key={option.label}
                          type="button"
                          onClick={() => setSelectedBudget(index)}
                          className={`p-3 rounded-lg border text-center transition-all ${
                            selectedBudget === index
                              ? "bg-primary-fixed/30 border-primary/40 ring-2 ring-primary/20"
                              : "bg-surface-container-low border-surface-dim hover:border-primary/30"
                          }`}
                        >
                          <div className="font-headline text-sm font-bold text-on-surface mb-0.5">
                            {option.label}
                          </div>
                          <div className="text-xs text-on-surface-variant">
                            {option.description}
                          </div>
                          <span
                            className={`inline-block mt-2 px-2 py-0.5 rounded-full text-xs font-semibold ${
                              "popular" in option && option.popular
                                ? "bg-primary text-on-primary"
                                : "bg-surface-container-high text-on-surface-variant"
                            }`}
                          >
                            {option.tag}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-on-surface">
                        Ceritakan Kebutuhan Singkat Anda
                      </label>
                      <span className="text-xs text-on-surface-variant">
                        Santai saja, gunakan bahasa sehari-hari
                      </span>
                    </div>
                    <textarea
                      rows={4}
                      placeholder="Ceritakan ide produk, masalah teknis yang ingin diselesaikan, atau target perkiraan waktu selesai. Jika belum punya gambaran detail, sebutkan saja tujuan utamanya..."
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-surface-dim text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    />
                  </div>

                  {/* Optional Link */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-on-surface">
                        Punya Tautan Dokumen / Mockup Figma? (Opsional)
                      </label>
                      <span className="text-xs text-on-surface-variant">
                        Boleh dikosongkan
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        type="url"
                        placeholder="Contoh link Google Drive, Figma, Notion, atau referensi website lain..."
                        className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-surface-dim text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-on-surface-variant/40">
                        link
                      </span>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-primary text-on-primary font-headline font-semibold text-sm tracking-wide shadow-[0_6px_20px_rgba(39,94,149,0.25)] hover:bg-[#1f4e7d] hover:shadow-[0_8px_25px_rgba(39,94,149,0.32)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      send
                    </span>
                    <span>Kirim Pesan & Dapatkan Rencana Solusi Gratis</span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </button>

                  <p className="text-xs text-on-surface-variant text-center flex items-center justify-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-emerald-600">
                      verified_user
                    </span>
                    Tenang, semua informasi proyek Anda aman. Kami siap tandatangani
                    NDA kapan pun dibutuhkan.
                  </p>
                </form>
              </div>
            </FadeInView>
          </div>

          {/* ===== RIGHT: SIDEBAR ===== */}
          <div className="lg:col-span-5 space-y-6">
            {/* Fast Track Panel */}
            <FadeInView delay={0.1} direction="left">
              <div className="rounded-xl bg-surface-container-lowest border border-surface-dim p-6 sm:p-8 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider font-headline">
                    Respon Cepat (Fast Track)
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-600 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Online Hari Ini
                  </span>
                </div>
                <h3 className="font-headline text-lg text-on-surface font-bold mb-3">
                  Mau Ngobrol Langsung Sekarang?
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
                  Lebih suka tanya-tanya santai dulu lewat chat? Klik tombol di
                  bawah untuk terhubung langsung ke WhatsApp tim developer tanpa
                  perantara sales.
                </p>

                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 w-full px-5 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-headline font-semibold text-sm shadow-[0_4px_16px_rgba(16,185,129,0.3)] transition-all mb-4"
                >
                  <span className="material-symbols-outlined text-[24px]">
                    chat
                  </span>
                  <div>
                    <div>Chat WhatsApp Langsung</div>
                    <div className="text-xs text-white/70 font-normal">
                      Biasanya dibalas dalam &lt; 15 menit
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[18px] ml-auto">
                    arrow_forward
                  </span>
                </a>

                <a
                  href="mailto:hello@skyy.dev"
                  className="flex items-center gap-3 w-full px-5 py-3 rounded-lg bg-surface-container-low border border-surface-dim text-on-surface hover:border-primary/40 transition-all text-sm"
                >
                  <span className="material-symbols-outlined text-[20px] text-primary">
                    mail
                  </span>
                  <div>
                    <div className="font-medium">hello@skyy.dev</div>
                    <div className="text-xs text-on-surface-variant">
                      Kirim dokumen brief atau proposal
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant/50 ml-auto">
                    open_in_new
                  </span>
                </a>
              </div>
            </FadeInView>

            {/* Team Info */}
            <FadeInView delay={0.2} direction="left">
              <div className="rounded-xl bg-surface-container-lowest border border-surface-dim p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider font-headline">
                    Arsitektur Teknis Anda
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-600 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Slot Aktif Tersedia
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-5">
                  Kami bekerja secara terfokus dalam tim studio ringkas. Anda akan
                  berdiskusi dan membangun produk langsung bersama para engineer
                  utama:
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low border border-surface-dim">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={teamProfiles.skyy.image}
                      alt="Skyy"
                      className="w-10 h-10 rounded-full object-cover ring-1 ring-primary/30"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-headline text-sm font-bold text-on-surface">
                          Skyy
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-primary text-xs font-semibold">
                          Lead Fullstack
                        </span>
                      </div>
                      <span className="text-xs text-on-surface-variant">
                        Web Apps, Cloud Architecture, Next.js
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low border border-surface-dim">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={teamProfiles.aris.image}
                      alt="Aris"
                      className="w-10 h-10 rounded-full object-cover ring-1 ring-secondary/30"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-headline text-sm font-bold text-on-surface">
                          Partner Engineer
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-secondary text-xs font-semibold">
                          Mobile Lead
                        </span>
                      </div>
                      <span className="text-xs text-on-surface-variant">
                        Flutter, High Performance Engine, API
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>

            {/* Why Comfortable */}
            <FadeInView delay={0.3} direction="left">
              <div className="rounded-xl bg-surface-container-lowest border border-surface-dim p-6 shadow-sm">
                <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider font-headline block mb-4">
                  Kenapa Nyaman Bekerjasama Dengan Kami?
                </span>
                <div className="space-y-4">
                  {[
                    {
                      icon: "record_voice_over",
                      title: "Komunikasi Ramah & Bebas Ribet",
                      description:
                        "Tak perlu paham koding teknis. Ceritakan kebutuhan bisnis Anda, kami yang rancangkan solusinya dengan transparan.",
                    },
                    {
                      icon: "health_and_safety",
                      title: "Garansi Perbaikan & Pendampingan 30 Hari",
                      description:
                        "Setelah rilis, kami tetap dampingi dan pastikan sistem berjalan lancar tanpa ada pungutan biaya tambahan.",
                    },
                    {
                      icon: "verified_user",
                      title: "Kepemilikan Penuh Milik Anda",
                      description:
                        "Source code, database, dan akses akun 100% diserahkan ke Anda tanpa ketergantungan sepihak.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <div className="font-headline text-sm text-on-surface font-bold mb-0.5">
                          {item.title}
                        </div>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="max-w-container mx-auto px-5 sm:px-8 py-16">
        <FadeInView>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionBadge label="Pertanyaan Umum" />
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
              Semua yang Perlu Anda Ketahui Sebelum Memulai
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base mt-2">
              Kami menjunjung tinggi kejelasan sejak awal agar Anda merasa tenang
              dan percaya diri berkolaborasi.
            </p>
          </div>
        </FadeInView>

        <FadeInView delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqItems.map((faq) => (
              <div
                key={faq.number}
                className="rounded-xl bg-surface-container-lowest border border-surface-dim p-6 sm:p-8 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary-fixed text-primary flex items-center justify-center text-xs font-bold">
                    {faq.number}
                  </span>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider font-headline">
                    {faq.category}
                  </span>
                </div>
                <h3 className="font-headline text-base text-on-surface font-bold mb-3">
                  {faq.question}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </FadeInView>
      </section>
    </div>
  );
}
