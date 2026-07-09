"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeMenu } from "@/components/theme-menu";
import { Logo } from "@/components/logo";
import { FaBars, FaTimes } from "react-icons/fa";

export function Header() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
    
    return `nav-link ${isActive ? "active" : ""}`;
  };

  const navLinks = [
    { name: "Skills", href: "/home#skills", path: "/home", hash: "#skills" },
    { name: "Experience", href: "/home#experience", path: "/home", hash: "#experience" },
    { name: "Projects", href: "/home#projects", path: "/home", hash: "#projects" },
    { name: "Resume", href: "/home#resume", path: "/home", hash: "#resume" },
    { name: "Contact", href: "/contact", path: "/contact", hash: "" },
  ];

  return (
    <>
      <header 
        className={`w-full flex justify-between items-center z-50 shrink-0 sticky top-0 transition-all duration-300 ${
          isScrolled ? "header-sticky py-3 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto" : "py-6 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center hover:scale-105 transition-all duration-300 cursor-pointer shrink-0">
          <Logo className="w-12 h-12" />
        </Link>

        {/* Navigation & Theme Toggle */}
        <div className="flex items-center gap-6 sm:gap-8 md:gap-12">
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 lg:space-x-12 text-base lg:text-lg font-medium text-muted">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                onClick={() => link.hash && setActiveHash(link.hash)} 
                className={getLinkClass(link.path, link.hash)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <ThemeMenu />
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-foreground text-2xl focus:outline-none"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex flex-col md:hidden animate-in fade-in duration-200">
          <div className="flex justify-end p-6">
            <button 
              className="text-foreground text-3xl focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 space-y-8 text-2xl font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  if (link.hash) setActiveHash(link.hash);
                  setMobileMenuOpen(false);
                }}
                className={getLinkClass(link.path, link.hash)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
