'use client';
import { motion } from "framer-motion";
import { 
  FaNode, 
  FaReact, 
  FaWordpress,
  FaCss3Alt ,
  FaPhp 
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiWebflow,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB", level: 85 },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: 90 },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 85 },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 95 },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6", level: 95 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNode, color: "#339933", level: 70 },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 70 },
      { name: "PHP", icon: FaPhp, color: "#777BB4", level: 75 }
    ]
  },
  {
    title: "CMS & Website Builders",
    skills: [
      { name: "WordPress", icon: FaWordpress, color: "#21759B", level: 95 },
      { name: "Webflow", icon: SiWebflow, color: "#4353FF", level: 75 },
      { name: "GoHighLevel", icon: SiWebflow, color: "#FF5722", level: 80 }
    ]
  },
];

export default function Skills() {
  return (
    <section className="pb-32 pt-[15px]  md:pt-0 md:py-32 relative" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-[25px] md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-content mb-4 text-center">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full" />
        </motion.div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-6">
                  {category.skills.map((skill, j) => (
                    <motion.div 
                      key={j}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * j }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 * j }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}