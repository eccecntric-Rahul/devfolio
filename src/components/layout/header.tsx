"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";

export function Header() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    // Set initial hash on mount
    setActiveHash(window.location.hash);

    // Update on hash change
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const getLinkClass = (path: string, hash: string = "") => {
    let isActive = false;
    if (pathname === "/contact" && path === "/contact") {
      isActive = true;
    } else if (pathname === "/home" && path === "/home") {
      // If we are on home page, match the hash. 
      // If no hash is set in URL, default to first section (#skills)
      if (!activeHash && hash === "#skills") isActive = true;
      else if (activeHash === hash) isActive = true;
    }
    
    return `nav-link ${isActive ? "active" : ""} ${hash === "#skills" ? "hidden sm:block" : ""}`;
  };

  return (
    <header className="w-full flex justify-between items-center animate-fade-in-up z-20 shrink-0">
      {/* Logo */}
      <Link href="/" className="flex items-center justify-center hover:scale-105 transition-all duration-300 cursor-pointer shrink-0">
        <Logo className="w-12 h-12" />
      </Link>

      {/* Navigation & Theme Toggle */}
      <div className="flex items-center gap-6 sm:gap-8 md:gap-12">
        <nav className="flex space-x-6 sm:space-x-8 md:space-x-12 text-sm md:text-base lg:text-lg font-medium text-muted">
          <Link href="/home#skills" onClick={() => setActiveHash("#skills")} className={getLinkClass("/home", "#skills")}>Skills</Link>
          <Link href="/home#experience" onClick={() => setActiveHash("#experience")} className={getLinkClass("/home", "#experience")}>Experience</Link>
          <Link href="/home#projects" onClick={() => setActiveHash("#projects")} className={getLinkClass("/home", "#projects")}>Projects</Link>
          <Link href="/contact" className={getLinkClass("/contact")}>Contact</Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
