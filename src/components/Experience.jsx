import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col justify-center h-full">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Experience
        </h2>

        <div className="relative border-l-2 border-white/10 pl-8 pb-12">
          {/* Dot */}
          <div className="absolute w-6 h-6 bg-cyan-500 rounded-full -left-[13px] top-0 shadow-[0_0_20px_rgba(6,182,212,0.8)]" />

          <div className="mb-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Full Stack Development Intern</h3>
            <span className="text-cyan-400 font-mono bg-cyan-500/10 px-4 py-1 rounded-full border border-cyan-500/20">Apr 2025 – Jun 2025</span>
          </div>
          <h4 className="text-xl text-gray-400 mb-6 font-mono">Unified Mentor Pvt Ltd • Remote</h4>

          <ul className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <li className="flex gap-4 items-start">
              <span className="text-cyan-500 mt-1">▹</span>
              Shipped 3 MERN stack applications end-to-end, covering React frontend and Node.js/Express backend, within a 3-month timeline.
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-cyan-500 mt-1">▹</span>
              Engineered 10+ reusable React components, cutting UI development time by ~30% for a 4-member team.
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-cyan-500 mt-1">▹</span>
              Designed RESTful APIs and MongoDB schemas via Mongoose, achieving sub-5 ms CRUD latency for all core data flows.
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-cyan-500 mt-1">▹</span>
              Merged 5+ pull requests into open-source codebases on GitHub, reducing integration bottlenecks by 20%.
            </li>
          </ul>
        </div>

        <div className="relative border-l-2 border-white/10 pl-8">
          {/* Dot */}
          <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-0 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />

          <div className="mb-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white">B.Tech in Computer Science</h3>
            <span className="text-purple-400 font-mono bg-purple-500/10 px-4 py-1 rounded-full border border-purple-500/20">2023 – 2027</span>
          </div>
          <h4 className="text-xl text-gray-400 mb-4 font-mono">Jaypee University of Engineering and Technology (JUET) • Guna, MP</h4>
          <p className="text-gray-300 text-lg">B.Tech in Computer Science and Engineering</p>
        </div>
      </motion.div>
    </div>
  );
}
