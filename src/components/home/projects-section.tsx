"use client";

import { FaFolderOpen, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { projects } from "@/data/resume-data";
import { motion, Variants } from "framer-motion";

export function ProjectsSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
  };

  return (
    <section id="projects" className="w-full py-16 md:py-24 scroll-mt-header">
      <motion.div 
        className="flex flex-col sm:flex-row items-center justify-between sm:items-end gap-4 mb-10 md:mb-16 text-center sm:text-left w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex items-center sm:items-end gap-4">
          <FaFolderOpen className="text-3xl md:text-4xl text-accent hidden sm:block mb-1" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">Key Projects</h2>
        </div>
        
        {/* Mobile Swipe Indicator */}
        <div className="flex md:hidden items-center gap-2 text-accent/80 text-sm font-semibold tracking-wider uppercase animate-pulse">
          Swipe <FaArrowRight className="text-xs" />
        </div>
      </motion.div>
      
      <motion.div 
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((proj, idx) => (
          <motion.div 
            key={idx} 
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="min-w-[85vw] sm:min-w-[400px] snap-center md:min-w-0 bg-card glow-card border border-border p-6 md:p-8 rounded-2xl transition-shadow duration-300 group flex flex-col h-full relative overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(var(--accent),0.15)]"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            
            <h3 className="text-2xl font-bold text-foreground mb-2 flex justify-between items-start">
              {proj.name}
              {proj.link && (
                <a href={proj.link} target="_blank" rel="noreferrer" aria-label={`Link to ${proj.name}`}>
                  <FaExternalLinkAlt className="text-sm text-foreground/50 hover:text-accent transition-colors mt-1" />
                </a>
              )}
            </h3>
            
            <p className="text-accent text-sm font-medium mb-6">{proj.subtitle}</p>
            
            <ul className="list-disc list-outside ml-4 text-muted space-y-2 text-sm flex-grow leading-relaxed">
              {proj.points.map((point, pIdx) => {
                const highlightedPoint = point.replace(
                  /(10K\+|50K\+|200K\+|90\+|4\.5\+|50\+|98\+|sub-2s|100\+)/g,
                  '<strong class="text-foreground font-semibold">$1</strong>'
                );
                return <li key={pIdx} dangerouslySetInnerHTML={{ __html: highlightedPoint }} />;
              })}
            </ul>
            
            <div className="mt-6 pt-4 border-t border-border/50">
              <p className="text-xs text-muted/80 font-medium uppercase tracking-wider leading-relaxed">{proj.tech}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
