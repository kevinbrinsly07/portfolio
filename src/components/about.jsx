import React, { useRef } from "react";
import Ani from "./ani";
import MultipleText from "./multipleText";
import { LinearGradient } from "react-text-gradients";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: (d = 0) => ({
    opacity: 1,
    transition: { delay: d, staggerChildren: 0.08, when: "beforeChildren" },
  }),
};

const fadeUp = {
  hidden: { y: 16, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const ghPanel = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 22, staggerChildren: 0.08, when: "beforeChildren" },
  },
};

const ghLine = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

const SpaceHero = () => {
  return (
    <motion.div
      className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[520px] aspect-[4/5] lg:aspect-square mx-auto"
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

      {/* small orbiting moons */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
      >
        <div className="absolute w-4 h-4 rounded-full bg-[#17acff] shadow-[0_0_18px_rgba(23,172,255,0.8)]" style={{ transform: "translateX(10rem)" }} />
      </motion.div>
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
      >
        <div className="absolute w-3 h-3 rounded-full bg-[#ff68f0] shadow-[0_0_18px_rgba(255,104,240,0.8)]" style={{ transform: "translateX(7rem)" }} />
      </motion.div>

      {/* comet / shooting star */}
      <motion.span
        className="absolute w-24 h-[2px] bg-gradient-to-r from-white to-transparent opacity-0"
        style={{ top: "22%", left: "-25%" }}
        animate={{ x: ["-25%", "125%"], y: ["22%", "-10%"], opacity: [0, 1, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute w-28 h-[2px] bg-gradient-to-r from-white to-transparent opacity-0"
        style={{ bottom: "18%", left: "-30%" }}
        animate={{ x: ["-30%", "130%"], y: ["0%", "12%"], opacity: [0, 1, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, repeatDelay: 3.2, ease: "easeInOut", delay: 1.2 }}
      />

      {/* floating satellites */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-white/20 border border-white/20"
        style={{ top: "8%", left: "12%" }}
        animate={{ y: [0, -6, 0, 6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-8 h-8 rounded-full bg-white/10 border border-white/20"
        style={{ bottom: "12%", right: "8%" }}
        animate={{ y: [0, 6, 0, -6, 0] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
      />
      

      {/* RIGHT-SIDE SPACE CLUSTER */}
      {/* Nebula glow */}
      {/* Mini satellite */}
      <motion.div
        className="absolute right-24 top-20 scale-90 md:scale-100"
        aria-hidden
        animate={{ y: [0, -6, 0, 6, 0], rotate: [0, 2, -1, 2, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="54" height="34" viewBox="0 0 54 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="22" y="12" width="10" height="10" rx="2" fill="#cbd5e1" stroke="rgba(255,255,255,0.6)"/>
          <rect x="2" y="10" width="18" height="14" rx="2" fill="#111827" stroke="#94a3b8"/>
          <rect x="34" y="10" width="18" height="14" rx="2" fill="#111827" stroke="#94a3b8"/>
          <rect x="6" y="12" width="10" height="2" fill="#22d3ee"/>
          <rect x="6" y="16" width="10" height="2" fill="#22d3ee"/>
          <rect x="6" y="20" width="10" height="2" fill="#22d3ee"/>
          <rect x="38" y="12" width="10" height="2" fill="#a78bfa"/>
          <rect x="38" y="16" width="10" height="2" fill="#a78bfa"/>
          <rect x="38" y="20" width="10" height="2" fill="#a78bfa"/>
          <circle cx="27" cy="17" r="2" fill="#0ea5e9"/>
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
        <svg width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="40" cy="20" rx="28" ry="10" fill="#94a3b8" opacity="0.8"/>
          <ellipse cx="40" cy="18" rx="14" ry="8" fill="#cbd5e1"/>
          <rect x="28" y="27" width="24" height="3" rx="1.5" fill="#60a5fa"/>
          {/* beam */}
          <path d="M30 30 L50 30 L60 48 L20 48 Z" fill="url(#beam)" opacity="0.25"/>
          <defs>
            <linearGradient id="beam" x1="40" y1="30" x2="40" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#93c5fd" stopOpacity="0.6"/>
              <stop offset="1" stopColor="#93c5fd" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Asteroid cluster */}
      <motion.div
        className="hidden sm:block absolute right-16 top-1/3"
        aria-hidden
        animate={{ x: [0, -6, 0, 6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="absolute w-2 h-2 rounded-full bg-white/30" style={{ transform: "translate(0px, 0px)" }} />
        <span className="absolute w-3 h-3 rounded-full bg-white/40" style={{ transform: "translate(14px, 8px)" }} />
        <span className="absolute w-1.5 h-1.5 rounded-full bg-white/30" style={{ transform: "translate(-10px, 16px)" }} />
        <span className="absolute w-2 h-2 rounded-full bg-white/30" style={{ transform: "translate(6px, 22px)" }} />
      </motion.div>

      {/* Twinkling stars */}
      <div className="absolute right-8 top-8" aria-hidden>
        <motion.span className="absolute w-1 h-1 rounded-full bg-white/70" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2.2, repeat: Infinity }} />
        <motion.span className="absolute w-1 h-1 rounded-full bg-white/60" style={{ transform: "translate(16px, 10px)" }} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.4 }} />
        <motion.span className="absolute w-1 h-1 rounded-full bg-white/60" style={{ transform: "translate(32px, 4px)" }} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2.4, repeat: Infinity, delay: 0.8 }} />
      </div>
    </motion.div>
  );
};

const About = () => {
  const sectionRef = useRef(null);

  // Scope scroll effects to this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.35 });

  // Parallax values
  const heroY = useTransform(smooth, [0, 1], [0, -80]);
  const heroOpacity = useTransform(smooth, [0, 0.25, 1], [1, 0.9, 0.6]);
  const headingY = useTransform(smooth, [0, 1], [8, -16]);
  const copyOpacity = useTransform(smooth, [0, 0.2, 1], [0.95, 1, 0.85]);
  const aniY = useTransform(smooth, [0, 1], [20, -40]);
  const aniScale = useTransform(smooth, [0, 1], [1, 1.06]);
  const aniRotate = useTransform(smooth, [0, 1], [0, -2]);

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-between overflow-hidden bg-transparent"
    >

      {/* Ambient animated blobs */}
      {/* Top-left blob */}
      <motion.div
        aria-hidden
        className="hidden sm:block pointer-events-none absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-60"
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0], scale: [1, 1.05, 0.98, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(closest-side, rgba(23,172,255,0.2), rgba(255,104,240,0.12), transparent)",
        }}
      />
      {/* Top-right blob (your snippet) */}
      <motion.div
        aria-hidden
        className="hidden sm:block pointer-events-none absolute -top-20 -right-20 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-60"
        animate={{ x: [0, -30, 10, 0], y: [0, 20, -10, 0], scale: [1, 1.05, 0.98, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(closest-side, rgba(23,172,255,0.18), rgba(255,104,240,0.12), transparent)",
        }}
      />
      {/* Bottom-right blob */}
      <motion.div
        aria-hidden
        className="hidden sm:block pointer-events-none absolute -top-50 -right-40 w-[38rem] h-[38rem] rounded-full blur-3xl opacity-60"
        animate={{ x: [0, -20, 10, 0], y: [0, 20, -10, 0], scale: [1, 1.07, 0.95, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,104,240,0.2), rgba(23,172,255,0.12), transparent)",
        }}
      />

      {/* Content */}
      <motion.div
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 flex flex-col items-center w-full relative z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        custom={0.05}
      >
        {/* Hero row (MultipleText + Space animation) with parallax */}
        <motion.div
          className="w-full min-h-[70vh] lg:h-screen mb-8 sm:mb-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8"
          variants={fadeUp}
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div className="flex-1" variants={fadeUp}>
            <MultipleText />
            {/* Skill Highlights */}
            <div className="mt-6 space-y-4">
              {/* Stack badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'React','Next.js','TypeScript','Tailwind CSS','Framer Motion','Vite','Redux']
                  .map((tech) => (
                    <span key={tech} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                      {tech}
                    </span>
                  ))}
              </div>

              {/* Quick stats */}
              {/* <div className="grid grid-cols-3 gap-3 pt-3 text-center">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-2xl font-bold text-white">95+</p>
                  <p className="text-[11px] text-white/70">Lighthouse perf</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-2xl font-bold text-white"><span className="align-top text-xs">&lt;</span>100ms</p>
                  <p className="text-[11px] text-white/70">TTI on key views</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-2xl font-bold text-white">0 CLS</p>
                  <p className="text-[11px] text-white/70">No layout shift</p>
                </div>
              </div> */}
            </div>

            {/* Logo marquee */}
            <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex gap-8 animate-[marquee_18s_linear_infinite] whitespace-nowrap text-white/60 text-sm font-mono">
                {['react','next','vue','ts','tailwind','vite','fmotion','jest','playwright','storybook','redux'].map((k) => (
                  <span key={k} className="px-3 py-1 rounded border border-white/10 bg-white/[0.04]">{k}</span>
                ))}
                {['react','next','vue','ts','tailwind','vite','fmotion','jest','playwright','storybook','redux'].map((k) => (
                  <span key={`${k}-2`} className="px-3 py-1 rounded border border-white/10 bg-white/[0.04]">{k}</span>
                ))}
              </div>
            </div>
            <style>{`
              @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            `}</style>
          </motion.div>
          <SpaceHero />
        </motion.div>

        {/* GitHub-inspired panel (not identical to repo card) */}
        <motion.div
          className="text-left w-full max-w-3xl mx-auto rounded-xl border border-white/10 bg-[#0b0f17]/70 backdrop-blur"
          variants={ghPanel}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          style={{ opacity: copyOpacity }}
        >
          {/* panel header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
            <div className="flex items-center gap-2 text-white/80">
              <span className="inline-flex gap-1">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </span>
              <span className="font-mono text-sm">about/README.md</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-wider text-white/60 border border-white/15 rounded-full px-2 py-0.5">main</span>
              <span className="text-[10px] uppercase tracking-wider text-[#9bdcff]">Public</span>
            </div>
          </div>

          {/* content */}
          <div className="px-5 py-5">
            {/* Title with caret */}
            <motion.h2 className="text-3xl sm:text-4xl font-bold text-white font-mono inline-flex items-center gap-2" variants={ghLine} style={{ y: headingY }}>
              <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>About Me</LinearGradient>
              <motion.span
                aria-hidden
                className="h-6 w-1 bg-white/90"
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 0.9, repeat: Infinity }}
              />
            </motion.h2>

            {/* meta badges */}
            <motion.div className="mt-3 mb-6 flex flex-wrap items-center gap-2" variants={ghLine}>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/80">full‑stack</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/80">open‑source</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/80">react‑native</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/80">backend</span>
            </motion.div>

            {/* Body copy with left commit line and shimmer on hover */}
            <motion.div className="relative pl-5" variants={ghLine}>
              <span aria-hidden className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-gradient-to-b from-[#17acff] to-[#ff68f0]" />
              <motion.p
                className="text-white/90 font-mono text-[17px] leading-relaxed mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                As a software engineer, I build <span className="text-yellow-300">dynamic, efficient</span> web apps across the stack. On the frontend I ship with <span className="text-yellow-300">React & React Native</span>; on the backend I design APIs with <span className="text-yellow-300">NestJS</span> and <span className="text-yellow-300">Express</span>, and I’m comfortable in <span className="text-yellow-300">PHP</span> and <span className="text-yellow-300">Java</span> when the job calls for it.
              </motion.p>
              <motion.p
                className="text-white/85 font-mono text-[16px] leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24, delay: 0.06 }}
              >
                I work with <span className="text-yellow-300">MySQL</span> and <span className="text-yellow-300">MongoDB</span>, and code daily in <span className="text-yellow-300">JavaScript</span> and <span className="text-yellow-300">Python</span>. I love clean abstractions, pragmatic trade‑offs, and shipping features that matter.
              </motion.p>
              {/* shimmer overlay */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-lg"
                style={{ backgroundImage: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)", backgroundSize: "200% 100%" }}
                animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* CTA line styled like a commit message */}
            <motion.div className="mt-6 flex items-center gap-3 text-white/80 font-mono" variants={ghLine}>
              <span className="inline-flex items-center gap-1 text-[12px] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v18m6-6H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                open to roles
              </span>
              <span className="text-[12px] opacity-75">— let’s build something great together.</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated component below */}
      <motion.div
        style={{
          width: "30%",
          height: "30%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          y: aniY,
          scale: aniScale,
          rotate: aniRotate,
        }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 250, damping: 22 }}
        whileHover={{ y: -4, scale: 1.02 }}
        className="relative z-10"
      >
        <Ani />
      </motion.div>
    </section>
  );
};

export default About;