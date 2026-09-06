"use client";

import { useState } from "react";
import { FadeInView } from "@/components/ui/FadeInView";
import { contactCategories, budgetOptions } from "@/data";
import { User, MessageCircle, Link, Send, ArrowRight, ShieldCheck, Globe, Smartphone, Wrench, CloudCog, Store, Rocket, Network, Building2, LayoutDashboard, Shield } from "lucide-react";

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case "web": return <Globe className="w-4 h-4 text-primary" />;
    case "smartphone": return <Smartphone className="w-4 h-4 text-primary" />;
    case "dashboard": return <LayoutDashboard className="w-4 h-4 text-primary" />;
    case "shield": return <Shield className="w-4 h-4 text-primary" />;
    default: return <Globe className="w-4 h-4 text-primary" />;
  }
};

const getBudgetIcon = (iconName: string, active: boolean) => {
  const className = `w-6 h-6 mb-2 ${active ? 'text-primary' : 'text-on-surface-variant'}`;
  switch (iconName) {
    case "storefront": return <Store className={className} />;
    case "rocket_launch": return <Rocket className={className} />;
    case "smartphone": return <Smartphone className={className} />;
    case "shield": return <Shield className={className} />;
    default: return <Store className={className} />;
  }
};

export function ContactForm() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedBudget, setSelectedBudget] = useState(1);

  return (
    <FadeInView>
      <div className="rounded-xl bg-surface-container-lowest border border-surface-dim p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <h2 className="font-headline text-lg text-on-surface font-bold">
              Form Diskusi & Rencana Proyek
            </h2>
          </div>

        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Name */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-on-surface">
                Nama Lengkap atau Nama Usaha / Perusahaan
              </label>
              <span className="text-xs text-error font-medium">
                *Wajib diisi
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Contoh: Rian Pratama / Kopi Kawan Studio"
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-surface-dim text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40" />
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-on-surface">
                WhatsApp atau Email (Pilih yang ternyaman untuk Anda)
              </label>
              <span className="text-xs text-on-surface-variant">
                *Untuk kami kirimi estimasi
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Contoh: 0812-3456-7890 atau email@domain.com"
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-surface-dim text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              <MessageCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40" />
            </div>
            <p className="text-xs text-on-surface-variant mt-1.5">
              Kami menjamin nomor WhatsApp & Email Anda bebas dari spam
              atau penawaran liar.
            </p>
          </div>

          {/* Category Selection */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium text-on-surface">
                Apa jenis kebutuhan yang ingin Anda buat?
              </label>
              <span className="text-xs text-primary font-medium">
                Pilih salah satu
              </span>
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
              <label className="text-sm font-medium text-on-surface">
                Ceritakan Kebutuhan Singkat Anda
              </label>
              <span className="text-xs text-on-surface-variant">
                Santai saja, gunakan bahasa sehari-hari
              </span>
            </div>
            <textarea
              rows={4}
              placeholder="Ceritakan ide produk, masalah teknis yang ingin diselesaikan, atau target perkiraan waktu selesai. Jika belum punya gambaran detail, sebutkan saja tujuan utamanya..."
              className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-surface-dim text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
            />
          </div>

          {/* Optional Link */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-on-surface">
                Punya Tautan Dokumen / Mockup Figma? (Opsional)
              </label>
              <span className="text-xs text-on-surface-variant">
                Boleh dikosongkan
              </span>
            </div>
            <div className="relative">
              <input
                type="url"
                placeholder="Contoh link Google Drive, Figma, Notion, atau referensi website lain..."
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-surface-dim text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              <Link className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40" />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-primary text-on-primary font-headline font-semibold text-sm tracking-wide shadow-[0_6px_20px_rgba(39,94,149,0.25)] hover:bg-[#1f4e7d] hover:shadow-[0_8px_25px_rgba(39,94,149,0.32)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            <Send className="w-5 h-5" />
            <span>Kirim Pesan & Dapatkan Rencana Solusi Gratis</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-xs text-on-surface-variant text-center flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Tenang, semua informasi proyek Anda aman. Kami siap tandatangani
            NDA kapan pun dibutuhkan.
          </p>
        </form>
      </div>
    </FadeInView>
  );
}
