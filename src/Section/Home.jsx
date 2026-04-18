import React, { useEffect, useMemo, useState } from "react";
import ParticleBackground from "../component/ParticleBackground";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import linkdinphoto from "../assets/Portfoliowebsite/linkdinphoto.jpg";


const social = [
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/aiman-nishat-914785251",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/Aiman2027",
  },
];

const glowVariants = {
  initial: {},
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.09 } },
};

export default function Home() {
  const roles = useMemo(
    () => [
      "Problem Solver",
      "Full Stack Developer",
      "React Developer",

    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex((v) => v + 1);
      } else if (!deleting && subIndex === current.length) {
        setDeleting(true);
      } else if (deleting && subIndex > 0) {
        setSubIndex((v) => v - 1);
      } else {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, deleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section
      id="home"
      className="w-full h-screen relative bg-black overflow-hidden"
    >
      <ParticleBackground />

      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-[150px] opacity-20 top-[-100px] left-[-100px] animate-pulse"></div>

        <div className="absolute w-[400px] h-[400px] bg-cyan-400 rounded-full blur-[140px] opacity-20 bottom-[-80px] right-[-80px] animate-pulse"></div>

        <div className="absolute w-[300px] h-[300px] bg-emerald-400 rounded-full blur-[120px] opacity-10 top-[40%] left-[50%] -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-between px-6">

        <div className="max-w-3xl">

          <motion.div
            className="mb-4 text-2xl text-white"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {roles[index].substring(0, subIndex)}
            <span className="animate-pulse">|</span>
          </motion.div>

          <motion.h1
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
          >
            Hello, I'm
          </motion.h1>

          <h2 className="text-white text-6xl font-bold mt-2">
            Aiman Nishat
          </h2>

          <motion.p className="mt-6 text-gray-300 text-lg">
            I build modern, scalable web applications with clean UI & high performanc.
          </motion.p>
          <motion.p className="mt-2 text-gray-400">
           Passionate about problem solving, competitive programming & full-stack development.
         </motion.p>

          <div className="mt-8 flex gap-4">
            <a
              href="#about"
              className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] hover:scale-105 transition"
            >
              View My Work
            </a>

            <a
              href="/Resume.pdf"
              download
              className="px-6 py-3 rounded-full bg-white text-black hover:scale-105 transition"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-6 flex gap-6 text-2xl">
            {social.map(({ Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={glowVariants}
                whileHover="hover"
                whileTap="tap"
                className="text-gray-300"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

<div className="hidden lg:flex items-center justify-center relative">

  <div className="absolute w-[380px] h-[380px] rounded-full bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] blur-[80px] opacity-30 animate-pulse"></div>

  <motion.img
    src={linkdinphoto}
    alt="Aiman Nishat"
    className="relative w-[500px] h-[500px] object-cover rounded-full border-4 border-white shadow-2xl"
    
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}

    whileHover={{
      scale: 1.05,
      rotate: 1,
    }}
  />
</div>
        
      </div>
    </section>
  );
}