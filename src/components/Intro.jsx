import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

/* ─── 3D CYBER HOLOGRAPHIC AVATAR ─── */
function CyberHoloMan({ isBoosted }) {
  const groupRef = useRef();
  const headRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();
  const cubesGroupRef = useRef();

  // Smooth mouse tracking targets
  const targetRotX = useRef(0);
  const targetRotY = useRef(0);

  // Generate 900 glowing particle points for the holographic aura
  const [particlePositions] = useMemo(() => {
    const count = 900;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 0.9 + Math.random() * 1.1;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) + 0.6;
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return [pos];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const mouse = state.mouse;

    // Smooth lerp mouse tracking
    targetRotX.current = THREE.MathUtils.lerp(targetRotX.current, mouse.y * 0.35, 0.05);
    targetRotY.current = THREE.MathUtils.lerp(targetRotY.current, mouse.x * 0.55, 0.05);

    if (groupRef.current) {
      groupRef.current.position.y = -0.55 + Math.sin(t * 2) * 0.12;
      groupRef.current.rotation.y = targetRotY.current;
      groupRef.current.rotation.x = -targetRotX.current * 0.4;
    }

    if (headRef.current) {
      headRef.current.rotation.y = mouse.x * 0.4;
      headRef.current.rotation.x = -mouse.y * 0.25;
    }

    if (ring1Ref.current && ring2Ref.current && ring3Ref.current) {
      ring1Ref.current.rotation.z = t * 1.4;
      ring1Ref.current.rotation.x = Math.sin(t * 0.6) * 0.4;
      ring2Ref.current.rotation.z = -t * 1.6;
      ring2Ref.current.rotation.y = Math.cos(t * 0.6) * 0.4;
      ring3Ref.current.rotation.x = t * 0.8;
      ring3Ref.current.rotation.z = t * 0.5;
    }

    if (cubesGroupRef.current) {
      cubesGroupRef.current.rotation.y = t * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.55, 0]} scale={isBoosted ? [1.25, 1.25, 1.25] : [1.1, 1.1, 1.1]}>

      {/* PARTICLES AURA AROUND CHARACTER */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={900} array={particlePositions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.035} color={isBoosted ? "#f43f5e" : "#00f0ff"} transparent opacity={0.8} sizeAttenuation />
      </points>

      {/* HEAD & NEON VISOR */}
      <group ref={headRef} position={[0, 1.75, 0]}>
        {/* Main Helmet */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.32, 32, 32]} />
          <meshStandardMaterial color="#070d1e" roughness={0.1} metalness={0.95} />
        </mesh>

        {/* Outer Cyber Grid */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.33, 16, 16]} />
          <meshBasicMaterial color="#00f0ff" wireframe transparent opacity={0.35} />
        </mesh>

        {/* Visor Screen */}
        <mesh position={[0, 0.06, 0.27]}>
          <boxGeometry args={[0.44, 0.13, 0.16]} />
          <meshStandardMaterial
            color={isBoosted ? "#f43f5e" : "#00f0ff"}
            emissive={isBoosted ? "#f43f5e" : "#00f0ff"}
            emissiveIntensity={isBoosted ? 7 : 5}
            roughness={0.0}
          />
        </mesh>

        {/* Holographic Light Beam Cone */}
        <mesh position={[0, 0.06, 0.65]} rotation={[Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.35, 0.7, 16]} />
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.18} />
        </mesh>

        {/* Cyber Ear Pods */}
        <mesh position={[-0.35, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.08, 0.08, 0.08, 16]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={3} />
        </mesh>
        <mesh position={[0.35, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.08, 0.08, 0.08, 16]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={3} />
        </mesh>
      </group>

      {/* NECK */}
      <mesh position={[0, 1.35, 0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.15, 16]} />
        <meshStandardMaterial color="#1e293b" metalness={0.9} />
      </mesh>

      {/* TORSO & CHEST REACTOR */}
      <group position={[0, 0.8, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.42, 0.3, 0.9, 16]} />
          <meshStandardMaterial color="#030712" roughness={0.15} metalness={0.9} />
        </mesh>

        {/* Chest Wireframe Armor */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.43, 0.31, 0.91, 14]} />
          <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.3} />
        </mesh>

        {/* Glowing Arc Core */}
        <mesh position={[0, 0.18, 0.35]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.14, 0.14, 0.06, 32]} />
          <meshStandardMaterial
            color={isBoosted ? "#ec4899" : "#38bdf8"}
            emissive={isBoosted ? "#ec4899" : "#00f0ff"}
            emissiveIntensity={isBoosted ? 8 : 6}
          />
        </mesh>

        {/* Shoulder Pauldrons */}
        <mesh position={[-0.48, 0.35, 0]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#a855f7" emissive="#9333ea" emissiveIntensity={3} />
        </mesh>
        <mesh position={[0.48, 0.35, 0]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#a855f7" emissive="#9333ea" emissiveIntensity={3} />
        </mesh>
      </group>

      {/* ARMS */}
      <group position={[-0.5, 1.1, 0]}>
        <mesh position={[-0.15, -0.3, 0]}>
          <cylinderGeometry args={[0.08, 0.07, 0.5, 16]} />
          <meshStandardMaterial color="#0f172a" metalness={0.85} />
        </mesh>
        <mesh position={[-0.12, -0.5, 0.25]} rotation={[Math.PI / 3, 0, 0]}>
          <cylinderGeometry args={[0.07, 0.06, 0.45, 16]} />
          <meshStandardMaterial color="#1e293b" metalness={0.85} />
        </mesh>
      </group>

      <group position={[0.5, 1.1, 0]}>
        <mesh position={[0.15, -0.3, 0]}>
          <cylinderGeometry args={[0.08, 0.07, 0.5, 16]} />
          <meshStandardMaterial color="#0f172a" metalness={0.85} />
        </mesh>
        <mesh position={[0.12, -0.5, 0.25]} rotation={[Math.PI / 3, 0, 0]}>
          <cylinderGeometry args={[0.07, 0.06, 0.45, 16]} />
          <meshStandardMaterial color="#1e293b" metalness={0.85} />
        </mesh>
      </group>

      {/* FLOATING HOLOGRAPHIC CODE TABLET */}
      <group position={[0, 0.45, 0.55]} rotation={[-0.2, 0, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.68, 0.02, 0.45]} />
          <meshStandardMaterial color="#020617" metalness={0.95} />
        </mesh>
        <mesh position={[0, 0.26, -0.2]} rotation={[-0.25, 0, 0]}>
          <boxGeometry args={[0.64, 0.45, 0.01]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={isBoosted ? 6 : 4}
            transparent
            opacity={0.95}
          />
        </mesh>
      </group>

      {/* LEGS & CYBER BOOTS */}
      <group position={[0, -0.2, 0]}>
        <mesh position={[-0.2, -0.4, 0]}>
          <cylinderGeometry args={[0.11, 0.09, 0.7, 16]} />
          <meshStandardMaterial color="#0b1329" metalness={0.85} />
        </mesh>
        <mesh position={[0.2, -0.4, 0]}>
          <cylinderGeometry args={[0.11, 0.09, 0.7, 16]} />
          <meshStandardMaterial color="#0b1329" metalness={0.85} />
        </mesh>
      </group>

      {/* 3D SPINNING HOLOGRAPHIC MATRIX RINGS */}
      <group ref={ring1Ref} position={[0, 0.8, 0]}>
        <mesh>
          <torusGeometry args={[1.4, 0.015, 16, 100]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={4} />
        </mesh>
      </group>

      <group ref={ring2Ref} position={[0, 0.8, 0]}>
        <mesh>
          <torusGeometry args={[1.65, 0.012, 16, 100]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={4} />
        </mesh>
      </group>

      <group ref={ring3Ref} position={[0, 0.8, 0]}>
        <mesh>
          <torusGeometry args={[1.9, 0.008, 16, 100]} />
          <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={3} />
        </mesh>
      </group>

      {/* ORBITING CYBER CODE CUBES */}
      <group ref={cubesGroupRef} position={[0, 0.8, 0]}>
        {[...Array(6)].map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const radius = 1.75;
          return (
            <mesh key={i} position={[Math.cos(angle) * radius, Math.sin(i) * 0.35, Math.sin(angle) * radius]}>
              <boxGeometry args={[0.09, 0.09, 0.09]} />
              <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={5} />
            </mesh>
          );
        })}
      </group>

      {/* BASE HOLOGRAPHIC PEDESTAL RING */}
      <mesh position={[0, -0.85, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.8, 1.4, 32]} />
        <meshBasicMaterial color={isBoosted ? "#f43f5e" : "#00f0ff"} transparent opacity={0.25} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default function Intro({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isBoosted, setIsBoosted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 65);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          onLoadingComplete?.();
        }, 600);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [progress, onLoadingComplete]);

  const handleBoost = () => {
    setIsBoosted(true);
    setProgress((prev) => Math.min(prev + 24, 100));
    setTimeout(() => setIsBoosted(false), 500);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          onClick={handleBoost}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(12px)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-[#02040a] text-white flex flex-col justify-between overflow-hidden select-none font-sans cursor-pointer"
        >
          {/* Ambient Background Glows & Dynamic Nitro Halos */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px] pointer-events-none transition-all duration-300 ${
            isBoosted ? 'w-[950px] h-[650px] bg-rose-500/30' : 'w-[800px] h-[550px] bg-cyan-500/18'
          }`} />
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

          {/* Animated Background Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 rounded-full ${isBoosted ? 'bg-rose-400' : 'bg-cyan-300'}`}
                style={{
                  top: `${(i * 11) % 100}%`,
                  left: `${(i * 19) % 100}%`,
                }}
                animate={{
                  y: [-25, 25, -25],
                  opacity: [0.2, 0.9, 0.2],
                  scale: [0.8, 1.6, 0.8],
                }}
                transition={{
                  duration: 2.5 + (i % 3),
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: (i * 0.15) % 2,
                }}
              />
            ))}
          </div>

          {/* Top Protocol Status Bar */}
          <div className="relative z-10 flex justify-between items-center px-8 py-6 text-xs font-mono text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-cyan-400 tracking-widest font-bold uppercase">// KESHAV PORTFOLIO LOAD PROTOCOL</span>
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] border font-bold ${
                isBoosted ? 'bg-rose-500/20 border-rose-500/50 text-rose-400 animate-bounce' : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
              }`}>
                {isBoosted ? '⚡ NITRO BOOST ACTIVE' : '3D SYSTEM ACTIVE'}
              </span>
              <span className="text-white font-bold tracking-wider">{progress}%</span>
            </div>
          </div>

          {/* CENTER: EPIC 3D HOLOGRAPHIC HERO EXPERIENCE */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 my-auto max-w-6xl mx-auto w-full">
            
            {/* Top Status Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[10px] sm:text-xs font-mono text-cyan-300 tracking-[0.25em] uppercase mb-2 shadow-[0_0_20px_rgba(6,182,212,0.35)]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              NEURAL 3D AVATAR: ONLINE
            </motion.div>

            {/* HIGH-PRECISION 3D HOLOGRAM CANVAS (UNCROPPED, HIGH RES) */}
            <div className="w-full h-64 sm:h-80 md:h-96 relative flex items-center justify-center">
              <Canvas
                gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
                camera={{ position: [0, 0.7, 4.6], fov: 42 }}
                className="w-full h-full"
              >
                <ambientLight intensity={1.2} />
                <directionalLight position={[6, 12, 6]} intensity={2.4} color="#00f0ff" />
                <pointLight position={[-6, 6, -6]} intensity={1.8} color="#a855f7" />
                <pointLight position={[0, 0, 5]} intensity={isBoosted ? 3.5 : 1.5} color={isBoosted ? "#f43f5e" : "#38bdf8"} />
                <CyberHoloMan isBoosted={isBoosted} />
              </Canvas>
            </div>

            {/* STUNNING HERO NAME DISPLAY */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white drop-shadow-[0_0_45px_rgba(6,182,212,0.75)] -mt-4 mb-2 relative"
            >
              KESHAV{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-500">
                AGRAWAL
              </span>
            </motion.h1>

            {/* SUBTITLE */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-mono text-xs md:text-sm text-cyan-300/90 tracking-[0.25em] md:tracking-[0.35em] uppercase mb-5"
            >
              FULL STACK DEVELOPER • AI/ML ARCHITECT
            </motion.p>

            {/* PROGRESS INDICATOR BAR */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-full max-w-md space-y-2.5"
            >
              {/* Progress Bar Container */}
              <div className="relative w-full h-3 bg-white/10 rounded-full p-0.5 backdrop-blur-md border border-white/15 overflow-hidden shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-purple-500 rounded-full transition-all duration-150 ease-out shadow-[0_0_20px_#22d3ee] relative"
                  style={{ width: `${progress}%` }}
                >
                  {/* Glowing Edge Light */}
                  <div className="absolute right-0 top-0 bottom-0 w-3 bg-white blur-[2px] rounded-full" />
                </div>
              </div>

              {/* Progress Percentage Text */}
              <div className="flex justify-between items-center text-xs font-mono text-gray-400 px-1">
                <span className="text-cyan-400/90 animate-pulse">
                  {progress < 100 ? 'LOADING ASSETS & 3D MATRIX...' : 'SYSTEM READY — ENTERING PORTFOLIO'}
                </span>
                <span className="font-bold text-white tracking-widest text-sm">{progress}%</span>
              </div>
            </motion.div>
          </div>

          {/* BOTTOM: HYPER CAR DRIVING ANIMATION WITH NITRO & WHEEL ROTATION */}
          <div className="relative z-10 w-full h-32 flex flex-col justify-end overflow-hidden pb-4">
            {/* Horizon Grid Line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#06b6d4]" />

            {/* Driving Road Track with Moving Dashes */}
            <div className="relative w-full h-12 bg-[#040814] border-t border-b border-cyan-500/30 overflow-hidden flex items-center">
              {/* Animated Road Lines sliding left */}
              <div className="absolute inset-0 flex items-center opacity-30">
                <motion.div
                  animate={{ x: [-100, 0] }}
                  transition={{ duration: 0.4, repeat: Infinity, ease: 'linear' }}
                  className="w-[200%] h-0.5 bg-gradient-to-r from-cyan-500/20 via-cyan-300 to-cyan-500/20 bg-[length:40px_100%]"
                />
              </div>

              {/* CAR POSITION DRIVEN DIRECTLY BY LOADING PROGRESS */}
              <div
                className="absolute bottom-1.5 transition-all duration-150 ease-out flex items-center"
                style={{
                  left: `calc(${progress}% * 1.15 - 80px)`
                }}
              >
                {/* Nitro Flame Sparks behind car */}
                <div className={`h-2.5 bg-gradient-to-r from-transparent via-cyan-400 to-purple-500 blur-sm opacity-90 -mr-1 transition-all ${
                  isBoosted ? 'w-56 bg-gradient-to-r from-transparent via-rose-500 to-cyan-400 opacity-100' : 'w-32 md:w-44'
                }`} />

                {/* Cyber Sports Car Graphic */}
                <div className="relative">
                  <svg width="78" height="26" viewBox="0 0 76 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_16px_rgba(6,182,212,1)]">
                    {/* Car Underglow */}
                    <ellipse cx="38" cy="23" rx="30" ry="2.5" fill={isBoosted ? "#f43f5e" : "#06b6d4"} opacity="1" />

                    {/* Car Base Body */}
                    <path d="M6 16 H70 L65 12 H52 L43 5 H24 L15 12 H6 Z" fill="#090e1e" stroke="#22d3ee" strokeWidth="1.5" />
                    
                    {/* Windshield / Roof */}
                    <path d="M26 6 H43 L50 12 H20 Z" fill="#06b6d4" opacity="0.6" stroke="#38bdf8" strokeWidth="1" />
                    
                    {/* Headlights Cone (Projecting Right) */}
                    <polygon points="65,13 76,10 76,18 65,15" fill="#67e8f9" opacity="0.9" />
                    
                    {/* Rear Red Taillight */}
                    <rect x="5" y="13" width="3" height="3" fill="#ef4444" className="animate-pulse" />

                    {/* Rear Spoiler */}
                    <rect x="6" y="9" width="8" height="1.5" fill="#38bdf8" />

                    {/* Front & Rear Spinning Wheels */}
                    <g className="animate-spin origin-[20px_17px]">
                      <circle cx="20" cy="17" r="4.5" fill="#020617" stroke="#38bdf8" strokeWidth="1.5" />
                      <line x1="20" y1="12.5" x2="20" y2="21.5" stroke="#67e8f9" strokeWidth="1" />
                      <line x1="15.5" y1="17" x2="24.5" y2="17" stroke="#67e8f9" strokeWidth="1" />
                    </g>
                    
                    <g className="animate-spin origin-[55px_17px]">
                      <circle cx="55" cy="17" r="4.5" fill="#020617" stroke="#38bdf8" strokeWidth="1.5" />
                      <line x1="55" y1="12.5" x2="55" y2="21.5" stroke="#67e8f9" strokeWidth="1" />
                      <line x1="50.5" y1="17" x2="59.5" y2="17" stroke="#67e8f9" strokeWidth="1" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom Subtext */}
            <div className="flex justify-between items-center px-8 pt-1.5 font-mono text-[10px] text-gray-400">
              <span className="text-cyan-400 animate-pulse">⚡ CLICK ANYWHERE TO ENGAGE NITRO BOOST</span>
              <span className="text-cyan-300 font-bold">DRIVE SPEED: {isBoosted ? '240 MPH' : '140 MPH'}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
