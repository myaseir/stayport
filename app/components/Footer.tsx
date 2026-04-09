"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0C10] text-slate-400 border-t border-white/5 relative overflow-hidden">
      
      {/* 1. Sophisticated Gradient Accent */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          
          {/* Column 1: Brand & Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-3xl font-black text-white tracking-tighter mb-6">
              STAY<span className="text-indigo-500">PORT</span>
            </h3>
            <p className="text-sm leading-relaxed mb-8 font-light text-slate-400 max-w-xs">
              Defining premium living in Islamabad. From the heights of the Margallas to the heart of the corporate sectors, we curate only the best.
            </p>
            
            {/* Social Icons - Fixed SVG Paths (No Lucide Imports Needed) */}
            <div className="flex gap-4">
              {/* Instagram */}
              <a href="#" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-indigo-500 hover:text-white transition-all duration-500 group" aria-label="Instagram">
                <svg className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-indigo-500 hover:text-white transition-all duration-500 group" aria-label="Facebook">
                <svg className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              {/* X (Modern Twitter Icon) */}
              <a href="#" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-indigo-500 hover:text-white transition-all duration-500 group" aria-label="X">
                <svg className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Portfolio */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white text-[10px] font-bold tracking-[0.3em] mb-8 uppercase">Properties</h4>
            <nav className="flex flex-col gap-5">
              {['The E-7 Collection', 'Blue Area Executive', 'F-6 Boutique Suites', 'Margalla Penthouses'].map((link) => (
                <Link 
                  key={link} 
                  href="#" 
                  className="text-xs font-medium tracking-wide hover:text-indigo-400 hover:translate-x-1 transition-all"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Corporate */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white text-[10px] font-bold tracking-[0.3em] mb-8 uppercase">Experience</h4>
            <nav className="flex flex-col gap-5 text-xs font-medium tracking-wide">
              <Link href="#" className="hover:text-indigo-400 transition-colors">Our Standard</Link>
              <Link href="#" className="hover:text-indigo-400 transition-colors">Concierge Services</Link>
              <Link href="#" className="hover:text-indigo-400 transition-colors">Corporate Accounts</Link>
              <a href="mailto:contact@stayport.com" className="hover:text-indigo-400 transition-colors">contact@stayport.com</a>
            </nav>
          </div>

          {/* Column 4: The Inner Circle (Newsletter) */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white text-[10px] font-bold tracking-[0.3em] mb-8 uppercase">The Inner Circle</h4>
            <p className="text-xs font-light leading-relaxed mb-8 text-slate-500 max-w-[240px]">
              Receive early access to Islamabad&apos;s newest premium listings and private events.
            </p>
            <div className="w-full relative group">
              <input 
                type="email" 
                placeholder="Work Email"
                className="w-full bg-white/[0.02] border border-white/5 px-5 py-5 rounded-2xl text-xs text-white outline-none focus:border-indigo-500/50 transition-all placeholder:text-slate-700"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-indigo-600 text-white px-5 rounded-xl text-[10px] font-bold tracking-widest uppercase hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20">
                Join
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/5 bg-[#08090D] relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] tracking-[0.4em] font-bold uppercase text-slate-700">
          <p className="text-center md:text-left">&copy; {currentYear} STAYPORT TECHNOLOGIES. ISLAMABAD, PK.</p>
          <div className="flex gap-10">
            <Link href="#" className="hover:text-slate-400 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-slate-400 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-slate-400 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
      
      {/* Visual Depth Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/[0.03] rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900/[0.05] rounded-full blur-[100px] pointer-events-none"></div>
    </footer>
  );
}