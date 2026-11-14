"use client";

import { FadeInView } from "@/components/ui/FadeInView";
import { commitmentValues } from "@/data";
import { IconCheckCircle, iconMap } from "@/components/ui/Icons";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

export function TeamCommitments() {
  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-18">
      <FadeInView>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 border border-primary/20">
            <HeartHandshake className="w-4 h-4" />
            <span>Prinsip & Janji Kerja Kami</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-extrabold tracking-tight">
            Kenapa Klien Merasa Tenang & Betah Bekerjasama?
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base mt-2 leading-relaxed">
            Tidak ada birokrasi berbelit atau janji manis kosong. Kami memegang
            teguh 4 komitmen nyata yang melindungi waktu, uang, dan ketenangan pikiran Anda.
          </p>
        </div>
      </FadeInView>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {commitmentValues.map((item, idx) => {
          const Icon = iconMap[item.icon] || IconCheckCircle;

          return (
            <FadeInView key={item.title} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="h-full rounded-2xl bg-surface-container-lowest border border-surface-dim hover:border-primary/40 p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 shadow-xs">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-headline font-bold text-on-surface-variant/60">
                      #{String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-surface-dim/70 flex items-center gap-2 text-xs font-semibold text-primary">
                  <IconCheckCircle size={16} className="shrink-0 text-emerald-600" />
                  <span>{item.cta}</span>
                </div>
              </motion.div>
            </FadeInView>
          );
        })}
      </div>
    </section>
  );
}
