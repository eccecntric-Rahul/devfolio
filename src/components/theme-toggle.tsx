"use client";

import * as React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card hover:border-accent hover:text-accent transition-colors"
      aria-label="Toggle theme"
    >
      {mounted && resolvedTheme === "dark" ? (
        <FaSun className="h-5 w-5 transition-all" />
      ) : (
        <FaMoon className="h-5 w-5 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
