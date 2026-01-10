import React from "react";
import AniTwo from "./aniTwo";
import { LinearGradient } from "react-text-gradients";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const insta = "/insta.png";
const facebook = "/facebook.png";
const x = "/x.png";
const linkedin = "/linkedin.png";


// GitHub-ish panel & line variants
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

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-transparent py-24 sm:py-32 lg:py-40 text-center overflow-hidden"
    >
      {/* Starfield */}
      {Array.from({ length: 70 }).map((_, i) => (
        <motion.span
          key={`star-${i}`}
          className="absolute rounded-full bg-white/80"
          style={{
            top: `${(i * 53) % 100}%`,
            left: `${(i * 37) % 100}%`,
            width: i % 3 === 0 ? 2 : 1,
            height: i % 3 === 0 ? 2 : 1,
            opacity: 0.7,
          }}
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.25, 1] }}
          transition={{ duration: 3.5 + (i % 5) * 0.4, repeat: Infinity, ease: "easeInOut", delay: (i % 7) * 0.2 }}
        />
      ))}

      {/* Nebula glows */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-45"
        animate={{ x: [0, 20, -15, 0], y: [0, -15, 10, 0], scale: [1, 1.05, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-45"
        animate={{ x: [0, -20, 15, 0], y: [0, 15, -10, 0], scale: [1, 1.08, 0.97, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        className="container mx-auto px-6 relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* GitHub-styled header bar */}
        <div className="relative mx-auto w-full max-w-3xl">
          {/* top accent */}
          <motion.div
            aria-hidden
            className="absolute -top-1 left-0 right-0 h-[2px]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          />
          {/* panel */}
          <motion.div
            className="text-left w-full rounded-xl border border-white/10 bg-black"
            variants={ghPanel}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            {/* panel header (GitHub file bar vibe) */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
              <div className="flex items-center gap-2 text-white/80">
                <span className="inline-flex gap-1">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </span>
                <span className="font-mono text-sm">contact/ISSUE_NEW.md</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider text-white/60 border border-white/15 rounded-full px-2 py-0.5">
                  main
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#9bdcff]">Public</span>
              </div>
            </div>

            {/* body */}
            <div className="px-5 py-6">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-white font-mono inline-flex items-center gap-2"
                variants={ghLine}
              >
                <LinearGradient gradient={["to left", "#2980B9 ,#6DD5FA"]}>
                  Contact Me
                </LinearGradient>
                <motion.span
                  aria-hidden
                  className="h-6 w-1 bg-white/90"
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 0.9, repeat: Infinity }}
                />
              </motion.h2>

              <motion.p
                className="text-[15px] sm:text-[16px] mt-3 mb-5 text-white/85 font-mono leading-relaxed"
                variants={ghLine}
              >
                Open a conversation — or just say hi. For collaboration, roles, or questions,
                ping me via email or any of the links below.
              </motion.p>

              {/* GitHub-like action row */}
              <motion.div className="flex flex-wrap items-center gap-3" variants={ghLine}>
                <motion.a
                  href="mailto:brinslykevin@gmail.com"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white/90 font-mono text-sm"
                >
                  {/* envelope icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" fill="none" />
                  </svg>
                  Email Me
                </motion.a>

                <motion.a
                  href="https://github.com/kevinbrinsly07"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white/90 font-mono text-sm"
                >
                  {/* star icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3l2.7 5.47 6.05.88-4.38 4.27 1.03 6.01L12 16.9l-5.4 2.73 1.03-6.01L3.25 9.35l6.05-.88L12 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                  </svg>
                  Star my GitHub
                </motion.a>
              </motion.div>

              {/* Socials like repo badges */}
              <motion.ul
                className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3"
                variants={ghLine}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                {[
                  { href: "https://web.facebook.com/kevin.paris.922", icon: facebook, label: "Facebook" },
                  { href: "https://twitter.com/kevin_brinsly", icon: x, label: "X" },
                  { href: "https://www.instagram.com/kevinbrinsly/", icon: insta, label: "Instagram" },
                  { href: "https://www.linkedin.com/in/kevin-brinsly-se/", icon: linkedin, label: "LinkedIn" },
                ].map((s) => (
                  <motion.li key={s.label} className="list-none">
                    <motion.a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white/90"
                    >
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-white/10">
                        <img src={s.icon} alt={s.label} className="w-5 h-5" />
                      </span>
                      <span className="font-mono text-sm group-hover:text-white">{s.label}</span>
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ORBITING AniTwo — flies around content */}
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          ["--r"]: "clamp(120px, 22vw, 260px)",
        }}
      >
        {/* Outer ring rotates (clockwise) */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 22 }}
        >
          <div style={{ transform: "translateX(var(--r))" }}>
            {/* Counter-rotate to keep AniTwo upright */}
            <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, ease: "linear", duration: 22 }}>
              <div className="pointer-events-auto scale-75">
                <AniTwo />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;