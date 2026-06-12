import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'IntelliHire AI (ReadyBoss)',
    tech: ['MERN', 'OpenAI', 'Claude'],
    description: 'Constructed a candidate screening platform connecting 13+ APIs for ATS scoring, skill-gap detection, and career roadmap generation.',
    achievements: 'Awarded Runner-up at Hacksagon 2025 among 600+ teams. Automated PDF parsing cutting screening time by ~40%.',
    github: 'https://github.com/keshavagr025/HireBuddy',
    live: 'https://hirebuddy-readyboss.onrender.com/'
  },
  {
    title: 'CortexCraft AI',
    tech: ['MERN', 'FastAPI', 'Groq (Llama 3.3)', 'Socket.IO'],
    description: 'Architected an AI mock interview platform using Groq, raising candidate shortlist rates by 25%. Enabled live collaboration for 50+ concurrent users with sub-100 ms message delivery.',
    achievements: 'Embedded 5 AI modules with Recharts dashboards for granular progress analytics.',
    github: 'https://github.com/keshavagr025/class-topper',
    live: 'https://class-topper-web.onrender.com/'
  },
  {
    title: 'TradeX AI',
    tech: ['React', 'Chart.js', 'JWT', 'Node.js'],
    description: 'Launched a stock trading simulation platform featuring Chart.js candlestick visualizations and live portfolio tracking for 10+ simulated instruments.',
    achievements: 'Implemented secure JWT-based authentication.',
    github: 'https://github.com/keshavagr025/Zerodha',
    live: 'https://zerodha-trade-u1e2.onrender.com/'
  }
];

export default function Projects() {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="text-4xl md:text-6xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
            className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[50px] group-hover:bg-cyan-500/30 transition-all duration-500" />

              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{project.title}</h3>

              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-xs font-mono text-cyan-300">
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 mb-4 text-sm leading-relaxed relative z-10">
                {project.description}
              </p>
              <p className="text-gray-400 text-sm font-mono relative z-10">
                <span className="text-purple-400">► </span>{project.achievements}
              </p>
            </div>

            <div className="flex gap-4 mt-8 relative z-10">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 text-xs font-mono font-bold tracking-wider"
              >
                <Github size={14} /> CODE
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/60 hover:text-cyan-300 transition-all duration-300 text-xs font-mono font-bold tracking-wider"
              >
                <ExternalLink size={14} /> LIVE DEMO
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
