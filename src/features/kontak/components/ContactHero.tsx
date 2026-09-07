import { FadeInView } from "@/components/ui/FadeInView";

export function ContactHero() {
  return (
    <section className="relative max-w-container mx-auto px-5 sm:px-8 pt-12 md:pt-20 pb-12 text-center">
      <FadeInView>
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-headline text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">
            Halo! Siap Wujudkan Impian Digital Anda
          </span>
        </div>
      </FadeInView>

      <FadeInView delay={0.1}>
        <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface tracking-tight leading-[1.15] mb-6 max-w-3xl mx-auto">
          Konsultasikan Kebutuhan Anda Secara{" "}
          <span className="text-primary">Santai & Menyenangkan</span>
        </h1>
      </FadeInView>

      <FadeInView delay={0.2}>
        <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          Punya ide baru, kebutuhan sistem bisnis, atau ingin merapikan
          aplikasi yang ada? Ceritakan pada kami. Tanpa jargon rumit, gratis
          konsultasi awal, dan kami balas ramah dalam{" "}
          <strong className="text-on-surface">
            &lt; 12 jam kerja.
          </strong>
        </p>
      </FadeInView>

    </section>
  );
}
