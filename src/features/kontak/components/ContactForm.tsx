"use client";

import { useState } from "react";
import { FadeInView } from "@/components/ui/FadeInView";
import { contactCategories, budgetOptions } from "@/data";
import {
  User,
  MessageCircle,
  Link,
  Send,
  ArrowRight,
  ShieldCheck,
  Globe,
  Smartphone,
  LayoutDashboard,
  Shield,
  Store,
  Rocket,
  Mail,
  CheckCircle2,
  Loader2,
  AlertCircle,
  RotateCcw,
} from "lucide-react";

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case "web":
      return <Globe className="w-4 h-4 text-primary" />;
    case "smartphone":
      return <Smartphone className="w-4 h-4 text-primary" />;
    case "dashboard":
      return <LayoutDashboard className="w-4 h-4 text-primary" />;
    case "shield":
      return <Shield className="w-4 h-4 text-primary" />;
    default:
      return <Globe className="w-4 h-4 text-primary" />;
  }
};

const getBudgetIcon = (iconName: string, active: boolean) => {
  const className = `w-6 h-6 mb-2 ${
    active ? "text-primary" : "text-on-surface-variant"
  }`;
  switch (iconName) {
    case "storefront":
      return <Store className={className} />;
    case "rocket_launch":
      return <Rocket className={className} />;
    case "smartphone":
      return <Smartphone className={className} />;
    case "shield":
      return <Shield className={className} />;
    default:
      return <Store className={className} />;
  }
};

