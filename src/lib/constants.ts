// ===== Team Profiles =====
export const teamProfiles = {
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
      { label: "Next.js & React (Web Kilat)", variant: "primary" as const },
      { label: "Tailwind CSS (Desain Modern)", variant: "neutral" as const },
      { label: "Docker & Cloud Staging", variant: "primary" as const },
      { label: "Database Otomatis", variant: "neutral" as const },
      { label: "CodeIgniter & Node.js", variant: "neutral" as const },
    ],
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1VeU-QufriBmqb50Gt-qNWGnccfdYcqDyLw3gwsK0BFGx0OoSxkndLMMhzdFuwCfG_R473HUnmXZH6NA3YY5i0uWNcxFOc8Bo6eSdoTD_VM-J-92jdb6SQD3_jB6nAPb8Tvw_FL4TuuA6gZtyxRMVSGx96MTbgANH-_t2pjTfWPGcXrSGTLJWSYRSIPH7mIlDqueAq2ff4lG39PqKOYn1re9dTgEqQ03YjO3Ci604AMZTh5ACilfcwsx3g",
    colorAccent: "primary" as const,
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
      { label: "Flutter (Android & iOS)", variant: "secondary" as const },
      {
        label: "Offline-First Database (SQLite)",
        variant: "primary" as const,
      },
      {
        label: "Integrasi Printer Kasir & Barcode",
        variant: "neutral" as const,
      },
      { label: "Algoritma Jalur Cepat (C++)", variant: "neutral" as const },
      { label: "Sinkronisasi Otomatis", variant: "neutral" as const },
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWGSoL7lPF_MiQGMUTnlaeACw3Am1c0YgnNof_zwAUa26oM_mVACtHjyMkEJsEtvugFBVQItBd7GqpgbH0mIMsFXDbw0LGddE0IOso-XKptV9OtJrC-lfduc1FwcC5RHSXzJSTk7wjeHr_nHmRjBiy_LNkKiTi-9SOzNPCk2sU_TgYlILnX3NXKUn7bfnc03ygM79mQIN9txHuD6ZVHUKn4IjvGueU93Ex5A-DY8CAOBfMR4Gat3pH",
    colorAccent: "secondary" as const,
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
} as const;

// ===== Services =====
export const services = [
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
    colorAccent: "primary" as const,
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
    colorAccent: "secondary" as const,
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
    colorAccent: "primary" as const,
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
    colorAccent: "tertiary" as const,
    techStack: ["C++20", "Graph Theory", "A* Algorithm", "CSR Matrix"],
  },
] as const;

// ===== Case Studies =====
export const caseStudies = [
  {
    id: "pizza-ordering",
    category: "restoran",
    categoryLabel: "Web Order Restoran",
    statusLabel: "Sudah Beroperasi Live",
    title: "Sistem Pemesanan Pizza Online Cepat & Otomatis",
    description:
      "Aplikasi web bagi pelanggan untuk memilih menu, customize topping, dan pesan antar secara mandiri. Dilengkapi dashboard staf dapur untuk memantau status pesanan antrean secara real-time tanpa resiko order terselip.",
    challenge:
      "Lonjakan pesanan jam sibuk membuat antrean kasir membeku dan database overload.",
    solution:
      "CodeIgniter 4 stripped-kernel di Docker container, fast caching menu in-memory, CI/CD auto-deploy.",
    highlights: [
      {
        title: "Manfaat Bagi Bisnis",
        text: "Antrean pesanan jam makan siang tersusun otomatis, pesanan masuk langsung tercetak di dapur.",
      },
      {
        title: "Performa Website",
        text: "Akses menu tetap responsif & ringan meski diakses ratusan pelanggan serentak.",
      },
    ],
    metrics: [
      { value: "99.9%", label: "Uptime Mesin" },
      { value: "<120ms", label: "Kecepatan Checkout" },
      { value: "0 Error", label: "Data Akurat" },
    ],
    techStack: [
      "CodeIgniter 4",
      "Docker Container",
      "TailwindCSS",
      "Database MySQL",
    ],
    lead: "Skyy",
    leadImage: teamProfiles.skyy.image,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFlpK8Gch6x1oKRaOMsf__hHMKqVBTelHNFXiVnsNr_S1wecPeJqbcTTnRsxiPijmVCV5IuHWecseXIGE9Sp73QEc1bavP3fzYHd7LoauofjoqEkuEbfm1I5ULTWzHcGed-QrZa7qmOtCO9aY7tvmoKKqUarz5xSwZBh1b6KBhkV6aLyGtmMezXj2v96zE5b2n1cjdRKp-K7tHL6IUGsmdrfusEj8coRK8mPynRg3_DfkdJZWxJOGq",
    imageOverlay: {
      text: "Auto-Sync Antrean Pesanan Aktif",
      status: "Status: Lancar 100%",
    },
    footerLabel: "Teruji di Lingkungan Produksi",
    colorAccent: "primary" as const,
    layout: "text-left" as const,
  },
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
    colorAccent: "secondary" as const,
    layout: "image-left" as const,
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
    colorAccent: "tertiary" as const,
    layout: "text-left" as const,
  },
] as const;

