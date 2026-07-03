import React from "react";

export function Footer() {
  return (
    <footer className="w-full py-8 border-t border-border text-center text-muted text-sm flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in-up delay-700">
      <p>© {new Date().getFullYear()} Rahul Kumar. All rights reserved.</p>
      <div className="flex space-x-6">
        <a
          href="https://linkedin.com/in/rahulkumar"
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/TechRahul"
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent transition-colors"
        >
          GitHub
        </a>
        <a
          href="mailto:rk2655415@gmail.com"
          className="hover:text-accent transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
