import { User, Code,  Send ,Lightbulb } from 'lucide-react';

export default function Navbar({ sections }) {
  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-white/10 border border-white/30 shadow-2xl shadow-indigo-500/50 rounded-full px-8 py-3 flex gap-6 items-center text-white animate-fadeIn transition-all duration-500">
      <button onClick={() => scrollTo(sections.aboutRef)} className="group hover:scale-110 transition-transform">
        <User className="inline mb-1 group-hover:text-indigo-400" />
        <span className="block text-sm mt-1 group-hover:text-indigo-400">About</span>
      </button>
      <button onClick={() => scrollTo(sections.skillsRef)} className="group hover:scale-110 transition-transform">
        <Code className="inline mb-1 group-hover:text-green-400" />
        <span className="block text-sm mt-1 group-hover:text-green-400">Skills</span>
      </button>
      <button onClick={() => scrollTo(sections.projectsRef)} className="group hover:scale-110 transition-transform">
        <Lightbulb  className="inline mb-1 group-hover:text-yellow-400" />
        <span className="block text-sm mt-1 group-hover:text-yellow-400">Projects</span>
      </button>
      <button onClick={() => scrollTo(sections.contactRef)} className="group hover:scale-110 transition-transform">
        <Send className="inline mb-1 group-hover:text-pink-400" />
        <span className="block text-sm mt-1 group-hover:text-pink-400">Contact</span>
      </button>
    </nav>
  );
}

