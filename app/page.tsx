import Hero from "./components/Hero";

export default function Home() {
  const BOOKING_LINK = "#";

  return (
    <main className="min-h-screen bg-[#F4F1EB] flex flex-col">
      {/* 1. The Hero Section (Uses the updated Hero component) */}
      <Hero />
      
      {/* 2. Welcome / The Experience Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1 relative h-[500px] rounded-t-full rounded-b-sm overflow-hidden shadow-2xl group">
            <img 
              src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="View of Skardu Mountains from Nazara Hotel" 
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Elegant Inner Gold Frame */}
            <div className="absolute inset-0 border border-[#F4F1EB]/50 m-4 rounded-t-full rounded-b-sm pointer-events-none transition-all duration-700 group-hover:m-5 group-hover:border-[#D4AF37]/80"></div>
          </div>
          
          <div className="order-1 md:order-2 flex flex-col items-start">
            <h4 className="text-[#D4AF37] font-semibold tracking-[0.25em] text-[10px] md:text-xs uppercase mb-4">
              The Experience
            </h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1F2421] leading-tight mb-6">
              A Sanctuary Crafted <br/> from Stone & Timber
            </h2>
            <div className="border-l-2 border-[#D4AF37]/40 pl-5 py-1 mb-8">
              <p className="text-[#5C6056] leading-relaxed mb-4 text-base md:text-lg font-light">
                Nestled in the breathtaking landscapes of Skardu, Nazara Hotel offers a unique blend of traditional Gilgit-Baltistan architecture and modern luxury. 
              </p>
              <p className="text-[#5C6056] leading-relaxed text-base md:text-lg font-light">
                Every detail, from the hand-carved timber railings to the locally sourced natural stone walls, has been designed to harmonize with the majestic mountain peaks that surround us.
              </p>
            </div>
            <a 
              href="#rooms" 
              className="inline-flex items-center border-b border-[#D4AF37] text-[#1F2421] pb-1 hover:text-[#D4AF37] transition-colors uppercase tracking-[0.2em] text-xs font-medium group"
            >
              Discover Our Rooms 
              <span className="ml-2 transform transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>

        </div>
      </section>

      {/* 3. Amenities / Features Section */}
      <section className="bg-[#1F2421] py-24 text-[#E8E5D9] relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <span className="h-[1px] w-8 bg-[#D4AF37]/50"></span>
            <h4 className="text-[#D4AF37] text-[10px] tracking-[0.3em] font-semibold uppercase">The Essentials</h4>
            <span className="h-[1px] w-8 bg-[#D4AF37]/50"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-16 drop-shadow-sm">Hotel Amenities</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <svg className="w-10 h-10 text-[#D4AF37] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
              </svg>
              <h3 className="text-xl font-serif text-[#E8E5D9] mb-3">Panoramic Views</h3>
              <p className="text-sm font-light text-[#A9B3A7] leading-relaxed">Wake up to unobstructed, breathtaking views of the Skardu valley and towering peaks.</p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <svg className="w-10 h-10 text-[#D4AF37] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
              </svg>
              <h3 className="text-xl font-serif text-[#E8E5D9] mb-3">Cozy Heating</h3>
              <p className="text-sm font-light text-[#A9B3A7] leading-relaxed">Stay warm during the crisp mountain nights with our premium heating systems and plush bedding.</p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <svg className="w-10 h-10 text-[#D4AF37] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </svg>
              <h3 className="text-xl font-serif text-[#E8E5D9] mb-3">High-Speed WiFi</h3>
              <p className="text-sm font-light text-[#A9B3A7] leading-relaxed">Stay seamlessly connected with the outside world, even while disconnecting in the heart of nature.</p>
            </div>
            {/* Feature 4 */}
            <div className="flex flex-col items-center">
              <svg className="w-10 h-10 text-[#D4AF37] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              <h3 className="text-xl font-serif text-[#E8E5D9] mb-3">Authentic Architecture</h3>
              <p className="text-sm font-light text-[#A9B3A7] leading-relaxed">Sleep inside masterfully crafted rooms featuring rich local wood and rugged natural stone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Rooms Section */}
      <section id="rooms" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-[#D4AF37] font-semibold tracking-[0.25em] text-[10px] md:text-xs uppercase mb-3">Accommodations</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1F2421]">Your Rustic Retreat Awaits</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Room Card 1 */}
          <div className="group flex flex-col bg-white rounded-sm border border-[#E5E0D8] overflow-hidden hover:shadow-2xl hover:shadow-[#1F2421]/10 transition-all duration-500">
            <div className="aspect-[3/2] overflow-hidden relative bg-[#1F2421]">
              <img 
                src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="The Stone Suite at Nazara Hotel" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
              />
            </div>
            <div className="p-8 md:p-10 text-center border-t-[3px] border-[#D4AF37] flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-serif text-[#1F2421] mb-3">The Stone Suite</h3>
                <p className="text-[#5C6056] font-light mb-8 leading-relaxed">Features exposed stone walls, warm timber flooring, and a private balcony facing the mountains.</p>
              </div>
              <a 
                href={BOOKING_LINK} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-block w-full px-6 py-4 bg-[#F4F1EB] border border-[#D4AF37]/50 text-[#1F2421] hover:bg-[#4A5D4E] hover:border-[#4A5D4E] hover:text-[#E8E5D9] transition-colors text-[11px] tracking-[0.2em] uppercase font-medium"
              >
                Check Availability
              </a>
            </div>
          </div>

          {/* Room Card 2 */}
          <div className="group flex flex-col bg-white rounded-sm border border-[#E5E0D8] overflow-hidden hover:shadow-2xl hover:shadow-[#1F2421]/10 transition-all duration-500">
            <div className="aspect-[3/2] overflow-hidden relative bg-[#1F2421]">
              <img 
                src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="The Timber Room at Nazara Hotel" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
              />
            </div>
            <div className="p-8 md:p-10 text-center border-t-[3px] border-[#D4AF37] flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-serif text-[#1F2421] mb-3">The Timber Room</h3>
                <p className="text-[#5C6056] font-light mb-8 leading-relaxed">Wrapped in warm, authentic local wood with large windows designed to let in the morning mountain light.</p>
              </div>
              <a 
                href={BOOKING_LINK} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-block w-full px-6 py-4 bg-[#F4F1EB] border border-[#D4AF37]/50 text-[#1F2421] hover:bg-[#4A5D4E] hover:border-[#4A5D4E] hover:text-[#E8E5D9] transition-colors text-[11px] tracking-[0.2em] uppercase font-medium"
              >
                Check Availability
              </a>
            </div>
          </div>
        </div>
        
        {/* Link to all rooms */}
        <div className="text-center mt-12">
          <a 
            href="/rooms" 
            className="inline-block border-b border-[#1F2421] text-[#1F2421] pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors uppercase tracking-[0.2em] text-xs font-medium"
          >
            View All Accommodations
          </a>
        </div>
      </section>

    </main>
  );
}