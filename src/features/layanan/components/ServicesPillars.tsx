import { FadeInView } from "@/components/ui/FadeInView";
import { TechBadge } from "@/components/ui/TechBadge";
import { services } from "@/data";
import { IconCheckCircle } from "@/components/ui/Icons";

const serviceImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDFlpK8Gch6x1oKRaOMsf__hHMKqVBTelHNFXiVnsNr_S1wecPeJqbcTTnRsxiPijmVCV5IuHWecseXIGE9Sp73QEc1bavP3fzYHd7LoauofjoqEkuEbfm1I5ULTWzHcGed-QrZa7qmOtCO9aY7tvmoKKqUarz5xSwZBh1b6KBhkV6aLyGtmMezXj2v96zE5b2n1cjdRKp-K7tHL6IUGsmdrfusEj8coRK8mPynRg3_DfkdJZWxJOGq",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC8pUwkKxF3g_--e35VghOwxYUsJmavGBzDd1mFSg0s4P11wk6w2sKqd9RmL8vUTbmx_C4t_MxnUEMOvY_OQvRrlGBWSTvFceJY5VEVPygfMJNSAzMlQocxxTWSgn8LiuKefh4pkCOt2pw1n65QF235JfztpwY4KcIpJ0Tn1yP4Bdiik59Nm_KeVlnKPGK0P02Z8OU17exfGoORJ0V0_8LaX7mAn1yIMq4gK-lw3DFqcaEGV-aYzHAH",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
];

export function ServicesPillars() {
  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <FadeInView>
        <div className="mb-10 sm:mb-12">
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
            Solusi Nyata Sesuai Skala Bisnis Anda
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base mt-2 max-w-xl">
            Dikerjakan langsung oleh 2 software engineer senior tanpa perantara dan tanpa alih daya ke pihak ketiga.
          </p>
        </div>
      </FadeInView>

      <div className="space-y-8 sm:space-y-12">
        {services.map((service, index) => {
          const isReversed = index % 2 !== 0;
          const currentImage = serviceImages[index] || serviceImages[0];

          return (
            <FadeInView key={service.id} delay={0.1}>
              <div className="rounded-xl bg-surface-container-lowest border border-surface-dim p-5 sm:p-7 md:p-8 shadow-sm hover:shadow-md transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                  <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${service.colorAccent === "primary" ? "bg-primary-fixed text-primary" : service.colorAccent === "secondary" ? "bg-secondary-fixed text-secondary" : "bg-tertiary-fixed text-tertiary"}`}>
                        {`${service.number} // ${service.tag}`}
                      </span>
                      <span className="text-xs text-on-surface-variant font-medium">
                        {service.colorAccent === "secondary" ? "Bisa Tanpa Internet" : service.colorAccent === "tertiary" ? "Tinggi Akurasi" : "Super Cepat & Stabil"}
                      </span>
                    </div>
                    <h3 className="font-headline text-xl sm:text-2xl text-on-surface font-bold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-3 font-headline">
                        Manfaat Utama yang Anda Terima Langsung:
                      </div>
                      <ul className="space-y-2.5">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2.5 text-sm text-on-surface">
                            <IconCheckCircle size={18} className={`text-${service.colorAccent} shrink-0 mt-0.5`} />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech, i) => (
                        <TechBadge key={tech} label={tech} variant={i === 0 ? service.colorAccent : "neutral"} />
                      ))}
                    </div>
                  </div>

                  <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="rounded-xl overflow-hidden bg-surface-container-high border border-surface-dim shadow-inner relative group">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="w-full h-60 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                        src={currentImage}
                        alt={service.title}
                        loading="lazy"
                      />
                      <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-surface-container-lowest/90 backdrop-blur-md border border-surface-dim text-xs shadow-sm flex items-center justify-between">
                        <span className={`text-${service.colorAccent} font-semibold`}>
                          {service.colorAccent === "secondary" ? "3 - 4 Minggu" : service.colorAccent === "tertiary" ? "1 - 3 Minggu" : "2 - 4 Minggu"}
                        </span>
                        <span className="text-on-surface-variant">Estimasi pengerjaan</span>
                      </div>
                    </div>
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
