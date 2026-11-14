"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";

interface CountdownProps {
  targetDate: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
}

const emptySubscribe = () => () => {};

export function Countdown({ targetDate }: CountdownProps) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(() => {
    const difference = new Date(targetDate).getTime() - Date.now();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isCompleted: false,
    };
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isCompleted: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
    };

    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!isClient) {
    return (
      <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-md mx-auto">
        {["Hari", "Jam", "Menit", "Detik"].map((label) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center py-3 px-2 sm:py-4 sm:px-3 rounded-2xl bg-[#EFE8DC]/50 border border-[#B89B72]/20"
          >
            <span className="text-2xl sm:text-3xl font-serif font-light text-[#453D35]">
              --
            </span>
            <span className="text-[9px] sm:text-[11px] uppercase tracking-widest text-[#6E6357] font-light mt-1 font-sans">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  const items = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-md mx-auto">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center justify-center py-3 px-2 sm:py-4 sm:px-3 rounded-2xl bg-[#EFE8DC]/50 border border-[#B89B72]/20 hover:border-[#B89B72]/40 transition-colors"
        >
          <span className="text-2xl sm:text-3xl font-serif font-light text-[#453D35] tabular-nums">
            {String(item.value).padStart(2, "0")}
          </span>
          <span className="text-[9px] sm:text-[11px] uppercase tracking-widest text-[#6E6357] font-light mt-1 font-sans">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
