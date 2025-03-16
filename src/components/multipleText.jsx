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
    <div className="flex bg-[#010408] flex-col items-center justify-center text-center p-8 font-mono">
      <h4 className="text-white text-2xl mb-2 font-semibold">Hello, It's Me</h4>
      <h1 className="text-white text-8xl font-bold mb-4">
        <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
          Kevin Brinsly
        </LinearGradient>
      </h1>
      <h4 className="text-white text-3xl mb-4 font-medium">
        And I'm a{" "}
        <span className="multiple-text text-3xl font-semibold text-gradient"></span>
      </h4>
      {/* <p className="text-white text-xl max-w-xl mx-auto">
        
      </p> */}
    </div>
  );
};

export default MultipleText;
