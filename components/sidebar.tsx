'use client';
import { motion } from 'framer-motion';

import { useState, useEffect } from 'react';

interface NavItem {
  id: string;
  label: string;
}

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>('');

  const navItems: NavItem[] = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'sample-works', label: 'Sample Works' },
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveItem(sectionId);
    }
  };

  // Update active item based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveItem(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 h-screen w-[54px] bg-black hidden md:flex flex-col items-center py-5 z-[9999]">
      {/* Logo */}
         <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 group pb-[50px]"
            >
              <div className="relative h-8 w-8 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-tertiary animate-spin-slow [mask-image:linear-gradient(transparent,white)]" />
                <div className="absolute inset-[2px] bg-background rounded-full flex items-center justify-center">
                  <span className="font-bold bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
                    RC
                  </span>
                </div>
              </div>
         
            </motion.div>

      {/* Navigation Items */}
      <div className="flex flex-col items-center space-y-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`
              writing-mode-vertical-rl text-orientation-mixed
              text-[14px] font-sans tracking-[3px]
              transition-colors duration-300 ease-in-out
              transform rotate-180 cursor-pointer
              ${
                activeItem === item.id
                  ? 'text-white'
                  : 'text-gray-500 hover:text-white'
              }
            `}
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
            }}
            aria-label={`Navigate to ${item.label} section`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;