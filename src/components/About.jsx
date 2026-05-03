'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';
import { motion } from 'framer-motion';
import '../index.css';
import '../App.css';

export default function About() {
  const vantaRef = useRef(null);
  const aboutDetailsRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 100.0,
          minWidth: 100.0,
          scale: 0.5,
          size: 0.5,
          scaleMobile: 0.5,
          color: 0xeaeaea,
          backgroundColor: 0x000000,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const handleScrollToDetails = () => {
    if (aboutDetailsRef.current) {
      aboutDetailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Globe Background Section */}
      <section
        ref={vantaRef}
        className="h-screen w-full flex flex-col items-center justify-center relative text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="z-10 text-center px-6 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-mono text-cyan-400 whitespace-nowrap overflow-hidden border-r-2 border-white animate-typing">
            Hi, I'm Keshav
          </h2>
          <p className="text-lg text-blue-100 mb-6 font-mono md:animate-typing2 md:whitespace-nowrap md:overflow-hidden md:border-r-2 md:border-white">
            A Full Stack Web Developer who loves solving real-world problems.
          </p>
          <button
            onClick={handleScrollToDetails}
            className="px-6 py-2 rounded-full font-mono bg-violet-600 hover:bg-violet-700 transition text-white font-semibold"
          >
            Read More About Me
          </button>
        </motion.div>
      </section>

      {/* Detailed About Section */}
      <section
        ref={aboutDetailsRef}
        className="w-full px-6 py-20 bg-gradient-to-b from-cyan-900 via-slate-900 to-black text-white flex justify-center"
      >
        <motion.div
          className="w-full max-w-5xl rounded-3xl bg-white/5 border border-cyan-400/30 shadow-[0_25px_80px_rgba(8,47,73,0.9)] p-8 md:p-10 flex flex-col md:flex-row gap-10 items-center md:items-stretch"
          initial={{ opacity: 0, y: 40, rotateX: -8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{ transformStyle: 'preserve-3d' }}
          whileHover={{ rotateX: 3, rotateY: -4, y: -10 }}
        >
          {/* Profile Image */}
          <motion.div
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-xl"
            style={{
              boxShadow:
                '0 25px 60px rgba(56, 189, 248, 0.35), 0 0 40px rgba(59, 130, 246, 0.4)',
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-indigo-500/40 mix-blend-soft-light" />
            <img
              src="image/keshav.jpeg"
              alt="Keshav"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <motion.h3
              className="text-3xl md:text-4xl font-mono font-semibold text-cyan-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              About Me
            </motion.h3>

            <motion.div
              className="inline-flex items-center gap-3 bg-black/40 border border-cyan-500/40 rounded-full px-4 py-1 text-xs font-mono uppercase tracking-[0.2em] text-cyan-100"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Full Stack Developer · MERN
            </motion.div>

            <motion.p
              className="text-sm md:text-base text-blue-100 leading-relaxed font-mono"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              I&apos;m currently pursuing my B.Tech at{' '}
              <span className="text-cyan-300 font-semibold">
                Jaypee University of Engineering and Technology (JUET), Guna
              </span>
              , and I love working with algorithms and data structures to solve
              real-world problems.
            </motion.p>

            <motion.p
              className="text-sm md:text-base text-blue-100 leading-relaxed font-mono"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I&apos;m a passionate MERN stack developer focused on building fast,
              accessible, and scalable web applications. From animated frontends to
              robust APIs, I enjoy crafting experiences that blend clean design with
              solid engineering. Recently, I&apos;ve been exploring AI-powered features
              to make interfaces smarter and more intuitive.
            </motion.p>

            <motion.div
              className="flex items-center gap-3 pt-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <img
                src="image/logo1.png"
                alt="JUET Logo"
                className="w-10 h-10 rounded-lg shadow-lg"
              />
              <span className="text-xs md:text-sm text-cyan-100 font-mono">
                Currently crafting projects and ideas at JUET, Guna.
              </span>
            </motion.div>

            {/* Experience & Achievements */}
            <motion.div
              className="mt-6 grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-black/40 border border-cyan-500/30 rounded-2xl p-4 space-y-3">
                <h4 className="font-mono text-sm uppercase tracking-[0.18em] text-cyan-200">
                  Experience
                </h4>
                <ul className="space-y-2 text-xs md:text-sm text-blue-100 font-mono">
                  <li>
                    <span className="text-cyan-300">2023 – Present ·</span> Building
                    full‑stack projects with the MERN stack, deploying to production
                    platforms (Render, Vercel).
                  </li>
                  <li>
                    <span className="text-cyan-300">2022 – 2023 ·</span> Practiced data
                    structures, algorithms, and system design through coding platforms
                    and university coursework.
                  </li>
                </ul>
              </div>

              <div className="bg-black/40 border border-emerald-500/30 rounded-2xl p-4 space-y-3">
                <h4 className="font-mono text-sm uppercase tracking-[0.18em] text-emerald-200">
                  Achievements
                </h4>
                <ul className="space-y-2 text-xs md:text-sm text-blue-100 font-mono">
                  <li>
                    Led development of <span className="text-emerald-300">Wellora</span>{' '}
                    and <span className="text-emerald-300">Talkie Wakie</span>, focusing
                    on real‑time and user‑centric experiences.
                  </li>
                  <li>
                    Consistently ranked among top performers in university coding
                    contests and project evaluations.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
