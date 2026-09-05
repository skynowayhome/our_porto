import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export const metadata: Metadata = {
  title: {
    default:
      "Zeki Studio — Studio Pembuatan Website & Aplikasi Bisnis Modern",
    template: "%s | Zeki Studio",
  },
  description:
    "Bikin website & aplikasi bisnis jadi cepat, menawan, dan siap dipakai jualan. Dikerjakan langsung oleh 2 insinyur senior — tanpa perantara, tanpa tim lepas. Studio rekayasa perangkat lunak Zeki Studio.",
  keywords: [
    "jasa pembuatan website",
    "jasa pembuatan aplikasi",
    "web developer Indonesia",
    "aplikasi bisnis",
    "Next.js developer",
    "Flutter developer",
    "zekistudio.dev",
  ],
  authors: [{ name: "Zeki Studio" }],
  openGraph: {
    title: "Zeki Studio — Studio Pembuatan Website & Aplikasi Bisnis Modern",
    description:
      "Dikerjakan langsung oleh pembuatnya, bukan dilempar tim lepas. Studio rekayasa perangkat lunak modern oleh dua insinyur senior.",
    url: "https://zekistudio.dev",
    siteName: "Zeki Studio",
    type: "website",
    locale: "id_ID",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col bg-background text-on-surface font-body relative overflow-x-hidden">

        <SmoothScroll>
          <ScrollProgress />
          <AmbientBackground />
          <Header />
          <main className="w-full pt-20 flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

