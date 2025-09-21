import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 8, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 400, damping: 24 } }
};

const drawerVariants = {
  hidden: { height: 0, opacity: 0 },
  show: { height: "auto", opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.05 } },
  exit:  { height: 0, opacity: 0, transition: { when: "afterChildren", duration: 0.2 } }
};

// --- Starfield behind the navbar (matches hero vibe) ---
function Stars({ density = 80, speed = 24 }) {
  const width = 1600; // logical viewBox width
  const height = 200; // navbar height area
  const stars = React.useMemo(
    () => Array.from({ length: density }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.4 + 0.3,
      d: Math.random() * 2 + 1,
      delay: Math.random() * 2
    })),
    [density]
  );

  return (
    <motion.svg
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      animate={{ x: [0, 12, -8, 0], y: [0, -6, 4, 0] }}
      transition={{ duration: speed, repeat: Infinity, ease: "easeInOut" }}
    >
      {stars.map((s, i) => (
        <circle
          key={i}
          cx={s.x}
          cy={s.y}
          r={s.r}
          fill="white"
          opacity={0.85}
          style={{ animation: `twinkle ${1.6 + s.d}s ease-in-out ${s.delay}s infinite` }}
        />
      ))}
    </motion.svg>
  );
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // Shadow strengthens with scroll
  const { scrollY } = useScroll();
  const boxShadow = useTransform(
    scrollY,
    [0, 120],
    ["0 6px 24px rgba(0,0,0,0.15)", "0 6px 24px rgba(0,0,0,0.35)"]
  );

  const [showMiniNav, setShowMiniNav] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setShowMiniNav(y > 240);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sections = ["About", "Skills", "Projects", "Contact"];

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }}
      style={{ boxShadow }}
      className="fixed w-full py-3 z-30 "
    >
      {/* Starfield (behind all, matches hero) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* subtle parallax: two layers */}
        <Stars density={70} speed={28} />
        <Stars density={40} speed={36} />
      </div>

      {/* Twinkle keyframes for stars */}
      <style>{`
        @keyframes twinkle { 0%, 100% { opacity: 0.35; } 50% { opacity: 1; } }
      `}</style>

      {/* Background layer: glass + gradient blobs */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      {/* Ambient blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-40"
        animate={{ x: [0, 20, -10, 0], y: [0, -12, 8, 0], scale: [1, 1.04, 0.98, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(closest-side, rgba(23,172,255,0.18), rgba(255,104,240,0.12), transparent)"
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -right-24 w-[26rem] h-[26rem] rounded-full blur-3xl opacity-35"
        animate={{ x: [0, -18, 10, 0], y: [0, 10, -8, 0], scale: [1, 1.06, 0.96, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,104,240,0.16), rgba(23,172,255,0.1), transparent)"
        }}
      />

      {/* Content */}
      <nav className="relative text-white font-[600] poppins cursor-pointer w-full px-6 sm:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="text-xl font-bold font-mono"
        >
          BRINSLY
        </motion.h1>

        {/* Desktop Menu */}
        <motion.ul
          className="hidden sm:flex space-x-6 flex-grow justify-center"
          variants={listVariants}
          initial="hidden"
          animate="show"
        >
          {sections.map((section) => (
            <motion.li key={section} variants={itemVariants} className="relative group">
              <Link
                to={section.toLowerCase()}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80} // adjust for fixed header height
                activeClass="text-[#17acff]"
                className="text-lg hover:text-[#17acff] cursor-pointer transition-colors"
              >
                {section}
              </Link>
              {/* underline on hover (and can be extended to active via CSS if desired) */}
              <span className="pointer-events-none block h-[2px] mt-1 bg-gradient-to-r from-[#17acff] to-[#ff68f0] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.li>
          ))}
        </motion.ul>

        {/* GitHub and LinkedIn Icons */}
        <div className="flex items-center justify-center rounded-xl gap-3">
          <motion.a
            href="https://github.com/kevinbrinsly07"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="p-1 rounded-lg hover:bg-white/5"
          >
            <img src="/github.png" alt="GitHub" className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/kevin-brinsly-se/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-1 rounded-lg hover:bg-white/5"
          >
            <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
          </motion.a>

          {/* Mobile Menu Icon */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden text-white focus:outline-none ml-2"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <motion.svg
              key={isMobileMenuOpen ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-drawer"
            className="sm:hidden text-white px-6 pb-6 backdrop-blur-md bg-black/70 border-t border-white/10"
            variants={drawerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <motion.ul variants={listVariants} initial="hidden" animate="show" className="space-y-4 pt-4">
              {sections.map((section) => (
                <motion.li key={section} variants={itemVariants}>
                  <Link
                    to={section.toLowerCase()}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    className="block text-lg hover:text-[#17acff] cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {section}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Mini Navbar (appears on scroll) */}
      <AnimatePresence>
        {showMiniNav && !isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed right-4 bottom-6 sm:right-6 sm:bottom-8 z-[60]"
          >
            <div className="backdrop-blur-md bg-black/70 border border-white/10 shadow-lg rounded-full px-2 py-2 flex items-center gap-1 sm:gap-2">
              {sections.map((section) => (
                <motion.div key={`mini-${section}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to={section.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full text-sm font-semibold text-white hover:text-[#17acff] focus:outline-none focus:ring-2 focus:ring-[#17acff]/60 transition-colors"
                  >
                    {section[0]}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;