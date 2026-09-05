import Link from "next/link";
import { FadeInView } from "@/components/ui/FadeInView";
import { IconArrowDown, IconVerified } from "@/components/ui/Icons";

export function ServicesHero() {
  return (
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
  );
}
