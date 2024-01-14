// components/Footer.js

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-white p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center h-full">
        <div className="flex mb-4 sm:mb-0 space-x-4">
          {/* Social Media Icons (Replace the links and icons with your own) */}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src="/facebook.png" alt="Facebook" className="w-6 h-6" width={24} height={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src="/instagram.png" alt="Instagram" className="w-6 h-6" width={24} height={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" width={24} height={24} />
          </a>
        </div>
        <div className="mb-4 sm:mb-0">
          <nav>
            <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <li>LOCATIONINFO</li>
              <li>PHONENUMBER</li>
              <li>OTHER INFO</li>
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

  