"use client";

import React, { useState } from "react";
import { Calendar, Clock, MapPin, ExternalLink, CalendarPlus, Download, Check } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EventDetail } from "@/types/wedding";

export function EventSection() {
  const { events } = weddingConfig;
  const eventList = [events.akad, events.resepsi];
  const [downloadedIcs, setDownloadedIcs] = useState<string | null>(null);

  // Helper to format ISO date string to Google Calendar UTC format YYYYMMDDTHHMMSSZ
  const formatGCalDate = (isoStr: string) => {
    const d = new Date(isoStr);
    return d.toISOString().replace(/-|:|\.\d\d\d/g, "");
  };

  const getGoogleCalendarUrl = (evt: EventDetail) => {
    const startStr = formatGCalDate(evt.startDateTime);
    const endStr = formatGCalDate(evt.endDateTime);
    const title = encodeURIComponent(`${evt.title} - ${weddingConfig.bride.name} & ${weddingConfig.groom.name}`);
    const details = encodeURIComponent(
      `${evt.description}\n\nWaktu: ${evt.time}\nTempat: ${evt.venue}\nAlamat: ${evt.address}`
    );
    const location = encodeURIComponent(`${evt.venue}, ${evt.address}`);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startStr}/${endStr}&details=${details}&location=${location}&ctz=Asia/Jakarta`;
  };

  const handleDownloadIcs = (evt: EventDetail) => {
    const startStr = formatGCalDate(evt.startDateTime);
    const endStr = formatGCalDate(evt.endDateTime);
    const nowStr = formatGCalDate(new Date().toISOString());
    const uidStr = `${evt.title.toLowerCase().replace(/\s+/g, "-")}-${startStr}@wedding-invitation`;

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//The Wedding of Adinda & Elfan//ID",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `UID:${uidStr}`,
      `DTSTAMP:${nowStr}`,
      `DTSTART:${startStr}`,
      `DTEND:${endStr}`,
      `SUMMARY:${evt.title} - ${weddingConfig.bride.name} & ${weddingConfig.groom.name}`,
      `DESCRIPTION:${evt.description.replace(/\n/g, "\\n")}\\nWaktu: ${evt.time}`,
      `LOCATION:${evt.venue}, ${evt.address}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `${evt.title.replace(/\s+/g, "_")}_Adinda_Elfan.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadedIcs(evt.title);
    setTimeout(() => setDownloadedIcs(null), 3000);
  };

  return (
    <section id="event" className="py-24 px-6 sm:px-8 bg-[#F9F6F0] relative">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#B89B72] font-sans font-light mb-3">
            Rangkaian Acara
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#453D35] tracking-wide">
            Waktu &amp; Tempat
          </h2>
          <SectionDivider variant="floral" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {eventList.map((evt, idx) => {
            const isDownloaded = downloadedIcs === evt.title;
            const googleCalUrl = getGoogleCalendarUrl(evt);

            return (
              <ScrollReveal
                key={evt.title}
                delay={idx * 0.15}
                className="flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#EFE8DC]/50 border border-[#B89B72]/20 hover:border-[#B89B72]/50 transition-all duration-300 shadow-xs"
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#453D35] mb-6 font-light tracking-wide text-center">
                    {evt.title}
                  </h3>

                  <div className="w-full space-y-4 text-[#6E6357] text-xs sm:text-sm font-sans font-light">
                    {/* Date */}
                    <div className="flex items-center justify-center gap-2.5 text-[#453D35]">
                      <Calendar className="w-4 h-4 text-[#B89B72] shrink-0" />
                      <span className="font-sans font-normal tracking-wide">
                        {evt.day}, {evt.date}
                      </span>
                    </div>

                    {/* Time */}
                    <div className="flex items-center justify-center gap-2.5">
                      <Clock className="w-4 h-4 text-[#B89B72] shrink-0" />
                      <span>{evt.time}</span>
                    </div>

                    {/* Venue */}
                    <div className="pt-3 border-t border-[#B89B72]/15 text-center">
                      <div className="flex items-start justify-center gap-2 text-[#453D35] font-normal mb-1.5">
                        <MapPin className="w-4 h-4 text-[#B89B72] shrink-0 mt-0.5" />
                        <span className="font-serif text-base sm:text-lg">{evt.venue}</span>
                      </div>
                      <p className="text-xs text-[#6E6357] leading-relaxed max-w-xs mx-auto font-light">
                        {evt.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions: Google Calendar & Google Maps */}
                <div className="mt-8 pt-6 border-t border-[#B89B72]/15 flex flex-col gap-2.5">
                  {/* Primary: Add to Google Calendar */}
                  <a
                    href={googleCalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#B89B72] hover:bg-[#A38760] text-white text-xs font-sans tracking-[0.15em] uppercase font-medium transition-all shadow-xs hover:shadow-sm cursor-pointer"
                  >
                    <CalendarPlus className="w-3.5 h-3.5" />
                    <span>Add to Google Calendar</span>
                    <ExternalLink className="w-3 h-3 opacity-75" />
                  </a>

                  {/* Secondary Row: Google Maps & Optional .ics download */}
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={evt.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-white hover:bg-[#EFE8DC]/60 border border-[#B89B72]/30 text-[#453D35] text-[11px] font-sans tracking-[0.1em] uppercase font-medium transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                    >
                      <MapPin className="w-3 h-3 text-[#B89B72]" />
                      <span>Buka Maps</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => handleDownloadIcs(evt)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-white hover:bg-[#EFE8DC]/60 border border-[#B89B72]/30 text-[#453D35] text-[11px] font-sans tracking-[0.1em] uppercase font-medium transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                    >
                      {isDownloaded ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700">Tersimpan</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3 h-3 text-[#B89B72]" />
                          <span>File (.ics)</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
