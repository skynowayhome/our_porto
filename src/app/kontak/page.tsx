import type { Metadata } from "next";
import { ContactView } from "@/features/kontak";

export const metadata: Metadata = {
  title: "Konsultasi Teknis & Estimasi Proyek",
  description:
    "Diskusikan kebutuhan pembuatan website, dashboard analitik, atau aplikasi mobile bisnis Anda langsung dengan lead engineers ZQube.",
  alternates: {
    canonical: "/kontak",
  },
  openGraph: {
    title: "Mulai Konsultasi — ZQube",
    description:
      "Dapatkan rekomendasi solusi teknologi paling hemat, andal, dan teruji tanpa perantara.",
    url: "https://zqube.my.id/kontak",
  },
};

export default function KontakPage() {
  return <ContactView />;
}
