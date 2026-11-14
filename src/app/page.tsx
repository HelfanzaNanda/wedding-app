"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { weddingConfig } from "@/config/wedding";
import { WeddingCover } from "@/components/sections/WeddingCover";
import { HeroSection } from "@/components/sections/HeroSection";
import { GreetingSection } from "@/components/sections/GreetingSection";
import { CoupleSection } from "@/components/sections/CoupleSection";
import { EventSection } from "@/components/sections/EventSection";
import { CountdownSection } from "@/components/sections/CountdownSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { WeddingGiftSection } from "@/components/sections/WeddingGiftSection";
import { WishesSection } from "@/components/sections/WishesSection";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { MusicPlayer } from "@/components/ui/MusicPlayer";
import { FloatingNav } from "@/components/ui/FloatingNav";

function WeddingContent() {
  const searchParams = useSearchParams();
  const rawGuestName =
    searchParams.get("to") || searchParams.get("guest") || "";
  // Sanitize guest name against HTML or malicious injection
  const guestName = rawGuestName.replace(/<[^>]*>?/gm, "").trim();

  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
    // Smooth scroll down slightly if wanted or focus
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-[#F9F6F0]">
      {/* Wedding Cover (Full-Screen Opening) */}
      <WeddingCover
        guestName={guestName}
        isOpen={isInvitationOpen}
        onOpen={handleOpenInvitation}
      />

      {/* Main Website Sections */}
      <div
        className={`transition-opacity duration-1000 ${
          isInvitationOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none max-h-screen overflow-hidden"
        }`}
      >
        <HeroSection />
        <GreetingSection />
        <CoupleSection />
        <EventSection />
        <CountdownSection />
        <GallerySection />
        <WeddingGiftSection />
        <WishesSection defaultGuestName={guestName} />
        <ClosingSection />

        {/* Background Music Player (starts after opening invitation interaction) */}
        <MusicPlayer
          src={weddingConfig.music.src}
          autoPlayTrigger={isInvitationOpen}
        />

        {/* Floating Navigation & Back to Top */}
        <FloatingNav />
      </div>
    </main>
  );
}

export default function WeddingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#F9F6F0] text-[#B89B72]">
          <p className="font-serif text-lg tracking-widest animate-pulse">
            Memuat Undangan...
          </p>
        </div>
      }
    >
      <WeddingContent />
    </Suspense>
  );
}
