'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaDatabase,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiHtml5, SiCss3, SiTailwindcss, SiExpress, SiFastapi,
  SiSocketdotio, SiMongodb, SiSanity, SiJavascript, SiTypescript, SiCplusplus, SiC, SiPostgresql, SiBootstrap
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <FaReact />,
    skills: [
      { name: 'ReactJS', icon: <FaReact /> },
      { name: 'NextJS', icon: <SiNextdotjs /> },
      { name: 'HTML', icon: <SiHtml5 /> },
      { name: 'CSS', icon: <SiCss3 /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'Bootstrap', icon: <SiBootstrap /> },
    ],
  },
  {
    title: 'Backend Development',
    icon: <FaNodeJs />,
    skills: [
      { name: 'NodeJS', icon: <FaNodeJs /> },
      { name: 'ExpressJS', icon: <SiExpress /> },
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'Socket.IO', icon: <SiSocketdotio /> },
    ],
  },
  {
    title: 'Database & CMS',
    icon: <FaDatabase />,
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'SQL', icon: <FaDatabase /> },
    ],
  },
  {
    title: 'Programming Languages',
    icon: <FaPython />,
    skills: [
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'C', icon: <SiC /> },
      { name: 'Python', icon: <FaPython /> },
    ],
  },
  {
    title: 'Version Control',
    icon: <FaGitAlt />,
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
    ],
  },
];

export default function Skills() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <section className="bg-black text-white px-4 py-16 min-h-screen">
      <h2 className="text-4xl font-mono font-bold-200 text-blue-400 text-center mb-12">
         Technical Skills
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`border border-blue-300 rounded-xl p-6 bg-[#0f0f0f] transition-all duration-300 cursor-pointer ${
              openCategory === index ? 'ring-2 ring-pink-300' : ''
            }`}
            onClick={() => toggleCategory(index)}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <span className="text-xl">{category.icon}</span>
            </div>

            <AnimatePresence>
              {openCategory === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-3 mt-4">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="flex items-center gap-2 bg-opacity-95 text-opacity-95 px-3 py-1 rounded-full text-sm shadow-sm border border-blue-300"
                      >
                        {skill.icon} {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
