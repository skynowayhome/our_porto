"use client";

import { FadeInView } from "@/components/ui/FadeInView";
import { SectionBadge } from "@/components/ui/SectionBadge";
import dynamic from "next/dynamic";

const PortfolioHero3D = dynamic(
  () =>
    import("./PortfolioHero3D").then((mod) => ({
      default: mod.PortfolioHero3D,
    })),
  { ssr: false }
);

export function PortfolioHero() {
  return (
    <section className="relative max-w-container mx-auto px-5 sm:px-8 pt-12 md:pt-20 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Text content */}
        <div className="lg:col-span-7">
          <FadeInView className="w-full flex flex-col items-start">
            <SectionBadge label="Portofolio & Karya Produksi Nyata" />
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface tracking-tight leading-[1.15] mb-4 max-w-3xl text-left">
              Sistem Digital Canggih,{" "}
              <span className="text-primary">
                Hasil Nyata yang Langsung Terasa.
              </span>
            </h1>
            <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed max-w-2xl text-left">
              Kami merancang dan membangun software yang memecahkan masalah riil
              bisnis Anda: antrean lancar di jam sibuk, kasir yang tetap jalan
              meski mati lampu/sinyal, hingga perhitungan rute kota tercepat dalam
              sekejap mata.
            </p>
          </FadeInView>
        </div>

        {/* 3D Visual */}
        <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
          <FadeInView delay={0.3}>
            <PortfolioHero3D />
          </FadeInView>
        </div>
      </div>
    </section>
  );
}

