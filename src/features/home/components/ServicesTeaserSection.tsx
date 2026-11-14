"use client";

import Link from "next/link";
import { FadeInView } from "@/components/ui/FadeInView";
import { services } from "@/data";
import {
  IconCheckCircle,
  IconArrowRight,
  iconMap,
} from "@/components/ui/Icons";
import { motion } from "framer-motion";

const accentStyleMap: Record<
  string,
  {
    iconBg: string;
    borderHover: string;
    textColor: string;
    tagBorder: string;
  }
> = {
  primary: {
    iconBg: "bg-primary-fixed text-primary",
    borderHover: "hover:border-primary/50 group-hover:shadow-[0_8px_30px_rgba(39,94,149,0.12)]",
    textColor: "text-primary",
    tagBorder: "border-primary/20",
  },
  secondary: {
    iconBg: "bg-secondary-fixed text-secondary",
    borderHover: "hover:border-secondary/50 group-hover:shadow-[0_8px_30px_rgba(34,101,127,0.12)]",
    textColor: "text-secondary",
    tagBorder: "border-secondary/20",
  },
  tertiary: {
    iconBg: "bg-tertiary-fixed text-tertiary",
    borderHover: "hover:border-tertiary/50 group-hover:shadow-[0_8px_30px_rgba(75,96,93,0.12)]",
    textColor: "text-tertiary",
    tagBorder: "border-tertiary/20",
  },
};

export function ServicesTeaserSection() {
  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <FadeInView>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 border border-primary/20">
            <span>Solusi & Layanan Utama</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-extrabold tracking-tight">
            Layanan Rekayasa yang Siap Membantu Anda
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base mt-2">
            Dapatkan produk digital dengan desain memanjakan mata, mudah
            dipakai staf Anda, dan performa tinggi tanpa kendala teknis
            berbelit.
          </p>
        </div>
      </FadeInView>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {services.map((service, index) => {
          const accent = accentStyleMap[service.colorAccent] || accentStyleMap.primary;

          return (
            <FadeInView key={service.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`rounded-2xl bg-surface-container-lowest border border-surface-dim ${accent.borderHover} p-6 sm:p-7 md:p-8 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-full`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-13 h-13 sm:w-14 sm:h-14 rounded-xl ${accent.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs`}
                    >
                      {(() => {
                        const Ic = iconMap[service.icon];
                        return Ic ? <Ic size={28} /> : <span>{service.icon}</span>;
                      })()}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full bg-surface-container ${accent.textColor} font-headline text-xs font-semibold border ${accent.tagBorder}`}
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
                          className={`${accent.textColor} shrink-0 mt-0.5`}
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  className={`inline-flex items-center gap-2 ${accent.textColor} font-headline font-semibold text-sm group-hover:gap-3 transition-all pt-4 border-t border-surface-dim/70`}
                  href="/kontak"
                >
                  <span>{service.cta}</span>
                  <IconArrowRight size={18} />
                </Link>
              </motion.div>
            </FadeInView>
          );
        })}
      </div>
    </section>
  );
}
