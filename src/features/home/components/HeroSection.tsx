import Link from "next/link";
import { FadeInView } from "@/components/ui/FadeInView";
import { Hero3DCanvas } from "@/components/ui/Hero3DCanvas";
import {
  IconRocket,
  IconArrowDown,
  IconSpeed,
  IconShield,
  IconHeadset,
} from "@/components/ui/Icons";

export function HeroSection() {
  return (
    <section className="relative max-w-container mx-auto px-4 sm:px-6 md:px-8 pt-10 sm:pt-14 md:pt-18 pb-14 sm:pb-20 flex flex-col items-center text-center">
      <FadeInView delay={0.1}>
        <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl font-bold text-on-surface max-w-4xl tracking-tight leading-[1.18] mb-5 sm:mb-6">
          Bikin Website & Aplikasi Bisnis Jadi{" "}
          <span className="text-primary underline decoration-secondary-container decoration-4 underline-offset-4">
            Cepat, Menawan,
          </span>{" "}
          dan Siap Dipakai Sesuai Kebutuhan.
        </h1>
      </FadeInView>

      <FadeInView delay={0.2}>
        <p className="font-body text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl mb-4 sm:mb-6 leading-relaxed font-normal">
          Ubah ide atau operasional bisnis Anda menjadi sistem digital yang
          rapi, anti-lemot, dan gampang digunakan oleh tim maupun pelanggan
          Anda. Dikerjakan langsung oleh tim ahli berpengalaman.
        </p>
      </FadeInView>

      {/* Interactive 3D Tech Centerpiece */}
      <FadeInView delay={0.25} scale={true}>
        <div className="relative my-1 sm:my-2">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/15 to-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
          <Hero3DCanvas />
        </div>
      </FadeInView>

      <FadeInView delay={0.3}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md mb-12 sm:mb-14">

          <Link
            href="/kontak"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-lg bg-primary text-on-primary font-headline font-semibold text-sm tracking-wide shadow-[0_6px_20px_rgba(39,94,149,0.25)] hover:bg-[#1f4e7d] hover:shadow-[0_8px_25px_rgba(39,94,149,0.32)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            <IconRocket size={20} />
            <span>Mulai Konsultasi Proyek</span>
          </Link>
          <Link
            href="/portofolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-headline font-semibold text-sm border border-surface-dim shadow-sm hover:border-outline transition-all duration-200"
          >
            <span>Lihat Contoh Hasil Kerja</span>
            <IconArrowDown size={18} className="text-primary" />
          </Link>
        </div>
      </FadeInView>

      <FadeInView delay={0.4} scale={true}>
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 p-2 sm:p-2.5 rounded-xl bg-surface-container-low/90 border border-surface-dim shadow-md">
          {[
            {
              icon: "speed",
              title: "Super Cepat & Stabil",
              desc: "Aplikasi ringan dibuka & anti-down",
              bg: "bg-primary-fixed",
              color: "text-primary",
              IconComponent: IconSpeed,
            },
            {
              icon: "verified_user",
              title: "100% Hak Milik Anda",
              desc: "Tanpa biaya langganan rahasia",
              bg: "bg-secondary-fixed",
              color: "text-secondary",
              IconComponent: IconShield,
            },
            {
              icon: "support_agent",
              title: "Langsung ke Developer",
              desc: "Diskusi lancar tanpa perantara ribet",
              bg: "bg-tertiary-fixed",
              color: "text-tertiary",
              IconComponent: IconHeadset,
            },
          ].map((metric) => (
            <div
              key={metric.title}
              className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-lg bg-surface-container-lowest border border-surface-dim hover:border-primary/40 transition-all hover:shadow-sm"
            >
              <div
                className={`flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-lg shrink-0 ${metric.bg} ${metric.color}`}
              >
                <metric.IconComponent size={24} />
              </div>
              <div className="text-left">
                <div className="font-headline text-base sm:text-lg text-on-surface font-bold tracking-tight">
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
  );
}
