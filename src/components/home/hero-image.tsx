"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { personalInfo } from "@/data/resume-data";

export function HeroImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track if we are on a touch device to disable complex 3D hover effects if needed
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Only disable if it's explicitly a touch-only device (no hover support)
    const matchMedia = window.matchMedia || function() { return { matches: false } };
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

        {/* Layer 4: The Profile Image */}
        <motion.div 
          className="relative w-full h-full flex justify-center items-center z-10"
          style={{ transform: "translateZ(20px)" }}
        >
          {/* We keep the mask-image logic for the nice bottom fade, but apply it to the wrapper */}
          <div className="relative w-full h-full hero-image-container flex justify-center items-center">
            <Image
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain object-center scale-[1.1] xl:scale-[1.15] origin-bottom pointer-events-none drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
