import { FaCode } from "react-icons/fa";

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 animate-fade-in-up delay-300">
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 mb-10 md:mb-16 text-center sm:text-left">
        <FaCode className="text-3xl md:text-4xl text-accent hidden sm:block mb-1" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">Technical Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Frontend */}
        <div className="bg-card border border-border p-6 md:p-8 rounded-2xl hover:bg-border transition-all duration-300 group">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full"></span> Frontend Architecture
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "React Native",
              "React.js",
              "Next.js",
              "TypeScript",
              "Redux Toolkit",
              "React Query",
              "GraphQL",
              "Tailwind CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-border px-3 py-1.5 rounded-md text-sm font-medium text-foreground/90 group-hover:bg-accent/20 group-hover:text-foreground transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* Mobile */}
        <div className="bg-card border border-border p-6 md:p-8 rounded-2xl hover:bg-border transition-all duration-300 group">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full"></span> Mobile Development
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Android (Java/Kotlin)",
              "iOS (Swift)",
              "CodePush",
              "App/Play Store Deployment",
              "Proguard",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-border px-3 py-1.5 rounded-md text-sm font-medium text-foreground/90 group-hover:bg-accent/20 group-hover:text-foreground transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* Backend */}
        <div className="bg-card border border-border p-6 md:p-8 rounded-2xl hover:bg-border transition-all duration-300 group">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full"></span> Backend & Data
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Node.js",
              "Express.js",
              "MongoDB",
              "Mongoose",
              "Supabase",
              "PostgreSQL",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-border px-3 py-1.5 rounded-md text-sm font-medium text-foreground/90 group-hover:bg-accent/20 group-hover:text-foreground transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* Tools */}
        <div className="bg-card border border-border p-6 md:p-8 rounded-2xl hover:bg-border transition-all duration-300 group">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full"></span> Tools & DevOps
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "AWS",
              "Docker",
              "CI/CD Pipelines",
              "Firebase Analytics",
              "Git",
              "Jest",
              "WebSockets",
              "Performance Profiling",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-border px-3 py-1.5 rounded-md text-sm font-medium text-foreground/90 group-hover:bg-accent/20 group-hover:text-foreground transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
