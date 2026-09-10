import {
  NavLink,
  ContactCategory,
  BudgetOption,
  WorkProcessStep,
  CommitmentValue,
  TechStackItem,
} from "@/types";

export const navLinks: readonly NavLink[] = [
  { href: "/layanan", label: "Layanan" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/tim", label: "Tim Partner" },
  { href: "/kontak", label: "Kontak & Biaya" },
];

export const contactCategories: readonly ContactCategory[] = [
  {
    icon: "web",
    label: "Web & Landing Page",
    description: "Website Bisnis & Landing Page Profesional.",
  },
  {
    icon: "dashboard",
    label: "WebApps & Dashboard",
    description: "Website Bisnis & Dashboard Operasional.",
  },
  {
    icon: "smartphone",
    label: "Mobile Apps",
    description: "Aplikasi Android & iOS (Flutter).",
  },
  {
    icon: "shield",
    label: "Audit & DevSecOps",
    description: "Audit Source Code & Keamanan Aplikasi.",
  },
];

export const budgetOptions: readonly BudgetOption[] = [
  {
    label: "Solusi UMKM & Profil",
    tag: "Konsultasi",
    description: "Landing Page & Web Profil.",
    icon: "storefront",
  },
  {
    label: "MVP Startup & Bisnis",
    tag: "Paling Diminati",
    popular: true,
    description: "WebApps & Sistem Operasional.",
    icon: "rocket_launch",
  },
  {
    label: "Mobile App Praktis",
    tag: "Konsultasi",
    description: "Aplikasi Mobile (Flutter).",
    icon: "smartphone",
  },
  {
    label: "Solusi Cepat",
    tag: "Konsultasi",
    description: "Perbaikan Sistem & Optimasi.",
    icon: "shield",
  },
];

export const workProcess: readonly WorkProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Scope Locking",
    duration: "1 - 3 Hari",
    badge: "Offline / Online",
    description:
      "Sesi konsultasi mendalam untuk memahami alur bisnis dan kebutuhan sistem Anda. Kami melayani pertemuan tatap muka di Jakarta & Bekasi maupun online via Google Meet. Di akhir sesi, kami mengunci ruang lingkup (scope) proyek secara transparan agar bebas dari scope creep di kemudian hari.",
    highlights: [
      "Opsi tatap muka (Jakarta & Bekasi) / Online",
      "Kunci ruang lingkup & cegah scope creep",
      "Rekomendasi arsitektur & estimasi transparan",
    ],
    icon: "forum",
    cta: "Output: Scope of Work & Estimasi Pasti",
  },
  {
    step: "02",
    title: "Kesepakatan Kerja (SPK/SoW) & DP 30%",
    duration: "Termin I (30%)",
    badge: "DP 30%",
    description:
      "Penerbitan Surat Perintah Kerja (SPK/SoW) resmi dan Dokumen Spesifikasi Kebutuhan (BRD). Dokumen mengikat ini memuat rincian fitur yang disepakati, arsitektur teknologi, timeline pengerjaan, klausul batasan revisi, dan invoice DP 30%. Coding resmi dimulai setelah SPK disetujui & DP diterima.",
    highlights: [
      "Dokumen legal SPK/SoW & BRD terperinci",
      "Jadwal timeline & batasan revisi jelas",
      "Pengerjaan coding dimulai setelah DP 30%",
    ],
    icon: "gavel",
    cta: "Output: SPK Disepakati & Kick-off Coding",
  },
  {
    step: "03",
    title: "Development Agile & Demo Berkala",
    duration: "Termin II (30%)",
    badge: "Termin II: 30%",
    description:
      "Pengembangan fleksibel & transparan tanpa black box. Setiap dua minggu, Anda bisa mencoba langsung link demo versi awal yang berfungsi. Saat milestone utama tercapai dan Anda puas dengan fitur yang diuji, Invoice Termin II (30%) diterbitkan sebelum lanjut ke tahap testing & staging.",
    highlights: [
      "Coba link demo interaktif tiap 2 minggu",
      "Progres terbuka & bisa langsung dites",
      "Invoice Termin II diterbitkan pasca approval demo",
    ],
    icon: "construction",
    cta: "Output: Demo Terverifikasi & Sistem Siap UAT",
  },
  {
    step: "04",
    title: "UAT, Deployment & Pelunasan",
    duration: "Pelunasan (40%)",
    badge: "Pelunasan 40%",
    description:
      "Uji coba menyeluruh melalui User Acceptance Testing (UAT) di server staging untuk memastikan semua fitur sesuai SoW. Setelah UAT disetujui dan sisa 40% dilunasi, sistem di-deploy live ke domain/server Anda dengan serah terima full source code, kredensial, serta garansi bug-fixing (1–3 bulan).",
    highlights: [
      "Pengujian UAT di server staging tertutup",
      "Pelunasan 40% & serah terima full source code",
      "Garansi bug-fixing 1–3 bulan pasca rilis",
    ],
    icon: "rocket_launch",
    cta: "Output: Aplikasi Live, Full Handover & Garansi",
  },
];

export const commitmentValues: readonly CommitmentValue[] = [
  {
    icon: "record_voice_over",
    title: "Bicara Langsung ke Pembuatnya (Tanpa Perantara Sales)",
    description:
      'Tidak ada pihak "sales person" berdasi licper dan sales ke manajer lalu ke programmer. Setiap kebutuhan, ide, dan konsultasinya dijawab langsung oleh Skyy atau Aris dengan bahasa sederhana dan solusi.',
    cta: "Diskusi cepat via WhatsApp, Google Meet, atau Slack",
  },
  {
    icon: "verified_user",
    title: "Kepemilikan 100% Milik Anda (Tanpa Terkunci)",
    description:
      "Semua source code, database, dan server cepanya berpindah tangan ke Anda. Mau kerekrut-an dari luar pun Anda aman, Kami menyerahkan hak kekayaan intelektualnya sepenuhnya.",
    cta: "Aset digital lengkap, Anda pemegang kendali mutlak",
  },
  {
    icon: "health_and_safety",
    title: "Garansi Pendampingan Tanpa Pusing",
    description:
      "Kami tidak langsung menghilang saat aplikasi diluncurkan. Kami menyediakan masa garansi bug gratis pasca-rilis, panduan peremajaan dokumentasi untuk staf Anda, dan siap saja Jika ada kendala-pasca-rilis.",
    cta: "Dukungan perbaikan bug gratis pasca peluncuran",
  },
  {
    icon: "schedule",
    title: "Pengerjaan Tepat Waktu & Transparan",
    description:
      "Setiap dua minggu Anda bisa langsung memeriksa dan mencoba aplikasi yang sedang dikerjakan. Anda bersama kami bisa memonitor progres termasuk revisi berkala yang kami terima dengan lapang dada tanpa biaya ekstra.",
    cta: "Proses dan rencana terbuka, progress jelas dan terperinci",
  },
];

export const techStacks: readonly TechStackItem[] = [
  { name: "Next.js & React", description: "Website Kilat", icon: "web" },
  {
    name: "Tailwind CSS",
    description: "Desain Modern Rapi",
    icon: "palette",
  },
  { name: "Flutter SDK", description: "Mobile Cross-Platform", icon: "smartphone" },
  {
    name: "SQLite & PostgreSQL",
    description: "Data Aman Tersimpan",
    icon: "database",
  },
  { name: "Docker & CI/CD", description: "Server Otomatis", icon: "cloud_sync" },
  {
    name: "C++ Engine",
    description: "Komputasi Ringan",
    icon: "memory",
  },
];

export const logoImage = "/Logo.webp";
