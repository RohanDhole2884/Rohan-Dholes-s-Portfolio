import React, { useState, useEffect } from 'react';
import CursorTrail from './components/CursorTrail';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsMarquee from './components/SkillsMarquee';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalPreloader from './components/TerminalPreloader';

export default function App() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  // Fallback safety: even if preloader fails, show site after 4.5s
  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloaderFinished(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full max-w-full overflow-x-hidden bg-[#050508] text-white select-auto min-h-screen">
      {/* Interactive Terminal Preloader */}
      {!preloaderFinished && (
        <TerminalPreloader onFinish={() => setPreloaderFinished(true)} />
      )}

      {/* Custom smooth physics cursor trail on desktop */}
      <CursorTrail />

      {/* Floating / Sticky smart navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <SkillsMarquee />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
