import Link from "next/link";
import { FadeInView } from "@/components/ui/FadeInView";
import { pricingModels } from "@/data";
import { IconCheckCircle, IconArrowRight } from "@/components/ui/Icons";

export function ServicesPricing() {
  return (
    <section id="paket-kerja" className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 scroll-mt-24">
      <FadeInView>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
            Pilih Model Kerjasama Sesuai Kebutuhan
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base mt-2">
            Fleksibel, jelas, dan tanpa kontrak tersembunyi. Anda tahu persis
            apa yang akan Anda terima sejak hari pertama.
          </p>
        </div>
      </FadeInView>

      <FadeInView delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingModels.map((model) => (
            <div
              key={model.tag}
              className={`relative rounded-xl p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                model.highlight
                  ? "bg-surface-container-lowest border-2 border-primary shadow-[0_8px_32px_rgba(39,94,149,0.15)]"
                  : "bg-surface-container-lowest border border-surface-dim shadow-sm hover:shadow-md"
              }`}
            >
              {model.highlight ? (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-on-primary text-xs font-semibold shadow-sm whitespace-nowrap">
                  {model.highlightLabel}
                </div>
              ) : null}

              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-semibold mb-4">
                  {model.tag}
                </span>
                <h3 className="font-headline text-lg sm:text-xl text-on-surface font-bold mb-2">
                  {model.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  {model.description}
                </p>
                <div className="mb-6">
                  <span className="font-headline text-2xl sm:text-3xl text-on-surface font-bold">
                    {model.price}
                  </span>
                  <span className="text-sm text-on-surface-variant ml-1">
                    {model.unit}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {model.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-on-surface"
                    >
                      <IconCheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/kontak"
                className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-headline font-semibold text-sm transition-all duration-200 ${
                  model.ctaStyle === "primary"
                    ? "bg-primary text-on-primary shadow-[0_4px_16px_rgba(39,94,149,0.25)] hover:bg-[#1f4e7d] active:scale-95"
                    : "bg-surface-container-lowest border border-surface-dim text-on-surface hover:border-primary/40 hover:text-primary"
                }`}
              >
                <span>{model.cta}</span>
                <IconArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </FadeInView>
    </section>
  );
}
