import React from 'react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  return (
    <div className="py-24 bg-[#DCECF5] border-y border-[#FFF1E7]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <p className="text-xs font-bold tracking-widest text-[#805232]/80 uppercase mb-2">Simple and Secure</p>
          <h2 className="font-display text-3xl font-bold text-[#326080]">How NeighbourRent Works</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 flex flex-col md:flex-row items-start justify-between w-full relative">
            {/* Dashed line connecting steps (desktop only) */}
            <div className="hidden md:block absolute top-12 left-16 right-16 border-t-2 border-dashed border-[#FFF1E7]/50 z-0"></div>
            
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left flex-1 mb-10 md:mb-0 px-4">
              <div className="flex items-center gap-4 mb-5 w-full justify-center md:justify-start">
                <div className="w-8 h-8 rounded-full bg-white/60 text-[#805232] font-bold flex items-center justify-center text-sm shadow-sm">1</div>
                <div className="w-16 h-16 rounded-2xl bg-[#FFF1E7] shadow-sm flex items-center justify-center text-[#326080]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-[#326080] text-lg mb-2">Search</h3>
              <p className="text-sm text-[#326080]/80 max-w-[200px]">Find what you need from people near you.</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left flex-1 mb-10 md:mb-0 px-4">
              <div className="flex items-center gap-4 mb-5 w-full justify-center md:justify-start">
                <div className="w-8 h-8 rounded-full bg-white/60 text-[#805232] font-bold flex items-center justify-center text-sm shadow-sm">2</div>
                <div className="w-16 h-16 rounded-2xl bg-[#FFF1E7] shadow-sm flex items-center justify-center text-[#326080]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-[#326080] text-lg mb-2">Book</h3>
              <p className="text-sm text-[#326080]/80 max-w-[200px]">Choose your dates and send a request.</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left flex-1 px-4">
              <div className="flex items-center gap-4 mb-5 w-full justify-center md:justify-start">
                <div className="w-8 h-8 rounded-full bg-white/60 text-[#805232] font-bold flex items-center justify-center text-sm shadow-sm">3</div>
                <div className="w-16 h-16 rounded-2xl bg-[#FFF1E7] shadow-sm flex items-center justify-center text-[#326080]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-[#326080] text-lg mb-2">Rent</h3>
              <p className="text-sm text-[#326080]/80 max-w-[200px]">Pick it up or get it delivered and start using.</p>
            </div>

          </div>

          <div className="lg:w-64 flex flex-col items-center lg:items-end text-center lg:text-right shrink-0 mt-8 lg:mt-0 relative">
            <div className="absolute -top-12 -left-12 opacity-80 hidden lg:block text-[#FFF1E7] rotate-12 font-display italic text-lg">
              It's that simple!
            </div>
            {/* Draw a curved arrow SVG from text to button (only desktop) */}
            <svg className="absolute -top-6 left-12 hidden lg:block text-[#FFF1E7]" fill="none" viewBox="0 0 50 50" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M45,5 C40,25 25,35 15,35 M15,35 L20,30 M15,35 L20,40" />
            </svg>
            <div className="lg:hidden text-[#FFF1E7] font-display italic mb-4">
              It's that simple!
            </div>
            <Link to="/register" className="text-[#326080] hover:text-[#805232] font-semibold transition-colors flex items-center group lg:justify-end">
              Get Started <span className="group-hover:translate-x-1 transition-transform ml-1">&rarr;</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
