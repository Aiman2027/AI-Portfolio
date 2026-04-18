import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ParticleBackground from "../component/ParticleBackground";

const socials = [
  {
    Icon: FaLinkedin,
    href: "https://linkedin.com/in/aiman-nishat-914785251",
  },
  {
    Icon: FaGithub,
    href: "https://github.com/Aiman2027",
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full py-10 bg-black text-white flex flex-col items-center overflow-hidden">

      <div className="absolute inset-0 max-h-[250px] overflow-hidden">
        <ParticleBackground />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-[300px] h-[300px] opacity-20 blur-[100px] bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 animate-pulse" />
        <div className="absolute bottom-0 right-10 w-[320px] h-[320px] opacity-15 blur-[120px] bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 animate-pulse" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-extrabold mb-4 relative z-10"
      >
        <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Aiman Nishat
        </span>
      </motion.h2>

      <div className="h-[2px] w-20 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 mb-4 relative z-10" />

      <div className="flex gap-6 text-xl mb-4 relative z-10">
        {socials.map(({ Icon, href }, idx) => (
          <motion.a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            <Icon />
          </motion.a>
        ))}
      </div>

      <p className="text-gray-300 italic mb-1 relative z-10 text-sm">
        “Code. Break. Fix. Repeat.”
      </p>

      <p className="text-xs text-gray-400 relative z-10">
        © {new Date().getFullYear()} Aiman Nishat
      </p>
    </footer>
  );
}