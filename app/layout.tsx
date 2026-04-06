import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// We use Inter for clean body text and Playfair Display for rustic, elegant headings
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Nazara Hotel | Elevated Mountain Sanctuary in Skardu",
  description: "Experience the ultimate mountain retreat at Nazara Hotel in Skardu. A luxury sanctuary featuring rustic stone architecture, panoramic valley views, and genuine Gilgit-Baltistan hospitality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-stone-50 text-stone-900 antialiased flex flex-col min-h-screen`}>
        <Navbar />
        {/* The min-h-screen ensures the footer stays at the bottom even on short pages */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}