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
    label: "Website / Web App",
    description: "Landing page elegan, dashboard sistem, toko online, SaaS.",
  },
  {
    icon: "smartphone",
    label: "Aplikasi Mobile",
    description: "Aplikasi Android & iOS responsif (Flutter/Cross-platform).",
  },
  {
    icon: "build",
    label: "Perbaikan & Optimasi",
    description: "Website lambat, banyak bug, ingin nambah fitur baru.",
  },
  {
    icon: "cloud_sync",
    label: "Cloud & Server Infra",
    description: "Migrasi hosting, VPS kencang, backup otomatis & CI/CD.",
  },
];

export const budgetOptions: readonly BudgetOption[] = [
  {
    label: "< Rp 5 Juta",
    tag: "Paket Starter",
    description: "Cocok untuk UMKM, Landing Page & Portofolio.",
  },
  {
    label: "Rp 5 - 15 Juta",
    tag: "Paling Populer",
    popular: true,
    description: "Ideal untuk MVP Startup, Dashboard Bisnis.",
  },
  {
    label: "Rp 15 - 30 Juta",
    tag: "Pro Scale",
    description: "Sistem Kompleks, Full Custom & Integrasi API.",
  },
  {
    label: "> Rp 30 Juta",
    tag: "Enterprise",
    description: "Skala Enterprise, Arsitektur Tinggi & SLA.",
  },
];

export const workProcess: readonly WorkProcessStep[] = [
  {
    step: "01",
    title: "Diskusi Santai & Rencana Sistem",
    duration: "1 - 3 Hari",
    description:
      "Kami ngobrol santai mengenai kebutuhan dan alur bisnis Anda. Dari situ kami akan merancang arsitektur teknis yang efisien, membuat estimasi biaya berdasarkan kebutuhan.",
    icon: "forum",
    cta: "Hasil: Dokumen Rencana & Biaya Pasti",
  },
  {
    step: "02",
    title: "Pengerjaan & Coba Langsung Versi Awal",
    duration: "Tiap 2 Minggu",
    description:
      "Skyy dan Aris mulai membuat aplikasi. Setiap dua minggu, Anda bisa langsung coba versi awal. Tidak perlu menunggu lama dan kaget di akhir karena hasilnya berbeda.",
    icon: "construction",
    cta: "Hasil: Link Demo Nyata & Feedback",
  },
  {
    step: "03",
    title: "Penyempurnaan & Uji Keamanan",
    duration: "Uji Kualitas",
    description:
      "Sebelum rilis resmi, kami tampung feedback dan testing pola serangan di depan user demo, serta pastikan semua fitur berfungsi di semua ukuran layar dan browser.",
    icon: "verified_user",
    cta: "Hasil: Aplikasi Stabil & Aman",
  },
  {
    step: "04",
    title: "Peluncuran & Serah Terima Kunci",
    duration: "Peluncuran",
    description:
      "Aplikasi resmi tayang di Google Play, App Store, atau domain Anda. Semua kode dan akun di serah-terimakan. Dan kami tetap mendampingi selama masa garansi aktif.",
    icon: "rocket_launch",
    cta: "Hasil: Stop Panic + Produk Lengkap",
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

export const logoImage = "/Logo.webp?v=2";
