'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

export default function PortfolioMaskTransition() {
  const containerRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Transform values for zoom effect
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 2.5]);
  const opacity = useTransform(scrollYProgress, [0.5, 0.9], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // Trigger next section reveal
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(value => {
      if (value > 0.7 && !isRevealed) {
        setIsRevealed(true);
      } else if (value < 0.7 && isRevealed) {
        setIsRevealed(false);
      }
    });
    
    return () => unsubscribe();
  }, [scrollYProgress, isRevealed]);

  return (
    <>
      <div ref={containerRef} className="relative h-[200vh] w-full overflow-hidden">
        {/* Sticky container for the effect */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Background that appears behind the mask */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-purple-800 to-pink-800"
            style={{ scale }}
          />
          
          {/* Text that acts as the mask */}
          <motion.div 
            className="relative z-10 text-center"
            style={{ opacity: textOpacity }}
          >
            <h1 className="text-[20vw] font-black text-transparent bg-clip-text bg-white leading-none"
                style={{
                  WebkitTextStroke: '2px white',
                }}>
              PORTFOLIO
            </h1>
          </motion.div>
          
          {/* Content that appears after zoom */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity }}
          >
            <div className="max-w-4xl px-6 text-center">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">My Projects</h2>
              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                A showcase of my creative work and professional projects across web development and design.
              </p>
              <button className="px-8 py-3 bg-white text-purple-900 font-bold rounded-full hover:bg-opacity-90 transition-all">
                Explore Work
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Next section that appears after the transition */}
      <motion.section 
        className="bg-gray-900 min-h-screen w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: isRevealed ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-24">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 text-center">Featured Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                <div className="h-64 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Project {item}</h3>
                  <p className="text-gray-300">A showcase of creative development work using modern technologies.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}