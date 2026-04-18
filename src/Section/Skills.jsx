import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import ParticleBackground from "../component/ParticleBackground";
export default function Skill() {
  const skills = [
    { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "React", icon: "https://cdn.simpleicons.org/react" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/node.js" },
    { name: "Express", icon: "https://cdn.simpleicons.org/express" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
    { name: "Render", icon: "https://cdn.simpleicons.org/render" },
    { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify" },
    
    
  ];

  const x = useMotionValue(0);
  const speed = -0.5;

  const trackRef = useRef(null);
  const widthRef = useRef(0);

  useEffect(() => {
    if (trackRef.current) {
      widthRef.current = trackRef.current.scrollWidth / 2;
    }
  }, []);

  useAnimationFrame(() => {
    let current = x.get() + speed;
    if (Math.abs(current) >= widthRef.current) {
      current = 0;
    }
    x.set(current);
  });

  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px]",
    "top-1/2 left-1/2 w-[220px] h-[220px] opacity-10 blur-[100px] -translate-x-1/2 -translate-y-1/2",
  ];

  return (
    <section id="skill" className="w-full py-20 relative bg-black text-white overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 animate-pulse ${c}`}
          />
        ))}
      </div>

      <h2 className="relative z-10 text-5xl font-extrabold text-center mb-16">
        <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Skills & Tools
        </span>
      </h2>

      <motion.div
        ref={trackRef}
        style={{ x }}
        className="relative z-10 flex gap-16 px-10 w-max items-center"
      >
        {[...skills, ...skills].map((skill, index) => (
          <span
            key={index}
            className="flex items-center gap-2 text-gray-300 text-lg whitespace-nowrap hover:text-cyan-400 transition duration-300"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-6 h-6"
            />
            {skill.name}
          </span>
        ))}
      </motion.div>
    </section>
  );
}