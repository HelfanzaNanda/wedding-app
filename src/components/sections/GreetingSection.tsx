import React from "react";
import { weddingConfig } from "@/config/wedding";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function GreetingSection() {
  const { introGreeting, greetingVerse } = weddingConfig;

  return (
    <section className="py-24 px-6 sm:px-8 bg-[#F9F6F0] relative overflow-hidden">
      <ScrollReveal className="max-w-2xl mx-auto text-center">
        {/* Bismillah */}
        <p className="text-xl sm:text-2xl text-[#B89B72] tracking-wider mb-4 font-normal">
          {introGreeting.bismillah}
        </p>

        {/* Salam */}
        <h2 className="font-serif text-lg sm:text-xl font-normal text-[#453D35] mb-4 tracking-wide">
          {introGreeting.greeting}
        </h2>

        {/* Intro sentence */}
        <p className="font-sans text-xs sm:text-sm text-[#6E6357] leading-relaxed max-w-xl mx-auto font-light">
          {introGreeting.paragraph}
        </p>

        <SectionDivider variant="floral" />

        {/* Quran Verse */}
        {greetingVerse && (
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#EFE8DC]/50 border border-[#B89B72]/20 backdrop-blur-xs">
            <p className="text-base sm:text-lg text-[#453D35] leading-loose mb-4 dir-rtl text-right sm:text-center font-serif">
              {greetingVerse.arabic}
            </p>
            <p className="font-sans text-xs sm:text-[13px] text-[#6E6357] italic leading-relaxed mb-3 font-light">
              &ldquo;{greetingVerse.translation}&rdquo;
            </p>
            <p className="font-sans text-[10px] sm:text-xs font-normal tracking-[0.25em] text-[#B89B72] uppercase">
              {greetingVerse.surah}
            </p>
          </div>
        )}
      </ScrollReveal>
    </section>
  );
}
