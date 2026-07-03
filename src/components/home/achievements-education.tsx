import { FaTrophy, FaGraduationCap } from "react-icons/fa";

export function AchievementsEducationSection() {
  return (
    <section className="w-full py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 animate-fade-in-up delay-600">
      {/* Achievements */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <FaTrophy className="text-2xl md:text-3xl text-accent" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Achievements</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-card border border-border p-5 rounded-xl flex items-start gap-4 hover:border-accent transition-colors">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
              <span className="text-accent font-bold text-xl">1</span>
            </div>
            <div>
              <h4 className="text-foreground font-bold text-lg mb-1">Employee of the Month</h4>
              <p className="text-sm text-muted mb-2">April 2024, March 2024</p>
              <p className="text-sm text-foreground/90">Recognized for exceptional delivery of core trading modules and revamping the app UI.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Education */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <FaGraduationCap className="text-2xl md:text-3xl text-accent" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Education</h2>
        </div>
        <div className="bg-card border border-border p-8 rounded-2xl h-[calc(100%-4rem)] flex flex-col justify-center relative overflow-hidden group hover:bg-border transition-colors">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors duration-500"></div>
          <div className="w-16 h-16 rounded-2xl bg-border flex items-center justify-center mb-6 border border-border relative z-10">
            <FaGraduationCap className="text-3xl text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2 relative z-10">B.Tech in Electronics & Communication</h3>
          <p className="text-lg text-muted font-medium mb-6 relative z-10">Mahavir Swami Institute of Technology (GGSIPU)</p>
          <div className="mt-auto flex items-center justify-between border-t border-border pt-6 relative z-10">
            <span className="text-accent font-semibold tracking-wide uppercase text-sm">Graduated</span>
            <span className="text-foreground/80 font-medium">2016 – 2020</span>
          </div>
        </div>
      </div>
    </section>
  );
}
