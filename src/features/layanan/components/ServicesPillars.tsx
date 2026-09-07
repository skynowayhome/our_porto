import Image from "next/image";
import { FadeInView } from "@/components/ui/FadeInView";
import { TechBadge } from "@/components/ui/TechBadge";
import { services } from "@/data";
import { IconCheckCircle } from "@/components/ui/Icons";

const serviceImages = [
  "/artacom-landingpage.png",
  "/artacom-webapps.png",
  "/hrms-mobile-apps.jpg",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
];

const serviceBadgeLabels: Record<string, string> = {
  "web-landingpage": "Cepat & SEO Friendly",
  "web-dashboard": "Full-Stack & Scalable",
  "mobile-apps": "Offline-First",
  "audit-devsecops": "Standar Keamanan OWASP",
};

const serviceEstimations: Record<string, string> = {
  "web-landingpage": "1 - 2 Minggu",
  "web-dashboard": "3 - 6 Minggu",
  "mobile-apps": "4 - 8 Minggu",
  "audit-devsecops": "1 - 2 Minggu",
};

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
                        {serviceBadgeLabels[service.id] || "Solusi Handal"}
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
                    <div className="rounded-xl overflow-hidden bg-surface-container-high border border-surface-dim shadow-inner relative group h-60 sm:h-72">
                      <Image
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        src={currentImage}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 450px"
                      />
                      <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-surface-container-lowest/90 backdrop-blur-md border border-surface-dim text-xs shadow-sm flex items-center justify-between z-10">
                        <span className={`text-${service.colorAccent} font-semibold`}>
                          {serviceEstimations[service.id] || "2 - 4 Minggu"}
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
