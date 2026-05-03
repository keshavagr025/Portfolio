import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter">
          Let's Build Something <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Crazy.
          </span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a 
          href="mailto:keshavagr204@gmail.com" 
          className="inline-block px-12 py-4 bg-white hover:bg-gray-200 text-black font-black text-xl rounded-full transition-transform hover:scale-105 active:scale-95"
        >
          Say Hello
        </a>

        <div className="mt-20 flex gap-8 justify-center items-center text-gray-500 font-mono text-sm">
          <a href="https://github.com/keshavagr025" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
          <a href="https://leetcode.com/u/Keshav-codes" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">LeetCode</a>
          <a href="https://codechef.com/users/keshav76" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">CodeChef</a>
        </div>
      </motion.div>
    </div>
  );
}
