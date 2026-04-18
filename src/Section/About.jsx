import React from "react";
import { motion } from "framer-motion";
import MyProfile from "../assets/Portfoliowebsite/MyProfile.jpg";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import ParticleBackground from "../component/ParticleBackground";

export default function About() {
  const stats = [
    { label: "Project Built", value: "5+" },
    { label: "DSA Practice", value: "300+ Problems" },
  ];

  const platforms = [
    { name: "CodeChef", link: "https://www.codechef.com/users/silentcoder01" },
    { name: "Codeforces", link: "https://codeforces.com/profile/coderaiman" },
    { name: "LeetCode", link: "https://leetcode.com/u/RKy1u3TwsR/" },
    { name: "CSES", link: "https://cses.fi/user/367334" },
  ];

  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px]",
    "bottom-0 right-10 w-[420px] h-[420px]",
    "top-1/2 left-1/2 w-[220px] h-[220px] -translate-x-1/2 -translate-y-1/2",
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-black text-white flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />

      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 opacity-20 blur-[120px] animate-pulse ${c}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full px-6 py-20 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row items-center gap-10">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-[220px] h-[220px]"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400 to-blue-500 blur-md opacity-40"></div>
            <img
              src={MyProfile}
              alt="profile"
              className="relative w-full h-full rounded-2xl object-cover border border-white/10"
            />
          </motion.div>

          <div className="flex-1 text-center md:text-left">

            <h2 className="text-5xl font-extrabold">
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Aiman Nishat
              </span>
            </h2>

            <p className="mt-4 text-gray-300 leading-relaxed">
              I am a{" "}
              <span className="text-teal-400 font-semibold">
                B.Tech Computer Science student
              </span>{" "}
              passionate about building modern web applications and solving real-world problems.
            </p>

            <p className="mt-3 text-gray-400">
              I actively practice Data Structures & Algorithms across multiple platforms.
            </p>
            <p className="mt-3 text-gray-400">
              I have also been selected as a Microsoft Student Ambassador and Google Student Ambassador, which reflects my active involvement in tech communities and continuous learning mindset.
            </p>
            
             <div className="mt-6">
              <h3 className="text-lg font-semibold text-teal-400 flex items-center gap-2 justify-center md:justify-start">
                <FaCode /> Coding Profiles
              </h3>
             <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
  {platforms.map((p, i) => (
    <a
      key={i}
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-gray-200 hover:border-cyan-400 transition overflow-visible"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 opacity-0 group-hover:opacity-20 transition" />

      <span className="relative flex items-center justify-center gap-2 text-xs sm:text-sm whitespace-nowrap">
        {p.name}
        <FaExternalLinkAlt size={12} />
      </span>
    </a>
  ))}
</div>


    </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/10 border border-white/10 text-center hover:scale-105 transition"
                >
                  <div className="text-gray-400 text-sm">{s.label}</div>
                  <div className="font-semibold">{s.value}</div>
                </div>
              ))}
            </div>

            <a
              href="#proj"
              className="inline-block mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-blue-500 text-black font-semibold hover:scale-105 transition"
            >
              View Projects
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}