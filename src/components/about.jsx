import React, { useRef } from "react";
import Ani from "./ani";
import { LinearGradient } from "react-text-gradients";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const stars = Array.from({ length: 60 }, () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 2 + 1}px`,
  duration: Math.random() * 4 + 2,
  delay: Math.random() * 6,
}));

const container = {
  hidden: { opacity: 0 },
  show: (d = 0) => ({
    opacity: 1,
    transition: { delay: d, staggerChildren: 0.04, when: "beforeChildren" },
  }),
};

const ghPanel = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 30, staggerChildren: 0.04, when: "beforeChildren" },
  },
};

const ghLine = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 500, damping: 35 } },
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

      {/* Content */}
      <motion.div
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 flex flex-col items-center w-full relative z-10 scroll-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        custom={0.05}
      >
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
              <LinearGradient gradient={["to left", "#2980B9 ,#6DD5FA"]}>About Me</LinearGradient>
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
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              >
                As a <span className="text-yellow-300">software engineer</span> with a strong foundation in full-stack development, I specialize in building <span className="text-yellow-300">dynamic, scalable applications</span> across web and mobile platforms. I craft intuitive frontends with <span className="text-yellow-300">React & React Native</span>, design robust backend systems using <span className="text-yellow-300">NestJS</span> and <span className="text-yellow-300">Express</span>, and have hands-on experience with <span className="text-yellow-300">PHP</span>, <span className="text-yellow-300">Java</span>, and <span className="text-yellow-300">Python</span>.
              </motion.p>
              <motion.p
                className="text-white/85 font-mono text-[16px] leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ type: "spring", stiffness: 500, damping: 35, delay: 0.03 }}
              >
                I work extensively with <span className="text-yellow-300">MySQL</span> and <span className="text-yellow-300">MongoDB</span> for data management, and leverage modern tools like <span className="text-yellow-300">Tailwind CSS</span> and <span className="text-yellow-300">Vite</span> to deliver high-performance user experiences. I'm passionate about clean code, innovative solutions, and building applications that make a real impact.
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