'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Hammer, 
  Layers, 
  DropletsIcon, 
  Construction, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  HardHat,
  Phone,
  ArrowUpRight,
  ClipboardCheck,
  Zap,
  CheckCircle,
  AlertTriangle,
  Building
} from 'lucide-react';

export default function ServicesPage() {
  const fullServices = [
    { 
      name: "Brick Grinding & Pointing", 
      icon: <Hammer className="w-6 h-6 text-amber-500" />,
      description: "Removing damaged structural mortar joints safely using dust-controlled grinding rigs and packing them with fresh, high-density matching compositions to stop structural decay.",
      features: ["Dust-Controlled Grinding", "Historical Mortar Matching", "Weatherproof Joint Sealing"]
    },
    { 
      name: "Parapet Walls & Lintels", 
      icon: <Layers className="w-6 h-6 text-amber-500" />,
      description: "Complete roof perimeter wall teardowns and rebuilds. We install structural code-compliant ties, counter-flashing, and steel lintel configurations to fix bowing brickwork.",
      features: ["Steel Lintel Reinforcement", "Code-Compliant Parapet Rebuilds", "Flashing Integration"]
    },
    { 
      name: "Concrete Sidewalks & Patios", 
      icon: <Construction className="w-6 h-6 text-amber-500" />,
      description: "Commercial-grade concrete mixing and flatwork installation. Engineered with exact pitch calculations for optimal water drainage and tool-cut expansion joints to eliminate seasonal cracking.",
      features: ["Backyard & Driveway Patios", "DOT Violation Corrections", "Broom & Smooth Finish Textures"]
    },
    { 
      name: "Waterproofing & Facade Sealing", 
      icon: <DropletsIcon className="w-6 h-6 text-amber-500" />,
      description: "Comprehensive diagnostic inspection followed by defensive high-density liquid membrane or chemical injection barriers. Stops foundation leaks and exterior envelope moisture ingress.",
      features: ["Facade Membrane Coatings", "Foundation Leak Injections", "Elastomeric Sealants"]
    },
    { 
      name: "Terracotta Restoration & Care", 
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      description: "Artistic masonry cleaning, composite stitching, and historical compound configurations designed specifically for structural safety compliance on vintage facades.",
      features: ["Structural Anchor Pinning", "Gentle Chemical Wash", "Architectural Casting Alignment"]
    }
  ];

  const workflowSteps = [
    {
      num: "01",
      title: "Site Assessment",
      icon: <ClipboardCheck className="w-5 h-5 text-amber-500" />,
      desc: "We analyze structural integrity, map linear parameters, and supply a completely transparent, itemized estimate."
    },
    {
      num: "02",
      title: "Site Containment",
      icon: <HardHat className="w-5 h-5 text-amber-500" />,
      desc: "Erecting OSHA-compliant scaffolding, safety nets, and dust barriers to protect your yard and adjacent buildings."
    },
    {
      num: "03",
      title: "Precision Execution",
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      desc: "Grinding old mortar, setting fresh masonry, or pouring high-strength concrete utilizing premium specialized machinery."
    },
    {
      num: "04",
      title: "Final Inspection",
      icon: <CheckCircle className="w-5 h-5 text-amber-500" />,
      desc: "A thorough cleanup followed by an explicit quality walkthrough to ensure complete structural compliance."
    }
  ];

  const complianceItems = [
    {
      title: "DOT Sidewalk Violation Removal",
      icon: <Building className="w-5 h-5 text-amber-500" />,
      desc: "Received a city sidewalk notice? We grade, form, and pour sidewalk segments to perfectly meet municipal codes and clear your record quickly."
    },
    {
      title: "Local Building Code Adherence",
      icon: <ShieldCheck className="w-5 h-5 text-amber-500" />,
      desc: "From parapet height specifications to proper commercial expansion joints, our builds align seamlessly with New York construction ordinances."
    },
    {
      title: "Scaffolding & Rigging Safety",
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
      desc: "Safety is zero-compromise. We handle all operations using strict structural containment frameworks to limit property hazards."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* SECTION 1: INDUSTRIAL BANNER HERO */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-900 bg-gradient-to-b from-slate-900 to-slate-950 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-500/5 px-3 py-1 rounded-full border border-amber-500/20">
            ASEES Operational Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase text-white">
            Our Structural <span className="text-amber-500">Expertise</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Authorized building solutions engineered for local residential frameworks and complex commercial real estate envelopes across New York.
          </p>
        </div>
      </section>

      {/* SECTION 2: FLYER MEDIA PREVIEW BLOCK */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-gradient-to-r from-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-900 shadow-xl">
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Need Targeted Exterior Layouts?</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              We bring specialized heavy equipment, premium aggregate structural variants, and experienced personnel to deliver structural durability directly to your plot.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-950/60 border border-slate-800 px-3 py-1.5 rounded-xl">
                <ShieldCheck className="w-5 h-5 text-amber-400" /> Fully Licensed & Insured
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-950/60 border border-slate-800 px-3 py-1.5 rounded-xl">
                <HardHat className="w-5 h-5 text-amber-400" /> OSHA Safety Compliant
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md group">
            <Image 
              src="/showcase/businesscard.jpeg" 
              alt="ASEES Structural Service Capabilities Spec Flyer"
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
              sizes="(max-w-768px) 100vw, 400px"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE CAPABILITIES CARDS GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {fullServices.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-900/30 border border-slate-900 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:bg-slate-900/60 hover:border-slate-800 hover:shadow-2xl hover:shadow-amber-500/[0.02]"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/[0.03] to-transparent rounded-tr-3xl pointer-events-none group-hover:from-amber-500/[0.07] transition-all" />

              <div className="space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center transition-colors group-hover:border-amber-500/30">
                  {service.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors flex items-center justify-between">
                    {service.name}
                    <ArrowUpRight className="w-4 h-4 text-slate-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber-500" />
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed min-h-[72px]">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-900/80 space-y-2">
                {service.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500/70 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEW SECTION 4: THE WORKFLOW TIMELINE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest font-mono">Our Operational Roadmap</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">How We Manage Your Build</h2>
          <p className="text-slate-400 text-sm">
            We follow a structured deployment strategy to ensure precision structural tracking from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {workflowSteps.map((step, idx) => (
            <div key={idx} className="relative group bg-slate-900/10 border border-slate-900 p-6 rounded-2xl hover:border-slate-800 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="text-2xl font-black text-slate-800 group-hover:text-amber-500/20 font-mono transition-colors">
                  {step.num}
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEW SECTION 5: FIELD EXECUTION PREVIEW SHOWCASE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest font-mono">Real Field Production</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase leading-none">
              Rigid On-Site <br />
              <span className="text-amber-500">Quality Controls</span>
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              We do not rely on stock images. Our team captures unedited snapshots directly from active jobsites across neighborhoods like Queens to show our absolute transparency and finished caliber.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
                <span><strong>Masonry Precision:</strong> Alignment matching historic masonry frameworks.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
                <span><strong>Expansion Layouts:</strong> Clean layout cut paths to withstand heavy winter freezing cycles.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-900 bg-slate-900">
              <Image 
                src="/showcase/brick2.jpeg" 
                alt="Active masonry restoration build" 
                fill 
                className="object-cover"
                sizes="(max-w-768px) 100vw, 400px"
              />
              <div className="absolute bottom-2 left-2 px-2 py-1 bg-slate-950/80 rounded font-mono text-[10px] text-slate-400 border border-slate-800">
                Parapet Precision
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-900 bg-slate-900">
              <Image 
                src="/showcase/floor1.jpeg" 
                alt="Finished concrete expansion joints layout" 
                fill 
                className="object-cover"
                sizes="(max-w-768px) 100vw, 400px"
              />
              <div className="absolute bottom-2 left-2 px-2 py-1 bg-slate-950/80 rounded font-mono text-[10px] text-slate-400 border border-slate-800">
                Concrete Finish
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 6: LOCAL VIOLATIONS & COMPLIANCE GRID */}
      {/* <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest font-mono">City Code Adherence</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Violations Resolved & Remedied</h2>
          <p className="text-slate-400 text-sm">
            We work side-by-side with property owners to fix municipal structures safely and legally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {complianceItems.map((item, index) => (
            <div key={index} className="bg-slate-900/20 border border-slate-900 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/5 border border-amber-500/20 text-amber-500 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* SECTION 7: CONVERSION ENDING CAPSTONE */}
      <section className="py-20 px-4 text-center bg-gradient-to-t from-slate-900 to-transparent border-t border-slate-900/40">
        <div className="max-w-2xl mx-auto space-y-6">
          <Construction className="w-8 h-8 text-amber-500 mx-auto animate-pulse" />
          <h2 className="text-3xl font-black tracking-tight text-white">Have a Project Pending Inspection?</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
            Connect with Ricky directly to deploy our specialized team to your residential footprint or commercial structure today.
          </p>
          <div className="pt-2">
            <a 
              href="tel:9292789239" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-slate-950 font-extrabold text-sm uppercase tracking-wider rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/10"
            >
              <Phone className="w-4 h-4 fill-current" /> Call 929-278-9239 For Free Estimate
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}