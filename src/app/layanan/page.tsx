import type { Metadata } from "next";
import { ServicesView } from "@/features/layanan";

export const metadata: Metadata = {
  title: "Layanan Rekayasa Perangkat Lunak & Solusi Digital",
  description:
    "Solusi web bisnis, webapps & dashboard scalable, aplikasi mobile Android/iOS, dan perencanaan sistem formal (SRS, PRD & UML) oleh ZQube.",
  alternates: {
    canonical: "/layanan",
  },
  openGraph: {
    title: "Layanan Kami — ZQube",
    description:
      "4 pilar solusi rekayasa teknologi: Landing Page & Web Profil, Dashboard Admin, Mobile Apps Flutter, dan Project Planner SRS/PRD/UML.",
    url: "https://zqube.my.id/layanan",
  },
};

export default function LayananPage() {
  return <ServicesView />;
}
