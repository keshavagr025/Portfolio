import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Brain,
  Camera,
  MessageSquare,
  FileText,
  HeartPulse,
  Bot,
  TrendingUp,
  Terminal,
  Sparkles,
  Award,
  Code2,
  Cpu,
  Database,
  Layers,
  Zap,
  BarChart2,
  Volume2,
  ShieldCheck,
  Globe
} from 'lucide-react';

const projects = [
  {
    title: 'IntelliHire AI (ReadyBoss)',
    tech: ['MERN', 'OpenAI', 'Claude', 'ATS Scoring'],
    description: 'Constructed a candidate screening platform connecting 13+ APIs for ATS scoring, skill-gap detection, and career roadmap generation.',
    achievements: 'Awarded Runner-up at Hacksagon 2025 among 600+ teams. Automated PDF parsing cutting screening time by ~40%.',
    github: 'https://github.com/keshavagr025/HireBuddy',
    live: 'https://hirebuddy-readyboss.onrender.com/',
    image: '/image/project_intellihire.png',
    icon: Brain,
    badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.25)]',
    dotBg: 'bg-purple-400 shadow-[0_0_14px_rgba(168,85,247,1)]',
    gradientGlow: 'from-purple-600/30 via-indigo-600/10 to-transparent'
  },
  {
    title: 'sayCheese.ai',
    tech: ['React', 'Node.js', 'AI Vision', 'Python', 'Machine Learning'],
    description: 'AI-powered photography and instant smart photo capture platform featuring intelligent scene detection, automated filter recommendation, and facial expression analysis.',
    achievements: 'Engineered high-speed real-time image processing pipeline with smart photo optimization.',
    github: 'https://github.com/keshavagr025/sayCheese.ai',
    live: 'https://saycheese-ai.onrender.com/',
    image: '/image/project_saycheese.png',
    icon: Camera,
    badgeBg: 'bg-rose-500/10 text-rose-400 border-rose-500/30 shadow-[0_0_25px_rgba(244,63,94,0.25)]',
    dotBg: 'bg-rose-400 shadow-[0_0_14px_rgba(244,63,94,1)]',
    gradientGlow: 'from-rose-600/30 via-pink-600/10 to-transparent'
  },
  {
    title: 'Real-Time Cyber Chat',
    tech: ['React', 'Socket.IO', 'Node.js', 'MongoDB', 'Web Audio'],
    description: 'Full-featured real-time chat platform with instant messaging, active user presence tracking, media sharing, and custom audio sound synthesis feedback.',
    achievements: 'Built low-latency Socket.IO event architecture supporting sub-50ms message broadcast with secure authentication.',
    github: 'https://github.com/keshavagr025/Chat-App',
    live: 'https://chat-app-live.onrender.com/',
    image: '/image/project_chat.png',
    icon: MessageSquare,
    badgeBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.25)]',
    dotBg: 'bg-cyan-400 shadow-[0_0_14px_rgba(6,182,212,1)]',
    gradientGlow: 'from-cyan-600/30 via-blue-600/10 to-transparent'
  },
  {
    title: 'Docs.ai',
    tech: ['React', 'Node.js', 'OpenAI API', 'Vector DB', 'Express'],
    description: 'AI document intelligence and automated analysis platform for instant PDF context extraction, multi-document semantic search, and summary generation.',
    achievements: 'Implemented RAG (Retrieval-Augmented Generation) pipeline for accurate Q&A with source citations.',
    github: 'https://github.com/keshavagr025/Docs-ai',
    live: 'https://docs-ai-app.onrender.com/',
    image: '/image/project_docsai.png',
    icon: FileText,
    badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-[0_0_25px_rgba(245,158,11,0.25)]',
    dotBg: 'bg-amber-400 shadow-[0_0_14px_rgba(245,158,11,1)]',
    gradientGlow: 'from-amber-600/30 via-orange-600/10 to-transparent'
  },
  {
    title: 'appointToDoctor (HealthifNow)',
    tech: ['MERN Stack', 'Razorpay API', 'JWT', 'TailwindCSS'],
    description: 'Full-stack healthcare app enabling patients to find doctors, schedule appointments, process digital payments, and access medical records.',
    achievements: 'Integrated Razorpay payment gateway and real-time appointment availability calendar.',
    github: 'https://github.com/keshavagr025/appointToDoctor',
    live: 'https://appoint-to-doctor.onrender.com/',
    image: '/image/project_appointdoctor.png',
    icon: HeartPulse,
    badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.25)]',
    dotBg: 'bg-emerald-400 shadow-[0_0_14px_rgba(16,185,129,1)]',
    gradientGlow: 'from-emerald-600/30 via-teal-600/10 to-transparent'
  },
  {
    title: 'CortexCraft AI',
    tech: ['MERN', 'FastAPI', 'Groq (Llama 3.3)', 'Socket.IO'],
    description: 'Architected an AI mock interview platform using Groq, raising candidate shortlist rates by 25%. Enabled live collaboration for 50+ concurrent users with sub-100 ms message delivery.',
    achievements: 'Embedded 5 AI modules with Recharts dashboards for granular progress analytics.',
    github: 'https://github.com/keshavagr025/class-topper',
    live: 'https://class-topper-web.onrender.com/',
    image: '/image/project_cortexcraft.png',
    icon: Bot,
    badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30 shadow-[0_0_25px_rgba(59,130,246,0.25)]',
    dotBg: 'bg-blue-400 shadow-[0_0_14px_rgba(59,130,246,1)]',
    gradientGlow: 'from-blue-600/30 via-indigo-600/10 to-transparent'
  },
  {
    title: 'TradeX AI',
    tech: ['React', 'Chart.js', 'JWT', 'Node.js'],
    description: 'Launched a stock trading simulation platform featuring Chart.js candlestick visualizations and live portfolio tracking for 10+ simulated instruments.',
    achievements: 'Implemented secure JWT-based authentication with simulated live market orders.',
    github: 'https://github.com/keshavagr025/Zerodha',
    live: 'https://zerodha-trade-u1e2.onrender.com/',
    image: '/image/project_tradex.png',
    icon: TrendingUp,
    badgeBg: 'bg-lime-500/10 text-lime-400 border-lime-500/30 shadow-[0_0_25px_rgba(132,204,22,0.25)]',
    dotBg: 'bg-lime-400 shadow-[0_0_14px_rgba(132,204,22,1)]',
    gradientGlow: 'from-lime-600/30 via-emerald-600/10 to-transparent'
  },
  {
    title: 'Bunny Terminal for Fun',
    tech: ['React', 'Web Audio API', 'CRT CSS Engine', 'Fullscreen API'],
    description: 'Interactive retro terminal OS simulator featuring CRT scanline shaders, live case file analysis, audio synthesis, and a functional command-line security shell.',
    achievements: 'Designed pixel-perfect system notice boot screen and custom retro shell environment.',
    github: 'https://github.com/keshavagr025/Portfolio',
    live: '#',
    image: '/image/project_bunnyterminal.png',
    icon: Terminal,
    badgeBg: 'bg-green-500/10 text-green-400 border-green-500/30 shadow-[0_0_25px_rgba(34,197,94,0.25)]',
    dotBg: 'bg-green-400 shadow-[0_0_14px_rgba(34,197,94,1)]',
    gradientGlow: 'from-green-600/30 via-emerald-600/10 to-transparent'
  }
];

