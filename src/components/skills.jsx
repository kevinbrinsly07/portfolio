import React, { useRef, useEffect } from "react";
import { LinearGradient } from "react-text-gradients";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";

const skills = [
  { name: "React", logo: "/react.png", level: 88 },
  { name: "Vite", logo: "/vite.png", level: 90 },
  { name: "React Native", logo: "/reactnative.png", level: 80 },
  { name: "NestJS", logo: "/nestjs.png", level: 70 },
  { name: "ExpressJS", logo: "/express.png", level: 82 },
  { name: "TailwindCSS", logo: "/tailwind.png", level: 90 },
  { name: "Java", logo: "/java.png", level: 88 },
  { name: "Python", logo: "/python.png", level: 83 },
  { name: "PHP", logo: "/php.png", level: 60 },
  { name: "JavaScript", logo: "/javascript.png", level: 90 },
  { name: "CSS", logo: "/css.png", level: 88 },
  { name: "HTML", logo: "/html.png", level: 90 },
  { name: "MySQL", logo: "/mysql.png", level: 80 },
  { name: "MongoDB", logo: "/mongodb.png", level: 67 },
];

const stars = Array.from({ length: 60 }, () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 2 + 1}px`,
  duration: Math.random() * 4 + 2,
  delay: Math.random() * 6,
}));

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { y: 18, opacity: 0, scale: 0.96 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 320, damping: 26 },
  },
};

const ghGreen = (lvl) => {
  // approximate GitHub contribution green shades
  if (lvl >= 85) return "#216e39";    // darkest
  if (lvl >= 70) return "#30a14e";
  if (lvl >= 55) return "#40c463";
  if (lvl >= 40) return "#9be9a8";
  return "#ebedf0"; // very light gray like empty cell
};

function SkillCard({ name, logo }) {
  const cardRef = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);

  const rotateX = useSpring(rx, { stiffness: 200, damping: 20, mass: 0.4 });
  const rotateY = useSpring(ry, { stiffness: 200, damping: 20, mass: 0.4 });

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rx.set((0.5 - py) * 12);
    ry.set((px - 0.5) * 14);
  };

  const handleLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      variants={item}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        // boxShadow: glow,
      }}
      className="group relative p-0 bg-transparent shadow-none transition-all duration-200 will-change-transform flex flex-col items-center"
    >

      <motion.img
        src={logo}
        alt={name}
        className="w-12 h-12 mb-3 drop-shadow"
        style={{ transform: "translateZ(22px)" }}
        whileHover={{ scale: 1.08, rotate: 2 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
      />

      <motion.h3
        className="text-lg sm:text-xl font-semibold text-white"
        style={{ transform: "translateZ(14px)" }}
        whileHover={{ y: -2 }}
      >
        {name}
      </motion.h3>

    </motion.div>
  );
}

function AnimatedNumber({ value }) {
  const mv = useMotionValue(0);
  const sv = useSpring(mv, { stiffness: 180, damping: 24 });
  const [display, setDisplay] = React.useState(0);

  useEffect(() => {
    const unsub = sv.on("change", (v) => setDisplay(Math.round(v)));
    return () => unsub();
  }, [sv]);

  useEffect(() => {
    mv.set(0);
    requestAnimationFrame(() => mv.set(value));
  }, [value, mv]);

  return <span>{display}</span>;
}

function GithubSkillsCard() {
  return (
    <motion.div
      className="mx-auto w-full max-w-4xl mt-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
    >
      <div className="rounded-xl border border-white/10 bg-black">
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
          <div className="flex items-center gap-2 text-white/90">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-80">
              <path d="M7 3h10a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.76.43L12 16l-6.24 2.93A.5.5 0 0 1 5 18.5V5a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
            </svg>
            <span className="font-mono">skills.md</span>
          </div>
          <span className="text-[11px] uppercase tracking-wider text-white/60">Public</span>
        </div>

        <div className="px-5 py-5">
          <motion.ul
            className="space-y-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {skills.map((s) => {
              const width = Math.max(0, Math.min(100, s.level || 0));
              const color = ghGreen(width);
              return (
                <motion.li variants={item} key={s.name} className="grid grid-cols-12 items-center gap-3">
                  <div className="col-span-12 sm:col-span-4 flex items-center gap-3">
                    <img src={s.logo} alt={s.name} className="w-6 h-6" />
                    <span className="text-white/90 text-sm sm:text-base">{s.name}</span>
                  </div>
                  <div className="col-span-9 sm:col-span-6">
                    <div className="relative h-2.5 w-full rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${width}%` }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ type: "spring", stiffness: 120, damping: 18 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      <motion.div
                        aria-hidden
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
                          backgroundSize: "200% 100%",
                        }}
                        animate={{ backgroundPositionX: ["0%", "100%"] }}
                        transition={{ duration: 2.2, ease: "easeInOut" }}
                      />
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-2 text-right">
                    <span className="font-mono text-white/70 text-sm"><AnimatedNumber value={width} />%</span>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
}

const Skills = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 20%"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.35 });

  const headY = useTransform(smooth, [0, 1], [10, -20]);
  const underlineScale = useTransform(smooth, [0, 1], [0.4, 1]);

  return (
    <section id="skills" className="relative overflow-hidden bg-transparent pt-40 pb-40">
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
            opacity: 0.8,
          }}
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.25, 1] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Ambient animated blob */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 w-[22rem] h-[22rem] rounded-full blur-3xl"
        animate={{ x: [0, -30, 10, 0], y: [0, 20, -10, 0], scale: [1, 1.05, 0.98, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-12 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-60"
        animate={{ x: [0, 25, -15, 0], y: [0, -20, 10, 0], scale: [1, 1.05, 0.98, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div ref={sectionRef} className="cursor-pointer container mx-auto px-6 text-center relative z-10 scroll-container">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-white font-mono inline-block"
          style={{ y: headY }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          <LinearGradient gradient={["to left", "#2980B9 ,#6DD5FA"]}>
            Technology Stack
          </LinearGradient>
          <motion.span
            aria-hidden
            className="block h-[3px] mt-3 origin-left bg-gradient-to-r from-[#2980B9] to-[#6DD5FA] rounded-full"
            style={{ scaleX: underlineScale }}
          />
        </motion.h2>

        <GithubSkillsCard />
      </div>
    </section>
  );
};

export default Skills;