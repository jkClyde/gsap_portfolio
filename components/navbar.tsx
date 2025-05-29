'use client';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import MenuItem from './menu-items';
import { GithubIcon, LinkedInIcon } from './social-icons';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Projects', href: '#work' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername"
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
            {/* Logo Section */}
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
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
                >
                  <GithubIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
                >
                  <LinkedInIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
                </a>
              </div>
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

            {/* Full Screen Mobile Menu */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed right-0 top-0 h-full w-full sm:w-80  backdrop-blur-xl z-[56] md:hidden overflow-hidden border-l border-purple-500/20"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
                <div className="absolute top-40 -right-4 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
                <div className="absolute bottom-0 -right-4 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000" />
              </div>

              {/* Close Button */}
              <motion.button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 p-3 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-all duration-300 backdrop-blur-sm border border-purple-400/30 group z-10"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                variants={itemVariants}
              >
                <XMarkIcon className="h-6 w-6 text-purple-200 group-hover:text-white transition-colors" />
              </motion.button>

              {/* Menu Content */}
              <div className="relative h-full flex flex-col justify-center px-8">
                {/* Navigation Items */}
                <motion.div
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 }
                    }
                  }}
                  className="space-y-8 mb-12"
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      variants={itemVariants}
                      className="overflow-hidden"
                    >
                      <motion.a
                        href={item.href}
                        onClick={handleMenuItemClick}
                        className="block text-3xl font-semibold text-purple-100 hover:text-white transition-all duration-300 group"
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="flex items-center gap-4">
                          <span className="text-sm text-purple-400/80 font-mono">
                            0{index + 1}
                          </span>
                          <span className="group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-fuchsia-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {item.name}
                          </span>
                        </span>
                        <motion.div
                          className="h-0.5 bg-gradient-to-r from-purple-400 to-fuchsia-400 mt-2 origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.a>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Social Links */}
                <motion.div
                  variants={itemVariants}
                  className="space-y-6"
                >
                  <div className="h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
                  
                  <div className="flex gap-6 justify-center">
                    <motion.a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-purple-500/20 backdrop-blur-sm hover:bg-purple-500/30 transition-all duration-300 group border border-purple-400/20"
                      whileHover={{ y: -4, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <GithubIcon className="h-6 w-6 text-purple-200 group-hover:text-white transition-colors" />
                    </motion.a>
                    <motion.a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-purple-500/20 backdrop-blur-sm hover:bg-purple-500/30 transition-all duration-300 group border border-purple-400/20"
                      whileHover={{ y: -4, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <LinkedInIcon className="h-6 w-6 text-purple-200 group-hover:text-white transition-colors" />
                    </motion.a>
                  </div>

                  {/* Contact Info */}
                  <motion.div
                    variants={itemVariants}
                    className="text-center pt-4"
                  >
                    <p className="text-sm text-purple-300/60 mb-2">Get in touch</p>
                    <p className="text-purple-300 font-mono text-sm">
                      hello@randallclyde.dev
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}