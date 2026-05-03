import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Scroll, Stars } from '@react-three/drei';
import * as THREE from 'three';
import Hero from './Hero';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Achievements from './Achievements';
import Contact from './Contact';

function NeuralNetwork() {
  const groupRef = useRef();
  const count = 150;

  const [positions, lines] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
    }

    const lineIndices = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const distSq = dx * dx + dy * dy + dz * dz;
        if (distSq < 45) lineIndices.push(i, j);
      }
    }

    return [pos, new Uint16Array(lineIndices)];
  }, [count]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.15} color="#00f0ff" transparent opacity={0.8} sizeAttenuation />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
          <bufferAttribute attach="index" count={lines.length} array={lines} itemSize={1} />
        </bufferGeometry>
        <lineBasicMaterial color="#1a6fff" transparent opacity={0.5} />
      </lineSegments>
    </group>
  );
}

/* ─── About section rendered inside the scroll ─── */
function About() {
  return (
    <div id="about" className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
      {/* Photo — circular, fixed size, object-top so face shows */}
      <div className="flex-shrink-0 flex flex-col items-center gap-4">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.4)] ring-4 ring-cyan-500/10">
          <img
            src="/image/keshav.jpeg"
            alt="Keshav Agrawal"
            className="w-full h-full object-cover object-top"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available
        </div>
      </div>

      {/* Text */}
      <div className="flex-1 space-y-5">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Introduce Myself</span>
        </h2>

        <p className="text-gray-300 text-base leading-relaxed">
          I'm a developer from <span className="text-cyan-400 font-semibold">Guna, Madhya Pradesh</span> building at the intersection of
          <span className="text-white font-semibold"> AI and full-stack engineering</span>. The world is shifting toward intelligent applications
          and I'm here for it, shipping real products that use AI to actually solve problems.
        </p>

        <p className="text-gray-400 text-sm leading-relaxed">
          Currently a <span className="text-white font-semibold">3rd year B.Tech student</span> at JUET, Guna integrating LLMs like{' '}
          <span className="text-white font-semibold">Groq, OpenAI and Claude</span> into MERN apps, building real-time systems,
          and contributing to open source. I also solve <span className="text-white font-semibold">400+</span> problems on LeetCode
          because strong fundamentals power better AI systems.
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {['MERN Stack', 'Open Source', 'DSA · 400+ LeetCode'].map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-gray-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-2">
          <a
            href="https://github.com/keshavagr025"
            target="_blank" rel="noreferrer"
            className="px-6 py-2.5 rounded-full bg-white text-black font-bold font-mono text-sm hover:bg-gray-200 transition-transform hover:scale-105"
          >
            GitHub
          </a>
          <a
            href="https://leetcode.com/u/Keshav-codes"
            target="_blank" rel="noreferrer"
            className="px-6 py-2.5 rounded-full border border-cyan-500/50 text-cyan-400 font-bold font-mono text-sm hover:bg-cyan-500/10 transition-colors"
          >
            LeetCode
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Scene() {
  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <NeuralNetwork />

      <Scroll html style={{ width: '100%', height: '100%' }}>
        {/* Page 1: Hero */}
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <Hero />
        </div>

        {/* Page 2: About Me */}
        <div className="w-screen min-h-screen flex flex-col justify-center py-20 px-6 md:px-20">
          <About />
        </div>

        {/* Page 3: Experience */}
        <div id="experience" className="w-screen min-h-screen flex flex-col justify-center py-20 px-6 md:px-20">
          <Experience />
        </div>

        {/* Page 4: Skills */}
        <div id="skills" className="w-screen min-h-screen flex flex-col justify-center py-20 px-6 md:px-20">
          <Skills />
        </div>

        {/* Page 5-6: Projects */}
        <div id="projects" className="w-screen min-h-[180vh] flex flex-col py-20 px-6 md:px-20">
          <Projects />
        </div>

        {/* Page 7: Achievements */}
        <div id="achievements" className="w-screen min-h-screen flex flex-col justify-center py-20 px-6 md:px-20">
          <Achievements />
        </div>

        {/* Page 8: Contact */}
        <div id="contact" className="w-screen h-screen flex flex-col justify-center px-6 md:px-20">
          <Contact />
        </div>
      </Scroll>
    </>
  );
}
