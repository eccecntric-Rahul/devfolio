"use client";

import { FaCode } from "react-icons/fa";
import { skillsWithLevels } from "@/data/resume-data";
import { motion, Variants } from "framer-motion";

export function SkillsSection() {
  const getLevelPercentage = (level: string) => {
    switch (level.toLowerCase()) {
      case "expert": return 95;
      case "advanced": return 80;
      case "intermediate": return 60;
      default: return 50;
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="skills" className="w-full py-16 md:py-24 scroll-mt-header">
      <motion.div 
        className="flex flex-col sm:flex-row items-center sm:items-end gap-4 mb-10 md:mb-16 text-center sm:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <FaCode className="text-3xl md:text-4xl text-accent hidden sm:block mb-1" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">Technical Arsenal</h2>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {Object.entries(skillsWithLevels).map(([category, skills]) => (
          <motion.div 
            key={category} 
            variants={itemVariants}
            className="bg-card glow-card border border-border p-6 md:p-8 rounded-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2 border-b border-border/50 pb-3">
              <span className="w-2.5 h-2.5 bg-accent rounded-full group-hover:shadow-[0_0_10px_rgba(var(--accent),0.8)] transition-shadow"></span> 
              {category}
            </h3>
            
            <div className="flex flex-col gap-5 flex-grow">
              {skills.map((skill) => {
                const percentage = getLevelPercentage(skill.level);
                return (
                  <div key={skill.name} className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-end">
                      <span className="text-foreground text-sm font-semibold">{skill.name}</span>
                      <span className="text-[10px] uppercase font-bold text-accent tracking-wider">{skill.level}</span>
                    </div>
                    <div className="w-full h-1.5 bg-border/50 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-accent rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
