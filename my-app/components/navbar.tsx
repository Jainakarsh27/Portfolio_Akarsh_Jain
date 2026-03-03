"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  "about",
  "education",
  "experience",
  "projects",
  "skills",
  "achievements",
  "certifications",
  "contact"
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show navbar after a delay (after intro finishes)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-black/90 backdrop-blur-lg text-white flex justify-center gap-2 md:gap-6 py-5 z-40 border-b border-red-600/20"
    >
      <div className="flex gap-4 md:gap-8 flex-wrap justify-center px-4">
        {sections.map((section, idx) => (
          <motion.button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`capitalize text-sm md:text-base transition-all duration-300 font-medium relative group $${
              active === section ? "text-red-500" : "text-gray-400 hover:text-gray-200"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {section}
            {active === section && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}