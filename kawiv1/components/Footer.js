// components/Footer.js

import Image from "next/image";

const Footer = () => {
    return (
      <footer className="text-white p-4">
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="flex space-x-4">
            {/* Social Media Icons (Replace the links and icons with your own) */}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
          <div>
            {/* Contact Information */}
            <p className="text-sm">
              <span className="font-bold">Contact:</span> info@example.com
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  