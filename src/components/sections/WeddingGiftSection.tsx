"use client";

import React, { useState } from "react";
import { Copy, Check, Gift } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function WeddingGiftSection() {
  const { bankAccounts } = weddingConfig;
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (accountNumber: string, index: number) => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopiedIndex(index);
      setTimeout(() => {
        setCopiedIndex(null);
      }, 2500);
    } catch {
      // Fallback method for older browsers or permission limitations
      const textArea = document.createElement("textarea");
      textArea.value = accountNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedIndex(index);
      setTimeout(() => {
        setCopiedIndex(null);
      }, 2500);
    }
  };

  return (
    <section id="gift" className="py-24 px-6 sm:px-8 bg-[#F9F6F0] relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          {/* Section Header */}
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#B89B72] font-light mb-3">
            Tanda Kasih
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#453D35] mb-4">
            Wedding Gift &amp; Blessings
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#6E6357] leading-relaxed max-w-lg mx-auto font-light mb-2">
            Doa restu Anda merupakan karunia terindah bagi kami. Namun jika memberi adalah ungkapan kasih Anda, dengan senang hati kami menerimanya.
          </p>

          <SectionDivider variant="diamond" className="my-6" />
        </ScrollReveal>

        {/* Bank Account Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-2xl mx-auto">
          {bankAccounts.map((account, idx) => {
            const isCopied = copiedIndex === idx;

            return (
              <ScrollReveal
                key={idx}
                delay={idx * 0.15}
                className="relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-[#EFE8DC]/50 border border-[#B89B72]/25 shadow-xs hover:shadow-md hover:border-[#B89B72]/50 transition-all duration-300 backdrop-blur-xs text-left"
              >
                <div>
                  {/* Top card bar: Bank name & gift icon */}
                  <div className="flex items-center justify-between border-b border-[#B89B72]/15 pb-4 mb-5">
                    <span className="font-serif text-xl sm:text-2xl font-normal tracking-wide text-[#453D35]">
                      {account.bank}
                    </span>
                    <Gift className="w-4 h-4 text-[#B89B72]/70" />
                  </div>

                  {/* Account Number */}
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#6E6357] font-sans font-light">
                    Nomor Rekening
                  </p>
                  <p className="font-mono text-lg sm:text-xl font-normal tracking-wider text-[#453D35] my-1.5">
                    {account.accountNumber}
                  </p>

                  {/* Account Name */}
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#6E6357] font-sans font-light mt-3">
                    Atas Nama
                  </p>
                  <p className="font-serif text-base sm:text-lg text-[#453D35] font-normal tracking-wide">
                    {account.accountName}
                  </p>
                </div>

                {/* Copy Button */}
                <div className="mt-6 pt-4 border-t border-[#B89B72]/15">
                  <button
                    onClick={() => handleCopy(account.accountNumber, idx)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      isCopied
                        ? "bg-emerald-700 text-white shadow-xs"
                        : "bg-[#B89B72] hover:bg-[#A38760] text-white shadow-xs hover:shadow-sm active:scale-98"
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Tersalin ke Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin Nomor Rekening</span>
                      </>
                    )}
                  </button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