// ===== Pricing Models =====
export const pricingModels = [
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
    ctaStyle: "outline" as const,
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
    ctaStyle: "primary" as const,
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
    ctaStyle: "outline" as const,
  },
] as const;

// ===== Tech Stacks =====
export const techStacks = [
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
] as const;

// ===== FAQ Items =====
export const faqItems = [
  {
    number: "01",
    category: "Awal Mula",
    question: "Saya belum punya brief teknis detail, apakah tetap bisa pesan?",
    answer:
      "Tentu saja! Sebagian besar klien kami mulai dari gambaran kasar atau masalah yang ingin diselesaikan. Kami akan membantu merumuskan fitur yang esensial agar anggaran Anda efisien.",
  },
  {
    number: "02",
    category: "Waktu Pengerjaan",
    question: "Berapa lama waktu pengerjaan hingga aplikasi siap rilis?",
    answer:
      "Untuk website atau aplikasi versi perdana (MVP), rata-rata 2 hingga 6 minggu. Anda mendapatkan link demo berkala setiap minggu sehingga dapat melihat progres secara langsung.",
  },
  {
    number: "03",
    category: "Sistem Pembayaran",
    question: "Bagaimana metode pembayaran proyek yang aman?",
    answer:
      "Pembayaran dilakukan bertahap sesuai milestone kemajuan (misal DP 30%, saat versi uji coba 30%, dan pelunasan setelah aplikasi siap jalan). Adil, transparan, dan tidak memberatkan.",
  },
] as const;

// ===== Work Process Steps =====
export const workProcess = [
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
] as const;

// ===== Commitment Values =====
export const commitmentValues = [
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
] as const;

// ===== Navigation Links =====
export const navLinks = [
  { href: "/layanan", label: "Layanan" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/tim", label: "Tim Partner" },
  { href: "/kontak", label: "Kontak & Biaya" },
] as const;

// ===== Contact Categories =====
export const contactCategories = [
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
] as const;

// ===== Budget Options =====
export const budgetOptions = [
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
] as const;

// ===== Hero Metrics (Portofolio Page) =====
export const portofolioMetrics = [
  { value: "99.9%", label: "Sistem Selalu Siap", icon: "speed" },
  { value: "<12ms", label: "Super Cepat", icon: "bolt" },
  { value: "100%", label: "Tetap Offline", icon: "wifi_off" },
  { value: "0", label: "Nol Data Hilang", icon: "verified_user" },
] as const;

// ===== Portfolio Filter Categories =====
export const portfolioFilters = [
  { id: "semua", label: "Semua Karya (3)" },
  { id: "restoran", label: "Restoran & F&B" },
  { id: "ritel", label: "Ritel & Minimarket" },
  { id: "algoritma", label: "Navigasi & Algoritma Kota" },
] as const;

// ===== Logo Image =====
export const logoImage =
  "https://lh3.googleusercontent.com/aida/AEtjO1VZoYeGDsaWWx-emCnKbMMbb2BH3IRWg_iMDTPMuTc-G1VqAoPpFq9qKmbMu1AX4AaC86TF15o3menSb0HP61y-rGQMPWTdOW-yz-q1l6cqCpCviQTEDxrxCear9zyRZOL5RTIZchzzPRQZS4TT0WVGOsLdsOL62Ak3fCNO2beLq5vf7GNpAtn3jwi6m93oZ-VjlUGVoZgpIW6y0sfKdUkzSXLe05ldkKNZPo0opgJp6fBeq-NMWzLXZg";
