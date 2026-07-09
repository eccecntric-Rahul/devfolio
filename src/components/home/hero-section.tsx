"use client";

import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { personalInfo, skillsWithLevels } from "@/data/resume-data";
import { HeroImage } from "./hero-image";
import { motion, Variants } from "framer-motion";

export function HeroSection() {
  const [firstName, ...lastNames] = personalInfo.name.split(" ");
  const lastName = lastNames.join(" ");

  // Extract top skills for the ticker
  const allSkills = [...skillsWithLevels.Frontend, ...skillsWithLevels["Backend & Database"]];
  const tickerItems = [...allSkills, ...allSkills, ...allSkills]; // triple for seamless loop

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <section className="w-full relative flex flex-col pt-4 md:pt-12 justify-center">
      <motion.div 
        className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10 pb-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Label */}
          <motion.p 
            variants={itemVariants} 
            className="text-accent text-xs md:text-sm font-bold mb-3 tracking-widest uppercase"
          >
            - Introducing
          </motion.p>
          
          {/* Name */}
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-4"
          >
            {firstName} <span className="text-accent">{lastName}.</span>
          </motion.h1>
          
          {/* Tagline */}
          <motion.h2 
            variants={itemVariants} 
            className="text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold mb-6 leading-snug text-foreground/90"
          >
            {personalInfo.tagline.split(",")[0]}, <span className="text-muted/80">{personalInfo.tagline.split(",").slice(1).join(",").trim()}</span>
          </motion.h2>
          
          {/* Bio */}
          <motion.p 
            variants={itemVariants} 
            className="text-muted text-sm md:text-base lg:text-lg mb-8 leading-relaxed max-w-xl"
          >
            I'm a passionate developer with {personalInfo.yearsOfExperience} years of experience. From engineering real-time trading dashboards to delivering scalable mobile apps, I build robust, high-performance solutions.
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto"
          >
            <a 
              href={personalInfo.resumePdf} 
              target="_blank" 
              rel="noreferrer" 
              className="cursor-pointer bg-accent text-white font-bold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(var(--accent),0.25)] hover:shadow-[0_0_30px_rgba(var(--accent),0.4)] hover:bg-accent/90 transition-all duration-300 text-center text-sm md:text-base"
            >
              Download Resume
            </a>
            <Link 
              href="#experience" 
              className="cursor-pointer border border-border bg-card/30 hover:bg-card/60 backdrop-blur-sm text-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 text-center flex items-center justify-center gap-2 group text-sm md:text-base"
            >
              View Experience 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>

          {/* Socials as Glassmorphic Badges */}
          <motion.div 
            variants={itemVariants} 
            className="flex gap-4 justify-center lg:justify-start w-full"
          >
            <a 
              href={personalInfo.linkedIn} 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn" 
              className="cursor-pointer h-12 w-12 rounded-full border border-border bg-card/30 flex items-center justify-center text-muted hover:text-foreground hover:border-accent/40 hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(var(--accent),0.2)] hover:scale-110 transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub" 
              className="cursor-pointer h-12 w-12 rounded-full border border-border bg-card/30 flex items-center justify-center text-muted hover:text-foreground hover:border-accent/40 hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(var(--accent),0.2)] hover:scale-110 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              aria-label="Email" 
              className="cursor-pointer h-12 w-12 rounded-full border border-border bg-card/30 flex items-center justify-center text-muted hover:text-foreground hover:border-accent/40 hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(var(--accent),0.2)] hover:scale-110 transition-all duration-300"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Visual Portal */}
        <motion.div 
          variants={itemVariants} 
          className="lg:col-span-5 flex justify-center items-center relative w-full lg:order-2"
        >
          <HeroImage />
        </motion.div>
      </motion.div>

      {/* Infinite Tech Ticker */}
      <div className="relative w-[100vw] left-1/2 -translate-x-1/2 overflow-hidden border-y border-border/40 bg-card/30 backdrop-blur-sm py-3 my-12 lg:my-20 z-0 flex whitespace-nowrap">
        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {tickerItems.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-muted/80 font-mono text-sm uppercase tracking-wider font-semibold">{skill.name}</span>
              <span className="text-accent/40 text-xs">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
