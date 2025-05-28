'use client';

import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateEmail(email)) {
      console.log("Subscribed:", email);
      setEmail("");
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
             <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 group"
          >
            <div className="relative h-8 w-8 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-tertiary animate-spin-slow [mask-image:linear-gradient(transparent,white)]" />
              <div className="absolute inset-[2px] bg-background rounded-full flex items-center justify-center">
                <span className="font-bold bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
                  RC
                </span>
              </div>

            </div>
            <span className="font-semibold text-content/90 group-hover:text-primary transition-colors">
              Randall Clyde
            </span>
          </motion.div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
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

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: FaLinkedin, label: "LinkedIn" },
                { icon: FaTwitter, label: "Twitter" },
                { icon: FaInstagram, label: "Instagram" },
                { icon: FaGithub, label: "GitHub" }
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

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`w-full px-4 py-2 rounded-lg border bg-gray-800 text-gray-100 placeholder-gray-400 
                ${!isValidEmail ? "border-red-500" : "border-gray-600"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                aria-label="Email subscription"
              />
              {!isValidEmail && (
                <p className="text-red-500 text-sm">Please enter a valid email address</p>
              )}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Clyde Corp. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;
