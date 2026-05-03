'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Intro({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish?.();
    }, 2600);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center intro-bg text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Floating ring and orb */}
      <motion.div
        className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border border-cyan-300/60"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.9, 1.05, 1], opacity: [0.2, 0.9, 0.7], rotate: 180 }}
        transition={{ duration: 2.2, ease: 'easeInOut' }}
        style={{
          boxShadow:
            '0 0 40px rgba(34, 211, 238, 0.5), 0 0 120px rgba(56, 189, 248, 0.4)',
        }}
      />
      <motion.div
        className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-cyan-500/30 blur-xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: [-10, 10, -5], opacity: 0.9 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-3xl px-6 text-center"
      >
        <div className="font-mono text-xs text-slate-300 mb-3 tracking-[0.25em] uppercase">
          Keshav Agrawal
        </div>

        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-[0.12em] text-cyan-200 mb-3 drop-shadow-[0_0_25px_rgba(34,211,238,0.9)]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          Full Stack Developer
        </motion.h1>

        <motion.p
          className="font-mono text-sm md:text-base text-slate-200 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Building interactive web experiences with MERN, real-time systems, and clean UI.
        </motion.p>

        <motion.div
          className="inline-flex items-center gap-3 bg-black/50 border border-cyan-400/60 rounded-full px-5 py-2 text-xs font-mono uppercase tracking-[0.16em] text-cyan-100"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Initializing Portfolio Experience...
        </motion.div>
      </motion.div>
    </div>
  );
}