export function ContactForm() {
  const [name, setName] = useState("");
  const [contactType, setContactType] = useState<"whatsapp" | "email" | "both">("whatsapp");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedBudget, setSelectedBudget] = useState(1);
  const [description, setDescription] = useState("");
  const [projectLink, setProjectLink] = useState("");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setStatus("error");
      setErrorMessage("Mohon isi Nama Lengkap atau Nama Usaha Anda.");
      return;
    }

    if ((contactType === "email" || contactType === "both") && !email.trim()) {
      setStatus("error");
      setErrorMessage("Mohon isi Alamat Email yang valid untuk pengiriman estimasi.");
      return;
    }

    if ((contactType === "whatsapp" || contactType === "both") && !whatsapp.trim()) {
      setStatus("error");
      setErrorMessage("Mohon isi Nomor WhatsApp Anda.");
      return;
    }

    if (!description.trim()) {
      setStatus("error");
      setErrorMessage("Mohon ceritakan sedikit tentang rencana proyek atau kebutuhan sistem Anda.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const payload = {
        name,
        contactType,
        email: email.trim() || undefined,
        whatsapp: whatsapp.trim() || undefined,
        category: contactCategories[selectedCategory]?.label,
        budget: `${budgetOptions[selectedBudget]?.label} (${budgetOptions[selectedBudget]?.tag})`,
        description,
        projectLink: projectLink.trim() || undefined,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Terjadi kendala saat mengirimkan pesan.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Gagal terhubung ke server email. Silakan hubungi kami via WhatsApp langsung."
      );
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setWhatsapp("");
    setDescription("");
    setProjectLink("");
    setStatus("idle");
    setErrorMessage("");
  };

  const cleanWaNumber = whatsapp ? whatsapp.replace(/[^0-9]/g, "") : "";
  const directWaText = encodeURIComponent(
    `Halo Tim Zeki Studio, saya ${name || "Klien"}. Saya baru saja mengirim form rencana proyek untuk "${
      contactCategories[selectedCategory]?.label
    }". Ingin memastikan pesan sudah diterima.`
  );

  return (
    <FadeInView>
      <div className="rounded-xl bg-surface-container-lowest border border-surface-dim p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h2 className="font-headline text-lg text-on-surface font-bold">
              Form Diskusi & Rencana Proyek
            </h2>
          </div>
          <span className="text-xs text-on-surface-variant font-medium hidden sm:inline-block">
            Garansi Balas &lt; 24 Jam
          </span>
        </div>

        {status === "success" ? (
          <div className="py-8 px-4 text-center flex flex-col items-center animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4 text-emerald-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-on-surface mb-2">
              Pesan Berhasil Terkirim ke Tim Developer!
            </h3>
            <p className="text-sm text-on-surface-variant max-w-md mb-6 leading-relaxed">
              Terima kasih, <strong className="text-on-surface">{name}</strong>. Rencana proyek Anda sudah masuk ke email tim kami. Skyy & Aris akan meninjau dan mengirimkan estimasi ke kontak Anda.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
              <a
                href={`https://wa.me/6281234567890?text=${directWaText}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konfirmasi via WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-surface-container-low hover:bg-surface-container border border-surface-dim text-on-surface text-sm font-medium transition-all"
              >
                <RotateCcw className="w-4 h-4 text-on-surface-variant" />
                <span>Kirim Pesan Baru</span>
              </button>
            </div>
          </div>
        ) : (
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            autoComplete="on"
            suppressHydrationWarning
          >
            {/* Error Alert */}
            {status === "error" && errorMessage && (
              <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Perhatian</div>
                  <div>{errorMessage}</div>
                </div>
              </div>
            )}

            {/* Name */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="client-name" className="text-sm font-medium text-on-surface">
                  Nama Lengkap atau Nama Usaha / Perusahaan
                </label>
                <span className="text-xs text-error font-medium">*Wajib diisi</span>
              </div>
              <div className="relative">
                <input
                  id="client-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Rian Pratama / Kopi Kawan Studio"
                  className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-surface-dim text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40 pointer-events-none" />
              </div>
            </div>

            {/* Contact Method Selector (Separated WhatsApp & Email) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-on-surface">
                  Pilih Saluran Kontak Pengiriman Estimasi
                </label>
                <span className="text-xs text-primary font-medium">Pilih salah satu</span>
              </div>

              {/* Segmented Selector */}
              <div className="grid grid-cols-3 gap-2 p-1 bg-surface-container-low rounded-lg border border-surface-dim mb-3">
                <button
                  type="button"
                  onClick={() => setContactType("whatsapp")}
                  className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs sm:text-sm font-medium transition-all ${
                    contactType === "whatsapp"
                      ? "bg-white text-emerald-700 shadow-sm border border-emerald-200 font-semibold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => setContactType("email")}
                  className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs sm:text-sm font-medium transition-all ${
                    contactType === "email"
                      ? "bg-white text-primary shadow-sm border border-primary/20 font-semibold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span>Email</span>
                </button>

                <button
                  type="button"
                  onClick={() => setContactType("both")}
                  className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs sm:text-sm font-medium transition-all ${
                    contactType === "both"
                      ? "bg-white text-on-surface shadow-sm border border-surface-dim font-semibold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  <span>Keduanya</span>
                </button>
              </div>

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(contactType === "whatsapp" || contactType === "both") && (
                  <div className={contactType === "whatsapp" ? "sm:col-span-2" : ""}>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="client-whatsapp" className="text-xs font-semibold text-on-surface flex items-center gap-1">
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                        Nomor WhatsApp
                      </label>
                      <span className="text-[11px] text-error">*Wajib</span>
                    </div>
                    <div className="relative">
                      <input
                        id="client-whatsapp"
                        type="tel"
                        autoComplete="tel"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="Contoh: 0812-3456-7890"
                        className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low border border-surface-dim text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"
                      />
                    </div>
                  </div>
                )}

                {(contactType === "email" || contactType === "both") && (
                  <div className={contactType === "email" ? "sm:col-span-2" : ""}>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="client-email" className="text-xs font-semibold text-on-surface flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-primary" />
                        Alamat Email
                      </label>
                      <span className="text-[11px] text-error">*Wajib</span>
                    </div>
                    <div className="relative">
                      <input
                        id="client-email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Contoh: nama@perusahaan.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low border border-surface-dim text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                )}
              </div>

              <p className="text-xs text-on-surface-variant mt-2">
                🔒 Data kontak Anda terjamin aman dan bebas dari spam promosi atau penawaran liar.
              </p>
            </div>

            {/* Category Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-on-surface">
                  Apa jenis kebutuhan yang ingin Anda buat?
                </label>
                <span className="text-xs text-primary font-medium">Pilih salah satu</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {contactCategories.map((cat, index) => (
                  <button
                    key={cat.label}
                    type="button"
                    onClick={() => setSelectedCategory(index)}
                    className={`flex items-start gap-3 p-4 rounded-lg border text-left transition-all ${
                      selectedCategory === index
                        ? "bg-primary-fixed/30 border-primary/40 ring-2 ring-primary/20"
                        : "bg-surface-container-low border-surface-dim hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          selectedCategory === index
                            ? "border-primary"
                            : "border-outline"
                        }`}
                      >
                        {selectedCategory === index && (
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-0.5">
                        {getCategoryIcon(cat.icon)}
                        <span className="text-sm font-medium text-on-surface">
                          {cat.label}
                        </span>
                      </div>
                      <span className="text-xs text-on-surface-variant">
                        {cat.description}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-on-surface">
                  Pilihan Paket Layanan
                </label>
                <span className="text-xs text-on-surface-variant">
                  Sesuai dengan skala bisnis Anda
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {budgetOptions.map((option, index) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => setSelectedBudget(index)}
                    className={`flex flex-col items-center p-3 rounded-lg border text-center transition-all ${
                      selectedBudget === index
                        ? "bg-primary-fixed/30 border-primary/40 ring-2 ring-primary/20"
                        : "bg-surface-container-low border-surface-dim hover:border-primary/30"
                    }`}
                  >
                    {option.icon && getBudgetIcon(option.icon, selectedBudget === index)}
                    <div className="font-headline text-sm font-bold text-on-surface mb-0.5">
                      {option.label}
                    </div>
                    <div className="text-xs text-on-surface-variant">
                      {option.description}
                    </div>
                    <span
                      className={`inline-block mt-2 px-2 py-0.5 rounded-full text-xs font-semibold ${
                        "popular" in option && option.popular
                          ? "bg-primary text-on-primary"
                          : "bg-surface-container-high text-on-surface-variant"
                      }`}
                    >
                      {option.tag}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="client-description" className="text-sm font-medium text-on-surface">
                  Ceritakan Kebutuhan Singkat Anda
                </label>
                <span className="text-xs text-on-surface-variant">
                  Santai saja, gunakan bahasa sehari-hari
                </span>
              </div>
              <textarea
                id="client-description"
                rows={4}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ceritakan ide produk, masalah teknis yang ingin diselesaikan, atau target perkiraan waktu selesai. Jika belum punya gambaran detail, sebutkan saja tujuan utamanya..."
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-surface-dim text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
              />
            </div>

            {/* Optional Link */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="client-project-link" className="text-sm font-medium text-on-surface">
                  Punya Tautan Dokumen / Mockup Figma? (Opsional)
                </label>
                <span className="text-xs text-on-surface-variant">Boleh dikosongkan</span>
              </div>
              <div className="relative">
                <input
                  id="client-project-link"
                  type="url"
                  value={projectLink}
                  onChange={(e) => setProjectLink(e.target.value)}
                  placeholder="Contoh link Google Drive, Figma, Notion, atau referensi website lain..."
                  className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-surface-dim text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <Link className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40 pointer-events-none" />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-primary text-on-primary font-headline font-semibold text-sm tracking-wide shadow-[0_6px_20px_rgba(39,94,149,0.25)] hover:bg-[#1f4e7d] hover:shadow-[0_8px_25px_rgba(39,94,149,0.32)] hover:-translate-y-0.5 active:scale-95 disabled:opacity-60 disabled:pointer-events-none transition-all duration-200 cursor-pointer"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Mengirimkan Pesan ke Tim...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Kirim Pesan & Dapatkan Rencana Solusi Gratis</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-xs text-on-surface-variant text-center flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Tenang, semua informasi proyek Anda aman. Kami siap tandatangani NDA kapan pun dibutuhkan.
            </p>
          </form>
        )}
      </div>
    </FadeInView>
  );
}
