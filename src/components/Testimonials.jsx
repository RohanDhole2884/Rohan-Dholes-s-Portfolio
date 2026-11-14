import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/portfolio';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  return (
    <section className="w-full min-h-screen lg:h-screen flex flex-col justify-center bg-[#07070b] py-16 px-6 relative overflow-hidden">
      {/* Top Page Separation Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent shadow-[0_0_15px_rgba(0,212,255,0.4)]" />

      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="max-w-5xl mx-auto relative z-10 w-full my-auto">
        {/* Compact 1-Page Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 text-xs tracking-[4px] uppercase mb-2 font-semibold">
            Endorsements & Feedback
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 leading-tight">
            Colleagues & Mentors{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #818cf8, #c084fc, #38bdf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              love
            </span>{' '}
            collaborating
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">
            Feedback and words from mentors, peers, and collaborators on problem solving and execution.
          </p>
        </motion.div>

        {/* 2x2 Grid fitting in 1-Page UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="relative bg-[#0d1222]/90 border border-white/10 rounded-2xl p-5 sm:p-6 overflow-hidden group hover:border-cyan-400/40 hover:bg-[#11182c] transition-all"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              style={{
                boxShadow: `0 0 30px ${t.glowColor}, 0 10px 40px rgba(0,0,0,0.5)`,
              }}
            >
              {/* Glowing top line accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${t.gradientFrom}, transparent)` }}
              />
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-15 pointer-events-none"
                style={{ background: t.gradientFrom }}
              />

              <div className="mb-2 text-xl text-cyan-400/30">
                <FaQuoteLeft />
              </div>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 relative z-10 italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 relative z-10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.gradientFrom}, ${t.gradientTo})` }}
                >
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-[11px] text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Page Separation Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.3)]" />
    </section>
  );
}
