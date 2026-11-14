import { FadeInView } from "@/components/ui/FadeInView";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function PortfolioStability() {
  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16">
      <FadeInView scale={true}>
        <div className="rounded-2xl bg-surface-container-low border border-surface-dim p-6 sm:p-10 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <SectionBadge label="Standar Mutu & Keandalan" variant="neutral" />
              <h2 className="font-headline text-2xl sm:text-3xl text-on-surface font-extrabold tracking-tight mb-3">
                Software yang Mudah Dipakai Karyawan, Stabil Menghasilkan Nilai.
              </h2>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                Kami tidak membuat aplikasi yang membingungkan atau lambat. Setiap
                sistem dirancang agar staf dan pelanggan Anda bisa langsung paham dalam 10 menit,
                dengan fondasi kode bersih yang tidak mudah rusak dan siap berkembang.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                <div className="text-center p-5 rounded-xl bg-surface-container-lowest border border-surface-dim shadow-xs">
                  <div className="text-xs font-headline font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">
                    Standar Penulisan
                  </div>
                  <div className="font-headline text-3xl font-black text-primary">
                    <AnimatedCounter value=">94%" />
                  </div>
                  <div className="text-xs text-on-surface-variant mt-1">
                    Score Uji di Standar Industri
                  </div>
                </div>
                <div className="text-center p-5 rounded-xl bg-surface-container-lowest border border-surface-dim shadow-xs">
                  <div className="text-xs font-headline font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">
                    Waktu Update
                  </div>
                  <div className="font-headline text-3xl font-black text-primary">
                    <AnimatedCounter value="<3 Menit" />
                  </div>
                  <div className="text-xs text-on-surface-variant mt-1">
                    Fitur Baru Siap Naik Server
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInView>
    </section>
  );
}
