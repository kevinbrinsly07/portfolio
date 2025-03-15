import React from 'react';

const skills = [
  { name: 'React', logo: '/react.png' },
  { name: 'Vite', logo: 'public/vite.png' },
  { name: 'React Native', logo: 'public/reactnative.png' },
  { name: 'NestJS', logo: 'public/nestjs.png' },
  { name: 'ExpressJS', logo: 'public/express.png' },
  { name: 'TailwindCSS', logo: 'public/tailwind.png' },
  { name: 'Java', logo: 'public/java.png' },
  { name: 'Python', logo: 'public/python.png' },
  { name: 'PHP', logo: 'public/php.png' },
  { name: 'JavaScript', logo: 'public/javascript.png' },
  { name: 'CSS', logo: 'public/css.png' },
  { name: 'HTML', logo: 'public/html.png' },
  { name: 'MySQL', logo: 'public/mysql.png' },
  { name: 'MongoDB', logo: 'public/mongodb.png' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#010408] mt-30">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-white font-mono">Technology Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2"> {/* Reduced gap to make cards closer */}
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-lg shadow-md border-2 border-transparent hover:border-[#39FF14] hover:scale-105 transition duration-300 ease-in-out flex flex-col items-center"
            >
              <img src={skill.logo} alt={skill.name} className="w-12 h-12 mb-3" />
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;