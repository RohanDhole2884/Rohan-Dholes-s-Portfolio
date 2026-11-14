import React from 'react';
import { motion } from 'framer-motion';
import { timelineItems } from '../data/portfolio';
import { FaBriefcase, FaGraduationCap, FaAward, FaCalendarAlt, FaMapMarkerAlt, FaComments, FaExternalLinkAlt } from 'react-icons/fa';

const iconMap = {
  exp: <FaBriefcase />,
  edu: <FaGraduationCap />,
  lead: <FaAward />,
};

function TimelineCard({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`relative flex flex-col md:flex-row items-center mb-10 last:mb-0 ${
        isLeft ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Spacer for 50% width on opposite side on desktop */}
      <div className="hidden md:block w-1/2" />

      {/* Center glowing node on timeline */}
      <div
        className="absolute left-[1.375rem] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-[#050508] flex items-center justify-center text-xs text-white z-20 shadow-lg"
        style={{
          background: item.accent,
          boxShadow: `0 0 16px ${item.accent}aa`,
        }}
      >
        {iconMap[item.type] || <FaGraduationCap />}
      </div>

      {/* Card Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className={`w-full pl-14 md:pl-0 md:w-1/2 ${
          isLeft ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'
        }`}
      >
        <div
          className="p-6 rounded-2xl border border-white/10 bg-[#0d1525]/85 backdrop-blur-md relative overflow-hidden group hover:border-cyan-400/40 transition-all duration-300"
          style={{
            boxShadow: `0 8px 30px rgba(0,0,0,0.5)`,
          }}
        >
          {/* Top glowing line accent */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
          />

          {/* Type & Period */}
          <div
            className={`flex flex-wrap items-center gap-2 mb-2 ${
              isLeft ? 'md:justify-end' : 'md:justify-start'
            }`}
          >
            <span
              className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
              style={{
                color: item.accent,
                backgroundColor: `${item.accent}15`,
                border: `1px solid ${item.accent}33`,
              }}
            >
              {item.label}
            </span>
            <span className="flex items-center gap-1 text-xs text-white/40">
              <FaCalendarAlt size={11} /> {item.period}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>

          {/* Subtitle / Company (Clickable Link if URL exists!) */}
          <p className="text-sm text-cyan-300 font-medium mb-3 flex items-center gap-2 flex-wrap justify-start md:inline-flex">
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white underline underline-offset-4 decoration-cyan-400/40 hover:decoration-cyan-400 transition-all"
              >
                <span>{item.subtitle}</span>
                <FaExternalLinkAlt size={11} className="text-cyan-400" />
              </a>
            ) : (
              <span>{item.subtitle}</span>
            )}
            <span className="text-white/30 text-xs flex items-center gap-1">
              • <FaMapMarkerAlt size={10} /> {item.location}
            </span>
          </p>

          {/* Bullet points */}
          <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-gray-300 text-left">
            {item.points.map((pt, pIdx) => (
              <li key={pIdx} className="flex items-start gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: item.accent }}
                />
                <span>{pt}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          {item.tags && (
            <div
              className={`flex flex-wrap gap-1.5 ${
                isLeft ? 'md:justify-end' : 'md:justify-start'
              }`}
            >
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/60 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative w-full min-h-screen bg-[#050508] py-24 px-6 md:px-12 overflow-hidden">
      {/* Top Page Separation Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent shadow-[0_0_15px_rgba(99,102,241,0.3)]" />

      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 w-[650px] h-[500px] rounded-full bg-indigo-600/[0.04] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-[500px] h-[400px] rounded-full bg-sky-600/[0.04] blur-[130px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[13px] font-bold tracking-[0.3em] text-cyan-400 uppercase mb-2">
            Career Journey
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            Experience &{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #818cf8, #c084fc, #38bdf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Education
            </span>
          </h2>
          <div
            className="mx-auto mt-4 h-1 rounded-full w-20"
            style={{
              background: 'linear-gradient(90deg, #818cf8, #c084fc)',
              boxShadow: '0 0 10px rgba(129,140,248,0.6)',
            }}
          />
        </motion.div>

        {/* Timeline wrapper */}
        <div className="relative py-4">
          {/* Timeline Center Line */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{
              background:
                'linear-gradient(to bottom, transparent 0%, rgba(129,140,248,0.4) 5%, rgba(129,140,248,0.3) 95%, transparent 100%)',
            }}
          />
          <div
            className="md:hidden absolute left-[1.375rem] top-0 bottom-0 w-px"
            style={{
              background:
                'linear-gradient(to bottom, transparent 0%, rgba(129,140,248,0.4) 5%, rgba(129,140,248,0.3) 95%, transparent 100%)',
            }}
          />

          {/* Cards in the exact requested sequence */}
          <div>
            {timelineItems.map((item, idx) => (
              <TimelineCard key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>

        {/* Opportunity Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#111118]/85 backdrop-blur-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            boxShadow: '0 0 50px rgba(129,140,248,0.15)',
          }}
        >
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[10px] font-black tracking-[0.28em] text-emerald-400 uppercase">
                Open to Opportunities
              </span>
            </div>
            <h3 className="text-white font-black text-2xl md:text-3xl leading-tight">
              Looking for my next{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #c084fc, #818cf8, #38bdf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                software engineering role
              </span>
            </h3>
            <p className="text-white/40 text-sm mt-2 max-w-md leading-relaxed">
              Available for full-time Software Developer opportunities, Full-Stack engineering, and AI/Data Science positions.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white flex-shrink-0 cursor-pointer shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%)',
              boxShadow: '0 0 32px rgba(129,140,248,0.4), inset 0 1px 0 rgba(255,255,255,0.15)',
            }}
          >
            <FaComments size={16} />
            Let's Connect
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Page Separation Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent shadow-[0_0_15px_rgba(0,212,255,0.3)]" />
    </section>
  );
}
