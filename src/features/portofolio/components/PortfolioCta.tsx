import Link from "next/link";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function PortfolioCta() {
  return (
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
  );
}
