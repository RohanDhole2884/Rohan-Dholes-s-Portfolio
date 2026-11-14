import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { FaChevronDown, FaCheck, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaBriefcase, FaFileDownload } from 'react-icons/fa';

const inquiryTypes = [
  { value: 'fulltime', label: '💼 Full-Time Software Developer Role' },
  { value: 'internship', label: '🚀 Internship / Contract Opportunity' },
  { value: 'interview', label: '📅 Recruiter / HR Screening & Interview' },
  { value: 'collaboration', label: '🤝 Tech Project / Freelance Work' },
  { value: 'general', label: '💬 General Inquiry' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', inquiry: '', message: '' });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelectInquiry = (option) => {
    setSelectedLabel(option.label);
    setForm({ ...form, inquiry: option.value });
    setDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Job / Opportunity Inquiry from ${form.name}${form.company ? ' (' + form.company + ')' : ''}`
    );
    const body = encodeURIComponent(
      `Hi Rohan,\n\nName: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || 'N/A'}\nInquiry Type: ${selectedLabel || 'General'}\n\nMessage:\n${form.message}\n\nBest regards,\n${form.name}`
    );
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section id="contact" className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center px-6 py-20">
      {/* Top Page Separation Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent shadow-[0_0_15px_rgba(0,212,255,0.4)]" />

      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-violet-600/10 blur-[90px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14">
        {/* Left Side: Tailored for Companies & HR */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* HR & Recruiter Friendly Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 mb-3">
            <FaBriefcase className="text-cyan-400 text-xs" />
            <span className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-widest">
              Available for Full-Time Roles
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Let's discuss{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #818cf8, #c084fc, #38bdf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              opportunities.
            </span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
            Whether you are a recruiter, hiring manager, or technical lead looking for a dedicated Software Developer with Java, Python, SQL, and Full-Stack expertise — I would love to connect!
          </p>

          {/* Quick Direct HR Contact Channels */}
          <div className="flex flex-col gap-2.5 w-full max-w-sm mb-6 text-left">
            {/* Direct Resume Download for Recruiters */}
            <a
              href={personalInfo.resumeUrl}
              download="Rohan_Dhole_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-cyan-400/40 bg-cyan-950/40 hover:border-cyan-300 hover:bg-cyan-900/40 text-sm text-cyan-200 transition-all group shadow-[0_0_20px_rgba(0,212,255,0.15)] hover:shadow-[0_0_25px_rgba(0,212,255,0.3)]"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                <FaFileDownload size={15} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] text-cyan-300 uppercase font-mono font-bold tracking-wider">Download Resume</p>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-400/20 text-cyan-300 font-mono font-bold">PDF</span>
                </div>
                <p className="font-semibold text-white text-xs sm:text-sm">Rohan_Dhole_Resume.pdf</p>
              </div>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:border-cyan-400/40 hover:bg-white/[0.06] text-sm text-gray-200 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <FaEnvelope size={14} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-mono">Email Directly</p>
                <p className="font-medium text-white text-xs sm:text-sm">{personalInfo.email}</p>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:border-purple-400/40 hover:bg-white/[0.06] text-sm text-gray-200 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-400/10 border border-purple-400/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <FaPhone size={13} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-mono">Phone / WhatsApp</p>
                <p className="font-medium text-white text-xs sm:text-sm">{personalInfo.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-xs text-gray-400">
              <FaMapMarkerAlt className="text-emerald-400 text-sm ml-1" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0a66c2]/20 border border-[#0a66c2]/40 text-blue-300 text-xs font-semibold hover:bg-[#0a66c2]/30 transition-all"
            >
              <FaLinkedin size={14} /> Connect on LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold hover:bg-white/10 hover:border-cyan-400/30 transition-all"
            >
              <FaGithub size={14} /> GitHub Profile
            </a>
          </div>
        </motion.div>

        {/* Right Side: Quick HR & Company Contact Form */}
        <motion.div
          className="flex-1 w-full max-w-lg bg-[#0d1222]/80 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl relative"
          style={{
            boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(0,212,255,0.1)',
          }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              Quick Reach Out
            </h3>
            <p className="text-xs text-gray-400">
              No lengthy forms — leave your note and get in touch directly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-1.5 font-medium">
                  Your Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Sarah Connor"
                  required
                  className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-2.5 text-gray-200 placeholder-gray-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10 transition-all outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-1.5 font-medium">
                  Work / Personal Email <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  placeholder="recruiter@company.com"
                  required
                  className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-2.5 text-gray-200 placeholder-gray-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10 transition-all outline-none text-sm"
                />
              </div>
            </div>

            {/* Company / Organization */}
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-1.5 font-medium">
                Company / Organization
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleInputChange}
                placeholder="e.g. Connexis / Google / Tech Startup"
                className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-2.5 text-gray-200 placeholder-gray-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10 transition-all outline-none text-sm"
              />
            </div>

            {/* Inquiry Type Dropdown */}
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-1.5 font-medium">
                Purpose of Contact <span className="text-cyan-400">*</span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-2.5 text-left text-gray-200 flex items-center justify-between hover:bg-white/[0.06] transition-all focus:border-cyan-400/50 outline-none text-sm"
                >
                  <span className="truncate">{selectedLabel || 'Select purpose (e.g. Job Role, Interview)...'}</span>
                  <FaChevronDown
                    className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${
                      dropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute mt-1.5 w-full bg-[#0c1222] border border-cyan-400/30 rounded-xl overflow-hidden shadow-2xl z-50 py-1"
                    >
                      {inquiryTypes.map((opt) => (
                        <div
                          key={opt.value}
                          onClick={() => handleSelectInquiry(opt)}
                          className="px-4 py-2.5 hover:bg-cyan-400/10 text-gray-300 hover:text-white cursor-pointer transition-colors text-xs sm:text-sm flex items-center justify-between"
                        >
                          <span>{opt.label}</span>
                          {form.inquiry === opt.value && <FaCheck className="text-cyan-400" size={12} />}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Message / Note */}
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-1.5 font-medium">
                Short Note / Message <span className="text-cyan-400">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleInputChange}
                placeholder="Mention the role details or a good time to connect..."
                rows={3}
                required
                className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-2.5 text-gray-200 placeholder-gray-600 resize-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10 transition-all outline-none text-sm"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="group relative cursor-pointer w-full overflow-hidden text-white font-bold text-sm py-3.5 rounded-2xl shadow-[0_4px_24px_rgba(0,212,255,0.3)] hover:shadow-[0_8px_35px_rgba(0,212,255,0.5)] transition-all duration-300"
              style={{
                background: 'linear-gradient(to right, #00d2ef, #4f46e5, #7c3aed)',
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-5 flex items-center justify-center overflow-hidden">
                <span className="absolute flex items-center gap-2 transition-all duration-300 group-hover:-translate-y-7 group-hover:opacity-0 opacity-100">
                  <FaPaperPlane className="w-3.5 h-3.5" />
                  Send Inquiry to Rohan
                </span>
                <span className="absolute flex items-center gap-2 transition-all duration-300 translate-y-7 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <FaPaperPlane className="w-3.5 h-3.5" />
                  Connect Now 🚀
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.button>

            {isSent && (
              <p className="text-emerald-400 text-xs text-center mt-2 font-mono">
                ✓ Email draft opened in your email client!
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
