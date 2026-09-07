import { FadeInView } from "@/components/ui/FadeInView";
import {
  IconHandshake,
  IconVoiceOver,
  IconShield,
  IconSpeed,
  IconHealthSafety,
} from "@/components/ui/Icons";

const valuePills = [
  {
    IconComponent: IconVoiceOver,
    label: "100% Langsung",
    desc: "Bicara tanpa perantara",
  },
  {
    IconComponent: IconShield,
    label: "Hak Cipta Penuh",
    desc: "Semua kode 100% milik Anda",
  },
  {
    IconComponent: IconSpeed,
    label: "Respon Cepat",
    desc: "Diskusi bebas basa-basi",
  },
  {
    IconComponent: IconHealthSafety,
    label: "Garansi Dampingan",
    desc: "Ditemani hingga lancar jaya",
  },
];

export function TeamHero() {
  return (
    <section className="relative max-w-container mx-auto px-4 sm:px-6 md:px-8 pt-10 sm:pt-14 md:pt-20 pb-12 sm:pb-16 text-center">
      {/* <FadeInView>
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-surface-container-low border border-surface-dim shadow-sm mb-6">
          <IconHandshake size={16} className="text-primary" />
          <span className="font-headline text-xs sm:text-sm font-semibold text-primary">
            Studio Rekayasa Digital • Dua Partner Berpengalaman
          </span>
        </div>
      </FadeInView> */}

      <FadeInView delay={0.1}>
        <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface tracking-tight leading-[1.15] mb-5 sm:mb-6 max-w-3xl mx-auto">
          Kenali Rekan Teknologi Anda:{" "}
          <span className="text-primary underline decoration-secondary-container decoration-4 underline-offset-4">
            Langsung Dikerjakan Pembuatnya,
          </span>{" "}
          Bukan Dilempar Tim Lepas
        </h1>
      </FadeInView>

      <FadeInView delay={0.2}>
        <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
          Kami bukan agensi besar dengan birokrasi rumit dan perantara sales.
          Bersama <strong>Skyy</strong> dan <strong>Aris</strong>, setiap ide
          aplikasi dan sistem bisnis Anda dikerjakan dengan teliti, transparan,
          dan penuh dedikasi seperti merawat produk sendiri.
        </p>
      </FadeInView>

      {/* Value Pills */}
      <FadeInView delay={0.3} scale={true}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {valuePills.map((pill) => (
            <div
              key={pill.label}
              className="flex flex-col items-center gap-2 p-3.5 sm:p-4 rounded-xl bg-surface-container-lowest border border-surface-dim hover:border-primary/40 transition-all hover:shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                <pill.IconComponent size={22} />
              </div>
              <div className="font-headline text-xs sm:text-sm text-on-surface font-semibold">
                {pill.label}
              </div>
              <div className="text-[11px] sm:text-xs text-on-surface-variant text-center">
                {pill.desc}
              </div>
            </div>
          ))}
        </div>
      </FadeInView>
    </section>
  );
}
