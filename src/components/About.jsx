import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { FaFileDownload } from 'react-icons/fa';

function AboutTypewriter() {
  const roles = personalInfo.roles;
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIdx((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 45 : 85);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIdx, roles]);

  return (
    <div className="flex items-center justify-center md:justify-start gap-1 text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
      <span>{text}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        className="inline-block w-0.5 h-5 bg-cyan-400 align-middle ml-1"
      />
    </div>
  );
}

const blobs = [
  '-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]',
  'bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300',
  'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]',
];

export default function About() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full items-center justify-center bg-black text-white overflow-hidden px-6 py-20 md:py-28"
    >
      {/* Top divider to separate sections clearly */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {blobs.map((blobClass, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${blobClass}`}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14">
        {/* Left: High-Tech AI Hologram Image Visual */}
        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative flex items-center justify-center">
            {/* Glowing radial halo */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'conic-gradient(from 0deg, #1cd8d2, #00bf8f, #818cf8, #1cd8d2)',
                filter: 'blur(40px)',
                opacity: 0.5,
              }}
            />

            {/* Glowing High-Tech AI Hologram Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded-3xl overflow-hidden flex flex-col items-center justify-center bg-[#0a0f1d]/90 border border-cyan-400/40 relative z-10 select-none p-3 sm:p-4 group"
              style={{
                width: 'min(380px, 90vw)',
                boxShadow: `
                  0 0 0 2px #050810,
                  0 0 0 5px rgba(0,212,255,0.5),
                  0 0 35px rgba(0,212,255,0.35),
                  0 20px 60px rgba(0,0,0,0.9)
                `,
              }}
            >
              {/* Image Frame */}
              <div className="relative w-full rounded-2xl overflow-hidden aspect-[4/3] bg-black/60">
                <img
                  src="/ai-tech.png"
                  alt="AI & Data Intelligence"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-60" />

                {/* Tech Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-xl bg-[#0d1525]/85 backdrop-blur-md border border-cyan-400/30">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-[11px] font-mono text-cyan-300 font-semibold">
                      Artificial Intelligence & Data
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-white/50">Core Focus</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Content (No "About" word anywhere!) */}
        <motion.div
          className="flex-1 flex flex-col items-center text-center md:items-start md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          {/* Section tag without the word 'About' */}
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 mb-2 font-semibold">
            Background & Profile
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            {personalInfo.name}
          </h2>

          <AboutTypewriter />

          <p className="text-gray-300 leading-relaxed mb-8 max-w-lg text-sm sm:text-base">
            {personalInfo.aboutBio}
          </p>

          {/* Stat Badges: Experience (6+ Months), Specialty (Full Stack, Data Analytics, Database), Focus (Full Stack) */}
          <div className="flex justify-center md:justify-start gap-3 sm:gap-4 mb-8 flex-wrap">
            {personalInfo.stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{
                  scale: 1.05,
                  borderColor: 'rgba(0,212,255,0.5)',
                  backgroundColor: 'rgba(0,212,255,0.07)',
                  y: -3,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex flex-col items-center justify-center border border-white/10 rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 bg-white/5 backdrop-blur-sm min-w-[100px] cursor-default text-center"
              >
                <span className="text-[11px] uppercase tracking-wider text-cyan-400/80 mb-1 font-mono">{stat.label}</span>
                <span className="text-sm font-bold text-white text-center leading-snug">{stat.value}</span>
              </motion.div>
            ))}
          </div>

          {/* Dual sliding-text action buttons */}
          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            {/* View Projects */}
            <motion.a
              href="#projects"
              onClick={(e) => handleScroll(e, '#projects')}
              className="group relative overflow-hidden px-7 py-3 bg-white text-black font-semibold rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="relative h-6 flex items-center justify-center overflow-hidden min-w-[115px]">
                <span className="absolute whitespace-nowrap transition-all duration-300 group-hover:-translate-y-7 group-hover:opacity-0 opacity-100 text-sm">
                  View Projects
                </span>
                <span className="absolute whitespace-nowrap translate-y-7 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-sm">
                  See Projects →
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.a>

            {/* Contact Me */}
            <motion.a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="group relative overflow-hidden px-7 py-3 border border-white/20 text-white font-semibold rounded-lg cursor-pointer hover:border-cyan-400/40 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="relative h-6 flex items-center justify-center overflow-hidden min-w-[115px]">
                <span className="absolute whitespace-nowrap transition-all duration-300 group-hover:-translate-y-7 group-hover:opacity-0 opacity-100 text-sm">
                  Contact Me
                </span>
                <span className="absolute whitespace-nowrap translate-y-7 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-sm">
                  Say Hello 👋
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.a>

            {/* Download Resume */}
            <motion.a
              href={personalInfo.resumeUrl}
              download="Rohan_Dhole_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden px-6 py-3 border border-cyan-400/40 bg-cyan-950/40 text-cyan-300 font-semibold rounded-lg cursor-pointer hover:bg-cyan-400/20 hover:text-white hover:border-cyan-400/70 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <FaFileDownload size={14} className="text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm">Download Resume</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/25 to-transparent" />
    </section>
  );
}
