import { FadeInView } from "@/components/ui/FadeInView";
import { commitmentValues } from "@/data";
import { IconShield, IconCheckCircle, iconMap } from "@/components/ui/Icons";

export function TeamCommitments() {
  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <FadeInView>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
            Kenapa Klien Merasa Nyaman & Bebas Khawatir Bersama Kami?
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base mt-2">
            Banyak orang ragu membuat aplikasi karena takut teknis yang rumit,
            biaya tersembunyi, atau ditinggal setelah selesai. Bersama kami,
            Anda mendapatkan rasa aman di setiap langkahnya.
          </p>
        </div>
      </FadeInView>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {commitmentValues.map((value, index) => {
          const IconComponent = iconMap[value.icon] || IconShield;
          return (
            <FadeInView key={value.title} delay={index * 0.1}>
              <div className="rounded-xl bg-surface-container-lowest border border-surface-dim p-5 sm:p-7 md:p-8 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                      <IconComponent size={26} />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1 font-headline">
                        {index + 1}. {value.title.split("(")[0].trim()}
                      </div>
                      <h3 className="font-headline text-base sm:text-lg text-on-surface font-bold">
                        {value.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                    {value.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-primary font-medium pt-3 border-t border-surface-dim">
                  <IconCheckCircle size={16} className="shrink-0" />
                  <span>{value.cta}</span>
                </div>
              </div>
            </FadeInView>
          );
        })}
      </div>
    </section>
  );
}
