import {
  CaseStudy,
  PortfolioMetricItem,
  PortfolioFilterItem,
  SliderProject,
} from "@/types";
import { teamProfiles } from "./team";

export const caseStudies: readonly CaseStudy[] = [

  {
    id: "pos-minimarket",
    category: "ritel",
    categoryLabel: "Aplikasi Kasir Toko & Tablet",
    statusLabel: "Siap Pakai di Tablet / HP",
    title: "Aplikasi Kasir Minimarket (Bisa Jalan Tanpa Internet)",
    description:
      "Solusi kasir bagi cabang retail yang sering terkendala sinyal. Kasir tetap bisa scan barcode produk, menghitung total belanja, dan cetak struk kasir bluetooth tanpa henti. Saat sinyal normal kembali, data stok toko langsung ter-update otomatis.",
    challenge:
      "Koneksi internet minimarket pinggiran sering putus mendadak, kasir manual memicu selisih stok.",
    solution:
      "Flutter + SQLite native di tablet, sync queue background, cetak struk Bluetooth ESC/POS <0.8 detik.",
    highlights: [
      {
        title: "Bebas Hambatan Sinyal",
        text: "Kasir tidak akan bengong menunggu loading koneksi, antrean pembeli tetap mengalir lancar.",
      },
      {
        title: "Perangkat Terjangkau",
        text: "Cukup gunakan tablet Android atau smartphone murah, tidak wajib PC kasir mahal.",
      },
    ],
    metrics: [
      { value: "0", label: "Transaksi Hilang" },
      { value: "<150MB", label: "Pemakaian RAM" },
      { value: "<0.8s", label: "Cetak Struk" },
    ],
    techStack: [
      "Flutter Mobile",
      "SQLite Offline Database",
      "Bluetooth ESC/POS Thermal",
      "Barcode Camera Scan",
    ],
    lead: "Aris & Skyy",
    leadImage: null,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8pUwkKxF3g_--e35VghOwxYUsJmavGBzDd1mFSg0s4P11wk6w2sKqd9RmL8vUTbmx_C4t_MxnUEMOvY_OQvRrlGBWSTvFceJY5VEVPygfMJNSAzMlQocxxTWSgn8LiuKefh4pkCOt2pw1n65QF235JfztpwY4KcIpJ0Tn1yP4Bdiik59Nm_KeVlnKPGK0P02Z8OU17exfGoORJ0V0_8LaX7mAn1yIMq4gK-lw3DFqcaEGV-aYzHAH",
    imageOverlay: {
      text: "Mode Kasir Offline Aktif (Simpan di Memori HP)",
      status: "Zero-Delay Transaksi",
    },
    footerLabel: "Validasi Offline-First Sukses",
    colorAccent: "secondary",
    layout: "image-left",
  },
  {
    id: "route-finder",
    category: "algoritma",
    categoryLabel: "Logistik & Peta Cerdas",
    statusLabel: "Kalkulasi 0.01 Detik",
    title: "Mesin Pencari Rute Tercepat Kawasan Jakarta",
    description:
      "Sistem pemetaan untuk mencari rute paling hemat bensin dan bebas macet di Jakarta. Mampu membandingkan opsi rute jalan raya, jalan tol, dan titik transit kereta komuter dalam sekejap mata untuk efisiensi armada logistik.",
    challenge:
      "Pencarian rute multimoda 14.000 simpul persimpangan Jabodetabek lambat di Python/Node.js (>350ms).",
    solution:
      "C++20 kernel, representasi Compressed Sparse Row (CSR), heuristik A*.",
    highlights: [
      {
        title: "Hemat Biaya Ekspedisi",
        text: "Menghindari jalur putar balik berlebih dan kemacetan parah, menghemat waktu kurir hingga 28%.",
      },
      {
        title: "Kapasitas Skala Besar",
        text: "Sanggup memproses 14.000 titik persimpangan sekaligus tanpa membebani server perusahaan.",
      },
    ],
    metrics: [
      { value: "11.6ms", label: "Waktu Kalkulasi" },
      { value: "2.1 MB", label: "Konsumsi RAM" },
      { value: "14.000+", label: "Titik Simpul" },
    ],
    techStack: [
      "C++ Performance Engine",
      "A* Pathfinding Algorithm",
      "Metropolitan GIS Mapping",
    ],
    lead: "Studio Duo (Skyy & Aris)",
    leadImage: null,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAB7X5kLX3z8gXXYEgp9IjT2dbW38j8oUl91Y-sOnUBBpYm3cxurGUYpBIhxoq2m2-YSuSKJnmTB7XfA3nDRkz8yPPNfGXzFKw_bXfqOYJQlRq_zz1BfvFiGIZfVAPpNlpM0i-UL3oYOnlWAj_NvOiJ7NjPbDTxAijWIZkWAjOHNbbfA6OlBpnPP3xB9GqFMw6F2KXBGFj_hKFiSSEOzDpHqWg-w0VXEEI0lxFB0j7dxYaFVqhWhrz",
    imageOverlay: {
      text: "Jakarta Metro Route Analysis Engine",
      status: "Komputasi Instan",
    },
    footerLabel: "Engine C++ Dioptimasi Penuh",
    colorAccent: "tertiary",
    layout: "text-left",
  },
];

