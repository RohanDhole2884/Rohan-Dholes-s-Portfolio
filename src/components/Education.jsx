import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education } from '../data/portfolio';
import { FaGraduationCap } from 'react-icons/fa';

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" ref={ref} className="bg-dark-800 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-12 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="gradient-text">Education</span>
        </h2>
        <p className="text-gray-400 text-sm">My academic background</p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid gap-6">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-cyan-400/25 transition-colors"
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-indigo-600/10 flex items-center justify-center flex-shrink-0">
                <FaGraduationCap className="text-indigo-400" size={22} />
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <span className="text-xs text-cyan-400 font-medium bg-cyan-400/10 px-3 py-1 rounded-full w-fit">
                    {edu.duration}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-1">{edu.school}</p>
                <p className="text-xs text-gray-500">{edu.location}</p>
                <div className="mt-3 inline-block text-sm font-semibold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">
                  {edu.grade}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
