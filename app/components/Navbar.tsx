"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Get the current page route
  const pathname = usePathname();
  // Check if the user is on the homepage
  const isHome = pathname === "/";
  
  const BOOKING_LINK = "https://www.booking.com/hotel/pk/nazara-hotel.html";

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/about" },
    { name: "Rooms", path: "/rooms" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${
          // SMART LOGIC: Apply dark background if scrolled OR if we are NOT on the homepage
          scrolled || !isHome
            ? "bg-[#2A3026]/95 backdrop-blur-lg border-b border-[#4A4E44] py-3 shadow-2xl" 
            : "bg-transparent border-b border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center z-50">
              <Link 
                href="/" 
                className="text-2xl font-serif tracking-[0.15em] text-[#E8E5D9] drop-shadow-lg flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                NAZARA <span className="text-[#D4AF37] text-lg tracking-widest mt-0.5">HOTEL</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.path} 
                  className="group relative text-[#E8E5D9] text-[11px] tracking-[0.25em] font-medium uppercase transition-colors"
                >
                  <span className="group-hover:text-[#D4AF37] transition-colors duration-300">{link.name}</span>
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-8 py-3 bg-[#4A5D4E] hover:bg-[#3A4A3D] border border-[#6B705C] text-[#E8E5D9] rounded-sm text-[11px] tracking-[0.2em] uppercase font-medium transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                Reserve Stay
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center z-50">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#E8E5D9] hover:text-[#D4AF37] focus:outline-none transition-colors p-2"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span className={`block h-[2px] w-full bg-current transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
                  <span className={`block h-[2px] w-full bg-current transition duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`} />
                  <span className={`block h-[2px] w-full bg-current transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </div>
              </button>
            </div>
            
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Luxury Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-[#2A3026] backdrop-blur-2xl flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none"></div>

        <div className="flex flex-col items-center space-y-8 w-full px-6 relative z-10">
          
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.path} 
              className="text-[#E8E5D9] hover:text-[#D4AF37] text-2xl tracking-[0.25em] uppercase font-serif transition-all duration-300 transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="w-16 h-[1px] bg-[#8B7355] my-6"></div>

          <a 
            href="/#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[280px] text-center mt-4 px-8 py-4 bg-[#4A5D4E] text-[#E8E5D9] border border-[#6B705C] rounded-sm text-sm tracking-[0.2em] uppercase font-medium shadow-2xl active:bg-[#3A4A3D] transition-colors"
          >
            Reserve Your Stay
          </a>
          
        </div>
      </div>
    </>
  );
}