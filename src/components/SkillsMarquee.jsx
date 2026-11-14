import React from 'react';
import { motion } from 'framer-motion';
import { skillsRow1, skillsRow2, skillCategories } from '../data/portfolio';
import { SiKubernetes } from 'react-icons/si';

function JavaIcon({ size = 24 }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block' }}>
      <path fill="#f84940" d="M18.503 3.337c0 0 2.671 2.672-2.534 6.781-4.174 3.296-0.952 5.176-0.002 7.323-2.436-2.198-4.224-4.133-3.025-5.934 1.761-2.644 6.638-3.925 5.56-8.17z" />
      <path fill="#ea2d2e" d="M17.127 15.63c1.24 1.428-0.326 2.713-0.326 2.713s3.149-1.625 1.703-3.661c-1.351-1.898-2.386-2.841 3.221-6.093 0 0-8.801 2.198-4.598 7.042z" />
      <path fill="#007396" d="M12.557 23.22c0 0-0.982 0.571 0.699 0.765 2.037 0.232 3.079 0.199 5.324-0.226 0 0 0.59 0.37 1.415 0.691-5.033 2.157-11.39-0.125-7.437-1.23z M11.942 20.405c0 0-1.102 0.816 0.581 0.99 2.176 0.224 3.895 0.243 6.869-0.33 0 0 0.411 0.417 1.058 0.645-6.085 1.779-12.863 0.14-8.508-1.305z M23.783 25.302c0 0 0.727 0.599-0.801 1.062-2.905 0.88-12.091 1.146-14.643 0.035-0.917-0.399 0.803-0.953 1.344-1.069 0.564-0.122 0.887-0.1 0.887-0.1-1.020-0.719-6.594 1.411-2.831 2.021 10.262 1.664 18.706-0.749 16.044-1.95z M13.029 17.489c0 0-4.673 1.11-1.655 1.513 1.274 0.171 3.814 0.132 6.181-0.066 1.934-0.163 3.876-0.51 3.876-0.51s-0.682 0.292-1.175 0.629c-4.745 1.248-13.911 0.667-11.272-0.609 2.232-1.079 4.046-0.956 4.046-0.956z M21.412 22.174c4.824-2.506 2.593-4.915 1.037-4.591-0.382 0.079-0.552 0.148-0.552 0.148s0.142-0.222 0.412-0.318c3.079-1.083 5.448 3.193-0.994 4.887-0 0 0.075-0.067 0.097-0.126z M13.503 28.966c4.63 0.296 11.74-0.164 11.908-2.355 0 0-0.324 0.831-3.826 1.49-3.952 0.744-8.826 0.657-11.716 0.18 0 0 0.592 0.49 3.635 0.685z" />
    </svg>
  );
}

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
        {skill.name === 'Java' ? (
          <JavaIcon size={24} />
        ) : skill.name === 'Kubernetes' ? (
          <SiKubernetes className="text-[#326ce5] text-2xl" />
        ) : (
          skill.icon
        )}
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
