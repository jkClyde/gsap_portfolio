'use client';
import { motion } from "framer-motion";
import { 
  FaNode, 
  FaReact, 
  FaAws, 
  FaDocker, 
  FaFigma, 
  FaGitAlt
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiRedux, 
  SiFirebase, 
  SiGraphql, 
  SiPython
} from "react-icons/si";

// Skill categories with their respective skills
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB", level: 90 },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: 85 },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 80 },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 95 },
      { name: "Redux", icon: SiRedux, color: "#764ABC", level: 75 },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 90 },
      { name: "Figma", icon: FaFigma, color: "#F24E1E", level: 70 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNode, color: "#339933", level: 85 },
      { name: "GraphQL", icon: SiGraphql, color: "#E535AB", level: 75 },
      { name: "Python", icon: SiPython, color: "#3776AB", level: 70 },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 80 },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", level: 75 }
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: FaDocker, color: "#2496ED", level: 70 },
      { name: "AWS", icon: FaAws, color: "#FF9900", level: 65 },
      { name: "Git", icon: FaGitAlt, color: "#F05032", level: 90 },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: 80 }
    ]
  }
];

export default function Skills() {
  return (
    <section className="py-32 relative" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20"
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
              className="bg-surface border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all"
            >
              <h3 className="text-2xl font-bold text-content mb-6 relative">
                {category.title}
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full absolute -bottom-2 left-0" />
              </h3>

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
                        <span className="text-content font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-content/60">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 * j }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-tertiary"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-16 gap-6"
        >
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-tertiary text-white font-medium hover:opacity-90 transition-opacity">
            Download Resume
          </button>
          <button className="relative px-8 py-3 rounded-full bg-surface border border-white/10 hover:border-primary/30 transition-all group">
            <span className="text-content transition-colors relative z-[1]">
              Contact Me
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}