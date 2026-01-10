import React, { useRef } from "react";
import MultipleText from "./multipleText";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const stars = Array.from({ length: 80 }, () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 2 + 1}px`,
  duration: Math.random() * 4 + 2,
  delay: Math.random() * 6,
}));

const SpaceHero = () => {
  return (
    <motion.div
      className="hidden lg:block relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[520px] aspect-[4/5] lg:aspect-square mx-auto"
      initial={{ opacity: 0, scale: 0.9, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* central planet */}
      <div className="absolute inset-0 flex items-start justify-end my-20">
        <div className="w-38 h-38 rounded-full bg-gradient-to-br from-[#000000] to-[#0d0f2b] border border-white/10 shadow-[0_0_40px_rgba(23,172,255,0.25)]" />
      </div>

      {/* rotating rings */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full " />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-88 sm:h-88 lg:w-96 lg:h-96 rounded-full " />
      </motion.div>

      {/* floating satellites */}
      <motion.div
        className="absolute"
        style={{ top: "8%", left: "12%" }}
        animate={{ y: [0, -6, 0, 6, 0], rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <defs>
            <radialGradient id="moon1">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#94a3b8" />
            </radialGradient>
            <filter id="moonGlow">
              <feGaussianBlur stdDeviation="1" />
            </filter>
          </defs>
          <circle cx="12" cy="12" r="9" fill="url(#moon1)" filter="url(#moonGlow)" />
          <circle cx="12" cy="12" r="8" fill="#cbd5e1" />
          {/* Craters */}
          <circle cx="9" cy="10" r="2" fill="#94a3b8" opacity="0.4" />
          <circle cx="15" cy="13" r="1.5" fill="#94a3b8" opacity="0.3" />
          <circle cx="13" cy="8" r="1" fill="#94a3b8" opacity="0.5" />
          {/* Highlight */}
          <ellipse cx="10" cy="9" rx="3" ry="2" fill="#f1f5f9" opacity="0.4" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute"
        style={{ bottom: "12%", right: "8%" }}
        animate={{ y: [0, 6, 0, -6, 0], rotate: [0, -360] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <defs>
            <radialGradient id="planet1">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </radialGradient>
            <filter id="planetGlow">
              <feGaussianBlur stdDeviation="2" />
            </filter>
          </defs>
          <circle cx="16" cy="16" r="13" fill="url(#planet1)" filter="url(#planetGlow)" opacity="0.3" />
          <circle cx="16" cy="16" r="11" fill="url(#planet1)" />
          {/* Surface details */}
          <ellipse cx="12" cy="14" rx="4" ry="2" fill="#ea580c" opacity="0.3" />
          <ellipse cx="19" cy="17" rx="3" ry="1.5" fill="#ea580c" opacity="0.4" />
          <circle cx="14" cy="19" r="1.5" fill="#dc2626" opacity="0.2" />
          {/* Highlight */}
          <ellipse cx="13" cy="12" rx="4" ry="3" fill="#fef3c7" opacity="0.3" />
          {/* Ring */}
          <ellipse cx="16" cy="16" rx="15" ry="4" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.4" />
          <ellipse cx="16" cy="16" rx="14" ry="3.5" fill="none" stroke="#fde68a" strokeWidth="0.5" opacity="0.6" />
        </svg>
      </motion.div>

      {/* RIGHT-SIDE SPACE CLUSTER */}
      {/* Mini satellite */}
      <motion.div
        className="absolute right-24 top-20 scale-90 md:scale-100"
        aria-hidden
        animate={{ y: [0, -6, 0, 6, 0], rotate: [0, 2, -1, 2, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="70"
          height="50"
          viewBox="0 0 70 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Solar panel gradient */}
            <linearGradient id="solarPanel" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="50%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            
            {/* Metallic body gradient */}
            <linearGradient id="satBody" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
            
            {/* Glow for satellite */}
            <filter id="satGlow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Left solar panel */}
          <g>
            <rect x="2" y="14" width="20" height="20" rx="1" fill="url(#solarPanel)" stroke="#60a5fa" strokeWidth="0.5" />
            {/* Solar cells grid */}
            <rect x="5" y="17" width="4" height="3" fill="#3b82f6" opacity="0.6" />
            <rect x="10" y="17" width="4" height="3" fill="#3b82f6" opacity="0.5" />
            <rect x="15" y="17" width="4" height="3" fill="#3b82f6" opacity="0.6" />
            <rect x="5" y="21" width="4" height="3" fill="#3b82f6" opacity="0.5" />
            <rect x="10" y="21" width="4" height="3" fill="#3b82f6" opacity="0.6" />
            <rect x="15" y="21" width="4" height="3" fill="#3b82f6" opacity="0.5" />
            <rect x="5" y="25" width="4" height="3" fill="#3b82f6" opacity="0.6" />
            <rect x="10" y="25" width="4" height="3" fill="#3b82f6" opacity="0.5" />
            <rect x="15" y="25" width="4" height="3" fill="#3b82f6" opacity="0.6" />
            <rect x="5" y="29" width="4" height="3" fill="#3b82f6" opacity="0.5" />
            <rect x="10" y="29" width="4" height="3" fill="#3b82f6" opacity="0.6" />
            <rect x="15" y="29" width="4" height="3" fill="#3b82f6" opacity="0.5" />
            {/* Panel shine */}
            <rect x="4" y="15" width="2" height="16" fill="#93c5fd" opacity="0.3" />
          </g>

          {/* Central body */}
          <g>
            <rect x="26" y="18" width="18" height="14" rx="2" fill="url(#satBody)" stroke="#e2e8f0" strokeWidth="0.5" />
            {/* Body details */}
            <rect x="28" y="20" width="14" height="1.5" fill="#64748b" opacity="0.6" />
            <rect x="28" y="23" width="14" height="1.5" fill="#64748b" opacity="0.4" />
            <rect x="28" y="26" width="14" height="1.5" fill="#64748b" opacity="0.6" />
            <rect x="28" y="29" width="14" height="1.5" fill="#64748b" opacity="0.4" />
            {/* Highlight */}
            <rect x="27" y="19" width="2" height="10" fill="#f8fafc" opacity="0.4" />
            {/* Antenna */}
            <line x1="35" y1="18" x2="35" y2="10" stroke="#94a3b8" strokeWidth="1" />
            <circle cx="35" cy="9" r="2" fill="#60a5fa" filter="url(#satGlow)">
              <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Right solar panel */}
          <g>
            <rect x="48" y="14" width="20" height="20" rx="1" fill="url(#solarPanel)" stroke="#60a5fa" strokeWidth="0.5" />
            {/* Solar cells grid */}
            <rect x="51" y="17" width="4" height="3" fill="#3b82f6" opacity="0.5" />
            <rect x="56" y="17" width="4" height="3" fill="#3b82f6" opacity="0.6" />
            <rect x="61" y="17" width="4" height="3" fill="#3b82f6" opacity="0.5" />
            <rect x="51" y="21" width="4" height="3" fill="#3b82f6" opacity="0.6" />
            <rect x="56" y="21" width="4" height="3" fill="#3b82f6" opacity="0.5" />
            <rect x="61" y="21" width="4" height="3" fill="#3b82f6" opacity="0.6" />
            <rect x="51" y="25" width="4" height="3" fill="#3b82f6" opacity="0.5" />
            <rect x="56" y="25" width="4" height="3" fill="#3b82f6" opacity="0.6" />
            <rect x="61" y="25" width="4" height="3" fill="#3b82f6" opacity="0.5" />
            <rect x="51" y="29" width="4" height="3" fill="#3b82f6" opacity="0.6" />
            <rect x="56" y="29" width="4" height="3" fill="#3b82f6" opacity="0.5" />
            <rect x="61" y="29" width="4" height="3" fill="#3b82f6" opacity="0.6" />
            {/* Panel shine */}
            <rect x="64" y="15" width="2" height="16" fill="#93c5fd" opacity="0.3" />
          </g>

          {/* Signal waves */}
          <circle cx="35" cy="9" r="4" stroke="#22d3ee" strokeWidth="0.5" fill="none" opacity="0.6">
            <animate attributeName="r" values="4;8;4" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="35" cy="9" r="6" stroke="#a78bfa" strokeWidth="0.5" fill="none" opacity="0.4">
            <animate attributeName="r" values="6;12;6" dur="3s" repeatCount="indefinite" begin="0.5s" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" begin="0.5s" />
          </circle>
        </svg>
      </motion.div>

      {/* UFO fly-around */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-75 sm:scale-90 md:scale-100"
        aria-hidden
        animate={{
          x: [-180, 160, 100, -140, -180],
          y: [-80, -60, 120, 100, -80],
          rotate: [-10, 5, -5, 10, -10],
          scale: [1, 1.03, 1, 1.04, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      >
        <svg
          width="100"
          height="60"
          viewBox="0 0 100 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Metallic gradient for main body */}
            <linearGradient id="metallic" x1="50" y1="5" x2="50" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="35%" stopColor="#94a3b8" />
              <stop offset="65%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
            
            {/* Dome gradient */}
            <radialGradient id="dome" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
            </radialGradient>
            
            {/* Enhanced beam gradient */}
            <linearGradient id="beam" x1="50" y1="32" x2="50" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#93c5fd" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#dbeafe" stopOpacity="0" />
            </linearGradient>
            
            {/* Glow effect */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Outer glow */}
            <filter id="outerGlow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Outer glow ring */}
          <ellipse cx="50" cy="22" rx="38" ry="13" fill="#60a5fa" opacity="0.15" filter="url(#outerGlow)" />
          
          {/* Main saucer body - bottom */}
          <ellipse cx="50" cy="24" rx="35" ry="12" fill="#1e293b" opacity="0.4" />
          
          {/* Main saucer body - middle layer with metallic effect */}
          <ellipse cx="50" cy="22" rx="35" ry="12" fill="url(#metallic)" />
          
          {/* Edge highlight */}
          <ellipse cx="50" cy="20.5" rx="35" ry="2" fill="#cbd5e1" opacity="0.6" />
          
          {/* Dark underside */}
          <ellipse cx="50" cy="23.5" rx="32" ry="10" fill="#0f172a" opacity="0.5" />
          
          {/* Cockpit dome */}
          <ellipse cx="50" cy="14" rx="16" ry="10" fill="url(#dome)" filter="url(#glow)" />
          
          {/* Dome highlight */}
          <ellipse cx="48" cy="11" rx="8" ry="5" fill="#ffffff" opacity="0.4" />
          
          {/* Window details */}
          <ellipse cx="50" cy="14" rx="12" ry="7" fill="#1e3a8a" opacity="0.6" />
          <ellipse cx="49" cy="13" rx="6" ry="4" fill="#bfdbfe" opacity="0.3" />

          {/* Decorative lights around the rim */}
          <circle cx="22" cy="22" r="1.5" fill="#22d3ee" filter="url(#glow)">
            <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="35" cy="20" r="1.5" fill="#a78bfa" filter="url(#glow)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="19" r="1.5" fill="#22d3ee" filter="url(#glow)">
            <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="65" cy="20" r="1.5" fill="#a78bfa" filter="url(#glow)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="78" cy="22" r="1.5" fill="#22d3ee" filter="url(#glow)">
            <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* Bottom panel details */}
          <ellipse cx="50" cy="25" rx="28" ry="9" fill="#334155" opacity="0.3" />
          <ellipse cx="50" cy="26" rx="22" ry="6" fill="#1e293b" opacity="0.4" />
          
          {/* Central bottom light */}
          <rect x="42" y="29" width="16" height="3" rx="1.5" fill="#60a5fa" opacity="0.9" filter="url(#glow)">
            <animate attributeName="opacity" values="0.9;0.5;0.9" dur="1.5s" repeatCount="indefinite" />
          </rect>

          {/* Tractor beam */}
          <path
            d="M35 32 L65 32 L75 60 L25 60 Z"
            fill="url(#beam)"
            opacity="0.4"
          />
          
          {/* Beam particles */}
          <circle cx="45" cy="40" r="1" fill="#93c5fd" opacity="0.6">
            <animate attributeName="cy" values="35;55;35" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="55" cy="45" r="1" fill="#dbeafe" opacity="0.6">
            <animate attributeName="cy" values="40;58;40" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="38" r="1" fill="#bfdbfe" opacity="0.6">
            <animate attributeName="cy" values="33;52;33" dur="2.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.8s" repeatCount="indefinite" />
          </circle>
        </svg>
      </motion.div>

      {/* Twinkling stars */}
      <div className="absolute right-8 top-8" aria-hidden>
        <motion.span
          className="absolute w-1 h-1 rounded-full bg-white/70"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
        <motion.span
          className="absolute w-1 h-1 rounded-full bg-white/60"
          style={{ transform: "translate(16px, 10px)" }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 0.4 }}
        />
        <motion.span
          className="absolute w-1 h-1 rounded-full bg-white/60"
          style={{ transform: "translate(32px, 4px)" }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: 0.8 }}
        />
      </div>

      {/* Comet passing by */}
      <motion.div
        className="absolute right-4 top-1/4 pointer-events-none"
        aria-hidden
        animate={{
          x: [100, -150],
          y: [0, 20, -10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
      >
        <svg width="50" height="20" viewBox="0 0 50 20" fill="none">
          <defs>
            <radialGradient id="cometHead">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#60a5fa" />
            </radialGradient>
            <linearGradient id="cometTail" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#93c5fd" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#60a5fa" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
            <filter id="cometGlow">
              <feGaussianBlur stdDeviation="1.5" />
            </filter>
          </defs>
          {/* Tail */}
          <ellipse cx="25" cy="10" rx="24" ry="3" fill="url(#cometTail)" opacity="0.6" />
          <ellipse cx="25" cy="10" rx="24" ry="1.5" fill="url(#cometTail)" opacity="0.8" />
          {/* Head glow */}
          <circle cx="4" cy="10" r="4" fill="url(#cometHead)" filter="url(#cometGlow)" opacity="0.6" />
          {/* Head core */}
          <circle cx="4" cy="10" r="2.5" fill="url(#cometHead)" />
          <circle cx="3" cy="9" r="1" fill="#ffffff" opacity="0.8" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  const sectionRef = useRef(null);

  // Scope scroll effects to this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.35,
  });

  // Parallax values
  const heroY = useTransform(smooth, [0, 1], [0, -80]);
  const heroOpacity = useTransform(smooth, [0, 0.25, 1], [1, 0.9, 0.6]);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-between overflow-hidden bg-transparent min-h-screen"
    >
      {/* twinkling starfield */}
      {stars.map((s, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            delay: s.delay,
          }}
        />
      ))}

      {/* Ambient animated blobs */}
      {/* Top-left blob */}
      <motion.div
        aria-hidden
        className="hidden sm:block pointer-events-none absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-60"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 15, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Top-right blob */}
      <motion.div
        aria-hidden
        className="hidden sm:block pointer-events-none absolute -top-20 -right-20 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-60"
        animate={{
          x: [0, -30, 10, 0],
          y: [0, 20, -10, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Bottom-right blob */}
      <motion.div
        aria-hidden
        className="hidden sm:block pointer-events-none absolute -top-50 -right-40 w-[38rem] h-[38rem] rounded-full blur-3xl opacity-60"
        animate={{
          x: [0, -20, 10, 0],
          y: [0, 20, -10, 0],
          scale: [1, 1.07, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 flex flex-col items-center w-full relative z-10 scroll-container"
      >
        {/* Hero row (MultipleText + Space animation) with parallax */}
        <motion.div
          className="w-full max-w-[1200px] min-h-screen lg:h-screen mb-8 sm:mb-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div className="flex-1">
            <MultipleText />
            
            {/* Skill Highlights */}
            <div className="mt-6 space-y-4">
              {/* Stack badges */}
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {[
                  "React",
                  "React Native",
                  "JavaScript",
                  "Tailwind CSS",
                  "NestJS",
                  "ExpressJS",
                  "Python",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            

            {/* Logo marquee */}
            <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex gap-8 animate-[marquee_18s_linear_infinite] whitespace-nowrap text-white/60 text-sm font-mono">
                {[
                  "react",
                  "react-native",
                  "javascript",
                  "python",
                  "tailwind",
                  "vite",
                  "nestjs",
                  "express",
                  "mongodb",
                  "mysql",
                  "java",
                ].map((k) => (
                  <span
                    key={k}
                    className="px-3 py-1 rounded border border-white/10 bg-white/[0.04]"
                  >
                    {k}
                  </span>
                ))}
                {[
                  "react",
                  "react-native",
                  "javascript",
                  "python",
                  "tailwind",
                  "vite",
                  "nestjs",
                  "express",
                  "mongodb",
                  "mysql",
                  "java",
                ].map((k) => (
                  <span
                    key={`${k}-2`}
                    className="px-3 py-1 rounded border border-white/10 bg-white/[0.04]"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>


            {/* Download CV Button */}
            <div className="flex justify-center mt-10">
              <a
                href="./cv.pdf"
                download="CV.pdf"
                className="group relative inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-[#2980B9] to-[#6DD5FA] text-white font-semibold rounded-xl hover:from-[#2980B9]/80 hover:to-[#6DD5FA]/80 transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 hover:-translate-y-1 border border-white/20 hover:border-white/40 overflow-hidden"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl" />
                
                {/* Download icon */}
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                
                {/* Button text */}
                <span className="relative z-10">Download CV</span>
                
                {/* Subtle pulse animation */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            </div>

            

            <style>{`
              @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            `}</style>
          </motion.div>
          <SpaceHero />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
