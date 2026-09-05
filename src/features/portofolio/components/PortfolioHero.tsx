import { FadeInView } from "@/components/ui/FadeInView";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { portofolioMetrics, portfolioFilters } from "@/data";

interface PortfolioHeroProps {
  activeFilter: string;
  onSelectFilter: (filterId: string) => void;
}

export function PortfolioHero({
  activeFilter,
  onSelectFilter,
}: PortfolioHeroProps) {
  return (
    <section className="relative max-w-container mx-auto px-5 sm:px-8 pt-12 md:pt-20 pb-16">
      <FadeInView>
        <SectionBadge label="Portofolio & Karya Produksi Nyata" />
        <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface tracking-tight leading-[1.15] mb-4 max-w-3xl">
          Sistem Digital Canggih,{" "}
          <span className="text-primary">
            Hasil Nyata yang Langsung Terasa.
          </span>
        </h1>
        <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-10 max-w-2xl">
          Kami merancang dan membangun software yang memecahkan masalah riil
          bisnis Anda: antrean lancar di jam sibuk, kasir yang tetap jalan
          meski mati lampu/sinyal, hingga perhitungan rute kota tercepat dalam
          sekejap mata.
        </p>
      </FadeInView>

      {/* Metrics Bar */}
      <FadeInView delay={0.15}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {portofolioMetrics.map((metric) => (
            <div
              key={metric.label}
              className="flex items-center gap-3 p-4 rounded-lg bg-surface-container-lowest border border-surface-dim"
            >
              <span className="material-symbols-outlined text-[24px] text-primary">
                {metric.icon}
              </span>
              <div>
                <div className="font-headline text-xl sm:text-2xl font-bold text-on-surface">
                  {metric.value}
                </div>
                <div className="text-xs text-on-surface-variant">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeInView>

      {/* Filter Tabs */}
      <FadeInView delay={0.2}>
        <div className="flex flex-wrap gap-2">
          {portfolioFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onSelectFilter(filter.id)}
              className={`px-4 py-2 rounded-lg text-sm font-headline font-semibold transition-all duration-200 ${
                activeFilter === filter.id
                  ? "bg-primary text-on-primary shadow-sm"
                  : "bg-surface-container-lowest border border-surface-dim text-on-surface-variant hover:border-primary/40 hover:text-primary"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </FadeInView>
    </section>
  );
}
