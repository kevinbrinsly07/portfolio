import React from 'react';
import AniTwo from './aniTwo';

const insta = '/insta.png';
const facebook = '/facebook.png';
const x = '/x.png';
const linkedin = '/linkedin.png';



const Contact = () => {
  return (
    <section id="contact" className="py-2 text-center pb-30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-6 font-mono">Contact Me</h2>
        <p className="text-lg mb-6 text-white font-mono">Feel free to reach out to me via email or follow me on social media!</p>
        <a
          href="mailto:brinslykevin@gmail.com"
          className="text-xl font-bold font-mono text-blue-600 hover:text-blue-800 transition duration-300"
        >
          Email Me
        </a>
        
        {/* Social Media Links */}
        <div className="social-media flex justify-center mt-6 space-x-4">
          <a href="https://web.facebook.com/kevin.paris.922" className=" rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
            <img src={facebook} alt="Facebook" className="w-15 h-15" />
          </a>
          <a href="https://twitter.com/kevin_brinsly" className=" rounded-lg hover:bg-gray-400 hover:text-white transition duration-300">
            <img src={x} alt="Twitter" className="w-15 h-15" />
          </a>
          <a href="https://www.instagram.com/kevinbrinsly/" className="rounded-lg hover:bg-pink-500 hover:text-white transition duration-300">
            <img src={insta} alt="Instagram" className="w-15 h-15" />
          </a>
          <a href="https://www.linkedin.com/in/kevin-brinsly-se/" className=" rounded-lg hover:bg-blue-700 hover:text-white transition duration-300">
            <img src={linkedin} alt="LinkedIn" className="w-15 h-15" />
          </a>
        </div>
      </div>

      {/* Adding the animated component below the text and image */}
      <div
        style={{
          width: "20%",
          height: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AniTwo />
      </div>
    </section>
  );
};

export default Contact;
