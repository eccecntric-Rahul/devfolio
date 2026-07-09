"use client";

import React from "react";
import { FaDownload, FaFilePdf, FaCheckCircle } from "react-icons/fa";
import { personalInfo } from "@/data/resume-data";

export function ResumeSection() {
  return (
    <section id="resume" className="w-full py-16 md:py-24 animate-fade-in-up delay-500 scroll-mt-header">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-border pb-8">
        <div>
          <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
            <FaFilePdf className="text-3xl text-accent" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Professional Profile
            </h2>
          </div>
          <p className="text-muted text-center md:text-left text-sm md:text-base">
            Get a high-level overview of my background or download the full print-ready resume.
          </p>
        </div>

        {/* Download PDF CTA */}
        <div className="flex justify-center shrink-0">
          <a
            href={personalInfo.resumePdf}
            download="Rahul_Kumar_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-accent hover:bg-accent/90 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] active:scale-95 group text-sm md:text-base"
          >
            <FaDownload className="text-base group-hover:translate-y-0.5 transition-transform" />
            Download Resume PDF
          </a>
        </div>
      </div>

      {/* Summary Card */}
      <div className="bg-card glow-card border border-border p-8 md:p-12 rounded-2xl relative overflow-hidden group">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-700"></div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-3 relative z-10">
          <FaCheckCircle className="text-accent text-2xl" />
          At a Glance
        </h3>
        <p className="text-muted text-base md:text-lg leading-relaxed relative z-10 font-medium">
          {personalInfo.summary}
        </p>
      </div>
    </section>
  );
}
