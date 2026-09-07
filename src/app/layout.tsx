import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL("https://zekistudio.dev"),
  title: {
    default:
      "Zeki Studio — Studio Pembuatan Website & Aplikasi Bisnis Modern",
    template: "%s | Zeki Studio",
  },
  description:
    "Solusi rekayasa perangkat lunak modern: pembuatan website perusahaan, sistem dashboard analitik, dan aplikasi mobile (iOS & Android). Cepat, aman, dan siap scale.",
  keywords: [
    "jasa pembuatan website",
    "jasa pembuatan aplikasi android ios",
    "web developer jakarta indonesia",
    "software house indonesia",
    "jasa website dashboard",
    "Next.js developer indonesia",
    "Flutter developer indonesia",
    "devsecops audit source code",
    "zekistudio.dev",
  ],
  authors: [
    { name: "Rezki Langit Ramadhan" },
    { name: "Ahmad Rizki" },
    { name: "Zeki Studio" },
  ],
  creator: "Zeki Studio",
  publisher: "Zeki Studio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zeki Studio — Studio Rekayasa Perangkat Lunak & Aplikasi Bisnis",
    description:
      "Dikerjakan langsung oleh senior engineers tanpa pihak ketiga. Website kilat, dashboard scalable, dan aplikasi mobile handal.",
    url: "https://zekistudio.dev",
    siteName: "Zeki Studio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/artacom-landingpage.png",
        width: 1200,
        height: 630,
        alt: "Zeki Studio Portfolio & Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeki Studio — Studio Pembuatan Website & Aplikasi Bisnis Modern",
    description:
      "Dikerjakan langsung oleh senior engineers. Spesialis Next.js, Flutter, dan Cloud Architecture.",
    images: ["/artacom-landingpage.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://zekistudio.dev/#organization",
      name: "Zeki Studio",
      url: "https://zekistudio.dev",
      logo: "https://zekistudio.dev/Logo.webp",
      image: "https://zekistudio.dev/artacom-landingpage.png",
      description:
        "Studio rekayasa perangkat lunak modern: spesialis pembuatan website profesional, dashboard analitik, dan aplikasi mobile iOS & Android.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ID",
      },
      priceRange: "$$",
      founders: [
        {
          "@type": "Person",
          name: "Rezki Langit Ramadhan",
          jobTitle: "Tech Lead & Web Architect",
        },
        {
          "@type": "Person",
          name: "Ahmad Rizki",
          jobTitle: "Mobile Developer & Co-Founder",
        },
      ],
      offers: [
        {
          "@type": "Offer",
          name: "Web & Landing Page Kilat",
          description: "Website modern, performa 99+, dan SEO friendly.",
        },
        {
          "@type": "Offer",
          name: "WebApps & Dashboard Bisnis",
          description: "Full-stack web application, portal admin, dan analitik real-time.",
        },
        {
          "@type": "Offer",
          name: "Aplikasi Mobile Android & iOS",
          description: "Aplikasi Flutter offline-first, cepat dan responsif.",
        },
        {
          "@type": "Offer",
          name: "Audit Source Code & DevSecOps",
          description: "Audit keamanan aplikasi standar OWASP dan otomasi CI/CD.",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full antialiased" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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

