
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "../component/ParticleBackground";

const experiences = [
  {
    role: "AI Builder Intern",
    company: "MirAI School of Technology",
    duration: "Jul 2026 - Aug 2026",
    description:
      "Completed an 8-week virtual AI Builder Internship, developing 7 AI-powered applications using Python, Streamlit, FastAPI, and Google Gemini APIs. Built FoodRescue AI, a full-stack multimodal application integrating Gemini Vision, Audio, and Text capabilities, supporting 11 Indian languages with an end-to-end cloud deployment.",
    technologies: [
      "Python",
      "Streamlit",
      "FastAPI",
      "Gemini API",
      "Generative AI",
    ],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "InternNexus",
    duration: "Mar 2026 - Apr 2026",
    description:
      "Worked on full-stack web development, building interactive applications using MongoDB, Express.js, React.js, and Node.js. Developed REST APIs, implemented CRUD operations, and strengthened practical skills in frontend and backend development.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST APIs",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Career Foresight (CDAC ACTS)",
    duration: "Jun 2025",
    description:
      "Developed web application components using Python, MySQL, HTML, and CSS. Worked on backend functionality, database operations, and student data management while gaining practical experience in web development.",
    technologies: [
      "Python",
      "MySQL",
      "HTML",
      "CSS",
    ],
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

    setActiveIndex(
      Math.min(index, experiences.length - 1)
    );
  };

  return (
    <section
      id="exp"
      className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden py-20"
      onMouseMove={handleMouseMove}
    >
      <ParticleBackground />

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px] bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 animate-pulse" />

        <div className="absolute bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 animate-pulse" />

        <div className="absolute top-1/2 left-1/2 w-[220px] h-[220px] opacity-10 blur-[100px] bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 relative z-10">
        <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Experience
        </span>
      </h2>

      {/* Desktop Experience Cards */}
      {!isMobile && (
        <div className="relative w-full max-w-6xl flex items-center justify-center h-[460px]">
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
                  rotateY: isActive
                    ? 0
                    : idx < activeIndex
                    ? 15
                    : -15,
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
                  <div className="mb-4">
                    <span className="text-xs font-semibold tracking-widest text-teal-400 uppercase">
                      Professional Experience
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                    {exp.role}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {exp.company} | {exp.duration}
                  </p>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Mobile Experience Cards */}
      {isMobile && (
        <div className="w-full px-6 flex flex-col gap-6 z-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.2,
              }}
              className="relative p-5 rounded-2xl bg-gray-900/80 backdrop-blur border border-gray-700 shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400 to-blue-500 blur-md opacity-20 pointer-events-none" />

              <div className="relative z-10">
                <span className="text-xs font-semibold tracking-widest text-teal-400 uppercase">
                  Professional Experience
                </span>

                <h3 className="text-lg font-semibold text-cyan-400 mt-2">
                  {exp.role}
                </h3>

                <p className="text-gray-400 text-xs mb-3">
                  {exp.company} | {exp.duration}
                </p>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
