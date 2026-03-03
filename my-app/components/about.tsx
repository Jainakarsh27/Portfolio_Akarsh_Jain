"use client";

import SectionWrapper from "./sectionwrapper";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "Projects Completed", value: "25+" },
    { label: "Years Experience", value: "4" },
    { label: "Happy Clients", value: "50+" },
    { label: "Technologies", value: "20+" },
  ];

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Building scalable systems & creating innovative solutions"
    >
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 text-neutral-300 text-lg leading-relaxed"
        >
          <p>
            I'm Aakarsh Jain, a software engineer passionate about building
            scalable web applications, mobile solutions, and AI-powered systems
            that solve real-world problems.
          </p>
          
          <p>
            With 4+ years of experience in full-stack development, I specialize
            in Next.js, Node.js, React, and modern cloud architectures. I love
            transforming complex requirements into elegant, maintainable code.
          </p>

          <p>
            My approach focuses on creating production-ready applications with
            clean architecture, comprehensive testing, and exceptional user
            experiences. I'm driven by continuous learning and staying updated
            with the latest technologies.
          </p>

          <div className="pt-4">
            <h4 className="text-white font-semibold mb-3">My Values</h4>
            <ul className="space-y-2 text-gray-400">
              <li>✓ Code quality over quick fixes</li>
              <li>✓ User-centric design & performance</li>
              <li>✓ Continuous learning & improvement</li>
              <li>✓ Collaborative & open communication</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-neutral-900/40 to-neutral-950/40 p-6 rounded-xl border border-neutral-800/50 hover:border-red-500/30 transition"
              >
                <div className="text-3xl font-black text-red-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Quick Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-600/10 to-transparent p-8 rounded-2xl border border-red-600/20 backdrop-blur-sm"
          >
            <h4 className="text-xl font-bold mb-4 text-white">Quick Snapshot</h4>
            <div className="space-y-3 text-neutral-300">
              <div className="flex items-center gap-3">
                <span className="text-red-500">🎓</span>
                <span>B.Tech in Computer Science & Engineering</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-500">💻</span>
                <span>Full Stack & AI Systems Developer</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-500">🌍</span>
                <span>Open Source Contributor</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-500">📍</span>
                <span>Based in India • Open to Remote & Global Opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-500">⚡</span>
                <span>Always Learning & Building</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}