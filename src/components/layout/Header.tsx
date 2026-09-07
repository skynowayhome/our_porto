"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, logoImage } from "@/data";
import { IconChat, IconMenu, IconClose } from "@/components/ui/Icons";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fcf9f1]/85 backdrop-blur-xl border-b border-surface-dim shadow-[0_2px_15px_rgba(28,28,23,0.04)]">
      <div className="h-20 max-w-container mx-auto px-5 sm:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 group"
          >
            <Image
              alt="Zeki Studio Logo"
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
              src={logoImage}
              width={659}
              height={567}
              priority
              style={{ width: "auto" }}
            />
            <span className="font-headline text-xl sm:text-2xl tracking-tight text-on-surface font-bold">
              Zeki<span className="text-primary font-bold"> Studio</span>
            </span>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 font-headline text-sm">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(`${link.href}/`));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container/60"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20 shadow-xs"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  )}
                  {link.label}
                </span>
              </Link>
            );
          })}
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
            <nav className="flex flex-col p-5 gap-1.5">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(`${link.href}/`));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-lg font-headline text-sm transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary"
                        : "text-on-surface font-medium hover:bg-surface-container-low hover:text-primary"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    )}
                  </Link>
                );
              })}
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
