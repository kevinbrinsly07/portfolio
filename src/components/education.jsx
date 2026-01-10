import React from "react";
import { LinearGradient } from "react-text-gradients";
import { motion } from "framer-motion";

const stars = Array.from({ length: 40 }, () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 2 + 1}px`,
  duration: Math.random() * 4 + 2,
  delay: Math.random() * 6,
}));

const Education = () => {
  const education = [
    {
      degree: "BEng (Hons) Software Engineering",
      institution: "Informatics Institute of Technology",
      affiliation: "Affiliated with University of Westminster, UK",
      icon: "graduation",
      highlights: [
        "Specialized in full-stack software development",
        "Gained expertise in mobile and web application development",
        "Studied advanced software engineering principles and practices",
      ],
    },
    {
      degree: "G.C.E. Advanced Level",
      institution: "St. Joseph Vaz College, Wennappuwa",
      affiliation: "",
      icon: "school",
      highlights: [],
    },
  ];

  return (
    <section
      id="education"
      className="relative flex flex-col items-center justify-between overflow-hidden bg-transparent py-24 sm:py-32"
    >
      {/* twinkling starfield */}
      {stars.map((s, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
          }}
        />
      ))}

      {/* Ambient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-50"
      />

      {/* Content */}
      <div
        className="container mx-auto px-4 sm:px-6 relative z-10 scroll-container"
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center font-mono"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <LinearGradient gradient={["to left", "#2980B9 ,#6DD5FA"]}>
            Education
          </LinearGradient>
          <span
            aria-hidden
            className="block h-[3px] mt-3 mx-auto w-32 bg-gradient-to-r from-[#2980B9] to-[#6DD5FA] rounded-full"
          />
        </motion.h2>

        {/* Education cards */}
        <div className="max-w-4xl mx-auto flex flex-col justify-center items-center">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative mb-8 last:mb-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* GitHub-styled card */}
              <div
                className="h-full overflow-hidden rounded-xl border border-white/10 bg-[#0b0f17]/70 backdrop-blur hover:border-white/20 transition-all duration-300"
              >
                {/* Header with icon */}
                <div className="px-5 pt-6 pb-4">
                  <div className="flex flex-col items-center gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 flex items-center justify-center">
                      {edu.icon === "graduation" ? (
                        <motion.svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-white"
                        >
                          <path
                            d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z"
                            fill="currentColor"
                          />
                          <path
                            d="M12 14.5l-4.5-2.45V9.27L12 11.73l4.5-2.46v2.78L12 14.5z"
                            fill="currentColor"
                            opacity="0.7"
                          />
                        </motion.svg>
                      ) : (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-white"
                        >
                          <path
                            d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
                            fill="currentColor"
                          />
                        </svg>
                      )}
                    </div>
                    <h3
                      className="text-lg font-bold text-white font-mono leading-tight"
                    >
                      {edu.degree}
                    </h3>
                    <p
                      className="text-[#17acff] font-mono text-sm mt-1"
                    >
                      {edu.institution}
                    </p>
                    {edu.affiliation && (
                      <p
                        className="text-white/60 font-mono text-xs mt-1"
                      >
                        {edu.affiliation}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
