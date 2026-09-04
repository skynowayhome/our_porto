# Product Requirement Document (PRD) & Project Brief
**Proyek:** Website Studio Rekayasa Perangkat Lunak Skyy & Partner (SKYY.DEV)  
**Status:** Ready for Development / Production Baseline  
**Target Platform:** Web (Desktop & Mobile Responsive)  
**Tema Desain:** Porto Theme (Warm Editorial, Clean, High Usability)  
**Tanggal:** Kuartal 2/3 (Q2/Q3)

---

## 1. Executive Summary & Visi Produk

### 1.1 Latar Belakang
**Skyy & Partner** (`SKYY.DEV`) adalah studio rekayasa perangkat lunak modern yang dikelola langsung oleh dua orang insinyur senior (*Skyy* dan *Aris*). Berbeda dengan agensi tradisional yang sarat dengan birokrasi, *account manager*, atau *outsourcing*, Skyy & Partner mengusung proposisi nilai: **"Langsung Dikerjakan Pembuatnya, Bukan Dilempar Tim Lepas"**.

### 1.2 Tujuan Utama
1. **Membangun Otoritas & Kepercayaan Teknis**: Menampilkan kapabilitas rekayasa perangkat lunak tingkat tinggi (Web, Mobile Offline-First, DevOps, dan Algoritma C++).
2. **Bahasa Ramah & Menjual untuk Klien Bisnis**: Menyajikan kapabilitas teknis dengan gaya komunikasi yang mudah dipahami oleh pemilik bisnis dan founder awam, tanpa kehilangan kredibilitas teknis.
3. **Konversi Proyek yang Terukur**: Mengarahkan pengunjung menjadi lead potensial melalui form brief interaktif dan kanal *fast-track* WhatsApp.

---

## 2. Sasaran Pengguna & Persona

| Kategori Persona | Karakteristik & Kebutuhan | Pain Point Utama | Nilai Solusi Skyy & Partner |
| :--- | :--- | :--- | :--- |
| **Founder / Startup Founder** | Membutuhkan MVP cepat (2–4 minggu), arsitektur siap scale, dan kode yang rapi. | Takut terjebak *vendor lock-in* dan kode yang berantakan saat serah terima. | 100% kepemilikan source code, transfer pengetahuan rapi, dan garansi pasca-rilis. |
| **Pemilik Bisnis Retail / F&B** | Butuh sistem operasional stabil (POS, web reservasi, pencatatan otomatis). | Aplikasi sering down saat ramai atau internet putus di lokasi cabang. | Arsitektur *offline-first* SQLite dan pipeline high-concurrency. |
| **Perusahaan / Enterprise** | Memerlukan optimasi sistem lambat, audit arsitektur, dan integrasi cloud. | Biaya server membengkak dan algoritma internal lemot. | Optimasi C++/native logic, memory profiling, dan Docker automation. |

---

## 3. Arsitektur Informasi & Spesifikasi Halaman

Website ini terdiri dari 5 rute utama yang saling terintegrasi:

```
[ Beranda (/) ]
   ├── [ Layanan (/layanan) ] ── (Fixed Scope / Retainer / Audit)
   ├── [ Portofolio (/portofolio) ] ── (Filter: Web, Mobile, Algo)
   ├── [ Tim (/tim) ] ── (Duo Profile & Nilai Kerjasama)
   └── [ Kontak (/kontak) ] ── (Form Estimasi & WhatsApp Fast Track)
```

### 3.1 Beranda (`/`)
* **Hero Section**: 
  - Headline berorientasi hasil bisnis: *"Bikin Website & Aplikasi Bisnis Jadi Cepat, Menawan, dan Siap Dipakai Jualan"*.
  - Metrik andalan: Super Cepat & Stabil, 100% Hak Milik Anda, Langsung ke Developer.
  - Dual Call-to-Action: `Mulai Konsultasi Proyek` dan `Lihat Contoh Karya`.
* **Lead Duo Card**: Ringkasan singkat profil Skyy & Aris untuk membangun koneksi personal sejak awal.
* **Service Preview**: Ringkasan 4 pilar jasa dengan tombol penelusuran lebih lanjut.
* **Featured Case Studies**: 3 cuplikan proyek unggulan dengan data hasil nyata.
* **Standard Stacks & Tech Guarantee**: Penjelasan teknologi kelas dunia (Next.js, Flutter, SQLite, Docker, C++).
* **Interactive Brief Teaser**: Form ringkas di bagian bawah untuk menjaring kebutuhan mendesak.

