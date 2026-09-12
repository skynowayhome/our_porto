import { TeamMemberProfile, TeamProfilesMap } from "@/types";

export const teamProfiles: TeamProfilesMap = {
  skyy: {
    name: "Rezki Langit Ramadhan",
    role: "Chief Technology Officer",
    badge: "Chief Technology Officer",
    specialization: "Spesialis Analisis Kebutuhan & Arsitektur Sistem Web/Cloud",
    bio: "Berpengalaman 6+ tahun memastikan website bisnis tetap cepat diakses ribuan pengguna.",
    quote:
      '"Memastikan fondasi teknologi bisnis Anda dibangun dengan arsitektur modern, performa super cepat, dan sistem keamanan tingkat tinggi yang siap berkembang tanpa kendala teknis."',
    focus: "Fokus: Arsitektur Cloud, Web Kilat & Keamanan Sistem",
    focusIcon: "laptop_mac",
    skills: [
      { label: "Next.js & React (Web Kilat)", variant: "primary" },
      { label: "Tailwind CSS (Desain Modern)", variant: "neutral" },
      { label: "Docker & Cloud Staging", variant: "primary" },
      { label: "Database Otomatis", variant: "neutral" },
      { label: "CodeIgniter & Node.js", variant: "neutral" },
    ],
    image: "/photo-langit.jpg",
    colorAccent: "primary",
    detailedSkills: [
      "Portal & Web Bisnis Modern",
      "Dashboard Admin & Analitik",
      "Setup Server Cloud & Backup",
      "Next.js",
      "React",
      "PostgreSQL",
      "Docker",
      "CodeIgniter",
      "Redis",
    ],
  },
  aris: {
    name: "Ahmad Rizki",
    role: "Founder",
    badge: "Founder",
    specialization: "Spesialis Aplikasi Android & iOS, POS & Cloud Sync",
    bio: "Ahli merancang aplikasi kasir/pos dan rute logistik yang tetap lancar meski internet mati.",
    quote:
      '"Mendesain solusi aplikasi mobile yang tangguh dan mudah digunakan di lapangan, dengan keandalan offline-first agar operasional bisnis Anda terus berjalan tanpa hambatan koneksi."',
    focus: "Fokus: Aplikasi Mobile, Offline-First & Integrasi Operasional",
    focusIcon: "stay_current_portrait",
    skills: [
      { label: "Flutter (Android & iOS)", variant: "secondary" },
      {
        label: "Offline-First Database (SQLite)",
        variant: "primary",
      },
      {
        label: "Integrasi Printer Kasir & Barcode",
        variant: "neutral",
      },
      { label: "Algoritma Jalur Cepat (C++)", variant: "neutral" },
      { label: "Sinkronisasi Otomatis", variant: "neutral" },
    ],
    image: "/photo-ahmad.png",
    colorAccent: "secondary",
    detailedSkills: [
      "App Android & iOS (Flutter)",
      "Sistem Kasir & Offline-Print",
      "Flutter",
      "Dart",
      "SQLite Engine",
      "C++ Native",
      "Kotlin",
      "POS Protokol",
    ],
  },
  cfo: {
    name: "Chika Syifa",
    role: "Chief Financial Officer",
    badge: "Chief Financial Officer",
    specialization: "Spesialis Analisis Finansial, Efisiensi Anggaran & Model Investasi Digital",
    bio: "Berpengalaman dalam perencanaan anggaran teknologi dan analisis kelayakan investasi digital.",
    quote:
      '"Memastikan setiap alokasi investasi teknologi dan digitalisasi bisnis Anda berjalan efisien, terukur, dan memberikan Return on Investment (ROI) yang optimal dan transparan."',
    focus: "Fokus: Efisiensi Biaya Proyek & Optimalisasi ROI Klien",
    focusIcon: "payments",
    skills: [
      { label: "Financial Modeling & ROI", variant: "primary" },
      { label: "Budgeting & Cost Efficiency", variant: "neutral" },
      { label: "Pricing Strategy", variant: "secondary" },
      { label: "Strategic Investment Planning", variant: "neutral" },
    ],
    image: "/chika.png",
    colorAccent: "primary",
    detailedSkills: [
      "Perencanaan Anggaran Proyek",
      "Analisis Kelayakan & ROI",
      "Optimasi Biaya Operasional Cloud",
      "Strategic Pricing & Revenue",
      "Manajemen Risiko Keuangan",
    ],
  },
  cmo: {
    name: "Aulia Salsabila",
    role: "Chief Marketing Officer",
    badge: "Chief Marketing Officer",
    specialization: "Spesialis Pertumbuhan Brand, Digital Marketing & User Acquisition",
    bio: "Berpengalaman merancang strategi pemasaran digital terintegrasi untuk memperluas jangkauan pasar.",
    quote:
      '"Menjembatani keunggulan produk digital Anda ke pasar target melalui strategi branding yang kuat, positioning tepat, dan akuisisi pelanggan yang terakselerasi."',
    focus: "Fokus: Strategi Go-to-Market & Pertumbuhan Brand",
    focusIcon: "campaign",
    skills: [
      { label: "Growth & User Acquisition", variant: "secondary" },
      { label: "Brand Strategy & Positioning", variant: "primary" },
      { label: "Digital Marketing & SEO", variant: "neutral" },
      { label: "Conversion Optimization", variant: "neutral" },
    ],
    image: "/aul.jpg",
    colorAccent: "secondary",
    detailedSkills: [
      "Go-to-Market Strategy",
      "Brand Positioning & Messaging",
      "Digital Marketing Campaign",
      "Conversion Funnel Optimization",
      "Market Research & Analytics",
    ],
  },
};

export const teamMembers: readonly TeamMemberProfile[] = [
  teamProfiles.skyy,
  teamProfiles.aris,
  teamProfiles.cfo,
  teamProfiles.cmo,
];


