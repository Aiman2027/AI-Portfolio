import React, { useState } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "../component/ParticleBackground";

const achievements = [
  {
    title: "Smart India Hackathon Winner",
    short: "1st place - SIH 2025",
    details:
      "Secured 1st place at college-level Smart India Hackathon by building an AI-based solution for real-world problems.",
  },
  {
    title: "Google Student Ambassador",
    short: "Community Leader",
    details:
      "Conducted workshops and helped students explore Google technologies and developer programs.",
  },
  {
    title: "Microsoft Student Ambassador",
    short: "Tech Contributor",
    details:
      "Organized technical events, mentored peers and contributed to the student developer community.",
  },
  {
    title: "Competitive Programming",
    short: "300+ Problems",
    details:
      "Solved 300+ DSA problems across platforms like CodeChef, Codeforces and LeetCode.",
  },
];

export default function Achievements() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="achievement"
      className="relative w-full py-24 bg-black text-white flex flex-col items-center overflow-hidden"
    >
      <ParticleBackground />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px] bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 animate-pulse" />
        <div className="absolute bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 animate-pulse" />
      </div>

      <h2 className="text-5xl font-extrabold mb-16 relative z-10">
        <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Achievements
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl px-6 relative z-10">
        {achievements.map((item, idx) => {
          const isActive = active === idx;

          return (
            <motion.div
              key={idx}
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(null)}
              className="relative p-6 rounded-2xl bg-gray-900/70 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-cyan-500/20"
            >
      
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400 to-blue-500 opacity-10 blur-md" />

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-cyan-400">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 mt-1">{item.short}</p>

                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    height: isActive ? "auto" : 0,
                  }}
                  className="text-gray-300 text-sm mt-3 overflow-hidden"
                >
                  {item.details}
                </motion.p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}