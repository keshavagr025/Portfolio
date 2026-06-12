import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  Programming: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  Backend: ['Node.js', 'Express.js', 'Django', 'Flask', 'REST APIs', 'FastAPI'],
  Frontend: ['React.js', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Bootstrap'],
  Databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
  Tools: ['Docker', 'Git', 'GitHub', 'Linux']
};

export default function Skills() {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="space-y-12 w-full"
      >
        <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-center">
          Technical Arsenal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div 
              key={category}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4 font-mono border-b border-white/10 pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
