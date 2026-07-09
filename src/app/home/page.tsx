import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero-section";
import { RecruiterInfoSection } from "@/components/home/recruiter-info";
import { StatsBar } from "@/components/home/stats-bar";
import { SkillsSection } from "@/components/home/skills-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { ResumeSection } from "@/components/home/resume-section";
import { AchievementsEducationSection } from "@/components/home/achievements-education";

export default function Home() {
  return (
    <main className="w-full overflow-x-clip bg-background">
      <Header />

      {/* Hero Wrapper */}
      <div className="flex flex-col min-h-[calc(100vh-76px)] px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full pt-0">
        <HeroSection />
      </div>

      {/* Rest of the content wrapped in standard container */}
      <div className="px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full">
        <RecruiterInfoSection />
        <StatsBar />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ResumeSection />
        <AchievementsEducationSection />
        <Footer />
      </div>
    </main>
  );
}
