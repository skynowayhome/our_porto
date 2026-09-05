import { FadeInView } from "@/components/ui/FadeInView";
import { workProcess } from "@/data";
import { IconCheck, IconCheckCircle, iconMap } from "@/components/ui/Icons";

export function TeamWorkProcess() {
  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <FadeInView>
        <div className="mb-10 sm:mb-12">
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
            Alur Kerja Bersama Kami: 4 Tahap Sederhana
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base mt-2 max-w-xl">
            Proses terarah agar Anda tahu persis apa yang sedang dikerjakan dan
            kapan produk Anda siap digunakan.
          </p>
        </div>
      </FadeInView>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {workProcess.map((step, index) => {
          const StepIcon = iconMap[step.icon] || IconCheckCircle;
          return (
            <FadeInView key={step.step} delay={index * 0.1}>
              <div className="rounded-xl bg-surface-container-lowest border border-surface-dim p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                    <StepIcon size={22} />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-semibold">
                    {step.duration}
                  </span>
                </div>
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1.5 font-headline">
                  Tahap {step.step}
                </div>
                <h3 className="font-headline text-base text-on-surface font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4 flex-1">
                  {step.description}
                </p>
                <div className="pt-3 border-t border-surface-dim flex items-center gap-1.5 text-xs text-primary font-medium">
                  <IconCheck size={14} className="shrink-0" />
                  <span>{step.cta}</span>
                </div>
              </div>
            </FadeInView>
          );
        })}
      </div>
    </section>
  );
}
