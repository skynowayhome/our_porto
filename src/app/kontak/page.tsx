import type { Metadata } from "next";
import { ContactView } from "@/features/kontak";

export const metadata: Metadata = {
  title: "Konsultasi Teknis & Estimasi Proyek",
  description:
    "Diskusikan kebutuhan pembuatan website, dashboard analitik, atau aplikasi mobile bisnis Anda langsung dengan lead engineers Zeki Studio.",
  alternates: {
    canonical: "/kontak",
  },
  openGraph: {
    title: "Mulai Konsultasi — Zeki Studio",
    description:
      "Dapatkan rekomendasi solusi teknologi paling hemat, cepat, dan teruji tanpa perantara.",
    url: "https://zekistudio.dev/kontak",
  },
};

export default function KontakPage() {
  return <ContactView />;
}
