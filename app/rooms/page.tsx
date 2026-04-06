import React from 'react';

export default function RoomsPage() {
  // Updated to Nazara Hotel booking link
  const BOOKING_LINK = "https://www.booking.com/hotel/pk/nazara-hotel.html";

  // 5 distinct rooms with reliable, wide-angle landscape images
  const rooms = [
    {
      name: "The Stone Suite",
      size: "45 sq m",
      capacity: "2 Guests",
      description: "Our signature suite features masterfully crafted exposed stone walls and warm timber flooring. Step out onto your private balcony to enjoy uninterrupted, panoramic views of the Skardu valley and surrounding peaks.",
      amenities: ["King Size Bed", "Private Balcony", "Mountain View", "En-suite Bathroom"],
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "The Timber Room",
      size: "38 sq m",
      capacity: "2 Guests",
      description: "Wrapped in authentic, locally sourced wood, this room exudes a warm and cozy cabin atmosphere. Large, strategically placed windows let in the golden morning light, allowing you to wake up to the majesty of the mountains right from your bed.",
      amenities: ["Queen Size Bed", "Viewing Windows", "Cozy Seating", "Free WiFi"],
      image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "The Classic Rustic Family",
      size: "60 sq m",
      capacity: "4 Guests",
      description: "Designed for families or small groups, this spacious room blends our signature stone and wood aesthetics with extra space to relax. It offers a comfortable retreat after a long day of exploring the lakes and trails of Gilgit-Baltistan.",
      amenities: ["Two Queen Beds", "Spacious Layout", "Valley View", "Tea/Coffee Maker"],
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "The Valley View Balcony",
      size: "40 sq m",
      capacity: "2 Guests",
      description: "Perched higher up in the lodge, this room focuses entirely on the outdoors. The extended private timber balcony serves as your personal viewing deck for the stunning Skardu sunsets, complete with rugged stone interior accents.",
      amenities: ["Queen Size Bed", "Extended Balcony", "Premium Heating", "Work Desk"],
      image: "https://images.pexels.com/photos/172892/pexels-photo-172892.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "The Explorer's Loft",
      size: "35 sq m",
      capacity: "2 Guests",
      description: "A cozy, elevated retreat under the wooden eaves of the lodge. Featuring skylight windows and a deeply rustic atmosphere, it is the perfect intimate basecamp for hikers and adventurers looking to disconnect.",
      amenities: ["Double Bed", "Skylight Views", "Reading Nook", "En-suite Bathroom"],
      image: "https://images.pexels.com/photos/1743273/pexels-photo-1743273.jpeg?auto=compress&cs=tinysrgb&w=1200",
    }
  ];

  return (
    <main className="min-h-screen bg-[#F4F1EB] pt-16 md:pt-12">
      
      {/* Page Header - Updated to match Nazara Hotel's deep slate & gold theme */}
      <section className="bg-[#1F2421] text-[#E8E5D9] py-20 md:py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none"></div>
        
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-4 md:mb-6">
            <span className="h-[1px] w-8 md:w-12 bg-[#D4AF37]/50"></span>
            <h4 className="text-[#D4AF37] text-[10px] md:text-xs tracking-[0.3em] font-semibold uppercase">
              Elevated Comfort
            </h4>
            <span className="h-[1px] w-8 md:w-12 bg-[#D4AF37]/50"></span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4 md:mb-6 drop-shadow-md">
            Our Rooms & Suites
          </h1>
          <p className="font-light leading-relaxed text-[#A9B3A7] text-base md:text-lg">
            Experience the perfect balance of rugged mountain charm and refined comfort. Every room at Nazara Hotel is an eco-conscious sanctuary crafted from nature.
          </p>
        </div>
      </section>

      {/* Rooms Listing */}
      <section className="py-16 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-20 md:gap-32">
          
          {rooms.map((room, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center group`}
            >
              
              {/* Room Image - Upgraded with Gallery's Luxury Double Frame effect */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[3/2] w-full rounded-sm overflow-hidden shadow-2xl bg-[#1F2421]">
                  <img 
                    src={room.image} 
                    alt={`${room.name} at Nazara Hotel`} 
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  {/* Dynamic Inner Gold Frame */}
                  <div className="absolute inset-0 border border-[#F4F1EB]/30 m-3 md:m-4 rounded-sm pointer-events-none transition-all duration-700 ease-out group-hover:m-5 group-hover:border-[#D4AF37]/70"></div>
                </div>
              </div>

              {/* Room Details */}
              <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                
                {/* Size & Capacity */}
                <div className="flex gap-3 md:gap-4 text-[10px] md:text-xs tracking-[0.2em] uppercase font-semibold text-[#6B705C] mb-3 md:mb-4">
                  <span>{room.size}</span>
                  <span className="text-[#D4AF37]">•</span>
                  <span>{room.capacity}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F2421] mb-4 md:mb-6">
                  {room.name}
                </h2>
                
                {/* Editorial Accent Line */}
                <div className="border-l-2 border-[#D4AF37]/40 pl-4 md:pl-6 py-1 mb-6 md:mb-8">
                  <p className="text-[#5C6056] leading-relaxed font-light text-base md:text-lg">
                    {room.description}
                  </p>
                </div>
                
                {/* Clean, Badge-Style Amenities */}
                <div className="mb-8 md:mb-10 w-full">
                  <div className="flex flex-wrap gap-3">
                    {room.amenities.map((amenity, idx) => (
                      <span 
                        key={idx} 
                        className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-[#E5E0D8] text-[#4A4E44] font-light text-xs md:text-sm shadow-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-2"></span>
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mobile-Friendly Full-Width Button */}
                <a 
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center px-8 py-4 bg-[#4A5D4E] hover:bg-[#3A4A3D] text-[#E8E5D9] rounded-sm text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 shadow-md hover:-translate-y-1 border border-[#6B705C]"
                >
                  Check Availability
                </a>
              </div>
              
            </div>
          ))}

        </div>
      </section>
      
    </main>
  );
}