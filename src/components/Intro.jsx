import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Intro({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isBoosted, setIsBoosted] = useState(false);

  useEffect(() => {
    // Smoothly animate loading progress from 0% to 100% over ~6.5 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 65);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          onLoadingComplete?.();
        }, 600);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [progress, onLoadingComplete]);

  // Click anywhere to boost speed
  const handleBoost = () => {
    setIsBoosted(true);
    setProgress((prev) => Math.min(prev + 18, 100));
    setTimeout(() => setIsBoosted(false), 400);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          onClick={handleBoost}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, filter: 'blur(8px)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-[#02040a] text-white flex flex-col justify-between overflow-hidden select-none font-sans cursor-pointer"
        >
          {/* Ambient Background Glows & Particle Dust */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Animated Background Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
            {[...Array(16)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-cyan-300"
                style={{
                  top: `${(i * 13) % 100}%`,
                  left: `${(i * 17) % 100}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.8, 1.4, 0.8],
                }}
                transition={{
                  duration: 3 + (i % 4),
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: (i * 0.2) % 2,
                }}
              />
            ))}
          </div>

          {/* Top Bar */}
          <div className="relative z-10 flex justify-between items-center px-8 py-6 text-xs font-mono text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-cyan-400/90 tracking-widest uppercase">// KESHAV PORTFOLIO LOAD PROTOCOL</span>
            </div>
            <span className="text-gray-400 font-mono tracking-wider">
              {progress}% {isBoosted ? '⚡ NITRO BOOST!' : 'LOADED'}
            </span>
          </div>

          {/* CENTER: NAME & SUBTITLE & LOADING INDICATOR */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 my-auto max-w-4xl mx-auto">
            
            {/* Top Micro Tech Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[10px] font-mono text-cyan-300 tracking-[0.2em] uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEM STATUS: ONLINE
            </motion.div>

            {/* PROMINENT NAME WITH GLOW & SHIMMER */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white drop-shadow-[0_0_40px_rgba(6,182,212,0.6)] mb-3 relative"
            >
              KESHAV{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                AGRAWAL
              </span>
            </motion.h1>

            {/* SUBTITLE */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-mono text-xs md:text-sm lg:text-base text-cyan-300/90 tracking-[0.25em] md:tracking-[0.35em] uppercase mb-10"
            >
              FULL STACK DEVELOPER • AI/ML ENTHUSIAST
            </motion.p>

            {/* PROGRESS INDICATOR */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-full max-w-md space-y-3"
            >
              {/* Progress Bar Container */}
              <div className="relative w-full h-2.5 bg-white/10 rounded-full p-0.5 backdrop-blur-md border border-white/10 overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 rounded-full transition-all duration-150 ease-out shadow-[0_0_15px_#22d3ee] relative"
                  style={{ width: `${progress}%` }}
                >
                  {/* Glowing Leading Edge Light */}
                  <div className="absolute right-0 top-0 bottom-0 w-3 bg-white blur-[2px] rounded-full" />
                </div>
              </div>

              {/* Progress Percentage Text */}
              <div className="flex justify-between items-center text-xs font-mono text-gray-400 px-1">
                <span className="text-cyan-400/90 animate-pulse">
                  {progress < 100 ? 'INITIALIZING ASSETS...' : 'SYSTEM READY — OPENING PORTFOLIO'}
                </span>
                <span className="font-bold text-white tracking-widest text-sm">{progress}%</span>
              </div>
            </motion.div>
          </div>

          {/* BOTTOM: CAR DRIVING ANIMATION WITH NITRO & WHEEL ROTATION */}
          <div className="relative z-10 w-full h-36 flex flex-col justify-end overflow-hidden pb-6">
            {/* Horizon Grid Line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#06b6d4]" />

            {/* Driving Road Track with Moving Dashes */}
            <div className="relative w-full h-14 bg-[#040814] border-t border-b border-cyan-500/30 overflow-hidden flex items-center">
              {/* Animated Road Lines sliding left */}
              <div className="absolute inset-0 flex items-center opacity-30">
                <motion.div
                  animate={{ x: [-100, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }}
                  className="w-[200%] h-0.5 bg-gradient-to-r from-cyan-500/20 via-cyan-300 to-cyan-500/20 bg-[length:40px_100%]"
                />
              </div>

              {/* CAR POSITION DRIVEN DIRECTLY BY LOADING PROGRESS (0% = LEFT, 100% = RIGHT) */}
              <div
                className="absolute bottom-2 transition-all duration-150 ease-out flex items-center"
                style={{
                  left: `calc(${progress}% * 1.15 - 80px)`
                }}
              >
                {/* Nitro Flame Sparks behind car */}
                <div className={`h-2 bg-gradient-to-r from-transparent via-cyan-400 to-blue-500 blur-sm opacity-90 -mr-1 transition-all ${
                  isBoosted ? 'w-48 bg-gradient-to-r from-transparent via-pink-500 to-cyan-400 opacity-100' : 'w-28 md:w-40'
                }`} />

                {/* Sleek Cyber Sports Car Graphic */}
                <div className="relative">
                  <svg width="76" height="26" viewBox="0 0 76 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_14px_rgba(6,182,212,0.95)]">
                    {/* Car Underglow */}
                    <ellipse cx="38" cy="23" rx="30" ry="2.5" fill="#06b6d4" opacity={isBoosted ? "1" : "0.8"} />

                    {/* Car Base Body */}
                    <path d="M6 16 H70 L65 12 H52 L43 5 H24 L15 12 H6 Z" fill="#090e1e" stroke="#22d3ee" strokeWidth="1.5" />
                    
                    {/* Windshield / Roof */}
                    <path d="M26 6 H43 L50 12 H20 Z" fill="#06b6d4" opacity="0.6" stroke="#38bdf8" strokeWidth="1" />
                    
                    {/* Headlights Cone (Projecting Right) */}
                    <polygon points="65,13 76,10 76,18 65,15" fill="#67e8f9" opacity="0.85" />
                    
                    {/* Rear Red Taillight */}
                    <rect x="5" y="13" width="3" height="3" fill="#ef4444" className="animate-pulse" />

                    {/* Rear Spoiler */}
                    <rect x="6" y="9" width="8" height="1.5" fill="#38bdf8" />

                    {/* Front & Rear Spinning Wheels */}
                    <g className="animate-spin origin-[20px_17px]">
                      <circle cx="20" cy="17" r="4.5" fill="#020617" stroke="#38bdf8" strokeWidth="1.5" />
                      <line x1="20" y1="12.5" x2="20" y2="21.5" stroke="#67e8f9" strokeWidth="1" />
                      <line x1="15.5" y1="17" x2="24.5" y2="17" stroke="#67e8f9" strokeWidth="1" />
                    </g>
                    
                    <g className="animate-spin origin-[55px_17px]">
                      <circle cx="55" cy="17" r="4.5" fill="#020617" stroke="#38bdf8" strokeWidth="1.5" />
                      <line x1="55" y1="12.5" x2="55" y2="21.5" stroke="#67e8f9" strokeWidth="1" />
                      <line x1="50.5" y1="17" x2="59.5" y2="17" stroke="#67e8f9" strokeWidth="1" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom Subtext */}
            <div className="flex justify-between items-center px-8 pt-2 font-mono text-[10px] text-gray-500">
              <span className="text-gray-400">CLICK ANYWHERE FOR NITRO BOOST</span>
              <span className="text-cyan-400/90 font-bold">DRIVE SPEED: 140 MPH</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
