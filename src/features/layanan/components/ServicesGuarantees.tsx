import Link from "next/link";
import { FadeInView } from "@/components/ui/FadeInView";
import {
  IconShield,
  IconHealthSafety,
  IconPlayCircle,
  IconQuote,
  IconArrowRight,
} from "@/components/ui/Icons";

const guarantees = [
  {
    title: "100% Hak Milik Kode Anda",
    description:
      "Tidak ada jebakan lisensi, backup tersembunyi, atau vendor lock-in. Kode, database, arsitektur server dan seluruh rahasia dapur (source code) diserahkan utuh saat serah terima akhir.",
    IconComponent: IconShield,
  },
  {
    title: "Garansi Perbaikan 30 Hari",
    description:
      "Setelah sistem siap tayang, jika ada kendala atau bug operasional, cukup hubungi kami langsung dan perbaikan tuntas tanpa biaya tambahan sepeser pun.",
    IconComponent: IconHealthSafety,
  },
  {
    title: "Video Panduan Praktis",
    description:
      "Kami siapkan dokumentasi video singkat (microlearning) khusus staf Anda, agar tim internal langsung percaya diri mengoperasikan dan mengelola aplikasi secara mandiri.",
    IconComponent: IconPlayCircle,
  },
];

export function ServicesGuarantees() {
  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <FadeInView>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
            Ketenangan Pikiran Anda Adalah Prioritas Kami
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base mt-2">
            Kami berkomitmen membangun kerjasama jangka panjang dengan
            perjanjian hukum dan etika kerja yang adil.
          </p>
        </div>
      </FadeInView>

      <FadeInView delay={0.1}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-12">
          {guarantees.map((guarantee) => {
            const Icon = guarantee.IconComponent;
            return (
              <div
                key={guarantee.title}
                className="rounded-xl bg-surface-container-lowest border border-surface-dim p-5 sm:p-7 md:p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-fixed text-primary flex items-center justify-center mb-4">
                  <Icon size={26} />
                </div>
                <h3 className="font-headline text-base sm:text-lg text-on-surface font-bold mb-2">
                  {guarantee.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            );
          })}
        </div>
      </FadeInView>

      {/* Quote */}
      <FadeInView delay={0.2} scale={true}>
        <div className="rounded-xl bg-surface-container-low border border-surface-dim p-5 sm:p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-5 shadow-sm">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary flex items-center justify-center shrink-0">
              <IconQuote size={20} />
            </div>
            <div>
              <div className="font-headline text-sm text-on-surface font-bold">
                Prinsip Kami, Zeki Studio
              </div>
              {/* <span className="inline-flex items-center gap-1 text-xs text-emerald-600 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                konsisten dipraktikkan
              </span> */}
            </div>
          </div>
          <p className="text-sm text-on-surface leading-relaxed italic flex-1">
            &ldquo;Transparansi, presisi teknis, dan tanggung jawab penuh adalah pondasi kami. Setiap solusi digital dibangun dengan dedikasi tinggi langsung dari tangan kami untuk kesuksesan bisnis Anda.&rdquo;
          </p>
          <Link
            href="/tim"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-fixed text-primary text-xs font-semibold border border-primary/20 hover:bg-primary hover:text-on-primary transition-colors shrink-0 self-start md:self-auto"
          >
            <span>Cerita Lebih Tentangnya</span>
            <IconArrowRight size={14} />
          </Link>
        </div>
      </FadeInView>
    </section>
  );
}
