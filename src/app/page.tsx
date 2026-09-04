"use client";

import Link from "next/link";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { TechBadge } from "@/components/ui/TechBadge";
import {
  teamProfiles,
  services,
  caseStudies,
  techStacks,
} from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* ===== HERO SECTION ===== */}
      <section className="relative max-w-container mx-auto px-5 sm:px-8 pt-16 md:pt-24 pb-20 flex flex-col items-center text-center">
        <FadeInView>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-low border border-surface-dim shadow-sm mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary-fixed text-primary font-bold text-xs">
              ✨
            </span>
            <span className="font-headline text-xs sm:text-sm font-semibold text-primary">
              Studio Partner Pembuatan Web & Aplikasi Terpercaya
            </span>
          </div>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl font-bold text-on-surface max-w-4xl tracking-tight leading-[1.18] mb-6">
            Bikin Website & Aplikasi Bisnis Jadi{" "}
            <span className="text-primary underline decoration-secondary-container decoration-4 underline-offset-4">
              Cepat, Menawan,
            </span>{" "}
            dan Siap Dipakai Jualan.
          </h1>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="font-body text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed font-normal">
            Ubah ide atau operasional bisnis Anda menjadi sistem digital yang
            rapi, anti-lemot, dan gampang digunakan oleh tim maupun pelanggan
            Anda. Dikerjakan langsung oleh tim ahli berpengalaman.
          </p>
        </FadeInView>

        <FadeInView delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-14">
            <Link
              href="/kontak"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-primary text-on-primary font-headline font-semibold text-sm tracking-wide shadow-[0_6px_20px_rgba(39,94,149,0.25)] hover:bg-[#1f4e7d] hover:shadow-[0_8px_25px_rgba(39,94,149,0.32)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[20px]">
                rocket_launch
              </span>
              <span>Mulai Konsultasi Proyek</span>
            </Link>
            <Link
              href="/portofolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-headline font-semibold text-sm border border-surface-dim shadow-sm hover:border-outline transition-all duration-200"
            >
              <span>Lihat Contoh Hasil Kerja</span>
              <span className="material-symbols-outlined text-[18px] text-primary">
                arrow_downward
              </span>
            </Link>
          </div>
        </FadeInView>

        <FadeInView delay={0.4}>
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-3.5 p-2.5 rounded-xl bg-surface-container-low/90 border border-surface-dim shadow-md">
            {[
              {
                icon: "speed",
                title: "Super Cepat & Stabil",
                desc: "Aplikasi ringan dibuka & anti-down",
                bg: "bg-primary-fixed",
                color: "text-primary",
              },
              {
                icon: "verified_user",
                title: "100% Hak Milik Anda",
                desc: "Tanpa biaya langganan rahasia",
                bg: "bg-secondary-fixed",
                color: "text-secondary",
              },
              {
                icon: "support_agent",
                title: "Langsung ke Developer",
                desc: "Diskusi lancar tanpa perantara ribet",
                bg: "bg-tertiary-fixed",
                color: "text-tertiary",
              },
            ].map((metric) => (
              <div
                key={metric.title}
                className="flex items-center gap-4 p-4 rounded-lg bg-surface-container-lowest border border-surface-dim hover:border-primary/40 transition-all"
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-lg ${metric.bg} ${metric.color}`}
                >
                  <span className="material-symbols-outlined text-[26px]">
                    {metric.icon}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-headline text-lg text-on-surface font-bold tracking-tight">
                    {metric.title}
                  </div>
                  <div className="text-xs text-on-surface-variant font-medium">
                    {metric.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInView>
      </section>

      {/* ===== SECTION 2: TIM REKAYASA ===== */}
      <section className="max-w-container mx-auto px-5 sm:px-8 py-16">
        <FadeInView>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <SectionBadge label="Kenalan dengan Tim Eksekutor" variant="secondary" />
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
                Dua Insinyur di Balik Setiap Baris Kode Anda
              </h2>
              <p className="text-on-surface-variant text-sm sm:text-base mt-2 max-w-xl">
                Kami bekerja kompak, teliti, dan mengutamakan kualitas aplikasi
                terbaik untuk kesuksesan bisnis Anda.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-on-surface-variant bg-surface-container-low border border-surface-dim px-4 py-2 rounded-lg self-start md:self-auto shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="font-label">
                Siap Eksekusi Sesuai Target Timeline
              </span>
            </div>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.values(teamProfiles).map((profile, index) => (
            <FadeInView key={profile.name} delay={index * 0.15}>
              <div
                className={`relative rounded-xl bg-surface-container-lowest border border-surface-dim p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-${profile.colorAccent}/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden h-full`}
              >
                <div
                  className={`absolute top-0 right-0 w-44 h-44 bg-${profile.colorAccent}-fixed/20 rounded-full blur-2xl pointer-events-none group-hover:bg-${profile.colorAccent}-fixed/40 transition-all`}
                />
                <div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
                    <div
                      className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden ring-2 ring-${profile.colorAccent}/20 shrink-0 shadow-sm`}
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
                          className={`px-2.5 py-0.5 rounded-full bg-${profile.colorAccent}-fixed text-${profile.colorAccent} text-xs font-semibold`}
                        >
                          {profile.badge}
                        </span>
                      </div>
                      <p
                        className={`text-sm text-${profile.colorAccent} font-medium mb-1`}
                      >
                        {profile.specialization}
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        {profile.bio}
                      </p>
                    </div>
                  </div>

                  <div className="bg-surface-container-low border border-surface-dim p-4 rounded-lg mb-6">
                    <p className="text-sm text-on-surface leading-relaxed italic">
                      {profile.quote}
                    </p>
                  </div>

                  <div className="mb-6">
                    <span className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2.5 font-headline">
                      Keahlian & Teknologi:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((skill) => (
                        <TechBadge
                          key={skill.label}
                          label={skill.label}
                          variant={skill.variant}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-surface-dim flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium">
                    <span
                      className={`material-symbols-outlined text-[18px] text-${profile.colorAccent}`}
                    >
                      {profile.focusIcon}
                    </span>
                    <span>{profile.focus}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-colors"
                      href="https://github.com"
                      rel="noreferrer"
                      target="_blank"
                      title="GitHub"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        code
                      </span>
                    </a>
                    <Link
                      className={`px-3 py-1.5 rounded-lg bg-${profile.colorAccent}-fixed text-${profile.colorAccent} hover:bg-${profile.colorAccent} hover:text-on-${profile.colorAccent} text-xs font-semibold border border-${profile.colorAccent}/20 transition-colors`}
                      href="/kontak"
                    >
                      Hubungi {profile.name}
                    </Link>
                  </div>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </section>

      {/* ===== SECTION 3: LAYANAN JASA ===== */}
      <section className="max-w-container mx-auto px-5 sm:px-8 py-16">
        <FadeInView>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionBadge label="Solusi Lengkap & Bergaransi" />
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
              Layanan Jasa yang Bisa Kami Bantu
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base mt-2">
              Dapatkan produk digital dengan desain memanjakan mata, mudah
              dipakai staf Anda, dan performa tinggi tanpa kendala teknis
              berbelit.
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const iconBgMap: Record<string, string> = {
              primary: "bg-primary-fixed text-primary",
              secondary: "bg-secondary-fixed text-secondary",
              tertiary: "bg-tertiary-fixed text-tertiary",
            };
            return (
              <FadeInView key={service.id} delay={index * 0.1}>
                <div
                  className={`rounded-xl bg-surface-container-lowest border border-surface-dim hover:border-${service.colorAccent}/50 p-7 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 h-full`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-14 h-14 rounded-lg ${iconBgMap[service.colorAccent]} flex items-center justify-center group-hover:scale-105 transition-transform`}
                      >
                        <span className="material-symbols-outlined text-[30px]">
                          {service.icon}
                        </span>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-md bg-surface-container text-${service.colorAccent} font-headline text-xs font-semibold border border-surface-dim`}
                      >
                        {service.number} // {service.tag}
                      </span>
                    </div>
                    <h3 className="font-headline text-xl sm:text-2xl text-on-surface font-bold mb-2.5">
                      {service.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2.5 text-sm text-on-surface"
                        >
                          <span
                            className={`material-symbols-outlined text-[18px] text-${service.colorAccent} shrink-0 mt-0.5`}
                          >
                            check_circle
                          </span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    className={`inline-flex items-center gap-2 text-${service.colorAccent} font-headline font-semibold text-sm group-hover:underline transition-all`}
                    href="/kontak"
                  >
                    <span>{service.cta}</span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </section>

      {/* ===== SECTION 4: PORTOFOLIO ===== */}
      <section className="max-w-container mx-auto px-5 sm:px-8 py-16">
        <FadeInView>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <SectionBadge label="Bukti Kerja Nyata" />
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
                Karya Pilihan & Studi Kasus Nyata
              </h2>
              <p className="text-on-surface-variant text-sm sm:text-base mt-2 max-w-xl">
                Lihat bagaimana kami mentransformasi kebutuhan operasional
                menjadi aplikasi yang siap pakai dan teruji.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-primary bg-surface-container-high border border-surface-dim px-4 py-2 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>3 Studi Kasus Unggulan</span>
            </div>
          </div>
        </FadeInView>

        <div className="space-y-10">
          {caseStudies.map((cs, index) => (
            <FadeInView key={cs.id} delay={index * 0.1}>
              <div className="rounded-xl bg-surface-container-lowest border border-surface-dim p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Text Column */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-between ${cs.layout === "image-left" ? "order-2" : ""}`}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {cs.highlights.map((h) => (
                          <div
                            key={h.title}
                            className="p-3.5 rounded-lg bg-surface-container-low border border-surface-dim"
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
                    <div className="flex items-center justify-between pt-4 border-t border-surface-dim">
                      <div className="flex items-center gap-2.5">
                        {cs.leadImage ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            alt={cs.lead}
                            className="w-7 h-7 rounded-full object-cover ring-1 ring-primary"
                            src={cs.leadImage}
                          />
                        ) : (
                          <span className="material-symbols-outlined text-[20px] text-primary">
                            alt_route
                          </span>
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
                    className={`lg:col-span-6 ${cs.layout === "image-left" ? "order-1" : ""}`}
                  >
                    <div className="rounded-xl overflow-hidden bg-surface-container-high border border-surface-dim shadow-inner relative group">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="w-full h-72 sm:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-700"
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
                  </div>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </section>

      {/* ===== SECTION 5: TECH STACKS ===== */}
      <section className="max-w-container mx-auto px-5 sm:px-8 py-16">
        <FadeInView>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionBadge label="Fondasi Teknologi Kuat" variant="neutral" />
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
              Teknologi Modern yang Dipakai Perusahaan Kelas Dunia
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base mt-2">
              Kami hanya menggunakan framework dan tools yang teruji di skala
              global, agar investasi teknologi Anda tahan lama dan mudah
              dikembangkan.
            </p>
          </div>
        </FadeInView>

        <FadeInView delay={0.15}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {techStacks.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-3 p-5 rounded-xl bg-surface-container-lowest border border-surface-dim hover:border-primary/40 hover:shadow-md transition-all text-center group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-fixed text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[28px]">
                    {tech.icon}
                  </span>
                </div>
                <div>
                  <div className="font-headline text-sm text-on-surface font-semibold">
                    {tech.name}
                  </div>
                  <div className="text-xs text-on-surface-variant mt-0.5">
                    {tech.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInView>
      </section>

      {/* ===== SECTION 6: BRIEF TEASER / CTA ===== */}
      <section className="max-w-container mx-auto px-5 sm:px-8 py-16">
        <FadeInView>
          <div className="rounded-2xl bg-gradient-to-br from-primary via-[#1f4e7d] to-[#153a5e] p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]" />
            <div className="relative z-10">
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight mb-4">
                Ceritakan Kebutuhan Proyek Anda
              </h2>
              <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                Tidak perlu bingung dengan istilah teknis. Ceritakan saja apa
                yang ingin Anda bangun dan kendala Anda saat ini, dan kami bantu
                rencanakan solusinya secara gratis.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-white text-primary font-headline font-semibold text-sm shadow-lg hover:bg-surface-container-lowest hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    edit_note
                  </span>
                  <span>Isi Formulir Singkat</span>
                </Link>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/15 hover:bg-white/25 text-white font-headline font-semibold text-sm border border-white/20 transition-all duration-200"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    chat
                  </span>
                  <span>Chat WhatsApp Langsung</span>
                </a>
              </div>
            </div>
          </div>
        </FadeInView>
      </section>
    </div>
  );
}
