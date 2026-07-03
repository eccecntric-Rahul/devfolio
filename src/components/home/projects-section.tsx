import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 animate-fade-in-up delay-500">
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 mb-10 md:mb-16 text-center sm:text-left">
        <FaCode className="text-3xl md:text-4xl text-accent hidden sm:block mb-1" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">Key Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Alpha AMC */}
        <div className="bg-card border border-border p-6 md:p-8 rounded-2xl hover:bg-border transition-all duration-300 group hover:-translate-y-1 flex flex-col h-full relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          <h3 className="text-2xl font-bold text-foreground mb-2 flex justify-between items-start">
            Alpha AMC
            <FaExternalLinkAlt className="text-sm text-foreground/50 group-hover:text-accent transition-colors mt-1" />
          </h3>
          <p className="text-accent text-sm font-medium mb-6">AIF Fintech Ecosystem</p>
          <ul className="list-disc list-outside ml-4 text-muted space-y-2 text-sm flex-grow">
            <li>
              Led full-stack development of a high-security fintech app featuring real-time portfolio tracking and localized notifications.
            </li>
            <li>
              Integrated FCM & Analytics to drive user retention, resulting in a <strong className="text-foreground">15% lift in monthly active users</strong>.
            </li>
          </ul>
        </div>
        {/* Planify App */}
        <div className="bg-card border border-border p-6 md:p-8 rounded-2xl hover:bg-border transition-all duration-300 group hover:-translate-y-1 flex flex-col h-full relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          <h3 className="text-2xl font-bold text-foreground mb-2 flex justify-between items-start">
            Planify Mobile App
            <FaExternalLinkAlt className="text-sm text-foreground/50 group-hover:text-accent transition-colors mt-1" />
          </h3>
          <p className="text-accent text-sm font-medium mb-6">React Native Platform</p>
          <ul className="list-disc list-outside ml-4 text-muted space-y-2 text-sm flex-grow">
            <li>
              Built a robust trading engine with real-time data sync using Supabase and AWS for scalable backend.
            </li>
            <li>
              Implemented universal and deep linking to streamline user onboarding from marketing campaigns.
            </li>
          </ul>
        </div>
        {/* Portfolio */}
        <div className="bg-card border border-border p-6 md:p-8 rounded-2xl hover:bg-border transition-all duration-300 group hover:-translate-y-1 flex flex-col h-full relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          <h3 className="text-2xl font-bold text-foreground mb-2 flex justify-between items-start">
            Technical Portfolio
            <FaExternalLinkAlt className="text-sm text-foreground/50 group-hover:text-accent transition-colors mt-1" />
          </h3>
          <p className="text-accent text-sm font-medium mb-6">Netflix-Inspired Web Experience</p>
          <ul className="list-disc list-outside ml-4 text-muted space-y-2 text-sm flex-grow">
            <li>
              Developed a high-performance interactive web experience showcasing advanced CSS animations.
            </li>
            <li>
              Leveraged lazy-loading strategies to maximize SEO and recruiter engagement.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
