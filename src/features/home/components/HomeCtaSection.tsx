import Link from "next/link";
import { FadeInView } from "@/components/ui/FadeInView";
import { IconEditNote, IconChat } from "@/components/ui/Icons";

export function HomeCtaSection() {
  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <FadeInView scale={true}>
        <div className="rounded-2xl bg-gradient-to-br from-primary via-[#1f4e7d] to-[#153a5e] p-6 sm:p-10 md:p-14 lg:p-16 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]" />
          <div className="relative z-10">
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight mb-3 sm:mb-4">
              Ceritakan Kebutuhan Proyek Anda
            </h2>
            <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Tidak perlu bingung dengan istilah teknis. Ceritakan saja apa
              yang ingin Anda bangun dan kendala Anda saat ini, dan kami bantu
              rencanakan solusinya secara gratis.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full">
              <Link
                href="/kontak"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-lg bg-white text-primary font-headline font-semibold text-sm shadow-lg hover:bg-surface-container-lowest hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
              >
                <IconEditNote size={20} />
                <span>Isi Formulir Singkat</span>
              </Link>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/15 hover:bg-white/25 text-white font-headline font-semibold text-sm border border-white/20 transition-all duration-200"
              >
                <IconChat size={18} />
                <span>Chat WhatsApp Langsung</span>
              </a>
            </div>
          </div>
        </div>
      </FadeInView>
    </section>
  );
}
