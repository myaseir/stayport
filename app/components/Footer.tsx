import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const BOOKING_LINK = "#";

  return (
    <footer className="bg-[#1F2421] text-[#A9B3A7] border-t border-[#4A4E44]/50 relative overflow-hidden">
      
      {/* Decorative top accent line (Gold gradient) */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#1F2421] via-[#D4AF37]/40 to-[#1F2421]"></div>
      
      {/* Subtle background texture for the rustic resort feel */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left lg:col-span-1 border-b border-[#4A4E44]/50 md:border-none pb-12 md:pb-0">
            <h3 className="text-2xl font-serif text-[#E8E5D9] tracking-[0.15em] mb-4">
             Nazara Hotel
            </h3>
            <p className="text-sm leading-relaxed mb-8 font-light text-[#A9B3A7] max-w-xs md:max-w-none">
              An elevated mountain sanctuary in Skardu, blending rustic elegance with unparalleled views of the northern peaks.
            </p>
            {/* Social Icons */}
            <div className="flex gap-6 mt-auto">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#6B705C] hover:text-[#D4AF37] transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-[#6B705C] hover:text-[#D4AF37] transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Explore (Internal Links) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left border-b border-[#4A4E44]/50 md:border-none pb-12 md:pb-0">
            <h4 className="text-[#D4AF37] text-[10px] tracking-[0.2em] mb-8 font-semibold uppercase">Explore</h4>
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-light hover:text-[#E8E5D9] hover:translate-x-1 transition-all">Home</Link>
              <Link href="/about" className="text-sm font-light hover:text-[#E8E5D9] hover:translate-x-1 transition-all">Our Story</Link>
              <Link href="/rooms" className="text-sm font-light hover:text-[#E8E5D9] hover:translate-x-1 transition-all">Accommodations</Link>
              <Link href="/gallery" className="text-sm font-light hover:text-[#E8E5D9] hover:translate-x-1 transition-all">Gallery</Link>
              <Link href="/contact" className="text-sm font-light hover:text-[#E8E5D9] hover:translate-x-1 transition-all">Contact Us</Link>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left border-b border-[#4A4E44]/50 md:border-none pb-12 md:pb-0">
            <h4 className="text-[#D4AF37] text-[10px] tracking-[0.2em] mb-8 font-semibold uppercase">Contact</h4>
            <div className="flex flex-col gap-4 text-sm font-light">
              <p className="leading-relaxed text-[#A9B3A7]">Skardu, Gilgit-Baltistan<br/>Pakistan</p>
              <a href="mailto:info@nazarahotel.com" className="hover:text-[#E8E5D9] transition-colors mt-2 text-[#A9B3A7]">
                info@nazarahotel.com
              </a>
              <a href="tel:+923000000000" className="hover:text-[#E8E5D9] transition-colors text-[#A9B3A7]">
                +92 300 0000000
              </a>
            </div>
          </div>

          {/* Column 4: Location/Action */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[#D4AF37] text-[10px] tracking-[0.2em] mb-8 font-semibold uppercase">Reservations</h4>
            <p className="text-sm font-light leading-relaxed mb-6 text-[#A9B3A7] max-w-xs md:max-w-none">
              Secure your stay in the clouds. Advance bookings are highly recommended during peak season.
            </p>
            <a 
              href={BOOKING_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border-b border-[#D4AF37] text-[#E8E5D9] pb-1 hover:text-[#D4AF37] transition-colors tracking-[0.15em] text-xs font-medium uppercase"
            >
              Book Your Stay &rarr;
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-[#4A4E44]/50 bg-[#1A1E1C] relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] tracking-wide font-light text-[#6B705C]">
          <p className="text-center md:text-left">&copy; {currentYear} Nazara Hotel Skardu. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-[#E8E5D9] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#E8E5D9] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}