import React, { useRef, useMemo, useEffect, useState } from "react";
import { LinearGradient } from "react-text-gradients";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
  useScroll,
  useTransform,
  useSpring,
  motionValue,
} from "framer-motion";

// --- Mini GitHub Repo helpers ---
const langFromTech = (stack = []) => {
  if (!stack || !stack.length) return { label: "Other", color: "#8b8b8b" };
  const t = stack[0].toLowerCase();
  if (t.includes("typescript")) return { label: "TypeScript", color: "#3178c6" };
  if (t.includes("javascript") || t.includes("react") || t.includes("express")) return { label: "JavaScript", color: "#f1e05a" };
  if (t.includes("python") || t.includes("flask") || t.includes("fastapi")) return { label: "Python", color: "#3572A5" };
  if (t.includes("php")) return { label: "PHP", color: "#4F5D95" };
  if (t.includes("java")) return { label: "Java", color: "#b07219" };
  if (t.includes("css") || t.includes("tailwind")) return { label: "CSS", color: "#563d7c" };
  if (t.includes("html")) return { label: "HTML", color: "#e34c26" };
  if (t.includes("mongodb")) return { label: "MongoDB", color: "#13aa52" };
  if (t.includes("sqlite")) return { label: "SQLite", color: "#0f80cc" };
  return { label: stack[0], color: "#8b8b8b" };
};

const parseRepoFromUrl = (url = "") => {
  try {
    const u = new URL(url);
    const parts = u.pathname.split("/").filter(Boolean);
    if (parts.length >= 2) return `${parts[0]}/${parts[1]}`;
  } catch { /* empty */ }
  return "repo";
};

