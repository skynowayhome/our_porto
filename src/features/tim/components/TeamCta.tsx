import Link from "next/link";
import { FadeInView } from "@/components/ui/FadeInView";
import {
  IconArrowRight,
  IconGavel,
  IconLock,
  IconCoins,
} from "@/components/ui/Icons";

const reassuranceBadges = [
  { IconComponent: IconGavel, label: "Tanpa Tekanan Kontrak" },
  { IconComponent: IconLock, label: "Kerahasiaan Ide Terjamin (NDA)" },
  { IconComponent: IconCoins, label: "Estimasi Terstruktur & Transparan" },
];

export function TeamCta() {
  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <FadeInView scale={true}>
        <div className="rounded-2xl bg-gradient-to-br from-primary via-[#1f4e7d] to-[#153a5e] p-6 sm:p-10 md:p-14 lg:p-16 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />
          <div className="relative z-10">
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full">
              <Link
                href="/kontak"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-white text-primary font-headline font-semibold text-sm shadow-lg hover:bg-surface-container-lowest active:scale-95 transition-all duration-200"
              >
                <span>Jadwalkan Obrolan Singkat</span>
                <IconArrowRight size={18} />
              </Link>
              <Link
                href="/portofolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/15 hover:bg-white/25 text-white font-headline font-semibold text-sm border border-white/20 transition-all duration-200"
              >
                <span>Lihat Karya Sebelumnya</span>
                <IconArrowRight size={18} />
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 text-white/70 text-xs">
              {reassuranceBadges.map((badge) => (
                <span key={badge.label} className="flex items-center gap-1.5">
                  <badge.IconComponent size={16} />
                  <span>{badge.label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeInView>
    </section>
  );
}
