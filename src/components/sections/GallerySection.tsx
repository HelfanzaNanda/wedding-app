"use client";

import React, { useState } from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";
import { Lightbox } from "@/components/ui/Lightbox";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function GallerySection() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const { gallery } = weddingConfig;

  return (
    <section id="gallery" className="py-24 px-6 sm:px-8 bg-[#F9F6F0] relative">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#B89B72] font-sans font-light mb-3">
            Momen Kebersamaan
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#453D35] tracking-wide">
            Galeri Foto
          </h2>
          <SectionDivider variant="floral" />
        </ScrollReveal>

        {/* Responsive Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {gallery.map((photo, index) => (
            <ScrollReveal
              key={photo.id}
              delay={index * 0.1}
              className="group relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden cursor-pointer bg-[#EFE8DC]/60 shadow-xs border border-[#B89B72]/15 hover:shadow-md transition-all duration-500"
            >
              <div
                onClick={() => setSelectedPhotoIndex(index)}
                className="w-full h-full relative"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  {photo.caption && (
                    <p className="text-white text-sm sm:text-base font-serif tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {photo.caption}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={gallery}
        currentIndex={selectedPhotoIndex}
        onClose={() => setSelectedPhotoIndex(null)}
        onSelect={(index) => setSelectedPhotoIndex(index)}
      />
    </section>
  );
}
