import React from 'react';

const insta = '../../public/insta.png';
const facebook = '../../public/facebook.png';
const x = '../../public/x.png';
const linkedin = '../../public/linkedin.png';



const Contact = () => {
  return (
    <section id="contact" className="py-2 text-center pb-30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6">Contact</h2>
        <p className="text-lg mb-6">Feel free to reach out to me via email or follow me on social media!</p>
        <a
          href="mailto:brinslykevin@gmail.com"
          className="text-xl font-bold text-blue-600 hover:text-blue-800 transition duration-300"
        >
          Email Me
        </a>
        
        {/* Social Media Links */}
        <div className="social-media flex justify-center mt-6 space-x-4">
          <a href="https://web.facebook.com/kevin.paris.922" className=" border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
            <img src={facebook} alt="Facebook" className="w-8 h-8" />
          </a>
          <a href="https://twitter.com/kevin_brinsly" className=" border-2 border-gray-400 rounded-lg hover:bg-gray-400 hover:text-white transition duration-300">
            <img src={x} alt="Twitter" className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/kevinbrinsly/" className="border-2 border-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition duration-300">
            <img src={insta} alt="Instagram" className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/kevin-brinsly-961bb9222/" className="border-2 border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300">
            <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
