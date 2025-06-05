'use client';

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setRotation({ x: rotateX, y: rotateY });
  }

  function handleMouseLeave() {
    setRotation({ x: 0, y: 0 });
    setIsHover(false);
  }

  function handleMouseEnter() {
    setIsHover(true);
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full">
        
        {/* Left: Contact Info */}
        <div className="flex flex-col justify-center text-white space-y-6 font-mono">
          <h2 className="text-4xl text-indigo-400 font-bold text-center">Get in Touch</h2>
          <p className="text-gray-300 ">
            Feel free to reach out via any of the following ways:
          </p>

          <div className="space-y-4">
            {/* Email - Clickable and opens Gmail */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=keshavagr204@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-indigo-300 transition-colors"
            >
              <Mail className="text-indigo-400" size={24} />
              <span className="text-lg underline">keshavagr204@gmail.com</span>
            </a>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <Phone className="text-green-400" size={24} />
              <span className="text-lg">+91 97548 72460</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <MapPin className="text-red-400" size={24} />
              <span className="text-lg">Guna, Madhya Pradesh, India</span>
            </div>
          </div>
        </div>

        {/* Right: 3D Contact Form */}
        <form
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          className={`space-y-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-8 shadow-2xl transition-transform duration-300 ${
            isHover ? "shadow-indigo-600/70" : "shadow-black/40"
          }`}
          style={{
            transform: `perspective(700px) rotateX(${-rotation.x}deg) rotateY(${rotation.y}deg)`,
            boxShadow: isHover
              ? `0 20px 40px rgba(130, 80, 230, 0.5)`
              : `0 10px 20px rgba(0,0,0,0.4)`,
          }}
        >
          <h2 className="text-3xl font-bold text-white mb-4 font-mono">
            Send a Message
          </h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold py-3 rounded-lg shadow-lg font-mono"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
