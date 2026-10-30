"use client";

import { useState } from "react";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { faqItems } from "@/data";
import { Lightbulb, Clock, CreditCard, ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const getFaqIcon = (iconName: string) => {
  switch (iconName) {
    case "lightbulb":
      return <Lightbulb className="w-4 h-4" />;
    case "schedule":
      return <Clock className="w-4 h-4" />;
    case "payments":
      return <CreditCard className="w-4 h-4" />;
    default:
      return <HelpCircle className="w-4 h-4" />;
  }
};

export function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="max-w-container mx-auto px-5 sm:px-8 py-14 sm:py-18">
      <FadeInView>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <SectionBadge label="Tanya Jawab Singkat" />
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-extrabold tracking-tight mt-1">
            Semua yang Perlu Anda Ketahui Sebelum Memulai
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base mt-2">
            Kami menjunjung tinggi kejelasan sejak awal agar Anda merasa tenang
            dan percaya diri berkolaborasi bersama kami.
          </p>
        </div>
      </FadeInView>

      <FadeInView delay={0.1}>
        <div className="max-w-3xl mx-auto space-y-3.5">
          {faqItems.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.number}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-surface-container-lowest border-primary/40 shadow-md ring-1 ring-primary/20"
                    : "bg-surface-container-lowest/80 border-surface-dim hover:border-outline-variant hover:bg-surface-container-lowest"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-primary text-on-primary"
                          : "bg-primary-fixed text-primary"
                      }`}
                    >
                      {getFaqIcon(faq.icon || "")}
                    </span>
                    <div>
                      <span className="text-[11px] font-bold text-primary uppercase tracking-wider font-headline">
                        {faq.category}
                      </span>
                      <h3 className="font-headline text-base sm:text-lg font-bold text-on-surface leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant shrink-0"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-sm text-on-surface-variant leading-relaxed border-t border-surface-dim/50 ml-12 sm:ml-13">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </FadeInView>
    </section>
  );
}
