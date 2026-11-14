"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "none";
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const getInitialY = () => {
    if (direction === "up") return 36;
    if (direction === "down") return -36;
    return 0;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: getInitialY() }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // smooth luxury cubic-bezier ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
