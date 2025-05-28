
'use client';
import { ParticleCanvas } from "@/hooks/particle";
import { motion, useScroll } from "framer-motion";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";



export default function Hero() {

     useGSAP(() => {
        const words = gsap.utils.toArray("#header-hero span");

        gsap.from(words, {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.4,
        ease: "power3.out",
        });
    }, []);

    const headingText = "Meet your next creative developer.";
    
    const {scrollY} = useScroll();
    // const y   =useTransform(scrollY, [0, 500], [0, 100]);
    return (
        <section className="min-h-screen relative overflow-hidden  items-center flex">
            {/* Gradient fade overlay at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-background to-transparent w-full pointer-events-none z-10"></div>
                     
            <div className="max-w-7xl mx-auto px-[15px]   pt-[100px]">
            <ParticleCanvas/>    
                <div className="flex flex-col lg:flex-row items-center justify-center gap-16  ">
                    {/* Text content */}
                    <div
                        className="relative group lg:w-1/2"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-6 text-center">
                            Web
                            <br />
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="bg-gradient-to-r from-primary via-secondary
        to-tertiary bg-clip-text text-transparent"
                            >
                                Developer
                            </motion.span>

                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.1 }}
                            className="text-xl text-content/80 mb-8 text-center" 
                        >

                       
                            I focus on creating modern, responsive websites and web applications
                             that deliver seamless user experiences.

                        </motion.p>

                        
                            <motion.button 
                               initial={{ opacity: 0, y: 20 }}
                               animate={{ opacity: 1, y: 0 }}
                               transition={{ duration: 0.8, delay: 1.2 }}
                            className="flex justify-center gap-2 items-center 
                                     bg-surface border-white/10
                                        before:absolute before:w-full before:transition-all
                                        before:duration-700 before:hover:w-full before:-left-full 
                                        before:hover:left-0 before:rounded-full before:bg-gradient-to-r from-primary/10 to-tertiary/10
                                        before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700
                                        relative z-10 px-8 py-4 overflow-hidden border-2 rounded-full group mx-auto"
                            >
                            <span>
                            Explore Work
                            </span>
                            </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}