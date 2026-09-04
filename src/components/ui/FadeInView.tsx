"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
  scale?: boolean;
}

export function FadeInView({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.65,
  once = true,
  scale = false,
}: FadeInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-20px 0px" });

  const directionOffset = {
    up: { y: 32, x: 0 },
    down: { y: -32, x: 0 },
    left: { x: 32, y: 0 },
    right: { x: -32, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        scale: scale ? 0.95 : 1,
        ...directionOffset[direction],
      }}
      animate={
        isInView
          ? { opacity: 1, scale: 1, x: 0, y: 0 }
          : { opacity: 0, scale: scale ? 0.95 : 1, ...directionOffset[direction] }
      }
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}
