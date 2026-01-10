import React from "react";
import { LinearGradient } from "react-text-gradients";
import { motion } from "framer-motion";

const stars = Array.from({ length: 50 }, () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 2 + 1}px`,
  duration: Math.random() * 4 + 2,
  delay: Math.random() * 6,
}));

const Experience = () => {
  const experiences = [
    {
      role: "Associate Full Stack Developer",
      company: "JAAN Network (PVT) LTD",
      period: "Oct 2025 - Present",
      duration: "4 mos",
      type: "Full-time",
      location: "Colombo, Western Province, Sri Lanka · On-site",
      responsibilities: [
        "Leading full-stack development initiatives for enterprise-level web applications",
        "Architecting and implementing scalable frontend solutions using ReactJS and modern JavaScript frameworks",
        "Developing robust backend systems and RESTful APIs using Laravel and NestJS",
        "Collaborating with cross-functional teams to deliver high-quality, production-ready code",
        "Mentoring junior developers and conducting code reviews to maintain best practices",
        "Optimizing application performance and ensuring seamless integration with MySQL databases",
      ],
      technologies: ["ReactJS", "Laravel", "NestJS", "JavaScript", "Tailwind CSS", "MySQL", "HTML", "CSS"],
    },
    {
      role: "Junior Frontend Developer",
      company: "JAAN Network (PVT) LTD",
      period: "May 2025 - Oct 2025",
      duration: "6 mos",
      type: "Full-time",
      location: "Colombo, Western Province, Sri Lanka · On-site",
      responsibilities: [
        "Crafted responsive and user-centric web interfaces using ReactJS, HTML, CSS, and Tailwind CSS",
        "Built dynamic and interactive features leveraging JavaScript (ES6)",
        "Collaborated with backend teams to integrate Laravel-based APIs with MySQL databases",
        "Wrote clean, modular code and optimized for performance and cross-browser compatibility",
        "Participated in code reviews, debugging, and translated UI/UX designs into scalable applications",
      ],
      technologies: ["ReactJS", "HTML", "CSS", "Tailwind CSS", "JavaScript", "Laravel", "MySQL"],
    },
    {
      role: "Full-stack Developer",
      company: "Cloud99X",
      period: "Jul 2023 - Jun 2024",
      duration: "1 yr",
      type: "Internship",
      location: "Colombo, Western Province, Sri Lanka · Hybrid",
      responsibilities: [
        "Developed responsive user interfaces utilizing React and Tailwind CSS",
        "Implemented server-side logic using NestJS",
        "Worked with Firebase for efficient data storage, retrieval, and management",
        "Developed cross-platform mobile applications with React Native",
        "Incorporated navigation, state management, and API integrations into mobile apps",
        "Utilized Google Maps API and Google Cloud Platform for enhanced functionality",
      ],
      technologies: ["React", "React Native", "NestJS", "Firebase", "Tailwind CSS", "Google Maps API", "GCP"],
    },
  ];

  return (
    <section
      id="experience"
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

      {/* Ambient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-50"
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
            Professional Experience
          </LinearGradient>
          <span
            aria-hidden
            className="block h-[3px] mt-3 mx-auto w-32 bg-gradient-to-r from-[#2980B9] to-[#6DD5FA] rounded-full"
          />
        </motion.h2>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="hidden md:block absolute left-[31px] top-16 bottom-0 w-[2px] bg-gradient-to-b from-slate-400/40 via-slate-500/30 to-slate-600/20" />
              )}

              {/* GitHub-styled card */}
              <div className="md:pl-20 relative">
                {/* Timeline dot with elegant icon */}
                <div className={`hidden md:flex absolute left-0 top-6 w-16 h-16 rounded-full border-2 items-center justify-center shadow-lg transition-all bg-black border-transparent`}>
                  {/* Briefcase icon for all positions */}
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-white">
                    <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 14H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>

                <div
                  className="rounded-xl border border-white/10 bg-[#0b0f17]/70 backdrop-blur overflow-hidden"
                >
                  {/* Header */}
                  <div className="px-5 py-4 border-b border-white/10 bg-white/[0.02]">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white font-mono">{exp.role}</h3>
                        <p className="text-[#17acff] font-mono text-sm mt-1">{exp.company}</p>
                        {exp.location && (
                          <p className="text-white/50 font-mono text-xs mt-1 flex items-center gap-1">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                            </svg>
                            {exp.location}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 font-mono">
                          {exp.period}
                        </span>
                        <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border-purple-500/30 text-purple-400 font-mono">
                          {exp.duration}
                        </span>
                        <span className={`text-xs px-3 py-1 rounded-full border font-mono ${
                          exp.type === "Full-time" 
                            ? "bg-green-500/10 border-green-500/30 text-green-400"
                            : "bg-blue-500/10 border-blue-500/30 text-blue-400"
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-5 py-5">
                    {/* Responsibilities */}
                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-white/80 text-sm font-mono"
                        >
                          <span
                            className="inline-block w-1.5 h-1.5 rounded-full bg-[#17acff] mt-2 flex-shrink-0"
                        />
                        <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded-md text-white/70 font-mono hover:text-white transition-colors"
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            borderColor: "rgba(255, 255, 255, 0.1)",
                            borderWidth: "1px",
                            borderStyle: "solid"
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Experience;
