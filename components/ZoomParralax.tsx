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
    <div ref={container} className="h-[300vh] top-0 relative ">
        <div className="sticky top-0 h-[100vh] overflow-hidden ">
   
            <motion.div 
            style={{scale:scale4}} 
            className="el w-full h-full absolute top-0 flex justify-center items-center"
            >
            <div 
                className="contentContainer w-[25vw] h-[25vh] relative overflow-auto rounded shadow flex flex-col justify-center"
                style={{
                backgroundImage: `url(${picture1.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }}
            >
                <div className=" p-4 bg-black bg-opacity-70 h-full w-full flex justify-center items-center flex-col">
                <motion.h3  
                    className="text-[25px] font-bold mb-2 text-white">
                    About Me
                </motion.h3>
                
                </div>
            </div>
            </motion.div>

            <motion.div style={{scale:scale5}} className="el w-full h-full absolute top-0 flex justify-center items-center ">
            <div  className="imageContainer w-[35vw] h-[30vh] relative -top-[30vh] left-[5vw]">
                    <Image
                        src={picture2}
                        fill
                        alt="image"
                        placeholder="blur"
                        className="object-cover	"
                    />

                        {/* Dark overlay */}
                         <div className="absolute inset-0 bg-black bg-opacity-50 z-10  "></div>  
                </div>
            
                
            </motion.div>

            
            <motion.div style={{scale:scale6}} className="el w-full h-full absolute top-0 flex justify-center items-center">
            <div  className="imageContainer w-[25vw] h-[45vh] relative -top-[10vh] -left-[30vw]">
                    <Image
                        src={picture3}
                        fill
                        alt="image"
                        placeholder="blur"
                        className="object-cover	"
                    />

                    
                 {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 z-10  "></div>    
                </div>

            </motion.div>

            <motion.div style={{scale:scale5}} className="el w-full h-full absolute top-0 flex justify-center items-center">
            <div  className="imageContainer w-[25vw] h-[25vh] relative  left-[27.5vw]">
                    <Image
                        src={picture4}
                        fill
                        alt="image"
                        placeholder="blur"
                        className="object-cover	"
                    />

                       {/* Dark overlay */}
                       <div className="absolute inset-0 bg-black bg-opacity-30 z-10  "></div>  
                </div>
            </motion.div>

            <motion.div style={{scale:scale6}} className="el w-full h-full absolute top-0 flex justify-center items-center">
            <div  className="imageContainer w-[20vw] h-[25vh] relative top-[27.5vh] left-[5vw]">
                    <Image
                        src={picture5}
                        fill
                        alt="image"
                        placeholder="blur"
                        className="object-cover	"
                    />
                </div>
            </motion.div>

            <motion.div style={{scale:scale8}} className="el w-full h-full absolute top-0 flex justify-center items-center">
            <div  className="imageContainer w-[30vw] h-[25vh] relative top-[27.5vh] -left-[22.5vw]">
                    <Image
                        src={picture6}
                        fill
                        alt="image"
                        placeholder="blur"
                        className="object-cover	"
                    />

                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-30 z-10  "></div>  
                </div>
            </motion.div>

            <motion.div style={{scale:scale9}} className="el w-full h-full absolute top-0 flex justify-center items-center">
            <div  className="imageContainer w-[15vw] h-[15vh] relative top-[22.5vh] left-[25vw]">
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