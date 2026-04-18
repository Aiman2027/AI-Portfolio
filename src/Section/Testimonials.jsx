import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import ParticleBackground from "../component/ParticleBackground";

import Fauzia from "../assets/Portfoliowebsite/Fauzia.jpg";
import Ariba from "../assets/Portfoliowebsite/Ariba.jpg";
import Nameera from "../assets/Portfoliowebsite/Nameera.jpg";
import image from "../assets/Portfoliowebsite/image.png";

const testimonials = [
  {
  name: "Jyoti Kumari",
  role: "Friend",
  review:
    "Aiman is a very good friend and always helpful. She is consistent in her work and constantly improves herself with dedication and hard work.",
  image: image ,
  linkedin: "",
},
  {
  name: "Fauzia Nishat",
  role: "Sister",
  review:
    "Aiman is hardworking and focused on improving her coding skills. She is a consistent learner with a strong and determined mindset. I am proud of her growth and dedication.",
  image: Fauzia,
  linkedin: "https://www.linkedin.com/in/fauzia-nishat-623b36303",
},
  
  {
  name: "Ariba Hasan",
  role: "Junior",
  review:
    "I really admire Aiman’s consistency and dedication. She is very strong in DSA and never gives up when facing problems. Her positive attitude and helpful nature make her stand out.",
  image: Ariba,
  linkedin: "https://www.linkedin.com/in/ariba-hasan-67b698380",
},
{
  name: "Namera Ahmad",
  role: "Senior",
  review:
    "Aiman has strong determination and a relentless work ethic that sets her apart, making her a valuable asset to any development team. She is a proactive learner with a positive growth mindset.",
  image: Nameera,
  linkedin: "https://www.linkedin.com/in/nameera015?utm_source=share_via&utm_content=profile&utm_medium=member_android",
}

];

export default function Testimonials() {
  return (
    <section
      id="testimonial"
      className="relative w-full py-24 bg-black text-white flex flex-col items-center overflow-hidden"
    >
      <ParticleBackground />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px] bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 animate-pulse" />
        <div className="absolute bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-[220px] h-[220px] opacity-10 blur-[100px] bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <h2 className="text-5xl font-extrabold mb-16 relative z-10">
        <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          What People Say
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl px-6 relative z-10">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.04 }}
            className="relative p-5 rounded-xl border border-gray-800 bg-gray-900/60 hover:border-cyan-400 transition-all duration-300 max-w-sm mx-auto"
          >
          
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 to-blue-500 blur-sm opacity-15"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
          
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full border border-white/20 object-cover mb-3"
              />

        
              <p className="text-gray-300 italic mb-3 text-sm">
                "{t.review}"
              </p>

              
              <h3 className="text-base font-semibold text-cyan-400">
                {t.name}
              </h3>

          
              <p className="text-xs text-gray-400 mb-2">{t.role}</p>

              
              {t.linkedin && (
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-xs"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}