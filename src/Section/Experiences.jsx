
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
    projectName: "FoodRescue AI - Final Capstone",
    projectLink: "https://github.com/Aiman2027/FoodRescue-AI",
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
    technologies: ["Python", "MySQL", "HTML", "CSS"],
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

  // Reusable Experience Card Content
  const ExperienceContent = ({ exp }) => (
    <div className="relative z-10">
      <span className="text-xs font-semibold tracking-widest text-teal-400 uppercase">
        Professional Experience
      </span>

      <h3 className="text-xl font-semibold text-cyan-400 mt-3 mb-2">
        {exp.role}
      </h3>

      <p className="text-gray-400 text-sm mb-4">
        {exp.company} | {exp.duration}
      </p>

      <p className="text-gray-300 text-sm leading-relaxed">
        {exp.description}
      </p>

      {/* Technology Badges */}
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

      {/* Final Project GitHub Link */}
      {exp.projectLink && (
        <div className="mt-6 pt-4 border-t border-gray-700/70">
          <p className="text-gray-400 text-xs mb-3">
            Featured Final Project
          </p>

          <a
            href={exp.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-semibold hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.553 3.297-1.23 3.297-1.23.653 1.652.242 2.873.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.814 1.1.814 2.22v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12 24 5.37 18.627 0 12 0Z" />
            </svg>

            View Final Project

            <span>↗</span>
          </a>
        </div>
      )}
    </div>
  );

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
        <div className="relative w-full max-w-6xl flex items-center justify-center h-[500px]">
          {experiences.map((exp, idx) => {
            const isActive = idx === activeIndex;

            return (
              <motion.div
                key={idx}
                className="absolute w-[340px] p-6 rounded-2xl bg-gray-900/90 backdrop-blur border border-gray-700 shadow-xl overflow-hidden"
                animate={{
                  x: (idx - activeIndex) * 360,
                  scale: isActive ? 1.05 : 0.85,
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
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400 to-blue-500 blur-md opacity-10 pointer-events-none" />

                <ExperienceContent exp={exp} />
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
              className="relative p-5 rounded-2xl bg-gray-900/90 backdrop-blur border border-gray-700 shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400 to-blue-500 blur-md opacity-10 pointer-events-none" />

              <ExperienceContent exp={exp} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