### 3.2 Halaman Layanan (`/layanan`)
* **Katalog 4 Pilar Layanan Inti**:
  1. *Website Modern & Dashboard Kendali Bisnis*: Next.js 14 App Router, Server Components, RBAC, kecepatan muat <1 detik.
  2. *Aplikasi Mobile Lancar (Tetap Jalan Tanpa Internet)*: Flutter 3.x, SQLite enkripsi, hardware printer thermal ESC/POS, sinkronisasi background.
  3. *Server Tangguh, Bebas Down & Otomatisasi Cloud*: Docker multi-stage, GitHub Actions CI/CD hermetis, monitoring real-time, SSL A+.
  4. *Solusi Sistem Khusus & Optimasi Rumit*: C++20 / WebAssembly, algoritma rute graf A*, optimasi memori tanpa memory leak.
* **Model Kerjasama & Skema Kontrak**:
  - **Fixed Scope / Sprint MVP** (Mulai Rp 15 Juta / proyek, durasi 2–4 minggu).
  - **Dedicated Engineering Retainer** (Mulai Rp 24 Juta / bulan, alokasi 2 insinyur senior terdedikasi).
  - **Audit Sistem & Code Review** (Mulai Rp 6.5 Juta / sesi, diagnosa bottleneck performa & keamanan).
* **Service Level Agreement (SLA)**: 100% Hak Milik Anda, Garansi Perbaikan Bug 30 Hari, Video Panduan Operasional.

### 3.3 Halaman Portofolio & Studi Kasus (`/portofolio`)
* **Filter Interaktif**: `Semua Karya`, `Restoran & F&B`, `Ritel & Minimarket`, `Navigasi & Algoritma Kota`.
* **Studi Kasus 1: Sistem Pemesanan Pizza Online Multi-Cabang**:
  - *Tantangan*: Lonjakan pesanan jam sibuk membuat antrean kasir membeku dan database overload.
  - *Solusi*: CodeIgniter 4 stripped-kernel di Docker container, fast caching menu in-memory, CI/CD auto-deploy.
  - *Hasil*: Uptime 99.9%, latency checkout <120ms, 0 error order hilang.
* **Studi Kasus 2: Aplikasi POS Minimarket Offline-First**:
  - *Tantangan*: Koneksi internet minimarket pinggiran sering putus mendadak, kasir manual memicu selisih stok.
  - *Solusi*: Flutter + SQLite native di tablet, sync queue background, cetak struk Bluetooth ESC/POS <0.8 detik.
  - *Hasil*: 0 transaksi hilang, penggunaan RAM rendah (<150MB).
* **Studi Kasus 3: Jakarta Route Finder Engine (C++ & Graph Core)**:
  - *Tantangan*: Pencarian rute multimoda 14.000 simpul persimpangan Jabodetabek lambat di Python/Node.js (>350ms).
  - *Solusi*: C++20 kernel, representasi Compressed Sparse Row (CSR), heuristik A*.
  - *Hasil*: Waktu kalkulasi 11.6 milidetik, konsumsi RAM hanya 2.1 MB (hemat biaya cloud hingga 70%).

### 3.4 Halaman Tim (`/tim`)
* **Duo Profile Deep Dive**:
  - **Skyy**: Lead Full-Stack & System Architect (Spesialis Portal Bisnis, Web Dashboard, CI/CD, Database Scalability).
  - **Aris**: Lead Mobile & Algorithmic Engineer (Spesialis Flutter, Offline-First SQLite, Algoritma Graf C++, Hardware POS).
* **Komitmen Kerjasama**:
  - Bicara langsung ke pembuatnya (tanpa sales).
  - Kepemilikan kode 100% mutlak.
  - Garansi pendampingan dan bebas cemas.
  - Transparansi jadwal rilis bertahap setiap 2 minggu.
* **Alur Kerja 4 Tahap**:
  1. *Diskusi Santai & Rencana Sistem* (1-3 hari).
  2. *Pengerjaan & Coba Langsung Versi Awal* (tiap 2 minggu).
  3. *Penyempurnaan & Uji Keamanan*.
  4. *Peluncuran & Serah Terima Kunci*.

### 3.5 Halaman Kontak & Pemesanan (`/kontak`)
* **Formulir Rencana Proyek**:
  - Input: Nama Lengkap / Usaha, Nomor WhatsApp / Email aktif.
  - Pilihan Kategori Kebutuhan (Website/Web App, Aplikasi Mobile, Perbaikan & Optimasi, Cloud & Infra).
  - Estimasi Alokasi Anggaran: `< Rp 5 Juta` (Starter), `Rp 5 - 15 Juta` (Paling Populer), `Rp 15 - 30 Juta` (Pro Scale), `> Rp 30 Juta` (Enterprise).
  - Deskripsi singkat kebutuhan & input tautan dokumen/mockup Figma opsional.
