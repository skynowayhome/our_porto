"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface FloatingParticle {
  id: number;
  emoji: string;
  x: number;
  y: number;
}

const EMOJIS = ["👏", "🚀", "☕", "🔥", "✨", "💻", "🎉", "💙"];

export function HighFiveCounter() {
  const [count, setCount] = useState<number>(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("zeki_high_fives");
        if (stored) return parseInt(stored, 10);
      } catch {
        // ignore
      }
    }
    return 128;
  });

  const [hasInteracted, setHasInteracted] = useState(false);
  const [particles, setParticles] = useState<FloatingParticle[]>([]);

  const handleClick = () => {
    const nextCount = count + 1;
    setCount(nextCount);
    setHasInteracted(true);

    try {
      localStorage.setItem("zeki_high_fives", nextCount.toString());
    } catch {
      // ignore
    }

    // Spawn 2-3 fun floating particles around button
    const newParticles: FloatingParticle[] = Array.from({ length: 3 }).map((_, i) => ({
      id: Date.now() + i,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      x: (Math.random() - 0.5) * 60,
      y: -20 - Math.random() * 30,
    }));

    setParticles((prev) => [...prev, ...newParticles]);

    // Clean up particles
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
    }, 1200);
  };

  return (
    <div className="relative inline-flex items-center">
      <motion.button
        type="button"
        onClick={handleClick}
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.05 }}
        className={`group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all shadow-xs border cursor-pointer ${
          hasInteracted
            ? "bg-primary text-on-primary border-primary shadow-sm"
            : "bg-surface-container-low hover:bg-surface-container text-on-surface border-surface-dim hover:border-primary/40"
        }`}
        aria-label="Kirim High Five untuk Zeki Studio"
      >
        <motion.span
          animate={hasInteracted ? { rotate: [0, -20, 20, -10, 10, 0] } : {}}
          transition={{ duration: 0.5 }}
          className="text-base select-none"
        >
          👏
        </motion.span>
        <span>High Five!</span>
        <span
          className={`px-1.5 py-0.5 rounded-md text-[11px] font-mono font-bold ${
            hasInteracted ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
          }`}
        >
          {count}
        </span>
        <Sparkles className="w-3.5 h-3.5 text-amber-400 opacity-80 group-hover:scale-125 transition-transform" />
      </motion.button>

      {/* Floating particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            initial={{ opacity: 1, y: 0, x: particle.x, scale: 0.8 }}
            animate={{ opacity: 0, y: particle.y - 40, x: particle.x * 1.5, scale: 1.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute left-1/2 -top-2 pointer-events-none text-base select-none z-50"
          >
            {particle.emoji}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
