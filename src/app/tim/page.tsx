import type { Metadata } from "next";
import { TeamView } from "@/features/tim";

export const metadata: Metadata = {
  title: "Partner Teknis & Tim Rekayasa Zeki Studio",
  description:
    "Kenali Rezki Langit Ramadhan (Web Architect) dan Ahmad Rizki (Mobile & Cloud Developer) — dua senior engineer di balik keandalan sistem produk digital Anda.",
  alternates: {
    canonical: "/tim",
  },
  openGraph: {
    title: "Tim Kami — Zeki Studio",
    description:
      "Dikerjakan langsung oleh 2 software engineer senior tanpa alih daya ke pihak ketiga.",
    url: "https://zekistudio.dev/tim",
  },
};

export default function TimPage() {
  return <TeamView />;
}
