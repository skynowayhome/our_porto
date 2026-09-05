import Link from "next/link";
import { FadeInView } from "@/components/ui/FadeInView";
import { services } from "@/data";
import {
  IconCheckCircle,
  IconArrowRight,
  iconMap,
} from "@/components/ui/Icons";

export function ServicesTeaserSection() {
  const iconBgMap: Record<string, string> = {
    primary: "bg-primary-fixed text-primary",
    secondary: "bg-secondary-fixed text-secondary",
    tertiary: "bg-tertiary-fixed text-tertiary",
  };

  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <FadeInView>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
            Layanan Jasa yang Bisa Kami Bantu
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base mt-2">
            Dapatkan produk digital dengan desain memanjakan mata, mudah
            dipakai staf Anda, dan performa tinggi tanpa kendala teknis
            berbelit.
          </p>
        </div>
      </FadeInView>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {services.map((service, index) => (
          <FadeInView key={service.id} delay={index * 0.1}>
            <div
              className={`rounded-xl bg-surface-container-lowest border border-surface-dim hover:border-${service.colorAccent}/50 p-6 sm:p-7 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 h-full`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-13 h-13 sm:w-14 sm:h-14 rounded-lg ${iconBgMap[service.colorAccent]} flex items-center justify-center group-hover:scale-105 transition-transform`}
                  >
                    {(() => {
                      const Ic = iconMap[service.icon];
                      return Ic ? <Ic size={28} /> : <span>{service.icon}</span>;
                    })()}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-md bg-surface-container text-${service.colorAccent} font-headline text-xs font-semibold border border-surface-dim`}
                  >
                    {`${service.number} // ${service.tag}`}
                  </span>
                </div>
                <h3 className="font-headline text-xl sm:text-2xl text-on-surface font-bold mb-2.5">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2.5 text-sm text-on-surface"
                    >
                      <IconCheckCircle
                        size={18}
                        className={`text-${service.colorAccent} shrink-0 mt-0.5`}
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                className={`inline-flex items-center gap-2 text-${service.colorAccent} font-headline font-semibold text-sm group-hover:underline transition-all`}
                href="/kontak"
              >
                <span>{service.cta}</span>
                <IconArrowRight size={18} />
              </Link>
            </div>
          </FadeInView>
        ))}
      </div>
    </section>
  );
}
