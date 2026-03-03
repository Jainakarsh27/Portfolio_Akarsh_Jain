"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [showIntro, setShowIntro] = useState(true);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [clicked]);

  if (!showIntro) {
    return null;
  }

  return (
    <section 
      onClick={() => setClicked(true)}
      className="fixed inset-0 h-screen bg-black text-white flex flex-col items-center justify-center cursor-pointer z-50 overflow-hidden"
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(220,38,38,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(220,38,38,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(220,38,38,0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      {/* Logo/Text Animation - Netflix style */}
      <motion.div 
        className="relative z-10 text-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Main Title with THUD effect like Netflix intro */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            type: "spring",
            stiffness: 100,
          }}
          className="text-center"
        >
          <motion.h1
            className="text-7xl md:text-9xl font-black tracking-tighter text-white drop-shadow-[0_0_30px_rgba(220,38,38,0.8)]"
            animate={{
              letterSpacing: ["0.05em", "0.03em", "0.05em"],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            AAKARSH
          </motion.h1>
          <motion.h1
            className="text-7xl md:text-9xl font-black tracking-tighter text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.8)]"
            animate={{
              letterSpacing: ["0.05em", "0.03em", "0.05em"],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
          >
            JAIN
          </motion.h1>
        </motion.div>

        {/* Subtitle with fade-in */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg md:text-2xl text-gray-300 tracking-wide font-light"
        >
          Developer • AI Builder • Problem Solver
        </motion.p>

        {/* Animated Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1.8, duration: 1 }}
          className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent max-w-md mx-auto"
        />
      </motion.div>

      {/* Click to continue text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-12 text-center"
      >
        <p className="text-gray-500 text-sm tracking-widest mb-3">
          CLICK ANYWHERE TO CONTINUE
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-red-500 text-2xl"
        >
          ████
        </motion.div>
      </motion.div>

      {/* Fade out effect on click */}
      {clicked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-black z-20"
        />
      )}
    </section>
  );
}