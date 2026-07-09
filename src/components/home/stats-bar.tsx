"use client";

import React, { useState, useEffect, useRef } from "react";
import { stats } from "@/data/resume-data";

export function StatsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animatedValues, setAnimatedValues] = useState<Record<number, string>>(
    stats.reduce((acc, _, idx) => ({ ...acc, [idx]: "0" }), {})
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    stats.forEach((stat, idx) => {
      // Parse numeric part and suffix
      const match = stat.value.match(/^([\d.]+)(.*)$/);
      if (!match) {
        setAnimatedValues(prev => ({ ...prev, [idx]: stat.value }));
        return;
      }

      const targetValue = parseFloat(match[1]);
      const suffix = match[2];
      const isDecimal = match[1].includes(".");
      const duration = 1500; // 1.5 seconds
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Use easeOutQuart for smooth deceleration
        const easeOut = 1 - Math.pow(1 - progress, 4);
        const currentVal = targetValue * easeOut;

        setAnimatedValues(prev => ({
          ...prev,
          [idx]: (isDecimal ? currentVal.toFixed(1) : Math.floor(currentVal).toString()) + suffix
        }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setAnimatedValues(prev => ({ ...prev, [idx]: stat.value }));
        }
      };

      requestAnimationFrame(animate);
    });
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="w-full py-8 md:py-12 animate-fade-in-up delay-500">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className={`text-center p-6 ${idx !== stats.length - 1 ? 'md:border-r md:border-border' : ''}`}
          >
            <div className="text-4xl md:text-5xl font-black text-accent mb-2">
              {animatedValues[idx] || "0"}
            </div>
            <div className="text-sm text-muted uppercase tracking-wider font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
