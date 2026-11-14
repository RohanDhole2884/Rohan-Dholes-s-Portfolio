import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const TRAIL_COUNT = 8;
const SPRING_CONFIGS = [
  { stiffness: 800, damping: 50 },
  { stiffness: 400, damping: 40 },
  { stiffness: 250, damping: 35 },
  { stiffness: 180, damping: 32 },
  { stiffness: 130, damping: 30 },
  { stiffness: 95, damping: 28 },
  { stiffness: 70, damping: 26 },
  { stiffness: 50, damping: 24 },
];

const SIZES = [12, 9, 7, 5, 4, 3, 2, 2];
const SHADOWS = [
  '0 0 10px 2px rgba(56,189,248,0.7), 0 0 20px 4px rgba(56,189,248,0.3)',
  '0 0 7px 1px rgba(56,189,248,0.5)',
  '0 0 5px 1px rgba(56,189,248,0.4)',
  '0 0 4px 1px rgba(56,189,248,0.3)',
  '0 0 3px 0px rgba(56,189,248,0.25)',
  '0 0 2px 0px rgba(56,189,248,0.2)',
  '0 0 2px 0px rgba(56,189,248,0.15)',
  '0 0 1px 0px rgba(56,189,248,0.1)',
];

function TrailDot({ mouseX, mouseY, index }) {
  const size = SIZES[index];
  const springX = useSpring(mouseX, SPRING_CONFIGS[index]);
  const springY = useSpring(mouseY, SPRING_CONFIGS[index]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        width: size,
        height: size,
        borderRadius: '50%',
        background:
          index === 0
            ? 'radial-gradient(circle at 35% 35%, #bae6fd, #38bdf8 65%, #0369a1)'
            : `rgba(56,189,248,${0.7 - index * 0.08})`,
        boxShadow: SHADOWS[index],
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}

export default function CursorTrail() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const [isIdle, setIsIdle] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const idleTimer = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsIdle(false);
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setIsIdle(true), 800);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(idleTimer.current);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <>
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: isIdle && i > 0 ? 0 : 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <TrailDot mouseX={mouseX} mouseY={mouseY} index={i} />
        </motion.div>
      ))}
    </>
  );
}