function MiniRepoCard({ p }) {
  const { label, color } = langFromTech(p.techStack);
  const repo = parseRepoFromUrl(p.githubLink);

  return (
    <motion.a
      href={p.githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl border border-white/10 bg-[#0b0f17]/70 backdrop-blur-xl overflow-hidden"
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {/* top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#17acff] via-[#7ec8ff] to-[#ff68f0] opacity-80" />

      {/* header: repo path + public pill */}
      <div className="px-5 pt-5 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/90">
          {/* repo icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-80">
            <path d="M7 3h10a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.76.43L12 16l-6.24 2.93A.5.5 0 0 1 5 18.5V5a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
          </svg>
          <span className="font-mono text-lg group-hover:text-white">{repo}</span>
        </div>
        <span className="text-[10px] uppercase tracking-wider text-white/70 border border-white/15 rounded-full px-2 py-0.5">Public</span>
      </div>

      {/* description */}
      <p className="px-5 text-white/75 leading-relaxed">
        {p.description}
      </p>

      {/* footer: language dot, techs, action */}
      <div className="px-5 pb-5 pt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1 text-sm text-white/80">
            <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
            {label}
          </span>
          {/* condensed tech pill row */}
          <div className="hidden sm:flex flex-wrap gap-1 max-w-[280px]">
            {p.techStack.slice(0, 3).map((t, idx) => (
              <span key={t + idx} className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/80">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 text-white/80">
          {/* star icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-80">
            <path d="M12 3l2.7 5.47 6.05.88-4.38 4.27 1.03 6.01L12 16.9l-5.4 2.73 1.03-6.01L3.25 9.35l6.05-.88L12 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
          </svg>
          {/* fork icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-80">
            <path d="M7 5a2 2 0 1 1 0 4h0a2 2 0 1 1 0-4Zm10 10a2 2 0 1 1 0 4h0a2 2 0 1 1 0-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            <path d="M7 9v2a5 5 0 0 0 5 5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
          <span className="text-sm text-[#9bdcff] group-hover:text-[#17acff]">Open ↗</span>
        </div>
      </div>
    </motion.a>
  );
}

const projects = [
  {
    name: "Cinemax",
    description:
      "Developed a movie streaming app frontend using React Native, implementing movie detail pages and a responsive design for iOS and Android platforms, ensuring a seamless user experience.",
    techStack: ["ReactNative", "firebase"],
    githubLink: "https://github.com/kevinbrinsly07/Solo-Initiative-Cinemax",
  },
  {
    name: "SinNews",
    description:
      "Developed a Sinhala news summarizer using React for the frontend and Flask for the backend. Fine-tuned the mT5 model on a custom dataset for Sinhala news summarization and integrated it into the system. Utilized Python for data processing, implemented a responsive UI with Tailwind CSS, and ensured secure handling of news articles.",
    techStack: ["Python", "Flask", "React", "Tailwind"],
    githubLink: "https://github.com/kevinbrinsly07/siNews",
  },
  {
    name: "Hometeq",
    description:
      "Hometeq is a web application built using PHP, MySQL, HTML, and CSS, designed to manage e-commerce functionalities. The backend, powered by PHP, handles user authentication, session management, and database interactions, while MySQL stores product details, user accounts, and orders.",
    techStack: ["PHP", "HTML", "CSS"],
    githubLink: "https://github.com/kevinbrinsly07/Hometeq",
  },
  {
    name: "VehicleRentalSystem - admin",
    description:
      "The Vehicle Rental System Admin is a web-based application designed to manage the operations of a vehicle rental service. It provides administrators with tools to oversee vehicle inventory, customer bookings, payments, and user management.",
    techStack: ["Python", "FastAPI", "SQLite", "React", "Tailwindcss"],
    githubLink: "https://github.com/kevinbrinsly07/VehicleRentalSystem_admin",
  },
  {
    name: "pos-system",
    description:
      "A Point of Sale (POS) system is an all-in-one solution that allows businesses to efficiently manage sales, track inventory, process payments, and monitor customer activity in real time, providing features such as product and stock management with low-stock alerts, flexible payment options including cash, card, and discounts, detailed sales reports",
    techStack: ["PHP", "Laravel", "SQLite", "JavaScript", "React", "HTML", "CSS", "Tailwindcss"],
    githubLink: "https://github.com/kevinbrinsly07/pos-system",
  },
  {
    name: "LoginApplication",
    description:
      "Express.js app with session-based login, EJS templating, and clean routing.",
    techStack: ["ExpressJS"],
    githubLink: "https://github.com/kevinbrinsly07/LoginApplication",
  },
];




const Projects = () => {
  const sectionRef = useRef(null);
  const fieldRef = useRef(null);

  // responsive viewport + card width + star count
  const [viewportW, setViewportW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  useEffect(() => {
    const onResize = () => setViewportW(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  // mobile breakpoint helper
  const isMobile = viewportW < 640;

  // card width in px (narrower on small screens)
  const cardW = viewportW < 640 ? 280 : 320;

  // fewer stars on mobile for perf/clarity
  const starCount = viewportW < 640 ? 30 : 60;
  const stars = useMemo(() => Array.from({ length: starCount }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 1}px`,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 6,
  })), [starCount]);

  const CARD_W /* deprecated */ = undefined; // replaced by responsive cardW
  const cardEls = useRef([]);
  const heightsRef = useRef(projects.map(() => 240));

  // stable random positions/seeds for floating field

  // positions (MotionValues) and velocities for simple physics
  const bodies = useMemo(
    () => projects.map(() => ({ x: motionValue(0), y: motionValue(0) })),
    [projects.length]
  );
  const velsRef = useRef(projects.map(() => ({ vx: (Math.random()*2-1)*60, vy: (Math.random()*2-1)*60 })));
  const draggingRef = useRef(projects.map(() => false));

  // Initialize positions once based on the field size (skip on mobile)
  useEffect(() => {
    if (isMobile) return; // no floating init on mobile
    const el = fieldRef.current;
    const fw = el ? el.clientWidth : 900;
    const fh = el ? el.clientHeight : 700;
    bodies.forEach((b, i) => {
      const h = heightsRef.current[i] || 240;
      const x = Math.random() * Math.max(1, fw - cardW);
      const y = Math.random() * Math.max(1, fh - h);
      b.x.set(x);
      b.y.set(y);
    });
  }, [isMobile, bodies, fieldRef, cardW]);

  useEffect(() => {
    const observers = [];
    cardEls.current.forEach((el, i) => {
      if (!el) return;
      const ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          heightsRef.current[i] = entry.contentRect.height;
        }
      });
      ro.observe(el);
      observers.push(ro);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [projects.length]);

  // Physics animation loop (disabled on mobile)
  useEffect(() => {
    if (isMobile) return; // stop animation on mobile
    let raf;
    let last = performance.now();
    const step = (now) => {
      const el = fieldRef.current;
      if (!el) { raf = requestAnimationFrame(step); return; }
      const fw = el.clientWidth;
      const fh = el.clientHeight;
      const dt = Math.min(0.032, (now - last) / 1000);
      last = now;

      bodies.forEach((b, i) => {
        if (draggingRef.current[i]) return;
        const v = velsRef.current[i];
        const h = heightsRef.current[i] || 240;
        let x = b.x.get() + v.vx * dt;
        let y = b.y.get() + v.vy * dt;
        if (x <= 0) { x = 0; v.vx = Math.abs(v.vx); }
        if (x + cardW >= fw) { x = fw - cardW; v.vx = -Math.abs(v.vx); }
        if (y <= 0) { y = 0; v.vy = Math.abs(v.vy); }
        if (y + h >= fh) { y = fh - h; v.vy = -Math.abs(v.vy); }
        b.x.set(x);
        b.y.set(y);
      });

      for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
          if (draggingRef.current[i] || draggingRef.current[j]) continue;
          const bi = bodies[i], bj = bodies[j];
          const xi = bi.x.get(), yi = bi.y.get();
          const xj = bj.x.get(), yj = bj.y.get();
          const hi = heightsRef.current[i] || 240;
          const hj = heightsRef.current[j] || 240;
          if (xi < xj + cardW && xi + cardW > xj && yi < yj + hj && yi + hi > yj) {
            const overlapX = Math.min(xi + cardW - xj, xj + cardW - xi);
            const overlapY = Math.min(yi + hi - yj, yj + hj - yi);
            const vi = velsRef.current[i];
            const vj = velsRef.current[j];
            if (overlapX < overlapY) {
              if (xi < xj) { bi.x.set(xi - overlapX/2); bj.x.set(xj + overlapX/2); }
              else { bi.x.set(xi + overlapX/2); bj.x.set(xj - overlapX/2); }
              const tmp = vi.vx; vi.vx = vj.vx * 0.95; vj.vx = tmp * 0.95;
            } else {
              if (yi < yj) { bi.y.set(yi - overlapY/2); bj.y.set(yj + overlapY/2); }
              else { bi.y.set(yi + overlapY/2); bj.y.set(yj - overlapY/2); }
              const tmp = vi.vy; vi.vy = vj.vy * 0.95; vj.vy = tmp * 0.95;
            }
          }
        }
      }

      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isMobile, bodies, fieldRef, cardW]);

  // Scroll progress for heading underline & subtle parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 20%"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.35,
  });
  const headY = useTransform(smooth, [0, 1], [10, -20]);
  const underlineScale = useTransform(smooth, [0, 1], [0.4, 1]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-black via-[#0a0a0f] to-black py-24"
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

      {/* ambient animated blobs */}
      <motion.div
        aria-hidden
        className="hidden sm:block pointer-events-none absolute -top-8 -left-24 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-60"
        animate={{
          x: [0, 25, -15, 0],
          y: [0, -20, 10, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(closest-side, rgba(23,172,255,0.18), rgba(255,104,240,0.12), transparent)",
        }}
      />
      <motion.div
        aria-hidden
        className="hidden sm:block pointer-events-none absolute -bottom-24 -right-24 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-60"
        animate={{
          x: [0, -20, 10, 0],
          y: [0, 18, -8, 0],
          scale: [1, 1.07, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,104,240,0.18), rgba(23,172,255,0.12), transparent)",
        }}
      />

      <div
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 text-center relative z-10"
      >
        {/* heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-10 font-mono inline-block"
          style={{ y: headY }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
            Projects
          </LinearGradient>
          <motion.span
            aria-hidden
            className="block h-[3px] mt-3 origin-left bg-gradient-to-r from-[#17acff] to-[#ff68f0] rounded-full"
            style={{ scaleX: underlineScale }}
          />
        </motion.h2>

        {/* list layout on mobile; floating field on larger screens */}
        {isMobile ? (
          <div className="mt-6 space-y-4">
            {projects.map((p) => (
              <div key={`stack-${p.name}`} className="mx-auto max-w-[420px]">
                <MiniRepoCard p={p} />
              </div>
            ))}
          </div>
        ) : (
          <div ref={fieldRef} className="relative mt-8 h-[560px] sm:h-[720px] md:h-[820px]">
            {/* subtle space dust */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
              {Array.from({ length: 40 }).map((_, i) => (
                <motion.span
                  key={`dust-${i}`}
                  className="absolute w-1 h-1 rounded-full bg-white/30"
                  style={{
                    left: `${(i * 37) % 100}%`,
                    top: `${(i * 53) % 100}%`,
                    opacity: 0.4,
                  }}
                  animate={{ opacity: [0.15, 0.6, 0.15] }}
                  transition={{ duration: 4 + (i % 5), repeat: Infinity, ease: "easeInOut", delay: (i % 7) * 0.2 }}
                />
              ))}
            </div>

            {projects.map((p, i) => (
              <motion.div
                key={`float-${p.name}`}
                className="absolute cursor-grab active:cursor-grabbing select-none"
                style={{ width: cardW, x: bodies[i].x, y: bodies[i].y }}
                drag
                dragConstraints={fieldRef}
                dragElastic={0.12}
                dragMomentum={true}
                onDragStart={() => { draggingRef.current[i] = true; velsRef.current[i].vx = 0; velsRef.current[i].vy = 0; }}
                onDragEnd={(_e, info) => {
                  draggingRef.current[i] = false;
                  velsRef.current[i].vx = (info.velocity.x || 0) * 0.02;
                  velsRef.current[i].vy = (info.velocity.y || 0) * 0.02;
                }}
                whileHover={{ scale: 1.03 }}
              >
                <div ref={(el) => (cardEls.current[i] = el)} className="w-full">
                  <MiniRepoCard p={p} i={i} />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;