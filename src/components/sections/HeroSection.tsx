import React from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";

export function HeroSection() {
  const { events } = weddingConfig;
  return (
    <section className="relative min-h-[95vh] sm:min-h-screen flex items-center justify-center overflow-hidden py-24 px-6 bg-[#F9F6F0]">
      {/* Background with curated wedding image and rich warm editorial overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={weddingConfig.heroImage}
          alt="Wedding Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%] filter brightness-[0.66] contrast-[1.02]"
        />
        {/* Refined warmer tones: deep espresso to warm umber and champagne mist */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b1510]/65 via-[#2b221a]/40 to-[#1e1712]/85" />
        <div className="absolute inset-0 bg-[#4a3b2c]/25 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#B89B72]/10 mix-blend-overlay" />
      </div>

      {/* Subtle luxury editorial frame border */}
      <div className="absolute inset-4 sm:inset-8 md:inset-12 border border-[#EFE8DC]/15 pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4 flex flex-col items-center justify-center">
        {/* Understated Top Tagline */}
        <p className="text-[11px] sm:text-xs font-sans font-light tracking-[0.45em] uppercase text-[#EFE8DC]/85 mb-7 sm:mb-9">
          The Wedding Of
        </p>

        {/* Primary Visual Focal Point: Refined Bodoni Moda Couple Names (reduced ~6% for editorial elegance) */}
        <div className="my-1 sm:my-2 select-none flex flex-col items-center">
          <div className="overflow-hidden">
            <span className="block text-[44px] sm:text-[68px] md:text-[78px] lg:text-[88px] font-serif font-normal tracking-tight leading-[0.98] text-white drop-shadow-xs">
              {weddingConfig.bride.name}
            </span>
          </div>

          {/* Ampersand: smaller, delicate italic in champagne gold (#B89B72) */}
          <div className="flex items-center justify-center py-1 sm:py-1.5 my-0.5">
            <span className="font-serif italic font-normal text-xl sm:text-2xl md:text-[26px] text-[#B89B72] tracking-wider select-none opacity-95">
              &amp;
            </span>
          </div>

          <div className="overflow-hidden">
            <span className="block text-[44px] sm:text-[68px] md:text-[78px] lg:text-[88px] font-serif font-normal tracking-tight leading-[0.98] text-white drop-shadow-xs">
              {weddingConfig.groom.name}
            </span>
          </div>
        </div>

        {/* Minimal Editorial Divider */}
        <div className="flex items-center justify-center space-x-3.5 my-7 sm:my-9 opacity-65">
          <div className="h-[1px] w-10 sm:w-14 bg-[#B89B72]" />
          <div className="w-1 h-1 rounded-full bg-[#B89B72]" />
          <div className="h-[1px] w-10 sm:w-14 bg-[#B89B72]" />
        </div>

        {/* Wedding Date in Understated Montserrat Light */}
        <p className="text-[11px] sm:text-xs font-sans font-light tracking-[0.4em] text-[#EFE8DC]/90 uppercase">
          {events.akad.date}
        </p>
      </div>

      {/* Bottom subtle indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-center text-white/50 text-[10px] sm:text-[11px] font-sans font-light tracking-[0.35em] uppercase animate-pulse">
        Scroll Down
      </div>
    </section>
  );
}
