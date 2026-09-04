import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AmbientBackground } from "@/components/ui/AmbientBackground";

export const metadata: Metadata = {
  title: {
    default:
      "SKYY.DEV — Studio Pembuatan Website & Aplikasi Bisnis Modern",
    template: "%s | SKYY.DEV",
  },
  description:
    "Bikin website & aplikasi bisnis jadi cepat, menawan, dan siap dipakai jualan. Dikerjakan langsung oleh 2 insinyur senior — tanpa perantara, tanpa tim lepas. Studio rekayasa perangkat lunak Skyy & Partner.",
  keywords: [
    "jasa pembuatan website",
    "jasa pembuatan aplikasi",
    "web developer Indonesia",
    "aplikasi bisnis",
    "Next.js developer",
    "Flutter developer",
    "skyy.dev",
  ],
  authors: [{ name: "Skyy & Partner Studio" }],
  openGraph: {
    title: "SKYY.DEV — Studio Pembuatan Website & Aplikasi Bisnis Modern",
    description:
      "Dikerjakan langsung oleh pembuatnya, bukan dilempar tim lepas. Studio rekayasa perangkat lunak modern oleh dua insinyur senior.",
    url: "https://skyy.dev",
    siteName: "SKYY.DEV",
    type: "website",
    locale: "id_ID",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-on-surface font-body relative overflow-x-hidden">
        <AmbientBackground />
        <Header />
        <main className="w-full pt-20 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
