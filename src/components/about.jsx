import React from "react";
import Ani from "./ani";
import MultipleText from "./multipleText";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-between relative bg-[#010408]" // Set background color for the section
    >
      <div className="container mt-50 mx-auto px-6 flex flex-col items-center w-full">
        {/* Side-by-side layout of the text and image */}
        <div className="flex w-full items-center justify-center mb-12">
          {/* Multiple Text Section */}
          <div className="flex-1">
            <MultipleText />
          </div>
          {/* Image Section */}
          <div className="flex-1 text-center p-6 rounded-lg">
            <div className="absolute top-0 right-0 mt-30 mr-30">
              <img
                src="../../public/me.png"
                alt="Profile"
                className="w-32 h-32 border-4 border-white rounded-full"
              />
            </div>
          </div>
        </div>

        {/* About Me Section Below */}
        <div className="text-center mt-30 w-full p-6 rounded-lg font-sans">
          <h2 className="text-4xl font-bold text-white mb-6 font-mono">About Me</h2>
          <p className="text-xl mb-6 text-white font-medium">
            As a software engineer, I have gained comprehensive experience in
            full-stack development, utilizing a wide range of technologies to
            build dynamic and efficient web applications. My technical expertise
            includes working with modern frontend frameworks such as React,
            React Native, and Vite, alongside backend technologies like NestJS,
            ExpressJS, PHP, and Java. I have a strong command of both relational
            and NoSQL databases, including MySQL and MongoDB, and I’m proficient
            in various programming languages such as JavaScript, Python, and PHP
          </p>
          <p className="text-xl text-white">
            When I'm not coding, you can find me exploring new tech trends or
            contributing to open-source projects. I'm open to Job opportunities
            where I can contribute, learn and grow. If you have a good
            opportunity that matches my skills and experience then don't
            hesitate to contact me.
          </p>
        </div>
      </div>

      {/* Adding the animated component below the text and image */}
      <div
        style={{
          width: "30%",
          height: "30%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ani />
      </div>
    </section>
  );
};

export default About;
