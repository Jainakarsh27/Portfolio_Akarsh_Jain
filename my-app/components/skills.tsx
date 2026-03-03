"use client";

import SectionWrapper from "./sectionwrapper";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Redux",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Prisma", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "CI/CD", "GitHub Actions", "Vercel", "Netlify"],
  },
  {
    category: "AI & Data",
    skills: ["Python", "Machine Learning", "Gemini API", "Data Analysis", "LLMs"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Linux"],
  },
  {
    category: "Specializations",
    skills: [
      "System Design",
      "Database Design",
      "Performance Optimization",
      "Security",
      "Testing",
    ],
  },
];

export default function Skills() {
  const allSkills = skillCategories.flatMap((cat) => cat.skills);

  return (
    <SectionWrapper
      id="skills"
      title="Skills"
      subtitle="Technologies, tools & expertise areas"
    >
      <div className="space-y-16">
        {/* All Skills Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">All Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-neutral-900/40 to-neutral-950/40 p-4 rounded-xl border border-neutral-800 text-center font-semibold text-gray-300 hover:text-white hover:border-red-500/50 transition-all cursor-default group"
              >
                <div className="group-hover:text-red-400 transition">{skill}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Categorized Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-white">By Category</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-neutral-900/60 to-neutral-950/40 p-6 rounded-xl border border-neutral-800/50 hover:border-red-500/30 transition-all"
              >
                <h4 className="text-xl font-bold text-red-500 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  {category.category}
                </h4>
                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-gray-300 group cursor-default"
                    >
                      <span className="text-red-400 group-hover:translate-x-1 transition">
                        ▸
                      </span>
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Proficiency Badges */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">Proficiency Levels</h3>
          <div className="space-y-6">
            {[
              { skill: "Next.js & React", level: 95 },
              { skill: "Node.js & Backend", level: 90 },
              { skill: "System Design", level: 85 },
              { skill: "Cloud & DevOps", level: 80 },
              { skill: "Database Design", level: 88 },
              { skill: "AI/ML Integration", level: 75 },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-white">{item.skill}</span>
                  <span className="text-red-500 font-bold">{item.level}%</span>
                </div>
                <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-red-600 to-red-400"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}