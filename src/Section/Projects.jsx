import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaGlobe,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaChrome,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiFastapi,
  SiNextdotjs,
  SiFlutter,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";

import ParticleBackground from "../component/ParticleBackground";

import p1 from "../assets/Portfoliowebsite/p1.jpg";
import p2 from "../assets/Portfoliowebsite/p2.jpg";
import portfolipic from "../assets/Portfoliowebsite/portfolipic.png";
import p4 from "../assets/Portfoliowebsite/p4.jpg";
import p5 from "../assets/Portfoliowebsite/p5.jpg";

const projects = [
  {
    title: "InternINDIA AI Platform",
    short: "AI Internship Recommender",
    details:
      "Contributed as a developer to an AI-powered internship recommendation platform that suggests opportunities based on user profiles and helps 500+ students find relevant roles. My work focused on backend API development and deployment, ensuring smooth data flow, scalability, and reliable performance of the system.",
    github: "https://github.com/Aiman2027",
    live: "https://intern-india-ai.netlify.app/",
    img: p1,
    showLive: true,
    tech: [
      { icon: FaReact, name: "React" },
      { icon: FaNodeJs, name: "Node.js" },
      { icon: SiFastapi, name: "FastAPI" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiFlutter, name: "Flutter" },
      { icon: SiMongodb, name: "MongoDB" },
      { name: "Machine Learning" },
    ],
  },
  {
    title: "LeetCode Tracker Extension",
    short: "Chrome Extension",
    details:
      "Developed a Chrome extension to bookmark and track LeetCode problems efficiently. Helps users organize problems and monitor their coding progress in a simple interface.",
    github: "https://github.com/Aiman2027/leetcode-problem-traker",
    live: "#",
    img: p2,
    showLive: false,
    tech: [
      { icon: FaChrome, name: "Chrome API" },
      { icon: SiJavascript, name: "JavaScript" },
    ],
  },
  {
    title: "Portfolio Website",
    short: "Personal Branding",
    details:
      "Designed and developed a responsive personal portfolio to showcase projects, skills, and experience, enhanced with smooth UI, modern design, and well-crafted animations for an engaging and interactive user experience.",
    github: "#",
    live: "#",
    img: portfolipic,
    showLive: true,
    tech: [
      { icon: FaReact, name: "React" },
      { icon: SiFramer, name: "Framer Motion" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Campus Connect",
    short: "Student Management System",
    details:
      "Led a 6-member team to build a student registration and management system. Developed backend using Python and MySQL to manage 1000+ student records with secure data handling. Optimized CRUD operations and reduced data entry errors by 25%.",
    github: "https://github.com/Aiman2027/project.github.io",
    live: "#",
    img: p4,
    showLive: false,
    tech: [
      { icon: FaHtml5, name: "HTML" },
      { icon: FaCss3Alt, name: "CSS" },
      { icon: FaPython, name: "Python" },
      { icon: SiMysql, name: "MySQL" },
    ],
  },
  {
    title: "Movie Fetching App",
    short: "Movie Search App",
    details:
      "Built a movie search app that fetches data from an API and displays movie posters and titles based on user search Users can add/remove favourites, with data saved in local storage so it persists even after reopening the site.",
    github: "https://github.com/Aiman2027/Movie-fetching-",
    live: "#",
    img: p5,
    showLive: false,
    tech: [
      { icon: FaHtml5, name: "HTML" },
      { icon: FaCss3Alt, name: "CSS" },
      { icon: SiJavascript, name: "JavaScript" },
      { name: "API" },
    ],
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="proj" className= "relative w-full py-20 bg-black text-white overflow-hidden">
      <ParticleBackground />

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
        <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10">
        {projects.map((proj, idx) => {
          const isActive = active === idx;

          return (
            <motion.div
              key={idx}
              onClick={() => setActive(isActive ? null : idx)}
              whileHover={{ y: -8 }}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-cyan-500/20 hover:shadow-2xl transition cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={proj.img}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold group-hover:text-cyan-400">
                  {proj.title}
                </h3>

                <p className="text-sm text-gray-400">{proj.short}</p>

              
                <div className="flex flex-wrap gap-2 mt-3">
                  {proj.tech.map((t, i) => {
                    const Icon = t.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-1 px-2 py-1 text-xs bg-white/10 rounded-md text-gray-300"
                      >
                        {Icon && <Icon className="text-sm" />}
                        {t.name}
                      </div>
                    );
                  })}
                </div>

                {isActive && (
                  <motion.p className="text-sm text-gray-300 mt-3">
                    {proj.details}
                  </motion.p>
                )}

                <div className="flex gap-4 mt-4">
                  <a href={proj.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>

                  {proj.showLive && (
                    <a href={proj.live} target="_blank" rel="noreferrer">
                      <FaGlobe />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}