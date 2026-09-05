# Zeki Studio — Digital Engineering & Portfolio Platform

Platform resmi dan portfolio showcase untuk **Zeki Studio** — studio rekayasa perangkat lunak modern yang berfokus pada pembuatan website bisnis, dashboard operasional, serta aplikasi mobile cross-platform performa tinggi.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations & Interaction**: [Framer Motion](https://www.framer.com/motion/), [Lenis Smooth Scroll](https://lenis.darkroom.engineering/)
- **Type System**: [TypeScript 5](https://www.typescriptlang.org/)
- **Icons**: Custom Material Symbols SVG components

---

## 🏛️ Arsitektur Proyek (Enterprise Feature-Driven Architecture)

Struktur kode dirancang dengan pendekatan **Feature-Based Architecture** dan **Separation of Concerns (SoC)** agar modular, bersih, dan mudah dikembangkan dalam jangka panjang:

```text
src/
├── app/                                # Next.js App Router (Halaman & Routing tipis)
│   ├── layout.tsx                      # Root layout, font, smooth scroll, providers
│   ├── globals.css                     # Definisi tema, font styling & Tailwind utilities
│   ├── page.tsx                        # Rute Beranda (delegasi ke <HomeView />)
│   ├── tim/page.tsx                    # Rute Profil Tim (delegasi ke <TeamView />)
│   ├── layanan/page.tsx                # Rute Katalog Layanan (delegasi ke <ServicesView />)
│   ├── portofolio/page.tsx             # Rute Karya & Studi Kasus (delegasi ke <PortfolioView />)
│   └── kontak/page.tsx                 # Rute Konsultasi & Form (delegasi ke <ContactView />)
│
├── features/                           # Modul Domain & Fitur Terisolasi
│   ├── home/                           # Fitur Halaman Beranda
│   │   ├── HomeView.tsx                # Wrapper tampilan utama
│   │   └── components/                 # HeroSection, TeamTeaser, ServicesTeaser, Showcase, TechStack, HomeCta
│   ├── tim/                            # Fitur Profil Tim Partner
│   │   ├── TeamView.tsx
│   │   └── components/                 # TeamHero, TeamProfiles, TeamCommitments, TeamWorkProcess, TeamCta
│   ├── portofolio/                     # Fitur Portofolio & Studi Kasus
│   │   ├── PortfolioView.tsx
│   │   └── components/                 # PortfolioHero, CaseStudyDetailCard, PortfolioStability, PortfolioCta
│   ├── layanan/                        # Fitur Layanan & Model Harga
│   │   ├── ServicesView.tsx
│   │   └── components/                 # ServicesHero, ServicesPillars, ServicesPricing, ServicesGuarantees, ServicesCta
│   └── kontak/                         # Fitur Kontak & Estimasi Biaya
│       ├── ContactView.tsx
│       └── components/                 # ContactHero, ContactForm, ContactSidebar, ContactFaq
│
├── types/                              # Deklarasi Type & Interface TypeScript Terpusat
│   ├── team.ts                         # Interface profil insinyur, skill, dan badge
│   ├── service.ts                      # Interface layanan & paket harga
│   ├── project.ts                      # Interface studi kasus, metrics, dan filter
│   ├── common.ts                       # Interface FAQ, navigasi, proses kerja, dan komitmen
│   └── index.ts                        # Barrel export untuk semua types
│
├── data/                               # Data Statis & Konten Bisnis Terpisah dari UI
│   ├── team.ts                         # Data profil Skyy & Aris
│   ├── services.ts                     # Data layanan & pricing models
│   ├── projects.ts                     # Data 3 studi kasus unggulan & metrics
│   ├── faq.ts                          # Pertanyaan umum (FAQ)
│   ├── navigation.ts                   # Navigasi, kategori kontak, alur kerja, & opsi budget
│   └── index.ts                        # Barrel export untuk semua data
│
├── components/                         # Komponen Reusable Global
│   ├── layout/                         # Header & Footer
│   ├── common/                         # SectionBadge, TechBadge, AmbientBackground, ScrollProgress, FadeInView
│   └── ui/                             # Icons SVG
│
└── lib/                                # Utilitas & Bridge Kompatibilitas
    ├── utils.ts                        # Helper functions (cn / class merger)
    └── constants.ts                    # Re-export bridge untuk kompatibilitas backward
```

---

## 🛠️ Panduan Memulai (*Getting Started*)

### 1. Instalasi Dependensi

Pastikan Node.js (versi 18.18+ atau 20+) telah terinstal di lingkungan kerja Anda:

```bash
npm install
```

### 2. Menjalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) pada browser Anda.

### 3. Pengecekan Type & Linting

```bash
# Validasi Type TypeScript
npx tsc --noEmit

# Linting kode
npm run lint
```

### 4. Build untuk Lingkungan Produksi

```bash
npm run build
npm run start
```

---

## 📄 Lisensi & Kepemilikan

© Zeki Studio. Seluruh hak cipta dilindungi.
