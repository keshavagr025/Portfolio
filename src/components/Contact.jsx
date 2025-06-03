import React, { useState } from "react";

export default function Contact() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);

  // Handler for mouse move inside the form container to update rotation
  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse x relative to form
    const y = e.clientY - rect.top;  // mouse y relative to form
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation based on mouse position - max 15deg rotation
    const rotateX = ((y - centerY) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setRotation({ x: rotateX, y: rotateY });
  }

  // Reset rotation on mouse leave
  function handleMouseLeave() {
    setRotation({ x: 0, y: 0 });
    setIsHover(false);
  }

  // Set hover state on mouse enter
  function handleMouseEnter() {
    setIsHover(true);
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-10 bg-gray-900">
      <form
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className={`max-w-md w-full space-y-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-8 shadow-2xl
          transition-transform duration-300
          ${isHover ? "shadow-indigo-600/70" : "shadow-black/40"}`}
        style={{
          transform: `perspective(700px) rotateX(${-rotation.x}deg) rotateY(${rotation.y}deg)`,
          boxShadow: isHover
            ? `0 20px 40px rgba(130, 80, 230, 0.5)`
            : `0 10px 20px rgba(0,0,0,0.4)`,
        }}
      >
        <h2 className="text-4xl font-bold mb-6 text-white select-none font-mono "> Contact Me</h2>
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
  );
}
