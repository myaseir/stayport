"use client";

import React from "react";

export default function Hero() {
  const BOOKING_LINK = "#";
  
  const HERO_IMAGE = "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(BOOKING_LINK, "_blank");
  };

  return (
    // Added pt-24 for mobile to clear the navbar, lg:pt-0 for desktop
    <section className="relative w-full h-screen min-h-[750px] flex items-center justify-center overflow-hidden bg-slate-950 font-sans pt-24 lg:pt-0">
      
      {/* 1. Optimized Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMAGE} 
          alt="StayPort Islamabad Premium Living" 
          className="w-full h-full object-cover object-center transition-transform duration-1000 scale-100 hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-950/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950"></div>
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center">
        
        {/* Subtle Branding Overline */}
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <div className="h-[1px] w-8 md:w-12 bg-indigo-500/50"></div>
          <span className="text-indigo-400 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-center">
            StayPort Islamabad
          </span>
          <div className="h-[1px] w-8 md:w-12 bg-indigo-500/50"></div>
        </div>

        {/* Professional Typography */}
        <h1 className="text-center mb-6 md:mb-8">
          {/* Adjusted text sizes for mobile (text-4xl to text-5xl) */}
          <span className="block text-4xl md:text-8xl font-black text-white tracking-tight leading-none mb-2">
            STAY<span className="text-indigo-500">PORT</span>
          </span>
          <span className="block text-lg md:text-2xl text-slate-300 font-light tracking-wide uppercase">
            Redefining Hospitality in the Capital
          </span>
        </h1>

        <p className="max-w-2xl text-center text-slate-400 text-xs md:text-base leading-relaxed mb-10 md:mb-12 px-4 border-l-2 border-indigo-500/30">
          Experience a curated selection of Islamabad’s most prestigious apartments and luxury suites. 
          Professional management meets world-class comfort.
        </p>

        {/* --- High-End Booking Bar --- */}
        {/* Adjusted padding/layout for mobile (p-4) */}
        <div className="w-full max-w-6xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:border-indigo-500/30">
          <form 
            onSubmit={handleSearch}
            className="flex flex-col lg:flex-row items-stretch"
          >
            
            {/* Location */}
            <div className="flex-1 flex flex-col p-4 md:p-6 border-b lg:border-b-0 lg:border-r border-white/10 hover:bg-white/5 transition-colors">
              <span className="text-[9px] md:text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1 md:mb-2">Destination</span>
              <input 
                type="text" 
                placeholder="Where in Islamabad?"
                className="bg-transparent text-white text-sm md:text-base font-medium placeholder:text-slate-500 outline-none w-full"
              />
            </div>

            {/* Stay Dates */}
            <div className="flex-1 grid grid-cols-2 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="flex flex-col p-4 md:p-6 hover:bg-white/5 transition-colors">
                <span className="text-[9px] md:text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1 md:mb-2">Check In</span>
                <input 
                  type="date" 
                  className="bg-transparent text-white text-xs md:text-sm outline-none [color-scheme:dark]"
                />
              </div>
              <div className="flex flex-col p-4 md:p-6 border-l border-white/10 hover:bg-white/5 transition-colors">
                <span className="text-[9px] md:text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1 md:mb-2">Check Out</span>
                <input 
                  type="date" 
                  className="bg-transparent text-white text-xs md:text-sm outline-none [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="lg:w-48 flex flex-col p-4 md:p-6 hover:bg-white/5 transition-colors border-b lg:border-b-0 border-white/10">
              <span className="text-[9px] md:text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1 md:mb-2">Occupants</span>
              <select className="bg-transparent text-white font-medium text-xs md:text-sm outline-none appearance-none cursor-pointer">
                <option value="1">1 Professional</option>
                <option value="2">2 Persons</option>
                <option value="family">Family Suite</option>
              </select>
            </div>

            {/* Action */}
            <div className="lg:w-64 p-3 flex items-center justify-center bg-white/5">
              <button 
                type="submit"
                className="w-full h-14 lg:h-full py-4 lg:py-0 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs md:text-sm uppercase tracking-widest transition-all rounded-lg active:scale-[0.98] flex items-center justify-center gap-2"
              >
                Find Availability
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* Modern Side Accents */}
      <div className="absolute left-6 top-1/2 -rotate-90 origin-left hidden lg:block">
        <span className="text-white/10 text-[10px] font-bold tracking-[1em] uppercase">E-7 | F-6 | F-7 | Centaurus</span>
      </div>

    </section>
  );
}