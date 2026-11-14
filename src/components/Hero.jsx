import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import ParticleCanvas from './ParticleCanvas';
import { personalInfo } from '../data/portfolio';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  const roles = useMemo(() => personalInfo.roles, []);
  const [roleIndex, setRoleIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timer = setTimeout(() => {
      if (!isDeleting && charCount < current.length) {
        setCharCount((prev) => prev + 1);
      } else if (!isDeleting && charCount === current.length) {
        setTimeout(() => setIsDeleting(true), 1400);
      } else if (isDeleting && charCount > 0) {
        setCharCount((prev) => prev - 1);
      } else if (isDeleting && charCount === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 40 : 70);

    return () => clearTimeout(timer);
  }, [charCount, roleIndex, isDeleting, roles]);

  // Social order: LinkedIn -> GitHub -> Email (as requested!)
  const socialLinks = [
    { icon: <FaLinkedin />, label: 'LinkedIn', href: personalInfo.linkedin },
    { icon: <FaGithub />, label: 'GitHub', href: personalInfo.github },
    { icon: <FaEnvelope />, label: 'Email', href: `mailto:${personalInfo.email}` },
  ];

  // Technical skills icons circulating around avatar
  const orbitSkills = [
    { icon: '☕', name: 'Java', angle: 0 },
    { icon: '🐍', name: 'Python', angle: 45 },
    { icon: '📋', name: 'SQL', angle: 90 },
    { icon: '🗄️', name: 'MySQL', angle: 135 },
    { icon: '⎈', name: 'Kubernetes', angle: 180 },
    { icon: '📊', name: 'Power BI', angle: 225 },
    { icon: '🐳', name: 'Docker', angle: 270 },
    { icon: '☁️', name: 'AWS', angle: 315 },
  ];

  return (
    <section id="home" className="w-full min-h-screen bg-[#050508] overflow-hidden relative flex items-center pt-24 pb-16">
      {/* Particle background */}
      <ParticleCanvas />

      {/* Pulsing gradient blur blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-[70vw] sm:h-[50vw] md:w-[40vw] sm:w-[50vw] md:h-[40vw] max-w-125 max-h-125 rounded-full opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"
          style={{ background: 'linear-gradient(to right, #302B63, #00BF8F, #1cd8d2)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[70vw] sm:h-[50vw] md:w-[40vw] sm:w-[50vw] md:h-[40vw] max-w-125 max-h-125 rounded-full opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500"
          style={{ background: 'linear-gradient(to right, #302B63, #00BF8F, #1cd8d2)' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left text column */}
        <div className="flex flex-col justify-center text-left">
          <div className="lg:pr-10 max-w-2xl">
            {/* Typewriter subtitle */}
            <motion.div
              className="mb-4 text-base sm:text-xl md:text-2xl font-semibold text-cyan-400 tracking-wide min-h-[1.8rem] flex items-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>{roles[roleIndex].substring(0, charCount)}</span>
              <span className="inline-block w-0.5 h-6 ml-1.5 bg-cyan-400 animate-pulse align-middle" />
            </motion.div>

            {/* Main title */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6"
            >
              <span
                className="text-2xl sm:text-3xl font-bold tracking-wide block mb-2"
                style={{
                  background: 'linear-gradient(90deg, #1cd8d2, #00bf8f, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {personalInfo.heroGreeting}
              </span>
              <h1
                className="text-white font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none"
                style={{
                  color: '#ffffff',
                  WebkitTextFillColor: '#ffffff',
                }}
              >
                {personalInfo.name}
              </h1>
            </motion.div>

            {/* Bio tagline */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              {personalInfo.heroBio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              {/* View My Work */}
              <motion.a
                href="#projects"
                className="group relative overflow-hidden px-7 py-3.5 rounded-full font-semibold text-base text-white shadow-lg cursor-pointer"
                style={{
                  background: 'linear-gradient(to right, #1cd8d2, #00bf8f, #302b63)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="relative h-6 flex items-center justify-center overflow-hidden min-w-[125px]">
                  <span className="absolute flex items-center gap-2 whitespace-nowrap transition-all duration-300 group-hover:-translate-y-7 group-hover:opacity-0 opacity-100">
                    View My Work
                  </span>
                  <span className="absolute flex items-center gap-2 whitespace-nowrap translate-y-7 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    See Projects →
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.a>

              {/* Get in Touch */}
              <motion.a
                href="#contact"
                className="group relative overflow-hidden px-7 py-3.5 rounded-full font-semibold text-base text-black bg-white shadow-lg cursor-pointer hover:bg-cyan-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="relative h-6 flex items-center justify-center overflow-hidden min-w-[115px]">
                  <span className="absolute flex items-center gap-2 whitespace-nowrap transition-all duration-300 group-hover:-translate-y-7 group-hover:opacity-0 opacity-100">
                    Get in Touch
                  </span>
                  <span className="absolute flex items-center gap-2 whitespace-nowrap translate-y-7 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Contact Me ✉️
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.a>
            </motion.div>

            {/* Social Icons — Order: LinkedIn -> GitHub -> Email */}
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              {socialLinks.map(({ icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:bg-white/10 hover:border-cyan-400/30 transition-colors duration-200 text-lg"
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right column: Orbiting Circulating Circle with Technologies Photos/Icons */}
        <div className="relative flex items-center justify-center py-8">
          {/* Outer glowing halo */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
            style={{
              width: 'min(420px, 85vw)',
              height: 'min(420px, 85vw)',
              borderRadius: '50%',
              filter: 'blur(50px)',
              opacity: '0.35',
              background: 'conic-gradient(from 0deg, #1cd8d2, #00bf8f, #818cf8, #c084fc, #1cd8d2)',
            }}
          />

          {/* Main Circulating Circle Container */}
          <div className="relative z-10 w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
            {/* Center Profile Circle with Rohan's Photo */}
            <motion.div
              className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full flex items-center justify-center z-20 overflow-hidden cursor-pointer group"
              style={{
                background: '#0d1525',
                boxShadow: `
                  0 0 0 4px #050810,
                  0 0 0 7px rgba(0,212,255,0.65),
                  0 0 40px rgba(0,212,255,0.35),
                  0 0 80px rgba(0,212,255,0.15)
                `,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <img
                src="/rohan-photo.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover object-[50%_28%] group-hover:scale-105 transition-transform duration-500 select-none"
              />
              {/* Subtle gradient vignette at the bottom */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              {/* Crisp inner ring */}
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-cyan-400/30 pointer-events-none" />
            </motion.div>

            {/* Orbit Track 1 — Inner Dashed Ring */}
            <div
              className="absolute rounded-full border border-dashed border-cyan-400/20"
              style={{ width: '75%', height: '75%' }}
            />

            {/* Orbit Track 2 — Outer Orbit Line */}
            <div
              className="absolute rounded-full border border-white/10"
              style={{ width: '100%', height: '100%' }}
            />

            {/* Circulating / Rotating Technologies from Resume */}
            <div className="absolute inset-0 orbit-spin">
              {orbitSkills.map((tech) => {
                const radius = 48; // percentage from center
                const rad = (tech.angle * Math.PI) / 180;
                const x = 50 + radius * Math.cos(rad);
                const y = 50 + radius * Math.sin(rad);

                return (
                  <div
                    key={tech.name}
                    className="absolute orbit-counter-spin flex flex-col items-center justify-center"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                    }}
                  >
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#0c1222]/95 border border-cyan-400/30 flex items-center justify-center text-lg sm:text-xl shadow-lg backdrop-blur-md hover:border-cyan-300 hover:scale-125 transition-all duration-300 cursor-pointer"
                      style={{
                        boxShadow: '0 4px 15px rgba(0,0,0,0.6), 0 0 12px rgba(0,212,255,0.2)',
                      }}
                      title={tech.name}
                    >
                      {tech.icon}
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-gray-300 font-mono font-semibold mt-1 bg-black/60 px-1.5 py-0.5 rounded border border-white/5 whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
