import React from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] sm:min-h-screen flex items-center justify-center overflow-hidden py-24 px-6 bg-[#F9F6F0]">
      {/* Background with curated wedding image and rich editorial overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={weddingConfig.heroImage}
          alt="Wedding Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.62] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-[#1c1815]/80" />
        <div className="absolute inset-0 bg-[#453D35]/20 mix-blend-multiply" />
      </div>

      {/* Subtle luxury editorial frame border */}
      <div className="absolute inset-4 sm:inset-8 md:inset-12 border border-white/15 pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4 flex flex-col items-center justify-center">
        {/* Understated Top Tagline */}
        <p className="text-[11px] sm:text-xs font-sans font-light tracking-[0.4em] uppercase text-[#EFE8DC]/85 mb-8 sm:mb-10">
          The Wedding Of
        </p>

        {/* Primary Visual Focal Point: Bodoni Moda Couple Names */}
        <div className="space-y-1 sm:space-y-2 my-2 sm:my-4 select-none">
          <div className="overflow-hidden">
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-normal tracking-tight leading-[0.95] text-white drop-shadow-sm">
              {weddingConfig.bride.name}
            </span>
          </div>

          <div className="flex items-center justify-center py-2 sm:py-3">
            <span className="font-serif italic font-normal text-2xl sm:text-3xl md:text-4xl text-[#D4C3A3]/90">
              &amp;
            </span>
          </div>

          <div className="overflow-hidden">
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-normal tracking-tight leading-[0.95] text-white drop-shadow-sm">
              {weddingConfig.groom.name}
            </span>
          </div>
        </div>

        {/* Minimal Editorial Divider */}
        <div className="flex items-center justify-center space-x-4 my-8 sm:my-10 opacity-70">
          <div className="h-[1px] w-12 sm:w-16 bg-[#D4C3A3]" />
          <div className="w-1 h-1 rounded-full bg-[#D4C3A3]" />
          <div className="h-[1px] w-12 sm:w-16 bg-[#D4C3A3]" />
        </div>

        {/* Wedding Date in Understated Montserrat */}
        <p className="text-xs sm:text-sm font-sans font-light tracking-[0.35em] text-[#EFE8DC]/90 uppercase">
          21 March 2027
        </p>
      </div>

      {/* Bottom subtle indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-center text-white/50 text-[10px] sm:text-xs font-sans font-light tracking-[0.3em] uppercase animate-pulse">
        Scroll Down
      </div>
    </section>
  );
}
