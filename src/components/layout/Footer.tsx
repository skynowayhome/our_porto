import Link from "next/link";
import Image from "next/image";
import { logoImage } from "@/data";
import { IconCode, IconBadge, IconMail } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-container mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Brand & Tagline */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 mb-4 group">
              <Image
                alt="Zeki Studio Logo"
                className="h-7 sm:h-8 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                src={logoImage}
                width={659}
                height={567}
                style={{ width: "auto" }}
              />
              <span className="font-headline text-xl tracking-tight font-bold">
                Zeki<span className="text-inverse-primary"> Studio</span>
              </span>
            </Link>
            <p className="text-sm text-inverse-on-surface/70 leading-relaxed">
              Studio rekayasa perangkat lunak modern untuk bisnis yang
              mengutamakan keandalan, kualitas kode bersih, dan hasil kerja yang
              transparan.
            </p>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-inverse-on-surface/50 uppercase tracking-wider font-headline">
              Teknologi Andalan:
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js 14",
                "Tailwind CSS",
                "Flutter Native",
                "PostgreSQL",
                "Docker",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-md bg-inverse-on-surface/10 border border-inverse-on-surface/15 text-inverse-on-surface/80 text-xs font-medium hover:bg-inverse-on-surface/15 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-inverse-on-surface/50 uppercase tracking-wider font-headline">
              Terhubung:
            </span>
            <div className="flex items-center gap-2">
              {[
                {
                  label: "GitHub",
                  IconComponent: IconCode,
                  href: "https://github.com",
                },
                {
                  label: "LinkedIn",
                  IconComponent: IconBadge,
                  href: "https://linkedin.com",
                },
                {
                  label: "Email",
                  IconComponent: IconMail,
                  href: "mailto:hello@zekistudio.dev",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded-lg bg-inverse-on-surface/10 border border-inverse-on-surface/15 text-inverse-on-surface/80 text-xs font-medium hover:bg-inverse-primary/20 hover:text-inverse-primary hover:border-inverse-primary/30 transition-all flex items-center gap-1.5"
                >
                  <social.IconComponent size={16} />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-inverse-on-surface/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-inverse-on-surface/50">
            © {new Date().getFullYear()} Zeki Studio. Seluruh hak
            cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
