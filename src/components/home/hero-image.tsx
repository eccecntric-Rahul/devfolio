"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { personalInfo } from "@/data/resume-data";
import { useTheme } from "next-themes";

export function HeroImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
    const matchMedia = window.matchMedia || function () { return { matches: false } };
    const hasHover = matchMedia('(hover: hover)').matches;
    setIsTouchDevice(!hasHover && ('ontouchstart' in window || navigator.maxTouchPoints > 0));
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [-1, 1], [15, -15]);
  const rotateY = useTransform(smoothX, [-1, 1], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const normalizedX = (e.clientX - centerX) / (rect.width / 2);
    const normalizedY = (e.clientY - centerY) / (rect.height / 2);
    x.set(Math.max(-1, Math.min(1, normalizedX)));
    y.set(Math.max(-1, Math.min(1, normalizedY)));
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsHovered(true);
  };

  const getThemeImage = (currentTheme: string | undefined) => {
    switch (currentTheme) {
      case "emergent": return "/Emergent_Profile_1.png";
      case "sunset": return "/PurpleHoodie_Profile.png";
      case "nord": return "/WhiteHoodie_Profile.png";
      case "dark": return "/NavyBlueHoodie_Profile.png";
      case "light": return "/profile.PNG";
      default: return personalInfo.profileImage;
    }
  };

  return (
    <>
      {/* DESKTOP / TABLET HERO (Hidden on mobile) */}
      <div
        className="hidden lg:flex relative justify-center items-center w-full h-[450px] lg:max-w-none perspective-1000 z-10"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        style={{ perspective: "1000px" }}
      >
        <motion.div
          className="relative w-full h-full flex justify-center items-center transform-style-3d"
          style={{
            rotateX: isTouchDevice ? 0 : rotateX,
            rotateY: isTouchDevice ? 0 : rotateY,
            transformStyle: "preserve-3d"
          }}
        >
          {/* Layer 1: Ambient Core */}
          <div
            className="absolute inset-0 bg-accent/20 blur-[80px] rounded-full w-3/4 h-3/4 m-auto transition-opacity duration-500"
            style={{ opacity: isHovered ? 0.8 : 0.4, transform: "translateZ(-50px)" }}
          />

          {/* Layer 2: Orbital Rings */}
          <motion.div
            className="absolute inset-0 m-auto w-[360px] h-[360px] rounded-full border border-dashed border-accent/40"
            style={{ transform: "translateZ(-20px)" }}
            animate={{ rotate: [0, 360], scale: isHovered ? 1.05 : 1 }}
            transition={{ rotate: { repeat: Infinity, duration: 25, ease: "linear" }, scale: { duration: 0.4 } }}
          />
          <motion.div
            className="absolute inset-0 m-auto w-[420px] h-[420px] rounded-full border border-accent/10 shadow-[0_0_15px_rgba(var(--accent),0.2)_inset]"
            style={{ transform: "translateZ(-30px)" }}
            animate={{ rotate: [0, -360], scale: isHovered ? 1.02 : 1 }}
            transition={{ rotate: { repeat: Infinity, duration: 35, ease: "linear" }, scale: { duration: 0.4 } }}
          />

          {/* Layer 3: Floating Particles */}
          <motion.div
            className="absolute top-10 left-10 text-accent/60 font-mono text-base font-bold pointer-events-none"
            style={{ transform: "translateZ(40px)" }}
            animate={{ y: [0, -15, 0], opacity: [0.5, 0.8, 0.5] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            {"</>"}
          </motion.div>
          <motion.div
            className="absolute bottom-16 right-8 text-accent/60 font-mono text-2xl font-bold pointer-events-none"
            style={{ transform: "translateZ(60px)" }}
            animate={{ y: [0, 15, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          >
            {"{ }"}
          </motion.div>

          {/* Layer 4: The Profile Image Holographic Card */}
          <motion.div 
            className="relative w-[320px] h-[400px] z-10"
            style={{ transform: "translateZ(20px)" }}
            animate={isTouchDevice ? { y: [0, -15, 0] } : {}}
            transition={isTouchDevice ? { repeat: Infinity, duration: 4, ease: "easeInOut" } : {}}
          >
            <div className="w-full h-full relative rounded-3xl border border-accent/20 bg-card/60 backdrop-blur-md p-3 shadow-[0_0_30px_rgba(var(--accent),0.15)] overflow-hidden group">
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 z-20 pointer-events-none transition-opacity duration-500 ${!isTouchDevice ? 'opacity-0 group-hover:opacity-40' : ''}`} 
                animate={isTouchDevice ? { opacity: [0.1, 0.3, 0.1] } : {}}
                transition={isTouchDevice ? { repeat: Infinity, duration: 3, ease: "easeInOut" } : {}}
              />
              <div className="w-full h-full relative rounded-2xl overflow-hidden bg-background/50">
                <Image
                  src={mounted ? getThemeImage(theme === "system" ? systemTheme : theme) : personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover object-center scale-[1.05] transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10 pointer-events-none" />
              </div>
              <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-accent/40 pointer-events-none" />
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-accent/40 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-accent/40 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-accent/40 pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* MOBILE-ONLY OPTIMIZED HERO */}
      <div className="flex lg:hidden relative justify-center items-center w-full h-[350px] sm:h-[450px] max-w-sm sm:max-w-md mx-auto z-10 overflow-visible">
        
        {/* Hardware-accelerated glowing pulse (no heavy blur) */}
        <motion.div 
          className="absolute inset-0 bg-accent/20 rounded-full w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] m-auto"
          style={{ willChange: "transform, opacity" }}
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.95, 1.05, 0.95] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        
        {/* Floating particles (optimized with will-change) */}
        <motion.div
          className="absolute top-4 left-4 text-accent/80 font-mono text-sm font-bold pointer-events-none z-0"
          style={{ willChange: "transform, opacity" }}
          animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          {"</>"}
        </motion.div>
        <motion.div
          className="absolute bottom-8 right-2 text-accent/80 font-mono text-lg font-bold pointer-events-none z-0"
          style={{ willChange: "transform, opacity" }}
          animate={{ y: [0, 10, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
        >
          {"{ }"}
        </motion.div>

        {/* The hardware-accelerated floating card */}
        <motion.div 
          className="relative w-[260px] sm:w-[300px] h-[330px] sm:h-[380px] z-10"
          style={{ willChange: "transform" }}
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          {/* We drop the backdrop-blur and heavy 3D box-shadows for mobile performance */}
          <div className="w-full h-full relative rounded-3xl border-2 border-accent/40 bg-card/90 p-2 overflow-hidden shadow-xl shadow-accent/10">
            <div className="w-full h-full relative rounded-2xl overflow-hidden bg-background">
              <Image
                src={mounted ? getThemeImage(theme === "system" ? systemTheme : theme) : personalInfo.profileImage}
                alt={personalInfo.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center scale-[1.05]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10" />
            </div>

            {/* Tech UI decorative lines on card corners */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-accent/60 z-20 pointer-events-none" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-accent/60 z-20 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-accent/60 z-20 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-accent/60 z-20 pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </>
  );
}
