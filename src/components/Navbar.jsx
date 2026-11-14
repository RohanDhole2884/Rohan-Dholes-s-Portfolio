import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, personalInfo } from '../data/portfolio';
import { FaBars, FaTimes, FaFileDownload } from 'react-icons/fa';

function NavItem({ href, label, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onClick={onClick}
      className="relative text-xs sm:text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 py-1"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
      <motion.span
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #818cf8, #c084fc, #38bdf8)',
          borderRadius: '999px',
        }}
        initial={{ width: 0 }}
        animate={{ width: hovered ? '100%' : 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />
    </a>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if user has scrolled away from the very top
      if (currentScrollY > 60) {
        setIsScrolled(true);

        // When scrolling UP: show the small navbar
        // When scrolling DOWN: hide the navbar
        if (currentScrollY < lastScrollY.current) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY.current + 8) {
          setIsVisible(false);
        }
      } else {
        // At the top: always show full navbar
        setIsScrolled(false);
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.28, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 px-6 md:px-12 bg-[#050508]/85 backdrop-blur-xl border-b border-cyan-400/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'py-6 px-6 md:px-12 bg-transparent'
        }`}
      >
        {/* Logo — shrinks neatly when scrolled */}
        <div className="flex items-center gap-2">
          <span
            className={`font-black tracking-wide cursor-pointer select-none transition-all duration-300 ${
              isScrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
            }`}
            onClick={(e) => handleScrollTo(e, '#home')}
            style={{
              background: 'linear-gradient(90deg, #1cd8d2, #00bf8f, #818cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {personalInfo.name}
          </span>
        </div>

        {/* Center Desktop Links */}
        <div className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <NavItem
              key={link.label}
              href={link.href}
              label={link.label}
              onClick={(e) => handleScrollTo(e, link.href)}
            />
          ))}
        </div>

        {/* Right CTA / Resume / Mobile Menu Button */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Quick Resume Download Button */}
          <a
            href={personalInfo.resumeUrl}
            download="Rohan_Dhole_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:flex items-center gap-1.5 border border-cyan-400/40 text-cyan-300 hover:text-white hover:bg-cyan-400/20 font-medium rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(0,212,255,0.15)] hover:shadow-[0_0_20px_rgba(0,212,255,0.35)] ${
              isScrolled
                ? 'px-3 py-1.5 text-xs bg-[#0e1628]/90'
                : 'px-4 py-2 text-xs sm:text-sm bg-cyan-950/40 backdrop-blur-sm'
            }`}
          >
            <FaFileDownload size={13} className="text-cyan-400" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className={`hidden lg:flex items-center gap-2 border border-cyan-400/30 text-white font-medium rounded-full hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-all duration-300 group ${
              isScrolled
                ? 'px-4 py-1.5 text-xs bg-[#0e1628]/80'
                : 'px-5 py-2 text-sm bg-[#1a1a2e]/60 backdrop-blur-sm'
            }`}
          >
            <span className="text-cyan-400 group-hover:translate-x-0.5 transition-transform duration-200">
              →
            </span>
            Let's Talk
          </a>

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-xl text-white/80 hover:text-white transition-colors duration-200 focus:outline-none p-1"
            aria-label="Open Menu"
          >
            <FaBars />
          </button>
        </div>
      </motion.header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[999] bg-[#050508]/98 backdrop-blur-2xl flex flex-col items-center justify-center p-6"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl p-2 hover:text-cyan-400 transition-colors"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>

            <ul className="space-y-6 text-center">
              {['Home', ...navLinks.map((l) => l.label)].map((label, idx) => {
                const targetId = label.toLowerCase() === 'home' ? '#home' : `#${label.toLowerCase()}`;
                return (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.06 }}
                  >
                    <a
                      href={targetId}
                      onClick={(e) => handleScrollTo(e, targetId)}
                      className="text-2xl sm:text-3xl text-white font-semibold hover:text-cyan-400 transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (navLinks.length + 1) * 0.06 }}
                className="pt-4"
              >
                <a
                  href={personalInfo.resumeUrl}
                  download="Rohan_Dhole_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-400 text-black font-bold text-lg hover:bg-white transition-all shadow-[0_0_25px_rgba(0,212,255,0.4)]"
                >
                  <FaFileDownload size={18} />
                  Download Resume
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
