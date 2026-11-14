import React from "react";
import { weddingConfig } from "@/config/wedding";
import { Countdown } from "@/components/ui/Countdown";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CountdownSection() {
  return (
    <section id="countdown" className="py-24 px-6 sm:px-8 bg-[#EFE8DC]/30 relative overflow-hidden">
      <ScrollReveal className="max-w-3xl mx-auto text-center">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#B89B72] font-sans font-light mb-3">
          Menghitung Hari
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#453D35] mb-3 tracking-wide">
          Menuju Hari Bahagia
        </h2>
        <p className="text-xs sm:text-sm font-sans text-[#6E6357] font-light max-w-md mx-auto mb-4">
          Kami menantikan kehadiran Anda untuk berbagi sukacita dan doa restu bersama kami.
        </p>

        <SectionDivider variant="minimal" className="my-6" />

        <div className="my-8">
          <Countdown targetDate={weddingConfig.weddingDate} />
        </div>
      </ScrollReveal>
    </section>
  );
}
