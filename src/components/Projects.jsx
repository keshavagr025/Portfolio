import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'IntelliHire AI (ReadyBoss)',
    tech: ['MERN', 'OpenAI', 'Claude'],
    description: 'Constructed a candidate screening platform connecting 13+ APIs for ATS scoring, skill-gap detection, and career roadmap generation.',
    achievements: 'Awarded Runner-up at Hacksagon 2025 among 600+ teams. Automated PDF parsing cutting screening time by ~40%.',
    link: '#'
  },
  {
    title: 'CortexCraft AI',
    tech: ['MERN', 'FastAPI', 'Groq (Llama 3.3)', 'Socket.IO'],
    description: 'Architected an AI mock interview platform using Groq, raising candidate shortlist rates by 25%. Enabled live collaboration for 50+ concurrent users with sub-100 ms message delivery.',
    achievements: 'Embedded 5 AI modules with Recharts dashboards for granular progress analytics.',
    link: '#'
  },
  {
    title: 'TradeX AI',
    tech: ['React', 'Chart.js', 'JWT', 'Node.js'],
    description: 'Launched a stock trading simulation platform featuring Chart.js candlestick visualizations and live portfolio tracking for 10+ simulated instruments.',
    achievements: 'Implemented secure JWT-based authentication.',
    link: '#'
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
            className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
          >
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

            <a href={project.link} className="inline-block mt-8 text-cyan-400 hover:text-white font-mono font-bold tracking-widest uppercase text-sm transition-colors relative z-10">
              View Project ↗
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
