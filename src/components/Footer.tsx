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
                className="bg-whitetext-white border border-white/60 rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide"
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