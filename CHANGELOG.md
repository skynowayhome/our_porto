# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.4.html).

## [0.2.0] - 2026-11-16

### Added
- **Interactive Project Estimator**: Kalkulator interaktif pemilihan fitur & estimasi biaya/waktu pengerjaan proyek secara real-time.
- **Floating Assistant**: Widget interaktif melayang untuk mempermudah navigasi, aksi cepat, dan konsultasi.
- **High-Five & Animated Counters**: Komponen interaktif perayaan dan counter animasi untuk visualisasi metrik performa.
- **Backend Contact API**: Endpoint `/api/contact` untuk memproses pengiriman pesan formulir konsultasi terintegrasi dengan pengiriman email via Nodemailer.
- **Dokumentasi Gagasan**: Dokumen konsep arsitektur layanan modular dan alur invoice pemesanan (`docs/ideas/modular-service-and-order-invoice.md`).

### Changed
- **Layanan Modular**: Pembaruan struktur pilar layanan dan penyesuaian skema penawaran menjadi modular dan transparan.
- **Pembaruan Halaman Kontak**: Penyempurnaan formulir kontak dengan validasi interaktif, kalkulasi kebutuhan, dan FAQ pendukung.
- **Pembaruan Profil Tim & Portofolio**: Restrukturisasi profil tim manajemen dan alur kerja sama transparan.
- **Pengaturan Gitignore**: Perapihan rule ignore untuk direktori dan file environment agen AI (`.claude/`, `.agents/`).

### Fixed
- Peningkatan konsistensi layout, typography, dan responsivitas elemen UI di berbagai resolusi layar.

---

## [0.1.0] - 2026-09-05

### Added
- Rilis inisial platform portofolio Skyy Partner Studio (Next.js App Router, Tailwind CSS, Framer Motion, Lenis Scroll).
- Halaman Beranda, Layanan, Portofolio, Tim, dan Kontak.
- Integrasi 3D canvas card (Three.js) dan animasi interaktif.
