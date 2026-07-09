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

  // Track if we are on a touch device to disable complex 3D hover effects if needed
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Only disable if it's explicitly a touch-only device (no hover support)
    const matchMedia = window.matchMedia || function () { return { matches: false } };
    const hasHover = matchMedia('(hover: hover)').matches;
    setIsTouchDevice(!hasHover && ('ontouchstart' in window || navigator.maxTouchPoints > 0));
  }, []);

  // Motion values for mouse coordinates (-1 to 1)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for buttery transitions
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Transform mouse position into rotation angles
  // Max rotation is 15 degrees
  const rotateX = useTransform(smoothY, [-1, 1], [15, -15]);
  const rotateY = useTransform(smoothX, [-1, 1], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    // Calculate mouse position relative to the center of the container
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalize to range [-1, 1]
    const normalizedX = (e.clientX - centerX) / (rect.width / 2);
    const normalizedY = (e.clientY - centerY) / (rect.height / 2);

    // Clamp values just in case
    x.set(Math.max(-1, Math.min(1, normalizedX)));
    y.set(Math.max(-1, Math.min(1, normalizedY)));
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setIsHovered(false);
    // Smoothly return to center
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
    <div
      className="relative flex justify-center items-center w-full h-[350px] sm:h-[450px] lg:h-[450px] max-w-sm sm:max-w-md mx-auto lg:max-w-none perspective-1000 z-10"
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
        {/* Layer 1: Ambient Core (Background Glow) */}
        <div
          className="absolute inset-0 bg-accent/20 blur-[80px] rounded-full w-3/4 h-3/4 m-auto transition-opacity duration-500"
          style={{ opacity: isHovered ? 0.8 : 0.4, transform: "translateZ(-50px)" }}
        />

        {/* Layer 2: Orbital Rings (Rotating Elements) */}
        <motion.div
          className="absolute inset-0 m-auto w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-dashed border-accent/40"
          style={{ transform: "translateZ(-20px)" }}
          animate={{ rotate: [0, 360], scale: isHovered ? 1.05 : 1 }}
          transition={{ rotate: { repeat: Infinity, duration: 25, ease: "linear" }, scale: { duration: 0.4 } }}
        />
        <motion.div
          className="absolute inset-0 m-auto w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-accent/10 shadow-[0_0_15px_rgba(var(--accent),0.2)_inset]"
          style={{ transform: "translateZ(-30px)" }}
          animate={{ rotate: [0, -360], scale: isHovered ? 1.02 : 1 }}
          transition={{ rotate: { repeat: Infinity, duration: 35, ease: "linear" }, scale: { duration: 0.4 } }}
        />

        {/* Layer 3: Floating Particles */}
        <motion.div
          className="absolute top-10 left-10 text-accent/60 font-mono text-sm sm:text-base font-bold pointer-events-none"
          style={{ transform: "translateZ(40px)" }}
          animate={{ y: [0, -15, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          {"</>"}
        </motion.div>
        <motion.div
          className="absolute bottom-16 right-8 text-accent/60 font-mono text-xl sm:text-2xl font-bold pointer-events-none"
          style={{ transform: "translateZ(60px)" }}
          animate={{ y: [0, 15, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        >
          {"{ }"}
        </motion.div>

        {/* Layer 4: The Profile Image Holographic Card */}
        <motion.div
          className="relative w-[280px] sm:w-[320px] h-[350px] sm:h-[400px] z-10"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="w-full h-full relative rounded-3xl border border-accent/20 bg-card/60 backdrop-blur-md p-3 shadow-[0_0_30px_rgba(var(--accent),0.15)] overflow-hidden group">
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 z-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-40" />

            {/* Card inner frame */}
            <div className="w-full h-full relative rounded-2xl overflow-hidden bg-background/50">
              <Image
                src={mounted ? getThemeImage(theme === "system" ? systemTheme : theme) : personalInfo.profileImage}
                alt={personalInfo.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center scale-[1.05] transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                priority
              />
              {/* Dark subtle gradient at the bottom of the card for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10 pointer-events-none" />
            </div>

            {/* Tech UI decorative lines on card corners */}
            <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-accent/40 pointer-events-none" />
            <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-accent/40 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-accent/40 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-accent/40 pointer-events-none" />
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
