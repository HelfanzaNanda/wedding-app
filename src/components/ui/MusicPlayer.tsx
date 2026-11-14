"use client";

import React, { useEffect, useRef, useState } from "react";
import { VolumeX, Disc3 } from "lucide-react";

interface MusicPlayerProps {
  src: string;
  autoPlayTrigger?: boolean;
}

export function MusicPlayer({ src, autoPlayTrigger }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStartedOnce, setHasStartedOnce] = useState(false);

  useEffect(() => {
    if (autoPlayTrigger && !hasStartedOnce) {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasStartedOnce(true);
          })
          .catch((err) => {
            console.warn("Autoplay audio blocked or error:", err);
          });
      }
    }
  }, [autoPlayTrigger, hasStartedOnce]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasStartedOnce(true);
        })
        .catch((err) => {
          console.warn("Play error:", err);
        });
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />

      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Jeda musik" : "Putar musik"}
        className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-[#EFE8DC]/90 backdrop-blur-md border border-[#B89B72]/40 text-[#453D35] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
      >
        {isPlaying ? (
          <div className="relative flex items-center justify-center">
            <Disc3 className="w-6 h-6 text-[#B89B72] animate-spin [animation-duration:4s]" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B89B72] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B89B72]"></span>
            </span>
          </div>
        ) : (
          <VolumeX className="w-5 h-5 text-[#6E6357] group-hover:text-[#453D35]" />
        )}
      </button>
    </>
  );
}
