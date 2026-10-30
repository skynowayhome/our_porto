"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const match = value.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
    if (!match) return;

    const prefix = match[1] || "";
    const targetNum = parseFloat(match[2]);
    const suffix = match[3] || "";
    const isDecimal = match[2].includes(".");
    const decimalPlaces = isDecimal ? match[2].split(".")[1].length : 0;

    const duration = 1200;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = targetNum * ease;

      const formatted = isDecimal
        ? current.toFixed(decimalPlaces)
        : Math.round(current).toString();

      if (ref.current) {
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    const animId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animId);
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
