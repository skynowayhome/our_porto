"use client";

import { ContactHero } from "./components/ContactHero";
import { ContactForm } from "./components/ContactForm";
import { ContactSidebar } from "./components/ContactSidebar";
import { ContactFaq } from "./components/ContactFaq";

export function ContactView() {
  return (
    <div className="flex flex-col w-full">
      <ContactHero />

      {/* Main Form & Sidebar Section */}
      <section className="max-w-container mx-auto px-5 sm:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <ContactSidebar />
          </div>
        </div>
      </section>

      <ContactFaq />
    </div>
  );
}
