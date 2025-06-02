'use client';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MenuItem from './menu-items';
import { GithubIcon, LinkedInIcon } from './social-icons';
import { Bars3Icon, XMarkIcon, EnvelopeIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Works', href: '/#sample-works' },
  { name: 'Experience', href: '/#experience' },
  // { name: 'Contact', href: '#contact' },
];

const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/randall-clyde-aquin-437607254/",
  gmail: "mailto:aquin.randall@gmail.com"
};

const menuVariants = {
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.07,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
};

const overlayVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const handleResumeDownload = () => {
    // Replace with your actual resume file path
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Update this path to your resume file
    link.download = 'Randall_Clyde_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        className={`fixed w-full z-50 ${isScrolled
          ? 'backdrop-blur-2xl shadow-2xl'
          : 'backdrop-blur-none'
          } transition-all duration-300 ease-out`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo Section - Linked to Home */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
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
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-6 bg-background/80 px-4 py-2 
              rounded-full border border-white/5 shadow-lg shadow-primary/5">
                {navItems.map((item, i) => (
                  <MenuItem key={item.name} index={i} href={item.href}>
                    {item.name}
                  </MenuItem>
                ))}
              </div>

              <div className="h-6 w-px bg-white/10 mx-2" />

              <div className="flex gap-3">
             
                <Link
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
                >
                  <LinkedInIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
                </Link>
                <Link
                  href={socialLinks.gmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
                >
                  <EnvelopeIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
                </Link>
              </div>

              <div className="h-6 w-px bg-white/10 mx-2" />

              {/* Projects Button - Matching desktop style */}
              <Link
                href="/projects"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
              >
                <span className="text-sm text-content/80 group-hover:text-primary transition-colors">PROJECTS</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors relative z-[60]"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                variants={{
                  closed: { rotate: 0 },
                  open: { rotate: 180 }
                }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6 text-content/80" />
                ) : (
                  <Bars3Icon className="h-6 w-6 text-content/80" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu - Matching desktop style */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed right-0 top-0 h-full w-full sm:w-80 backdrop-blur-xl z-[56] md:hidden overflow-hidden bg-background/90 border-l border-white/10"
            >
              {/* Subtle background gradient - more blue/purple */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl" />
                <div className="absolute top-40 -right-4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl" />
                <div className="absolute bottom-0 -right-4 w-72 h-72 bg-violet-600 rounded-full mix-blend-multiply filter blur-xl" />
              </div>

              {/* Menu Content */}
              <div className="relative h-full flex flex-col justify-center px-8">
                {/* Navigation Items - Simpler, matching desktop */}
                <motion.div
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 }
                    }
                  }}
                  className="space-y-6 mb-12"
                >
                  {navItems.map((item) => (
                    <motion.div
                      key={item.name}
                      variants={itemVariants}
                      className="overflow-hidden"
                    >
                      <motion.a
                        href={item.href}
                        onClick={handleMenuItemClick}
                        className="block text-2xl font-medium text-content/90 hover:text-primary transition-all duration-300"
                        whileHover={{ x: 8 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.name}
                      </motion.a>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Divider */}
                <motion.div
                  variants={itemVariants}
                  className="h-px bg-white/10 mb-8"
                />

                {/* Social Links - Matching desktop style */}
                <motion.div
                  variants={itemVariants}
                  className="flex gap-3 mb-8"
                >
                  <Link
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
                  >
                    <GithubIcon className="h-6 w-6 text-content/80 group-hover:text-primary transition-colors" />
                  </Link>
                  <Link
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
                  >
                    <LinkedInIcon className="h-6 w-6 text-content/80 group-hover:text-primary transition-colors" />
                  </Link>
                  <Link
                    href={socialLinks.gmail}
                    className="p-3 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
                  >
                    <EnvelopeIcon className="h-6 w-6 text-content/80 group-hover:text-primary transition-colors" />
                  </Link>
                </motion.div>

                {/* Divider */}
                <motion.div
                  variants={itemVariants}
                  className="h-px bg-white/10 mb-8"
                />

                {/* Projects Button - Matching desktop style */}
                <motion.div
                  variants={itemVariants}
                  className="mb-6"
                >
                  <Link
                    href="/projects"
                    onClick={handleMenuItemClick}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
                  >
                    <span className="text-sm text-content/80 group-hover:text-primary transition-colors font-medium">PROJECTS</span>
                  </Link>
                </motion.div>

                {/* Contact Info - Simplified */}
                <motion.div
                  variants={itemVariants}
                  className="text-left"
                >
                  <p className="text-sm text-content/60 mb-1">Get in touch</p>
                  <Link href='mailto:aquin.randall@gmail.com' className="text-content/80 font-mono text-sm">
                    aquin.randall@gmail.com
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}