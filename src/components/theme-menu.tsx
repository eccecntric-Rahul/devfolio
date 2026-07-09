"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const themes = [
  { id: "light", label: "Light", icon: "☀️" },
  { id: "dark", label: "Dark", icon: "🌙" },
  { id: "emergent", label: "Emergent", icon: "⚡" },
  { id: "sunset", label: "Sunset", icon: "🌅" },
  { id: "nord", label: "Nord", icon: "❄️" },
];

export function ThemeMenu() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleThemeChange = (themeId: string) => {
    document.documentElement.classList.add("theme-transitioning");
    setTheme(themeId);
    setIsOpen(false);
    
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning");
    }, 300);
  };

  if (!mounted) {
    return (
      <button
        className="h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center opacity-50 cursor-default"
        aria-hidden="true"
      >
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  const currentTheme = themes.find((t) => t.id === theme) || themes[1]; // fallback to dark

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-border/50 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Change theme"
      >
        <span className="text-lg leading-none" aria-hidden="true">
          {currentTheme.icon}
        </span>
        <span className="sr-only">Current theme: {currentTheme.label}. Click to select a new theme.</span>
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 top-full mt-2 w-44 bg-card/90 backdrop-blur-xl border border-border rounded-xl shadow-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-200 origin-top-right"
          role="menu"
          aria-orientation="vertical"
        >
          {themes.map((t) => {
            const isActive = theme === t.id;
            return (
              <button
                key={t.id}
                role="menuitem"
                tabIndex={0}
                onClick={() => handleThemeChange(t.id)}
                className={`cursor-pointer w-full text-left flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? "bg-accent text-white" 
                    : "text-foreground hover:bg-border/50"
                }`}
              >
                <span className="mr-3 text-base leading-none">{t.icon}</span>
                {t.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
