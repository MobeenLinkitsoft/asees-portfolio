'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Send, 
  AlertTriangle, 
  CheckCircle2,
  Building2,
  Construction
} from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    projectType: 'Masonry Restoration',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, hook this up to your preferred API or email service
    console.log('Intake Form Data:', formState);
    setSubmitted(true);
  };

  const nycDistricts = [
    "Queens (Primary Hub)",
    "Brooklyn",
    "Manhattan",
    "Bronx",
    "Surrounding Nassau County"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* SECTION 1: HEADER CAPSTONE */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-900 bg-gradient-to-b from-slate-900 to-slate-950 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-500/5 px-3 py-1 rounded-full border border-amber-500/20">
            <Clock className="w-3.5 h-3.5" /> Response Window: Under 24 Hours
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase text-white">
            Request A Field <span className="text-amber-500">Estimate</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Connect with our dispatch desk to arrange raw site parameter mapping, blueprints analysis, or urgent municipal violation corrections.
          </p>
        </div>
      </section>

      {/* SECTION 2: CORE COMMUNICATIONS AND FORM HUB */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column A: Direct Credentials & Contacts */}
          <div className="lg:col-span-5 space-y-8">
            {/* <div className="space-y-3">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Direct Connections</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Skip the lines. Reach out directly to speak with project management regarding material variables, scheduling queues, or corporate documents.
              </p>
            </div> */}

            {/* Structured Contact Stack */}
            <div className="space-y-4">
              <div className="bg-slate-900/30 border border-slate-900 p-5 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/5 border border-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500">Project Manager Direct</h4>
                  <p className="text-lg font-bold text-white mt-0.5">929-278-9239</p>
                  <p className="text-xs text-slate-400 font-medium">Ask for Ricky</p>
                </div>
              </div>

              <div className="bg-slate-900/30 border border-slate-900 p-5 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/5 border border-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500">Main Office Line</h4>
                  <p className="text-lg font-bold text-white mt-0.5">347-509-6977</p>
                  <p className="text-xs text-slate-400 font-medium">Corporate Intake & Billing Desk</p>
                </div>
              </div>

              <div className="bg-slate-900/30 border border-slate-900 p-5 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/5 border border-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500">Digital Documentations</h4>
                  <p className="text-base sm:text-lg font-mono font-bold text-white mt-0.5 truncate select-all">
                    aseesconstruction00@gmail.com
                  </p>
                  <p className="text-xs text-slate-400 font-medium">Send plans, blueprints, or city notes here</p>
                </div>
              </div>

              <div className="bg-slate-900/30 border border-slate-900 p-5 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/5 border border-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500">Operational Hub</h4>
                  <p className="text-lg font-bold text-white mt-0.5">Queens, New York City</p>
                  <p className="text-xs text-slate-400 font-medium">Deploying crews regularly across all boroughs</p>
                </div>
              </div>
            </div>

            {/* Credential Seals */}
            <div className="pt-4 flex flex-wrap gap-3 text-xs text-slate-400 font-mono">
              <div className="inline-flex items-center gap-1.5 bg-slate-900/40 border border-slate-900 px-3 py-2 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Fully Licensed
              </div>
              <div className="inline-flex items-center gap-1.5 bg-slate-900/40 border border-slate-900 px-3 py-2 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> General Liability Insured
              </div>
            </div>
          </div>

          {/* Column B: Commercial Estimates Intake Form */}
          <div className="lg:col-span-7 bg-gradient-to-b from-slate-900/40 to-slate-900/10 border border-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/[0.01] via-transparent to-transparent pointer-events-none rounded-3xl" />
            
            {submitted ? (
              <div className="py-16 text-center space-y-4 max-w-md mx-auto">
                <CheckCircle2 className="w-12 h-12 text-amber-500 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-white">Intake Form Transmitted</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Thank you. Your layout metrics have been saved. Ricky or our office dispatcher will review the details and confirm your site visit framework via phone.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-amber-500 underline uppercase tracking-wider"
                >
                  Submit Alternative Specification
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white tracking-tight">Get in Touch</h3>
                  <p className="text-xs text-slate-500">Provide approximate property metrics to streamline scheduling processes.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Your Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-950 border border-slate-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Callback Phone</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. 555-555-5555"
                      className="w-full bg-slate-950 border border-slate-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. john@example.com"
                      className="w-full bg-slate-950 border border-slate-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Property Location (Borough/City)</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Astoria, Queens"
                      className="w-full bg-slate-950 border border-slate-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                      value={formState.location}
                      onChange={(e) => setFormState({...formState, location: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Core Specialty Required</label>
                  <select 
                    className="w-full bg-slate-950 border border-slate-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors appearance-none cursor-pointer"
                    value={formState.projectType}
                    onChange={(e) => setFormState({...formState, projectType: e.target.value})}
                  >
                    <option value="Masonry Restoration">Brick Grinding & Pointing / Facades</option>
                    <option value="Parapet Walls & Lintels">Parapet Walls & Structural Steel Lintels</option>
                    <option value="Concrete Flatwork">Concrete Sidewalks / Patios / Driveways</option>
                    <option value="Waterproofing">Waterproofing & Leak Mitigation</option>
                    <option value="DOT Violation Clearance">DOT Sidewalk Violation Corrections</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Brief Scope & Description</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Describe linear layout parameters, approximate heights, masonry condition, or specific city structural violations notices..."
                    className="w-full bg-slate-950 border border-slate-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-amber-500 text-slate-950 font-extrabold text-sm uppercase tracking-wider rounded-xl transition-transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-amber-500/10"
                >
                  <Send className="w-4 h-4 fill-current" /> Send Message for Free Quote
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* NEW SECTION 3: GEOGRAPHIC SERVICE COVERAGE COVERAGE AREA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/10 p-6 sm:p-10 rounded-3xl border border-slate-900">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-amber-500 uppercase tracking-widest bg-amber-500/5 px-2.5 py-1 rounded border border-amber-500/10">
              <Construction className="w-3.5 h-3.5" /> Geographic Footprint
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">Active Coverage Zones</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Our heavy vehicles and structural rigging crews maintain active deployment loops daily within the following core administrative sectors:
            </p>
          </div>
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
            {nycDistricts.map((district, index) => (
              <div key={index} className="flex items-center gap-2 bg-slate-950 border border-slate-900 p-3 rounded-xl text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{district}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 4: HOTLINE EMERGENCY CONTINGENCY BLOCK */}
      <section className="py-16 px-4 bg-gradient-to-t from-red-950/20 to-transparent border-t border-red-950/30 text-center">
        <div className="max-w-2xl mx-auto bg-red-950/10 border border-red-500/10 p-6 sm:p-8 rounded-3xl space-y-4 backdrop-blur-sm">
          <AlertTriangle className="w-8 h-8 text-red-500 mx-auto animate-pulse" />
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Active Exterior Facade Leaks or Bowing?</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md mx-auto">
            If you are currently experiencing structural failure, rapid water entry from roof parapets, or high-risk stone shedding configurations, bypass the online intake form entirely.
          </p>
          <div className="pt-2">
            <a 
              href="tel:9292789239" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-colors shadow-lg shadow-red-600/10"
            >
              <Phone className="w-4 h-4 fill-current" /> Call PM Ricky Instantly: 929-278-9239
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}