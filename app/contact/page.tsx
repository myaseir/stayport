export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EB] pt-16 md:pt-12 flex flex-col">
      
      {/* Page Header */}
      <section className="bg-[#1F2421] text-[#E8E5D9] py-20 md:py-32 px-4 text-center relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none"></div>
        
        <div className="relative z-10 px-4 max-w-3xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-4 md:mb-6">
            <span className="h-[1px] w-8 md:w-12 bg-[#D4AF37]/50"></span>
            <h4 className="text-[#D4AF37] text-[10px] md:text-xs tracking-[0.3em] font-semibold uppercase">
              Get in Touch
            </h4>
            <span className="h-[1px] w-8 md:w-12 bg-[#D4AF37]/50"></span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4 md:mb-6 drop-shadow-md">
            Contact Us
          </h1>
          <p className="font-light leading-relaxed text-[#A9B3A7] text-base md:text-lg">
            Have a question about your upcoming stay? We are here to help you plan the perfect Skardu retreat.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Information */}
          <div className="flex flex-col items-start lg:pt-8">
            <h2 className="text-3xl md:text-4xl font-serif text-[#1F2421] mb-10">Hotel Details</h2>
            
            <div className="mb-10 w-full border-l-2 border-[#D4AF37]/40 pl-6">
              <h4 className="text-[#D4AF37] text-[10px] tracking-[0.2em] font-semibold uppercase mb-3">Location</h4>
              <p className="text-[#5C6056] font-light text-base md:text-lg leading-relaxed">
                Nazara Hotel<br />
                Skardu, Gilgit-Baltistan<br />
                Pakistan
              </p>
            </div>

            <div className="mb-10 w-full border-l-2 border-[#D4AF37]/40 pl-6">
              <h4 className="text-[#D4AF37] text-[10px] tracking-[0.2em] font-semibold uppercase mb-3">Direct Contact</h4>
              <p className="text-[#5C6056] font-light text-base md:text-lg mb-2">
                <a href="mailto:info@nazarahotel.com" className="hover:text-[#D4AF37] transition-colors">
                  info@nazarahotel.com
                </a>
              </p>
              <p className="text-[#5C6056] font-light text-base md:text-lg">
                <a href="tel:+923000000000" className="hover:text-[#D4AF37] transition-colors">
                  +92 300 0000000
                </a>
              </p>
            </div>
            
            <div className="w-full border-l-2 border-[#D4AF37]/40 pl-6">
              <h4 className="text-[#D4AF37] text-[10px] tracking-[0.2em] font-semibold uppercase mb-3">Socials</h4>
              <div className="flex gap-6 mt-2">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#5C6056] hover:text-[#D4AF37] transition-colors uppercase tracking-widest text-xs">Instagram</a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-[#5C6056] hover:text-[#D4AF37] transition-colors uppercase tracking-widest text-xs">Facebook</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl border border-[#E5E0D8] relative">
            {/* Subtle decorative corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#D4AF37]/30 m-4 pointer-events-none"></div>

            <h3 className="text-2xl md:text-3xl font-serif text-[#1F2421] mb-8">Send an Inquiry</h3>
            
            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[10px] tracking-[0.2em] text-[#6B705C] uppercase font-semibold">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="border-b border-[#E5E0D8] py-2 focus:outline-none focus:border-[#D4AF37] transition-colors bg-transparent text-[#1F2421] w-full placeholder-[#A9B3A7]" 
                  placeholder="John Doe"
                  required 
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[10px] tracking-[0.2em] text-[#6B705C] uppercase font-semibold">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="border-b border-[#E5E0D8] py-2 focus:outline-none focus:border-[#D4AF37] transition-colors bg-transparent text-[#1F2421] w-full placeholder-[#A9B3A7]" 
                  placeholder="john@example.com"
                  required 
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] tracking-[0.2em] text-[#6B705C] uppercase font-semibold">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="border-b border-[#E5E0D8] py-2 focus:outline-none focus:border-[#D4AF37] transition-colors bg-transparent text-[#1F2421] resize-none w-full placeholder-[#A9B3A7]" 
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <button 
                type="button" 
                className="mt-6 w-full px-8 py-5 bg-[#4A5D4E] hover:bg-[#3A4A3D] text-[#E8E5D9] rounded-sm text-[11px] md:text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 shadow-md hover:-translate-y-1 border border-[#6B705C]"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}