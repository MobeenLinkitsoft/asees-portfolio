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
  // Freshly integrated image assets mapped to precise categories
  const portfolioItems = [
    {
      src: '/showcase/Stairs1.jpeg',
      title: 'Premium Stone Tread Staircase Build',
      category: 'Concrete Flatwork',
      location: 'Queens, NY',
      scope: 'Structural masonry steps featuring premium polished stone treads and custom brick veneer risers.',
    },
    {
      src: '/showcase/Stairs2.jpeg',
      title: 'Structural Stoop Foundation Alignment',
      category: 'Parapet Walls & Lintels',
      location: 'Queens, NY',
      scope: 'Complete structural rebuild of front entryway foundation and load-bearing perimeter walls.',
    },
    {
      src: '/showcase/Flor1.jpeg',
      title: 'Multi-Panel Concrete Slab Construction',
      category: 'Concrete Flatwork',
      location: 'Brooklyn, NY',
      scope: 'Freshly poured continuous concrete flatwork with precision tool-cut expansion joints for seasonal shifting.',
    },
    {
      src: '/showcase/wooden1.jpeg',
      title: 'Structural Enclosure & Weatherproofing',
      category: 'Waterproofing & Restoration',
      location: 'Bronx, NY',
      scope: 'Plywood sheathing and protective moisture barrier application for front facade structural extensions.',
    },
    {
      src: '/showcase/Stairs3.jpeg',
      title: 'Custom Brick Pillars & Concrete Walkway',
      category: 'Concrete Flatwork',
      location: 'Long Island, NY',
      scope: 'Finished structural boundary setup with freshly poured smooth concrete walkway and capped brick pillars.',
    },
    {
      src: '/showcase/Stairs4.jpeg',
      title: 'Boundary Wall & Step Integration',
      category: 'Concrete Flatwork',
      location: 'Long Island, NY',
      scope: 'Seamless architectural integration of custom stone-capped masonry pillars and graded concrete paving.',
    },
    {
      src: '/showcase/Stairs15.jpeg',
      title: 'Complete Facade Brick Restoration',
      category: 'Brick Grinding & Pointing',
      location: 'Queens, NY',
      scope: 'Extensive architectural facade rebuild featuring integrated stone steps and weather-sealed deep pointing.',
    },
    {
      src: '/showcase/block.jpeg',
      title: 'Cinder Block Wall Reinforcement',
      category: 'Parapet Walls & Lintels',
      location: 'Brooklyn, NY',
      scope: 'Active mortar application and structural cinder block reinforcement within a load-bearing envelope opening.',
    },
    {
      src: '/showcase/miniblock.jpeg',
      title: 'Seamless Brick Patching & Pointing',
      category: 'Brick Grinding & Pointing',
      location: 'Manhattan, NY',
      scope: 'Targeted mortar extraction and precision brick replacement to restore full facade integrity.',
    },
    {
      src: '/showcase/masonry.jpeg',
      title: 'Architectural Baluster Restoration',
      category: 'Painting & Restoration',
      location: 'Queens, NY',
      scope: 'Installation and structural restoration of decorative architectural stone balusters and railing components.',
    },
  ];

  // Updated categories for filtering logic
  const categories = [
    'All', 
    'Parapet Walls & Lintels', 
    'Brick Grinding & Pointing', 
    'Concrete Flatwork', 
    'Waterproofing & Restoration', 
    'Roofing', 
    'Painting & Restoration'
  ];
  
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

      {/* SECTION 2: INTERACTIVE FILTER NAVIGATION CONTROLLER (FIXED VISIBILITY) */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 w-full sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-900/60 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all border ${
                selectedCategory === category
                  ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-lg shadow-amber-500/10'
                  : 'bg-slate-900/40 text-slate-400 border-slate-900 hover:text-white hover:border-slate-800'
              }`}
            >
              {category === 'All' && <Grid className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />}
              {category === 'Parapet Walls & Lintels' && <Hammer className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />}
              {category === 'Brick Grinding & Pointing' && <Layers className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />}
              {category === 'Concrete Flatwork' && <Construction className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />}
              {category === 'Waterproofing & Restoration' && <ShieldCheck className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />}
              {category === 'Roofing' && <FolderGit2 className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />}
              {category === 'Painting & Restoration' && <Layers className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />}
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
                  <div className="absolute top-4 left-4 px-2.5 py-1 bg-slate-950/90 border border-slate-800 rounded-lg text-[10px] font-bold text-amber-500 uppercase tracking-widest font-mono shadow-md">
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