function getTechIcon(name) {
  const n = name.toLowerCase();
  if (n.includes('ai') || n.includes('openai') || n.includes('claude') || n.includes('groq') || n.includes('vision') || n.includes('rag')) return <Sparkles size={12} className="text-amber-400" />;
  if (n.includes('react') || n.includes('mern') || n.includes('node') || n.includes('express') || n.includes('python')) return <Code2 size={12} className="text-cyan-400" />;
  if (n.includes('db') || n.includes('mongo') || n.includes('vector')) return <Database size={12} className="text-emerald-400" />;
  if (n.includes('socket') || n.includes('fastapi') || n.includes('real-time')) return <Zap size={12} className="text-yellow-400" />;
  if (n.includes('chart') || n.includes('scoring') || n.includes('ats')) return <BarChart2 size={12} className="text-purple-400" />;
  if (n.includes('audio')) return <Volume2 size={12} className="text-pink-400" />;
  if (n.includes('razorpay') || n.includes('jwt')) return <ShieldCheck size={12} className="text-blue-400" />;
  return <Layers size={12} className="text-cyan-400" />;
}

export default function Projects() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 relative">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="text-center mb-20"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-4">
          <Sparkles size={14} /> Showcase
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mt-3">
          Explore my latest full-stack and AI applications engineered for performance, scalability, and user experience.
        </p>
      </motion.div>

      {/* Central Timeline Vertical Line */}
      <div className="absolute left-6 md:left-1/2 top-44 bottom-12 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-white/20 pointer-events-none z-0" />

      {/* Projects Timeline List */}
      <div className="space-y-20 md:space-y-28 relative z-10">
        {projects.map((project, idx) => {
          const IconComponent = project.icon;
          const isEven = idx % 2 === 0;

          const TextContent = (
            <motion.div
              initial={{ opacity: 0, x: isEven ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${isEven ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} pl-10 md:pl-0`}
            >
              {/* Icon Badge */}
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${project.badgeBg} mb-4`}>
                <IconComponent size={22} />
              </div>

              {/* Project Title */}
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 max-w-lg">
                {project.description}
              </p>

              {/* Key Achievement */}
              <div className={`flex items-start gap-2.5 mb-5 text-xs md:text-sm font-mono text-gray-300 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                <div className="p-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-400 shrink-0 mt-0.5">
                  <Award size={14} />
                </div>
                <span>{project.achievements}</span>
              </div>

              {/* Tech Tags */}
              <div className={`flex flex-wrap gap-2 mb-6 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-cyan-300 hover:border-cyan-500/40 transition-colors"
                  >
                    {getTechIcon(t)}
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className={`flex items-center gap-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
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
                  <ExternalLink size={14} /> DEMO
                </a>
              </div>
            </motion.div>
          );

          const ImageContent = (
            <motion.div
              initial={{ opacity: 0, x: isEven ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="pl-10 md:pl-0"
            >
              <div className="group relative rounded-3xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:border-white/30 transition-all duration-500">
                {/* Glow Background */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradientGlow} opacity-30 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none`} />

                {/* Top browser bar mockup */}
                <div className="px-4 py-2.5 border-b border-white/10 bg-black/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[11px] font-mono text-gray-500 truncate">
                      {project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.app
                    </span>
                  </div>
                  <Globe size={12} className="text-gray-500" />
                </div>

                {/* Project Showcase Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 sm:h-64 md:h-72 object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </motion.div>
          );

          return (
            <div key={project.title} className="relative">
              {/* Central Node Icon Badge on Vertical Line */}
              <div className="absolute left-6 md:left-1/2 top-4 -translate-x-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-[#020617] border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.9)]">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${project.badgeBg}`}>
                  <IconComponent size={16} />
                </div>
              </div>

              {/* Grid Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                {/* Desktop Alternating Rows */}
                {isEven ? (
                  <>
                    {TextContent}
                    {ImageContent}
                  </>
                ) : (
                  <>
                    <div className="hidden md:block">{ImageContent}</div>
                    <div className="hidden md:block">{TextContent}</div>
                    {/* Mobile order: Text then Image */}
                    <div className="block md:hidden space-y-6">
                      {TextContent}
                      {ImageContent}
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


