# Blueprint: Redesain Layanan Modular & Alur Pemesanan Terarah

## 1. Problem Statement
Bagaimana menyelaraskan seluruh komunikasi dan struktur layanan website menjadi 4 pilar transparan (Website, WebApps, Mobile, dan Project Planner SRS/PRD/UML modular), serta mengarahkan pemesanan secara terstruktur ke WhatsApp hingga penerbitan invoice resmi setelah kesepakatan ruang lingkup?

## 2. Struktur 4 Pilar Layanan yang Selaras
1. **Website Bisnis & Landing Page Profesional**
   - Target: Profil usaha, portofolio, landing page promosi cepat & ramah SEO.
   - Deliverables: Source code (Next.js/React/Tailwind), setup domain & hosting, integrasi analytics & WhatsApp.
2. **WebApps & Sistem Operasional Bisnis**
   - Target: Sistem kasir (POS), stok inventaris, CRM, sistem kelola data internal.
   - Deliverables: Dashboard admin responsif, role-based user management, API & database (PostgreSQL/MySQL), manual book.
3. **Aplikasi Mobile (Android & iOS)**
   - Target: Aplikasi operasional lapangan, katalog digital, aplikasi offline-first.
   - Deliverables: 1 Codebase Flutter (Android & iOS), file build APK/IPA, fitur cetak printer bluetooth/kamera, panduan instalasi.
4. **Project Planner & Arsitektur Sistem (SRS, PRD, & UML Modular)**
   - *Menggantikan Audit DevSecOps*
   - Target: Mahasiswa/pelajar (tugas akhir/skripsi), pemilik bisnis, dan developer yang butuh cetak biru sebelum koding.
   - Deliverables: Dokumen PRD/SRS standar, file dokumen PDF, file editable (.drawio / .plantuml), dan diagram UML sesuai pilihan bebas klien.

## 3. Alur Pemesanan & Komunikasi (End-to-End)
1. **Klien Menjelajahi Layanan:** Klien melihat rincian konkret *benefit* dan *apa yang didapat* (deliverables).
2. **Pemesanan Terarah (Order Form):**
   - Klien memilih layanan utama.
   - Jika memilih *Project Planner*, muncul checklist bebas diagram UML & jenis dokumen.
   - Klien mengisi ringkasan kebutuhan & kontak (WhatsApp/Email).
3. **Koneksi Cepat WhatsApp:**
   - Saat form disubmit, data tersimpan/terkirim ke email, sekaligus menghasilkan link langsung ke WhatsApp Anda dengan draf pesan yang sudah terisi rapi sesuai pilihan mereka.
4. **Diskusi & Finalisasi Scope (WhatsApp):**
   - Kedua belah pihak mematangkan rincian fitur dan timeline.
5. **Penerbitan Invoice Kesepakatan:**
   - Penerbitan Invoice resmi (nomor SPK, daftar rincian fitur yang disepakati, termin DP 30%, rekening transfer).

