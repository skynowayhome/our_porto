import { FadeInView } from "@/components/ui/FadeInView";
import { workProcess } from "@/data";
import { IconCheck, IconCheckCircle, iconMap } from "@/components/ui/Icons";

export function TeamWorkProcess() {
  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-20">
      <FadeInView>
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-3.5 border border-primary/20">
            <IconCheckCircle size={15} />
            Transparan, Terukur & Tanpa Biaya Tersembunyi
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
            Alur Kerja Sama: 4 Tahap Terarah & Aman
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base mt-3 leading-relaxed">
            Kami menerapkan metode kerja terstruktur dari penguncian ruang lingkup (*scope*)
            hingga serah terima sistem lengkap dengan garansi — tanpa &ldquo;black box&rdquo; dan dengan skema pembayaran bertahap yang adil.
          </p>
        </div>
      </FadeInView>

      {/* Process Cards - 2x2 Grid for Maximum Readability */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {workProcess.map((step, index) => {
          const StepIcon = iconMap[step.icon] || IconCheckCircle;
          return (
            <FadeInView key={step.step} delay={index * 0.1}>
              <div className="rounded-2xl bg-surface-container-lowest border border-surface-dim p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
                {/* Subtle Step Watermark */}
                <div className="absolute top-4 right-6 text-5xl sm:text-6xl font-headline font-black text-surface-dim/40 select-none pointer-events-none group-hover:text-primary/10 transition-colors">
                  {step.step}
                </div>

                {/* Card Top Header */}
                <div className="flex items-center justify-between mb-5 relative z-10">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200">
                      <StepIcon size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-primary tracking-wider uppercase font-headline">
                        Tahap {step.step}
                      </div>
                      <h3 className="font-headline text-lg sm:text-xl text-on-surface font-bold leading-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Badge Tag */}
                <div className="mb-4 relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-surface-container-high text-primary font-semibold text-xs border border-primary/15">
                    {step.badge || step.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-on-surface-variant text-sm sm:text-[15px] leading-relaxed mb-5 relative z-10">
                  {step.description}
                </p>

                {/* Highlights Checklist Box */}
                {step.highlights && step.highlights.length > 0 && (
                  <div className="bg-surface-container-low/60 rounded-xl p-4 border border-surface-dim/70 mb-5 mt-auto relative z-10">
                    <div className="text-xs font-semibold text-on-surface uppercase tracking-wider mb-2.5 font-headline flex items-center gap-1.5">
                      <IconCheck size={14} className="text-primary" />
                      Poin Utama & Ketentuan:
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-on-surface-variant">
                      {step.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Output Deliverable Bar */}
                <div className="pt-3.5 border-t border-surface-dim flex items-center justify-between text-xs sm:text-sm font-semibold text-primary relative z-10">
                  <div className="flex items-center gap-2">
                    <IconCheckCircle size={16} className="shrink-0" />
                    <span>{step.cta}</span>
                  </div>
                </div>
              </div>
            </FadeInView>
          );
        })}
      </div>
    </section>
  );
}
