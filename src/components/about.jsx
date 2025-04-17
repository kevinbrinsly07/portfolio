import React from "react";
import Ani from "./ani";
import MultipleText from "./multipleText";

import { LinearGradient } from "react-text-gradients";

const About = () => {
  return (
    <section id="about" className="flex bg-black flex-col items-center justify-between">
      <div className="container mx-auto px-6 flex flex-col items-center w-full">
        {/* Side-by-side layout of the text and image */}
        <div className="flex w-full h-screen  items-center justify-center mb-12">
          {/* Multiple Text Section */}
          <div className="flex-1">
            <MultipleText />
          </div>
        </div>

        {/* About Me Section Below */}
        <div className="text-center mt-30 w-full p-6 rounded-lg font-sans">
          <h2 className="text-4xl font-bold text-white mb-6 font-mono">
            <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
              About Me
            </LinearGradient>
          </h2>
          <p className="text-2xl mb-6 text-white font-medium font-mono">
            As a software engineer, I have gained comprehensive experience in
            full-stack development, utilizing a wide range of technologies to
            build dynamic and efficient web applications. My technical expertise
            includes working with modern frontend frameworks such as <span className="text-yellow-300">React,
            React Native, </span>alongside backend technologies like <span className="text-yellow-300"> NestJS,
            ExpressJS, PHP, and Java.</span> I have a strong command of both relational
            and NoSQL databases, including <span className="text-yellow-300">MySQL and MongoDB,</span> and I’m proficient
            in various programming languages such as <span className="text-yellow-300">JavaScript, Python, and PHP</span>
          </p>
          <p className="text-xl text-white font-medium font-mono">
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
