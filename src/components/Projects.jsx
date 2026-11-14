import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolio';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaCheckCircle } from 'react-icons/fa';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 30 : -30,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (direction) => ({
    x: direction > 0 ? -30 : 30,
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeIn' },
  }),
};

export default function Projects() {
  const [[currentIndex, direction], setPage] = useState([0, 0]);
  const [autoPlay, setAutoPlay] = useState(true);
  const total = projects.length;
  const currentProject = projects[currentIndex];

  const paginate = useCallback(
    (newDirection) => {
      setPage(([prev]) => [(prev + newDirection + total) % total, newDirection]);
    },
    [total]
  );

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => paginate(1), 7000);
    return () => clearInterval(interval);
  }, [autoPlay, paginate]);

  const stopAutoPlay = () => setAutoPlay(false);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen lg:h-screen flex flex-col justify-center bg-[#07070c] py-16 px-6 md:px-12 overflow-hidden"
    >
      {/* Visual Page Separation: Glowing Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent shadow-[0_0_15px_rgba(0,212,255,0.4)]" />

      {/* Dynamic ambient color glow based on current project */}
      <motion.div
        key={`glow-${currentIndex}`}
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          background: `radial-gradient(ellipse 65% 50% at 35% 55%, ${currentProject.accentColor}15 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto">
        {/* Compact 1-Page Header */}
        <motion.div
          className="text-center mb-6 lg:mb-8"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] font-semibold tracking-[0.25em] text-cyan-400 uppercase mb-1.5">
            Portfolio Showcase
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Featured{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #38bdf8, #818cf8, #c084fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Carousel Showcase Row: Fits inside 1-page viewport */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          {/* Previous Arrow Button (Desktop) */}
          <button
            onClick={() => {
              paginate(-1);
              stopAutoPlay();
            }}
            className="cursor-pointer hidden lg:flex shrink-0 w-11 h-11 rounded-full bg-white/5 border border-white/10 items-center justify-center text-white hover:bg-white/10 hover:border-cyan-400/50 hover:scale-110 transition-all duration-200"
            aria-label="Previous project"
          >
            <FaChevronLeft size={16} />
          </button>

          {/* Project Preview Window Mockup */}
          <div className="relative w-full lg:w-[48%] shrink-0">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0d1525]/90 backdrop-blur-xl p-5 sm:p-6 relative"
                style={{
                  boxShadow: `0 15px 45px rgba(0,0,0,0.6), 0 0 35px ${currentProject.accentColor}1a`,
                }}
              >
                {/* Simulated App Window Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400/70 truncate max-w-[210px]">
                    {currentProject.id === 1 ? 'buildshade-rentals.vercel.app' : `rohandhole.in/${currentProject.title.toLowerCase().slice(0, 15)}`}
                  </span>
                </div>

                {/* Project Screen Graphics */}
                <div
                  className="w-full h-44 sm:h-56 rounded-xl flex flex-col items-center justify-center p-4 text-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, #0e1220 0%, #151c30 100%)`,
                    border: `1px solid ${currentProject.accentColor}33`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-25 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${currentProject.accentColor} 0%, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10">
                    <span className="text-4xl sm:text-5xl mb-2.5 block">
                      {currentProject.id === 1 ? '🐾' : currentProject.id === 2 ? '🤖' : '📈'}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white mb-2">
                      {currentProject.title}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-1.5 mt-2">
                      {currentProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/80 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Project Details Description */}
          <div className="flex-1 flex flex-col justify-center w-full">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Category Tag */}
                <span
                  className={`inline-block text-[11px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border mb-3 ${currentProject.tagColor}`}
                >
                  {currentProject.tag}
                </span>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">
                  {currentProject.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                  {currentProject.description}
                </p>

                {/* Features Checklist */}
                <ul className="space-y-1.5 mb-5">
                  {currentProject.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-gray-300">
                      <FaCheckCircle
                        size={13}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: currentProject.accentColor }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white text-black hover:bg-cyan-400 hover:text-black transition-all shadow-lg hover:scale-105"
                  >
                    <FaExternalLinkAlt size={12} />
                    Live Project
                  </a>
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-white/20 text-white hover:border-cyan-400/60 hover:text-cyan-300 transition-all hover:scale-105"
                  >
                    <FaGithub size={15} />
                    Source Code
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Arrow Button (Desktop) */}
          <button
            onClick={() => {
              paginate(1);
              stopAutoPlay();
            }}
            className="cursor-pointer hidden lg:flex shrink-0 w-11 h-11 rounded-full bg-white/5 border border-white/10 items-center justify-center text-white hover:bg-white/10 hover:border-cyan-400/50 hover:scale-110 transition-all duration-200"
            aria-label="Next project"
          >
            <FaChevronRight size={16} />
          </button>
        </div>

        {/* Mobile Navigation Controls & Pagination Indicators */}
        <div className="flex items-center justify-between lg:justify-center gap-4 mt-6">
          <button
            onClick={() => {
              paginate(-1);
              stopAutoPlay();
            }}
            className="lg:hidden w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
            aria-label="Previous"
          >
            <FaChevronLeft size={14} />
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {projects.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => {
                  setPage([idx, idx > currentIndex ? 1 : -1]);
                  stopAutoPlay();
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-cyan-400' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              paginate(1);
              stopAutoPlay();
            }}
            className="lg:hidden w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
            aria-label="Next"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Visual Page Separation: Glowing Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.3)]" />
    </section>
  );
}
