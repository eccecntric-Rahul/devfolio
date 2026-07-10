import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://krrahuldev.netlify.app"),
  title: "Rahul Kumar | Full Stack Developer",
  description: "Portfolio of Rahul Kumar — Full Stack Developer with 5+ years of experience in MERN, React Native, and Next.js. Based in Delhi NCR, India. Open to opportunities.",
  openGraph: {
    title: "Rahul Kumar | Full Stack Developer",
    description: "Portfolio of Rahul Kumar — Full Stack Developer with 5+ years of experience.",
    url: "https://krrahuldev.netlify.app",
    siteName: "Rahul Kumar Portfolio",
    images: [
      {
        url: "/Emergent_Profile_1.png", // This image will appear in WhatsApp, LinkedIn, Twitter previews
        width: 1200,
        height: 630,
        alt: "Rahul Kumar - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Kumar | Full Stack Developer",
    description: "Portfolio of Rahul Kumar — Full Stack Developer with 5+ years of experience.",
    images: ["/Emergent_Profile_1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col selection:bg-accent selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="emergent"
          enableSystem={false}
          disableTransitionOnChange
          themes={["light", "dark", "emergent", "sunset", "nord"]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
