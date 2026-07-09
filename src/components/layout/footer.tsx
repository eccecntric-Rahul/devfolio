import React from "react";
import Link from "next/link";
import { personalInfo } from "@/data/resume-data";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full pt-16 pb-8 border-t border-border mt-20 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-accent/10 blur-[100px] pointer-events-none"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 relative z-10">
        {/* Left Col: Brand & CTA */}
        <div className="md:col-span-2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Have an idea? <br />
            <span className="text-accent">Let's build it together.</span>
          </h2>
          <p className="text-muted text-lg max-w-md mb-8">
            I'm currently {personalInfo.availability.toLowerCase()} and always looking for new challenges.
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center justify-center bg-foreground text-background font-semibold px-8 py-4 rounded-xl hover:bg-accent hover:text-white transition-all duration-300 shadow-xl shadow-transparent hover:shadow-accent/20 active:scale-95"
          >
            Say Hello 👋
          </a>
        </div>

        {/* Right Col: Quick Links & Socials */}
        <div className="flex flex-col md:items-end space-y-8">
          <div className="flex flex-col md:items-end space-y-3">
            <h4 className="text-foreground font-bold tracking-wider uppercase text-sm mb-2">Connect</h4>
            <div className="flex gap-4">
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted hover:text-white hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110"
              >
                <FaLinkedinIn className="text-lg" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted hover:text-white hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted hover:text-white hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110"
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end space-y-2 text-muted font-medium">
            <Link href="#experience" className="hover:text-accent transition-colors">Experience</Link>
            <Link href="#projects" className="hover:text-accent transition-colors">Projects</Link>
            <Link href="#resume" className="hover:text-accent transition-colors">Resume PDF</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-muted text-sm relative z-10">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p>Built with <span className="text-accent font-semibold">Next.js</span> & <span className="text-accent font-semibold">Tailwind CSS</span></p>
      </div>
    </footer>
  );
}
