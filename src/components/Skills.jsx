import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  Programming: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  Backend: ['Node.js', 'Express.js', 'Django', 'Flask', 'REST APIs', 'FastAPI'],
  Frontend: ['React.js', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Bootstrap'],
  Databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
  Tools: ['Docker', 'Git', 'GitHub', 'Linux']
};

const achievements = [
  { title: "Runner-up, Hacksagon 2025", desc: "Top 10 among 600+ teams by orchestrating an ATS pipeline connecting 13+ third-party APIs." },
  { title: "Top 10, College Hackathon JUET", desc: "Secured Top 10 among 48 teams by delivering CortexCraft's AI feature set within 24 hours." },
  { title: "Top 5, Compile Rush 2.0", desc: "Outperformed 95%+ of participants in algorithmic challenges at Rishihood University." },
  { title: "Open Source Contributions", desc: "GSSoC 2024 Contributor (20+ PRs), Hacktoberfest 2024 (4 badges), The Mifos Initiative (5+ defect patches in Docker microservices)." }
];

export default function Skills() {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 justify-center h-full items-center">

      {/* Left: Skills */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        className="flex-1 space-y-8 w-full"
      >
        <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Technical Arsenal
        </h2>

        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-bold text-white mb-3 font-mono">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map(skill => (
                <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Right: Achievements */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        className="flex-1 space-y-6 w-full"
      >
        <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          Trophies & Milestones
        </h2>

        <div className="space-y-4">
          {achievements.map((ach, idx) => (
            <div key={idx} className="p-4 bg-black/40 border-l-4 border-purple-500 rounded-r-2xl hover:bg-white/5 transition-colors">
              <h4 className="text-lg font-bold text-white mb-1">{ach.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{ach.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
