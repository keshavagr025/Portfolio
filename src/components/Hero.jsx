import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown, Trophy, Star, Github } from 'lucide-react';

const ROLES = [
  'AI + Full-Stack Engineer',
  'MERN Stack Developer',
  'LLM Integration Specialist',
  'Open Source Contributor',
];

const BADGES = [
  { icon: Trophy, label: 'Hacksagon Runner-up', color: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10' },
  { icon: Github, label: 'GSSoC Contributor',   color: 'text-green-400 border-green-400/30 bg-green-400/10' },
  { icon: Github, label: 'GSSoC Contributor',   color: 'text-green-400 border-green-400/30 bg-green-400/10' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="flex flex-col items-center justify-center text-center w-full max-w-2xl mx-auto gap-5 px-6"
    >
      {/* Code-style label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="font-mono text-cyan-500/60 text-xs tracking-widest"
      >
        // Error 404: Life not found, coding continues
      </motion.p>

      {/* NAME — first name large white, last name cyan */}
      <div className="leading-[0.9] -space-y-1">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-7xl md:text-[7rem] font-black text-white tracking-tighter"
        >
          Keshav
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-7xl md:text-[7rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"
        >
          Agrawal
        </motion.h1>
      </div>

      {/* Typing role */}
      <p className="text-xs md:text-sm font-mono uppercase tracking-[0.25em] text-gray-500 min-h-[1.2rem]">
        {displayed}<span className="animate-pulse text-cyan-400">|</span>
      </p>


      {/* Tagline — relatable & personal */}
      <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
        Building AI-powered products with MERN Stack. The future is intelligent — I'm shipping it.
      </p>

      {/* 3 stacked buttons */}
      <div className="flex flex-col gap-3 w-full mt-1">
        <a
          href="#contact"
          className="w-full py-3.5 rounded-2xl bg-white text-black font-semibold text-sm hover:bg-gray-100 active:scale-95 transition-all text-center"
        >
          Get In Touch
        </a>
        <a
          href="#projects"
          className="w-full py-3.5 rounded-2xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 active:scale-95 transition-all text-center"
        >
          View Work
        </a>
        <a
          href="/resume.pdf"
          download
          className="w-full py-3.5 rounded-2xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <Download size={14} />
          Download Resume
        </a>
      </div>

      {/* Bouncing arrow */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        className="mt-1 text-gray-600"
      >
        <ArrowDown size={18} />
      </motion.div>
    </motion.div>
  );
}
