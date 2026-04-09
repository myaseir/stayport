"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Listen for scroll events to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const navLinks = [
    { name: "Explore", path: "#" },
    { name: "Stays", path: "#" },
    { name: "Experiences", path: "#" },
    { name: "About", path: "#" },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
          scrolled || !isHome
            ? "bg-white border-b border-gray-200 py-3 shadow-sm" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center z-50">
              <Link 
                href="/" 
                className={`text-2xl font-black tracking-tighter flex items-center gap-1 transition-colors ${
                  scrolled || !isHome ? "text-[#FF385C]" : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                stay<span className={scrolled || !isHome ? "text-gray-900" : "text-gray-100"}>Port</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.path} 
                  className={`text-sm font-semibold transition-colors hover:opacity-70 ${
                    scrolled || !isHome ? "text-gray-700" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <Link 
                href="/bookings"
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#FF385C] to-[#E31C5F] text-white rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center z-50">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`focus:outline-none p-2 rounded-full transition-colors ${
                  scrolled || !isHome || isOpen ? "text-gray-900 bg-gray-100" : "text-white bg-black/20"
                }`}
              >
                <div className="w-5 h-4 relative flex flex-col justify-between">
                  <span className={`block h-[2px] w-full bg-current transform transition duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                  <span className={`block h-[2px] w-full bg-current transition duration-300 ${isOpen ? "opacity-0" : ""}`} />
                  <span className={`block h-[2px] w-full bg-current transform transition duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </div>
              </button>
            </div>
            
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white flex flex-col transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-24 px-8 space-y-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.path} 
              className="text-3xl font-bold text-gray-900 border-b border-gray-100 pb-4"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="/bookings"
            className="w-full text-center py-4 bg-[#FF385C] text-white rounded-xl text-lg font-bold shadow-xl"
            onClick={() => setIsOpen(false)}
          >
            Start Booking
          </Link>
        </div>
      </div>
    </>
  );
}