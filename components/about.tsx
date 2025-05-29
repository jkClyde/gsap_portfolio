'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const cubeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const words = gsap.utils.toArray<HTMLElement>('.scroll-word');
    
    // Set the initial opacity
    gsap.set(words, (index: number) => ({
      opacity: index === 0 ? 1 : 0,
    }));

    const colors: string[] = ['#252825', '#272524', '#0A0A0A'];
    const cubeColors: string[] = ['#6bd490', '#d66761', '#68bde7'];
    const pTag = document.querySelector<HTMLParagraphElement>('.about-section p');

    // Responsive padding values
    const isMobile = window.innerWidth < 768;
    const paddingValues: number[] = isMobile ? [40, 60, 80] : [80, 120, 180];

    // Set cube to be completely still initially
    gsap.set('.cube', { rotationX: 0, rotationY: 0 });
    
    // Kill any existing animations on the cube
    gsap.killTweensOf('.cube');
    
    // Create separate timeline for cube rotation with scrub
    gsap.timeline({
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top top',
        end: '+=500%',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set('.cube', {
            rotationX: progress * 360,
            rotationY: progress * 540,
          });
        }
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top top',
        end: '+=500%',
        scrub: 0.5,
        pin: true,
      },
    });

    words.forEach((word, i) => {
      const label = `step-${i}`;
      const stepDuration = 1.5;

      tl.add(label);

      tl.to('.about-section', {
        backgroundColor: colors[i],
        duration: stepDuration,
        ease: 'power1.inOut',
      }, label);

      // Animate cube color and scale
      tl.to('.cube-face', {
        backgroundColor: cubeColors[i],
        duration: stepDuration,
        ease: 'power1.inOut',
      }, label);

      tl.to('.cube', {
        scale: 1 + (i * 0.2),
        duration: stepDuration,
        ease: 'power1.inOut',
      }, label);

      if (pTag) {
        tl.to(pTag, {
          paddingTop: paddingValues[i],
          paddingBottom: paddingValues[i],
          duration: stepDuration,
          ease: 'power1.inOut',
        }, label);
      }

      tl.to(word, {
        opacity: 1,
        duration: stepDuration * 0.4,
        ease: 'power2.out',
      }, label);

      if (i !== words.length - 1) {
        tl.to(word, {
          opacity: 0,
          duration: stepDuration * 0.3,
          ease: 'power2.inOut',
        }, `+=${stepDuration * 0.7}`);
      }
    });

    tl.to({}, { duration: 1 });
  }, []);

  return (
    <div className="about-section h-screen flex items-center justify-start relative">
      <div className="w-full">
        <p className="relative text-start leading-[1] px-4 sm:px-8 md:px-[100px] bg-black h-fit py-[40px] transition-all duration-1000 text-4xl sm:text-6xl md:text-7xl lg:text-[96px] font-bold">
          I've worked in{' '}
          <span className="inline-block relative align-middle">
            <span className="invisible">FULLSTACK</span>
            <span className="scroll-word absolute top-0 left-0 w-full text-start opacity-0 text-[#6bd490]">FRONTEND</span>
            <span className="scroll-word absolute top-0 left-0 w-full text-start opacity-0 text-[#d66761]">BACKEND</span>
            <span className="scroll-word absolute top-0 left-0 w-full text-start opacity-0 text-[#68bde7]">FULLSTACK</span>
          </span>

          {/* Bottom Right Cube - Desktop only */}
          <div className="hidden md:block absolute -bottom-10 right-40 z-10" style={{ perspective: '1000px' }}>
            <div 
              className="cube relative"
              style={{
                width: '100px',
                height: '100px',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Cube faces */}
              <div 
                className="cube-face absolute w-full h-full border-2 border-white/20"
                style={{
                  backgroundColor: '#6bd490',
                  transform: 'rotateY(0deg) translateZ(50px)',
                }}
              />
              <div 
                className="cube-face absolute w-full h-full border-2 border-white/20"
                style={{
                  backgroundColor: '#6bd490',
                  transform: 'rotateY(90deg) translateZ(50px)',
                }}
              />
              <div 
                className="cube-face absolute w-full h-full border-2 border-white/20"
                style={{
                  backgroundColor: '#6bd490',
                  transform: 'rotateY(180deg) translateZ(50px)',
                }}
              />
              <div 
                className="cube-face absolute w-full h-full border-2 border-white/20"
                style={{
                  backgroundColor: '#6bd490',
                  transform: 'rotateY(-90deg) translateZ(50px)',
                }}
              />
              <div 
                className="cube-face absolute w-full h-full border-2 border-white/20"
                style={{
                  backgroundColor: '#6bd490',
                  transform: 'rotateX(90deg) translateZ(50px)',
                }}
              />
              <div 
                className="cube-face absolute w-full h-full border-2 border-white/20"
                style={{
                  backgroundColor: '#6bd490',
                  transform: 'rotateX(-90deg) translateZ(50px)',
                }}
              />
            </div>
          </div>

          {/* Top Right Cube - Desktop only */}
          <div className="hidden md:block absolute -top-10 right-40 z-10" style={{ perspective: '1000px' }}>
            <div 
              className="cube relative"
              style={{
                width: '100px',
                height: '100px',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Cube faces */}
              <div 
                className="cube-face absolute w-full h-full border-2 border-white/20"
                style={{
                  backgroundColor: '#6bd490',
                  transform: 'rotateY(0deg) translateZ(50px)',
                }}
              />
              <div 
                className="cube-face absolute w-full h-full border-2 border-white/20"
                style={{
                  backgroundColor: '#6bd490',
                  transform: 'rotateY(90deg) translateZ(50px)',
                }}
              />
              <div 
                className="cube-face absolute w-full h-full border-2 border-white/20"
                style={{
                  backgroundColor: '#6bd490',
                  transform: 'rotateY(180deg) translateZ(50px)',
                }}
              />
              <div 
                className="cube-face absolute w-full h-full border-2 border-white/20"
                style={{
                  backgroundColor: '#6bd490',
                  transform: 'rotateY(-90deg) translateZ(50px)',
                }}
              />
              <div 
                className="cube-face absolute w-full h-full border-2 border-white/20"
                style={{
                  backgroundColor: '#6bd490',
                  transform: 'rotateX(90deg) translateZ(50px)',
                }}
              />
              <div 
                className="cube-face absolute w-full h-full border-2 border-white/20"
                style={{
                  backgroundColor: '#6bd490',
                  transform: 'rotateX(-90deg) translateZ(50px)',
                }}
              />
            </div>
          </div>

          {/* Mobile Cube - Single centered cube for mobile */}
          <div className="block md:hidden absolute -bottom-4 right-4 z-10" style={{ perspective: '800px' }}>
            <div 
              className="cube relative"
              style={{
                width: '60px',
                height: '60px',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Cube faces */}
              <div 
                className="cube-face absolute w-full h-full border-2 border-white/20"
                style={{
                  backgroundColor: '#6bd490',
                  transform: 'rotateY(0deg) translateZ(30px)',
                }}
              />
              <div 
                className="cube-face absolute w-full h-full border-2 border-white/20"
                style={{
                  backgroundColor: '#6bd490',
                  transform: 'rotateY(90deg) translateZ(30px)',
                }}
              />
              <div 
                className="cube-face absolute w-full h-full border-2 border-white/20"
                style={{
                  backgroundColor: '#6bd490',
                  transform: 'rotateY(180deg) translateZ(30px)',
                }}
              />
              <div 
                className="cube-face absolute w-full h-full border-2 border-white/20"
                style={{
                  backgroundColor: '#6bd490',
                  transform: 'rotateY(-90deg) translateZ(30px)',
                }}
              />
              <div 
                className="cube-face absolute w-full h-full border-2 border-white/20"
                style={{
                  backgroundColor: '#6bd490',
                  transform: 'rotateX(90deg) translateZ(30px)',
                }}
              />
              <div 
                className="cube-face absolute w-full h-full border-2 border-white/20"
                style={{
                  backgroundColor: '#6bd490',
                  transform: 'rotateX(-90deg) translateZ(30px)',
                }}
              />
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default About;