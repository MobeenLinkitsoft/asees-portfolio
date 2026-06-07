'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  FolderGit2, 
  Layers, 
  Construction, 
  Hammer, 
  ShieldCheck, 
  ExternalLink, 
  MapPin, 
  Phone,
  Grid
} from 'lucide-react';

export default function PortfolioPage() {
  // All active showcase assets mapped cleanly
  const portfolioItems = [
    {
      src: '/showcase/brick2.jpeg',
      title: 'Precision Brick Parapet Wall',
      category: 'Masonry Restoration',
      location: 'Queens, NY',
      scope: 'Mortar extraction, flashing alignment, and structural code compliance adjustments.',
    },
    {
      src: '/showcase/floor1.jpeg',
      title: 'Flawless Sidewalk Finish & Expansion Joints',
      category: 'Concrete Work',
      location: 'Brooklyn, NY',
      scope: 'Pitch calibration for water runoff and tool-cut joints to prevent seasonal cracking.',
    },
    {
      src: '/showcase/floor2.jpeg',
      title: 'On-Site Quality Inspection & Safety Compliance',
      category: 'Project Management',
      location: 'Queens, NY',
      scope: 'Rigid scaffolding checks and OSHA hazard parameter management frameworks.',
    },
    {
      src: '/showcase/floor3.jpeg',
      title: 'Premium Finished Backyard Concrete Patio',
      category: 'Concrete Work',
      location: 'Long Island, NY',
      scope: 'High-density aggregate base configuration with polished smooth border framing.',
    },
    {
      src: '/showcase/brick5.jpeg',
      title: 'Commercial Grade Driveway Under Construction',
      category: 'Concrete Work',
      location: 'Bronx, NY',
      scope: 'Subgrade soil compaction and structural grid rebar placement layers.',
    },
    {
      src: '/showcase/brick3.jpeg',
      title: 'Structural Parapet Boundary Alignment',
      category: 'Masonry',
      location: 'Queens, NY',
      scope: 'Complete alignment rectification of bowing historic property border walls.',
    },
    {
      src: '/showcase/brick4.jpeg',
      title: 'Active Scaffolding Masonry Operations',
      category: 'Structural Repairs',
      location: 'Manhattan, NY',
      scope: 'Deep grinding extraction on historical envelope layers before repointing.',
    },
  ];

  // Unique categories for filtering logic
  const categories = ['All', 'Masonry', 'Concrete Work', 'Structural Repairs', 'Project Management'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter items matching state
  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(item.category.toLowerCase()));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* SECTION 1: HEADER CAPSTONE */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-900 bg-gradient-to-b from-slate-900 to-slate-950 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-500/5 px-3 py-1 rounded-full border border-amber-500/20">
            <FolderGit2 className="w-3.5 h-3.5" /> Site Work Registries
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase text-white">
            Our Completed <span className="text-amber-500">Projects</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            No stock files, no digital renders. Browse unedited verification captures straight from our active structural sites across New York.
          </p>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE FILTER NAVIGATION CONTROLLER */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-900/60">
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none mask-image">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all shrink-0 border whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-lg shadow-amber-500/10'
                  : 'bg-slate-900/40 text-slate-400 border-slate-900 hover:text-white hover:border-slate-800'
              }`}
            >
              {category === 'All' && <Grid className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />}
              {category === 'Masonry' && <Hammer className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />}
              {category === 'Concrete Work' && <Construction className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />}
              {category === 'Structural Repairs' && <Layers className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />}
              {category === 'Project Management' && <ShieldCheck className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />}
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* SECTION 3: DYNAMIC PORTFOLIO GRID */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              className="group bg-slate-900/20 border border-slate-900 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-slate-800 hover:bg-slate-900/40"
            >
              <div>
                {/* Image Media Frame wrapper */}
                <div className="relative aspect-[4/3] w-full bg-slate-950 border-b border-slate-900 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 scale-100 group-hover:scale-105"
                    sizes="(max-w-768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Pill Tag Overlay */}
                  <div className="absolute top-4 left-4 px-2.5 py-1 bg-slate-950/90 border border-slate-800 rounded-lg text-[10px] font-bold text-amber-500 uppercase tracking-widest font-mono">
                    {item.category}
                  </div>
                </div>

                {/* Content Core Body */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {item.scope}
                  </p>
                </div>
              </div>

              {/* Technical Code Identifier Footer Tag */}
              <div className="mx-6 pb-6 pt-4 border-t border-slate-900/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Ref: {item.src.replace('/showcase/', '')}</span>
                <span className="flex items-center gap-1 text-slate-600 group-hover:text-amber-500/80 transition-colors">
                  Verified Site <ExternalLink className="w-3 h-3" />
                </span>
              </div>

            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-24 text-center max-w-md mx-auto space-y-2">
            <p className="text-base font-bold text-white">No explicit items match this category type</p>
            <p className="text-xs text-slate-500">Try modifying your filtering selection parameters using the navigation panel above.</p>
          </div>
        )}
      </section>

      {/* SECTION 4: CAPSTONE TRUST CTAS */}
      <section className="py-20 px-4 text-center bg-gradient-to-t from-slate-900 to-transparent border-t border-slate-900/40">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 text-xs font-mono text-slate-400 bg-slate-950">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" /> Free Commercial Consultations Offered Across NYC
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white uppercase">Request a Field Estimate</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
            Ready to add your project blueprint to our gallery? Call our team layout directly to schedule raw surface inspections.
          </p>
          <div className="pt-2">
            <a 
              href="tel:9292789239" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-slate-950 font-extrabold text-sm uppercase tracking-wider rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/10"
            >
              <Phone className="w-4 h-4 fill-current" /> Contact Ricky: 929-278-9239
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}