import { FadeInView } from "@/components/ui/FadeInView";
import { teamProfiles } from "@/data";

export function ContactSidebar() {
  return (
    <div className="space-y-6">
      {/* Fast Track Panel */}
      <FadeInView delay={0.1} direction="left">
        <div className="rounded-xl bg-surface-container-lowest border border-surface-dim p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider font-headline">
              Respon Cepat (Fast Track)
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-emerald-600 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Online Hari Ini
            </span>
          </div>
          <h3 className="font-headline text-lg text-on-surface font-bold mb-3">
            Mau Ngobrol Langsung Sekarang?
          </h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
            Lebih suka tanya-tanya santai dulu lewat chat? Klik tombol di
            bawah untuk terhubung langsung ke WhatsApp tim developer tanpa
            perantara sales.
          </p>

          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 w-full px-5 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-headline font-semibold text-sm shadow-[0_4px_16px_rgba(16,185,129,0.3)] transition-all mb-4"
          >
            <span className="material-symbols-outlined text-[24px]">
              chat
            </span>
            <div>
              <div>Chat WhatsApp Langsung</div>
              <div className="text-xs text-white/70 font-normal">
                Biasanya dibalas dalam &lt; 15 menit
              </div>
            </div>
            <span className="material-symbols-outlined text-[18px] ml-auto">
              arrow_forward
            </span>
          </a>

          <a
            href="mailto:hello@zekistudio.dev"
            className="flex items-center gap-3 w-full px-5 py-3 rounded-lg bg-surface-container-low border border-surface-dim text-on-surface hover:border-primary/40 transition-all text-sm"
          >
            <span className="material-symbols-outlined text-[20px] text-primary">
              mail
            </span>
            <div>
              <div className="font-medium">hello@zekistudio.dev</div>
              <div className="text-xs text-on-surface-variant">
                Kirim dokumen brief atau proposal
              </div>
            </div>
            <span className="material-symbols-outlined text-[16px] text-on-surface-variant/50 ml-auto">
              open_in_new
            </span>
          </a>
        </div>
      </FadeInView>

      {/* Team Info */}
      <FadeInView delay={0.2} direction="left">
        <div className="rounded-xl bg-surface-container-lowest border border-surface-dim p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider font-headline">
              Arsitektur Teknis Anda
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-emerald-600 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Slot Aktif Tersedia
            </span>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed mb-5">
            Kami bekerja secara terfokus dalam tim studio ringkas. Anda akan
            berdiskusi dan membangun produk langsung bersama para engineer
            utama:
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low border border-surface-dim">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={teamProfiles.skyy.image}
                alt="Skyy"
                className="w-10 h-10 rounded-full object-cover ring-1 ring-primary/30"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-headline text-sm font-bold text-on-surface">
                    Skyy
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-primary text-xs font-semibold">
                    Lead Fullstack
                  </span>
                </div>
                <span className="text-xs text-on-surface-variant">
                  Web Apps, Cloud Architecture, Next.js
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low border border-surface-dim">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={teamProfiles.aris.image}
                alt="Aris"
                className="w-10 h-10 rounded-full object-cover ring-1 ring-secondary/30"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-headline text-sm font-bold text-on-surface">
                    Partner Engineer
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-secondary text-xs font-semibold">
                    Mobile Lead
                  </span>
                </div>
                <span className="text-xs text-on-surface-variant">
                  Flutter, High Performance Engine, API
                </span>
              </div>
            </div>
          </div>
        </div>
      </FadeInView>

      {/* Why Comfortable */}
      <FadeInView delay={0.3} direction="left">
        <div className="rounded-xl bg-surface-container-lowest border border-surface-dim p-6 shadow-sm">
          <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider font-headline block mb-4">
            Kenapa Nyaman Bekerjasama Dengan Kami?
          </span>
          <div className="space-y-4">
            {[
              {
                icon: "record_voice_over",
                title: "Komunikasi Ramah & Bebas Ribet",
                description:
                  "Tak perlu paham koding teknis. Ceritakan kebutuhan bisnis Anda, kami yang rancangkan solusinya dengan transparan.",
              },
              {
                icon: "health_and_safety",
                title: "Garansi Perbaikan & Pendampingan 30 Hari",
                description:
                  "Setelah rilis, kami tetap dampingi dan pastikan sistem berjalan lancar tanpa ada pungutan biaya tambahan.",
              },
              {
                icon: "verified_user",
                title: "Kepemilikan Penuh Milik Anda",
                description:
                  "Source code, database, dan akses akun 100% diserahkan ke Anda tanpa ketergantungan sepihak.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    {item.icon}
                  </span>
                </div>
                <div>
                  <div className="font-headline text-sm text-on-surface font-bold mb-0.5">
                    {item.title}
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInView>
    </div>
  );
}
