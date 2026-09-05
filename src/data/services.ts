import { ServiceItem, PricingModel } from "@/types";

export const services: readonly ServiceItem[] = [
  {
    id: "web-dashboard",
    number: "01",
    tag: "Web & Dashboard",
    icon: "dashboard",
    title: "Website Bisnis & Dashboard Operasional",
    description:
      "Pembuatan aplikasi web kustom untuk mengelola data penjualan, pelanggan, atau alur kerja perusahaan. Desain responsif, tampilan elegan, dan loading secepat kilat.",
    benefits: [
      "Tampilan modern, bersih, dan gampang dipahami admin maupun tamu",
      "Pengaturan hak akses staf (Role-based) yang aman & rapi",
      "Langsung terintegrasi WhatsApp, Email Notifikasi, atau Payment Gateway",
    ],
    cta: "Konsultasikan Kebutuhan Web Anda",
    colorAccent: "primary",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "Cloud Servis",
    ],
  },
  {
    id: "mobile-apps",
    number: "02",
    tag: "Mobile Apps",
    icon: "smartphone",
    title: "Aplikasi Mobile Kasir & Lapangan (Offline-First)",
    description:
      "Aplikasi Android & iOS khusus operasional toko, kurir, atau sales lapangan yang tetap lancar mencatat transaksi dan struk walau tanpa kuota internet sekalipun.",
    benefits: [
      "Tetap jalan saat internet mati lampu atau di pelosok tanpa sinyal",
      "Otomatis sinkron ke server pusat saat smartphone terhubung online",
      "Bisa cetak langsung ke printer thermal bluetooth & scan barcode kamera",
    ],
    cta: "Konsultasikan Aplikasi Mobile Anda",
    colorAccent: "secondary",
    techStack: [
      "Flutter 3.x",
      "SQLite Enkripsi",
      "ESC/POS Protocol",
      "Auto-Sync Cloud",
    ],
  },
  {
    id: "server-cloud",
    number: "03",
    tag: "Server & Otomasi",
    icon: "cloud_sync",
    title: "Perbaikan Server & Bikin Sistem Anti-Down",
    description:
      "Punya aplikasi yang sering lemot, macet saat pengunjung ramai, atau susah di-update? Kami rapikan arsitektur server Anda agar stabil 24/7 dan hemat biaya bulanan.",
    benefits: [
      "Setup server aman, terisolasi dengan Docker, dan auto-backup harian",
      "Update fitur otomatis tanpa mengganggu pelanggan yang sedang pakai",
      "Optimasi database agar pencarian data ribuan baris tuntas dalam hitungan detik",
    ],
    cta: "Konsultasikan Perawatan & Server",
    colorAccent: "primary",
    techStack: [
      "Docker",
      "GitHub Actions CI/CD",
      "Nginx Proxy",
      "CloudFlare CDN",
    ],
  },
  {
    id: "algorithm",
    number: "04",
    tag: "Logika & Algoritma",
    icon: "route",
    title: "Perhitungan Rute Logistik & Algoritma Pintar",
    description:
      "Butuh fitur perhitungan pintar seperti pencarian rute terpendek armada kurir, estimasi waktu antar paling efisien, atau kalkulasi kuota besar berkecepatan tinggi?",
    benefits: [
      "Menemukan jalur paling hemat bahan bakar & waktu secara instan",
      "Mampu mengolah ribuan titik alamat pengiriman tanpa membuat HP lag",
      "Bisa dihubungkan ke peta Google Maps maupun sistem internal Anda",
    ],
    cta: "Konsultasikan Kebutuhan Sistem Khusus",
    colorAccent: "tertiary",
    techStack: ["C++20", "Graph Theory", "A* Algorithm", "CSR Matrix"],
  },
];

export const pricingModels: readonly PricingModel[] = [
  {
    tag: "Paket Satuan",
    highlight: false,
    highlightLabel: "",
    title: "Fixed Scope / Sprint MVP",
    description:
      "Satu solusi untuk satu tujuan jelas: aplikasi atau fitur siap pakai dari nol.",
    price: "Mulai 15 Juta",
    unit: "/proyek",
    features: [
      "Tujuan fix berbasis 2-sprint (4 minggu)",
      "Sudah termasuk video panduan penggunaan",
      "Gratis perbaikan bug 30 Hari setelah serah terima",
    ],
    cta: "Mulai Proyek MVP",
    ctaStyle: "outline",
  },
  {
    tag: "Partner Dedicated",
    highlight: true,
    highlightLabel: "Paling Populer & Rekomendasi",
    title: "Dedicated Engineering Retainer",
    description:
      "Punya produk atau ide yang butuh kemajuan secara bertahap dan terus-menerus? Langganan 2 insinyur partner terdedikasi setiap bulan.",
    price: "Mulai 24 Juta",
    unit: "/bulan",
    features: [
      "Siap komunikasi langsung Slack / WhatsApp",
      "Preview peningkatan berkala tiap 1-2 jam",
      "Bonus: support prioritas & akses kustomisasi tanpa batas",
      "Termasuk maintain server & sistem keamanan berkekuatan penuh",
    ],
    cta: "Pilih Retainer Bulanan",
    ctaStyle: "primary",
  },
  {
    tag: "Diagnostik Khusus",
    highlight: false,
    highlightLabel: "",
    title: "Audit Sistem & Code Review",
    description:
      "Aplikasi atau website Anda sudah berjalan tapi bermasalah? Kami diagnosis alur kode & kerentanan secara menyeluruh.",
    price: "Mulai 6.5 Juta",
    unit: "/sesi audit",
    features: [
      "Termasuk laporan PDF 5+ halaman analisis kode terperinci",
      "Rekomendasi solusi bisa langsung diterapkan & Action Plan",
      "Sesi konsultasi 1-on-1 Langsung Call / Zoom 60 Menit",
    ],
    cta: "Jadwalkan Audit Sistem",
    ctaStyle: "outline",
  },
];
