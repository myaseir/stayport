import Link from "next/link";

export default function GalleryPage() {
  // Reliable, high-quality placeholder images of rustic mountain resorts
  const images = [
    "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=800", // Landscape/Exterior
    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800", // Room Interior
    "https://images.pexels.com/photos/172892/pexels-photo-172892.jpeg?auto=compress&cs=tinysrgb&w=800", // Balcony view
    "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800", // Timber details
    "https://images.pexels.com/photos/1743273/pexels-photo-1743273.jpeg?auto=compress&cs=tinysrgb&w=800", // Cozy Loft
    "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800", // Family Lounge
  ];

  const BOOKING_LINK = "#";

  return (
    <main className="min-h-screen bg-[#F4F1EB] pt-16 md:pt-12">
      
      {/* Page Header - Deep Forest/Slate Tone */}
      <section className="bg-[#1F2421] text-[#E8E5D9] py-20 md:py-32 px-4 text-center relative overflow-hidden">
        {/* Subtle background texture overlay for rustic feel */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none"></div>
        
        <div className="relative z-10 px-4 max-w-3xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-4 md:mb-6">
            <span className="h-[1px] w-8 md:w-12 bg-[#D4AF37]/50"></span>
            <h4 className="text-[#D4AF37] text-[10px] md:text-xs tracking-[0.3em] font-semibold uppercase">
              Visual Journey
            </h4>
            <span className="h-[1px] w-8 md:w-12 bg-[#D4AF37]/50"></span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4 md:mb-6 drop-shadow-md">
            A Glimpse of Serenity
          </h1>
          <p className="font-light leading-relaxed text-[#A9B3A7] text-base md:text-lg">
            Explore the rugged beauty, authentic craftsmanship, and breathtaking views that await you at Nazara Hotel.
          </p>
        </div>
      </section>

      {/* Photo Grid Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="group relative aspect-[4/5] overflow-hidden bg-[#2A3026] rounded-sm shadow-md"
            >
              {/* Image with slow zoom on hover */}
              <img 
                src={src} 
                alt={`Nazara Hotel Skardu Gallery Image ${index + 1}`} 
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              
              {/* Dark overlay that subtly lightens on hover */}
              <div className="absolute inset-0 bg-[#1F2421]/20 transition-colors duration-700 group-hover:bg-transparent pointer-events-none"></div>

              {/* Dynamic Inner Gold Frame (Editorial effect) */}
              <div className="absolute inset-0 border border-[#F4F1EB]/40 m-3 md:m-4 rounded-sm pointer-events-none transition-all duration-700 ease-out group-hover:m-5 group-hover:border-[#D4AF37]/70"></div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 md:mt-28 text-center">
          <h3 className="text-2xl md:text-3xl font-serif text-[#2A3026] mb-8">
            Ready to experience the view?
          </h3>
          <a 
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto px-10 py-4 md:py-5 bg-[#4A5D4E] hover:bg-[#3A4A3D] text-[#E8E5D9] rounded-sm text-[11px] md:text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 shadow-xl hover:-translate-y-1 border border-[#6B705C]"
          >
            Reserve Your Stay
          </a>
        </div>
      </section>
    </main>
  );
}