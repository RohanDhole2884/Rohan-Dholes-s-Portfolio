import React from 'react';
import { motion } from 'framer-motion';
import { skillsRow1, skillsRow2, skillCategories } from '../data/portfolio';

function SkillCard({ skill }) {
  return (
    <div
      className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md select-none hover:border-cyan-400/50 hover:bg-white/[0.07] transition-all duration-300 flex-shrink-0 mx-3 group cursor-default"
      style={{
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        minWidth: '200px',
      }}
    >
      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
        {skill.icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
          {skill.name}
        </h4>
        <p className="text-[11px] text-white/40">{skill.category}</p>
      </div>
    </div>
  );
}

function InfiniteRow({ items, direction = 'left', speed = 35 }) {
  // Triple the items to ensure seamless infinite looping without gaps or hitching
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden w-full py-2">
      <div
        className={`flex w-max ${direction === 'left' ? 'marquee-left' : 'marquee-right'}`}
        style={{ '--speed': `${speed}s` }}
      >
        {repeated.map((skill, idx) => (
          <SkillCard key={`${skill.name}-${idx}`} skill={skill} />
        ))}
      </div>

      {/* Edge gradient fades for smooth look */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#050508] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#050508] to-transparent z-10" />
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <section id="skills" className="relative w-full py-24 bg-[#050508] overflow-hidden">
      {/* Top Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />

      {/* Ambient center glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-indigo-600/10 blur-[90px]" />

      {/* Header */}
      <motion.div
        className="text-center mb-14 px-4 relative z-10"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase mb-3">
          Core Technical Skills
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white">
          Skills &{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #818cf8, #c084fc, #38bdf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Technologies
          </span>
        </h2>
        <p className="mt-4 text-white/50 text-sm sm:text-base max-w-lg mx-auto">
          Strong foundations in Java, Python, and SQL, combined with modern full-stack frameworks, cloud deployment, and AI toolchains.
        </p>
      </motion.div>

      {/* Infinite Continuous Marquee Tracks (No Sticking!) */}
      <div className="space-y-4 relative z-10">
        <InfiniteRow items={skillsRow1} direction="left" speed={32} />
        <InfiniteRow items={skillsRow2} direction="right" speed={36} />
      </div>

      {/* Category breakdown summary — Technologies first, followed by Languages, Frameworks, Tools */}
      <div className="max-w-5xl mx-auto mt-16 px-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative z-10">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center backdrop-blur-sm hover:border-cyan-400/40 hover:bg-white/[0.04] transition-all"
          >
            <p
              className="text-3xl sm:text-4xl font-black mb-1"
              style={{
                background: 'linear-gradient(135deg, #38bdf8, #818cf8, #c084fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {cat.count}
            </p>
            <h4 className="text-sm sm:text-base font-bold text-white mb-1">{cat.title}</h4>
            <p className="text-[11px] sm:text-xs text-white/40">{cat.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/25 to-transparent" />
    </section>
  );
}
