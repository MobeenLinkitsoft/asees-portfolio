"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  HardHat,
  Construction,
  Award,
  Users2,
  Building2,
  CheckCircle2,
  Phone,
  Briefcase,
  Hammer,
  Shield,
  Handshake,
} from "lucide-react";

export default function AboutPage() {
  const companyPillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
      title: "Full Asset Protection",
      desc: "Operating with ironclad commercial general liability coverage, worker's compensation, and comprehensive site rigging licenses.",
    },
    {
      icon: <HardHat className="w-6 h-6 text-amber-500" />,
      title: "OSHA Field Enforcement",
      desc: "Every scaffold built, grind executed, or concrete batch mixed follows strict structural safety guidelines to eliminate site liabilities.",
    },
    {
      icon: <Award className="w-6 h-6 text-amber-500" />,
      title: "Unedited Field Verification",
      desc: "We stand entirely by our real field proof. Every portfolio layout, joint texture, and brick layer displays real, unedited project work.",
    },
    {
      icon: <Building2 className="w-6 h-6 text-amber-500" />,
      title: "Local Code Expertise",
      desc: "Specialized in aligning exterior structures directly with local structural guidelines to remove outstanding municipal violations seamlessly.",
    },
  ];

  const teamMembers = [
    {
      name: "Ricky",
      role: "Project Manager & Senior Estimator",
      desc: "Manages on-site parameters layout, code diagnostics, material logistics, and direct property-owner coordination blueprints.",
      phone: "929-278-9239",
    },
    {
      name: "Office Dispatch & Support",
      role: "Corporate Intake & Permitting",
      desc: "Coordinates corporate billing contracts, city compliance filings, safety documentation routing, and operational schedules.",
      phone: "347-509-6977",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* SECTION 1: HEADER CAPSTONE */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-900 bg-gradient-to-b from-slate-900 to-slate-950 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-500/5 px-3 py-1 rounded-full border border-amber-500/20">
            <Building2 className="w-3.5 h-3.5" /> Built To Last
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase text-white">
            The Team Behind <span className="text-amber-500">The Build</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our operational guidelines, strict on-site safety policies,
            and the dedicated personnel managing local masonry restorations.
          </p>
        </div>
      </section>

      {/* SECTION 2: THE FOUNDING BLUEPRINT STORY (UPDATED PER SCREENSHOT) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Adjusted content row mirroring the layout from Screenshot 2026-06-09 at 11.39.17 PM.png */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-white tracking-tight">
                Our Story
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                ASEES General Construction Corp was founded with a simple mission:
                deliver exceptional masonry and roofing services with integrity
                and unmatched craftsmanship.
              </p>
            </div>

            {/* Sub-grid block for experience and values metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block font-mono">
                  Experience
                </span>
                <p className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  15+ Years
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Serving New York homeowners and businesses with pride.
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block font-mono mb-1">
                  Values
                </span>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <Hammer className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Quality craftsmanship above all</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Shield className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Licensed and fully insured</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Handshake className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Customer focused</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed border-t border-slate-900 pt-4">
              Whether it's a simple repair or a full building restoration, ASEES is committed to exceeding expectations on every project.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-slate-900 bg-slate-900 shadow-xl group">
              <Image
                src="/showcase/floor2.jpeg"
                alt="Active site management inspection parameters"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-768px) 100vw, 350px"
              />
              <div className="absolute top-3 left-3 bg-slate-950/90 border border-slate-800 text-[10px] font-mono font-bold text-slate-400 px-2 py-0.5 rounded">
                Site Verification
              </div>
            </div>
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-slate-900 bg-slate-900 shadow-xl group sm:mt-8">
              <Image
                src="/showcase/brick5.jpeg"
                alt="Active heavy rebar driveway configuration"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-768px) 100vw, 350px"
              />
              <div className="absolute top-3 left-3 bg-slate-950/90 border border-slate-800 text-[10px] font-mono font-bold text-slate-400 px-2 py-0.5 rounded">
                Heavy Aggregate Preparation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE 4 PILLARS OF INTEGRITY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900 bg-gradient-to-b from-slate-950 via-slate-900/10 to-slate-950">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest font-mono">
            Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Our Operational Standards
          </h2>
          <p className="text-slate-400 text-sm">
            Every crew member on an active lot follows these foundational
            compliance markers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-900/20 border border-slate-900 p-6 rounded-2xl space-y-4 hover:border-slate-800 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center transition-colors group-hover:border-amber-500/30">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: THE LEADERSHIP MATRIX */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest font-mono">
            Field Commanders
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Command & Coordination
          </h2>
          <p className="text-slate-400 text-sm">
            Direct endpoints to access our project supervisors, routing
            specialists, and administrators instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-slate-900/50 to-slate-900/10 border border-slate-900 p-6 sm:p-8 rounded-3xl space-y-4 flex flex-col justify-between hover:border-slate-800 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/5 border border-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs text-amber-400 font-mono tracking-wider uppercase">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal pt-2 border-t border-slate-900/60">
                  {member.desc}
                </p>
              </div>

              <div className="pt-4">
                <a
                  href={`tel:${member.phone.replace(/-/g, "")}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs font-bold font-mono tracking-wider text-slate-200 uppercase rounded-xl transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-500" /> Connect:{" "}
                  {member.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: STRICT COMPLIANCE BARRIER CHECKLIST */}
      {/* <section className="py-16 px-4 max-w-5xl mx-auto border-t border-slate-900">
        <div className="bg-slate-900/10 border border-slate-900 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <Construction className="w-6 h-6 text-amber-500" />
            <h3 className="text-xl font-bold text-white tracking-tight uppercase">
              Vetted Corporate Protection Framework
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Property managers and residential boards across New York demand
            concrete proof of coverage before allowing equipment on site. We
            provide comprehensive safety files directly to your board or digital
            screening vendor upon contract finalization.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-mono text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-500" /> General
              Liability Certified
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-500" /> Workers Comp
              Enabled
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-500" /> Scaffold
              Rigging Compliant
            </div>
          </div>
        </div>
      </section> */}

      {/* SECTION 6: CLOSING CAPSTONE CTA */}
      <section className="py-20 px-4 text-center bg-gradient-to-t from-slate-900 to-transparent border-t border-slate-900/40">
        <div className="max-w-2xl mx-auto space-y-6">
          <Briefcase className="w-8 h-8 text-amber-500 mx-auto animate-pulse" />
          <h2 className="text-3xl font-black tracking-tight text-white uppercase">
            Deploy Our Professional Crew
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
            Put specialized masonry machinery and seasoned contractors to work
            on your structural framework today.
          </p>
          <div className="pt-2">
            <a
              href="tel:9292789239"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-slate-950 font-extrabold text-sm uppercase tracking-wider rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/10"
            >
              <Phone className="w-4 h-4 fill-current" /> Call Ricky For Free
              Estimate
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}