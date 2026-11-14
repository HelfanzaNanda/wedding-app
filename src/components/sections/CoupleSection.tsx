import React from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function CoupleSection() {
  const { bride, groom } = weddingConfig;

  return (
    <section id="couple" className="py-24 px-6 sm:px-8 bg-[#EFE8DC]/40 relative">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#B89B72] font-sans font-light mb-3">
            Mempelai
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#453D35] font-light tracking-wide">
            Kedua Mempelai
          </h2>
          <SectionDivider variant="diamond" />
        </ScrollReveal>

        {/* Editorial Couple Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Bride Profile */}
          <ScrollReveal delay={0.1} className="flex flex-col items-center text-center">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-t-full rounded-b-2xl overflow-hidden shadow-xl border-4 border-white mb-6">
              <Image
                src={bride.photo}
                alt={bride.fullName}
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#453D35] mb-2 font-light tracking-wide">
              {bride.fullName}
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#6E6357] mb-1 font-light">
              {bride.childOrder}
            </p>
            <p className="text-sm sm:text-base font-serif font-normal text-[#453D35] mb-4">
              {bride.fatherName} &amp; {bride.motherName}
            </p>

            {bride.instagram && (
              <a
                href={bride.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#EFE8DC] border border-[#B89B72]/30 text-xs font-sans text-[#453D35] hover:text-[#B89B72] hover:border-[#B89B72] transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>{bride.instagramHandle}</span>
              </a>
            )}
          </ScrollReveal>

          {/* Groom Profile */}
          <ScrollReveal delay={0.2} className="flex flex-col items-center text-center">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-t-full rounded-b-2xl overflow-hidden shadow-xl border-4 border-white mb-6">
              <Image
                src={groom.photo}
                alt={groom.fullName}
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#453D35] mb-2 font-light tracking-wide">
              {groom.fullName}
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#6E6357] mb-1 font-light">
              {groom.childOrder}
            </p>
            <p className="text-sm sm:text-base font-serif font-normal text-[#453D35] mb-4">
              {groom.fatherName} &amp; {groom.motherName}
            </p>

            {groom.instagram && (
              <a
                href={groom.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#EFE8DC] border border-[#B89B72]/30 text-xs font-sans text-[#453D35] hover:text-[#B89B72] hover:border-[#B89B72] transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>{groom.instagramHandle}</span>
              </a>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
