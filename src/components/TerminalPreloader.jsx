import React, { useState, useEffect, useRef } from 'react';

const terminalSteps = [
  { type: 'cmd', text: 'git checkout main' },
  { type: 'cmd', text: 'npm run dev' },
  { type: 'info', text: '⚡  compiling Rohan Dhole Portfolio...' },
  { type: 'ready', text: '➜  https://rohandhole.in — ready' },
];

const TYPE_SPEED = 20;
const LINE_PAUSE = 160;
const FINISH_DELAY = 350;

const colorClasses = {
  cmd: 'text-white',
  info: 'text-yellow-300',
  ready: 'text-cyan-300 font-semibold',
};

export default function TerminalPreloader({ onFinish }) {
  const [completedLines, setCompletedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isExiting, setIsExiting] = useState(false);
  const charIdxRef = useRef(0);
  const hasFinishedRef = useRef(false);

  const triggerFinish = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    if (onFinish) onFinish();
  };

  const handleExit = () => {
    setIsExiting(true);
    setTimeout(triggerFinish, 600);
  };

  // Absolute safety timeout: after 3.8s, guarantee exit
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      handleExit();
    }, 3800);
    return () => clearTimeout(safetyTimer);
  }, []);

  // Typing animation loop
  useEffect(() => {
    if (isExiting) return;

    if (currentLineIndex >= terminalSteps.length) {
      const finishTimer = setTimeout(() => {
        handleExit();
      }, FINISH_DELAY);
      return () => clearTimeout(finishTimer);
    }

    const targetLine = terminalSteps[currentLineIndex].text;

    if (charIdxRef.current < targetLine.length) {
      const typeTimer = setTimeout(() => {
        charIdxRef.current += 1;
        setCurrentText(targetLine.slice(0, charIdxRef.current));
      }, TYPE_SPEED);
      return () => clearTimeout(typeTimer);
    }

    const nextLineTimer = setTimeout(() => {
      setCompletedLines((prev) => [...prev, terminalSteps[currentLineIndex]]);
      setCurrentLineIndex((prev) => prev + 1);
      setCurrentText('');
      charIdxRef.current = 0;
    }, LINE_PAUSE);

    return () => clearTimeout(nextLineTimer);
  }, [currentLineIndex, currentText, isExiting]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#050508] flex items-center justify-center px-4 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="w-full max-w-xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a2e] rounded-t-xl border border-white/10 border-b-0 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block shadow-sm" />
            <span className="ml-3 text-white/40 text-xs font-mono">bash — rohan@rohandhole.in:~</span>
          </div>
          <button
            onClick={handleExit}
            className="text-[11px] text-white/40 hover:text-cyan-400 font-mono transition-colors cursor-pointer px-2 py-0.5 rounded hover:bg-white/5"
          >
            skip ↵
          </button>
        </div>

        {/* Terminal Body */}
        <div
          className="relative px-6 py-6 font-mono text-xs sm:text-sm leading-7 rounded-b-xl border border-white/10"
          style={{
            background: 'linear-gradient(135deg, #0d0d1a 0%, #0a0a14 100%)',
            boxShadow: '0 0 60px rgba(0,210,239,0.08), 0 30px 60px rgba(0,0,0,0.8)',
            minHeight: '220px',
          }}
        >
          {/* CRT lines overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03] rounded-b-xl"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 4px)',
            }}
          />

          {/* Rendered lines */}
          {completedLines.map((line, idx) => (
            <div key={idx} className="flex items-start">
              <span className={colorClasses[line.type]}>
                {line.type === 'cmd' && <span className="text-emerald-400 mr-2">$</span>}
                {line.text}
              </span>
            </div>
          ))}

          {/* Active typing line */}
          {currentLineIndex < terminalSteps.length && (
            <div className="flex items-center">
              <span className={colorClasses[terminalSteps[currentLineIndex].type]}>
                {terminalSteps[currentLineIndex].type === 'cmd' && (
                  <span className="text-emerald-400 mr-2">$</span>
                )}
                {currentText}
              </span>
              <span className="inline-block w-[2px] h-[1.1em] bg-cyan-400 ml-1 align-middle animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
