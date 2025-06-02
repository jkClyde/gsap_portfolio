'use client';

import React from "react";
import { FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[25px]">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex justify-center md:justify-start items-center gap-2 group"
          >
            <div className="relative h-16 w-16 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-tertiary animate-spin-slow [mask-image:linear-gradient(transparent,white)]" />
              <div className="absolute inset-[2px] bg-background rounded-full flex items-center justify-center ">
                <span className="font-bold bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent text-[25px] p-[25px]">
                  RC
                </span>
              </div>
            </div>
            <span className="font-semibold text-content/90 group-hover:text-primary transition-colors">
             
            </span>
          </motion.div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-center">Quick Links</h3>
            <ul className="flex justify-center  flex-wrap gap-4 ">
              {["About", "Services", "Contact", "Resources"].map((item) => (
                <li key={item}>
                  <button
                    className="hover:text-blue-400 text-gray-300 transition-colors duration-200"
                    aria-label={item}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-center">Social Links</h3>
            <div className="flex justify-center  space-x-4">
              {[
                { icon: FaLinkedin, label: "LinkedIn" },
                { icon: FaGithub, label: "GitHub" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="p-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </button>
              ))}
            </div>
          </div>
        </div> */}

        {/* Bottom Section */}
        <div className=" border-gray-700 flex flex-col items-center text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Randall Clyde. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {/* <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-6 h-6" />
      </button> */}
    </footer>
  );
};

export default Footer;
