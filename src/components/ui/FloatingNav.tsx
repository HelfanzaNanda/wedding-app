"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function FloatingNav() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { label: "Mempelai", href: "#couple" },
    { label: "Acara", href: "#event" },
    { label: "Waktu", href: "#countdown" },
    { label: "Galeri", href: "#gallery" },
    { label: "Hadiah", href: "#gift" },
    { label: "Ucapan", href: "#wishes" },
  ];

  return (
    <>
      {/* Floating Pill Nav for Quick Navigation (Hidden on mobile devices for clean, unobstructed viewing) */}
      <nav
        aria-label="Navigasi Halaman"
        className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-40 px-5 py-2.5 rounded-full bg-[#EFE8DC]/90 backdrop-blur-md border border-[#B89B72]/30 shadow-md items-center space-x-5 text-xs font-sans tracking-[0.15em] uppercase text-[#453D35]"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-[#B89B72] transition-colors font-normal"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Floating Back to Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Kembali ke atas"
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-[#EFE8DC]/90 backdrop-blur-md border border-[#B89B72]/40 text-[#453D35] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5 text-[#453D35] hover:text-[#B89B72] transition-colors" />
        </button>
      )}
    </>
  );
}
