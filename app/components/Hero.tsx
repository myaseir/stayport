"use client";

export default function Hero() {
  const BOOKING_LINK = "#";
  
  // High-quality image kept exactly as requested
  const HERO_IMAGE = "https://images.unsplash.com/photo-1656105745434-ec8dc6b40f2b?q=80&w=952&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // Handle the search action (Redirects to Booking.com for now)
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(BOOKING_LINK, "_blank");
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-[#1F2421]">
      
      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMAGE} 
          alt="Nazara Hotel - Snow Capped Mountains of Skardu" 
          className="w-full h-full object-cover object-center"
        />
        {/* Soft, misty dark forest tones to evoke elevation and contrast with the snow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F2421]/70 via-[#2A3026]/40 to-[#1F2421]/95"></div>
        {/* Subtle texture for that rustic, tactile feel */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none"></div>
      </div>

      {/* 2. Luxury Inner Frame */}
      <div className="hidden md:block absolute inset-6 lg:inset-10 border border-[#D4AF37]/30 rounded-sm pointer-events-none z-10 transition-all duration-1000"></div>
      
      {/* 3. Main Content */}
      <div className="relative z-20 max-w-6xl w-full flex flex-col items-center text-center mt-12 md:mt-16">
        
        {/* Elegant Overline */}
        <div className="flex items-center gap-3 md:gap-5 mb-6">
          <div className="h-[1px] w-8 md:w-16 bg-[#D4AF37]/50"></div>
          <span className="text-[#D4AF37] font-medium tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs uppercase">
            The Ultimate View in Skardu
          </span>
          <div className="h-[1px] w-8 md:w-16 bg-[#D4AF37]/50"></div>
        </div>

        {/* Primary Heading - Nazara Hotel */}
        <h1 className="flex flex-col items-center gap-1 md:gap-3 mb-6">
          <span className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#E8E5D9] tracking-[0.08em] drop-shadow-xl">
            Nazara
          </span>
          <span className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#D4AF37] tracking-[0.25em] md:tracking-[0.35em] uppercase drop-shadow-md mt-2">
            Hotel
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-sm md:text-base lg:text-lg text-[#A9B3A7] font-light max-w-2xl leading-relaxed drop-shadow-md mb-12 px-2">
          A majestic mountain sanctuary where rustic elegance meets breathtaking vistas. Experience the true beauty and genuine hospitality of Gilgit-Baltistan.
        </p>

        {/* --- Interactive Booking Bar --- */}
        <div className="w-full max-w-4xl bg-[#1F2421]/60 backdrop-blur-md border border-[#D4AF37]/30 p-2 md:p-4 rounded-sm shadow-2xl">
          <form 
            onSubmit={handleSearch}
            className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between"
          >
            
            {/* Arrival Date */}
            <div className="flex flex-col w-full text-left px-4 md:px-6">
              <label htmlFor="arrival" className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] mb-2 font-semibold">
                Arrival
              </label>
              <input 
                type="date" 
                id="arrival"
                required
                className="bg-transparent text-[#E8E5D9] text-sm md:text-base outline-none border-b border-[#6B705C] focus:border-[#D4AF37] transition-colors py-1 cursor-pointer w-full [color-scheme:dark]" 
              />
            </div>

            {/* Departure Date */}
            <div className="flex flex-col w-full text-left px-4 md:px-6 md:border-l border-[#6B705C]/50 mt-2 md:mt-0">
              <label htmlFor="departure" className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] mb-2 font-semibold">
                Departure
              </label>
              <input 
                type="date" 
                id="departure"
                required
                className="bg-transparent text-[#E8E5D9] text-sm md:text-base outline-none border-b border-[#6B705C] focus:border-[#D4AF37] transition-colors py-1 cursor-pointer w-full [color-scheme:dark]" 
              />
            </div>

            {/* Guests Selection */}
            <div className="flex flex-col w-full text-left px-4 md:px-6 md:border-l border-[#6B705C]/50 mt-2 md:mt-0">
              <label htmlFor="guests" className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] mb-2 font-semibold">
                Guests
              </label>
              <div className="relative">
                <select 
                  id="guests"
                  className="bg-transparent text-[#E8E5D9] text-sm md:text-base outline-none border-b border-[#6B705C] focus:border-[#D4AF37] transition-colors py-1 cursor-pointer w-full appearance-none"
                  defaultValue="2"
                >
                  <option value="1" className="bg-[#2A3026]">1 Guest</option>
                  <option value="2" className="bg-[#2A3026]">2 Guests</option>
                  <option value="3" className="bg-[#2A3026]">3 Guests</option>
                  <option value="4" className="bg-[#2A3026]">4 Guests</option>
                  <option value="5" className="bg-[#2A3026]">5+ Guests</option>
                </select>
                {/* Custom dropdown arrow */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#D4AF37]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="w-full md:w-auto mt-4 md:mt-0 md:pl-4">
              <button 
                type="submit"
                className="w-full md:w-max px-8 py-4 md:py-5 bg-[#4A5D4E] hover:bg-[#3A4A3D] text-[#E8E5D9] text-[11px] md:text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 shadow-xl hover:-translate-y-0.5 border border-[#6B705C] rounded-sm whitespace-nowrap"
              >
                Check Availability
              </button>
            </div>

          </form>
        </div>
        
      </div>

      {/* 4. Elegant Scroll Down Indicator */}
      <div className="absolute -bottom-8 md:-bottom-[30px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 z-20 opacity-80 animate-bounce">
        <span className="text-[#A9B3A7] text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-medium">
          Scroll to Explore
        </span>
        <div className="w-[1px] h-6 md:h-12 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
      </div>

    </section>
  );
}