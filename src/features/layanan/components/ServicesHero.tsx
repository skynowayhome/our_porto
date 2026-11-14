import Link from "next/link";
import { FadeInView } from "@/components/ui/FadeInView";
import { IconArrowDown, IconVerified } from "@/components/ui/Icons";
import { Logo3DCard } from "@/components/ui/Logo3DCard";

export function ServicesHero() {
  return (
    <section className="relative max-w-container mx-auto px-4 sm:px-6 md:px-8 pt-10 sm:pt-14 md:pt-20 pb-12 sm:pb-16">
      <FadeInView>
        <div className="flex flex-wrap items-center gap-3 mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
            <IconVerified size={15} />
            <span>Kapabilitas & Standar Rekayasa</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-on-surface-variant uppercase tracking-wider font-headline">
            <span>Teknologi Modern</span>
            <span className="text-surface-dim">·</span>
            <span>Garansi 30 Hari</span>
            <span className="text-surface-dim">·</span>
            <span>Tanpa Biaya Tersembunyi</span>
          </div>
        </div>
      </FadeInView>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <FadeInView delay={0.1}>
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-[1.15] mb-5 sm:mb-6">
              Ubah Ide & Kebutuhan Anda Menjadi Solusi{" "}
              <span className="text-primary underline decoration-secondary-container decoration-4 underline-offset-4">
                Tangguh, Cepat, & Terarah.
              </span>
            </h1>
          </FadeInView>
          <FadeInView delay={0.2}>
            <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              Kami menyelaraskan kebutuhan Anda mulai dari tahap blueprint arsitektur sistem (SRS, PRD, UML), hingga pembuatan landing page, webapps dashboard, dan aplikasi mobile. Terbuka bagi pelajar/mahasiswa, pemilik usaha, hingga instansi bisnis dengan kejelasan hasil nyata di setiap langkah.
            </p>
          </FadeInView>
          <FadeInView delay={0.3}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8 w-full sm:w-auto">
              <Link
                href="#paket-kerja"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary text-on-primary font-headline font-semibold text-sm shadow-[0_4px_16px_rgba(39,94,149,0.25)] hover:bg-[#1f4e7d] active:scale-95 transition-all"
              >
                <span>Pilih Paket Kerja</span>
                <IconArrowDown size={18} />
              </Link>
              <Link
                href="/tim"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-surface-container-lowest border border-surface-dim text-on-surface font-headline font-semibold text-sm hover:border-primary/40 transition-all"
              >
                <span>Kenali Tim Kami</span>
              </Link>
            </div>
          </FadeInView>
        </div>

        <div className="lg:col-span-5 w-full">
          <FadeInView delay={0.25} direction="left" scale={true}>
            <div className="h-[300px] sm:h-[360px]">
              <Logo3DCard />
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
