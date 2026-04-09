import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Plus Jakarta Sans is a more modern, professional choice for a tech-forward brand like StayPort
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-jakarta" 
});

export const metadata: Metadata = {
  title: "StayPort | Premium Executive Stays in Islamabad",
  description: "Discover a curated collection of luxury apartments and executive suites in Islamabad's most prestigious sectors. Professional property management for the modern traveler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jakarta.variable} font-jakarta bg-white text-slate-900 antialiased flex flex-col min-h-screen`}>
        <Navbar />
        {/* Main content area that fills space so footer stays at bottom */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}