import { FadeInView } from "@/components/ui/FadeInView";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { techStacks } from "@/data";
import { iconMap } from "@/components/ui/Icons";

export function TechStackSection() {
  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <FadeInView>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <SectionBadge label="Fondasi Teknologi Kuat" variant="neutral" />
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
            Teknologi Modern yang Dipakai Perusahaan Kelas Dunia
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base mt-2">
            Kami hanya menggunakan framework dan tools yang teruji di skala
            global, agar investasi teknologi Anda tahan lama dan mudah
            dikembangkan.
          </p>
        </div>
      </FadeInView>

      <FadeInView delay={0.15}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {techStacks.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2.5 sm:gap-3 p-4 sm:p-5 rounded-xl bg-surface-container-lowest border border-surface-dim hover:border-primary/40 hover:shadow-md transition-all text-center group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-primary-fixed text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                {(() => {
                  const Ic = iconMap[tech.icon];
                  return Ic ? <Ic size={26} /> : <span>{tech.icon}</span>;
                })()}
              </div>
              <div>
                <div className="font-headline text-xs sm:text-sm text-on-surface font-semibold">
                  {tech.name}
                </div>
                <div className="text-[11px] sm:text-xs text-on-surface-variant mt-0.5">
                  {tech.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeInView>
    </section>
  );
}
