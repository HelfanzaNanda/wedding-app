import React from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ClosingSection() {
  const { bride, groom, closingImage } = weddingConfig;

  return (
    <section className="relative py-28 px-6 sm:px-8 bg-[#F9F6F0] overflow-hidden text-center">
      {/* Background Decorative Image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={closingImage}
          alt="Closing Background"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.4] contrast-[0.95]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/70" />
      </div>

      <ScrollReveal className="relative z-10 max-w-2xl mx-auto text-white">
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] font-sans text-[#EFE8DC]/90 mb-4 font-light">
          Ungkapan Terima Kasih
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white mb-6">
          Terima Kasih
        </h2>

        <p className="text-xs sm:text-sm font-sans text-[#EFE8DC]/85 leading-relaxed mb-6 max-w-lg mx-auto font-light">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga
          apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu
          kepada kami.
        </p>

        <SectionDivider variant="minimal" className="my-8 text-[#B89B72]" />

        <div className="space-y-2 mt-8">
          <p className="text-[11px] sm:text-xs font-sans tracking-[0.25em] text-[#EFE8DC]/80 uppercase font-light">
            Kami yang berbahagia,
          </p>
          <h3 className="text-4xl sm:text-5xl font-serif font-light text-white tracking-wider">
            <span className="italic">{bride.name}</span> &amp; <span className="italic">{groom.name}</span>
          </h3>
          <p className="text-xs sm:text-sm font-sans tracking-[0.2em] text-[#D4C3A3] pt-2 uppercase font-light">
            Beserta Seluruh Keluarga Besar
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-[11px] sm:text-xs text-white/50 font-sans tracking-wider">
          &copy; {new Date().getFullYear()} {bride.name} &amp; {groom.name}. All
          Rights Reserved.
        </div>
      </ScrollReveal>
    </section>
  );
}
