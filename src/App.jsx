import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Loader } from '@react-three/drei';
import { User, BriefcaseBusiness, Folder, Code2, Mail, Trophy } from 'lucide-react';
import Scene from './components/Scene';

const NAV_LINKS = [
  { label: 'About',        id: 'about',        Icon: User },
  { label: 'Experience',   id: 'experience',   Icon: BriefcaseBusiness },
  { label: 'Skills',       id: 'skills',       Icon: Code2 },
  { label: 'Projects',     id: 'projects',     Icon: Folder },
  { label: 'Achievements', id: 'achievements', Icon: Trophy },
  { label: 'Contact',      id: 'contact',      Icon: Mail },
];

function Navbar() {
  const [active, setActive] = useState('about');

  useEffect(() => {
    let observer;
    let timeoutId;

    const setupObserver = () => {
      const sections = NAV_LINKS.map(l => document.getElementById(l.id)).filter(Boolean);
      
      // If sections are not fully loaded in DOM, wait and try again
      if (sections.length < NAV_LINKS.length) {
        timeoutId = setTimeout(setupObserver, 100);
        return;
      }

      // Find Drei scroll container - a parent of our HTML sections with overflow auto/scroll
      const scrollContainer = sections[0].closest('div[style*="overflow"]') || 
                              sections[0].parentElement?.parentElement || 
                              null;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        {
          root: scrollContainer,
          threshold: 0.25, // visible when 25% enters viewport area
          rootMargin: '-20% 0px -20% 0px' // offset so it triggers when center element is focused
        }
      );

      sections.forEach(s => observer.observe(s));
    };

    setupObserver();

    return () => {
      if (observer) observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3">
      {/* Vertical line behind icons */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/5 rounded-full" />

      {NAV_LINKS.map(({ label, id, Icon }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleClick(e, id)}
            className="relative flex items-center group"
          >
            {/* Tooltip label — slides in from right */}
            <span
              className={`absolute right-12 whitespace-nowrap text-xs font-mono px-3 py-1.5 rounded-full border
                pointer-events-none transition-all duration-200
                ${isActive
                  ? 'opacity-100 translate-x-0 text-cyan-400 border-cyan-500/40 bg-cyan-500/10 backdrop-blur-md'
                  : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-gray-300 border-white/10 bg-black/60 backdrop-blur-md'
                }`}
            >
              {label}
            </span>

            {/* Icon button */}
            <div
              className={`relative z-10 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300
                ${isActive
                  ? 'bg-cyan-500/20 border border-cyan-500/60 text-cyan-400 shadow-[0_0_18px_rgba(6,182,212,0.5)]'
                  : 'bg-black/40 border border-white/10 text-gray-500 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10'
                }`}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 1.5} />
            </div>
          </a>
        );
      })}
    </nav>
  );
}

function App() {
  const [pages, setPages] = useState(9.5);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Stacking of elements on mobile requires significantly more scroll height
      if (width < 768) {
        setPages(14.5);
      } else if (width < 1024) {
        setPages(12);
      } else {
        setPages(9.5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-screen h-screen bg-[#00040a] overflow-hidden text-white font-sans">
      {/* Navbar rendered outside Canvas so it's always visible */}
      <Navbar />

      <Canvas shadows camera={{ position: [0, 0, 10], fov: 45 }}>
        <color attach="background" args={['#000814']} />
        <fog attach="fog" args={['#000814', 5, 40]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />

        <Suspense fallback={null}>
          <ScrollControls pages={pages} damping={0.2}>
            <Scene />
          </ScrollControls>
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}

export default App;
