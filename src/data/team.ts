import { TeamMemberProfile, TeamProfilesMap } from "@/types";

export const teamProfiles: TeamProfilesMap = {
  skyy: {
    name: "Rezki Langit Ramadhan",
    role: "Tech Lead & Web Architect",
    badge: "Tech Lead & Web Architect",
    specialization: "Spesialis Website Perusahaan & Sistem Web",
    bio: "Berpengalaman 6+ tahun memastikan website bisnis tetap cepat diakses ribuan pengguna.",
    quote:
      '"Tujuan saya sederhana: bisnis Anda punya website atau dashboard yang tidak sekadar keren di mata, tapi juga sangat ringan dibuka, aman dari serangan siber, dan langsung menghasilkan konversi penjualan."',
    focus: "Fokus: Sistem Web & Keandalan Cloud",
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
    role: "Mobile Developer & Co-Founder",
    badge: "Mobile Developer & Co-Founder",
    specialization: "Spesialis Aplikasi Android & WebApps, Dashboard & Cloud Server",
    bio: "Ahli merancang aplikasi kasir/pos dan rute logistik yang tetap lancar meski internet mati.",
    quote:
      '"Aplikasi di lapangan tidak boleh macet saat sinyal hilang. Saya mendesain aplikasi mobile yang bisa bekerja tanpa internet (offline-first), lalu menyinkronkan data secara otomatis begitu ada koneksi."',
    focus: "Fokus: Aplikasi HP & Optimasi Data",
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
};

export const teamMembers: readonly TeamMemberProfile[] = [
  teamProfiles.skyy,
  teamProfiles.aris,
];

