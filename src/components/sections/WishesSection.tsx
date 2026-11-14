"use client";

import React, { useEffect, useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Heart,
  User,
  Users,
  MessageSquare,
} from "lucide-react";
import { Wish } from "@/types/wedding";
import { fetchWishes, submitWish } from "@/services/wishes.service";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface WishesSectionProps {
  defaultGuestName?: string;
}

export function WishesSection({ defaultGuestName = "" }: WishesSectionProps) {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Form State
  const [name, setName] = useState(defaultGuestName);
  const [prevDefaultName, setPrevDefaultName] = useState(defaultGuestName);
  const [attendance, setAttendance] = useState<"Hadir" | "Tidak Hadir">(
    "Hadir",
  );
  const [attendeesCount, setAttendeesCount] = useState<number>(1);
  const [message, setMessage] = useState("");

  if (defaultGuestName !== prevDefaultName) {
    setPrevDefaultName(defaultGuestName);
    setName(defaultGuestName);
  }

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const data = await fetchWishes();
        setWishes(data);
      } catch (err) {
        console.error("Failed loading wishes", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setStatusMessage({ type: "error", text: "Mohon masukkan nama Anda." });
      return;
    }

    if (!message.trim()) {
      setStatusMessage({
        type: "error",
        text: "Mohon tuliskan pesan atau ucapan Anda.",
      });
      return;
    }

    setSubmitting(true);
    setStatusMessage(null);

    try {
      const res = await submitWish({
        name: name.trim(),
        attendance,
        attendeesCount: attendance === "Hadir" ? attendeesCount : 0,
        message: message.trim(),
      });

      if (res.success && res.data) {
        setWishes((prev) => [res.data!, ...prev]);
        setMessage("");
        setStatusMessage({
          type: "success",
          text: "Terima kasih banyak! Ucapan & konfirmasi Anda berhasil dikirim.",
        });
      } else {
        setStatusMessage({
          type: "error",
          text: res.error || "Gagal mengirim ucapan. Silakan coba lagi.",
        });
      }
    } catch {
      setStatusMessage({
        type: "error",
        text: "Terjadi kesalahan koneksi. Silakan coba lagi.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "";
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "";
    }
  };

  return (
    <section
      id="wishes"
      className="py-24 px-6 sm:px-8 bg-[#EFE8DC]/30 relative"
    >
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#B89B72] font-sans font-light mb-3">
            Doa &amp; Harapan
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#453D35] tracking-wide">
            Wedding Wishes &amp; RSVP
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#6E6357] font-light mt-2 max-w-md mx-auto">
            Berikan doa restu dan konfirmasi kehadiran Anda untuk kedua mempelai
          </p>
          <SectionDivider variant="minimal" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Column */}
          <ScrollReveal delay={0.1} className="lg:col-span-5 bg-[#F9F6F0] p-6 sm:p-8 rounded-3xl border border-[#B89B72]/20 shadow-xs">
            <h3 className="text-xl font-serif text-[#453D35] mb-6 flex items-center gap-2 font-normal">
              <Heart className="w-4 h-4 text-[#B89B72]" />
              <span>Kirim Ucapan &amp; RSVP</span>
            </h3>

            {statusMessage && (
              <div
                className={`mb-6 p-4 rounded-xl flex items-start gap-3 text-xs sm:text-sm ${
                  statusMessage.type === "success"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-rose-50 text-rose-800 border border-rose-200"
                }`}
              >
                {statusMessage.type === "success" ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                ) : (
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                )}
                <p>{statusMessage.text}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#6E6357] font-sans mb-1.5 font-light">
                  Nama Anda
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B89B72]" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Bpk. Kurniawan & Keluarga"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#B89B72]/30 bg-white focus:outline-hidden focus:border-[#B89B72] focus:ring-1 focus:ring-[#B89B72] text-xs sm:text-sm text-[#453D35] placeholder:text-[#6E6357]/40 font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#6E6357] font-sans mb-1.5 font-light">
                  Konfirmasi Kehadiran
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAttendance("Hadir")}
                    className={`py-2 px-4 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                      attendance === "Hadir"
                        ? "bg-[#B89B72] text-white border-[#B89B72]"
                        : "bg-white text-[#453D35] border-[#B89B72]/30 hover:bg-[#EFE8DC]/50"
                    }`}
                  >
                    Hadir
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance("Tidak Hadir")}
                    className={`py-2 px-4 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                      attendance === "Tidak Hadir"
                        ? "bg-[#B89B72] text-white border-[#B89B72]"
                        : "bg-white text-[#453D35] border-[#B89B72]/30 hover:bg-[#EFE8DC]/50"
                    }`}
                  >
                    Tidak Hadir
                  </button>
                </div>
              </div>

              {attendance === "Hadir" && (
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#6E6357] font-sans mb-1.5 font-light">
                    Jumlah Tamu Hadir
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B89B72]" />
                    <select
                      value={attendeesCount}
                      onChange={(e) =>
                        setAttendeesCount(Number(e.target.value))
                      }
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#B89B72]/30 bg-white focus:outline-hidden focus:border-[#B89B72] focus:ring-1 focus:ring-[#B89B72] text-xs sm:text-sm text-[#453D35] font-sans"
                    >
                      <option value={1}>1 Orang</option>
                      <option value={2}>2 Orang</option>
                      <option value={3}>3 Orang</option>
                      <option value={4}>4 Orang</option>
                      <option value={5}>5+ Orang</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#6E6357] font-sans mb-1.5 font-light">
                  Ucapan &amp; Doa Restu
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-[#B89B72]" />
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan ucapan selamat dan doa restu untuk mempelai..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#B89B72]/30 bg-white focus:outline-hidden focus:border-[#B89B72] focus:ring-1 focus:ring-[#B89B72] text-xs sm:text-sm text-[#453D35] placeholder:text-[#6E6357]/40 resize-none font-sans"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full mt-4 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#B89B72] hover:bg-[#A38760] disabled:bg-[#B89B72]/60 text-white font-sans text-xs tracking-widest uppercase font-medium transition-all shadow-xs hover:shadow-sm cursor-pointer"
              >
                {submitting ? (
                  <span>Mengirimkan...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Ucapan</span>
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>

          {/* Wishes List Column */}
          <ScrollReveal delay={0.2} className="lg:col-span-7 bg-[#F9F6F0] p-6 sm:p-8 rounded-3xl border border-[#B89B72]/20 shadow-xs flex flex-col h-[520px]">
            <div className="flex items-center justify-between pb-4 border-b border-[#B89B72]/20 mb-4">
              <h3 className="text-xl font-serif text-[#453D35] font-light">
                Daftar Ucapan
              </h3>
              <span className="text-[11px] font-sans tracking-wider text-[#B89B72] bg-[#EFE8DC] px-3 py-1 rounded-full font-medium">
                {wishes.length} Doa
              </span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
              {loading ? (
                <div className="h-full flex items-center justify-center text-[#6E6357] text-xs sm:text-sm font-sans font-light">
                  Memuat ucapan...
                </div>
              ) : wishes.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-[#6E6357] text-xs sm:text-sm font-sans">
                  <p className="font-light">Belum ada ucapan.</p>
                  <p className="text-[11px] mt-1 text-[#6E6357]/70 font-light">
                    Jadilah yang pertama mengirimkan doa!
                  </p>
                </div>
              ) : (
                wishes.map((item, idx) => (
                  <div
                    key={item.id || idx}
                    className="p-4 rounded-2xl bg-white border border-[#B89B72]/15 shadow-2xs space-y-2 hover:border-[#B89B72]/30 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-medium text-[#453D35] text-base">
                          {item.name}
                        </span>
                        <span
                          className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-medium ${
                            item.attendance === "Hadir"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-stone-100 text-stone-600 border border-stone-200"
                          }`}
                        >
                          {item.attendance}
                          {item.attendance === "Hadir" && item.attendeesCount
                            ? ` (${item.attendeesCount})`
                            : ""}
                        </span>
                      </div>
                      {item.createdAt && (
                        <span className="text-[10px] text-[#6E6357]/70 font-sans font-light">
                          {formatDate(item.createdAt)}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm font-sans text-[#6E6357] leading-relaxed whitespace-pre-line font-light">
                      {item.message}
                    </p>
                  </div>
                ))
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
