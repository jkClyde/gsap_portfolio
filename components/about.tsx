'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  useGSAP(() => {
    const words = gsap.utils.toArray<HTMLElement>('.scroll-word');
    
    // Set the initial opacity
    gsap.set(words, (index: number) => ({
      opacity: index === 0 ? 1 : 0,
    }));

    const colors: string[] = ['#252825', '#272524', '#0A0A0A'];
    const pTag = document.querySelector<HTMLParagraphElement>('.about-section p');

    const paddingValues: number[] = [80, 120, 180];

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
    <div className="about-section h-screen flex items-center justify-start text-[96px] font-bold">
      <div className="w-full">
        <p className="relative text-start leading-[1] px-[100px] bg-black h-fit py-[40px] transition-all duration-1000">
          I've worked in{' '}
          <span className="inline-block relative align-middle">
            <span className="invisible">FULLSTACK</span>
            <span className="scroll-word absolute top-0 left-0 w-full text-start opacity-0 text-[#6bd490]">FRONTEND</span>
            <span className="scroll-word absolute top-0 left-0 w-full text-start opacity-0 text-[#d66761]">BACKEND</span>
            <span className="scroll-word absolute top-0 left-0 w-full text-start opacity-0 text-[#68bde7]">FULLSTACK</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
