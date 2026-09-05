import { FadeInView } from "@/components/ui/FadeInView";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { faqItems } from "@/data";

export function ContactFaq() {
  return (
    <section className="max-w-container mx-auto px-5 sm:px-8 py-16">
      <FadeInView>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionBadge label="Pertanyaan Umum" />
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
            Semua yang Perlu Anda Ketahui Sebelum Memulai
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base mt-2">
            Kami menjunjung tinggi kejelasan sejak awal agar Anda merasa tenang
            dan percaya diri berkolaborasi.
          </p>
        </div>
      </FadeInView>

      <FadeInView delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {faqItems.map((faq) => (
            <div
              key={faq.number}
              className="rounded-xl bg-surface-container-lowest border border-surface-dim p-6 sm:p-8 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-full bg-primary-fixed text-primary flex items-center justify-center text-xs font-bold">
                  {faq.number}
                </span>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider font-headline">
                  {faq.category}
                </span>
              </div>
              <h3 className="font-headline text-base text-on-surface font-bold mb-3">
                {faq.question}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </FadeInView>
    </section>
  );
}
