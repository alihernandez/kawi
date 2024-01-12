// components/Footer.js

import Image from "next/image";

const Footer = () => {
    return (
      <footer className="text-white p-4">
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="flex space-x-4">
            {/* Social Media Icons (Replace the links and icons with your own) */}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src="/facebook.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src="/instagram.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
          <div>
            <nav>
              <ul>
                <li>"LOCATIONINFO"</li>
                <li>"PHONENUMBER"</li>
                <li>"OTHER INFO"</li>
              </ul>
            </nav>
          </div>
          <div>
            {/* Contact Information */}
            <p className="text-sm">
              <span className="font-bold">Contact:</span> kawiservicesaspen@gmail.com
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  