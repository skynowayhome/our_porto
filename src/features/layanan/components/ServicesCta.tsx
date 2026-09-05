import Link from "next/link";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { IconRocket, IconArrowRight } from "@/components/ui/Icons";

export function ServicesCta() {
  return (
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
  );
}
