import { FaBriefcase } from "react-icons/fa";

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-16 md:py-24 animate-fade-in-up delay-400">
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 mb-10 md:mb-16 text-center sm:text-left">
        <FaBriefcase className="text-3xl md:text-4xl text-accent hidden sm:block mb-1" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">Professional Experience</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Planify */}
        <div className="bg-card border border-border p-6 md:p-8 rounded-2xl hover:bg-border transition-all duration-300 backdrop-blur-sm group hover:-translate-y-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
              Sr. Software Developer (SDE-2)
            </h3>
            <span className="text-accent font-semibold bg-accent/10 px-3 py-1 rounded-full text-xs">June 2023 – Present</span>
          </div>
          <div className="text-accent font-semibold mb-4 text-sm md:text-base">Planify Capital Limited | Gurgaon, India</div>
          <ul className="list-disc list-outside ml-4 md:ml-6 text-muted space-y-2 text-sm md:text-base text-foreground/90">
            <li>
              <strong className="text-foreground">Architected the core Buy-Sell Dashboard</strong> for a high-traffic trading platform; integrated WebSockets for real-time bid updates, resulting in a <strong className="text-accent">20% increase in user conversion rates</strong>.
            </li>
            <li>
              Optimized UI performance by implementing FlashList and memoization techniques, reducing screen render times by 35% and achieving a consistent 60fps.
            </li>
            <li>
              Decreased overall app size by 25% by leveraging asset optimization and code-splitting for APK/IPA builds.
            </li>
            <li>
              Developed a Channel Partner Mini-App using a micro-frontend approach, improving initial load efficiency and modularity for 20+ feature modules.
            </li>
            <li>
              Manage end-to-end mobile release cycles on Google Play Store and Apple App Store, ensuring 99.9% crash-free sessions through rigorous debugging of WebView and navigation logic.
            </li>
            <li>
              Mentor junior developers through structured code reviews and technical documentation, fostering a culture of clean code and SOLID principles.
            </li>
          </ul>
        </div>
        {/* Salescode.ai */}
        <div className="bg-card border border-border p-6 md:p-8 rounded-2xl hover:bg-border transition-all duration-300 backdrop-blur-sm group hover:-translate-y-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
              Software Developer
            </h3>
            <span className="text-muted font-semibold bg-border px-3 py-1 rounded-full text-xs border border-border">
              July 2021 – June 2023
            </span>
          </div>
          <div className="text-accent font-semibold mb-4 text-sm md:text-base">Salescode.ai | Gurgaon, India</div>
          <ul className="list-disc list-outside ml-4 md:ml-6 text-muted space-y-2 text-sm md:text-base text-foreground/90">
            <li>
              <strong className="text-foreground">Engineered scalable mobile enterprise solutions</strong> for global clients, accelerating feature delivery speed by <strong className="text-accent">30%</strong> through the creation of reusable component libraries.
            </li>
            <li>
              Automated complex internal workflows by building a custom React.js App Designer tool, reducing manual developer overhead by 70%.
            </li>
            <li>
              Improved application stability by 20% by implementing comprehensive unit testing using Jest and migrating legacy code to TypeScript.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
