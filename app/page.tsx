"use client";

import React from "react";
import Hero from "./components/Hero";

export default function Home() {
  const BOOKING_LINK = "#";

  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans antialiased selection:bg-indigo-50 selection:text-indigo-900">
      
      {/* 1. HERO SECTION 
          Note: Ensure your Hero component uses a clean white/light background to match this flow.
      */}
      <Hero />

      {/* 2. THE PHILOSOPHY SECTION (Quiet Luxury) */}
      <section className="py-24 lg:py-48 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
          
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/5] rounded-[60px] lg:rounded-[120px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]">
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Minimalist Luxury Interior Islamabad" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            
            {/* Floating Editorial Quote */}
            <div className="absolute -bottom-12 -right-4 md:right-12 bg-white/90 backdrop-blur-2xl p-8 lg:p-12 rounded-[40px] shadow-2xl border border-white max-w-[280px] lg:max-w-[320px]">
              <span className="text-indigo-600 text-4xl font-serif">“</span>
              <p className="text-slate-900 font-medium text-lg lg:text-xl leading-tight mt-[-10px]">
                StayPort has mastered the art of the 'Invisible Host'—perfect for the modern executive.
              </p>
              <p className="text-slate-400 text-[10px] mt-6 uppercase tracking-[0.3em] font-bold">
                — Business Insider PK
              </p>
            </div>
          </div>
          
          {/* Narrative Side */}
          <div className="w-full lg:w-1/2 space-y-10 lg:pl-10">
            <div className="space-y-6">
              <span className="text-indigo-600 font-bold text-xs uppercase tracking-[0.5em] block">Our Philosophy</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-light text-slate-900 leading-[0.95] tracking-tighter">
                Stays that <br/>
                <span className="italic font-serif text-slate-400">breathe.</span>
              </h2>
            </div>
            
            <div className="space-y-8 max-w-lg">
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light">
                StayPort isn't just about a roof in Islamabad. It’s about the curated play of light, premium tactile textures, and the profound silence of the Margalla hills. 
              </p>
              <p className="text-slate-400 text-base leading-relaxed font-light">
                We bridge the gap between the predictable luxury of a five-star hotel and the soulful intimacy of a private home. Every property in our portfolio is hand-selected to meet a standard of architectural integrity that is rare in the capital.
              </p>
            </div>

            <div className="pt-10">
              <a 
                href="#listings" 
                className="group relative inline-flex items-center gap-10 py-4 px-2 overflow-hidden transition-all"
              >
                <span className="text-slate-900 font-bold text-sm tracking-[0.3em] uppercase">Explore the Collection</span>
                <div className="flex items-center justify-center w-14 h-14 rounded-full border border-slate-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-700">
                   <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                   </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE ESSENTIALS (Amenities Grid) */}
      <section className="py-24 lg:py-32 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-[30px] bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-indigo-50 group-hover:rotate-6 transition-all duration-500">
                <svg className="w-8 h-8 text-slate-400 group-hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a9.5 9.5 0 0113.436 0" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3">Ultra-Fast Fiber</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed max-w-[200px]">Enterprise-grade connectivity, standard in every F-6 and E-7 suite.</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-[30px] bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-indigo-50 group-hover:rotate-6 transition-all duration-500">
                <svg className="w-8 h-8 text-slate-400 group-hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3">Smart Security</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed max-w-[200px]">Secure, keyless digital entry with unique codes generated for every guest.</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-[30px] bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-indigo-50 group-hover:rotate-6 transition-all duration-500">
                <svg className="w-8 h-8 text-slate-400 group-hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3">Elite Concierge</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed max-w-[200px]">Our local experts are available 24/7 for travel, dining, and logistics.</p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-[30px] bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-indigo-50 group-hover:rotate-6 transition-all duration-500">
                <svg className="w-8 h-8 text-slate-400 group-hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3">Daily Refresh</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed max-w-[200px]">Optional daily housekeeping to keep your sanctuary pristine.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. LISTINGS SECTION (The Collection) */}
      <section id="listings" className="py-24 lg:py-48 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl space-y-4">
            <span className="text-indigo-600 font-bold text-[10px] uppercase tracking-[0.5em]">Selected Residences</span>
            <h2 className="text-5xl md:text-7xl font-light text-slate-900 tracking-tighter">Current Openings</h2>
          </div>
          <div className="flex items-center gap-4 text-slate-400 font-medium text-xs tracking-widest uppercase">
            <span>Filter By Sector</span>
            <div className="w-12 h-[1px] bg-slate-200"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Property 01 */}
          <div className="group">
            <div className="relative aspect-[4/5] rounded-[60px] lg:rounded-[100px] overflow-hidden mb-10 shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="The Glass House Islamabad" 
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-[2s] ease-in-out" 
              />
              <div className="absolute top-10 left-10">
                <span className="bg-white/95 backdrop-blur-xl px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">Verified Luxury</span>
              </div>
              {/* Overlapping Price Tag */}
              <div className="absolute bottom-10 right-10 bg-slate-900 text-white px-6 py-4 rounded-3xl font-bold shadow-2xl">
                PKR 45k <span className="text-[10px] font-light opacity-60 uppercase">/ night</span>
              </div>
            </div>
            <div className="flex justify-between items-start px-4">
              <div className="space-y-1">
                <h3 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">The Glass House</h3>
                <p className="text-slate-400 font-light text-lg">Sector E-7, Islamabad</p>
              </div>
              <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>

          {/* Property 02 */}
          <div className="group md:mt-32">
            <div className="relative aspect-[4/5] rounded-[60px] lg:rounded-[100px] overflow-hidden mb-10 shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="The Atrium Suite Islamabad" 
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-[2s] ease-in-out" 
              />
              <div className="absolute top-10 left-10">
                <span className="bg-white/95 backdrop-blur-xl px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">Top Rated</span>
              </div>
              <div className="absolute bottom-10 right-10 bg-slate-900 text-white px-6 py-4 rounded-3xl font-bold shadow-2xl">
                PKR 32k <span className="text-[10px] font-light opacity-60 uppercase">/ night</span>
              </div>
            </div>
            <div className="flex justify-between items-start px-4">
              <div className="space-y-1">
                <h3 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">The Atrium Suite</h3>
                <p className="text-slate-400 font-light text-lg">Sector F-6, Islamabad</p>
              </div>
              <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. LOCATION CONTEXT (The Capital Guide) */}
      <section className="py-24 bg-slate-900 text-white rounded-[60px] lg:rounded-[100px] mx-6 mb-24 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
        <div className="max-w-5xl mx-auto px-8 relative z-10 text-center space-y-12">
          <div className="space-y-4">
            <h4 className="text-indigo-400 text-xs font-bold tracking-[0.5em] uppercase">The Neighborhoods</h4>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight">Beyond the Margallas.</h2>
          </div>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            StayPort operates exclusively in the "Green Zone" sectors of Islamabad. We prioritize safety, quietude, and proximity to the city's finest dining and diplomatic hubs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10">
            <div className="space-y-2">
              <p className="text-white font-bold text-2xl tracking-tighter">E-7</p>
              <p className="text-slate-500 text-[10px] uppercase tracking-widest">Diplomatic Elite</p>
            </div>
            <div className="space-y-2">
              <p className="text-white font-bold text-2xl tracking-tighter">F-6</p>
              <p className="text-slate-500 text-[10px] uppercase tracking-widest">Culture & Dining</p>
            </div>
            <div className="space-y-2">
              <p className="text-white font-bold text-2xl tracking-tighter">F-7</p>
              <p className="text-slate-500 text-[10px] uppercase tracking-widest">The Heartbeat</p>
            </div>
            <div className="space-y-2">
              <p className="text-white font-bold text-2xl tracking-tighter">Gulberg</p>
              <p className="text-slate-500 text-[10px] uppercase tracking-widest">New Luxury</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}