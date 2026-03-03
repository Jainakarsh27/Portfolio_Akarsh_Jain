"use client";

import SectionWrapper from "./sectionwrapper";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: "🏆",
    title: "CodeConquest 2024 - Champion",
    description: "Won first place in national coding competition with 500+ participants",
    date: "March 2024",
  },
  {
    icon: "🚀",
    title: "Product Launch Lead",
    description: "Led development of 5+ major products impacting 100K+ users globally",
    date: "2023 - 2024",
  },
  {
    icon: "📈",
    title: "Performance Optimization Award",
    description: "Optimized application performance, reducing load time by 65%",
    date: "December 2023",
  },
  {
    icon: "💡",
    title: "100 Days of Code",
    description: "Completed 100 days of consistent coding & learning challenge",
    date: "June 2023",
  },
  {
    icon: "👥",
    title: "Team Lead Recognition",
    description: "Recognized as tech lead for mentoring team of 5+ engineers",
    date: "2024",
  },
  {
    icon: "⭐",
    title: "Open Source Contributions",
    description: "Contributed to 15+ open-source projects with 1K+ GitHub stars",
    date: "Ongoing",
  },
];

export default function Achievements() {
  return (
    <SectionWrapper
      id="achievements"
      title="Achievements"
      subtitle="Recognition, awards & milestones"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {achievements.map((achievement, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-br from-neutral-900/60 to-neutral-950/40 p-6 rounded-xl border border-neutral-800 hover:border-red-500/50 transition-all hover:shadow-[0_0_20px_rgba(220,38,38,0.15)]"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition transform">
                {achievement.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {achievement.description}
                </p>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">
                  {achievement.date}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}