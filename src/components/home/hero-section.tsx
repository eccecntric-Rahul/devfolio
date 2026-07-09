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
    <section className="w-full relative flex flex-col pt-6 md:pt-2 min-h-[90vh]">
      <motion.div 
        className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center z-10 pb-24 lg:pb-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column: Name & Socials */}
        <div className="flex flex-col items-center lg:items-start order-2 lg:order-1 text-center lg:text-left">
          <motion.h1 variants={itemVariants} className="text-6xl sm:text-7xl lg:text-[5rem] xl:text-[6.5rem] font-extrabold leading-[1.05] tracking-tight mb-2">
            {firstName} <br className="hidden lg:block" /> {lastName}.
          </motion.h1>
          <motion.div variants={itemVariants} className="w-16 md:w-24 h-1.5 md:h-2 bg-accent mt-2 md:mt-3 mx-auto lg:mx-0 rounded-sm"></motion.div>

          <motion.div variants={itemVariants} className="flex space-x-6 mt-8 md:mt-10 text-xl md:text-2xl text-muted justify-center lg:justify-start w-full">
            <a href={personalInfo.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground hover:scale-110 transition-all duration-300">
              <FaLinkedinIn />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground hover:scale-110 transition-all duration-300">
              <FaGithub />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="hover:text-foreground hover:scale-110 transition-all duration-300">
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        {/* Center Column: Image */}
        <motion.div variants={itemVariants} className="flex justify-center items-center order-1 lg:order-2 relative w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none">
          <HeroImage />
        </motion.div>

        {/* Right Column: Intro */}
        <div className="flex flex-col items-center lg:items-start order-3 lg:order-3 text-center lg:text-left mt-8 lg:mt-0">
          <motion.p variants={itemVariants} className="text-muted text-xs md:text-sm font-semibold mb-3 tracking-widest uppercase">- Introducing</motion.p>
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl lg:text-[2rem] font-semibold mb-4 leading-snug text-foreground">
            {personalInfo.tagline.split(",")[0]}, <br className="hidden xl:block" /> {personalInfo.tagline.split(",").slice(1).join(",").trim()}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted text-sm md:text-base lg:text-lg mb-6 leading-relaxed max-w-sm md:max-w-md mx-auto lg:mx-0">
            I'm a passionate developer with {personalInfo.yearsOfExperience} years of experience. From engineering real-time trading dashboards at {personalInfo.currentCompany.split(" ")[0]} to delivering scalable mobile apps, I build robust, high-performance solutions.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="#experience" className="text-accent font-bold text-base md:text-lg flex items-center hover:opacity-80 transition-opacity group">
              View Experience <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Infinite Tech Ticker */}
      <div className="absolute bottom-12 left-0 w-full overflow-hidden border-y border-border/40 bg-card/30 backdrop-blur-sm py-3 z-0 flex whitespace-nowrap">
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
