import React, { useEffect } from "react";
import Typed from "typed.js";

import { LinearGradient } from "react-text-gradients";

const MultipleText = () => {
  useEffect(() => {
    // Initialize Typed.js on component mount
    const options = {
      strings: [
        "Software Engineer",
        "Front-end Developer",
        "Back-end Developer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    };

    const typed = new Typed(".multiple-text", options);

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 poppins lg:mt-0 mt-40">
      <h4 className="text-white text-2xl mb-2 font-semibold font-mono">Hello, It's Me</h4>
      <h1 className="text-white text-8xl font-[800] mb-4">
        <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
          KEVIN <br/> BRINSLY
        </LinearGradient>
      </h1>
      <h4 className="text-white text-2xl mb-4 font-mono font-[700]">
        And I'm a{" "}
        <span className="multiple-text text-2xl font-semibold text-[#17acff]"></span>
      </h4>
      {/* <p className="text-white text-xl max-w-xl mx-auto">
        
      </p> */}
    </div>
  );
};

export default MultipleText;
