"use client";

import { useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { experiences } from "@/data/resume-data";
import { motion } from "framer-motion";

export function ExperienceSection() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpand = (idx: number) => {
    setExpanded(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section id="experience" className="w-full py-16 md:py-24 scroll-mt-header">
      <motion.div 
        className="flex flex-col sm:flex-row items-center sm:items-end gap-4 mb-16 text-center sm:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <FaBriefcase className="text-3xl md:text-4xl text-accent hidden sm:block mb-1" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">Professional Journey</h2>
      </motion.div>
      
      <div className="relative border-l-0 sm:border-l-2 border-border/60 pl-0 sm:pl-10 space-y-8 sm:space-y-12 md:space-y-16 ml-0 sm:ml-4">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx} 
            className="relative group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            {/* Timeline Node */}
            <motion.div 
              className="hidden sm:block absolute -left-[49px] top-1.5 w-5 h-5 rounded-full bg-background border-4 border-accent transition-all duration-300 group-hover:bg-accent group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(var(--accent),0.5)]"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", delay: (idx * 0.1) + 0.2 }}
            />
            
            <div className="bg-card glow-card border border-border p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-accent font-semibold text-sm md:text-base mt-1">
                    {exp.company} <span className="text-muted font-normal">| {exp.location}</span>
                  </div>
                </div>
                <span className={`${exp.isCurrent ? "text-accent bg-accent/10 border-accent/20" : "text-muted bg-border/50 border-border"} font-semibold px-4 py-1.5 rounded-full text-xs md:text-sm border whitespace-nowrap self-start mt-2 md:mt-0`}>
                  {exp.period}
                </span>
              </div>
              
              <ul className="list-disc list-outside ml-4 mt-6 text-muted space-y-3 text-sm md:text-base text-foreground/90 leading-relaxed">
                {exp.points.map((point, pIdx) => {
                  const isVisible = expanded[idx] || pIdx === 0;
                  // Highlight strong metrics or key phrases
                  const highlightedPoint = point.replace(
                    /(Architected|Engineered|Led|Reduced|Mentor|\d+%|10K\+|50K\+|25%|35%|30%|70%|100\+)/g,
                    '<strong class="text-foreground font-semibold">$1</strong>'
                  );
                  return (
                    <li 
                      key={pIdx} 
                      className={isVisible ? "block" : "hidden sm:block"}
                      dangerouslySetInnerHTML={{ __html: highlightedPoint }} 
                    />
                  );
                })}
              </ul>

              {exp.points.length > 1 && (
                <button 
                  onClick={() => toggleExpand(idx)}
                  className="sm:hidden mt-4 text-accent text-sm font-semibold flex items-center gap-1 hover:text-accent/80 transition-colors"
                >
                  {expanded[idx] ? "Read Less ▲" : "Read More ▼"}
                </button>
              )}
              
              <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap gap-2">
                {exp.highlights.map((tech, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono bg-background/50 border border-border/60 px-2 py-1 rounded text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
