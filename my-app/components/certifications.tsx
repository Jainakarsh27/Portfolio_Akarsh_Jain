"use client";

import SectionWrapper from "./sectionwrapper";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "March 2024",
    credentialId: "AWS-CP-2024-12345",
    credentialUrl: "https://aws.amazon.com/verification",
    icon: "☁️",
  },
  {
    title: "Google Cloud Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "January 2024",
    credentialId: "GC-ACE-2024-67890",
    credentialUrl: "https://cloud.google.com/certification",
    icon: "🔵",
  },
  {
    title: "Complete JavaScript Mastery",
    issuer: "JavaScript.info & Eduweb",
    date: "August 2023",
    credentialId: "JS-MASTER-2023-11111",
    credentialUrl: "https://javascript.info",
    icon: "✨",
  },
  {
    title: "Full Stack Web Development Bootcamp",
    issuer: "The Complete Web Developer",
    date: "May 2023",
    credentialId: "FSWDB-2023-22222",
    credentialUrl: "https://webdeveloper.com",
    icon: "🚀",
  },
  {
    title: "Data Structures & Algorithms Specialization",
    issuer: "Coursera / University of California",
    date: "December 2022",
    credentialId: "DSA-SPEC-2022-33333",
    credentialUrl: "https://coursera.org/verify",
    icon: "📊",
  },
  {
    title: "Node.js Advanced Development",
    issuer: "Node Academy",
    date: "September 2022",
    credentialId: "NODE-ADV-2022-44444",
    credentialUrl: "https://nodeacademy.io",
    icon: "⚡",
  },
];

export default function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Industry-recognized credentials & continuous learning"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-br from-neutral-900/60 to-neutral-950/40 p-6 rounded-xl border border-neutral-800 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.15)]"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">{cert.icon}</div>
              
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition">
                  {cert.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-3">
                  {cert.issuer}
                </p>
                
                <div className="text-xs text-gray-500 mb-4 space-y-1">
                  <p>Issued: {cert.date}</p>
                  <p className="font-mono">ID: {cert.credentialId}</p>
                </div>

                <motion.a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 text-sm bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white px-4 py-2 rounded-lg transition-all border border-red-600/30 font-medium"
                >
                  View Credential
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