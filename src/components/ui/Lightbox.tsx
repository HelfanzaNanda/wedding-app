"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/types/wedding";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onSelect: (index: number) => void;
}

export function Lightbox({ items, currentIndex, onClose, onSelect }: LightboxProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onSelect((currentIndex - 1 + items.length) % items.length);
      if (e.key === "ArrowRight") onSelect((currentIndex + 1) % items.length);
    };

    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, items.length, onClose, onSelect]);

  if (currentIndex === null) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect((currentIndex + 1) % items.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 50) {
      // swipe left -> next
      onSelect((currentIndex + 1) % items.length);
    } else if (diff < -50) {
      // swipe right -> prev
      onSelect((currentIndex - 1 + items.length) % items.length);
    }
    setTouchStart(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-black/40 text-white/80 hover:text-white hover:bg-black/60 transition-all cursor-pointer"
        aria-label="Tutup foto"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-6 z-50 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white transition-all cursor-pointer"
        aria-label="Foto sebelumnya"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Main Image View */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-[90vw] h-[75vh] flex flex-col items-center justify-center select-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          <Image
            src={currentItem.src}
            alt={currentItem.alt}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-contain transition-transform duration-300"
            priority
          />
        </div>

        {currentItem.caption && (
          <div className="absolute bottom-[-2.5rem] text-center w-full">
            <p className="text-white/90 font-serif text-base sm:text-lg tracking-wide">
              {currentItem.caption}
            </p>
          </div>
        )}
      </div>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-6 z-50 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white transition-all cursor-pointer"
        aria-label="Foto selanjutnya"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Counter index */}
      <div className="absolute top-5 left-6 text-white/70 text-xs sm:text-sm font-sans tracking-widest uppercase">
        {currentIndex + 1} / {items.length}
      </div>
    </div>
  );
}
