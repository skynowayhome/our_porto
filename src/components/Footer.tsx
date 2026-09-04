import Link from "next/link";
import { logoImage } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-container mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Brand & Tagline */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Skyy Dev Studio Logo"
                className="h-8 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                src={logoImage}
              />
              <span className="font-headline text-xl tracking-tight font-bold">
                SKYY<span className="text-inverse-primary">.DEV</span>
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
                  icon: "code",
                  href: "https://github.com",
                },
                {
                  label: "LinkedIn",
                  icon: "badge",
                  href: "https://linkedin.com",
                },
                {
                  label: "Email",
                  icon: "mail",
                  href: "mailto:hello@skyy.dev",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded-lg bg-inverse-on-surface/10 border border-inverse-on-surface/15 text-inverse-on-surface/80 text-xs font-medium hover:bg-inverse-primary/20 hover:text-inverse-primary hover:border-inverse-primary/30 transition-all flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {social.icon}
                  </span>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-inverse-on-surface/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-inverse-on-surface/50">
            © {new Date().getFullYear()} Skyy & Partner Studio. Seluruh hak
            cipta dilindungi.
          </p>
          <div className="flex items-center gap-2 text-xs text-inverse-on-surface/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Layanan Konsultasi Online Aktif</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
