import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-between relative">
      <div className="container mx-auto px-6 flex justify-between items-center w-full">
        <div className="flex-1 text-left mr-12 p-6 rounded-lg bottom-gradient-border">
          <h2 className=" text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-xl mb-6 text-white">
            Hi! I'm a software engineer with a passion for building scalable, maintainable software systems.
            I specialize in full-stack development, and I enjoy learning new technologies.
          </p>
          <p className="text-xl text-white">
            I have a strong background in web development using React, Node.js, and databases like PostgreSQL and MongoDB.
            When I'm not coding, you can find me exploring new tech trends or contributing to open-source projects.
          </p>
        </div>
        <div className="absolute top-0 right-0 mt-30 mr-30"> 
          <img
            src="../../public/me.png" 
            alt="Profile"
            className="w-32 h-32 border-4 border-white rounded-full"  
          />
        </div>
      </div>
    </section>
  );
};

export default About;