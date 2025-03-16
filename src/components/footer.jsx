import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white py-6 px-4 font-mono w-full">
      <div className="mx-auto flex justify-between items-end p-6">
        {/* Logo and Copyright - Left Side */}
        <div className="text-left">
          <h2 className="text-2xl font-semibold">BRINSLY</h2>
          <p className="text-sm">&copy; 2025 BRINSLY | All Rights Reserved</p>
        </div>

        {/* Right Side - Quick Links & Contact Info */}
        <div className="flex flex-col sm:flex-col gap-12 text-right">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-medium">Contact Us</h3>
            <p className="text-sm">Email: brinslykevin@gmail.com</p>
            <p className="text-sm">Phone: +94 72 081 5252</p>
            <p className="text-sm">Address: Marawila, Sri Lanka</p>
          </div>

        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs">
        <p>Designed & Developed by kevin brinsly</p>
      </div>
    </footer>
  );
};

export default Footer;