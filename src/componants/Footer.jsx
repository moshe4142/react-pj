import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-center py-8 px-6 w-full border-t border-gray-300 mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-6">
          <p className="text-gray-700 text-lg mb-2">&copy; {new Date().getFullYear()} Moshe Alfasi & Yoni Ben Aroya. All rights reserved.</p>
          <p className="text-gray-600 text-sm mb-4">Follow us on social media:</p>
          <div className="flex space-x-6 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaFacebook size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
              <FaLinkedin size={28} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700">
              <FaGithub size={28} />
            </a>
          </div>
          <p className="text-gray-600 text-sm mb-2">Designed and developed by Moshe Alfasi & Yoni Ben Aroya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
