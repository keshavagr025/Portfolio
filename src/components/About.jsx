'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';
import { motion } from 'framer-motion';
import '../index.css';
import '../App.css';

export default function About() {
  const vantaRef = useRef(null);
  const aboutDetailsRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 100.0,
          minWidth: 100.0,
          scale: 0.5,
          scaleMobile: 0.5,
          color: 0xeaeaea,
          backgroundColor: 0x000000,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const handleScrollToDetails = () => {
    if (aboutDetailsRef.current) {
      aboutDetailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Globe Background Section */}
      <section
        ref={vantaRef}
        className="h-screen w-full flex flex-col items-center justify-center relative text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="z-10 text-center px-6 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-mono text-cyan-400 whitespace-nowrap overflow-hidden border-r-2 border-white animate-typing">
            Hi, I'm Keshav
          </h2>
          <p className="text-lg text-blue-100 mb-6 font-mono md:animate-typing2 md:whitespace-nowrap md:overflow-hidden md:border-r-2 md:border-white">
            A Full Stack Web Developer who loves solving real-world problems.
          </p>
          <button
            onClick={handleScrollToDetails}
            className="px-6 py-2 rounded-full font-mono bg-violet-600 hover:bg-violet-700 transition text-white font-semibold"
          >
            Read More About Me
          </button>
        </motion.div>
      </section>

      {/* Detailed About Section */}
      <section
        ref={aboutDetailsRef}
        className="w-full px-6 py-16 bg-cyan-900 text-white flex flex-col items-center"
      >
        {/* Profile Image */}
        <motion.div
          className="w-40 h-40 rounded-full overflow-hidden shadow-xl cursor-pointer mb-6"
          style={{
            perspective: 1000,
            boxShadow:
              '0 10px 20px rgba(145, 94, 255, 0.5), 0 0 20px rgba(145, 94, 255, 0.4)',
          }}
          initial={{ opacity: 0, rotateY: -10 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          whileHover={{ rotateY: 10, scale: 1.05 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="image/keshav.jpeg"
            alt="Keshav"
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>

        {/* Header */}
        <motion.h3
          className="text-3xl font-bold-200 mb-4 text-center font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          let’s
          Introduce 
          myself
        </motion.h3>

        {/* College and School Info */}

             {/* College Logo */}
        <motion.img
          src="image/logo1.png"
          alt="JUET Logo"
         className="mt-6 w-14 h-auto rounded-lg shadow-lg mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        />
        <br></br>
        <motion.p
          className="max-w-3xl text-center text-lg font-mono text-blue-100 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I'm currently pursuing my B.Tech at{' '}
          <span className="text-cyan-300 font-semibold">
            Jaypee University of Engineering and Technology (JUET), Guna
          </span>
          , I am interested in algorithms and Data Structures involved in solving popular problems in computer science.
   
       <br></br>    <br></br>
         I’m , a passionate MERN stack developer who loves building fast, accessible, and scalable web apps. From frontend animations to backend APIs, I enjoy crafting smooth user experiences that blend design and logic. I'm also exploring AI integrations to create smarter interfaces and intelligent tools. Outside of coding, you’ll find me sketching UI ideas or exploring new tech trends!
        </motion.p>
      </section>
    </>
  );
}
