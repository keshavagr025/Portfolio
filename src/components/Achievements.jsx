import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, GitPullRequest, Code } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10 border-yellow-400/20',
    title: 'Runner-up: Hacksagon 2025',
    org: 'ABV IIITM Gwalior',
    desc: 'Placed Top 10 among 600+ teams by orchestrating an ATS pipeline connecting 13+ third-party APIs.',
  },
  {
    icon: Trophy,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10 border-cyan-400/20',
    title: 'Top 10: College Hackathon',
    org: 'JUET Guna',
    desc: 'Secured Top 10 among 48 teams by delivering CortexCraft\'s full AI feature set within a 24-hour sprint.',
  },
  {
    icon: Star,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10 border-purple-400/20',
    title: 'Top 5: Compile Rush 2.0',
    org: 'Rishihood University',
    desc: 'Outperformed 95%+ of participants in algorithmic challenges.',
  },
  {
    icon: GitPullRequest,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10 border-emerald-400/20',
    title: 'Open Source: The Mifos Initiative',
    org: 'Nov 2025 – Present',
    desc: 'Patched 5+ API/auth defects in Docker + OpenAPI microservice architecture spanning 3 repositories.',
  },
  {
    icon: GitPullRequest,
    color: 'text-orange-400',
    bg: 'bg-orange-400/10 border-orange-400/20',
    title: 'Hacktoberfest 2024',
    org: 'Oct 2024',
    desc: 'Earned 4 completion badges with 8+ merged PRs in open-source projects.',
  },
  {
    icon: Code,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10 border-blue-400/20',
    title: 'GSSoC 2024 Contributor',
    org: 'Jun 2024',
    desc: 'Submitted 20+ accepted PRs covering feature additions, bug fixes, and documentation upgrades.',
  },
];

export default function Achievements() {
  return (
    <div id="achievements" className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Milestones</span>
        </h2>
        <p className="text-gray-500 font-mono text-sm mb-10">Hackathons · Open Source · Competitive Programming</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className={`inline-flex p-2 rounded-xl border mb-4 ${item.bg}`}>
                  <Icon size={18} className={item.color} />
                </div>
                <h3 className="text-white font-semibold text-base mb-1 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                <p className={`text-xs font-mono mb-3 ${item.color}`}>{item.org}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
