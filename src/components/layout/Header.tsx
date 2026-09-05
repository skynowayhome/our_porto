"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, logoImage } from "@/data";
import { IconChat, IconMenu, IconClose } from "@/components/ui/Icons";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fcf9f1]/85 backdrop-blur-xl border-b border-surface-dim shadow-[0_2px_15px_rgba(28,28,23,0.04)]">
      <div className="h-20 max-w-container mx-auto px-5 sm:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Zeki Studio Logo"
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
              src={logoImage}
            />
            <span className="font-headline text-xl sm:text-2xl tracking-tight text-on-surface font-bold">
              Zeki<span className="text-primary font-bold"> Studio</span>
            </span>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-headline text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA & Avatar */}
        <div className="flex items-center gap-3.5">
          <Link
            href="/kontak"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-headline font-semibold text-sm shadow-[0_2px_12px_rgba(39,94,149,0.22)] hover:bg-[#1f4e7d] hover:shadow-[0_4px_18px_rgba(39,94,149,0.3)] active:scale-95 transition-all duration-200"
          >
            <span>Konsultasi Gratis</span>
            <IconChat size={18} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-surface-container transition-colors text-on-surface flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <IconClose size={24} /> : <IconMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-surface-container-lowest border-t border-surface-dim overflow-hidden"
          >
            <nav className="flex flex-col p-5 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 rounded-lg text-on-surface hover:bg-surface-container-low hover:text-primary font-headline font-medium text-sm transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kontak"
                className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-on-primary font-headline font-semibold text-sm shadow-[0_2px_12px_rgba(39,94,149,0.22)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <IconChat size={18} />
                <span>Mulai Konsultasi Gratis</span>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
