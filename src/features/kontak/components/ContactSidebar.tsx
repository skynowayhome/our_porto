import { FadeInView } from "@/components/ui/FadeInView";
import { MessageCircle, ArrowRight, Mail, ExternalLink, Smile, ShieldPlus, ShieldCheck } from "lucide-react";

const getComfortIcon = (iconName: string) => {
  switch (iconName) {
    case "record_voice_over": return <Smile className="w-5 h-5" />;
    case "health_and_safety": return <ShieldPlus className="w-5 h-5" />;
    case "verified_user": return <ShieldCheck className="w-5 h-5" />;
    default: return <Smile className="w-5 h-5" />;
  }
};

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
            <MessageCircle className="w-6 h-6" />
            <div>
              <div>Chat WhatsApp Langsung</div>
              <div className="text-xs text-white/70 font-normal">
                Biasanya dibalas dalam &lt; 15 menit
              </div>
            </div>
            <ArrowRight className="w-5 h-5 ml-auto" />
          </a>

          <a
            href="mailto:zeki.studiodev@gmail.com"
            className="flex items-center gap-3 w-full px-5 py-3 rounded-lg bg-surface-container-low border border-surface-dim text-on-surface hover:border-primary/40 transition-all text-sm"
          >
            <Mail className="w-5 h-5 text-primary" />
            <div>
              <div className="font-medium">zeki.studiodev@gmail.com</div>
              <div className="text-xs text-on-surface-variant">
                Kirim dokumen brief atau proposal
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-on-surface-variant/50 ml-auto" />
          </a>
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
                  {getComfortIcon(item.icon)}
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
