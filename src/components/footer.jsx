import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 280, damping: 24 },
  },
};

const Footer = () => {
  return (
    <footer
      className="relative bg-transparent text-white py-10 px-4 font-mono overflow-hidden"
    >
      {/* Ambient blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-40"
        animate={{ x: [0, 20, -15, 0], y: [0, -15, 10, 0], scale: [1, 1.05, 0.95, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-40"
        animate={{ x: [0, -20, 15, 0], y: [0, 15, -10, 0], scale: [1, 1.07, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-end p-6 z-10">
        {/* Left Side */}
        <motion.div
          className="text-left mb-6 sm:mb-0"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#2980B9] via-[#17acff] to-[#6DD5FA] bg-clip-text text-transparent">BRINSLY</h2>
          <p className="text-sm">&copy; 2025 BRINSLY | All Rights Reserved</p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="flex flex-col sm:flex-row gap-12 text-left sm:text-right"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-2">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/" className="hover:text-[#17acff] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#17acff] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#17acff] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#17acff] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-medium mb-2">Contact Us</h3>
            <p className="text-sm">Email: brinslykevin@gmail.com</p>
            <p className="text-sm">Phone: +94 72 081 5252</p>
            <p className="text-sm">Address: Marawila, Sri Lanka</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <motion.div
        className="mt-6 pt-4 text-center text-xs relative z-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p>Designed & Developed by <span className="bg-gradient-to-r from-[#2980B9] to-[#6DD5FA] bg-clip-text text-transparent">Kevin Brinsly</span></p>
      </motion.div>
    </footer>
  );
};

export default Footer;