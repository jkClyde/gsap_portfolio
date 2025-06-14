'use client';

import React from 'react';

interface TechBadgeProps {
  children: React.ReactNode;
}

const TechBadge: React.FC<TechBadgeProps> = ({ children }) => (
  <span className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30 backdrop-blur-sm hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300">
    {children}
  </span>
);

interface ExperienceItemProps {
  company: string;
  role: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
}

const ExperienceCard: React.FC<ExperienceItemProps> = ({
  company,
  role,
  location,
  duration,
  description,
  technologies
}) => (
  <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
    {/* Gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* Content */}
    <div className="relative z-10">
      {/* Header - Mobile First Layout */}
      <div className="mb-6">
        {/* Mobile Layout - Stacked */}
        <div className="block sm:hidden">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
              {company}
            </h3>
          </div>
          <p className="text-blue-400 text-base font-medium mb-3">{role}</p>
          <div className="mb-2">
            <p className="text-gray-300 font-semibold text-base">{duration}</p>
            {/* <p className="text-gray-400 text-sm">{location}</p> */}
          </div>
        </div>
        
        {/* Desktop Layout - Side by Side */}
        <div className="hidden sm:flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                {company}
              </h3>
            </div>
            <p className="text-blue-400 text-lg font-medium">{role}</p>
          </div>
          <div className="text-right ml-4">
            <p className="text-gray-300 font-semibold text-lg">{duration}</p>
            {/* <p className="text-gray-400 text-sm">{location}</p> */}
          </div>
        </div>
      </div>
      
      {/* Description */}
      <div className="mb-6">
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <TechBadge key={index}>{tech}</TechBadge>
        ))}
      </div>
    </div>
    
    {/* Decorative elements */}
    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
  </div>
);

const ExperienceSection: React.FC = () => {
  const experiences: ExperienceItemProps[] = [
    {
      company: "Technodeam Web Creations",
      role: "Web Developer",
      location: "Baguio City",
      duration: "July 2024 - Present",
      description: "Contributed to developing and optimizing web applications using Wordpress, Php, React, and Next.js",
      technologies: ["React", "NextJS", "Php", "Javascript", "TailwindCSS", "Wordpress"]
    },
    {
      company: "iLearn Skills Development",
      role: "OJT Intern – Junior Developer",
      location: "La Trinidad",
      duration: "December 2023 - May-2024",
      description: "Assisted in developing and maintaining websites using PHP, JavaScript, and WordPress. Supported senior developers with feature implementation, debugging, and layout styling using Bootstrap.",
      technologies: ["Php", "Javascript", "Bootstrap", "Wordpress"]
    },
  
  ];

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id='experience'>
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/3 to-transparent rounded-full"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="opacity-0 translate-y-8 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ExperienceCard {...experience} />
            </div>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;