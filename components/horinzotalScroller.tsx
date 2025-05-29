'use client'

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const HorinzotalScroller = () => {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-content mb-4 text-center">
          My Portfolio
       </h2>
       <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full mx-auto" />

      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0.5%", "-90%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex h-screen  -mt-[80px] md:mt-0 items-center overflow-hidden">
        <motion.div 
            initial={{ opacity: 0, y:100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} 
            style={{ x }} 
            className="flex gap-[15px] ">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
          <ViewMoreArrow />
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[75vh] w-[90vw] sm:w-[450px] overflow-hidden bg-neutral-200 border-[3px]  rounded-[25px]"
    >
      <motion.div
        className="absolute inset-0 z-0"
      >
        <Image width={900} height={900} src={card.url} alt="website desktop version"/>
      </motion.div>
    </div>
  );
};

const ViewMoreArrow = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center h-[75vh] w-[200px] cursor-pointer"
    >
      <motion.div
        initial={{ x: -5 }}
        animate={{ x: 5 }}
        transition={{ 
          repeat: Infinity, 
          repeatType: "reverse", 
          duration: 0.8 
        }}
        className="flex flex-col items-center gap-4"
      >
        <ArrowRight size={48} className="text-white" />
        <p className="font-medium text-lg text-white">View More Projects</p>
      </motion.div>
    </motion.div>
  );
};

export default HorinzotalScroller;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/projects/web1.png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/projects/web2.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/projects/web3.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/projects/web4.png",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/projects/web5.png",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/projects/web6.png",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/projects/web7.png",
    title: "Title 7",
    id: 7,
  },
  {
    url: "/projects/web8.png",
    title: "Title 8",
    id: 8,
  },
];