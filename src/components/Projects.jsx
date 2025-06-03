"use client";

import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Real Time Zerodha Trading",
    description: "A real-time trading application using Alpha Vantage  API.",
    tech: ["React", "Tailwind", "Zerodha API"],
    image: "/image/image.png", // add your project images in public/projects/
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
  },
  {
    title: "Talkie wakie",
    description: "Real-time chat app with Socket.IO and Node.js backend.",
    tech: ["Node.js", "Socket.IO", "React"],
    image: "/image/Talkie.png",
    github: "https://github.com/keshavagr025/Chat-App",
    live: "https://chat-app-n9ei.onrender.com/",
  },
  {
    title: "Wellora Health-Care Support",
    description: "A health-care support system for patients and doctors.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "/image/wellora.png",
    github: "https://github.com/keshavagr025/HealthifNow",
    live: "https://healthifnow-frontend1.onrender.com/",
  },
];

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <CardContainer
      className="cursor-pointer w-full max-w-md mx-auto"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardBody
        className={`bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl p-4 border border-transparent transition-shadow duration-300 flex flex-col ${
          hovered ? "shadow-2xl shadow-indigo-500/50" : "shadow-md shadow-black/20"
        }`}
      >
        {/* Project Image */}
        <CardItem translateZ={hovered ? 40 : 10} className="overflow-hidden rounded-lg mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </CardItem>

        {/* Title */}
        <CardItem translateZ={hovered ? 40 : 10} className="text-2xl font-semibold text-white mb-2">
          {project.title}
        </CardItem>

        {/* Description */}
        <CardItem translateZ={hovered ? 30 : 5} className="text-indigo-200 mb-4" as="p">
          {project.description}
        </CardItem>

        {/* Tech stack */}
        <CardItem translateZ={hovered ? 20 : 5} className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-indigo-700 text-indigo-200 px-2 py-1 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </CardItem>

        {/* Links */}
        <CardItem translateZ={hovered ? 20 : 5} className="flex gap-6 text-white text-xl">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="hover:text-indigo-400 transition-colors"
          >
            <FiGithub />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live Demo"
            className="hover:text-indigo-400 transition-colors"
          >
            <FiExternalLink />
          </a>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export default function Projects() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8 flex flex-col items-center">
      <h2 className="text-5xl mb-10 font-mono">Projects</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}
