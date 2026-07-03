import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background text-foreground p-4 sm:p-8">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center justify-center p-8 sm:p-12 w-full max-w-2xl rounded-[2.5rem] bg-card/40 backdrop-blur-xl border border-border shadow-2xl animate-fade-in-up">
        
        {/* Illustration */}
        <div className="relative w-full max-w-[320px] sm:max-w-[400px] aspect-square mb-6 hover:-translate-y-4 transition-transform duration-700 ease-out">
          <Image
            src="/404_illustration.png"
            alt="Lost Astronaut Illustration"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            priority
            className="object-contain drop-shadow-2xl"
          />
        </div>
        
        {/* Text Content */}
        <div className="text-center space-y-4">
          <h1 className="text-8xl sm:text-9xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/40 drop-shadow-sm">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Lost in Cyberspace
          </h2>
          <p className="text-lg text-muted max-w-md mx-auto leading-relaxed">
            The page you are looking for has drifted off into the void. Let's get you back to familiar territory.
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-10">
          <Link
            href="/home"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 ease-out bg-accent rounded-full hover:bg-accent/90 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
          >
            <span className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-x-1">
                <path d="m12 19-7-7 7-7"/>
                <path d="M19 12H5"/>
              </svg>
              Return Home
            </span>
          </Link>
        </div>
        
      </div>
    </main>
  );
}
