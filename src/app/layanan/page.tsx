import type { Metadata } from "next";
import { ServicesView } from "@/features/layanan";

export const metadata: Metadata = {
  title: "Layanan Rekayasa Perangkat Lunak & Solusi Digital",
  description:
    "Solusi web kilat, webapps & dashboard scalable, aplikasi mobile Android/iOS, dan audit keamanan source code (DevSecOps) oleh tim senior Zeki Studio.",
  alternates: {
    canonical: "/layanan",
  },
  openGraph: {
    title: "Layanan Kami — Zeki Studio",
    description:
      "4 pilar solusi rekayasa teknologi: Landing Page Kilat, Dashboard Admin, Mobile Apps Flutter, dan Audit Keamanan OWASP.",
    url: "https://zekistudio.dev/layanan",
  },
};

export default function LayananPage() {
  return <ServicesView />;
}
