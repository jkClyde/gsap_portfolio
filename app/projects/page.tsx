'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaWordpress, 
  FaNode, 
  FaPhp,
  FaCss3Alt,
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
  FaPalette,
  FaClock,
  FaEye
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiJavascript, 
  SiTailwindcss, 
  SiMongodb,
  SiTypescript,
  SiMysql,
  SiFirebase,
  SiFramer,
  SiGreensock,
  SiPostgresql
} from 'react-icons/si';

// Tech stack icon mapping
const techIcons = {
  'React': { icon: FaReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs, color: '#000000' },
  'NextJS': { icon: SiNextdotjs, color: '#000000' },
  'WordPress': { icon: FaWordpress, color: '#21759B' },
  'Wordpress': { icon: FaWordpress, color: '#21759B' },
  'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'Typescript': { icon: SiTypescript, color: '#3178C6' },
  'Node.js': { icon: FaNode, color: '#339933' },
  'PHP': { icon: FaPhp, color: '#777BB4' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'CSS': { icon: FaCss3Alt, color: '#1572B6' },
  'MongoDB': { icon: SiMongodb, color: '#47A248' },
  'MySQL': { icon: SiMysql, color: '#4479A1' },
  'Postgres': { icon: SiPostgresql, color: '#336791' },
  'Firebase': { icon: SiFirebase, color: '#FFCA28' },
  'Framer Motion': { icon: SiFramer, color: '#0055FF' },
  'GSAP': { icon: SiGreensock, color: '#88CE02' },
  'Elementor': { icon: FaWordpress, color: '#92003B' },
  'Kadence': { icon: FaWordpress, color: '#3F51B5' },
  'GoHighLevel': { icon: FaCode, color: '#4F46E5' }
} as const;

// Create a type for valid tech stack keys
type TechStackKey = keyof typeof techIcons;

// Status configurations
const statusConfig = {
  'development': { 
    label: 'In Development', 
    color: 'from-orange-500 to-yellow-500',
    textColor: 'text-orange-300',
    borderColor: 'border-orange-500/30',
    icon: FaClock
  },
  'under-development': { 
    label: 'Under Development', 
    color: 'from-red-500 to-pink-500',
    textColor: 'text-red-300',
    borderColor: 'border-red-500/30',
    icon: FaClock
  },
  'frontend-only': { 
    label: 'Frontend Only', 
    color: 'from-blue-500 to-cyan-500',
    textColor: 'text-blue-300',
    borderColor: 'border-blue-500/30',
    icon: FaEye
  }
} as const;

interface TechBadgeProps {
  tech: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => {
  const techInfo = techIcons[tech as TechStackKey];
  const IconComponent = techInfo?.icon;
  
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30 backdrop-blur-sm hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300">
      {IconComponent && <IconComponent className="w-3 h-3" style={{ color: techInfo.color }} />}
      {tech}
    </span>
  );
};

interface StatusBadgeProps {
  status: 'development' | 'under-development' | 'frontend-only';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const config = statusConfig[status];
  const IconComponent = config.icon;
  
  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-gradient-to-r ${config.color} text-white rounded-full shadow-lg`}>
      <IconComponent className="w-3 h-3" />
      {config.label}
    </div>
  );
};

interface CreditsBadgeProps {
  designedBy?: string;
}

const CreditsBadge: React.FC<CreditsBadgeProps> = ({ designedBy }) => {
  // Only show credits badge if there's a designer to credit
  if (!designedBy) return null;
  
  return (
    <div className="flex flex-wrap gap-2 text-xs">
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
        <FaPalette className="w-3 h-3" />
        <span className="text-gray-300">Design by:</span>
        <span className="font-medium text-purple-200">{designedBy}</span>
      </div>
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
        <FaCode className="w-3 h-3" />
        <span className="text-gray-300">Programming by:</span>
        <span className="font-medium text-emerald-200">Me</span>
      </div>
    </div>
  );
};

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'WordPress' | 'Next.js' | 'React' | 'All' | 'GoHighLevel';
  techStack: string[];
  status?: 'development' | 'under-development' | 'frontend-only';
  designedBy?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  image, 
  techStack,
  status,
  designedBy,
  liveUrl, 
  githubUrl,
  featured = false 
}) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
    className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 ${
      featured ? 'md:col-span-2' : ''
    }`}
  >
    {/* Featured Badge */}
    {featured && (
      <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full">
        FEATURED
      </div>
    )}
    
    {/* Status Badge - Only shown if status exists */}
    {status && (
      <div className={`absolute ${featured ? 'top-4 right-4' : 'top-4 right-4'} z-20`}>
        <StatusBadge status={status} />
      </div>
    )}
    
    {/* Gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* Project Image */}
    <div className="relative h-48 sm:h-56 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        style={{ objectPosition: 'top center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      
      {/* Action Buttons */}
      <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-blue-500/90 hover:bg-blue-500 text-white rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg"
            title="View Live Site"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-gray-700/90 hover:bg-gray-700 text-white rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg"
            title="View Source Code"
          >
            <FaGithub className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
    
    {/* Project Content */}
    <div className="relative z-10 p-6">
      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-3">
        {title}
      </h3>
      
      {/* Credits - Only shown if designer is specified */}
      {designedBy && (
        <div className="mb-4">
          <CreditsBadge designedBy={designedBy} />
        </div>
      )}
      
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <TechBadge key={index} tech={tech} />
        ))}
      </div>
    </div>
    
    {/* Decorative elements */}
    <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </motion.div>
);

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
  const filters = ['All', 'WordPress', 'Next.js', 'GoHighLevel'];
  
  // Updated projects data with proper credits handling
  const projects: ProjectProps[] = [

         {
      id: 150,
      title: "Innovative Mechanical Concepts",
      description: "A modern blog platform with content management, SEO optimization, and social sharing capabilities.",
      image: "/projects/wordpress/insight.png",
      category: "WordPress",
      techStack: ["Wordpress", "Elementor"],
      liveUrl: "https://www.innovative-mech.com/",
      designedBy: "Technodream Web Designs"
    },



     {
      id: 8,
      title: "Hometown Pediatric Dermatology",
      description: "A modern blog platform with content management, SEO optimization, and social sharing capabilities.",
      image: "/projects/wordpress/hometown.png",
      category: "WordPress",
      techStack: ["Wordpress", "Elementor"],
      liveUrl: "https://beta11.technodreamcenter.com/hometownpediatricdermatology.com/",
      designedBy: "Mercury Construction , Technodream Web Designs"
    },

    {
      id: 21,
      title: "EAGLE INVESTIGATIONS GROUP",
      description: "A modern blog platform with content management, SEO optimization, and social sharing capabilities.",
      image: "/projects/wordpress/eag.png",
      category: "WordPress",
      techStack: ["Wordpress", "Elementor"],
      liveUrl: "https://eagleinvestigationsgroup.com/",
      designedBy: "Technodream Web Designs"
    },

     {
      id: 151,
      title: " Pacific Paradise Estates",
      description: "A modern blog platform with content management, SEO optimization, and social sharing capabilities.",
      image: "/projects/wordpress/aloha.png",
      category: "WordPress",
      techStack: ["Wordpress", "Elementor"],
      liveUrl: "https://beta11.technodreamcenter.com/alohamichi.com/",
      designedBy: "Technodream Web Designs"
    },

    {
      id: 22,
      title: "TNC FOUNDATION",
      description: "A modern blog platform with content management, SEO optimization, and social sharing capabilities.",
      image: "/projects/wordpress/tnc.png",
      category: "WordPress",
      techStack: ["Wordpress", "Elementor"],
      liveUrl: "https://tncfoundations.org/",
      designedBy: "Technodream Web Designs"
    },
    {
      id: 23  ,
      title: " Lee Midtown Salon  ",
      description: "A modern blog platform with content management, SEO optimization, and social sharing capabilities.",
      image: "/projects/wordpress/lee.png",
      category: "WordPress",
      techStack: ["Wordpress", "Elementor"],
      liveUrl: "https://leemidtownsalon.com/ ",
      designedBy: "Technodream Web Designs"
    },

      {
      id: 24  ,
      title: "GS Benchmark Real Estate and Property Management",
      description: "A modern blog platform with content management, SEO optimization, and social sharing capabilities.",
      image: "/projects/wordpress/gs.png",
      category: "WordPress",  
      techStack: ["Wordpress", "Elementor"],
      liveUrl: "https://beta11.technodreamcenter.com/gsbenchmark.com",
      designedBy: "Technodream Web Designs"
    },

    {
      id: 25  ,
      title: "Aggressive Excavation Inc",
      description: "A modern blog platform with content management, SEO optimization, and social sharing capabilities.",
      image: "/projects/wordpress/aggressive.png",
      category: "WordPress",  
      techStack: ["Wordpress", "Elementor"],
      liveUrl: "https://aggressiveexcavationinc.com/",
      designedBy: "Technodream Web Designs"
    },


    {
      id: 14,
      title: "The Myo Center",
      description: "A modern blog platform with content management, SEO optimization, and social sharing capabilities.",
      image: "/projects/myo.png",
      category: "GoHighLevel",
      techStack: ["GoHighLevel"],
      liveUrl: "https://themyocenter.com/",
      designedBy: "Technodream Web Designs"
    },  

     {
      id: 16,
      title: "Archer properties",
      description: "A modern blog platform with content management, SEO optimization, and social sharing capabilities.",
      image: "/projects/archer.png",
      category: "WordPress",
      techStack: ["Wordpress", "Elementor"],
      liveUrl: "https://archerpropertyservices.com/",
      designedBy: "Technodream Web Designs"
    },  



    // {
    //   id: 1,
    //   title: "Project Management App",
    //   description: "A creative portfolio website showcasing modern design principles with smooth animations and interactive elements.",
    //   image: "/projects/nextJS/project-manager.png",
    //   category: "Next.js",
    //   techStack: ["Next.js", "Tailwind CSS", "MongoDB"],
    //   liveUrl: "https://cly-project-manager.netlify.app/",
    //   githubUrl: "https://example.com",
    //   featured: true
    // },
    {
      id: 2,
      title: "BDN Marketplace",
      description: "A modern e-commerce admin dashboard built with Next.js and TypeScript. Features real-time analytics, inventory management, and responsive design.",
      image: "/projects/nextJS/bdn.png",
      category: "Next.js",
      techStack: ["Next.js", "Tailwind CSS", "MongoDB"],
      liveUrl: "https://bdn-commerce.vercel.app/",
      status: "development",

    },
    {
      id: 3,
      title: "Librify",
      description: "A professional corporate website built with WordPress, featuring custom themes and advanced functionality.",
      image: "/projects/nextJS/libirfy-client.png",
      category: "Next.js",
      techStack: ["Next.js", "Tailwind CSS", "Postgres", "Typescript"],
      // liveUrl: "https://js-library-blush.vercel.app/"
    },
    {
      id: 4,
      title: "Librify - Admin Dashboard",
      description: "A professional corporate website built with WordPress, featuring custom themes and advanced functionality.",
      image: "/projects/nextJS/librify-dashboar.png",
      category: "Next.js",
      techStack: ["Next.js", "Tailwind CSS", "Postgres", "Typescript"],
      // designedBy: "Personal Project"
    },
    {
      id: 5,
      title: "PropertyHive",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/projects/nextJS/property-hive.png",
      category: "Next.js",
      techStack: ["NextJS", "Tailwind CSS", 'MongoDB'],
      liveUrl: "https://property-hive-ten.vercel.app/",
    },
    {
      id: 6,
      title: "Clyde Sports",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/projects/nextJS/clyde-sports.png",
      category: "Next.js",
      techStack: ["React", "Tailwind CSS"],
      liveUrl: "https://clyde-sports.netlify.app/",
      status: "frontend-only",

    },
    {
      id: 7,
      title: "Clynime",
      description: "A modern blog platform with content management, SEO optimization, and social sharing capabilities.",
      image: "/projects/nextJS/clynime.png",
      category: "Next.js",
      techStack: ["Next.js", "Tailwind CSS"],
      liveUrl: "https://clynime.vercel.app/",

    },

       {
      id: 9,
      title: "VDS",
      description: "A modern blog platform with content management, SEO optimization, and social sharing capabilities.",
      image: "/projects/wordpress/vds.png",
      category: "WordPress",
      techStack: ["Wordpress", "Elementor"],
      liveUrl: "https://vds.pro",
      designedBy: "Technodream Web Designs"
    },
    
       {
      id: 10,
      title: "T&R Recovery Group",
      description: "A modern blog platform with content management, SEO optimization, and social sharing capabilities.",
      image: "/projects/wordpress/tr.png",
      category: "WordPress",
      techStack: ["Wordpress", "Kadence"],
      liveUrl: "https://trrecoverygroup.com/",
      designedBy: "Technodream Web Designs"
    },


       {
      id: 11,
      title: "Hydra landing Page",
      description: "A modern blog platform with content management, SEO optimization, and social sharing capabilities.",
      image: "/projects/web6.png",
      category: "Next.js",
      techStack: ["NextJS", "Tailwind CSS"],
      liveUrl: "https://hydra-livid.vercel.app/",
      designedBy: "https://www.figma.com/@zinefalouti"
    },

         {
      id: 12,
      title: "2rism landing Page",
      description: "A modern blog platform with content management, SEO optimization, and social sharing capabilities.",
      image: "/projects/web7.png",
      category: "Next.js",
      techStack: ["NextJS", "Tailwind CSS"],
      liveUrl: "https://cly-2rism.vercel.app/",
      designedBy: "https://www.figma.com/@vicomarcellus"
    },

    {
      id: 13,
      title: "Baby Stream ",
      description: "A modern blog platform with content management, SEO optimization, and social sharing capabilities.",
      image: "/projects/wordpress/babysoft.png",
      category: "WordPress",
      techStack: ["Wordpress", "Elementor"],
      liveUrl: "https://babysoftsteamcarpetandtilecleaning.com/",
      designedBy: "Technodream Web Designs"
    },


  ];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-60 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="projects">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/3 to-transparent rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          // initial={{ opacity: 0, y: 20 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in modern web development
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>
        
        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No projects found for this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;