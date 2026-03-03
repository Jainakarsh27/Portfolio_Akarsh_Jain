"use client";

import SectionWrapper from "./sectionwrapper";
import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Senior Frontend Engineer",
    company: "TechCorp Solutions",
    duration: "Jan 2024 - Present",
    type: "Full-time",
    description:
      "Leading product development and mentoring junior engineers",
    achievements: [
      "Architected and shipped 5+ major features increasing user retention by 35%",
      "Led migration from JavaScript to TypeScript, improving code quality",
      "Mentored 3 junior developers, improving team velocity by 25%",
      "Implemented advanced caching strategies reducing API calls by 60%",
    ],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "AWS"],
  },
  {
    role: "Full Stack Developer",
    company: "InnovateLabs",
    duration: "Jun 2023 - Dec 2023",
    type: "Full-time",
    description: "Developed and maintained full-stack web applications",
    achievements: [
      "Built 10+ production applications served to 100K+ users",
      "Optimized database queries, improving response time by 40%",
      "Implemented real-time features using WebSockets",
      "Designed REST APIs handling 1000+ requests per second",
    ],
    tech: ["Next.js", "MongoDB", "Node.js", "GraphQL", "Docker"],
  },
  {
    role: "Frontend Engineering Intern",
    company: "WebVentures",
    duration: "Feb 2023 - May 2023",
    type: "Internship",
    description:
      "Built responsive UI components and improved application performance",
    achievements: [
      "Developed 15+ reusable React components following design patterns",
      "Improved Lighthouse score from 65 to 95 through optimization",
      "Fixed 50+ bugs and improved code coverage to 85%",
      "Collaborated with design team to implement pixel-perfect UIs",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Jest", "Git"],
  },
];

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="Professional journey & career highlights"
    >
      <div className="space-y-10">
        {experienceData.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-br from-neutral-900/60 to-neutral-950/40 p-8 rounded-2xl border border-neutral-800 hover:border-red-500/50 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition mb-2">
                  {exp.role}
                </h3>
                <p className="text-red-500 font-semibold">{exp.company}</p>
                <p className="text-gray-400 text-sm mt-1">{exp.duration}</p>
              </div>
              <div className="bg-red-600/20 px-3 py-1 rounded-full border border-red-600/30">
                <span className="text-red-300 text-xs font-semibold uppercase">
                  {exp.type}
                </span>
              </div>
            </div>

            <p className="text-gray-300 mb-6">{exp.description}</p>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <span className="text-red-500 flex-shrink-0 mt-1">→</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-neutral-700/50">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 bg-neutral-800/50 text-gray-300 rounded-lg border border-neutral-700/50 hover:border-red-600/50 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}