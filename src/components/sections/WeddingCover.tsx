"use client";

import React from "react";
import Image from "next/image";
import { MailOpen } from "lucide-react";
import { weddingConfig } from "@/config/wedding";

interface WeddingCoverProps {
  guestName?: string;
  onOpen: () => void;
  isOpen: boolean;
}

export function WeddingCover({ guestName, onOpen, isOpen }: WeddingCoverProps) {
  if (isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-all duration-1000">
      {/* Background image with subtle zoom and overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={weddingConfig.coverImage}
          alt="Wedding Cover"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] filter brightness-[0.75] contrast-[0.95] scale-105"
        />
        {/* Elegant Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-[#453D35]/25 mix-blend-multiply" />
      </div>

      {/* Decorative inner frame */}
      <div className="absolute inset-4 sm:inset-8 border border-white/20 pointer-events-none rounded-lg" />

      {/* Content Container */}
      <div className="relative z-10 max-w-lg px-6 py-10 text-center text-white flex flex-col items-center justify-between min-h-[75vh]">
        {/* Top Header */}
        <div className="space-y-3">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.4em] font-sans font-light text-[#EFE8DC]/90">
            The Wedding Of
          </p>
          <div className="w-10 h-[1px] bg-[#B89B72]/70 mx-auto" />
        </div>

        {/* Center: Couple Names */}
        <div className="my-auto py-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight leading-[0.95] text-white drop-shadow-md">
            <span>{weddingConfig.bride.name}</span>
            <span className="block my-2 text-2xl sm:text-3xl font-serif italic text-[#D4C3A3]">
              &amp;
            </span>
            <span>{weddingConfig.groom.name}</span>
          </h1>
          <p className="mt-6 text-[11px] sm:text-xs font-sans tracking-[0.35em] text-[#EFE8DC]/85 uppercase font-light">
            {weddingConfig.events.akad.date}
          </p>
        </div>

        {/* Bottom: Guest invitation info & Action */}
        <div className="space-y-6 w-full flex flex-col items-center">
          {guestName && (
            <div className="space-y-1.5">
              <p className="text-[10px] sm:text-[11px] font-sans text-white/70 tracking-[0.25em] uppercase font-light">
                Kepada Yth. Bapak/Ibu/Saudara/i:
              </p>
              <h2 className="text-xl sm:text-2xl font-serif font-normal text-[#EFE8DC] tracking-wide">
                {guestName}
              </h2>
            </div>
          )}

          <button
            onClick={onOpen}
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#B89B72] hover:bg-[#A38760] text-white font-sans text-xs tracking-[0.25em] uppercase font-medium transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
          >
            <MailOpen className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            <span>Buka Undangan</span>
          </button>
        </div>
      </div>
    </div>
  );
}
