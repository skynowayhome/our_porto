import { FadeInView } from "@/components/ui/FadeInView";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function PortfolioStability() {
  return (
    <section className="max-w-container mx-auto px-5 sm:px-8 py-16">
      <FadeInView>
        <div className="rounded-xl bg-surface-container-low border border-surface-dim p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <SectionBadge label="Software yang Untuk Bisnis Anda" variant="neutral" />
              <h2 className="font-headline text-2xl sm:text-3xl text-on-surface font-bold tracking-tight mb-4">
                Software yang Mudah Dipakai Karyawan, Stabil Menghasilkan Uang.
              </h2>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                Kami tidak membuat aplikasi yang membingungkan atau lambat. Setiap
                sistem dirancang agar kode bisa langsung paham dalam 10 menit,
                dengan fondasi kode kokoh yang tidak mudah rusak.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-5 rounded-lg bg-surface-container-lowest border border-surface-dim">
                  <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                    Standar Penulisan
                  </div>
                  <div className="font-headline text-3xl font-bold text-primary">
                    &gt;94%
                  </div>
                  <div className="text-xs text-on-surface-variant mt-1">
                    Score Uji di Standar
                  </div>
                </div>
                <div className="text-center p-5 rounded-lg bg-surface-container-lowest border border-surface-dim">
                  <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                    Waktu Update
                  </div>
                  <div className="font-headline text-3xl font-bold text-primary">
                    &lt;3 Menit
                  </div>
                  <div className="text-xs text-on-surface-variant mt-1">
                    Fitur Bisa Naik ke Server
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
