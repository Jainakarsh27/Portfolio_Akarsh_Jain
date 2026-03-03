"use client";

import SectionWrapper from "./sectionwrapper";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Indian Institute of Technology Delhi",
    duration: "2020 - 2024",
    cgpa: "8.7/10",
    description:
      "Specialized in Data Structures, Algorithms, System Design, DBMS, Operating Systems, and Cloud Computing Architecture.",
    courses: [
      "Advanced Data Structures",
      "System Design & Architecture",
      "Database Management Systems",
      "Operating Systems",
      "Machine Learning",
      "Cloud Computing",
    ],
  },
  {
    degree: "12th Grade (Senior Secondary)",
    institution: "Delhi Public School, Delhi",
    duration: "2018 - 2020",
    cgpa: "94%",
    description:
      "Science stream with focus on Physics, Chemistry, and Mathematics.",
    courses: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
  },
];

export default function Education() {
  return (
    <SectionWrapper
      id="education"
      title="Education"
      subtitle="Academic foundation & technical expertise development"
    >
      <div className="space-y-10">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-br from-neutral-900/60 to-neutral-950/40 p-8 rounded-2xl border border-neutral-800 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition mb-2">
                  {edu.degree}
                </h3>
                <p className="text-red-500 font-semibold">{edu.institution}</p>
                <p className="text-gray-400 text-sm mt-1">{edu.duration}</p>
              </div>
              <div className="bg-red-600/20 px-4 py-2 rounded-lg border border-red-600/30">
                <span className="text-red-400 font-bold text-lg">{edu.cgpa}</span>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {edu.description}
            </p>

            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Key Courses
              </h4>
              <div className="flex flex-wrap gap-2">
                {edu.courses.map((course, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 bg-neutral-800/50 text-gray-300 rounded-lg border border-neutral-700/50 hover:border-red-600/50 transition"
                  >
                    {course}
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