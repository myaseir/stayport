import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EB] pt-16 md:pt-10">
      
      {/* Page Header - Deep Forest/Slate Tone */}
      <section className="bg-[#1F2421] text-[#E8E5D9] py-20 md:py-32 px-4 text-center relative overflow-hidden">
        {/* Subtle background texture overlay for rustic feel */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none"></div>
        
        <div className="relative z-10 px-4 max-w-3xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-4 md:mb-6">
            <span className="h-[1px] w-8 md:w-12 bg-[#D4AF37]/50"></span>
            <h4 className="text-[#D4AF37] text-[10px] md:text-xs tracking-[0.3em] font-semibold uppercase">
              Our Story
            </h4>
            <span className="h-[1px] w-8 md:w-12 bg-[#D4AF37]/50"></span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4 md:mb-6 drop-shadow-md">
            Born from the Mountains
          </h1>
          <p className="font-light leading-relaxed text-[#A9B3A7] text-base md:text-lg">
            Discover how a vision of rustic elegance became Skardu's premier boutique sanctuary.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-start order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1F2421] mb-6 md:mb-8">
              A Harmony of Stone & Timber
            </h2>
            
            {/* Editorial Accent Line */}
            <div className="border-l-2 border-[#D4AF37]/40 pl-5 md:pl-6 py-1 mb-8 md:mb-10">
              <p className="text-[#5C6056] leading-relaxed mb-6 font-light text-base md:text-lg">
                Nazara Hotel was conceived with a singular vision: to create a retreat that feels like a natural extension of the Skardu landscape. We believed that true luxury lies in authenticity.
              </p>
              <p className="text-[#5C6056] leading-relaxed font-light text-base md:text-lg">
                Every wall is built from locally sourced natural stone, and every balcony features hand-carved timber railings. By employing local artisans and traditional Gilgit-Baltistan building techniques, we crafted a space that is as warm and inviting as it is rugged and enduring.
              </p>
            </div>
            
            <Link 
              href="/gallery" 
              className="w-full sm:w-auto text-center px-8 py-4 bg-[#4A5D4E] hover:bg-[#3A4A3D] text-[#E8E5D9] rounded-sm text-[11px] md:text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 shadow-md hover:-translate-y-1 border border-[#6B705C]"
            >
              View the Gallery
            </Link>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 w-full">
            <div className="relative aspect-[4/5] md:aspect-square lg:h-[600px] w-full rounded-sm overflow-hidden shadow-2xl bg-[#1F2421] group">
              {/* Reliable high-quality image of rustic architecture */}
              <img 
                src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Nazara Hotel Architecture Details" 
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out opacity-90 group-hover:opacity-100"
              />
              {/* Dynamic Inner Gold Frame */}
              <div className="absolute inset-0 border border-[#F4F1EB]/30 m-4 md:m-5 rounded-sm pointer-events-none transition-all duration-700 ease-out group-hover:m-6 group-hover:border-[#D4AF37]/70"></div>
            </div>
          </div>
          
        </div>
      </section>
      
    </main>
  );
}