import type { Metadata } from "next";
import { PortfolioView } from "@/features/portofolio";

export const metadata: Metadata = {
  title: "Portofolio & Studi Kasus Proyek Nyata",
  description:
    "Koleksi hasil karya aplikasi web, sistem enterprise, dashboard keuangan, dan aplikasi mobile yang sudah beroperasi live dan menangani ribuan transaksi.",
  alternates: {
    canonical: "/portofolio",
  },
  openGraph: {
    title: "Portofolio & Karya Kami — Zeki Studio",
    description:
      "Studi kasus nyata: Web Order Restoran, Dashboard Finance Artacom, Aplikasi HRMS SaaS, dan Aplikasi Mobile POS.",
    url: "https://zekistudio.dev/portofolio",
  },
};

export default function PortofolioPage() {
  return <PortfolioView />;
}
