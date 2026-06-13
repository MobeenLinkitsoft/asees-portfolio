"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  HardHat,
  Hammer,
  Clock,
  FileText,
  ChevronDown,
  HelpCircle,
  Sparkles,
  Layers,
  Image as ImageIcon,
} from "lucide-react";

export default function HomePage() {
  // Carousel Data Configuration
  const carouselImages = [
    {
      src: "/showcase/brick2.jpeg",
      // title: "Precision Brick Parapet Wall",
      // category: "Masonry Restoration",
    },
    {
      src: "/showcase/fratwork1.jpeg",
    },
    {
      src: "/showcase/fratwork2.jpeg",
    },
    {
      src: "/showcase/fratwork3.jpeg",
    },
    {
      src: "/showcase/floor1.jpeg",
      // title: "Flawless Sidewalk Finish & Expansion Joints",
      // category: "Concrete Work",
    },
    {
      src: "/showcase/floor2.jpeg",
      // title: "On-Site Quality Inspection & Safety Compliance",
      // category: "Project Management",
    },
    {
      src: "/showcase/fratwork4.jpeg",
    },
    {
      src: "/showcase/floor3.jpeg",
      // title: "Premium Finished Backyard Concrete Patio",
      // category: "Concrete Work",
    },
    {
      src: "/showcase/brick5.jpeg",
      // title: "Commercial Grade Driveway Under Construction",
      // category: "Concrete Work",
    },
    {
      src: "/showcase/fratwork5.jpeg",
    },
    {
      src: "/showcase/waterproofbefore.jpeg",
    },
    {
      src: "/showcase/waterproofafter.jpeg",
    },
    {
      src: "/showcase/brick3.jpeg",
      // title: "Structural Parapet Boundary Alignment",
      // category: "Masonry",
    },
    {
      src: "/showcase/brick4.jpeg",
      // title: "Active Scaffolding Masonry Operations",
      // category: "Structural Repairs",
    },
    {
      src: "/showcase/fratwork.jpeg",
    },
  ];

  // Core Strengths Infographics Data
  const features = [
    {
      icon: <HardHat className="w-6 h-6 text-amber-500" />,
      title: "Safety Compliant",
      description:
        "Strict site containment, active scaffolding compliance, and structured hazard control frameworks on every structural build.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
      title: "Licensed & Insured",
      description:
        "Fully credentialed corporate general contractor operating validly across regional New York guidelines.",
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      title: "On-Time Execution",
      description:
        "Streamlined scheduling from pouring structural layers to masonry point operations without leaving tasks lingering.",
    },
    {
      icon: <FileText className="w-6 h-6 text-amber-500" />,
      title: "Transparent Estimates",
      description:
        "Zero hidden variables. Itemized project descriptions tracking exact materials, linear parameters, and labor frameworks.",
    },
  ];

  // Core Service Breakdowns
  const servicesList = [
    {
      title: "Parapet Walls & Lintels",
      desc: "Complete rebuilds, brick tie reinforcement, and concrete structure adjustments.",
    },
    {
      title: "Brick Grinding & Pointing",
      desc: "Mortar extraction and architectural restoration ensuring complete weatherproof sealing.",
    },
    {
      title: "Concrete Flatwork",
      desc: "Commercial walkways, multi-layered backyard patios, and expansion-joint driveways.",
    },
    {
      title: "Waterproofing & Restoration",
      desc: "High-density external architectural coatings to protect against structural water entry.",
    },
    {
      title: "Roofing",
      desc: "Comprehensive flat roof membrane applications, structural tear-offs, and localized leak repairs built for all-weather durability.",
    },
    {
      title: "Painting & Restoration",
      desc: "Premium exterior facade rejuvenation, detailed surface preparation, and protective architectural coatings for lasting visual appeal.",
    },
  ];

  // QA Accordion State Tracking
  const faqs = [
    {
      question: "Are your estimates completely free of charge?",
      answer:
        "Yes. We offer fully itemized, obligation-free site assessments across Queens and surrounding New York districts. We break down materials, parameters, and timeline expectations directly.",
    },
    {
      question: "How do you prevent concrete from cracking over time?",
      answer:
        "We utilize commercial-grade, reinforced concrete blends tailored perfectly to subgrade demands. Every installation includes precise slope calculations for runoff management and accurately spaced tool-cut expansion joints to adapt smoothly to seasonal shifts.",
    },
    {
      question:
        "What is your operational process for roof parapet restorations?",
      answer:
        "We erect secure, fully-compliant scaffolding units, strip away failing historic brickwork layers safely, install code-compliant structural ties and flashing elements, and lay premium high-durability brickwork finished with architectural joint profiles.",
    },
    {
      question:
        "Is ASEES Construction officially licensed to manage projects in New York?",
      answer:
        "Absolutely. We are a fully registered, licensed, and comprehensively insured structural entity. Your property footprint is legally protected through every phase of our operations.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0); // Default open the first one

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1,
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* SECTION 1: HERO BACKGROUND OPTIC OVERLAY (TEXT CENTERED) */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-900 bg-slate-950 overflow-hidden min-h-[85vh] flex items-center justify-center">
        {/* Immersive background texture image with deep black opacity filter overlay */}

        <div className="absolute inset-0 z-0">
          <Image
            src="/showcase/bgimg.jpg" // Swap this path with your specific background construction image as desired
            alt="ASEES Structural Heavy Construction Framework Background Background"
            fill
            priority
            className="object-cover object-center grayscale opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950 pointer-events-none" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mx-auto">
            <ShieldCheck className="w-4 h-4" /> Fully Licensed & Insured
            Contractor
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none uppercase">
            ASEES <br className="sm:hidden" />
            <span className="text-amber-500">GENERAL CONSTRUCTION</span> CORP
          </h1>

          <p className="text-base sm:text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Quality work built to last. Specializing in premier masonry
            restorations, parapet wall builds, structural brick grinding, and
            custom concrete flatwork across New York.
          </p>

          {/* Main Direct Quick Contact Grid Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-3xl mx-auto text-left font-mono text-xs text-slate-300 border-t border-slate-900/80 mt-6">
            <div className="flex items-center gap-3 bg-slate-900/30 p-3 rounded-xl border border-slate-900">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" />
              <div>
                <p className="font-bold text-white">929-278-9239</p>
                <p className="text-[12px] text-slate-500 font-sans">
                  Ricky (Estimates)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-slate-900/30 p-3 rounded-xl border border-slate-900">
              <Mail className="w-4 h-4 text-amber-500 shrink-0" />
              <span className="truncate text-[12px]">
                aseesconstruction00@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-3 bg-slate-900/30 p-3 rounded-xl border border-slate-900">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Queens, New York City</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INFORMATIVE VALUES BLOCK */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 transition-all duration-300 hover:bg-slate-900/70 hover:border-slate-800 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center mb-4 border border-slate-800 group-hover:border-amber-500/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NEW SECTION 3: WIDE HORIZONTAL BANNER BLOCK (banner3.png) */}
      <section className="w-full border-b border-slate-900 bg-slate-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full aspect-[21/9] sm:aspect-[32/10] rounded-3xl overflow-hidden border border-slate-900 shadow-xl bg-slate-900 group">
            <Image
              src="/banner3.png"
              alt="ASEES Structural Rigging and Site Fleet Banner Overview"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              sizes="(max-w-1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-slate-950/30 pointer-events-none" />
          </div>
          <div className="flex items-center justify-between mt-3 px-2 font-mono text-[10px] tracking-wider text-slate-500 uppercase">
            <span>Asset Catalog Ref: banner3.png</span>
            <span className="flex items-center gap-1">
              <ImageIcon className="w-3 h-3" /> Production Grade Layout
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 4: LIVE FIELD PROJECTS CAROUSEL */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Our Work Speaks For Itself
          </h2>
          <p className="text-slate-400">
            Explore unedited pictures from our active and recently completed job
            sites across New York. No stock photos—just real, expert
            craftsmanship.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto group">
          <div className="relative h-[32rem] sm:h-[40rem] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900">
            <Image
              src={carouselImages[currentIndex].src}
              alt={"Frat Work"}
              fill
              className="object-cover object-center transition-all duration-500 scale-100"
              sizes="(max-w-1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />

            {/* <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 space-y-2">
              <span className="inline-block px-3 py-1 bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-widest rounded-md">
                {carouselImages[currentIndex].category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {carouselImages[currentIndex].title}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Site Verification Identifier:{" "}
                {carouselImages[currentIndex].src.replace("/showcase/", "")}
              </p>
            </div> */}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/80 border border-slate-800 text-white transition-all hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 focus:outline-none shadow-xl backdrop-blur-sm z-10 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
            aria-label="Previous Slide Project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/80 border border-slate-800 text-white transition-all hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 focus:outline-none shadow-xl backdrop-blur-sm z-10 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 transition-all rounded-full ${
                  index === currentIndex
                    ? "w-8 bg-amber-500"
                    : "w-2 bg-slate-800 hover:bg-slate-700"
                }`}
                aria-label={`Go to image slide slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: LEGAL & WARRANTY DISCLAIMERS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-900">
        <div className="bg-slate-900/30 border border-slate-800/80 rounded-3xl p-6 sm:p-10 space-y-8 shadow-lg">
          {/* Concrete Disclaimer */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-amber-500 font-bold uppercase tracking-widest text-sm sm:text-base">
              <FileText className="w-5 h-5" /> Concrete Disclaimer
            </div>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Concrete is a natural product and may develop hairline cracks,
              color variations, shrinkage, or normal weathering. Such conditions
              are not considered workmanship defects.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-slate-800/50" />

          {/* Workmanship Warranty */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-amber-500 font-bold uppercase tracking-widest text-sm sm:text-base">
              <ShieldCheck className="w-5 h-5" /> 10-Year Limited Workmanship
              Warranty
            </div>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              This warranty applies only to defects directly caused by ASEES
              workmanship. Exclusions include settlement, structural movement,
              flooding, freeze-thaw damage, tree roots, misuse, overloading,
              third-party alterations, and acts of nature.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: CORE SERVICES ACCORDION GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-500/5 px-2.5 py-1 rounded border border-amber-500/10">
              <Layers className="w-3.5 h-3.5" /> Capabilities Checklist
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Our Specialized Capabilities
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              From historic deep masonry pointing restorations to heavy
              structural ground stabilization, we use tailored commercial
              mixtures built engineered specifically for long-term wear
              resistance.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {servicesList.map((service, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-900/60 flex gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center shrink-0 font-bold text-sm font-mono">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{service.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: ALTERNATE PROMOTIONAL GRID DESIGN */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-900/20 p-6 sm:p-10 rounded-3xl border border-slate-900">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Looking for Custom Concrete Work?
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Our crews prepare foundations, stamp backyards, and align
              multi-tiered driveways with absolute precision. Take a look at our
              targeted specialty services breakdown flyer.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-950 text-slate-300 text-xs font-mono rounded-lg border border-slate-800">
              <Hammer className="w-3.5 h-3.5 text-amber-500" /> Commercial Mix
              Standards
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-800">
            <Image
              src="/showcase/businesscard.jpeg"
              alt="ASEES Concrete Layout Solutions Promotional Advertisement"
              fill
              className="object-contain bg-slate-950"
            />
          </div>
        </div>
      </section>

      {/* SECTION 7: INTERACTIVE QA ACCORDION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-slate-900">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-500/5 px-2.5 py-1 rounded border border-amber-500/10">
            <HelpCircle className="w-3.5 h-3.5" /> Project FAQ
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm">
            Everything you need to verify before deploying a professional
            construction team to your property.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-slate-900/30 border border-slate-900 rounded-2xl overflow-hidden transition-colors duration-300 hover:border-slate-800"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                >
                  <span className="font-bold text-white text-base sm:text-lg group-hover:text-amber-400 transition-colors pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-amber-500" : ""}`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen
                      ? "max-h-[500px] border-t border-slate-900/60 bg-slate-900/10"
                      : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-sm text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 8: CONVERSION ENDING CTA CAPSTONE */}
      <section className="py-16 px-4 text-center bg-gradient-to-t from-slate-900 to-transparent border-t border-slate-900/40">
        <div className="max-w-2xl mx-auto space-y-6">
          <Sparkles className="w-8 h-8 text-amber-500 mx-auto" />
          <h2 className="text-3xl font-black tracking-tight text-white">
            Ready to Start Your Build?
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Get in touch with Ricky directly for prompt scheduling or structural
            site planning. We have the crew and machinery ready.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="tel:9292789239"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-slate-950 font-bold rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 fill-current" /> Call 929-278-9239
            </a>
            <a
              href="mailto:aseesconstruction00@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white border border-slate-800 font-bold rounded-xl hover:bg-slate-800/80 transition-colors"
            >
              <Mail className="w-4 h-4" /> Email Documentations
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