* **Direct Access / Fast-Track**:
  - Tombol langsung WhatsApp (Respon < 15 menit).
  - Email kontak resmi: `hello@skyy.dev`.
  - Indikator kapasitas real-time: *"Slot Tersedia Bulan Ini: 1 Proyek Saja"*.
* **FAQ Interaktif**:
  - Bantuan untuk klien yang belum punya brief teknis detail.
  - Estimasi waktu pengerjaan (2-6 minggu).
  - Skema pembayaran adil bertahap berbasis milestone (DP 30%, uji coba 30%, serah terima 40%).

---

## 4. Spesifikasi Desain & Visual (Design System: Porto Theme)

* **Nuansa Visual**: *Warm Editorial, approachable, trustworthy, and modern studio aesthetic*.
* **Palet Warna**:
  - `surface` (Background Utama): `#fcf9f1` (Warm Ivory)
  - `surface-container-low`: `#f6f3eb` (Cream)
  - `surface-container`: `#f1eee6` (Card Border & Divider tone: `#dddad2`)
  - `primary` (Aksen Utama & Tombol): `#477ab3` (Porto Blue)
  - `on-primary` (Teks Tombol): `#ffffff`
  - `on-surface` (Heading & Body Text): `#1e2530` (Charcoal Slate berlatar kontras tinggi)
  - `success` (Status Online / Badge): `#10b981` (Emerald Green)
* **Tipografi**:
  - Font Family: **IBM Plex Sans**
  - Skala Hirarki:
    - Display / H1: 36px - 44px (Font Weight: 800)
    - H2 / Sub-headline: 24px - 28px (Font Weight: 700)
    - H3 / Card Title: 18px - 20px (Font Weight: 600)
    - Body Text: 14px - 15px (Font Weight: 400 - 500, Line Height: 1.6)
    - Microcopy / Tag: 11px - 12px (Font Weight: 600, All-Caps tracking)
* **Komponen & Roundness**: `ROUND_EIGHT` (border radius 8px - 12px untuk card, tombol, dan form input).

---

## 5. Web Deployment & Production Assets

Dokumen dan aset siap rilis telah tersedia di DataStore:
1. **Favicon**: File 512x512 PNG (`{{DATA:IMAGE:IMAGE_8}}`) dengan simbol panah pertumbuhan Porto Blue di atas background ivory solid.
2. **Apple Touch Icon**: File 1024x1024 PNG (`{{DATA:IMAGE:IMAGE_7}}`) berlogo arsitektur digital untuk layar iOS/Android.
3. **Web App Manifest**: Berkas konfigurasi PWA standar (`{{DATA:DOCUMENT:DOCUMENT_6}}`) lengkap dengan skema tema `#fcf9f1` dan `#477ab3`.

---

## 6. Rekomendasi Tech Stack untuk Implementasi

* **Framework Frontend**: Next.js 14 (App Router) + React 18
* **Styling**: Tailwind CSS dengan kustomisasi token warna Porto Theme
* **Form & Validation**: React Hook Form + Zod
* **Notifikasi & Lead Routing**: Integrasi webhook ke Discord/Slack & WhatsApp API Gateway
* **Deployment Platform**: Vercel / Cloudflare Pages dengan domain kustom `skyy.dev`
* **Analytics**: Plausible Analytics atau Google Analytics 4 (privacy-friendly)

---

## 7. Timeline & Rencana Peluncuran (Launch Checklist)

| Fase | Durasi | Target Capaian |
| :--- | :--- | :--- |
| **Fase 1: Setup & Slice UI** | 3 - 5 Hari | Setup repo Next.js, implementasi layout global (Navbar & Footer), dan slicing 5 halaman sesuai prototipe Canvas. |
| **Fase 2: Integrasi Interaktivitas** | 2 - 3 Hari | Integrasi formulir kontak ke email & WhatsApp direct, animasi hover/transisi halus, dan filter portofolio. |
| **Fase 3: SEO, PWA & Meta Tag** | 1 - 2 Hari | Injeksi Favicon, Apple Touch Icon, `manifest.json`, OpenGraph preview, dan optimasi Core Web Vitals (LCP < 1.2s). |
| **Fase 4: Testing & Production Launch** | 1 Hari | Uji kompatibilitas multi-browser/mobile, audit Lighthouse (skor 95+), dan rilis publik ke domain utama. |
