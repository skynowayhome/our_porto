import Link from "next/link";
import { FadeInView } from "@/components/ui/FadeInView";
import { pricingModels } from "@/data";
import { IconCheckCircle, IconArrowRight } from "@/components/ui/Icons";

export function ServicesPricing() {
  return (
    <section id="paket-kerja" className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 scroll-mt-24">
      <FadeInView>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 border border-primary/20">
            <span>Model Transparan & Fleksibel</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-extrabold tracking-tight">
            Pilih Model Kerjasama Sesuai Kebutuhan
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base mt-2">
            Fleksibel, jelas, dan tanpa kontrak tersembunyi. Anda tahu persis
            apa yang akan Anda terima sejak hari pertama.
          </p>
        </div>
      </FadeInView>

      <FadeInView delay={0.1}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {pricingModels.map((model) => (
            <div
              key={model.tag}
              className={`relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                model.highlight
                  ? "bg-surface-container-lowest border-2 border-primary shadow-[0_8px_32px_rgba(39,94,149,0.15)] ring-2 ring-primary/10"
                  : "bg-surface-container-lowest border border-surface-dim shadow-xs hover:shadow-lg hover:border-primary/40"
              }`}
            >
              {model.highlight ? (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-on-primary text-[11px] font-bold shadow-sm whitespace-nowrap">
                  {model.highlightLabel}
                </div>
              ) : null}

              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant text-[11px] font-bold mb-3">
                  {model.tag}
                </span>
                <h3 className="font-headline text-base sm:text-lg text-on-surface font-bold mb-1.5 leading-snug">
                  {model.title}
                </h3>
                <p className="text-on-surface-variant text-xs leading-relaxed mb-5 min-h-[36px]">
                  {model.description}
                </p>
                <div className="pt-3.5 border-t border-surface-dim/70">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant mb-2.5 font-headline">
                    Cakupan Layanan:
                  </div>
                  <ul className="space-y-2.5">
                    {model.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs text-on-surface"
                      >
                        <IconCheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href="/kontak"
                className="mt-6 w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-surface-container-high hover:bg-primary hover:text-on-primary text-xs font-headline font-bold text-on-surface transition-all duration-200 shadow-2xs group"
              >
                <span>{model.cta || "Konsultasikan Paket"}</span>
                <IconArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </FadeInView>

      {/* Infrastructure & Deployment Transparency Banner */}
      <FadeInView delay={0.15}>
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-surface-container-lowest border border-surface-dim text-xs text-on-surface-variant flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2 text-on-surface font-semibold font-headline">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>Pilihan Deployment & Biaya Infrastruktur:</span>
          </div>
          <div className="sm:text-right text-[11px] leading-relaxed">
            Klien bebas memilih: dibantu deploy oleh kami ke server Anda atau serah terima (hand-over) source code utuh.
            <span className="block text-primary font-medium mt-0.5">
              *Biaya sewa domain, hosting/cloud VPS, maupun akun store terhitung di luar biaya jasa pengembangan.
            </span>
          </div>
        </div>
      </FadeInView>

      {/* UMKM & Startup Friendly Banner */}
      <FadeInView delay={0.2}>
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-surface-container-low border border-surface-dim flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="font-headline text-sm font-bold text-on-surface">
              Skema Pembayaran Bertahap & Ramah Cash Flow
            </div>
            <p className="text-xs text-on-surface-variant mt-0.5 max-w-xl">
              Kami mengerti ritme bisnis berkembang. Seluruh pengerjaan dapat dicicil sesuai progres (milestone) tanpa beban langsung di awal.
            </p>
          </div>
          <Link
            href="/kontak"
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-surface-dim hover:border-primary text-xs font-bold text-primary transition-colors shadow-xs"
          >
            <span>Tanya & Konsultasi Santai</span>
            <IconArrowRight size={14} />
          </Link>
        </div>
      </FadeInView>
    </section>
  );
}
