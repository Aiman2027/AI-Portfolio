import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "../component/ParticleBackground";

const experiences = [
  {
    role: "MERN Stack Developer Intern",
    company: "InternNexus",
    duration: "Mar 2026 - Present",
    description:
      "Building scalable full-stack applications using MongoDB, Express, React, and Node.js. Focused on crafting seamless user experiences, optimizing API performance, and turning ideas into real-world digital products.",
  },
  {
    role: "Web Developer Intern",
    company: "Career Foresight (CDAC ACTS)",
    duration: "Jun 2025",
    description:
      "Engineered backend systems with Python and MySQL, streamlining data workflows and boosting performance. Developed secure authentication systems and optimized database operations for faster, reliable data handling.",
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const percent = e.clientX / window.innerWidth;
    const index = Math.floor(percent * experiences.length);
    setActiveIndex(Math.min(index, experiences.length - 1));
  };

  return (
    <section
      id="exp"
      className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden py-20"
      onMouseMove={handleMouseMove}
    >
      <ParticleBackground />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px] bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 animate-pulse" />
        <div className="absolute bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-[220px] h-[220px] opacity-10 blur-[100px] bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <h2 className="text-5xl font-extrabold mb-16 relative z-10">
        <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Experience
        </span>
      </h2>

      {!isMobile && (
        <div className="relative w-full max-w-6xl flex items-center justify-center h-[420px]">
          {experiences.map((exp, idx) => {
            const isActive = idx === activeIndex;

            return (
              <motion.div
                key={idx}
                className="absolute w-[340px] p-6 rounded-2xl bg-gray-900/80 backdrop-blur border border-gray-700 shadow-xl"
                animate={{
                  x: (idx - activeIndex) * 360,
                  scale: isActive ? 1.1 : 0.85,
                  opacity: isActive ? 1 : 0.4,
                  rotateY: isActive ? 0 : idx < activeIndex ? 15 : -15,
                  zIndex: isActive ? 10 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 18,
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400 to-blue-500 blur-md opacity-20" />

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-cyan-400">
                    {exp.role}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    {exp.company} | {exp.duration}
                  </p>
                  <p className="text-gray-300 text-sm">{exp.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {isMobile && (
        <div className="w-full px-6 flex flex-col gap-6 z-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="p-5 rounded-2xl bg-gray-900/80 backdrop-blur border border-gray-700 shadow-xl"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400 to-blue-500 blur-md opacity-20" />

              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-cyan-400">
                  {exp.role}
                </h3>
                <p className="text-gray-400 text-xs mb-2">
                  {exp.company} | {exp.duration}
                </p>
                <p className="text-gray-300 text-sm">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}