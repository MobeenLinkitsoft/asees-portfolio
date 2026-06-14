import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white shadow-[0_-2px_20px_-5px_rgba(0,0,0,0.03)] mt-auto">
      {/* Upper Footer Grid Links Block */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 grid md:grid-cols-3 gap-12 items-start">
        
        {/* Brand Area - Perfectly matching your upgraded Navbar brand design */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3.5">
            <Image 
              src="/logo1.png" // Using the correct high-res asset
              alt="ASEES Logo" 
              width={65} 
              height={65} 
              className="object-contain filter drop-shadow-sm"
            />
            <div>
              <span className="block font-bold tracking-tight text-xl text-white">
                ASEES
              </span>
              <p className="text-[12px] font-bold text-white tracking-widest uppercase mt-0.5">
                General Construction
              </p>
              <p className="text-[12px] font-bold text-white tracking-widest uppercase">
                Corporation
              </p>
            </div>
          </div>
          <p className="leading-relaxed text-white text-sm max-w-sm mt-2">
            Premium masonry and roofing solutions across Queens and the greater New York area. Built on structural safety, integrity, and elite commercial craftsmanship.
          </p>

          {/* Social Media Links Block - Using High-Quality Inline SVGs */}
          <div className="flex items-center gap-4 pt-2">
            {/* Instagram Link with Custom SVG */}
            <a 
              href="https://www.instagram.com/aseesgeneralconstruction.c?utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 hover:text-amber-500 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300 flex items-center justify-center"
              aria-label="Follow ASEES Construction on Instagram"
            >
              <svg 
                className="w-5 h-5 fill-none stroke-current" 
                strokeWidth="2"
                strokeLinecap="round" 
                strokeLinejoin="round"
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* TikTok Link with Custom SVG */}
            <a 
              href="https://www.tiktok.com/@aseesgeneralconstruction?_r=1&_t=ZP-97BoTdrvQz9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 hover:text-amber-500 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300 flex items-center justify-center"
              aria-label="Follow ASEES Construction on TikTok"
            >
              <svg 
                className="w-5 h-5 fill-current" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.15 1.25 1.26 2.97 1.91 4.73 2v3.77a8.917 8.917 0 0 1-5.11-1.68c-.02 3.45-.02 6.89-.04 10.34a7.13 7.13 0 0 1-2.92 5.17A7.26 7.26 0 0 1 5.3 21.05a7.355 7.355 0 0 1-3.6-7.89 7.24 7.24 0 0 1 5.56-5.46c.02 1.23.01 2.47.02 3.7a3.473 3.473 0 0 0-2.3 3.4 3.511 3.511 0 0 0 3.73 3.47c1.78.07 3.41-1.21 3.65-2.98.08-1.57.04-3.14.05-4.71V.02z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column with matching interactive line transformations */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
            Quick Navigation
          </h4>
          <div className="flex flex-col space-y-3.5 text-[15px] font-medium items-start">
            {["Services", "Portfolio", "About", "Contact"].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase()}`} 
                className="relative py-0.5 tracking-wide text-white transition-colors duration-300 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item === "About" ? "About Us" : item}
              </Link>
            ))}
          </div>
        </div>

        {/* Operational Scope Meta Data Column */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
            Service Locations
          </h4>
          <p className="text-[15px] leading-relaxed text-white font-medium mb-4">
            Proudly delivering premium residential and commercial construction services across:
          </p>
          <div className="flex flex-wrap gap-2">
            {["Queens", "Brooklyn", "Manhattan", "Bronx", "Long Island",'Staten Island','Connecticut','New Jersey'].map((loc) => (
              <span 
                key={loc} 
                className="bg-black text-white border border-white/60 rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Clean Bottom Copyright Band Strip */}
      <div className="border-t border-white py-6 text-center text-xs text-white font-medium tracking-wide bg-black">
        © {new Date().getFullYear()} ASEES General Construction Corporation. All Rights Reserved.
      </div>
    </footer>
  );
}