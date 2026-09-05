import { TeamMemberProfile, TeamProfilesMap } from "@/types";

export const teamProfiles: TeamProfilesMap = {
  skyy: {
    name: "Skyy",
    role: "Tech Lead & Web Architect",
    badge: "Tech Lead & Web Architect",
    specialization: "Spesialis Website Perusahaan, Dashboard & Cloud Server",
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
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1VeU-QufriBmqb50Gt-qNWGnccfdYcqDyLw3gwsK0BFGx0OoSxkndLMMhzdFuwCfG_R473HUnmXZH6NA3YY5i0uWNcxFOc8Bo6eSdoTD_VM-J-92jdb6SQD3_jB6nAPb8Tvw_FL4TuuA6gZtyxRMVSGx96MTbgANH-_t2pjTfWPGcXrSGTLJWSYRSIPH7mIlDqueAq2ff4lG39PqKOYn1re9dTgEqQ03YjO3Ci604AMZTh5ACilfcwsx3g",
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
    name: "Aris",
    role: "Mobile Lead & Co-Founder",
    badge: "Mobile Lead & Co-Founder",
    specialization: "Spesialis Aplikasi Android/iOS & Logika Sistem Cerdas",
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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWGSoL7lPF_MiQGMUTnlaeACw3Am1c0YgnNof_zwAUa26oM_mVACtHjyMkEJsEtvugFBVQItBd7GqpgbH0mIMsFXDbw0LGddE0IOso-XKptV9OtJrC-lfduc1FwcC5RHSXzJSTk7wjeHr_nHmRjBiy_LNkKiTi-9SOzNPCk2sU_TgYlILnX3NXKUn7bfnc03ygM79mQIN9txHuD6ZVHUKn4IjvGueU93Ex5A-DY8CAOBfMR4Gat3pH",
    colorAccent: "secondary",
    detailedSkills: [
      "App Android & iOS (Flutter)",
      "Sistem Kasir & Offline-Print",
      "Algoritma Rute & Komputasi C++",
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

