import React from "react";

import { LinearGradient } from "react-text-gradients";

const skills = [
  { name: "React", logo: "/react.png" },
  { name: "Vite", logo: "/vite.png" },
  { name: "React Native", logo: "/reactnative.png" },
  { name: "NestJS", logo: "/nestjs.png" },
  { name: "ExpressJS", logo: "/express.png" },
  { name: "TailwindCSS", logo: "/tailwind.png" },
  { name: "Java", logo: "/java.png" },
  { name: "Python", logo: "/python.png" },
  { name: "PHP", logo: "/php.png" },
  { name: "JavaScript", logo: "/javascript.png" },
  { name: "CSS", logo: "/css.png" },
  { name: "HTML", logo: "/html.png" },
  { name: "MySQL", logo: "/mysql.png" },
  { name: "MongoDB", logo: "/mongodb.png" },
];

const Skills = () => {
  return (
    <section id="skills" className=" pt-80 pb-80">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-30 text-white font-mono">
          <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
            Technology Stack
          </LinearGradient>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="tech-item p-4 rounded-lg shadow-md border-2 border-transparent hover:border-[#17acff] hover:scale-105 transition-all duration-300 ease-in-out flex flex-col items-center"
              style={{ animationDelay: `${index * 0.2}s` }} // Delay for each icon
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 mb-3"
              />
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
