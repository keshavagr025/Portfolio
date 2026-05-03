import { User, Code, Send, Lightbulb, BriefcaseBusiness, Award } from 'lucide-react';

export default function Navbar({ sections, activeSection }) {
  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav className="fixed top-1/2 left-4 md:left-8 -translate-y-1/2 z-50 backdrop-blur-md bg-black/40 border border-cyan-400/40 shadow-[0_18px_60px_rgba(56,189,248,0.5)] rounded-3xl px-4 py-6 flex flex-col items-center justify-between gap-6 text-white animate-fadeIn transition-all duration-500">
      <div className="flex flex-col gap-5 items-center">
        <button
          onClick={() => scrollTo(sections.aboutRef)}
          className={`group hover:scale-110 transition-transform flex flex-col items-center text-center text-xs md:text-sm relative ${
            activeSection === 'about' ? 'text-cyan-300' : 'text-white'
          }`}
        >
          {activeSection === 'about' && (
            <span className="absolute -left-3 h-8 w-1 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          )}
          <User className="mb-1 group-hover:text-indigo-400" size={18} />
          <span className="group-hover:text-indigo-400">About</span>
        </button>
        <button
          onClick={() => scrollTo(sections.skillsRef)}
          className={`group hover:scale-110 transition-transform flex flex-col items-center text-center text-xs md:text-sm relative ${
            activeSection === 'skills' ? 'text-cyan-300' : 'text-white'
          }`}
        >
          {activeSection === 'skills' && (
            <span className="absolute -left-3 h-8 w-1 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          )}
          <Code className="mb-1 group-hover:text-green-400" size={18} />
          <span className="group-hover:text-green-400">Skills</span>
        </button>
        <button
          onClick={() => scrollTo(sections.projectsRef)}
          className={`group hover:scale-110 transition-transform flex flex-col items-center text-center text-xs md:text-sm relative ${
            activeSection === 'projects' ? 'text-cyan-300' : 'text-white'
          }`}
        >
          {activeSection === 'projects' && (
            <span className="absolute -left-3 h-8 w-1 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          )}
          <Lightbulb className="mb-1 group-hover:text-yellow-400" size={18} />
          <span className="group-hover:text-yellow-400">Projects</span>
        </button>
        <button
          onClick={() => scrollTo(sections.experienceRef)}
          className={`group hover:scale-110 transition-transform flex flex-col items-center text-center text-xs md:text-sm relative ${
            activeSection === 'experience' ? 'text-cyan-300' : 'text-white'
          }`}
        >
          {activeSection === 'experience' && (
            <span className="absolute -left-3 h-8 w-1 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          )}
          <BriefcaseBusiness className="mb-1 group-hover:text-emerald-400" size={18} />
          <span className="group-hover:text-emerald-400">Experience</span>
        </button>
        <button
          onClick={() => scrollTo(sections.achievementsRef)}
          className={`group hover:scale-110 transition-transform flex flex-col items-center text-center text-xs md:text-sm relative ${
            activeSection === 'achievements' ? 'text-cyan-300' : 'text-white'
          }`}
        >
          {activeSection === 'achievements' && (
            <span className="absolute -left-3 h-8 w-1 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          )}
          <Award className="mb-1 group-hover:text-amber-300" size={18} />
          <span className="group-hover:text-amber-300">Achievements</span>
        </button>
        <button
          onClick={() => scrollTo(sections.contactRef)}
          className={`group hover:scale-110 transition-transform flex flex-col items-center text-center text-xs md:text-sm relative ${
            activeSection === 'contact' ? 'text-cyan-300' : 'text-white'
          }`}
        >
          {activeSection === 'contact' && (
            <span className="absolute -left-3 h-8 w-1 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          )}
          <Send className="mb-1 group-hover:text-pink-400" size={18} />
          <span className="group-hover:text-pink-400">Contact</span>
        </button>
      </div>
    </nav>
  );
}

