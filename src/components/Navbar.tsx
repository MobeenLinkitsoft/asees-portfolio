"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-20 justify-between items-center">
          
          {/* Logo Brand Area with smooth interactive scale scale */}
          <Link 
            href="/" 
            className="flex items-center gap-3.5 group transform active:scale-95 transition-all duration-300 ease-out"
          >
            <div className="relative overflow-hidden transition-transform duration-500 ease-out group-hover:scale-105">
              <Image 
                src="/logo1.png" 
                alt="ASEES Logo" 
                width={65} 
                height={65} 
                className="object-contain filter drop-shadow-sm"
                priority 
              />
            </div>
            <div>
              <span className="block font-bold tracking-tight text-xl text-slate-900 transition-colors duration-300 group-hover:text-amber-500">
                ASEES
              </span>
              <p className="text-[12px] font-bold text-slate-400 tracking-widest uppercase mt-0.5">
                General Construction
              </p>
                <p className="text-[12px] font-bold text-slate-400 tracking-widest uppercase">
                Corporation
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links with animating underline strips */}
          <div className="hidden md:flex items-center gap-10 font-medium text-sm text-slate-600">
            {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              return (
                <Link 
                  key={item} 
                  href={path} 
                  className="relative text-[16px] py-2 tracking-wide transition-colors duration-300 hover:text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </Link>
              );
            })}
          </div>

         {/* Premium Animated Call Button with Icon */}
<div className="hidden md:block">
  <a 
    href="tel:3475096977" 
    className="inline-flex items-center justify-center gap-2 bg-slate-950 text-white text-xs font-bold tracking-wider px-6 py-3 rounded-full shadow-sm transform transition-all duration-300 ease-out hover:bg-amber-500 hover:text-slate-950 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(245,158,11,0.4)] active:translate-y-0 group"
  >
    {/* Clean, responsive SVG Phone Icon */}
    <svg 
      className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:rotate-12" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      strokeWidth="2.5"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.157-.441.009-.928.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.75z" 
      />
    </svg>
    <span>CALL NOW</span>
  </a>
</div>

          {/* Mobile Hamburger Icon */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-slate-800 focus:outline-none p-2 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide Down */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 px-6 py-6 space-y-4 font-medium text-slate-700 flex flex-col shadow-xl animate-fadeIn">
          <Link href="/" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-50 hover:text-amber-500 transition-colors">Home</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-50 hover:text-amber-500 transition-colors">Services</Link>
          <Link href="/portfolio" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-50 hover:text-amber-500 transition-colors">Portfolio</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-50 hover:text-amber-500 transition-colors">About Us</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="py-2 hover:text-amber-500 transition-colors">Contact</Link>
          <div className="pt-4 flex flex-col gap-2">
            <a href="tel:3475096977" className="bg-slate-950 text-white text-center text-xs font-bold py-3 rounded-full hover:bg-amber-500 hover:text-slate-950 transition-all">
              Office: (347) 509-6977
            </a>
            <a href="tel:9292789239" className="bg-slate-100 text-slate-800 text-center text-xs font-bold py-3 rounded-full hover:bg-slate-200 transition-all">
              Ricky: (929) 278-9239
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}