export const portofolioMetrics: readonly PortfolioMetricItem[] = [
  { value: "99.9%", label: "Sistem Selalu Siap", icon: "speed" },
  { value: "<12ms", label: "Super Cepat", icon: "bolt" },
  { value: "100%", label: "Tetap Offline", icon: "wifi_off" },
  { value: "0", label: "Nol Data Hilang", icon: "verified_user" },
];

export const portfolioFilters: readonly PortfolioFilterItem[] = [
  { id: "semua", label: "Semua Karya (3)" },
  { id: "restoran", label: "Restoran & F&B" },
  { id: "ritel", label: "Ritel & Minimarket" },
  { id: "algoritma", label: "Navigasi & Algoritma Kota" },
];

export const sliderProjects: readonly SliderProject[] = [
  {
    id: "tourism-cms",
    title: "Website Pariwisata (CMS)",
    subtitle: "Content Management System",
    description:
      "Platform content management untuk mengelola destinasi wisata, paket tour, galeri foto, dan informasi booking secara dinamis. Dilengkapi panel admin intuitif untuk update konten tanpa sentuh kode.",
    techStack: ["Vue.js", "Node.js", "PostgreSQL", "Docker"],
    category: "Content Management",
    image: "/rancakalong.jpg",
    accentGradient: "bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600",
    icon: "travel_explore",
  },

  {
    id: "finance-monitoring",
    title: "Sistem Monitoring Finance",
    subtitle: "Financial Dashboard & Analytics",
    description:
      "Dashboard monitoring keuangan real-time dengan visualisasi data interaktif, laporan otomatis terjadwal, dan notifikasi anomali transaksi. Membantu pengambilan keputusan bisnis berbasis data.",
    techStack: ["React.js", "Golang", "PostgreSQL", "Docker"],
    category: "Fintech & Dashboard",
    image: "/Sistem_Monitoring_Finance.png",
    accentGradient: "bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600",
    icon: "monitoring",
  },
  {
    id: "hrms-attendance",
    title: "Web Apps HRMS Absensi",
    subtitle: "Human Resource Management System",
    description:
      "Aplikasi manajemen SDM lengkap dengan fitur absensi berbasis GPS, pengajuan cuti online, slip gaji digital, dan rekap kehadiran otomatis. Terintegrasi perhitungan lembur dan BPJS.",
    techStack: ["React.js", "Laravel", "MySQL", "Flutter", "Docker"],
    category: "Enterprise & HR",
    image: "/hrms-mobile-apps.jpg",
    accentGradient: "bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-600",
    icon: "badge",
  },
  {
    id: "isp-billing",
    title: "Sistem Billing Invoices ISP",
    subtitle: "Automated ISP Billing Platform",
    description:
      "Sistem penagihan dan invoicing otomatis untuk Internet Service Provider dengan manajemen pelanggan, reminder tagihan, dan laporan pendapatan bulanan. Terintegrasi dengan router Mikrotik.",
    techStack: ["Vue.js", "Golang", "MySQL", "Docker"],
    category: "Telekomunikasi & Billing",
    image: "/Billing-Invoice_ISP.png",
    accentGradient: "bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500",
    icon: "receipt_long",
  },
  {
    id: "delivery-warehouse",
    title: "Sistem Delivery & Warehouse",
    subtitle: "Logistics Management Platform",
    description:
      "Platform manajemen gudang dan pengiriman terintegrasi dengan tracking armada real-time, optimasi rute delivery, inventory management, dan laporan performa pengiriman harian.",
    techStack: ["React.js", "Golang", "MySQL", "Flutter", "Docker"],
    category: "Logistik & Supply Chain",
    image: "/Delivery-Warehouse.jpg",
    accentGradient: "bg-gradient-to-br from-amber-400 via-orange-500 to-red-500",
    icon: "local_shipping",
  },
];
