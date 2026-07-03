import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

export function HeroSection() {
  return (
    <section className="w-full flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center mt-6 md:mt-2 z-10 pb-16 lg:pb-24">
      {/* Left Column: Name & Socials */}
      <div className="flex flex-col items-center lg:items-start order-2 lg:order-1 animate-fade-in-up delay-100 text-center lg:text-left">
        <h1 className="text-6xl sm:text-7xl lg:text-[5rem] xl:text-[6.5rem] font-extrabold leading-[1.05] tracking-tight mb-2">
          Rahul <br className="hidden lg:block" /> Kumar.
        </h1>
        <div className="w-16 md:w-24 h-1.5 md:h-2 bg-accent mt-2 md:mt-3 mx-auto lg:mx-0 rounded-sm"></div>

        <div className="flex space-x-6 mt-8 md:mt-10 text-xl md:text-2xl text-muted justify-center lg:justify-start w-full">
          <a href="https://linkedin.com/in/rahulkumar" target="_blank" rel="noreferrer" className="hover:text-foreground hover:scale-110 transition-all duration-300">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/TechRahul" target="_blank" rel="noreferrer" className="hover:text-foreground hover:scale-110 transition-all duration-300">
            <FaGithub />
          </a>
          <a href="mailto:rk2655415@gmail.com" className="hover:text-foreground hover:scale-110 transition-all duration-300">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Center Column: Image */}
      <div className="flex justify-center items-center order-1 lg:order-2 h-[350px] sm:h-[450px] lg:h-[450px] relative animate-fade-in-up delay-200 hero-image-container w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none">
        <Image
          src="/profile.png"
          alt="Rahul Kumar"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain object-center scale-[1.1] xl:scale-[1.15] origin-center"
          priority
        />
      </div>

      {/* Right Column: Intro */}
      <div className="flex flex-col items-center lg:items-start order-3 lg:order-3 animate-fade-in-up delay-300 text-center lg:text-left mt-8 lg:mt-0">
        <p className="text-muted text-xs md:text-sm font-semibold mb-3 tracking-widest uppercase">- Introducing</p>
        <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-semibold mb-4 leading-snug text-foreground">
          Sr. Software Developer, <br className="hidden xl:block" /> specializing in React Native.
        </h2>
        <p className="text-muted text-sm md:text-base lg:text-lg mb-6 leading-relaxed max-w-sm md:max-w-md mx-auto lg:mx-0">
          I'm a passionate developer with 5+ years of experience. From engineering real-time trading dashboards at Planify to delivering scalable mobile apps, I build robust, high-performance solutions.
        </p>
        <Link href="#experience" className="text-accent font-bold text-base md:text-lg flex items-center hover:opacity-80 transition-opacity group">
          View Experience <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </section>
  );
}
