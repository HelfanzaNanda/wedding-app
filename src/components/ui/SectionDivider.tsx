import React from "react";

interface SectionDividerProps {
  className?: string;
  variant?: "floral" | "minimal" | "diamond";
}

export function SectionDivider({ className = "", variant = "floral" }: SectionDividerProps) {
  if (variant === "minimal") {
    return (
      <div className={`flex items-center justify-center space-x-3 my-8 ${className}`}>
        <div className="h-[1px] w-12 bg-[#B89B72]/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#B89B72]" />
        <div className="h-[1px] w-12 bg-[#B89B72]/40" />
      </div>
    );
  }

  if (variant === "diamond") {
    return (
      <div className={`flex items-center justify-center space-x-3 my-8 ${className}`}>
        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#B89B72]/50" />
        <div className="w-2 h-2 rotate-45 border border-[#B89B72] bg-[#F9F6F0]" />
        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#B89B72]/50" />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center space-x-4 my-8 text-[#B89B72] ${className}`}>
      <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#B89B72]/50" />
      <svg
        className="w-5 h-5 opacity-80"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C12 2 13.5 7.5 17 8.5C13.5 9.5 12 15 12 15C12 15 10.5 9.5 7 8.5C10.5 7.5 12 2 12 2Z" />
        <path d="M12 14C12 14 13 17.5 15.5 18C13 18.5 12 22 12 22C12 22 11 18.5 8.5 18C11 17.5 12 14 12 14Z" opacity="0.6" />
      </svg>
      <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#B89B72]/50" />
    </div>
  );
}
