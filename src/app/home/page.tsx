import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero-section";
import { SkillsSection } from "@/components/home/skills-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { AchievementsEducationSection } from "@/components/home/achievements-education";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-background">
      {/* Hero Wrapper */}
      <div className="flex flex-col min-h-screen px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full pt-6 md:pt-10">
        <Header />
        <HeroSection />
      </div>

      {/* Rest of the content wrapped in standard container */}
      <div className="px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full">
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsEducationSection />
        <Footer />
      </div>
    </main>
  );
}
