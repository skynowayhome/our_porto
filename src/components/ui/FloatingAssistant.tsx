"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Sparkles, FolderGit2, ChevronRight } from "lucide-react";
import Link from "next/link";

export function FloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end">
      {/* Expanded Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 16 }}
            transition={{ type: "spring", stiffness: 360, damping: 26 }}
            className="mb-3 w-72 sm:w-80 rounded-2xl bg-surface-container-lowest/95 backdrop-blur-xl border border-surface-dim shadow-2xl p-4 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-surface-dim">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-headline text-xs font-bold text-on-surface">
                  Zeki Studio Online
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
                aria-label="Tutup menu bantuan"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-on-surface-variant my-3 leading-relaxed">
              Ada ide aplikasi atau ingin bertanya soal estimasi waktu dan biaya? Kami siap ngobrol santai!
            </p>

            {/* Quick action buttons */}
            <div className="space-y-2">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Zeki%20Studio!%20Saya%20ingin%20konsultasi%20mengenai%20proyek%20aplikasi."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs font-semibold transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div>Chat WhatsApp Langsung</div>
                    <div className="text-[10px] text-emerald-700 font-normal">
                      Respon dalam &lt; 15 menit
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href="/#simulasi"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface border border-surface-dim text-xs font-medium transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Simulasi Estimasi Proyek</div>
                    <div className="text-[10px] text-on-surface-variant">
                      Hitung timeline & fitur instan
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-on-surface-variant group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/portofolio"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface border border-surface-dim text-xs font-medium transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center shrink-0">
                    <FolderGit2 className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Lihat Contoh Karya</div>
                    <div className="text-[10px] text-on-surface-variant">
                      Karya live & studi kasus
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-on-surface-variant group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-primary text-on-primary font-headline font-semibold text-xs sm:text-sm shadow-[0_6px_24px_rgba(39,94,149,0.35)] hover:bg-[#1f4e7d] transition-all cursor-pointer"
        aria-label="Buka menu konsultasi cepat"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>{isOpen ? "Tutup" : "Tanya Kami 💬"}</span>
      </motion.button>
    </div>
  );
}
