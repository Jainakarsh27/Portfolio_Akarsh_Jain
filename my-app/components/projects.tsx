"use client";

import SectionWrapper from "./sectionwrapper";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Sample",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech: ["Next.js", "MongoDB", "Node.js", "TailwindCSS"],
    github: "https://github.com",
    live: "https://sample.com",
    highlights: ["abcd", "Real-time", "History Tracking"],
  },
  {
    title: "CashTrail",
    description: "Serverless finance tracking system with AI-powered expense categorization and real-time analytics dashboard.",
    tech: ["AWS Lambda", "React", "DynamoDB", "Serverless", "Analytics"],
    github: "https://github.com",
    live: "https://cashtrail.app",
    highlights: ["Serverless Architecture", "Real-time Analytics", "Smart Categorization"],
  },
  {
    title: "DevFlow",
    description: "Full-stack developer collaboration platform with real-time code sharing, version control integration, and team analytics.",
    tech: ["Next.js", "WebSocket", "PostgreSQL", "Prisma", "TypeScript"],
    github: "https://github.com",
    live: "https://devflow.app",
    highlights: ["Real-time Collaboration", "Git Integration", "Team Performance"],
  },
  {
    title: "CloudVault",
    description: "End-to-end encrypted cloud storage solution with intelligent file management and advanced security features.",
    tech: ["Node.js", "React", "AWS S3", "Encryption", "Docker"],
    github: "https://github.com",
    live: "https://cloudvault.io",
    highlights: ["256-bit Encryption", "File Sharing", "Version Control"],
  },
];

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Production-grade applications & innovative solutions"
    >
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-br from-neutral-900/60 to-neutral-950/40 p-8 rounded-2xl border border-neutral-800 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] overflow-hidden relative"
          >
            {/* Hover effect background */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-400 transition">
                {project.title}
              </h3>
              
              <p className="text-neutral-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-red-600/20 text-red-300 rounded-full border border-red-600/30"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm text-neutral-400 bg-neutral-900/50 px-3 py-1 rounded-lg border border-neutral-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-6 border-t border-neutral-700/50">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 bg-neutral-800 hover:bg-red-600 text-white py-2.5 rounded-lg transition-colors font-medium text-sm"
                >
                  <span>GitHub</span>
                  <span>→</span>
                </motion.a>
                
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg transition-colors font-medium text-sm"
                >
                  <span>Live Demo</span>
                  <span>→</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}