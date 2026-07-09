import React from "react";
import Link from "next/link";
import { personalInfo } from "@/data/resume-data";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaBriefcase, FaClock, FaLaptop, FaDownload } from "react-icons/fa";

export function RecruiterInfoSection() {
  return (
    <section id="about-me" className="w-full mt-10 md:mt-0 mb-12 animate-fade-in-up delay-400">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl" role="img" aria-label="clipboard">📋</span>
        <h2 className="text-2xl font-bold text-foreground">Quick Info for Recruiters</h2>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:bg-border/30 transition-colors duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          
          <div className="flex items-start gap-4">
            <div className="mt-1 text-accent text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="text-sm text-muted font-medium uppercase tracking-wider mb-1">Location</p>
              <p className="text-base font-semibold text-foreground">{personalInfo.location}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 text-accent text-xl">
              <FaBriefcase />
            </div>
            <div>
              <p className="text-sm text-muted font-medium uppercase tracking-wider mb-1">Current Role</p>
              <p className="text-base font-semibold text-foreground">SDE-2 at {personalInfo.currentCompany}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 text-accent text-xl">
              <FaClock />
            </div>
            <div>
              <p className="text-sm text-muted font-medium uppercase tracking-wider mb-1">Availability</p>
              <p className="text-base font-semibold text-foreground">{personalInfo.availability} &middot; {personalInfo.noticePeriod}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 text-accent text-xl">
              <FaLaptop />
            </div>
            <div>
              <p className="text-sm text-muted font-medium uppercase tracking-wider mb-1">Work Mode</p>
              <p className="text-base font-semibold text-foreground">{personalInfo.workMode}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 text-accent text-xl">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-sm text-muted font-medium uppercase tracking-wider mb-1">Email</p>
              <a href={`mailto:${personalInfo.email}`} className="text-base font-semibold text-foreground hover:text-accent transition-colors">
                {personalInfo.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 text-accent text-xl">
              <FaPhone />
            </div>
            <div>
              <p className="text-sm text-muted font-medium uppercase tracking-wider mb-1">Phone</p>
              <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-base font-semibold text-foreground hover:text-accent transition-colors">
                {personalInfo.phone}
              </a>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
          <a 
            href={personalInfo.resumePdf} 
            download="Rahul_Kumar_Resume.pdf"
            className="flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-bold hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
          >
            <FaDownload />
            Download Resume
          </a>
          <Link 
            href="/contact"
            className="flex items-center justify-center bg-transparent border border-accent text-accent px-6 py-3 rounded-xl font-bold hover:bg-accent hover:text-white transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
