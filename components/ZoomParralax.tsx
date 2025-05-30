'use client'
import { useRef } from "react"
import Image from "next/image"

import picture1 from "../public/images/image.png"
import picture2 from "../public/images/image1.png"
import picture3 from "../public/images/image2.png"
import picture4 from "../public/images/image3.png"
import picture5 from "../public/images/image4.jpg"
import picture6 from "../public/images/image5.jpg"
import picture7 from "../public/images/image7.png"





import { useScroll, useTransform, motion } from "framer-motion"

const ZoomParralax = () => {
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0,1],[1,4])
    const scale5 = useTransform(scrollYProgress, [0,1],[1,5])
    const scale6 = useTransform(scrollYProgress, [0,1],[1,6])
    const scale8 = useTransform(scrollYProgress, [0,1],[1,8])
    const scale9 = useTransform(scrollYProgress, [0,1],[1,9])





  return (
    <div ref={container} className="h-[300vh] top-0 relative " id="home">
        {/* <ParticleCanvas/> */}
        <div className="sticky top-0 h-[100vh] overflow-hidden ">

            {/* main image */}
            <motion.div 
            style={{scale:scale4}} 
            className="el w-full h-full absolute top-0 flex justify-center items-center"
            >
                
            <div 
                className="contentContainer md:w-[25vw] h-[23vh] md:h-[25vh] relative overflow-auto rounded shadow flex flex-col justify-center"
                style={{
                backgroundImage: `url(${picture1.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }}
            >

                    {/* Gradient fade overlay at the bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-background to-transparent w-full pointer-events-none z-10"></div>
                            <div className=" p-4 bg-black bg-opacity-70 h-full w-full flex justify-center items-center flex-col">
                            <motion.div 
                  className="flex flex-col items-center mt-6 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <p className="text-white text-[12px] sm:text-sm mb-2 opacity-80">Scroll Down</p>
                  
                  {/* Mouse outline */}
                  <motion.div 
                    className="relative w-3 sm:w-5 h-6 sm:h-8 border-2 border-white rounded-full flex items-center justify-center"
                  >
                    {/* Scrolling dot animation */}
                    <motion.div
                      className="w-1 h-1 bg-white rounded-full"
                      animate={{
                        y: [0, 10, 0],
                        opacity: [1, 0.5, 1]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  
                  {/* Arrow below mouse */}
                  <motion.div 
                    className="mt-2"
                    animate={{
                      y: [0, 3, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2
                    }}
                  >
                    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L8 7L15 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </motion.div>
                </div>
            </div>
            </motion.div>

            {/* React */}
            <motion.div style={{scale:scale5}} className="el w-full h-full absolute top-0 flex justify-center items-center ">
            <div  className="imageContainer w-[35vw] h-[25vh] md:h-[30vh] relative -top-[28vh] md:-top-[31vh] left-[5vw]">
                    <Image
                        src={picture2}
                        fill
                        alt="image"
                        placeholder="blur"
                        className="object-cover	"
                    />

                         <div className="absolute inset-0 bg-black bg-opacity-50 z-10  "></div>  
                </div>
            
                
            </motion.div>

            {/* Wordpress */}
            <motion.div style={{scale:scale6}} className="el w-full h-full absolute top-0 flex justify-center items-center">
            <div  className="imageContainer w-[30vw] h-[30vh] md:w-[25vw] md:h-[45vh] relative  -top-[8vh] md:-top-[10vh]  -left-[32vw] md:-left-[27vw]">
                    <Image
                        src={picture3}
                        fill
                        alt="image"
                        placeholder="blur"
                        className="object-cover	"
                    />

                    
                <div className="absolute inset-0 bg-black bg-opacity-30 z-10  "></div>    
                </div>

            </motion.div>

            {/* NextJS */}
            <motion.div style={{scale:scale5}} className="el w-full h-full absolute top-0 flex justify-center items-center">
            <div  className="imageContainer w-[29vw] md:w-[25vw] h-[20vh] md:h-[25vh] relative  left-[30vw] md:left-[27vw]">
                    <Image
                        src={picture4}
                        fill
                        alt="image"
                        placeholder="blur"
                        className="object-cover	"
                    />

                       <div className="absolute inset-0 bg-black bg-opacity-30 z-10  "></div>  
                </div>
            </motion.div>
            
            {/* kali */}
            <motion.div style={{scale:scale6}} className="el w-full h-full absolute top-0 flex justify-center items-center">
            <div  className="imageContainer w-[25vw] md:w-[20vw] h-[25vh] relative  top-[26vh] md:top-[28vh] left-[5vw]">
                    <Image
                        src={picture5}
                        fill
                        alt="image"
                        placeholder="blur"
                        className="object-cover	"
                    />
                </div>
            </motion.div>

            {/* Tailwind */}
            <motion.div style={{scale:scale8}} className="el w-full h-full absolute top-0 flex justify-center items-center">
            <div  className="imageContainer w-[30vw] h-[25vh] relative top-[24vh] md:top-[28vh] -left-[27.5vw] md:-left-[22.5vw]">
                    <Image
                        src={picture6}
                        fill
                        alt="image"
                        placeholder="blur"
                        className="object-cover	"
                    />

                        <div className="absolute inset-0 bg-black bg-opacity-30 z-10  "></div>  
                </div>
            </motion.div>

            {/* PHP */}
            <motion.div style={{scale:scale9}} className="el w-full h-full absolute top-0 flex justify-center items-center">
            <div  className="imageContainer w-[22vw] md:w-[15vw] h-[15vh] relative top-[20vh] md:top-[23vh] left-[33vw] md:left-[25vw]">
                    <Image
                        src={picture7}
                        fill
                        alt="image"
                        placeholder="blur"
                        className="object-cover	"
                    />

                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-50 z-10  "></div>  
                </div>

                
            </motion.div>
        </div>
    </div>
  )
}

export default ZoomParralax